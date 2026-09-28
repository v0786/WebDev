#!/usr/bin/env bash
# Cloudflare Quick Tunnel Launcher for Google Maps Scraper Kit
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

echo "========================================"
echo " Cloudflare Tunnel Launcher"
echo "========================================"

CLOUDFLARED_BIN=""

if command -v cloudflared >/dev/null 2>&1; then
    CLOUDFLARED_BIN="$(command -v cloudflared)"
elif [ -x "$ROOT_DIR/bin/cloudflared" ]; then
    CLOUDFLARED_BIN="$ROOT_DIR/bin/cloudflared"
else
    echo "⚡ 'cloudflared' CLI not found. Downloading automatic standalone binary..."
    mkdir -p "$ROOT_DIR/bin"
    ARCH="$(uname -m)"
    DOWNLOAD_URL=""
    if [ "$ARCH" = "x86_64" ]; then
        DOWNLOAD_URL="https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64"
    elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
        DOWNLOAD_URL="https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64"
    else
        echo "Unsupported OS architecture: $ARCH"
        exit 1
    fi

    echo "Downloading cloudflared from $DOWNLOAD_URL..."
    curl -L -o "$ROOT_DIR/bin/cloudflared" "$DOWNLOAD_URL"
    chmod +x "$ROOT_DIR/bin/cloudflared"
    CLOUDFLARED_BIN="$ROOT_DIR/bin/cloudflared"
    echo " [✓] Standalone cloudflared downloaded successfully!"
fi

# 2. Detect local scraper port
PORT=8080
MAPPED="$(docker compose port google-maps-scraper 8080 2>/dev/null | awk -F: '{print $NF}')"
if [ -n "$MAPPED" ]; then
    PORT=$MAPPED
fi

# 3. Verify local scraper is running
if ! curl -s "http://127.0.0.1:${PORT}/health" >/dev/null 2>&1; then
    echo "⚠️ Local scraper service on port $PORT is not responding."
    echo "Starting local scraper container stack..."
    ./scripts/start.sh
fi

echo ""
echo "Local scraper detected on http://127.0.0.1:${PORT}"
echo "Launching Cloudflare Quick Tunnel..."
echo "Copy the https://xxx.trycloudflare.com URL below into your Lead Generation Portal!"
echo ""

exec "$CLOUDFLARED_BIN" tunnel --url "http://127.0.0.1:${PORT}"
