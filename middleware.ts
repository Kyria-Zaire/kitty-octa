import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* ══════════════════════════════════════════════════
 * Middleware — Security Headers & Route Protection
 *
 * 1. Security headers on ALL responses
 * 2. Admin routes: redirect to /admin/login if no session_token cookie
 * 3. Admin login: redirect to /admin if already authenticated
 * ══════════════════════════════════════════════════ */

const SESSION_COOKIE_NAME = "session_token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  /* ── Security Headers (all routes) ── */
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  const hasSession = request.cookies.has(SESSION_COOKIE_NAME);

  /* ── Admin Login Page: redirect to dashboard if already authenticated ── */
  if (pathname === "/admin/login") {
    if (hasSession) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return response;
  }

  /* ── Admin Routes: redirect to login if NOT authenticated ── */
  if (pathname.startsWith("/admin")) {
    if (!hasSession) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon)
     * - public folder assets
     * - api routes (handled separately)
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|api/).*)",
  ],
};
