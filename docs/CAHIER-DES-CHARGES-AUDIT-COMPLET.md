# Cahier des Charges — Audit Complet du Projet Kitty-Octa / OctaviEvent

## 1) Objectif du document

Ce document formalise un audit complet du projet afin de:
- cartographier la stack technique et l'architecture actuelle;
- inventorier les fonctionnalites metier et techniques;
- expliciter les utilitaires, la securite, le SEO et les flux de donnees;
- identifier les risques, ecarts et priorites de remediations;
- servir de reference de pilotage produit/technique pour la suite.

---

## 2) Contexte et perimetre

- **Projet**: site vitrine premium "OctaviEvent by Kitty-Octa" (App Router Next.js).
- **Cible**: acquisition de leads (formulaire contact), image de marque haut de gamme, gestion admin.
- **Perimetre audite**:
  - code applicatif (`app`, `components`, `lib`, `types`);
  - configuration (`package.json`, Tailwind, TypeScript, ESLint);
  - SEO/metadata (`layout`, `robots`, `sitemap`, JSON-LD);
  - securite (`middleware`, auth admin, API contact).

---

## 3) Stack technique (etat constate)

### 3.1 Frameworks et bibliotheques

- **Next.js**: `^14.2.5` (App Router)
- **React / React DOM**: `^18.3.1`
- **TypeScript**: `^5.5.4` (`strict: true`)
- **Tailwind CSS**: `^3.4.7`
- **Validation**: `zod`, `react-hook-form`, `@hookform/resolvers`
- **Auth**: `bcryptjs`
- **Utilities CSS**: `clsx`, `tailwind-merge`
- **Lint**: `eslint` + `eslint-config-next` (`next/core-web-vitals`)

### 3.2 Scripts npm

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

---

## 4) Arborescence fonctionnelle (vue metier + technique)

```text
kitty-octa/
├─ app/
│  ├─ (public)/
│  │  ├─ page.tsx                      -> Home
│  │  ├─ a-propos/page.tsx             -> About
│  │  ├─ services/page.tsx             -> Services
│  │  ├─ portfolio/page.tsx            -> Portfolio
│  │  ├─ contact/page.tsx              -> Contact multi-step
│  │  ├─ tarifs/page.tsx               -> Pricing
│  │  ├─ mentions-legales/page.tsx
│  │  ├─ politique-de-confidentialite/page.tsx
│  │  └─ layout.tsx                    -> Header + Footer
│  ├─ (admin)/
│  │  └─ admin/
│  │     ├─ page.tsx                   -> Dashboard
│  │     ├─ layout.tsx
│  │     ├─ actions.ts                 -> login/logout server actions
│  │     └─ login/page.tsx
│  ├─ api/contact/route.ts             -> endpoint POST contact
│  ├─ layout.tsx                       -> root layout + SEO global + JSON-LD
│  ├─ globals.css
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                              -> design system atomique
│  ├─ layout/                          -> Header/Footer/PageHero/CTA
│  ├─ sections/                        -> sections metier home
│  ├─ GoogleAnalytics.tsx
│  └─ CookieBanner.tsx
├─ lib/
│  ├─ auth.ts
│  ├─ analytics.ts
│  ├─ utils.ts
│  └─ validations/contact.ts
├─ types/index.ts
└─ docs/
   ├─ PRD-Template.md
   └─ BMAD-methode.md
```

---

## 5) Schema d'architecture (fonctionnement global)

```text
[Navigateur]
   |
   v
[Next.js App Router]
   |-- Routes publiques (SSR/RSC majoritaire)
   |-- Routes admin
   |-- API /api/contact
   |
   +--> [Middleware]
          - Headers securite
          - Garde /admin via cookie session_token
          - Redirect login/dashboard

Flux Contact:
UI Contact (react-hook-form + zod resolver)
   -> POST /api/contact
   -> validation Zod serveur
   -> rate limit in-memory
   -> log serveur
   -> JSON success/error

Flux Admin:
Login form -> server action loginAction
   -> verifyPassword (bcrypt/env)
   -> createSession (cookie HTTP-only)
   -> acces /admin via middleware
```

---

## 6) Design system et UX/UI

### 6.1 Tokens visuels

- **Palette principale**:
  - Ivory `#FFF8F0`
  - Beige `#F5F1E8`
  - Gold `#D4AF37`
  - Charcoal `#1A1A1A`
  - Taupe `#6B5C4A`
- **Typographies**:
  - titres: Playfair Display
  - corps/UI: Inter
- **Animations**: `fade-in-up` disponible dans Tailwind config

### 6.2 Composants UI structurants

- `Button` (variants, tailles, loading, Link/bouton)
- `Card`, `Input`, `Textarea`
- `SectionWrapper` (variants `ivory/beige/charcoal`, spacing)
- `Divider`
- Layout: `Header`, `Footer`, `PageHero`, `CTABanner`

---

## 7) Fonctionnalites metier (etat actuel)

### 7.1 Front office

- Home editoriale premium (hero, services, portfolio, testimonials, CTA)
- Pages metier: services, portfolio, tarifs, a-propos
- Page contact multi-etapes avec validation temps reel
- Pages legales RGPD + page 404 personnalisee

### 7.2 Back office

- Route admin securisee par middleware
- Login admin via Server Actions
- Logout via Server Action

### 7.3 Acquisition et tracking

- GA4 conditionnel au consentement cookies
- Cookie banner et preferences analytiques

### 7.4 SEO

