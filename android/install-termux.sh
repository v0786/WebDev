#!/usr/bin/env bash
# Termux Bootstrap & PRoot Debian Installer
set -e

echo "========================================"
echo " 📱 Termux + PRoot Debian Installer"
echo "========================================"

# 1. Update Termux & Install Base Packages
echo "[1/5] Updating Termux & installing proot-distro..."
pkg update -y
pkg install proot-distro curl wget git net-tools lsof -y

# 2. Install Debian inside PRoot if not present
echo "[2/5] Setting up Debian PRoot container..."
if ! proot-distro list | grep -q "debian (installed)"; then
    proot-distro install debian
fi

# 3. Copy Project Files into Debian PRoot rootfs
echo "[3/5] Syncing project files into Debian PRoot filesystem..."
DEBIAN_ROOTFS="/data/data/com.termux/files/usr/var/lib/proot-distro/installed-rootfs/debian/root/scraper-kit"
mkdir -p "$DEBIAN_ROOTFS"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cp -r "$PROJECT_ROOT/"* "$DEBIAN_ROOTFS/" 2>/dev/null || true

# 4. Execute Debian Bootstrap inside PRoot
echo "[4/5] Running Debian dependency installer..."
proot-distro login debian -- bash -c "cd /root/scraper-kit && chmod +x android/*.sh tools/google-maps-scraper-kit/*.sh && ./android/install-debian.sh"

# 5. Create Termux Shortcut Launcher
echo "[5/5] Creating Termux shortcut launcher (~/run-scraper.sh)..."
cat << 'EOF' > "$HOME/run-scraper.sh"
#!/usr/bin/env bash
proot-distro login debian -- bash -c "cd /root/scraper-kit && ./android/run-scraper.sh"
EOF
chmod +x "$HOME/run-scraper.sh"

echo "========================================"
echo " [✓] Android Installation Complete!"
echo "========================================"
echo ""
echo "To start the scraper anytime in Termux, run:"
echo "  ~/run-scraper.sh"
echo ""
