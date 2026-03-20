// SECURITY: Ne jamais logger nom/email/telephone/message (PII)
// Uniquement : IDs, statuts, types, codes d'erreur, timestamps

type LogLevel = "info" | "warn" | "error";
type LogContext = Record<string, string | number | boolean | undefined>;

function formatLog(level: LogLevel, message: string, context?: LogContext): string {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    env: process.env.NEXT_PUBLIC_APP_ENV ?? process.env.NODE_ENV ?? "unknown",
    ...(context ?? {}),
  };
  if (process.env.NODE_ENV === "development") {
    const ctx = context ? ` ${JSON.stringify(context)}` : "";
    return `[${entry.timestamp}] ${level.toUpperCase().padEnd(5)} — ${message}${ctx}`;
  }
  return JSON.stringify(entry); // JSON une ligne en prod (Vercel logs)
}

const isSilent = process.env.NODE_ENV === "test";

const logger = {
  info: (message: string, context?: LogContext): void => {
    if (!isSilent) console.info(formatLog("info", message, context));
  },
  warn: (message: string, context?: LogContext): void => {
    if (!isSilent) console.warn(formatLog("warn", message, context));
  },
  error: (message: string, context?: LogContext): void => {
    if (!isSilent) console.error(formatLog("error", message, context));
  },
};

export default logger;

