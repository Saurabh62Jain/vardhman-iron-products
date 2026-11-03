param(
    [int]$Port = 8080,
    [string]$Root = $PSScriptRoot,
    [switch]$NoBrowser
)

# Resolve root path robustly
if ([string]::IsNullOrWhiteSpace($Root) -or !(Test-Path $Root)) {
    $Root = (Get-Location).Path
}
if (!(Test-Path (Join-Path $Root "index.html"))) {
    $Root = "e:\Vardhman_Ji"
}

# Candidate ports to try
$candidatePorts = @($Port, 8081, 8082, 8088, 5000, 3000, 8888, 9090)
$listener = $null
$prefix = $null
$boundPort = $null

foreach ($p in $candidatePorts) {
    $candidateListener = New-Object System.Net.HttpListener
    $candidatePrefix = "http://localhost:$p/"
    try {
        $candidateListener.Prefixes.Add($candidatePrefix)
        $candidateListener.Start()
        $listener = $candidateListener
        $boundPort = $p
        $prefix = $candidatePrefix
        break
    } catch {
        if ($candidateListener) {
            try { $candidateListener.Close() } catch {}
        }
    }
}

if ($null -eq $listener) {
    Write-Host "[WARNING] Could not bind local HTTP port. Launching website directly in browser..." -ForegroundColor Yellow
    $indexPath = Join-Path $Root "index.html"
    Start-Process $indexPath
    exit 0
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  [SUCCESS] VARDHMAN WEB SERVER IS RUNNING!" -ForegroundColor Cyan
Write-Host "  URL: $prefix" -ForegroundColor Yellow
Write-Host "  Root: $Root" -ForegroundColor Gray
Write-Host "  Helpline: 9425424932 (Bina, M.P.)" -ForegroundColor White
Write-Host "  Press Ctrl+C in this window to stop the server." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

# Launch browser once the listener is definitely active and accepting requests
if (!$NoBrowser) {
    Start-Process $prefix
}

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".svg"   = "image/svg+xml"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".png"   = "image/png"
    ".webp"  = "image/webp"
    ".json"  = "application/json; charset=utf-8"
    ".ico"   = "image/x-icon"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $urlPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($urlPath)) {
                $urlPath = "index.html"
            }
            $urlPath = [System.Uri]::UnescapeDataString($urlPath)

            $filePath = Join-Path $Root $urlPath

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                $response.ContentType = $contentType
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.OutputStream.Write($notFound, 0, $notFound.Length)
            }
        } finally {
            try { $response.Close() } catch {}
        }
    } catch {
        # Loop continues gracefully if an individual connection drops
    }
}
