#!/usr/bin/env bash
# First-Run Setup Verification for Google Maps Scraper Kit
set -e

echo "======================================================"
echo "  Google Maps Scraper Kit — First Run Environment Check"
echo "======================================================"
echo ""

MISSING=0

check_cmd() {
    if command -v "$1" >/dev/null 2>&1; then
        echo " [✓] $1 is installed: $($1 --version 2>&1 | head -n 1)"
    else
        echo " [✗] $1 is MISSING"
        MISSING=1
    fi
}

echo "Checking required dependencies..."
check_cmd "docker"
check_cmd "curl"

if docker compose version >/dev/null 2>&1; then
    echo " [✓] docker compose is installed: $(docker compose version | head -n 1)"
else
    echo " [✗] docker compose is MISSING"
    MISSING=1
fi

echo ""

if [ "$MISSING" -eq 1 ]; then
    echo "======================================================"
    echo "  ⚠️  Missing Dependencies Detected!"
    echo "======================================================"
    echo "Please install Docker Desktop or Docker Engine:"
    echo " - Linux (Ubuntu/Debian): sudo apt update && sudo apt install docker.io docker-compose-plugin -y"
    echo " - macOS / Windows: Download Docker Desktop from https://www.docker.com/products/docker-desktop"
    echo ""
    echo "After installation, ensure your user can run Docker without root, or run:"
    echo "  sudo usermod -aG docker \$USER"
    exit 1
else
    echo "======================================================"
    echo "  🟢 All prerequisites are met! Ready to run start-scraper.sh"
    echo "======================================================"
fi
