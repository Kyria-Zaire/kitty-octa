import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest } from "next/server";
import logger from "@/lib/logger";

// PERF: Instance Redis partagée entre les appels (singleton pattern)
// Fallback mock en environnement test pour ne pas appeler Upstash en CI
const isTest = process.env.NODE_ENV === "test";
const hasRedisEnv =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const redis = isTest || !hasRedisEnv ? null : Redis.fromEnv();

function createLimiter(requests: number, window: `${number} ${"ms" | "s" | "m" | "h" | "d"}`) {
  if (isTest || !redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(requests, window),
    analytics: false, // desactiver en dev pour eviter les writes inutiles
    ephemeralCache: new Map(), // cache local pour eviter les appels Redis redondants
  });
}

// Limiteurs par endpoint — ajuster selon les besoins
const limiters = {
  contact: createLimiter(5, "10 m"), // 5 requetes / 10 minutes
  adminLogin: createLimiter(10, "5 m"), // 10 tentatives / 5 minutes
  default: createLimiter(60, "1 m"), // 60 requetes / minute
} as const;

type LimiterKey = keyof typeof limiters;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "anonymous"
  );
}

export interface RateLimitResult {
  limited: boolean;
  remaining: number;
  reset: number; // timestamp ms
}

export async function checkRateLimit(
  req: NextRequest,
  key: LimiterKey = "default"
): Promise<RateLimitResult> {
  // En test ou si Redis non configure -> jamais limiter
  if (isTest || !limiters[key]) {
    return { limited: false, remaining: 999, reset: 0 };
  }

  const ip = getClientIp(req);
  const limiter = limiters[key];
  if (!limiter) {
    return { limited: false, remaining: 999, reset: 0 };
  }

  try {
    const { success, remaining, reset } = await limiter.limit(ip);

    if (!success) {
      logger.warn("Rate limit atteint", { key, ip: `${ip.slice(0, 8)}***` });
    }

    return { limited: !success, remaining, reset };
  } catch (err) {
    // ARCH: En cas d'erreur Redis -> on laisse passer (fail open)
    // Mieux qu'un faux positif qui bloquerait des utilisateurs legitimes
    logger.error("Rate limit Redis error — fail open", {
      key,
      message: (err as Error).message,
    });
    return { limited: false, remaining: 0, reset: 0 };
  }
}

