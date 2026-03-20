# BMAD METHOD — Kitty-Octa / OctaviEvent
# Breakthrough Method for Agile Development (adapté au projet)
# Version : 2.0 | Spécialisé Vibe Coding + IA-Assisted Dev

---

> **Philosophie BMAD**
> La BMAD n'est pas une méthodologie rigide.
> C'est un **cadre de pensée** qui permet à deux développeurs (humain + IA)
> de travailler ensemble avec la rigueur d'une équipe de 10 personnes senior.
> Chaque phase a un livrable clair. Chaque livrable a des critères de validation.
> On ne passe à la phase suivante que si les critères sont remplis.

---

## SOMMAIRE

1. [Vue d'ensemble BMAD](#1-vue-densemble-bmad)
2. [Phase B — Breakthrough (Découverte)](#2-phase-b--breakthrough-découverte)
3. [Phase M — Map (Architecture)](#3-phase-m--map-architecture)
4. [Phase A — Act (Développement)](#4-phase-a--act-développement)
5. [Phase D — Deploy (Livraison)](#5-phase-d--deploy-livraison)
6. [Rituel IA — Règles de Vibe Coding](#6-rituel-ia--règles-de-vibe-coding)
7. [Protocoles de Session](#7-protocoles-de-session)
8. [Arbre de Décision Technique](#8-arbre-de-décision-technique)
9. [Templates de Communication](#9-templates-de-communication)
10. [Gestion des Risques](#10-gestion-des-risques)
11. [Définitions of Done](#11-définitions-of-done)

---

## 1. VUE D'ENSEMBLE BMAD

```
┌──────────────────────────────────────────────────────────────────┐
│                        CYCLE BMAD                                │
│                                                                  │
│   B ──────► M ──────► A ──────► D                               │
│   │         │         │         │                               │
│ Break-    Map      Act       Deploy                             │
│ through (Archi-  (Build)   (Ship)                              │
│ (Disco-  tecture)                                               │
│  very)                                                          │
│                                                                  │
│ ◄─────────────── FEEDBACK LOOP ─────────────────────────────►   │
│                                                                  │
│  Durée par sprint : 1-2 semaines selon périmètre                │
│  Acteurs : Dev (toi) + CTO IA (Claude) + Vibe Coding (Cursor)   │
└──────────────────────────────────────────────────────────────────┘
```

### Les 4 phases en bref
| Phase | Quoi | Livrable | Durée typique |
|---|---|---|---|
| **B**reakthrough | Comprendre le problème | Brief validé + User Stories | 2-4h |
| **M**ap | Architecturer la solution | Diagramme + contrats techniques | 2-4h |
| **A**ct | Construire | Code fonctionnel + testé | 80% du temps |
| **D**eploy | Livrer et valider | Feature en prod + métriques | 2-4h |

---

## 2. PHASE B — BREAKTHROUGH (DÉCOUVERTE)

> **Objectif** : Comprendre VRAIMENT ce qu'on construit avant d'écrire une ligne de code.
> Une mauvaise compréhension à cette phase coûte 10x plus cher à corriger après.

### B1 — Déclencheur de phase

La phase B démarre quand :
- Une nouvelle feature est identifiée dans le PRD
- Un bug critique nécessite une refonte
- Un sprint démarre

### B2 — Checklist de découverte

Avant toute session de développement, répondre à ces questions :

```markdown
## Brief de Feature — [NOM DE LA FEATURE]
Date : ____________________
Sprint : ____________________

### 1. PROBLÈME À RÉSOUDRE
- Quel problème utilisateur résout cette feature ?
- Sans cette feature, que se passe-t-il ?
- Qui est impacté ? (Persona : Sophie / Thomas / Martine / Admin)

### 2. DÉFINITION DU SUCCÈS
- Comment saura-t-on que c'est réussi ?
- Métrique principale : ___________
- Critère d'acceptation minimum : ___________

### 3. PÉRIMÈTRE
- Ce qui EST dans la scope : ___________
- Ce qui N'EST PAS dans la scope : ___________
- Dépendances : ___________

### 4. CONTRAINTES
- Technique : ___________
- Temps : ___________
- Design : ___________

### 5. RISQUES IDENTIFIÉS
- Risque principal : ___________
- Plan B si ça coince : ___________
```

### B3 — User Stories format BMAD

```markdown
## User Story : [IDENTIFIANT] — [TITRE COURT]

**En tant que** [persona]
**Je veux** [action]
**Afin de** [bénéfice]

### Critères d'acceptation (Given/When/Then)

**Scénario 1 — Cas nominal**
Étant donné que [contexte]
Quand [action utilisateur]
Alors [résultat attendu]

**Scénario 2 — Cas d'erreur**
Étant donné que [contexte d'erreur]
Quand [action]
Alors [message d'erreur approprié]

**Scénario 3 — Cas limite**
Étant donné que [cas limite]
Quand [action]
Alors [comportement attendu]

### Définition of Done (DoD)
□ Code écrit et fonctionnel
□ Tests unitaires/intégration passent
□ Lint et TypeScript sans erreurs
□ Review sécurité faite (si endpoint ou auth)
□ Accessible (WCAG 2.1 AA)
□ Responsive (mobile/desktop)
□ Testé sur Chrome, Safari, Firefox
□ Merged sur develop
□ Déployé sur recette et validé
```

### B4 — Catalogue User Stories Kitty-Octa

#### Epic 1 — Navigation & Layout
```
US-001 : En tant que visiteur, je veux une navigation sticky claire pour accéder à toutes les sections
US-002 : En tant que visiteur mobile, je veux un menu hamburger fluide pour naviguer sur petit écran
US-003 : En tant que visiteur, je veux un footer complet pour trouver les infos de contact rapidement
```

#### Epic 2 — Page d'accueil
```
US-010 : En tant que visiteur, je veux un hero visuellement fort pour être immédiatement séduit
US-011 : En tant que visiteur, je veux voir les services en teaser pour comprendre l'offre en 5 secondes
US-012 : En tant que visiteur, je veux voir un portfolio teaser pour évaluer la qualité du travail
US-013 : En tant que visiteur, je veux voir un signal de rareté (FOMO) pour agir sans tarder
US-014 : En tant que visiteur, je veux un témoignage en évidence pour gagner confiance
```

#### Epic 3 — Portfolio
```
US-020 : En tant que visiteur, je veux filtrer le portfolio par type d'événement pour trouver mes références
US-021 : En tant que visiteur, je veux ouvrir une photo en plein écran pour l'admirer en détail
US-022 : En tant que visiteur, je veux naviguer entre les photos d'un projet pour voir l'ensemble
US-023 : En tant que visiteur mobile, je veux un portfolio fluide sur petit écran
```

#### Epic 4 — Formulaire Contact
```
US-030 : En tant que prospect, je veux un formulaire en 3 étapes pour ne pas être submergé d'un coup
US-031 : En tant que prospect, je veux voir ma progression dans le formulaire pour savoir où j'en suis
US-032 : En tant que prospect, je veux des messages d'erreur clairs pour corriger mes saisies
US-033 : En tant que prospect, je veux une confirmation après soumission pour savoir que c'est reçu
US-034 : En tant que prospect, je veux recevoir un email de confirmation pour garder une trace
US-035 : En tant que prospect sur mobile, je veux un formulaire adapté pour le compléter facilement
```

#### Epic 5 — SEO
```
US-040 : En tant que personne cherchant "wedding planner Amiens", je veux trouver le site en position 1-3
US-041 : En tant que réseau social, je veux un aperçu riche quand le site est partagé (OG)
US-042 : En tant que Google, je veux des données structurées JSON-LD pour bien comprendre le site
```

#### Epic 6 — Admin
```
US-050 : En tant que Kitty, je veux me connecter de façon sécurisée au panel admin
US-051 : En tant que Kitty, je veux voir toutes les demandes de contact avec leurs détails
US-052 : En tant que Kitty, je veux marquer une demande comme traitée pour garder mon suivi
US-053 : En tant que Kitty, je veux être notifiée par email lors d'une nouvelle demande
```

---

## 3. PHASE M — MAP (ARCHITECTURE)

> **Objectif** : Dessiner la solution avant de la construire.
> Une heure passée à architecturer économise 8 heures de refactoring.

### M1 — Template d'Architecture de Feature

```markdown
## Architecture : [NOM DE LA FEATURE]
Lié à : US-XXX
Date : ____________________

### DIAGRAMME DE FLUX
[Décrire ou dessiner le flux de données/interactions]

Exemple :
Utilisateur → Formulaire (Client) → POST /api/contact (Server) → Validation Zod → Email (Resend) → DB log → Response

### COMPOSANTS IMPACTÉS
Nouveaux :
  - components/sections/ContactForm.tsx
  - components/ui/FormStep.tsx
  - lib/validations/contact.ts

Modifiés :
  - app/(public)/contact/page.tsx
  - app/api/contact/route.ts

### CONTRAT API (si endpoint)
Endpoint    : POST /api/contact
Auth        : Public (rate limité)
Request     : ContactFormSchema (Zod)
Response OK : { success: true, submissionId: string }
Erreurs     : 400 (validation), 429 (rate limit), 500 (erreur serveur)

### SCHÉMA DE DONNÉES (si DB)
[Définir les types/interfaces TypeScript]

### DÉCISIONS TECHNIQUES
1. Décision : [Quoi]
   Raison    : [Pourquoi]
   Alternative rejetée : [Quoi + pourquoi rejetée]

### POINTS D'ATTENTION
- Sécurité : [si applicable]
- Performance : [si applicable]
- Accessibilité : [si applicable]
```

### M2 — Architecture globale Kitty-Octa

```
┌─────────────────────────────────────────────────────────────┐
│                    ARCHITECTURE APPLICATIVE                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   FRONTEND (Next.js)                 │   │
│  │                                                     │   │
│  │  RSC (Server Components)  │  RCC (Client Components) │   │
│  │  ─ Pages statiques SEO    │  ─ Formulaires           │   │
│  │  ─ Metadata               │  ─ Animations Framer     │   │
│  │  ─ Fetch données CMS      │  ─ GSAP ScrollTrigger    │   │
│  │                           │  ─ Lenis smooth scroll   │   │
│  └────────────────────┬──────────────────────────────┘   │
│                       │                                     │
│  ┌────────────────────▼──────────────────────────────┐   │
│  │                API ROUTES (Next.js)                │   │
│  │                                                     │   │
│  │  /api/contact    → Validation + Email + Log        │   │
│  │  /api/webhook    → Stripe events (signé)           │   │
│  │  /admin/*        → Protected (middleware)          │   │
│  └──────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Sanity  │  │  Stripe  │  │  Resend  │  │  Upstash │  │
│  │  CMS     │  │  Payment │  │  Email   │  │  Redis   │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           MONITORING & OBSERVABILITÉ                 │  │
│  │  Sentry (erreurs) │ GA4 (analytics) │ Vercel Analytics│  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### M3 — Règles d'architecture (non négociables)

```
RSC vs RCC — Règle de décision :
  → Besoin d'event handlers (onClick, onChange) ?  → 'use client'
  → Besoin de hooks React (useState, useEffect) ?  → 'use client'
  → Besoin d'animations Framer Motion ?            → 'use client'
  → Sinon                                          → RSC (par défaut)

Data fetching — Règle de décision :
  → Données statiques (portfolio, services) ?     → RSC + fetch avec cache
  → Données temps réel ?                          → Client + React Query
  → Formulaires ?                                 → Server Actions ou API route

Sécurité — Règle absolue :
  → Toute logique sensible côté SERVEUR uniquement
  → Jamais de clés API dans le bundle client
  → Validation TOUJOURS côté serveur (même si faite côté client)
```

---

## 4. PHASE A — ACT (DÉVELOPPEMENT)

> **Objectif** : Construire ce qui a été architecturé dans la Phase M.
> Ici, on code. Mais on code en senior.

### A1 — Protocole de session de développement

#### Démarrage de session (5 min)
```
1. Lire le brief de feature (Phase B)
2. Relire l'architecture prévue (Phase M)
3. Vérifier que l'env de dev est up : npm run dev
4. Vérifier qu'on est sur la bonne branche : git status
5. Énoncer à voix haute (ou en commentaire) ce qu'on va construire
```

#### Pendant la session
```
→ Travailler feature par feature, jamais en saut de puce
→ Committer souvent (toutes les 30-45 min de travail)
→ Si un problème > 20 min sans solution → escalader (Phase B d'un sous-problème)
→ Marquer les TODO dans le code selon la convention
→ Ne JAMAIS committer si lint ou TypeScript est en erreur
```

#### Clôture de session (10 min)
```
1. npm run lint → 0 erreur
2. npm run type-check → 0 erreur
3. Tests passent (si applicables)
4. Commit propre avec message Conventional Commits
5. Push sur la branche
6. Documenter ce qui a été fait et ce qui reste
```

### A2 — Checklist de développement par type de tâche

#### Nouveau composant UI
```
□ Créé dans le bon dossier (ui/ vs sections/ vs layout/)
□ TypeScript strict (props typées, pas de any)
□ Responsive (mobile-first)
□ Animation avec prefers-reduced-motion respecté
□ Accessible (ARIA, focus, contraste)
□ Dark mode si applicable
□ Storybook (V2 — optionnel V1)
□ Exporté depuis l'index du dossier
```

#### Nouvelle page
```
□ Metadata SEO complète (title, description, OG, canonical)
□ JSON-LD si applicable
□ Layout responsive
□ Breadcrumb (si page secondaire)
□ CTA de conversion présent
□ Loading state (Suspense)
□ Error boundary
□ Testé sur mobile + desktop
```

#### Nouvel endpoint API
```
□ Validation Zod du payload
□ Rate limiting vérifié
□ Auth vérifiée (si route protégée)
□ Gestion d'erreurs complète (400, 401, 403, 429, 500)
□ Logger structuré (pas de console.log)
□ Pas de PII dans les logs
□ Test d'intégration écrit
□ Signature webhook vérifiée (si webhook)
```

#### Modification existante
```
□ Tests existants passent toujours
□ Pas de régression visuelle (screenshots si UI)
□ Changelog mis à jour
□ PRD mis à jour si comportement change
```

### A3 — Patterns de code obligatoires

#### Server Action (Next.js 14)
```typescript
'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import logger from '@/lib/logger'

const ActionSchema = z.object({ ... })

export async function myAction(formData: FormData) {
  // 1. Parse et valider
  const raw = Object.fromEntries(formData)
  const parsed = ActionSchema.safeParse(raw)
  if (!parsed.success) return { error: 'Données invalides', details: parsed.error.flatten() }

  // 2. Vérifier auth si nécessaire
  // const session = await getSession()
  // if (!session) return { error: 'Non autorisé' }

  // 3. Logique métier
  try {
    // ...
    revalidatePath('/admin')
    logger.info('Action exécutée', { action: 'myAction' })
    return { success: true }
  } catch (err) {
    logger.error('Erreur action', { message: (err as Error).message })
    return { error: 'Erreur interne' }
  }
}
```

#### Composant avec animation Framer Motion
```typescript
'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface MySectionProps {
  items: Item[]
}

export function MySection({ items }: MySectionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, i) => (
        <motion.div key={item.id} variants={fadeInUp}>
          {/* contenu */}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

#### Fetch de données CMS (RSC)
```typescript
// app/(public)/portfolio/page.tsx
import { getPortfolioItems } from '@/lib/sanity'

// Revalidation toutes les heures (SSG avec ISR)
export const revalidate = 3600

export default async function PortfolioPage() {
  const items = await getPortfolioItems()

  return (
    <main>
      {/* Passer les données au Client Component d'animation */}
      <PortfolioGrid items={items} />
    </main>
  )
}
```

#### Gestion d'état de formulaire multi-étapes
```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactStep1Schema, ContactStep2Schema, ContactStep3Schema } from '@/lib/validations/contact'
import { AnimatePresence, motion } from 'framer-motion'

const TOTAL_STEPS = 3

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Schema par étape
  const schemas = [ContactStep1Schema, ContactStep2Schema, ContactStep3Schema]
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schemas[step - 1])
  })

  const onStepSubmit = (data: unknown) => {
    setFormData(prev => ({ ...prev, ...data }))
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1)
    } else {
      handleFinalSubmit({ ...formData, ...data })
    }
  }

  const handleFinalSubmit = async (data: unknown) => {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error('Erreur réseau')
      setIsSuccess(true)
    } catch {
      // Afficher message d'erreur
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... render avec AnimatePresence pour transitions entre étapes
}
```

---

## 5. PHASE D — DEPLOY (LIVRAISON)

> **Objectif** : Mettre en production de façon sécurisée, mesurée, et réversible.

### D1 — Checklist pré-déploiement

#### Sur branche feature/*
```
□ npm run lint → 0 erreur, 0 warning
□ npm run type-check → 0 erreur
□ npm run test → tous passent
□ Self-review du code (git diff develop)
□ PR créée avec description complète
```

#### Sur branche develop (après merge)
```
□ Build de vérification : npm run build
□ Déploiement auto Vercel → recette
□ Test manuel sur rec.kitty-octa.fr
□ Test formulaire contact (email reçu ?)
□ Test sur mobile (iPhone Safari)
□ Core Web Vitals acceptables
```

#### Sur branche preprod
```
□ Tous les tests de recette passés
□ Validation avec Kitty (si feature visible)
□ Test paiement Stripe (si applicable) avec carte 3D Secure
□ Test webhook Stripe (event simulé)
□ Audit sécurité headers (securityheaders.com)
```

#### Sur main (production)
```
□ Snapshot DB avant déploiement
□ Vérification variables env Vercel production
□ Stripe en mode LIVE confirmé
□ Sanity dataset = production
□ Merge approuvé (protection de branche)
□ Monitoring Sentry opérationnel
□ Rollback plan défini (branche précédente connue)
```

### D2 — Stratégie de rollback

```
Si incident en production :
1. Identifier la version précédente (Vercel dashboard → Deployments)
2. Rollback immédiat via Vercel (1 clic)
3. Créer une issue de post-mortem
4. Analyser les logs Sentry
5. Fix sur une branche hotfix/*
6. Re-déployer après validation en preprod
```

### D3 — Communication post-déploiement

```markdown
## Déploiement Sprint X — [DATE]

### Nouvelles fonctionnalités
- [Feature 1] — [description courte]
- [Feature 2] — [description courte]

### Corrections
- [Fix 1]

### Métriques observées post-déploiement (24h après)
- Core Web Vitals : LCP ___ / CLS ___ / INP ___
- Taux d'erreur : ___
- Formulaires soumis : ___
```

---

## 6. RITUEL IA — RÈGLES DE VIBE CODING

> **Définition** : Le "Vibe Coding" est le fait de développer en collaboration intense avec une IA (Claude Code, Cursor).
> Sans cadre, ça produit du code fragile, non testé, et non maintenable.
> Ces règles transforment le Vibe Coding en ingénierie de qualité.

### R1 — Règles pour Claude Code

#### Comment démarrer une session Claude Code
```
1. Contexte obligatoire en début de session :
   "Nous travaillons sur Kitty-Octa (OctaviEvent). 
    Lis .claude/CLAUDE.md pour les règles du projet.
    La feature du jour : [NOM DE LA FEATURE]
    User story : [US-XXX]
    Architecture décidée : [RÉSUMÉ PHASE M]"

2. Claude doit confirmer qu'il a lu CLAUDE.md avant de coder

3. Format de demande optimal :
   - ✅ "Crée le composant HeroSection avec les specs suivantes : [specs précises]"
   - ✅ "Voici le code actuel [coller]. Refactorise pour extraire la logique de validation."
   - ❌ "Fais-moi un beau hero" (trop vague)
   - ❌ "Corrige tout ça" (périmètre indéfini)
```

#### Validation du code généré par l'IA
```
AVANT d'accepter tout code généré :

□ TypeScript compile sans erreur (npm run type-check)
□ Lint passe sans warning (npm run lint)
□ Pas de 'any' introduit
□ Pas de console.log introduit
□ Sécurité respectée (pas de Math.random, pas de PII en log)
□ Design tokens utilisés (pas de couleurs hardcodées)
□ Responsive (classes mobile-first Tailwind)
□ Accessible (ARIA si nécessaire)

SI une de ces cases est décochée → demander à l'IA de corriger AVANT d'avancer
```

#### Anti-patterns IA à détecter et refuser
```typescript
// ❌ Code à refuser — exemple 1 : any TypeScript
const handleData = (data: any) => { ... } // → demander le type précis

// ❌ Code à refuser — exemple 2 : token faible
const sessionId = Math.random().toString(36) // → crypto.randomBytes(32)

// ❌ Code à refuser — exemple 3 : log PII
console.log('Contact reçu:', { name, email, phone }) // → logger anonymisé

// ❌ Code à refuser — exemple 4 : composant trop gros
// Si le composant généré dépasse 200 lignes → demander le découpage

// ❌ Code à refuser — exemple 5 : couleurs hardcodées
className="bg-[#C9A84C]" // → className="bg-gold" (token Tailwind)

// ❌ Code à refuser — exemple 6 : webhook non vérifié
const body = await req.json() // → const raw = await req.text() + constructEvent()
```

### R2 — Règles pour Cursor

#### Configuration optimale
```
- Toujours avoir .cursorrules visible et actif
- Utiliser les règles .mdc (frontend.mdc, backend.mdc)
- Activer "Codebase indexing" pour que Cursor comprenne le contexte
- Préférer "Ask" pour les questions d'architecture, "Edit" pour le code précis
```

#### Prompts Cursor efficaces
```
Pour du code précis :
"Dans ce fichier, [action précise]. Respecte les règles de .cursorrules."

Pour un refactoring :
"Refactorise cette fonction pour [objectif]. Ne change pas le comportement externe."

Pour un bug :
"Ce code produit [comportement actuel]. Le comportement attendu est [attendu]. 
 Identifie le problème et propose un fix en respectant notre stack."

Pour une review :
"Review ce code en cherchant : TypeScript strict, sécurité, performance, accessibilité."
```

### R3 — Posture du développeur face à l'IA

```
L'IA est un outil, pas un oracle.

✅ L'IA génère → Tu valides → Tu commites
✅ L'IA propose une architecture → Tu challenges → Tu décides
✅ L'IA identifie un bug → Tu comprends la cause racine → Tu fixes
✅ Tu demandes à l'IA de t'expliquer le code avant de l'accepter

❌ Copier-coller du code généré sans le lire
❌ Laisser l'IA prendre des décisions d'architecture sans validation
❌ Committer du code "ça a l'air de marcher"
❌ Ignorer les avertissements lint/TypeScript "pour l'instant"
```

---

## 7. PROTOCOLES DE SESSION

### Protocole SESSION NORMALE (< 3h)

```
[DÉBUT — 5 min]
1. Lire le brief de feature
2. Confirmer qu'on est sur la bonne branche
3. npm run dev (vérifier que ça démarre)
4. Énoncer l'objectif de la session en 1 phrase

[DÉVELOPPEMENT — 80%]
5. Coder en Phase A
6. Committer toutes les 45 min
7. Si blocage > 20 min → Phase B du sous-problème

[FIN — 10 min]
8. npm run lint && npm run type-check
9. Commit final propre
10. Documenter ce qui reste (TODO dans le code ou issue GitHub)
```

### Protocole SESSION DE DEBUGGING

```
[IDENTIFICATION — 10 min]
1. Reproduire le bug de façon fiable
2. Écrire le bug en 1 phrase : "Quand X, le résultat est Y au lieu de Z"
3. Identifier : Frontend ? Backend ? Data ? Env ?

[INVESTIGATION — 20 min]
4. Chercher dans les logs Sentry
5. Tester en isolation (composant ? API ?)
6. Identifier le commit qui a introduit le bug (git bisect si nécessaire)

[FIX — 30 min]
7. Corriger la cause racine (pas juste le symptôme)
8. Écrire un test qui reproduit le bug
9. Vérifier que le test passe maintenant
10. Committer : "fix(scope): description du fix"
```

### Protocole SESSION D'ARCHITECTURE

```
[CONTEXTE — 15 min]
1. Lire le PRD pour la feature concernée
2. Lister les contraintes (technique, temps, sécurité)
3. Identifier les dépendances

[EXPLORATION — 30 min]
4. Lister 2-3 approches possibles
5. Pour chaque approche : pros, cons, risques
6. Challenger avec Claude Code (jouer l'avocat du diable)

[DÉCISION — 15 min]
7. Choisir l'approche et documenter pourquoi
8. Créer le template M1 (Architecture de feature)
9. Définir les étapes de développement

[VALIDATION — 10 min]
10. L'architecture respecte-t-elle les principes BMAD ?
11. Y a-t-il des risques sécurité à anticiper ?
12. Quelle est la Definition of Done ?
```

---

## 8. ARBRE DE DÉCISION TECHNIQUE

### Décision : Où mettre cette logique ?

```
Cette logique implique-t-elle des données sensibles (clés API, DB, auth) ?
  OUI → Côté SERVEUR obligatoire (RSC, API Route, Server Action)
  NON ↓

Cette logique implique-t-elle des interactions utilisateur (clic, input) ?
  OUI → 'use client' nécessaire
  NON ↓

Cette logique implique-t-elle des animations ou des hooks browser ?
  OUI → 'use client' nécessaire
  NON → RSC (Server Component par défaut)
```

### Décision : API Route ou Server Action ?

```
L'action est déclenchée par un formulaire HTML natif ?
  OUI → Server Action

L'action est appelée depuis un webhook externe (Stripe) ?
  OUI → API Route

L'action nécessite un URL publique accessible ?
  OUI → API Route

L'action est déclenchée par une interaction React (bouton, formulaire React) ?
  OUI → Server Action (plus simple, moins de code)

Par défaut → Server Action (Next.js 14 best practice)
```

### Décision : Mettre en cache ou non ?

```
Les données changent-elles plus souvent que toutes les heures ?
  OUI → Pas de cache, fetch dynamique ou client-side

Les données sont-elles les mêmes pour tous les utilisateurs ?
  NON → Pas de cache (données personnalisées)
  OUI ↓

Les données viennent-elles du CMS Sanity ?
  OUI → ISR avec revalidate = 3600 (1h)

Les données sont-elles totalement statiques (config, tokens) ?
  OUI → Static (cache permanent jusqu'au prochain build)
```

---

## 9. TEMPLATES DE COMMUNICATION

### Template : Signalement d'un bug

```markdown
## Bug Report : [TITRE COURT]
ID : BUG-XXX
Date : ____
Sévérité : Critique | Majeur | Mineur
Environnement : DEV | REC | PPROD | PROD

### Comportement observé
[Description précise de ce qui se passe]

### Comportement attendu
[Ce qui devrait se passer]

### Étapes pour reproduire
1. Aller sur [URL]
2. Faire [action]
3. Observer [résultat]

### Informations techniques
- Navigateur : Chrome XX / Safari XX
- Device : Desktop / Mobile (iPhone 14)
- Logs d'erreur : [coller les erreurs Sentry/console]
- Commit suspect : [hash si connu]

### Impact
- Utilisateurs affectés : [estimation]
- Feature bloquée : OUI / NON
- Workaround possible : [si oui, lequel]
```

### Template : Demande de feature (hors PRD)

```markdown
## Feature Request : [TITRE]
Demandeur : Kitty / Dev
Date : ____

### Description
[Ce que la feature doit faire]

### Justification business
[Pourquoi c'est important — chiffres si possible]

### User Story associée
En tant que [persona], je veux [action] afin de [bénéfice]

### Périmètre estimé
□ Petit (< 1 jour)
□ Moyen (1-3 jours)
□ Grand (> 3 jours)

### Dépendances
[Autres features ou services requis]

### Décision CTO
□ Accepté — Sprint : ___
□ Accepté avec modifications : ___
□ Refusé — Raison : ___
□ Backlog (priorisation ultérieure)
```

### Template : Post-mortem d'incident

```markdown
## Post-Mortem : [TITRE DE L'INCIDENT]
Date : ____
Durée : ____
Sévérité : ____

### Résumé
[1-2 phrases décrivant l'incident]

### Timeline
- HH:MM : [événement]
- HH:MM : [détection]
- HH:MM : [début du fix]
- HH:MM : [résolution]

### Cause racine
[Cause technique précise]

### Impact
- Utilisateurs affectés : ___
- Données perdues : OUI / NON
- SLA impacté : OUI / NON

### Ce qui a bien fonctionné
- [Point positif]

### Ce qui a mal fonctionné
- [Point négatif]

### Actions correctives
| Action | Responsable | Délai |
|--------|-------------|-------|
| [action] | Dev | [date] |
```

---

## 10. GESTION DES RISQUES

### Registre des risques

| ID | Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|---|
| R01 | Fuite de données RGPD | Moyenne | Critique | Logs anonymisés, pas de PII en DB non nécessaire |
| R02 | Webhook Stripe forgé | Faible | Critique | Signature obligatoire, env check |
| R03 | Session admin compromise | Faible | Élevé | crypto.randomBytes, expiration 24h |
| R04 | Rate limit contourné | Moyenne | Moyen | Upstash Redis distribué |
| R05 | Images Unsplash indisponibles | Élevé | Moyen | Assets locaux ou Cloudinary |
| R06 | Core Web Vitals dégradés | Moyenne | Élevé | Monitoring continu, lazy loading |
| R07 | Build cassé en prod | Faible | Critique | CI/CD + branch protection + rollback Vercel |
| R08 | Spam formulaire contact | Élevée | Moyen | Rate limit + honeypot + Captcha (si nécessaire) |
| R09 | Perte de données DB | Très faible | Critique | Backup automatique Vercel/Postgres |
| R10 | Dépendance Sanity KO | Faible | Élevé | Fallback statique, cache ISR |

### Plan de contingence critique

#### R01 — Fuite RGPD
```
DÉTECTION : Alerte Sentry sur accès anormal, ou signalement externe
ACTION IMMÉDIATE :
  1. Couper l'endpoint concerné (variable env ou middleware)
  2. Évaluer les données exposées (scope, durée, personnes)
  3. Si données personnelles → notification CNIL sous 72h obligatoire
  4. Contacter les personnes concernées (si >250 personnes ou données sensibles)
  5. Post-mortem et correctif
```

#### R07 — Build cassé en prod
```
DÉTECTION : Alerte Sentry + Vercel notification
ACTION IMMÉDIATE :
  1. Rollback immédiat Vercel (< 2 min)
  2. Vérifier que le rollback est opérationnel
  3. Analyser les logs du build cassé
  4. Fix sur hotfix/* + re-déployer après validation preprod
```

---

## 11. DÉFINITIONS OF DONE

### DoD — Feature (minimum requis)

```
CODE
□ Fonctionnel selon les critères d'acceptation (User Story)
□ TypeScript : 0 erreur, 0 any implicite
□ Lint : 0 erreur, 0 warning
□ Pas de console.log
□ Pas de secrets hardcodés
□ Commentaires ARCH/SECURITY/PERF aux endroits critiques

TESTS
□ Test d'intégration si nouvel endpoint API
□ Test unitaire si logique complexe isolable
□ Test manuel complet (Happy path + cas d'erreur)

UX / UI
□ Responsive : mobile (375px) + desktop (1280px) validés
□ Testé sur Chrome + Safari (iOS prioritaire)
□ Animations avec prefers-reduced-motion
□ Accessibilité : navigation clavier + contraste OK

SEO (si page)
□ Metadata complète (title, description, OG, canonical)
□ JSON-LD si applicable

SÉCURITÉ (si endpoint ou auth)
□ Validation Zod serveur
□ Rate limiting en place
□ Auth vérifiée si nécessaire
□ Logs anonymisés

DÉPLOIEMENT
□ Commité sur branche feature
□ PR créée avec description
□ CI/CD passe (lint + type-check + tests)
□ Déployé et validé en recette
□ PRD mis à jour si comportement documenté change
```

### DoD — Sprint complet

```
□ Toutes les User Stories du sprint ont leur DoD feature validé
□ Déployé en preprod et validé par Kitty
□ Core Web Vitals : tous "Good"
□ 0 erreur critique Sentry sur 24h
□ Changelog mis à jour
□ PRD à jour
□ Prochains sprints ajustés si nécessaire
```

### DoD — Release production

```
□ DoD Sprint validé
□ Checklist pré-production complète (voir Phase D)
□ Snapshot DB prise
□ Stripe en mode LIVE
□ Monitoring opérationnel
□ Kitty a validé la version finale
□ Rollback plan communiqué
```

---

*BMAD Method — Kitty-Octa*
*Maintenu par le CTO IA + Dev*
*Ce document évolue à chaque retour d'expérience*