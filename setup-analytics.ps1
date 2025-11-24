# Script de configuration Google Analytics pour Kitty-Octa
# Ce script crée le fichier .env.local avec votre ID Google Analytics

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Configuration Google Analytics" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si le fichier existe déjà
if (Test-Path .env.local) {
    Write-Host "⚠️  Le fichier .env.local existe déjà." -ForegroundColor Yellow
    $overwrite = Read-Host "Voulez-vous le remplacer ? (o/n)"
    if ($overwrite -ne "o" -and $overwrite -ne "O") {
        Write-Host "❌ Opération annulée." -ForegroundColor Red
        exit
    }
}

Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Allez sur https://analytics.google.com/" -ForegroundColor White
Write-Host "2. Créez un compte ou connectez-vous" -ForegroundColor White
Write-Host "3. Créez une propriété pour votre site" -ForegroundColor White
Write-Host "4. Copiez votre ID de mesure (format: G-XXXXXXXXXX)" -ForegroundColor White
Write-Host ""

# Demander l'ID Google Analytics
$gaId = Read-Host "Entrez votre ID Google Analytics (G-XXXXXXXXXX)"

# Valider le format
if ($gaId -notmatch "^G-[A-Z0-9]+$") {
    Write-Host "❌ Format invalide. L'ID doit commencer par 'G-' suivi de lettres et chiffres." -ForegroundColor Red
    Write-Host "Exemple: G-ABC123XYZ" -ForegroundColor Yellow
    exit
}

# Créer le contenu du fichier
$content = @"
# Google Analytics ID
# Obtenez votre ID sur https://analytics.google.com/
# Format: G-XXXXXXXXXX
NEXT_PUBLIC_GA_ID=$gaId
"@

# Écrire le fichier
try {
    $content | Out-File -FilePath .env.local -Encoding utf8 -NoNewline
    Write-Host ""
    Write-Host "✅ Fichier .env.local créé avec succès !" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Contenu du fichier:" -ForegroundColor Cyan
    Write-Host $content -ForegroundColor Gray
    Write-Host ""
    Write-Host "🔄 Prochaine étape:" -ForegroundColor Yellow
    Write-Host "   Redémarrez votre serveur de développement avec:" -ForegroundColor White
    Write-Host "   npm run dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "✨ Google Analytics sera actif après le redémarrage !" -ForegroundColor Green
} catch {
    Write-Host "❌ Erreur lors de la création du fichier: $_" -ForegroundColor Red
    exit
}

