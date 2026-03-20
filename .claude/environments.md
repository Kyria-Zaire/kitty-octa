# ENVIRONNEMENTS — Guide Complet Kitty-Octa

## Vue d'ensemble

| Env      | URL                    | Branch    | DB               | Stripe        | Sanity     |
|----------|------------------------|-----------|------------------|---------------|------------|
| DEV      | localhost:3000         | feature/* | kittyocta_dev    | sk_test_...   | staging    |
| RECETTE  | rec.kitty-octa.fr      | recette   | kittyocta_rec    | sk_test_...   | staging    |
| PREPROD  | pprod.kitty-octa.fr    | preprod   | kittyocta_pprod  | sk_test_...   | staging    |
| PROD     | kitty-octa.fr         | main      | kittyocta_prod   | sk_live_...   | production |

---

## Fichiers d'environnement

### .env.local (DEV — gitignored)
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development

# Admin
ADMIN_PASSWORD_HASH=$2b$12$...     # générer avec: node -e "require('bcryptjs').hash('monpass',12).then(console.log)"
SESSION_SECRET=                     # générer avec: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Stripe TEST
STRIPE_SECRET_KEY=sk_test_51...
NEXT_PUBLIC_STRIPE_KEY=pk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_...    # depuis: stripe listen --forward-to localhost:3000/api/webhook/stripe

# Upstash Redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Analytics (désactivé en dev)
NEXT_PUBLIC_GA_ID=

# Email
RESEND_API_KEY=re_test_...
KITTY_EMAIL=test@kitty-octa.fr

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=staging
SANITY_API_TOKEN=
```

### .env.example (commité — valeurs placeholder)
```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_ENV=development
ADMIN_PASSWORD_HASH=HASH_BCRYPT_ICI
SESSION_SECRET=SECRET_64_BYTES_HEX_ICI
STRIPE_SECRET_KEY=sk_test_XXXXX
NEXT_PUBLIC_STRIPE_KEY=pk_test_XXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXX
UPSTASH_REDIS_REST_URL=https://XXXXX.upstash.io
UPSTASH_REDIS_REST_TOKEN=XXXXX
NEXT_PUBLIC_GA_ID=G-XXXXX
RESEND_API_KEY=re_XXXXX
KITTY_EMAIL=contact@kitty-octa.fr
NEXT_PUBLIC_SANITY_PROJECT_ID=XXXXX
NEXT_PUBLIC_SANITY_DATASET=staging
SANITY_API_TOKEN=XXXXX
```

---

## Webhooks Stripe — Configuration

### DEV (local)
```bash
# Terminal séparé
stripe listen --forward-to localhost:3000/api/webhook/stripe
# → copier le whsec_... affiché dans STRIPE_WEBHOOK_SECRET
```

### RECETTE / PREPROD / PROD
Dans le Stripe Dashboard → Developers → Webhooks → Add endpoint :
```
Endpoint URL : https://{env}.kitty-octa.fr/api/webhook/stripe
Events à écouter :
  - payment_intent.succeeded
  - payment_intent.payment_failed
  - checkout.session.completed
  - customer.subscription.created
  - customer.subscription.updated
  - customer.subscription.deleted
```

---

## Scripts de base de données

### Seed DEV (données fictives)
```bash
npm run db:seed:dev
# Génère :
# - 50 contacts fictifs
# - 10 événements test
# - 3 devis avec différents statuts
# - 1 compte admin test
```

### Anonymisation et rabattage
```bash
# Snapshot de sécurité avant tout rabattage
npm run db:snapshot:{env}

# Rabattage PROD → PREPROD (avec anonymisation)
npm run db:seed:pprod
# Demande confirmation interactive
# Anonymise : emails, téléphones, noms, messages

# Rabattage PREPROD → RECETTE
npm run db:seed:rec
```

---

## Checklist setup développeur

### Première installation
```bash
# 1. Cloner le projet
git clone https://github.com/[org]/kitty-octa.git
cd kitty-octa

# 2. Installer les dépendances
npm install

# 3. Copier et configurer les env vars
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# 4. Vérifier la configuration
npm run env:check

# 5. Seed de la DB de dev
npm run db:seed:dev

# 6. Lancer le projet
npm run dev

# 7. (Optionnel) Écouter les webhooks Stripe
stripe listen --forward-to localhost:3000/api/webhook/stripe
```

### Vérification quotidienne
```bash
git pull origin develop    # synchro avec l'équipe
npm install                # si package.json a changé
npm run env:check         # vars toujours ok ?
npm run dev
```

