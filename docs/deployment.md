# Guide de déploiement — Kitty-Octa

## Environnements

| Env | Branch | URL cible | Stripe | Sanity |
|-----|--------|-----------|--------|--------|
| DEV | feature/* | localhost:3000 | test | staging |
| RECETTE | recette | Preview Vercel | test | staging |
| PREPROD | preprod | Preview Vercel | test | staging |
| PROD | main | kitty-octa.vercel.app | live | production |

## Flux de déploiement

feature/* → develop (PR) → recette → preprod → main (prod)

Chaque push déclenche automatiquement :
- CI GitHub Actions (lint + type-check + test + build)
- Déploiement Vercel (Preview ou Production selon la branche)

## Rollback d'urgence (< 2 min)

1. Vercel Dashboard → Deployments
2. Identifier le dernier déploiement stable (vert)
3. "..." → "Promote to Production"

## Variables d'environnement

Voir `.env.example` pour la liste complète.
Les configurer dans : Vercel Dashboard → Settings → Environment Variables.
JAMAIS dans le code source ou dans git.

## Premier setup développeur

```bash
cp .env.example .env.local
# Remplir les valeurs dans .env.local
npm run env:check   # vérifier la config
npm run dev         # démarrer
```
