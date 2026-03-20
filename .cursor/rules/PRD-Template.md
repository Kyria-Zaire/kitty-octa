# PRD — Product Requirements Document
# OctaviEvent by Kitty-Octa
# Version : 1.0 | Statut : VIVANT (mis à jour à chaque sprint)

---

> **Comment utiliser ce document**
> Ce PRD est la **source de vérité unique** du produit.
> Toute fonctionnalité non documentée ici n'existe pas officiellement.
> Toute divergence entre le code et ce PRD → le PRD a raison, le code est à corriger.
> Claude Code et Cursor lisent ce fichier avant chaque session de développement.

---

## SOMMAIRE

1. [Vision Produit](#1-vision-produit)
2. [Contexte Business](#2-contexte-business)
3. [Utilisateurs Cibles](#3-utilisateurs-cibles)
4. [Positionnement Concurrentiel](#4-positionnement-concurrentiel)
5. [Périmètre Fonctionnel](#5-périmètre-fonctionnel)
6. [Spécifications par Page](#6-spécifications-par-page)
7. [Parcours Utilisateur](#7-parcours-utilisateur)
8. [Exigences Non Fonctionnelles](#8-exigences-non-fonctionnelles)
9. [Design System](#9-design-system)
10. [SEO & Acquisition](#10-seo--acquisition)
11. [FOMO & Rétention](#11-fomo--rétention)
12. [Paiement & Devis](#12-paiement--devis)
13. [Admin & CMS](#13-admin--cms)
14. [Sécurité & RGPD](#14-sécurité--rgpd)
15. [Environnements & Déploiement](#15-environnements--déploiement)
16. [Métriques de Succès](#16-métriques-de-succès)
17. [Roadmap & Priorités](#17-roadmap--priorités)
18. [Glossaire](#18-glossaire)

---

## 1. VISION PRODUIT

### Énoncé de vision
> **OctaviEvent by Kitty-Octa** est la plateforme de référence pour l'organisation d'événements haut de gamme en Hauts-de-France. Elle transforme chaque visiteur en prospect qualifié grâce à une expérience web immersive, émotionnelle et différenciante — impossible à ignorer, difficile à quitter.

### Proposition de valeur unique
| Dimension | Ce qu'on offre |
|---|---|
| **Expérience** | Site luxury cinématique qui capte l'émotion, pas juste l'information |
| **Confiance** | Processus transparent, témoignages authentiques, expertise visible |
| **Accessibilité** | Prestation haut de gamme accessible, basée à Amiens |
| **Différenciation** | Seule plateforme événementielle de la région avec ce niveau d'UX |

### Ce que ce site N'est PAS
- ❌ Un simple portfolio statique
- ❌ Un site carte de visite générique
- ❌ Une plateforme marketplace (pas de multi-prestataires)
- ❌ Une boutique e-commerce autonome

### Ce que ce site EST
- ✅ Une plateforme de génération de leads premium
- ✅ Un outil de qualification et de conversion
- ✅ Une vitrine de marque à fort impact émotionnel
- ✅ Un moteur SEO local performant

---

## 2. CONTEXTE BUSINESS

### L'entreprise
```
Nom légal       : Kitty-Octa / OctaviEvent
Marque          : OctaviEvent by Kitty-Octa
Fondatrice      : Octavia (Kitty)
Localisation    : Amiens, Hauts-de-France (80)
Statut          : Débutante sur le marché (lancement 2024-2025)
Positionnement  : Luxury accessible, personnalisé, humain
```

### Services proposés
```
1. Organisation de mariages
   - Coordination jour J
   - Organisation complète (12-18 mois)
   - Wedding design & décoration

2. Événements corporate
   - Séminaires, team buildings
   - Galas, soirées d'entreprise
   - Conférences et lancements

3. Événements privés
   - Anniversaires marquants (18, 30, 40, 50 ans)
   - Fiançailles, PACS
   - Fêtes de famille
```

### Contexte concurrentiel
```
Concurrents directs Amiens/Hauts-de-France :
- Prestataires établis depuis 5-15 ans
- Présence web souvent dépassée (sites 2015-2020)
- Faible différenciation UX
- SEO local non optimisé pour la plupart

Notre avantage : arriver avec 10 ans d'avance sur l'UX
```

### Objectifs business 12 mois
```
Leads qualifiés/mois      : 5 → 20
Taux de conversion lead   : 15% minimum
Chiffre d'affaires cible  : N/A (confidentiel)
Notoriété locale          : Top 3 Google "wedding planner Amiens"
Avis Google               : 4.8+ (15 avis minimum)
```

---

## 3. UTILISATEURS CIBLES

### Persona 1 — La Future Mariée (Primaire)
```
Prénom fictif   : Sophie
Âge             : 28-38 ans
Localisation    : Amiens et 80km alentour
Situation       : Fiancée depuis 3-12 mois, date de mariage fixée
Revenu          : Couple 50k-100k€/an
Comportement    : Recherche intensive sur Instagram, Pinterest, Google
Peurs           : Perdre le contrôle, prestataire peu fiable, budget dépassé
Désirs          : Mariage de rêve, déléguer en confiance, être surprise
Déclencheurs    : Recommandation, beau portfolio, processus clair
Device          : 70% mobile (Instagram → site)
Parcours type   : Instagram → site → portfolio → contact → devis
```

### Persona 2 — Le Responsable Communication Corp. (Secondaire)
```
Prénom fictif   : Thomas
Âge             : 35-50 ans
Fonction        : DirCom, RH, Office Manager
Entreprise      : PME/ETI Hauts-de-France (50-500 salariés)
Budget event    : 5k-50k€
Comportement    : Recherche rapide, décision budgétisée
Peurs           : Logistique ratée, image de l'entreprise ternie
Désirs          : Clé en main, professionnel, rapport qualité/prix
Déclencheurs    : Références corp, devis rapide, disponibilité
Device          : 60% desktop
Parcours type   : Google → services → process → contact → devis
```

### Persona 3 — La Famille Organisatrice (Tertiaire)
```
Prénom fictif   : Martine
Âge             : 45-65 ans
Contexte        : Organise anniversaire marquant ou fête de famille
Budget          : 2k-15k€
Comportement    : Bouche-à-oreille prioritaire, web de confirmation
Désirs          : Événement mémorable, tout géré, pas de stress
Déclencheurs    : Témoignages, galerie photos, tarification claire
```

---

## 4. POSITIONNEMENT CONCURRENTIEL

### Matrice de différenciation
```
                    PRIX ÉLEVÉ
                        │
   Concurrents          │      Notre cible future
   établis haut         │      (dans 2 ans)
   de gamme             │
                        │
EXPÉRIENCE ─────────────┼───────────────── EXPÉRIENCE
BASIQUE                 │                  PREMIUM
                        │
   Prestataires         │      KITTY-OCTA aujourd'hui
   génériques           │      (luxury accessible)
                        │
                    PRIX ACCESSIBLE
```

### Notre différenciation en 3 points
1. **UX premium** : seul acteur régional avec une expérience web cinématique
2. **Transparence** : processus en 4 étapes visible, prix indicatifs, réponse garantie sous 24h
3. **Personnalisation** : chaque client reçoit une attention individuelle (pas de formule catalogue)

---

## 5. PÉRIMÈTRE FONCTIONNEL

### MoSCoW — Priorisation

#### MUST HAVE (V1 — indispensable au lancement)
```
F01 - Page d'accueil avec hero animé et FOMO signals
F02 - Page Services (3 catégories : Mariages, Corporate, Privé)
F03 - Portfolio avec galerie filtrée (Masonry grid)
F04 - Formulaire contact multi-étapes (3 steps) avec validation
F05 - Page À Propos (brand story + équipe)
F06 - Page Process (4 étapes du parcours client)
F07 - Page Témoignages
F08 - Page Contact
F09 - Pages légales (Mentions légales + Politique confidentialité)
F10 - Header navigation sticky avec smooth scroll
F11 - Footer complet (liens, RS, contact, légal)
F12 - SEO on-page complet (metadata, OG, JSON-LD)
F13 - Formulaire contact fonctionnel (email reçu)
F14 - Cookie banner RGPD
F15 - Analytics GA4 (conditionnel au consentement)
F16 - Page 404 personnalisée
F17 - Sitemap.xml + robots.txt
F18 - Admin panel (visualiser les demandes de contact)
```

#### SHOULD HAVE (V1.5 — 1-2 mois après lancement)
```
F19 - CMS Sanity (gestion contenu autonome par Kitty)
F20 - Page Tarifs (fourchettes indicatives par catégorie)
F21 - Système de devis en ligne (formulaire avancé)
F22 - Blog / Journal (contenu SEO longue traîne)
F23 - Calendrier de disponibilités (affichage simple)
F24 - Galerie video (vignettes YouTube/Vimeo)
F25 - Partage sur réseaux sociaux (portfolio items)
```

#### COULD HAVE (V2 — 3-6 mois)
```
F26 - Espace client sécurisé (suivi de projet)
F27 - Module de réservation avec acompte en ligne (Stripe)
F28 - Chat en ligne (Intercom ou Crisp)
F29 - Devis PDF automatique
F30 - Intégration Google Reviews en temps réel
F31 - Newsletter (Brevo/Mailchimp)
F32 - Chatbot IA de qualification (Claude API)
```

#### WON'T HAVE (hors scope pour l'instant)
```
- Marketplace multi-prestataires
- Application mobile native
- Gestion comptable
- CRM complet
```

---

## 6. SPÉCIFICATIONS PAR PAGE

### F01 — Page d'accueil (Home)

**URL** : `/`
**Objectif** : Créer l'effet "wow", qualifier l'intention, pousser vers le contact

#### Sections (dans l'ordre)
```
1. HERO
   - Plein écran (100vh)
   - Image ou vidéo ambient haute qualité (mariage/événement)
   - Overlay gold semi-transparent
   - Titre principal : "L'événement de vos rêves, orchestré avec passion"
   - Sous-titre : "Wedding planner & événementiel à Amiens — Hauts-de-France"
   - CTA primaire : "Réserver une consultation gratuite" → #contact
   - CTA secondaire : "Découvrir nos créations" → /portfolio
   - Badge FOMO : "Agenda chargé — X disponibilités en 2025"
   - Scroll indicator animé (chevron ou ligne)
   - Animation : parallax au scroll + fade-in staggeré des éléments

2. SERVICES TEASER (3 cards)
   - Mariages | Corporate | Événements Privés
   - Icône gold + titre + description courte + "En savoir plus"
   - Animation : scroll reveal staggeré

3. CHIFFRES CLÉS (social proof)
   - X événements organisés | X ans d'expérience | X% clients satisfaits
   - Animation : compteur qui monte au scroll

4. PORTFOLIO SHOWCASE (3-4 photos)
   - Les meilleures réalisations
   - Hover : zoom + titre overlay
   - CTA : "Voir toutes nos créations" → /portfolio

5. PROCESSUS EN 4 ÉTAPES (teaser)
   - Consultation → Conception → Coordination → Jour J
   - Horizontal sur desktop, vertical sur mobile
   - CTA : "Découvrir notre approche" → /process

6. TÉMOIGNAGE HIGHLIGHT (1 featured)
   - Citation + photo + nom + type d'événement + étoiles
   - CTA : "Lire tous les témoignages" → /temoignages

7. CTA FINAL (section pleine largeur)
   - Background gold ou charcoal
   - "Votre événement mérite l'excellence"
   - CTA : "Démarrer mon projet" → /contact
   - Signal FOMO : "Réponse garantie sous 24h"
```

**Metadata SEO**
```typescript
title: "Wedding Planner & Événementiel Amiens | OctaviEvent by Kitty-Octa"
description: "Organisatrice d'événements haut de gamme à Amiens. Mariages, corporate, événements privés en Hauts-de-France. Consultation gratuite."
keywords: ["wedding planner Amiens", "organisateur événement Amiens", "mariage Hauts-de-France"]
```

---

### F02 — Page Services

**URL** : `/services`
**Objectif** : Qualifier l'intention, détailler l'offre, pousser vers le devis

#### Structure
```
1. PAGE HERO
   - Titre : "Nos Prestations"
   - Sous-titre : "Des services sur mesure pour chaque moment unique"
   - Breadcrumb : Accueil > Services

2. SERVICES DÉTAILLÉS (3 sections)
   Chaque service :
   - Image pleine largeur ou demi-page
   - Titre de la catégorie
   - Description détaillée (3-4 paragraphes)
   - Liste des inclusions (bullet points avec icônes gold)
   - Fourchette de prix indicative (si activée)
   - CTA : "Obtenir un devis personnalisé"

   2a. MARIAGES
       Catégories : Coordination Jour J | Organisation Complète | Wedding Design
       Prix indicatif : "À partir de X€ — devis sur mesure"

   2b. CORPORATE
       Catégories : Séminaires | Galas | Team Building | Lancements
       Prix indicatif : "À partir de X€ selon le nombre de participants"

   2c. ÉVÉNEMENTS PRIVÉS
       Catégories : Anniversaires | Fiançailles | Fêtes de famille
       Prix indicatif : "À partir de X€"

3. POURQUOI NOUS CHOISIR
   - 4-5 points de différenciation clés
   - Icônes gold + texte

4. CTA FINAL
   - "Quel type d'événement organisez-vous ?"
   - Sélecteur rapide → /contact (pré-rempli avec la catégorie)
```

---

### F03 — Page Portfolio

**URL** : `/portfolio`
**Objectif** : Prouver la qualité, créer le désir, inspirer confiance

#### Structure
```
1. PAGE HERO
   - Titre : "Nos Créations"
   - Sous-titre : "Chaque événement, une histoire unique"

2. FILTRES
   - Tous | Mariages | Corporate | Privés
   - Animation de filtrage fluide (Framer Motion layout animation)

3. GALERIE MASONRY GRID
   - Grille asymétrique (3 colonnes desktop, 2 tablette, 1 mobile)
   - Chaque card : image + overlay au hover (titre + catégorie + date)
   - Click : lightbox plein écran avec navigation prev/next
   - Lazy loading des images
   - Minimum 12 projets au lancement

4. DÉTAIL PROJET (modal ou page dédiée)
   - Galerie photos du projet (4-12 photos)
   - Type d'événement + lieu + date
   - Description courte
   - Témoignage client lié (si disponible)
   - CTA : "Créer un événement similaire"

5. CTA FINAL
   - "Votre événement pourrait être ici"
   - CTA → /contact
```

---

### F04 — Formulaire Contact Multi-Étapes

**URL** : `/contact`
**Objectif** : Qualifier le lead, collecter les infos essentielles, rassurer

#### Structure des 3 étapes
```
ÉTAPE 1 — QUI ÊTES-VOUS ?
  - Prénom + Nom (required)
  - Email (required, validation format)
  - Téléphone (required, format FR)
  - Comment avez-vous connu Kitty-Octa ? (select : Google, Instagram, Recommandation, Autre)

ÉTAPE 2 — VOTRE PROJET
  - Type d'événement (radio : Mariage, Corporate, Privé, Autre)
  - Date souhaitée (datepicker, min: +3 mois)
  - Nombre d'invités (select : <50 | 50-100 | 100-200 | 200+)
  - Budget approximatif (select : <5k | 5-10k | 10-20k | 20k+)
  - Lieu envisagé (text, optional)

ÉTAPE 3 — VOTRE MESSAGE
  - Décrivez votre projet (textarea, min 50 chars)
  - Fichiers joints (optional, max 5Mo, formats : pdf, jpg, png)
  - Acceptation RGPD (checkbox, required)
  - Newsletter opt-in (checkbox, optional)
  - CTA : "Envoyer ma demande"

POST-SOUMISSION
  - Page de confirmation animée
  - Message : "Merci {prénom} ! Votre demande a bien été reçue. Kitty vous contactera sous 24h."
  - Email de confirmation automatique envoyé au prospect
  - Email de notification envoyé à Kitty
```

#### Validation
```typescript
// Validation Zod par étape (lib/validations/contact.ts)
// Étape 1 : nom, email, téléphone FR, source
// Étape 2 : type, date (future), invités, budget
// Étape 3 : message (min 50 chars), RGPD accepté
```

---

### F05 — Page À Propos

**URL** : `/a-propos`
**Structure**
```
1. BRAND STORY — "L'histoire derrière OctaviEvent"
2. MISSION & VALEURS — Excellence | Authenticité | Passion | Bienveillance
3. PORTRAIT DE KITTY — Photo + bio + parcours
4. ÉQUIPE (si applicable)
5. CHIFFRES & RÉALISATIONS
6. CTA — "Travaillons ensemble"
```

---

### F06 — Page Process

**URL** : `/process`
**Structure**
```
ÉTAPE 1 : Consultation Initiale (gratuite, 30-60min)
ÉTAPE 2 : Conception & Proposition (devis personnalisé)
ÉTAPE 3 : Coordination & Suivi (jusqu'au Jour J)
ÉTAPE 4 : Votre Événement (et au-delà)

+ Timeline visuelle interactive
+ FAQ liée au process
+ CTA : "Démarrer l'aventure"
```

---

### F07 — Page Témoignages

**URL** : `/temoignages`
**Structure**
```
1. INTRO — "Ce que disent nos clients"
2. CAROUSEL FEATURED (3 témoignages premium avec photos)
3. GRILLE TÉMOIGNAGES (tous, avec filtres par type)
4. INTÉGRATION GOOGLE REVIEWS (V1.5)
5. CTA — "Rejoindre nos clients heureux"
```

---

### F18 — Admin Panel

**URL** : `/admin` (protégée)
**Fonctionnalités V1**
```
- Dashboard : compteurs (demandes totales, cette semaine, non lues)
- Liste des demandes de contact (tri par date, filtre par type)
- Détail d'une demande (toutes les infos du formulaire)
- Marquer comme lu / traité
- Export CSV simple
- Gestion session (login/logout)
```

---

## 7. PARCOURS UTILISATEUR

### Parcours principal — Lead mariage (mobile)

```
[Instagram Reels] → lien bio
        ↓
[Page d'accueil]
  → Hero : effet "wow" immédiat
  → Portfolio teaser : crédibilité
  → Témoignage : confiance
  → Badge FOMO : urgence
        ↓ (scroll ou CTA)
[Portfolio] → inspiration
        ↓ (CTA "Créer un événement similaire")
[Contact Step 1] → informations personnelles
        ↓
[Contact Step 2] → détails du projet
        ↓
[Contact Step 3] → message + envoi
        ↓
[Page confirmation] → "Merci ! Réponse sous 24h"
        ↓
[Email de confirmation] → mémorise la marque
        ↓
[Appel de Kitty sous 24h] → CONVERSION
```

### Parcours secondaire — Corporate (desktop)

```
[Google : "organisation événement Amiens"]
        ↓
[Page d'accueil] ou [Page Services] (SEO)
  → Services corporate : qualification
  → Process : rassurance
        ↓
[Contact] → formulaire pré-qualifié
        ↓
[Devis personnalisé] → CONVERSION
```

---

## 8. EXIGENCES NON FONCTIONNELLES

### Performance
```
LCP (Largest Contentful Paint)  : < 2.5s sur mobile 4G
CLS (Cumulative Layout Shift)   : < 0.1
INP (Interaction to Next Paint) : < 200ms
FCP (First Contentful Paint)    : < 1.8s
TTFB (Time to First Byte)       : < 600ms
Score PageSpeed Insights mobile : > 85
Score PageSpeed Insights desktop: > 95
```

### Disponibilité
```
Uptime cible          : 99.9% (Vercel SLA)
Monitoring            : Vercel Analytics + Sentry
Alertes               : Email + si possible Slack
Recovery time         : < 1h sur incidents critiques
```

### Compatibilité navigateurs
```
Chrome  : 2 dernières versions (support prioritaire)
Safari  : 2 dernières versions (iOS critique — 70% du trafic cible)
Firefox : 2 dernières versions
Edge    : 2 dernières versions
IE      : NON supporté
```

### Accessibilité
```
Standard : WCAG 2.1 niveau AA
Contraste : ratio ≥ 4.5:1 (texte normal), ≥ 3:1 (grand texte)
Navigation clavier : 100% des éléments interactifs accessibles
Screen readers : ARIA labels sur tous les éléments complexes
Images : Alt text descriptif obligatoire
Formulaires : Labels visibles, messages d'erreur explicites
```

### Responsive Design
```
Mobile first : breakpoint principal 375px (iPhone SE)
Breakpoints :
  sm  : 640px
  md  : 768px (tablette portrait)
  lg  : 1024px (tablette paysage / laptop)
  xl  : 1280px (desktop)
  2xl : 1536px (grand écran)
```

---

## 9. DESIGN SYSTEM

### Palette officielle
```css
/* Backgrounds */
--ivory:        #FDF8F2   /* bg principal — 60% de l'interface */
--beige:        #F5F1E8   /* bg sections alternées — 25% */
--white:        #FFFFFF   /* cards, formulaires */

/* Accents */
--gold:         #C9A84C   /* CTA, icônes, accents — 10% */
--gold-light:   #E8D5A3   /* hover sur éléments gold */
--gold-dark:    #A07830   /* pressed/active states */

/* Textes */
--charcoal:     #1A1A1A   /* texte principal */
--taupe:        #6B5C4A   /* texte secondaire */
--muted:        #9E8E7E   /* placeholders, captions */

/* Sémantiques */
--success:      #2D6A4F
--error:        #9B2335
--warning:      #B5850A
--info:         #1A4A8A
```

### Typographies
```css
/* Titres display (h1, h2, sections heroes) */
font-family: 'Playfair Display', serif;
weights: 400 (regular), 700 (bold), 400 italic

/* Corps et UI */
font-family: 'DM Sans', sans-serif;
weights: 300 (light), 400 (regular), 500 (medium)

/* Tailles responsives */
Display XL : clamp(3rem, 8vw, 6rem)      /* hero titles */
Display L  : clamp(2rem, 5vw, 3.5rem)    /* section titles */
H1         : clamp(1.75rem, 4vw, 2.5rem)
H2         : clamp(1.5rem, 3vw, 2rem)
H3         : 1.25rem
Body       : 1rem (16px)
Small      : 0.875rem (14px)
Caption    : 0.75rem (12px)
```

### Espacements signature
```css
/* Sections */
--section-py: clamp(4rem, 8vw, 8rem);   /* padding vertical sections */
--section-px: clamp(1.5rem, 6vw, 5rem); /* padding horizontal */

/* Composants */
--gap-xs:  0.5rem    /* 8px */
--gap-sm:  1rem      /* 16px */
--gap-md:  1.5rem    /* 24px */
--gap-lg:  2.5rem    /* 40px */
--gap-xl:  4rem      /* 64px */
--gap-2xl: 6rem      /* 96px */
```

### Animations
```css
/* Durées */
--duration-fast:    200ms  /* micro-interactions (hover) */
--duration-normal:  400ms  /* transitions UI */
--duration-slow:    800ms  /* apparitions au scroll */
--duration-cinematic: 1200ms /* éléments hero */

/* Easing signature luxury */
--ease-luxury: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 10. SEO & ACQUISITION

### Architecture SEO

#### Mots-clés cibles — Cluster principal
```
Intention transactionnelle (haute priorité) :
  "wedding planner Amiens"              Vol: ~200/mois  Diff: Faible
  "wedding planner Hauts-de-France"     Vol: ~100/mois  Diff: Faible
  "organisateur mariage Amiens"         Vol: ~150/mois  Diff: Faible
  "organisation événement Amiens"       Vol: ~80/mois   Diff: Faible
  "prestataire événementiel Picardie"   Vol: ~50/mois   Diff: Très faible

Intention informationnelle (SEO longue traîne V1.5) :
  "comment choisir son wedding planner"
  "budget mariage Hauts-de-France"
  "idées anniversaire 40 ans Amiens"
  "organisation séminaire entreprise Amiens"
```

#### Structure URLs SEO
```
/                                         → Home (mot-clé principal)
/services                                 → Hub services
/services/mariages                        → Sous-page mariage
/services/corporate                       → Sous-page corporate
/services/evenements-prives               → Sous-page privé
/portfolio                                → Portfolio
/portfolio/mariages                       → Portfolio filtré (V1.5)
/a-propos                                 → About (E-E-A-T)
/process                                  → Process
/temoignages                              → Témoignages (Reviews schema)
/contact                                  → Contact
/blog                                     → Blog (V1.5 — longue traîne)
```

#### JSON-LD obligatoire par page
```javascript
// Home
{
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "OctaviEvent by Kitty-Octa",
  "description": "Wedding planner et organisatrice d'événements à Amiens",
  "address": { "@type": "PostalAddress", "addressLocality": "Amiens", "addressRegion": "Hauts-de-France", "postalCode": "80000", "addressCountry": "FR" },
  "geo": { "@type": "GeoCoordinates", "latitude": 49.8942, "longitude": 2.2958 },
  "telephone": "+33X XX XX XX XX",
  "url": "https://kitty-octa.fr",
  "priceRange": "€€-€€€",
  "servesCuisine": null,
  "openingHours": "Mo-Fr 09:00-19:00",
  "sameAs": ["https://instagram.com/kitty_octa", "https://linkedin.com/in/kitty-octa"]
}

// Services
{ "@type": "Service", "serviceType": "Wedding Planning", "areaServed": "Amiens, Hauts-de-France" }

// Témoignages
{ "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person" } }
```

#### Google Business Profile
- Revendiquer et optimiser la fiche Google My Business
- Photos professionnelles (minimum 20)
- Catégorie : "Wedding Planner" + "Organisation d'événements"
- Lien vers le site
- Réponse aux avis sous 48h (politique)

---

## 11. FOMO & RÉTENTION

### Signaux FOMO — Implémentation

#### Badge Agenda Hero
```typescript
// Logique : calculer les mois restants avec des dates disponibles
// Affichage : "Agenda 2025 — X disponibilités restantes"
// Source : données CMS Sanity (Kitty met à jour manuellement)
// Fallback : "Agenda chargé — Prenez rendez-vous"
```

#### Indicateur de réactivité
```typescript
// "Réponse garantie sous 24h" — toujours vrai (engagement qualité)
// Sur le formulaire contact : "Kitty vous contacte généralement en moins de X heures"
// Source : métrique calculée depuis l'admin (temps moyen de réponse)
```

#### Social Proof dynamique
```typescript
// "X couples nous ont fait confiance en 2025" — mis à jour depuis CMS
// "Dernier événement organisé : [Ville] — [Type]" — optionnel, si accord client
```

#### Urgence saisonnière
```typescript
// Automne/Hiver : "Saison des mariages 2026 — Les réservations sont ouvertes"
// Printemps/Été : "Haute saison — Places limitées"
// Règle : JAMAIS de faux compte à rebours. Toujours basé sur des données réelles.
```

### Rétention — Mécanismes
```
- Smooth scroll Lenis : l'utilisateur ne veut pas partir
- Animations au scroll : récompense la curiosité
- Portfolio infini (lazy load) : encourage l'exploration
- Temps de lecture estimé sur le blog (V1.5)
- Newsletter : rester en contact
```

---

## 12. PAIEMENT & DEVIS

### V1 — Devis manuel (lancement)
```
Flux :
1. Prospect remplit le formulaire contact
2. Kitty reçoit la notification
3. Kitty rappelle sous 24h
4. Devis envoyé par email (PDF manuel ou Honeybook/Dubsado)
5. Acompte via virement ou Stripe Payment Link

Pas de paiement en ligne direct en V1.
```

### V2 — Paiement en ligne (3-6 mois)
```
Stripe Payment Links pour les acomptes
Flow :
1. Kitty génère un Payment Link depuis le dashboard Stripe
2. Envoie le lien au client par email
3. Client paie en ligne (CB, 3D Secure)
4. Webhook Stripe → marque le devis comme "acompte reçu" dans admin

Cartes test pour les envs dev/rec/pprod → voir .claude/environments.md
```

### V3 — Réservation en ligne (6-12 mois)
```
Formulaire devis avancé + paiement d'acompte intégré au site
Stripe Checkout ou Payment Element
Confirmation automatique + contrat numérique (HelloSign/DocuSign)
```

---

## 13. ADMIN & CMS

### Admin Panel (V1 — custom Next.js)
```
Accès       : /admin (protégé par middleware)
Auth        : session cookie signé (crypto.randomBytes)
Fonctions   :
  - Dashboard KPIs (leads, réponse, conversion)
  - Liste demandes contact (tri, filtre, statut)
  - Détail demande
  - Marquer lu/traité/archivé
  - Export CSV
```

### CMS Sanity (V1.5)
```
Schémas à créer :
  - portfolioItem (titre, catégorie, images, date, description, témoignage)
  - testimonial (auteur, photo, texte, étoiles, type événement)
  - teamMember (nom, rôle, photo, bio)
  - availabilitySignal (texte badge FOMO, actif/inactif)
  - blogPost (V1.5)

Workflow Sanity :
  - Dataset staging → aperçu sur preprod
  - Publish → dataset production
```

---

## 14. SÉCURITÉ & RGPD

### Données collectées
```
Via formulaire contact :
  - Prénom, Nom (nécessaire pour la prise de contact)
  - Email (nécessaire)
  - Téléphone (nécessaire)
  - Détails du projet (nécessaire)
  - Consentement marketing (optionnel)

Durée de conservation : 3 ans après dernier contact (RGPD)
Base légale : intérêt légitime (contact professionnel) + consentement
```

### Mentions RGPD obligatoires
```
- Politique de confidentialité complète (/politique-de-confidentialite)
- Mentions légales (/mentions-legales)
- Cookie banner avec granularité (Analytics opt-in)
- Droit d'accès/rectification/suppression : contact@kitty-octa.fr
- DPO : Kitty elle-même (micro-entreprise, pas de DPO obligatoire)
```

### Sécurité technique
```
→ Voir .claude/reviewer-securite-code.md pour le détail complet
Points critiques :
  - Sessions admin signées (crypto.randomBytes)
  - Rate limiting Upstash Redis
  - Validation Zod serveur sur tous les endpoints
  - Headers HTTP sécurité (CSP, HSTS, X-Frame-Options)
  - Webhook Stripe signé (stripe.webhooks.constructEvent)
  - Logs anonymisés (pas de PII)
```

---

## 15. ENVIRONNEMENTS & DÉPLOIEMENT

```
→ Voir .claude/environments.md et .claude/createur-workflow.md pour le détail complet

Résumé :
  DEV      : localhost:3000 | Stripe test | Sanity staging
  RECETTE  : rec.kitty-octa.fr | Stripe test | Sanity staging
  PREPROD  : pprod.kitty-octa.fr | Stripe test + 3DS | Sanity staging
  PROD     : kitty-octa.fr | Stripe LIVE | Sanity production
```

---

## 16. MÉTRIQUES DE SUCCÈS

### KPIs Produit (mesurés mensuellement)
```
Acquisition :
  Sessions organiques         → cible : +20%/mois (6 premiers mois)
  Position Google (KW cibles) → cible : Top 5 dans 6 mois
  Taux de rebond              → cible : < 45%
  Durée session               → cible : > 2min30

Conversion :
  Formulaires soumis/mois     → cible : 5 → 20 leads
  Taux remplissage form       → cible : > 60% (Step 1 → Step 3)
  Taux conversion lead→client → cible : > 15%

Expérience :
  Core Web Vitals             → tous "Good" (vert)
  Score PageSpeed mobile      → > 85
  Taux d'erreur JavaScript    → < 0.1% (Sentry)
  Uptime                      → > 99.9%
```

### Événements GA4 à tracker
```javascript
// Interactions clés
'hero_cta_click'              // CTA hero cliqué
'services_category_click'     // catégorie service consultée
'portfolio_item_open'         // projet portfolio ouvert
'contact_form_start'          // étape 1 commencée
'contact_form_step_2'         // étape 2 atteinte
'contact_form_step_3'         // étape 3 atteinte
'contact_form_submit'         // formulaire soumis
'contact_form_success'        // succès confirmé
'phone_click'                 // numéro de tel cliqué
'instagram_click'             // lien Instagram cliqué
```

---

## 17. ROADMAP & PRIORITÉS

### Sprint 0 — Infrastructure (avant développement)
```
□ Sécuriser les failles P0 (session token, password)
□ Mettre en place les 4 environnements Vercel
□ Configurer les webhooks Stripe par env
□ Installer les outils de monitoring (Sentry, Analytics)
□ Mettre en place le pipeline CI/CD GitHub Actions
```

### Sprint 1 — Core Pages (2-3 semaines)
```
□ Design system complet (tokens, composants UI)
□ Layout Header + Footer + Navigation
□ Page d'accueil (F01) avec animations
□ Page Services (F02)
□ Formulaire Contact multi-étapes (F04)
□ Pages légales (F09)
□ SEO on-page (F12)
□ Cookie banner (F14)
```

### Sprint 2 — Contenu & Portfolio (1-2 semaines)
```
□ Page Portfolio avec galerie (F03)
□ Page À Propos (F05)
□ Page Process (F06)
□ Page Témoignages (F07)
□ Admin panel V1 (F18)
□ Tests d'intégration
```

### Sprint 3 — Polish & Launch (1 semaine)
```
□ Optimisation Core Web Vitals
□ Tests cross-browser et cross-device
□ Audit SEO final
□ Tests de charge (formulaire contact)
□ Checklist sécurité complète
□ Go live sur kitty-octa.fr
```

### V1.5 — Post-lancement (1-2 mois)
```
□ CMS Sanity (F19)
□ Page Tarifs (F20)
□ Système de devis (F21)
□ Blog (F22)
□ Calendrier disponibilités (F23)
```

---

## 18. GLOSSAIRE

```
App Router      : Architecture de routage Next.js 14 (dossier app/)
CTA             : Call To Action — bouton d'appel à l'action
DM              : Direct Message (Instagram/WhatsApp)
FOMO            : Fear Of Missing Out — sentiment d'urgence/rareté
JSON-LD         : Format de données structurées pour le SEO
KPI             : Key Performance Indicator — indicateur clé
LCP             : Largest Contentful Paint — métrique Core Web Vitals
Lead            : Prospect ayant manifesté un intérêt (rempli le formulaire)
Masonry         : Disposition en grille asymétrique (Pinterest-style)
OG              : Open Graph — métadonnées pour le partage social
PRD             : Product Requirements Document — ce document
RGPD            : Règlement Général sur la Protection des Données (EU)
RSC             : React Server Components
SEO             : Search Engine Optimization
SSR             : Server-Side Rendering
Webhook         : Notification HTTP automatique entre services
```

---

*Document maintenu par : [Dev] + [CTO IA]*
*Dernière mise à jour : À compléter à chaque sprint*
*Prochain review : Après Sprint 1*