import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const SESSION_COOKIE = "session_token";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24h en secondes

// SECURITY: Toujours crypto.randomBytes — generation pseudo-aleatoire interdite
export function generateSessionToken(): string {
  return randomBytes(32).toString("hex"); // 64 chars hex, imprevisible
}

// SECURITY: Comparaison bcrypt uniquement — jamais de comparaison string en clair
export async function verifyAdminPassword(input: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) {
    throw new Error("[Auth] ADMIN_PASSWORD_HASH non configuree — voir .env.example");
  }
  if (!hash.startsWith("$2b$")) {
    throw new Error("[Auth] ADMIN_PASSWORD_HASH invalide — doit etre un hash bcrypt $2b$");
  }
  // SECURITY: bcrypt.compare est resistant aux timing attacks
  return bcrypt.compare(input, hash);
}

export async function createSession(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

// Verifie le format du token (64 chars hex) — pas le token lui-meme
export function isValidTokenFormat(token: string): boolean {
  return /^[a-f0-9]{64}$/.test(token);
}
