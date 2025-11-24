# Configuration Google Analytics

Ce guide vous explique comment configurer Google Analytics pour le site Kitty-Octa.

## 📋 Étapes de configuration

### 1. Créer un compte Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Commencer la mesure"**

### 2. Créer une propriété

1. Donnez un nom à votre compte (ex: "Kitty-Octa")
2. Configurez les paramètres de partage de données (optionnel)
3. Cliquez sur **"Suivant"**
4. Donnez un nom à votre propriété (ex: "Kitty-Octa Website")
5. Sélectionnez votre fuseau horaire et devise
6. Cliquez sur **"Suivant"**

### 3. Configurer les informations sur votre entreprise

1. Sélectionnez votre secteur d'activité (ex: "Services professionnels")
2. Choisissez la taille de votre entreprise
3. Sélectionnez comment vous prévoyez d'utiliser Google Analytics
4. Cliquez sur **"Créer"**
5. Acceptez les conditions d'utilisation

### 4. Obtenir votre ID de mesure

1. Dans la page d'accueil de Google Analytics, vous verrez votre **ID de mesure**
2. Il commence par **G-** suivi de lettres et chiffres (ex: `G-XXXXXXXXXX`)
3. **Copiez cet ID** - vous en aurez besoin pour la prochaine étape

### 5. Configurer le fichier .env.local

**Option A : Utiliser le script automatique (recommandé)**

1. Ouvrez PowerShell dans le dossier du projet
2. Exécutez le script :
   ```powershell
   .\setup-analytics.ps1
   ```
3. Suivez les instructions à l'écran

**Option B : Création manuelle**

1. À la racine du projet, créez un fichier nommé `.env.local`
2. Ajoutez la ligne suivante en remplaçant `G-XXXXXXXXXX` par votre véritable ID :

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Exemple :**
```env
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```

### 6. Redémarrer le serveur de développement

1. Arrêtez le serveur actuel (Ctrl+C dans le terminal)
2. Redémarrez-le avec :

```bash
npm run dev
```

## ✅ Vérification

Pour vérifier que Google Analytics fonctionne correctement :

1. Ouvrez votre site dans le navigateur
2. Ouvrez les **Outils de développement** (F12)
3. Allez dans l'onglet **Network** (Réseau)
4. Filtrez par "gtag" ou "analytics"
5. Vous devriez voir des requêtes vers `google-analytics.com` ou `googletagmanager.com`

Vous pouvez aussi utiliser l'extension [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) pour Chrome.

## 📊 Événements trackés

Le site track automatiquement :

- ✅ **Vues de pages** : Toutes les pages visitées
- ✅ **Clics sur CTA** : Tous les boutons "Demander un devis", "Découvrir nos réalisations", etc.
- ✅ **Soumissions de formulaire** : Formulaire de contact
- ✅ **Navigation** : Clics sur les onglets de services
- ✅ **Vues de portfolio** : Ouverture des modales de projets

## 🔍 Voir les données dans Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Sélectionnez votre propriété
3. Les données peuvent prendre jusqu'à 24-48h pour apparaître dans les rapports standards
4. Pour voir les données en temps réel, allez dans **Rapports** > **Temps réel**

## 🚨 Dépannage

### Le tracking ne fonctionne pas

1. Vérifiez que le fichier `.env.local` existe et contient bien `NEXT_PUBLIC_GA_ID`
2. Vérifiez que vous avez redémarré le serveur après avoir créé/modifié `.env.local`
3. Vérifiez que votre ID commence bien par `G-`
4. Vérifiez la console du navigateur pour d'éventuelles erreurs

### Les données n'apparaissent pas

- Les données peuvent prendre 24-48h pour apparaître dans les rapports standards
- Utilisez la vue **Temps réel** pour voir les données immédiatement
- Vérifiez que vous n'avez pas de bloqueur de publicités qui bloque Google Analytics

---

**Besoin d'aide ?** Consultez la [documentation officielle de Google Analytics](https://support.google.com/analytics)

