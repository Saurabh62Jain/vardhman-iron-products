@echo off
title Vardhman Iron Products - Website Server
color 0B

cd /d "%~dp0"

echo ======================================================================
echo           VARDHMAN IRON PRODUCTS - NAI BASTI, BINA (M.P.)
echo       Domestic Flour Mill, Desert Cooler & Steel Furniture
echo                   Direct Helpline: 9425424932
echo ======================================================================
echo.
echo [*] Starting Vardhman Local Web Server...
echo [*] Browser will open automatically once server is active.
echo.

:: Run powershell server
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [!] Server encountered an issue. Opening website directly in browser...
    start "" "%~dp0index.html"
)

echo.
echo [!] Server session stopped.
pause
