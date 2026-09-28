#!/usr/bin/env bash
# Termux Bootstrap & PRoot Debian Installer
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

# Check if running inside PRoot Debian container
if [ -f "/etc/debian_version" ]; then
    echo "========================================"
    echo " 📦 Inside PRoot Debian Container"
    echo "========================================"
    echo "[+] Delegating to native Debian installer..."
    chmod +x android/*.sh tools/google-maps-scraper-kit/*.sh 2>/dev/null || true
    exec ./android/install-debian.sh
fi

echo "========================================"
echo " 📱 Termux + PRoot Debian Installer"
echo "========================================"

# 1. Update Termux & Install Base Packages
if command -v pkg >/dev/null 2>&1; then
    echo "[1/5] Updating Termux & installing proot-distro..."
    pkg update -y || true
    pkg install proot-distro curl wget git net-tools lsof -y || true
fi

# 2. Install Debian inside PRoot if not present
echo "[2/5] Setting up Debian PRoot container..."
if command -v proot-distro >/dev/null 2>&1; then
    if ! proot-distro list | grep -i -q "debian"; then
        echo "Installing new Debian container..."
        proot-distro install debian || true
    else
        echo " [✓] Debian container already exists."
    fi
fi

# 3. Copy Project Files into Debian PRoot rootfs
echo "[3/5] Syncing project files into Debian PRoot filesystem..."
DEBIAN_ROOTFS="/data/data/com.termux/files/usr/var/lib/proot-distro/installed-rootfs/debian/root/scraper-kit"
mkdir -p "$DEBIAN_ROOTFS"

cp -r "$PROJECT_ROOT/"* "$DEBIAN_ROOTFS/" 2>/dev/null || true

# 4. Execute Debian Bootstrap inside PRoot
echo "[4/5] Running Debian dependency installer inside PRoot..."
if command -v proot-distro >/dev/null 2>&1; then
    proot-distro login debian -- bash -c "cd /root/scraper-kit && chmod +x android/*.sh tools/google-maps-scraper-kit/*.sh && ./android/install-debian.sh"
else
    chmod +x android/*.sh tools/google-maps-scraper-kit/*.sh 2>/dev/null || true
    ./android/install-debian.sh
fi

# 5. Create Termux Shortcut Launcher
echo "[5/5] Creating Termux shortcut launcher (~/run-scraper.sh)..."
cat << 'EOF' > "$HOME/run-scraper.sh"
#!/usr/bin/env bash
if command -v proot-distro >/dev/null 2>&1; then
    proot-distro login debian -- bash -c "cd /root/scraper-kit && ./android/run-scraper.sh"
else
    cd "$HOME/WebDev" && ./android/run-scraper.sh
fi
EOF
chmod +x "$HOME/run-scraper.sh"

echo "========================================"
echo " [✓] Android Installation Complete!"
echo "========================================"
echo ""
echo "To start the scraper anytime in Termux, run:"
echo "  ~/run-scraper.sh"
echo ""
