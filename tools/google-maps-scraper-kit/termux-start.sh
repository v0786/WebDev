#!/usr/bin/env bash
# Termux Android Local Scraper Launcher with Cloudflare HTTPS Tunnel
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=================================================="
echo " 📱 Android Termux Scraper + Cloudflare Tunnel"
echo "=================================================="

# 1. Verify Go, Git, Curl & Network Tools
if ! command -v go >/dev/null 2>&1 || ! command -v git >/dev/null 2>&1 || ! command -v curl >/dev/null 2>&1; then
    echo "⚡ Installing Go, Git & Curl for Android Termux..."
    pkg update -y
    pkg install golang git curl -y
fi

export PATH="$HOME/go/bin:$GOPATH/bin:$PREFIX/bin:$PATH"

# 2. Check / Install cloudflared on Termux
if ! command -v cloudflared >/dev/null 2>&1 && [ ! -f "$PREFIX/bin/cloudflared" ]; then
    echo "⚡ Installing Cloudflare Tunnel (cloudflared)..."
    if pkg install cloudflared -y >/dev/null 2>&1; then
        echo " [✓] cloudflared installed via pkg."
    else
        echo " 📦 Fetching cloudflared ARM64 binary..."
        curl -fsSL https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64 -o "$PREFIX/bin/cloudflared" 2>/dev/null || \
        curl -fsSL https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64 -o "$HOME/go/bin/cloudflared" 2>/dev/null || true
        chmod +x "$PREFIX/bin/cloudflared" 2>/dev/null || chmod +x "$HOME/go/bin/cloudflared" 2>/dev/null || true
    fi
fi

# 3. Check / Install google-maps-scraper binary
if ! command -v google-maps-scraper >/dev/null 2>&1 && [ ! -f "$HOME/go/bin/google-maps-scraper" ]; then
    echo "📦 Compiling native Android ARM64 scraper binary (go install)..."
    go install github.com/gosom/google-maps-scraper@latest || true
fi

PORT=8080
export PORT="${PORT}"

echo ""
echo "🚀 Starting Google Maps REST Scraper Service on Android Termux..."

# Start internal scraper in background if binary exists
SCRAPER_BIN="$(command -v google-maps-scraper || echo "$HOME/go/bin/google-maps-scraper")"
if [ -f "$SCRAPER_BIN" ]; then
    echo " [✓] Starting internal engine on 127.0.0.1:8081..."
    "$SCRAPER_BIN" -web -addr 127.0.0.1:8081 -data-folder /tmp >/dev/null 2>&1 &
fi

# Start proxy in background
echo " [✓] Starting API proxy on 127.0.0.1:${PORT}..."
go run proxy.go >/dev/null 2>&1 &
PROXY_PID=$!

sleep 2

echo ""
echo "🟢 Local API Server Active: http://127.0.0.1:${PORT}"
echo ""

CLOUDFLARED_BIN="$(command -v cloudflared || echo "$PREFIX/bin/cloudflared")"

if [ -f "$CLOUDFLARED_BIN" ] || command -v cloudflared >/dev/null 2>&1; then
    echo "=================================================="
    echo " 🌐 Launching Cloudflare HTTPS Tunnel for Mobile Portal"
    echo "=================================================="
    echo " 📌 Copy your https://xxx.trycloudflare.com URL below"
    echo "    and paste it into the Web Portal Settings!"
    echo "=================================================="
    exec cloudflared tunnel --url "http://127.0.0.1:${PORT}"
else
    echo "Open Chrome -> Go to: https://v0786.github.io/WebDev/#/sales"
    echo "Connect to: http://127.0.0.1:${PORT}"
    wait $PROXY_PID
fi
