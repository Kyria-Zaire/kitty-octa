# Kitty-Octa - Site Web OctaviEvent

Site web moderne et épuré pour **Kitty-Octa** (OctaviEvent), spécialisée dans l'organisation d'événements sur mesure, le wedding planning et la création de layer cakes artisanaux.

## 🚀 Technologies

- **Next.js 14** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling moderne et épuré
- **React 18** pour l'interface utilisateur

## 📁 Structure du projet

```
kitty-octa/
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── services/         # Page Services
│   ├── portfolio/        # Page Portfolio
│   ├── tarifs/          # Page Tarifs
│   ├── contact/         # Page Contact/Devis
│   ├── a-propos/        # Page À propos
│   ├── blog/            # Page Blog
│   ├── layout.tsx       # Layout principal
│   └── globals.css      # Styles globaux
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Footer.tsx       # Pied de page
│   ├── Hero.tsx         # Section hero
│   ├── ServicesPreview.tsx
│   ├── PortfolioPreview.tsx
│   └── Testimonials.tsx
└── ...
```

## 🎨 Design

- **Esthétique** : Moderne, épurée et minimaliste
- **Ton** : Chaleureux et accessible
- **Couleurs** : Palette élégante avec des accents rouge/rose
- **Typographie** : Playfair Display pour les titres, Inter pour le corps

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

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📄 Pages

- **Accueil** : Hero percutant, aperçu des services, portfolio et témoignages
- **Services** : Détails complets des 4 services principaux
- **Portfolio** : Galerie de projets avec mock-ups
- **Tarifs** : Plans tarifaires et services complémentaires
- **Contact** : Formulaire de devis et informations de contact
- **À propos** : Profil professionnel et parcours
- **Blog** : Articles de conseils et tendances

## ✨ Fonctionnalités

- Design responsive (mobile, tablette, desktop)
- Navigation fluide avec menu mobile
- Formulaire de contact fonctionnel
- Images optimisées avec Next.js Image
- SEO optimisé avec metadata
- Animations et transitions douces
- Google Analytics intégré avec tracking d'événements
- Page 404 personnalisée

## 📝 Contenu

Le site inclut :
- Des services détaillés et crédibles
- Des projets mock-ups pour le portfolio
- Des témoignages fictifs mais réalistes
- Des articles de blog pour le référencement

## 🚀 Déploiement

Le site est prêt à être déployé sur **Vercel** (hébergement gratuit recommandé).

📖 **Guide de déploiement complet** : Voir [DEPLOYMENT_VERCEL.md](./DEPLOYMENT_VERCEL.md)

### Déploiement rapide

1. Poussez votre code sur GitHub
2. Connectez votre repository à [Vercel](https://vercel.com)
3. Configurez les variables d'environnement (Google Analytics)
4. C'est tout ! Vercel déploie automatiquement

## 📊 Google Analytics

Le site est configuré pour utiliser Google Analytics. Pour l'activer :

1. Créez un compte sur [Google Analytics](https://analytics.google.com/)
2. Créez une propriété pour votre site
3. Copiez votre ID de mesure (format : `G-XXXXXXXXXX`)
4. **En local** : Créez un fichier `.env.local` avec `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
5. **Sur Vercel** : Ajoutez la variable d'environnement dans les paramètres du projet

📖 **Guide détaillé** : Voir [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)

## 📧 Contact

- Email : mambuocta@jotmail.com
- Téléphone : +33 7 61 79 66 28
- Zone : Paris / Amiens (Hauts-de-France & Île-de-France)

---

Créé avec ❤️ pour Octavie MAMBU DIEMFUKA - Kitty-Octa

