#!/usr/bin/env bash
# PRoot Debian Bootstrap & Dependency Installer
set -e

echo "========================================"
echo " 📦 Installing Native Debian Dependencies"
echo "========================================"

# Update APT & install required packages
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

# Ensure Go works — if Debian APT go binary fails, install official Go ARM64 binary tarball
if ! go version >/dev/null 2>&1; then
    echo "[+] APT Go failed or GOROOT missing. Installing official Go ARM64 runtime..."
    GO_TAR="go1.22.5.linux-arm64.tar.gz"
    wget -q "https://go.dev/dl/${GO_TAR}" -O "/tmp/${GO_TAR}"
    rm -rf /usr/local/go
    tar -C /usr/local -xzf "/tmp/${GO_TAR}"
    rm -f "/tmp/${GO_TAR}"
    export GOROOT=/usr/local/go
else
    if [ -d "/usr/lib/go" ]; then
        export GOROOT=/usr/lib/go
    else
        export GOROOT="$(ls -d /usr/lib/go* 2>/dev/null | head -n1)"
    fi
fi

export GOPATH="$HOME/go"
export PATH="$GOROOT/bin:/usr/local/go/bin:$GOPATH/bin:$PATH"
export CHROME_BIN=/usr/bin/chromium
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

# Persist environment variables in ~/.bashrc & /etc/profile
for RC in "$HOME/.bashrc" "/etc/profile"; do
    if [ -f "$RC" ] && ! grep -q "GOROOT" "$RC" 2>/dev/null; then
        echo "export GOROOT=${GOROOT:-/usr/local/go}" >> "$RC"
        echo "export GOPATH=\$HOME/go" >> "$RC"
        echo "export PATH=\$GOROOT/bin:/usr/local/go/bin:\$GOPATH/bin:\$PATH" >> "$RC"
        echo "export CHROME_BIN=/usr/bin/chromium" >> "$RC"
        echo "export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1" >> "$RC"
    fi
done

mkdir -p "$GOPATH/bin" logs /tmp/gmaps_data

echo "[✓] Go compiler verified: $(go version)"

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
