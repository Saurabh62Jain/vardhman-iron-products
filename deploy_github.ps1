param(
    [string]$RepoUrl
)

$git = "$env:LOCALAPPDATA\Programs\MinGit\cmd\git.exe"
if (!(Test-Path $git)) {
    $git = "git"
}

$repoPath = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($repoPath)) {
    $repoPath = "e:\Vardhman_Ji"
}
Set-Location $repoPath

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  VARDHMAN IRON PRODUCTS - GITHUB LIVE DEPLOYMENT HELPER" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "Please enter your GitHub Repository URL (HTTPS or SSH):" -ForegroundColor White
    Write-Host "Example: https://github.com/your-username/vardhman-iron-products.git" -ForegroundColor Gray
    $RepoUrl = Read-Host "GitHub Repo URL"
}

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "[!] No URL entered. Aborted." -ForegroundColor Red
    exit 1
}

# Add or update remote
$existingRemote = & $git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    & $git remote set-url origin $RepoUrl
    Write-Host "[*] Updated existing 'origin' remote URL to: $RepoUrl" -ForegroundColor Green
} else {
    & $git remote add origin $RepoUrl
    Write-Host "[*] Added 'origin' remote URL: $RepoUrl" -ForegroundColor Green
}

Write-Host "[*] Staging and verifying all files..." -ForegroundColor Gray
& $git add .
$status = & $git status --porcelain
if (![string]::IsNullOrWhiteSpace($status)) {
    & $git commit -m "Update: Ready for live deployment on GitHub Pages"
}

Write-Host "[*] Renaming branch to main..." -ForegroundColor Gray
& $git branch -M main

Write-Host "[*] Pushing files to GitHub ($RepoUrl)..." -ForegroundColor Yellow
& $git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  [SUCCESS] CODE PUSHED TO GITHUB SUCCESSFULLY!" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "TO MAKE YOUR WEBSITE LIVE ON THE INTERNET (GitHub Pages):" -ForegroundColor Cyan
    Write-Host "1. Open your repository on GitHub in your browser" -ForegroundColor White
    Write-Host "2. Go to 'Settings' tab > 'Pages' (on the left menu)" -ForegroundColor White
    Write-Host "3. Under 'Build and deployment' > 'Branch': select 'main' and '/ (root)'" -ForegroundColor White
    Write-Host "4. Click 'Save'" -ForegroundColor White
    Write-Host "5. Within 1 minute, your website will be LIVE at:" -ForegroundColor Yellow
    Write-Host "   https://<your-username>.github.io/<repository-name>/" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "[!] Push failed. Please check your GitHub permissions or credentials." -ForegroundColor Red
    Write-Host "    If your repo is new, make sure it was created without a default README." -ForegroundColor Yellow
}
