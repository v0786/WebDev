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
    golang-go \
    chromium \
    chromium-sandbox \
    procps \
    lsof \
    jq \
    unzip

echo "[✓] APT packages installed."

# Auto-detect GOROOT in Debian PRoot environment
if [ -d "/usr/lib/go" ]; then
    export GOROOT=/usr/lib/go
else
    DETECTED_GOROOT="$(ls -d /usr/lib/go* 2>/dev/null | head -n1)"
    if [ -n "$DETECTED_GOROOT" ]; then
        export GOROOT="$DETECTED_GOROOT"
    fi
fi

export GOPATH="$HOME/go"
export PATH="$GOROOT/bin:$GOPATH/bin:$PATH"
export CHROME_BIN=/usr/bin/chromium
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Persist environment variables in ~/.bashrc
if ! grep -q "GOROOT" "$HOME/.bashrc" 2>/dev/null; then
    echo "export GOROOT=${GOROOT:-/usr/lib/go}" >> "$HOME/.bashrc"
    echo "export GOPATH=\$HOME/go" >> "$HOME/.bashrc"
    echo "export PATH=\$GOROOT/bin:\$GOPATH/bin:\$PATH" >> "$HOME/.bashrc"
    echo "export CHROME_BIN=/usr/bin/chromium" >> "$HOME/.bashrc"
    echo "export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1" >> "$HOME/.bashrc"
fi

mkdir -p "$GOPATH/bin" logs /tmp/gmaps_data

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
