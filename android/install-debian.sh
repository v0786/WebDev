#!/usr/bin/env bash
# PRoot Debian Bootstrap & Dependency Installer
set -e

echo "========================================"
echo " 📦 Installing Native Debian Dependencies"
echo "========================================"

# Update APT & install only required packages
export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    wget \
    git \
    build-essential \
    golang \
    chromium \
    chromium-sandbox \
    procps \
    lsof \
    jq \
    unzip

echo "[✓] APT packages installed."

# Configure Environment
export PATH="$HOME/go/bin:$PATH"
export CHROME_BIN=/usr/bin/chromium
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

mkdir -p "$HOME/go/bin" logs /tmp/gmaps_data

# Install native ARM64 google-maps-scraper binary via Go
echo "[+] Installing native google-maps-scraper Go binary..."
go install github.com/gosom/google-maps-scraper@latest || true

# Pre-compile CORS proxy if source exists
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$ROOT_DIR"

if [ -f "tools/google-maps-scraper-kit/proxy.go" ]; then
    echo "[+] Pre-compiling CORS proxy binary..."
    (cd tools/google-maps-scraper-kit && CGO_ENABLED=0 go build -ldflags="-s -w" -o cors-proxy proxy.go) || true
fi

echo "========================================"
echo " [✓] Debian PRoot Setup Complete!"
echo "========================================"
