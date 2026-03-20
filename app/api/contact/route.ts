import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * TODO(Sprint1): à réécrire — endpoint contact à implémenter (validation + rate limiting + envoi email).
 * Stub temporaire pour éviter de casser le build après migration.
 */
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    {
      success: false,
      error: "Not implemented — Sprint 1",
    },
    { status: 501 }
  );
}

