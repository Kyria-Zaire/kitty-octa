# Kitty-Octa – Site Web OctaviEvent

Site web moderne et épuré pour **Kitty-Octa** (OctaviEvent), branche dédiée à l’organisation d’événements sur mesure : wedding planning, décoration, papeterie personnalisée et création de layer cakes artisanaux.

## 🚀 Technologies

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling (mode sombre supporté sur l’admin)
- **React 18** pour l’interface utilisateur

## 📁 Structure du projet

```
kitty-octa/
├── app/
│   ├── page.tsx                    # Page d'accueil
│   ├── layout.tsx                  # Layout principal
│   ├── globals.css                 # Styles globaux
│   ├── not-found.tsx               # Page 404
│   ├── robots.ts                   # Directives crawlers (admin exclu)
│   ├── sitemap.ts                  # Sitemap SEO
│   ├── admin/                      # Dashboard admin (trafic, contenu, paramètres)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── a-propos/                   # À propos / Profil
│   ├── contact/                    # Formulaire de contact / devis
│   ├── mentions-legales/           # Mentions légales (RGPD)
│   ├── politique-de-confidentialite/ # Politique de confidentialité (RGPD)
│   ├── portfolio/                  # Galerie de projets
│   ├── services/                   # Services détaillés
│   └── tarifs/                     # Tarifs et formules
├── components/
│   ├── ConditionalLayout.tsx       # Header/Footer masqués sur /admin
│   ├── CookieBanner.tsx            # Bannière cookies & consentement RGPD
│   ├── Footer.tsx                  # Pied de page (logo, liens légaux)
│   ├── GoogleAnalytics.tsx         # GA4 conditionnel (après consentement)
│   ├── Header.tsx                  # Navigation
│   ├── Hero.tsx                    # Section hero
│   ├── PortfolioPreview.tsx
│   ├── ServicesPreview.tsx
│   └── Testimonials.tsx
├── lib/
│   └── analytics.ts               # Helpers analytics
└── public/
    └── images/                    # Logo et assets
```

## 🎨 Design

- **Esthétique** : Moderne, épurée et minimaliste
- **Ton** : Chaleureux et accessible
- **Couleurs** : Palette élégante avec accents rouge/rose
- **Typographie** : Playfair Display (titres), Inter (corps)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## 📄 Pages

| Page | Description |
|------|-------------|
| **Accueil** | Hero, aperçu des services, portfolio, témoignages |
| **Services** | 6 services : Wedding planning, Organisation d’événements, Layer cakes, Décoration d’événements, Papeterie personnalisée, etc. |
| **Portfolio** | Galerie de projets (mariages, anniversaires, demandes en mariage, wedding cakes) |
| **Tarifs** | Formules et tarifs par type de prestation |
| **Contact** | Formulaire de devis, email, WhatsApp, Instagram |
| **À propos** | Profil (Octavie) et présentation Kitty-Octa / OctaviEvent |
| **Politique de confidentialité** | RGPD, cookies, données personnelles |
| **Mentions légales** | Éditeur, hébergement, propriété intellectuelle |
| **Admin** | Dashboard (trafic & conversions, contenu, audience, paramètres, thème clair/sombre) |

## ✨ Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Navigation fluide avec menu mobile
- Formulaire de contact multi-étapes
- Images optimisées (Next.js Image)
- SEO : metadata, sitemap, robots.txt
- **RGPD** : bannière cookies, consentement (nécessaire / analytique), politique de confidentialité et mentions légales
- **Google Analytics (GA4)** : chargé uniquement après consentement cookies, IP anonymisée
- Dashboard admin : onglets Trafic & Conversions, Contenu, Audience, Paramètres (thème clair/sombre)
- Page 404 personnalisée

## 🚀 Déploiement

Le site est prêt pour un déploiement sur **Vercel**.

📖 **Guide détaillé** : [DEPLOYMENT_VERCEL.md](./DEPLOYMENT_VERCEL.md)

### Déploiement rapide

1. Pousser le code sur GitHub
2. Connecter le dépôt à [Vercel](https://vercel.com)
3. Configurer les variables d’environnement (ex. `NEXT_PUBLIC_GA_ID` pour Google Analytics)
4. Les déploiements se font automatiquement à chaque push sur la branche liée

## 📊 Google Analytics

Le site utilise Google Analytics 4 (GA4), chargé **uniquement après acceptation des cookies analytiques** (conformité RGPD).

1. Créer un compte sur [Google Analytics](https://analytics.google.com/)
2. Créer une propriété pour le site
3. Récupérer l’ID de mesure (format `G-XXXXXXXXXX`)
4. **En local** : fichier `.env.local` avec `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
5. **Sur Vercel** : ajouter la variable dans les paramètres du projet

📖 **Guide pas à pas** (y compris compte Google avec email non-Gmail) : [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)

## 📧 Contact

- **Email** : kitty-octa@outlook.fr
- **WhatsApp** : lien dans le footer et sur la page Contact
- **Instagram** : [kitty__octa](https://www.instagram.com/kitty__octa?igsh=OXJweXExZjNscnhw)
- **Zone** : Paris / Amiens (Hauts-de-France & Île-de-France)

---

Créé avec ❤️ pour Octavie – Kitty-Octa / OctaviEvent
