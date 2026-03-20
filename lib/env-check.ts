interface EnvVarDef {
  key: string;
  validate?: (value: string) => boolean;
  hint: string;
  optional?: boolean;
}

const REQUIRED: EnvVarDef[] = [
  {
    key: "SESSION_SECRET",
    validate: (v) => v.length >= 64,
    hint: "node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\"",
  },
  {
    key: "ADMIN_PASSWORD_HASH",
    validate: (v) => v.startsWith("$2b$"),
    hint: "npx tsx scripts/generate-admin-hash.ts \"VotreMotDePasse\"",
  },
  {
    key: "STRIPE_SECRET_KEY",
    validate: (v) => v.startsWith("sk_"),
    hint: "dashboard.stripe.com → Developers → API Keys",
  },
  {
    key: "UPSTASH_REDIS_REST_URL",
    validate: (v) => v.startsWith("https://"),
    hint: "console.upstash.com → votre database → REST URL",
  },
  {
    key: "UPSTASH_REDIS_REST_TOKEN",
    hint: "console.upstash.com → votre database → REST Token",
  },
  {
    key: "RESEND_API_KEY",
    validate: (v) => v.startsWith("re_"),
    hint: "resend.com/api-keys",
  },
  {
    key: "KITTY_EMAIL",
    validate: (v) => v.includes("@"),
    hint: "Email de reception des formulaires contact",
  },
];

const OPTIONAL: EnvVarDef[] = [
  {
    key: "NEXT_PUBLIC_GA_ID",
    hint: "Google Analytics — analytics desactive si absent",
    optional: true,
  },
  {
    key: "NEXT_PUBLIC_SANITY_PROJECT_ID",
    hint: "CMS Sanity — requis en V1.5 uniquement",
    optional: true,
  },
];

export function validateEnv(): void {
  // Ne pas valider en CI basique (les vars ne sont pas toutes dispo)
  if (process.env.SKIP_ENV_CHECK === "true") return;

  const errors: string[] = [];

  for (const def of REQUIRED) {
    const value = process.env[def.key];
    if (!value) {
      errors.push(`  ✗ ${def.key} — manquante\n    → ${def.hint}`);
      continue;
    }
    if (def.validate && !def.validate(value)) {
      errors.push(`  ✗ ${def.key} — valeur invalide\n    → ${def.hint}`);
    }
  }

  for (const def of OPTIONAL) {
    if (!process.env[def.key]) {
      console.warn(`[Kitty-Octa] ⚠️  ${def.key} absente — ${def.hint}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `\n[Kitty-Octa] ❌ Variables d'environnement invalides :\n\n` +
        errors.join("\n\n") +
        `\n\n→ Copier .env.example vers .env.local et remplir les valeurs.\n`
    );
  }
}

