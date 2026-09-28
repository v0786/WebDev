import React, { useState } from 'react';
import { HelpCircle, X, Copy, Check, Terminal, Laptop, Smartphone, Globe, AlertTriangle, ExternalLink } from 'lucide-react';

interface ScraperHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnectionDrawer?: () => void;
}

type OSTab = 'linux' | 'macos' | 'windows' | 'termux';

export const ScraperHelpModal: React.FC<ScraperHelpModalProps> = ({
  isOpen,
  onClose,
  onOpenConnectionDrawer,
}) => {
  const [activeOS, setActiveOS] = useState<OSTab>('linux');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#12141C] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden font-sans text-gray-200 my-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                <span>Google Maps Scraper — Setup Guide</span>
              </h2>
              <p className="text-xs text-gray-400 font-mono">
                Step-by-step instructions to run the scraper engine on PC, Mac, or Android Termux
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* OS Selector Tabs */}
        <div className="px-6 py-3 bg-black/20 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-gray-400 font-mono uppercase font-bold mr-2">Select OS:</span>
          <button
            onClick={() => setActiveOS('linux')}
            className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeOS === 'linux'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            <span>Linux / Ubuntu</span>
          </button>
          <button
            onClick={() => setActiveOS('macos')}
            className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeOS === 'macos'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            <span>macOS</span>
          </button>
          <button
            onClick={() => setActiveOS('windows')}
            className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeOS === 'windows'
                ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
            }`}
          >
            <span>Windows (WSL2 / Docker)</span>
          </button>
          <button
            onClick={() => setActiveOS('termux')}
            className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeOS === 'termux'
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-emerald-400 hover:text-white border border-emerald-500/30'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>📱 Android (Termux)</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Quick Overview Notice */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-400 font-bold block mb-1">
                {activeOS === 'termux' ? '📱 Mobile Local Scraping (Android Termux)' : 'Why run locally?'}
              </strong>
              {activeOS === 'termux'
                ? 'You can run the Go scraper engine directly on your Android phone inside Termux without needing a PC! Connect your phone browser to http://127.0.0.1:8080.'
                : 'Google Maps actively blocks synthetic cloud IPs. Running locally uses your network for 100% real lead search results with phone numbers and ratings!'}
            </div>
          </div>

          {activeOS === 'termux' ? (
            /* ANDROID TERMUX METHOD */
            <div className="space-y-6">
              
              {/* TERMUX STEP 1 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Install Termux & Dependencies on Android
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>Open <strong>Termux</strong> app on your Android phone and install Go & Git:</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      pkg update && pkg install golang git -y
                    </pre>
                    <button
                      onClick={() => handleCopy('pkg update && pkg install golang git -y', 101)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 101 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* TERMUX STEP 2 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Clone Repository & Navigate
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>Clone the project with submodules and navigate to the scraper kit directory in Termux:</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      git clone https://github.com/v0786/WebDev.git && cd WebDev && git submodule update --init --recursive && cd tools/google-maps-scraper-kit
                    </pre>
                    <button
                      onClick={() => handleCopy('git clone https://github.com/v0786/WebDev.git && cd WebDev && git submodule update --init --recursive && cd tools/google-maps-scraper-kit', 102)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 102 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* TERMUX STEP 3 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Run Scraper Engine in Termux
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>Execute the Android Termux launcher script (or start Go server directly):</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      ./termux-start.sh || go run proxy.go
                    </pre>
                    <button
                      onClick={() => handleCopy('./termux-start.sh', 103)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 103 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    🚀 Service starts on <code className="text-white font-mono">http://127.0.0.1:8080</code> inside your Android phone!
                  </p>
                </div>
              </div>

              {/* TERMUX STEP 4 */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    4
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Connect Mobile Phone Browser
                  </h3>
                </div>
                <div className="pl-9 space-y-3 text-xs text-gray-300 leading-relaxed">
                  <p>Open Chrome or Safari on your phone, open the Scraper Connection Drawer, and verify connection:</p>
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 flex items-center justify-between">
                    <div className="font-mono text-emerald-400 text-xs font-bold">
                      http://127.0.0.1:8080
                    </div>
                    <button
                      onClick={() => handleCopy('http://127.0.0.1:8080', 104)}
                      className="px-3 py-1 rounded-lg bg-emerald-500 text-black font-mono text-xs font-bold hover:bg-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 104 ? 'Copied!' : 'Copy URL'}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* STANDARD DESKTOP OS METHODS (Linux, Mac, Windows) */
            <div className="space-y-6">
              
              {/* STEP 1: Docker Prerequisites */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    1
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Install Docker Engine / Docker Desktop
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>The scraper requires Docker to launch isolated Playwright browsers for search extraction.</p>
                  
                  {activeOS === 'linux' && (
                    <div className="space-y-2">
                      <p className="text-gray-400">Run this command in terminal to install Docker on Linux:</p>
                      <div className="relative group">
                        <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                          curl -fsSL https://get.docker.com | sh
                        </pre>
                        <button
                          onClick={() => handleCopy('curl -fsSL https://get.docker.com | sh', 1)}
                          className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                        >
                          {copiedIndex === 1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {activeOS === 'macos' && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <p>Download and install Docker Desktop for Mac:</p>
                      <a
                        href="https://www.docker.com/products/docker-desktop/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#D4AF37] font-bold hover:underline"
                      >
                        <span>Download Docker Desktop for Mac</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {activeOS === 'windows' && (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <p>Download Docker Desktop for Windows (with WSL2 enabled):</p>
                      <a
                        href="https://www.docker.com/products/docker-desktop/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#D4AF37] font-bold hover:underline"
                      >
                        <span>Download Docker Desktop for Windows</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* STEP 2: Clone / Navigate to Directory */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    2
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Navigate to Scraper Directory
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>Open terminal inside the project root and navigate to the scraper kit directory:</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      cd tools/google-maps-scraper-kit
                    </pre>
                    <button
                      onClick={() => handleCopy('cd tools/google-maps-scraper-kit', 2)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* STEP 3: Execute Launcher Script */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    3
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Run Setup & Start Scraper
                  </h3>
                </div>
                <div className="pl-9 space-y-2 text-xs text-gray-300 leading-relaxed">
                  <p>Run the automated setup verifier, then launch the local scraper container:</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      ./setup.sh && ./start.sh
                    </pre>
                    <button
                      onClick={() => handleCopy('./setup.sh && ./start.sh', 3)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 3 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    💡 Port 8080 is selected by default. If port 8080 is occupied on your PC, <code className="text-white font-mono">./start.sh</code> will automatically select the next free port (8081, 8082).
                  </p>
                </div>
              </div>

              {/* STEP 4: Choose Connection Mode */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    4
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Connect Lead Generation Portal
                  </h3>
                </div>
                <div className="pl-9 space-y-3 text-xs text-gray-300 leading-relaxed">
                  <p>Choose the mode matching your usage scenario in the <strong>Scraper Connection</strong> drawer:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#D4AF37] font-mono">
                        <Laptop className="w-4 h-4" />
                        <span>Mode A: Same PC</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Use <code className="text-white">http://127.0.0.1:8080</code> when running website and scraper on the same computer.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 font-mono">
                        <Smartphone className="w-4 h-4" />
                        <span>Mode B: Mobile LAN</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Enter your PC LAN IP (e.g. <code className="text-white">192.168.0.203</code>) and port <code className="text-white">8080</code> for phones on same Wi-Fi.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 font-mono">
                        <Globe className="w-4 h-4" />
                        <span>Mode C: Internet</span>
                      </div>
                      <p className="text-[11px] text-gray-400">
                        Run <code className="text-white">./tunnel.sh</code> on your PC, then paste the generated <code className="text-white">trycloudflare.com</code> URL.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 5: Troubleshooting & Firewall */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-black font-mono font-bold text-xs flex items-center justify-center shadow-md">
                    5
                  </span>
                  <h3 className="text-sm font-bold text-white font-mono tracking-wide">
                    Diagnostics & Troubleshooting
                  </h3>
                </div>
                <div className="pl-9 space-y-3 text-xs text-gray-300 leading-relaxed">
                  <p>If connection test fails, run the diagnostic tool in terminal:</p>
                  <div className="relative group">
                    <pre className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-emerald-400 text-xs overflow-x-auto">
                      ./diagnose.sh
                    </pre>
                    <button
                      onClick={() => handleCopy('./diagnose.sh', 4)}
                      className="absolute right-2 top-2 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
                    >
                      {copiedIndex === 4 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {activeOS === 'linux' && (
                    <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 space-y-1">
                      <span className="font-bold block text-sky-400">Linux Firewall Note:</span>
                      <p className="text-[11px]">If mobile phone on Wi-Fi cannot connect to LAN IP, allow port 8080 through firewall:</p>
                      <code className="block p-2 rounded-lg bg-black/50 text-emerald-300 font-mono text-[11px] mt-1">
                        sudo ufw allow 8080/tcp
                      </code>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-black/40">
          <button
            onClick={() => {
              onClose();
              if (onOpenConnectionDrawer) onOpenConnectionDrawer();
            }}
            className="px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-white text-black font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/20"
          >
            <Terminal className="w-4 h-4" />
            <span>Open Connection Drawer</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase font-mono tracking-wider transition-all cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
