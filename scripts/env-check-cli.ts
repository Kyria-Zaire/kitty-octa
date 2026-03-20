import { validateEnv } from "../lib/env-check";

try {
  validateEnv();
  console.log("\n✅ Toutes les variables d'environnement sont valides.\n");
} catch (err) {
  console.error((err as Error).message);
  process.exit(1);
}

