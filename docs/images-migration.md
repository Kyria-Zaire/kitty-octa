# Migration images — Kitty-Octa

## État actuel (Sprint 1)
Images Unsplash en remote via `next/image`.
Domaine autorisé dans `next.config.js` : `images.unsplash.com`

## Photos à remplacer (Sprint 2 — dès que Kitty fournit ses photos)

| Section | URL Unsplash actuelle | Remplacer par |
|---------|------------------------|---------------|
| Hero background | `https://images.unsplash.com/photo-1519741497674-611481863552` | `public/images/hero.webp` |
| Portfolio item 1 | `https://images.unsplash.com/photo-1606800052052-a08af7148866` | `public/images/portfolio/mariage-1.webp` |
| Portfolio item 2 | `https://images.unsplash.com/photo-1511795409834-ef04bbd61622` | `public/images/portfolio/entreprise-1.webp` |
| Portfolio item 3 | `https://images.unsplash.com/photo-1464366400600-7168b8af9bc3` | `public/images/portfolio/mariage-2.webp` |
| Portfolio item 4 | `https://images.unsplash.com/photo-1530103862676-de8c9debad1d` | `public/images/portfolio/prive-1.webp` |
| Portfolio item 5 | `https://images.unsplash.com/photo-1478146896981-b80fe463b330` | `public/images/portfolio/mariage-3.webp` |
| Portfolio item 6 | `https://images.unsplash.com/photo-1522413452208-996ff3f3e740` | `public/images/portfolio/entreprise-2.webp` |

## Format requis pour les photos de Kitty
- Format : WebP (conversion automatique si JPG fourni)
- Résolution hero : 1920x1080 minimum
- Résolution portfolio : 1200x900 minimum
- Poids maximum : 200 Ko par image (après optimisation)
- Outil de conversion recommandé : `squoosh.app`

## Commande migration Sprint 2
Quand les photos sont prêtes dans `public/images/` :
1. Remplacer les URLs dans `portfolioImages[]` (`components/sections/PortfolioPreview.tsx`)
2. Remplacer le `src` du `HeroSection` (`components/sections/HeroSection.tsx`)
3. Supprimer `images.unsplash.com` de `next.config.js` `remotePatterns`
4. `npm run build` → vérifier que tout compile

