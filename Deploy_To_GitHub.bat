@echo off
title Deploy Vardhman Website to GitHub Pages
color 0A

cd /d "%~dp0"

echo ======================================================================
echo           VARDHMAN IRON PRODUCTS - GITHUB LIVE DEPLOYMENT
echo                   Direct Hotline: 9425424932
echo ======================================================================
echo.
echo [*] Launching GitHub Live Deployment Assistant...
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy_github.ps1"

echo.
pause