- Metadata globale riche (OpenGraph, Twitter, canonical, keywords)
- JSON-LD `LocalBusiness` + `ProfessionalService`
- `robots.ts` et `sitemap.ts` actifs

---

## 8) Utilitaires et modules internes

- `lib/utils.ts`
  - `cn()` = fusion de classes Tailwind (`clsx` + `tailwind-merge`)
  - `formatDate()`
- `lib/validations/contact.ts`
  - schemas Zod par etape + schema complet
- `lib/auth.ts`
  - verification mot de passe
  - creation/suppression session cookie
- `lib/analytics.ts` + `components/GoogleAnalytics.tsx`
  - pageview et events GA4 (apres consentement)

---

## 9) Securite — etat et ecarts

### 9.1 Points conformes

- Cookies session admin en `httpOnly`, `sameSite=lax`, `secure` en production
- Middleware de protection de routes admin
- Headers securite HTTP ajoutes globalement
- Validation serveur Zod sur endpoint contact
- Limitation de debit de base (anti-spam)

### 9.2 Risques / ecarts (priorises)

#### P0 (critique)

1. **Session token non signe / faible**
   - `generateSessionToken()` repose sur `Math.random()`
   - pas de signature, pas de verification server-side forte
   - impact: contournement potentiel de l'auth si cookie forge

2. **Presence de fallback mot de passe clair**
   - `ADMIN_PASSWORD` (dev) accepte un secret non hash
   - impact: risque de mauvaise config en production

#### P1 (majeur)

3. **Logs de donnees personnelles dans `/api/contact`**
   - nom, email, telephone, message traces en clair
   - impact: confidentialite / conformite RGPD / fuite logs

4. **Rate limiter in-memory**
   - non distribue, non persistant, peu fiable en serverless multi-instance
   - impact: protection anti-abus insuffisante a l'echelle

#### P2 (important)

5. **Incoherence variable d'environnement GA**
   - `.env.example`: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - code: `NEXT_PUBLIC_GA_ID`
   - impact: integration GA cassable en deployment

---

## 10) Performance — etat et opportunites

### 10.1 Points positifs

- Usage de `next/image`
- Fonts Google en `display: "swap"`
- Plusieurs pages en server components
- Build valide et compile sans erreurs

### 10.2 Axes d'optimisation

- reduire les composants `use client` la ou non necessaires
- externaliser certains jeux de donnees inline volumineux
- definir une strategie image (CDN/asset ownership) plus stable qu'Unsplash externe
- mettre en place monitoring Web Vitals (LCP, CLS, INP) en production

---

## 11) SEO & conformite contenu

### 11.1 Atouts

- metadata globales completes
- OpenGraph/Twitter configurables
- JSON-LD present
- pages legales et robots/sitemap operationnels

### 11.2 Actions recommandees

- harmoniser titles/descriptions pour coherence editoriale
- verifier assets SEO manquants (favicon HD, apple-touch-icon)
- valider le `logo` reference dans JSON-LD par rapport aux assets reels

---

## 12) Exigences non fonctionnelles (cibles recommandees)

- **Securite**: auth admin par session signee ou DB-backed
- **Disponibilite**: endpoints critiques monitorés + alerting
- **Performance**:
  - LCP < 2.5s (mobile)
  - CLS < 0.1
  - INP < 200ms
- **Accessibilite**: WCAG 2.1 AA sur formulaires et contrastes
- **Qualite**:
  - build/lint en CI obligatoire
  - tests minimaux sur auth + API contact

---

## 13) Plan de remediations (roadmap)

### Phase A — Securite (P0/P1)

1. Remplacer token session par:
   - session signee (JWT HMAC/RS256) ou
   - session stockee en DB/Redis (id opaque)
2. Supprimer fallback `ADMIN_PASSWORD` en production stricte
3. Rediger politique de logs:
   - ne jamais logger le contenu brut du message client
4. Migrer rate limiting vers Redis (Upstash ou equivalent)

### Phase B — Robustesse et exploitation

1. Unifier variables env (`NEXT_PUBLIC_GA_ID` vs `...MEASUREMENT_ID`)
2. Ajouter checks startup de config env
3. Ajouter tests:
   - integration `POST /api/contact`
   - auth flow admin (login/logout + middleware)

### Phase C — Produit & experience

1. Instrumenter funnel contact (events anonymises)
2. Consolider bibliotheque de contenus/images de marque
3. Mettre en place audit trimestriel SEO + Core Web Vitals

---

## 14) Matrice de priorites (resume executif)

| Priorite | Sujet | Impact | Effort estime |
|---|---|---|---|
| P0 | Session admin signee/robuste | Tres eleve (securite) | Moyen |
| P0 | Retrait fallback mot de passe clair en prod | Eleve | Faible |
| P1 | Sanitisation des logs contact | Eleve (RGPD) | Faible |
| P1 | Rate limiter distribue (Redis) | Eleve (anti-abus) | Moyen |
| P2 | Alignement env GA | Moyen | Faible |
| P2 | Tests automatiques critiques | Moyen/eleve | Moyen |

---

## 15) Conclusion

Le projet est deja a un niveau solide pour une vitrine premium moderne (architecture App Router, design system coherent, SEO avance, parcours contact structure).  
Les principaux chantiers restants sont **la robustesse securite admin** et **la production-hardening de l'API contact**.

Une fois les remediations P0/P1 traitees, le socle sera aligne avec un niveau de qualite "production premium" durable.

