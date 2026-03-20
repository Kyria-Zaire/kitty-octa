import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations/contact";
import logger from "@/lib/logger";

export async function POST(req: NextRequest) {
  // 1. Rate limiting — AVANT toute autre logique
  const { limited, remaining, reset } = await checkRateLimit(req, "contact");
  if (limited) {
    const retryAfter = reset > 0 ? Math.ceil((reset - Date.now()) / 1000) : 60;
    return NextResponse.json(
      { error: "Trop de requêtes. Veuillez réessayer dans quelques minutes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(1, retryAfter)),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // 2. Parse du body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de la requête invalide." },
      { status: 400 }
    );
  }

  // 3. Validation Zod côté serveur
  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Données invalides.",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  // 4. Traitement — SECURITY: on ne logue JAMAIS les données personnelles
  const submissionId = randomUUID();
  const { eventType } = parsed.data; // seul champ non-PII qu'on peut logger

  try {
    // TODO(Sprint1): Envoyer l'email via Resend
    // await sendContactEmail(parsed.data)

    // SECURITY: Log anonymisé uniquement
    logger.info("Formulaire contact reçu", {
      submissionId,
      eventType: eventType ?? "non-précisé",
      remaining,
    });

    return NextResponse.json(
      {
        success: true,
        submissionId,
        message: "Votre demande a bien été reçue. Kitty vous contactera sous 24h.",
      },
      { status: 200 }
    );
  } catch (err) {
    logger.error("Erreur traitement formulaire contact", {
      submissionId,
      message: (err as Error).message,
    });
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

// Bloquer les autres méthodes HTTP explicitement
export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée." }, { status: 405 });
}

