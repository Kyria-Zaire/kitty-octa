import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password || password.length < 12) {
  console.error('\n❌ Usage : npx tsx scripts/generate-admin-hash.ts "VotreMotDePasse"');
  console.error("   Le mot de passe doit faire au moins 12 caractères.\n");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

console.log("\n✅ Hash bcrypt généré (saltRounds=12) :");
console.log("\nColler dans .env.local :");
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
console.log("\n⚠️  Ne jamais committer ce hash dans le code source.");
console.log("⚠️  Ne jamais partager ce hash.\n");

