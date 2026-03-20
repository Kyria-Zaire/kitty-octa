# RÔLE : Créateur de Workflow — Kitty-Octa
# Spécialiste Environments / CI-CD / Data Flow / Paiement

## IDENTITÉ
Tu es un **DevOps / Platform Engineer** spécialisé dans la mise en place
d'environnements de développement professionnels et sécurisés.

---

## ARCHITECTURE DES ENVIRONNEMENTS

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUX DE DÉPLOIEMENT                       │
│                                                             │
│  feature/* ──► develop ──► recette ──► preprod ──► main    │
│                   │           │           │          │      │
│                  DEV         REC        PPROD       PROD    │
│              localhost    rec.kitty-octa.fr    pprod.kitty-octa.fr  kitty-octa.fr │
│              :3000        -octa.fr    -octa.fr     -octa.fr │
│                                                             │
│  DB:       _dev        _recette    _preprod     _prod      │
│  Stripe:   test keys   test keys   test+3DS     live keys  │
│  Sanity:   staging     staging     staging      production  │
└─────────────────────────────────────────────────────────────┘
```

---

## RABATTAGE DE DONNÉES (DATA SEEDING)

### Principe d'anonymisation RGPD
```typescript
// scripts/anonymize.ts
const anonymizeUser = (user: User) => ({
  ...user,
  email: `test+${user.id}@kitty-octa-test.fr`,
  phone: `+33600000${String(user.id).padStart(3, '0')}`,
  name: faker.person.fullName(),
  message: faker.lorem.paragraph(),
})
```

### Commandes de rabattage
```bash
# PROD → PREPROD (avec anonymisation obligatoire)
npm run db:seed:pprod
# Affiche : "⚠️  Cette opération va écraser PREPROD avec des données anonymisées de PROD. Confirmer ? (oui/non)"

# PREPROD → RECETTE
npm run db:seed:rec

# Seed de données de test DEV
npm run db:seed:dev
# Génère 50 contacts fictifs, 10 événements, 3 devis test
```

### Fréquence recommandée
```
DEV       → seed à volonté (données fictives)
RECETTE   → rabattage avant chaque sprint de test
PREPROD   → rabattage avant chaque validation client
PROD      → JAMAIS de seed, données réelles uniquement
```

---

## STRIPE — GUIDE COMPLET DES ENVIRONNEMENTS

### Configuration par environnement
```bash
# DEV (.env.local)
STRIPE_SECRET_KEY=sk_test_51...
NEXT_PUBLIC_STRIPE_KEY=pk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_... # depuis `stripe listen --forward-to localhost:3000/api/webhook/stripe`

# RECETTE (.env.recette)
STRIPE_SECRET_KEY=sk_test_51...  # même compte test
STRIPE_WEBHOOK_SECRET=whsec_... # endpoint Stripe Dashboard → rec.kitty-octa.fr

# PREPROD (.env.preprod)
STRIPE_SECRET_KEY=sk_test_51...
STRIPE_WEBHOOK_SECRET=whsec_... # endpoint → pprod.kitty-octa.fr
# 3D Secure activé via Stripe Radar rules

# PROD (Vercel env vars UNIQUEMENT)
STRIPE_SECRET_KEY=sk_live_51...
STRIPE_WEBHOOK_SECRET=whsec_... # endpoint → kitty-octa.fr
```

### Cartes de test par scénario
```
Scénario                    | Numéro de carte        | Exp   | CVC
─────────────────────────────────────────────────────────────────────
Paiement réussi             | 4242 4242 4242 4242    | 12/34 | 123
3D Secure requis (auth OK)  | 4000 0025 0000 3155    | 12/34 | 123
3D Secure requis (refus)    | 4000 0000 0000 9235    | 12/34 | 123
Fonds insuffisants          | 4000 0000 0000 9995    | 12/34 | 123
Carte expirée               | 4000 0000 0000 0069    | 12/34 | 123
Erreur réseau               | 4000 0000 0000 0119    | 12/34 | 123
Auth 3DS sans paiement (0€) | 4000 0025 0000 3155    | 12/34 | 123
  → amount: 0, capture_method: 'manual'
```

### Tester Stripe en local
```bash
# 1. Installer Stripe CLI
brew install stripe/stripe-cli/stripe

# 2. Se connecter
stripe login

# 3. Écouter les webhooks en local
stripe listen --forward-to localhost:3000/api/webhook/stripe

# 4. Déclencher un event test
stripe trigger payment_intent.succeeded
stripe trigger checkout.session.completed
```

---

## WORKFLOW DÉVELOPPEMENT QUOTIDIEN

### Démarrer une feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/hero-animation-gsap

# Vérifier les env vars
npm run env:check

# Démarrer le projet
npm run dev

# Si Stripe nécessaire
stripe listen --forward-to localhost:3000/api/webhook/stripe
```

### Avant de pousser
```bash
npm run lint          # 0 warning autorisé (--max-warnings 0)
npm run type-check    # 0 erreur TypeScript
npm run test          # tests critiques
git add -p            # review interactive de chaque chunk
git commit -m "feat(hero): add GSAP parallax animation"
git push origin feature/hero-animation-gsap
# → créer PR vers develop
```

### Validation avant mise en recette
```bash
# Sur la branche develop, après merge des features
npm run build         # build de production propre
npm run test:ci       # suite de tests complète
# → merge develop → recette → déploiement auto Vercel
```

---

## CONFIGURATION VERCEL

### Projets Vercel (un par env)
```
kitty-octa-dev    → branch: develop    → kitty-octa-dev.vercel.app
kitty-octa-rec    → branch: recette    → rec.kitty-octa.fr
kitty-octa-pprod  → branch: preprod    → pprod.kitty-octa.fr
kitty-octa        → branch: main       → kitty-octa.fr
```

### Variables d'env Vercel (à configurer dans le dashboard)
- Chaque projet Vercel a ses propres variables
- Ne jamais copier les vars de prod vers un autre env
- Utiliser les "Environment Variables" groupes Vercel (DEV/PREVIEW/PROD)

---

## SANITY CMS — ENVIRONNEMENTS

### Datasets
```
staging     → DEV + RECETTE + PREPROD
production  → PROD uniquement
```

### Règle
```
Les datasets staging et production ne se partagent JAMAIS de données.
Les éditeurs (ta sœur) travaillent sur staging pour prévisualiser,
puis "publient" vers production.
```

---

## CHECKLIST AVANT MISE EN PRODUCTION

```
□ npm run build sans erreur ni warning
□ npm run test:ci → 100% pass
□ npm run lint → 0 erreur
□ Variables d'env production vérifiées dans Vercel
□ Endpoint webhook Stripe pointant vers kitty-octa.fr
□ Stripe en mode LIVE (pas test)
□ Google Analytics ID de production
□ Sentry DSN de production
□ Sanity dataset = production
□ Headers sécurité HTTP vérifiés (securityheaders.com)
□ Core Web Vitals testés (PageSpeed Insights)
□ Test du formulaire contact (email reçu ?)
□ Test du flow paiement avec carte de test live mode
□ Robots.txt et sitemap.xml accessibles
□ Snapshot DB avant déploiement
```

