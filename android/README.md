# Google Maps Scraper — Native Android (Termux + PRoot Debian) Guide

This guide explains how to run the **Google Maps Scraper Engine** directly on your Android phone **100% natively without Docker** using **Termux** and **PRoot Debian**.

---

## 🏗️ Target Architecture

```text
Android Phone
│
├── Termux
│   └── proot-distro
│       └── Debian
│           ├── google-maps-scraper (Native Go ARM64)
│           ├── Chromium (ARM64 Headless)
│           └── HTTP API Server (0.0.0.0:8080)
│
└── Chrome / Mobile Browser
    └── WebDev Portal -> http://127.0.0.1:8080
```

---

## 🚀 Quick Start (Fresh Android Setup)

### 1. Install Termux
Download and install **Termux** from [F-Droid](https://f-droid.org/packages/com.termux/).

### 2. Run All-in-One Installer
Open **Termux** on your Android phone and execute:

```bash
pkg update -y && pkg install git -y
git clone https://github.com/v0786/WebDev.git
cd WebDev
chmod +x android/*.sh tools/google-maps-scraper-kit/*.sh
./android/install-termux.sh
```

---

## 🎮 Command Usage

### Start Scraper
```bash
~/run-scraper.sh
# or inside PRoot Debian:
./android/run-scraper.sh
```

### Stop Scraper
```bash
./android/stop-scraper.sh
```

### Check Scraper Status & Health
```bash
./android/status-scraper.sh
```

### Print Connection URLs & LAN IP
```bash
./android/print-connection.sh
```

### Stream Live Logs
```bash
tail -f logs/scraper.log logs/proxy.log
```

### Uninstall & Cleanup
```bash
./android/uninstall.sh
```

---

## 🌐 WebDev Portal Configuration Modes

After starting the scraper on your Android phone, connect your mobile browser:

1. Open Chrome on Android -> Go to: **`https://v0786.github.io/WebDev/#/sales`**
2. Tap **Lead Scraper** -> Tap **Scraper Connection** (top right status button).
3. Select your mode:

| Connection Mode | URL Format | Use Case |
| :--- | :--- | :--- |
| **Mode A: Same Device** | `http://127.0.0.1:8080` | Website & Scraper running on same Android phone |
| **Mode B: Same Wi-Fi LAN** | `http://<ANDROID-LAN-IP>:8080` | PC or tablet on same Wi-Fi network |
| **Mode C: Cloudflare Tunnel** | `https://xxx.trycloudflare.com` | Access from anywhere over secure HTTPS |

---

## 🔒 Cloudflare Tunnel Setup (HTTPS Mobile Access)

To bypass Android Mixed Content blocking when using GitHub Pages (`https://`):

```bash
# Inside Termux or Debian PRoot:
cloudflared tunnel --url http://127.0.0.1:8080
```
Copy the generated `https://xxx.trycloudflare.com` URL into **Mode C** in the portal!

---

## ⚡ Resource Optimization & Requirements

* **RAM Usage:** ~120MB - 250MB (Optimized headless Chromium flags `--no-sandbox --disable-dev-shm-usage`).
* **Storage Required:** ~650MB (Debian PRoot + Go binaries + Chromium).
* **CPU:** Quad-core ARM64 or better.
* **Storage Location:** `$HOME` (Termux private storage, high I/O performance).
