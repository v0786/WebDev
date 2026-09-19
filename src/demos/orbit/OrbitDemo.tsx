import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Cpu, Terminal, Check, Copy, Activity, Zap, Shield } from 'lucide-react';

export const OrbitDemo: React.FC = () => {
  const [trafficRate, setTrafficRate] = useState(85);
  const [annualBilling, setAnnualBilling] = useState(true);
  const [seatCount, setSeatCount] = useState(12);
  const [copiedCli, setCopiedCli] = useState(false);
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialRequested, setTrialRequested] = useState(false);

  const cliCommand = 'curl -sSL https://orbit.run/install | sh && orbit init';

  const handleCopyCli = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const calculatedPrice = annualBilling 
    ? Math.round(seatCount * 39 * 0.8) 
    : Math.round(seatCount * 39);

  return (
    <div className="min-h-screen bg-[#050A14] text-[#E2E8F0] selection:bg-[#00F2FE]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="orbit"
        title="ORBIT TELEMETRY"
        category="AI / SaaS Observability"
        accentColor="#00F2FE"
      />

      {/* Main Container */}
      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#00F2FE] uppercase flex items-center gap-2 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>AUTONOMOUS DISTRIBUTED TELEMETRY &bull; EBPF ENGINE</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
                ORBIT<span className="text-[#00F2FE]">.AI</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#00F2FE]/80 max-w-xs text-left sm:text-right">
              SUB-MILLISECOND INGESTION &bull; LATENCY WATERFALLS &bull; V3.8 LIVE
            </div>
          </div>

          {/* Hero Composition: Custom Distributed Telemetry SVG Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Telemetry SVG Visualizer */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#00F2FE]/30 bg-gradient-to-b from-[#08152B] to-[#040A14] p-6 sm:p-10 shadow-2xl">
                
                {/* Visualizer Status Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-[#00F2FE] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
                    <span>NODE MESH // {trafficRate * 12}K EVENTS/SEC</span>
                  </div>
                  <span className="text-emerald-400">P99: 4.2ms &bull; ZERO DROPS</span>
                </div>

                {/* Custom SVG Drawing: Distributed Cloud Telemetry Graph */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 600 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Background Grid Lines */}
                    <g opacity="0.15" stroke="#00F2FE" strokeWidth="0.5">
                      <line x1="0" y1="90" x2="600" y2="90" />
                      <line x1="0" y1="180" x2="600" y2="180" />
                      <line x1="0" y1="270" x2="600" y2="270" />
                      <line x1="150" y1="0" x2="150" y2="360" />
                      <line x1="300" y1="0" x2="300" y2="360" />
                      <line x1="450" y1="0" x2="450" y2="360" />
                    </g>

                    {/* Edge Connection Links */}
                    <g stroke="#00F2FE" strokeWidth="1.2" opacity="0.6">
                      <line x1="120" y1="180" x2="250" y2="100" />
                      <line x1="120" y1="180" x2="250" y2="260" />
                      <line x1="250" y1="100" x2="420" y2="100" />
                      <line x1="250" y1="260" x2="420" y2="260" />
                      <line x1="420" y1="100" x2="520" y2="180" />
                      <line x1="420" y1="260" x2="520" y2="180" />
                      <line x1="250" y1="100" x2="420" y2="260" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="250" y1="260" x2="420" y2="100" strokeDasharray="3 3" opacity="0.4" />
                    </g>

                    {/* Animated Pulses on Streams */}
                    <circle cx="185" cy="140" r="3.5" fill="#00F2FE">
                      <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="335" cy="100" r="3.5" fill="#38BDF8">
                      <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="470" cy="220" r="3.5" fill="#00F2FE">
                      <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
                    </circle>

                    {/* Ingress Gateway Node */}
                    <g transform="translate(120, 180)">
                      <circle cx="0" cy="0" r="24" fill="#0A1E3D" stroke="#00F2FE" strokeWidth="2" />
                      <circle cx="0" cy="0" r="8" fill="#00F2FE" />
                      <text x="-20" y="38" fill="#00F2FE" fontSize="10" fontFamily="monospace">INGRESS</text>
                    </g>

                    {/* Edge Worker Nodes */}
                    <g transform="translate(250, 100)">
                      <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#081A36" stroke="#38BDF8" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                      <text x="-16" y="32" fill="#94A3B8" fontSize="9" fontFamily="monospace">AUTH.01</text>
                    </g>

                    <g transform="translate(250, 260)">
                      <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#081A36" stroke="#38BDF8" strokeWidth="1.5" />
                      <circle cx="0" cy="0" r="5" fill="#38BDF8" />
                      <text x="-18" y="32" fill="#94A3B8" fontSize="9" fontFamily="monospace">ROUTE.02</text>
                    </g>

                    {/* Inference Pipeline Clusters */}
                    <g transform="translate(420, 100)">
                      <rect x="-22" y="-22" width="44" height="44" rx="8" fill="#0C234C" stroke="#00F2FE" strokeWidth="1.8" />
                      <circle cx="0" cy="0" r="6" fill="#00F2FE" />
                      <text x="-18" y="34" fill="#00F2FE" fontSize="9" fontFamily="monospace">LLM.TRC</text>
                    </g>

                    <g transform="translate(420, 260)">
                      <rect x="-22" y="-22" width="44" height="44" rx="8" fill="#0C234C" stroke="#00F2FE" strokeWidth="1.8" />
                      <circle cx="0" cy="0" r="6" fill="#00F2FE" />
                      <text x="-18" y="34" fill="#00F2FE" fontSize="9" fontFamily="monospace">DB.SINK</text>
                    </g>

                    {/* Output Egress */}
                    <g transform="translate(520, 180)">
                      <circle cx="0" cy="0" r="20" fill="#0A1E3D" stroke="#10B981" strokeWidth="2" />
                      <circle cx="0" cy="0" r="6" fill="#10B981" />
                      <text x="-18" y="36" fill="#10B981" fontSize="10" fontFamily="monospace">STDOUT</text>
                    </g>
                  </svg>
                </div>

                {/* Telemetry Slider Control */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#00F2FE] gap-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    <span>TRAFFIC LOAD: {trafficRate}% CAPACITY</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={trafficRate}
                    onChange={(e) => setTrafficRate(Number(e.target.value))}
                    className="w-full sm:w-48 accent-[#00F2FE] cursor-pointer"
                  />
                </div>

              </div>
            </div>

            {/* Right: Pitch & CLI Copy Box */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 text-xs font-mono">
                  ZERO-OVERHEAD TELEMETRY
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                  Stop debugging in the dark. <br />
                  <span className="text-[#00F2FE]">Live distributed traces</span>.
                </h2>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">
                  Engineered with Linux eBPF kernel probes. Auto-instruments microservices, AI inference pipelines, and Postgres queries without code modifications or CPU penalties.
                </p>
              </div>

              {/* Developer CLI Copy Box */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#00F2FE] flex items-center justify-between">
                  <span>INSTALL CLI PROBE</span>
                  {copiedCli && <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD!</span>}
                </div>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-white/15 text-xs font-mono">
                  <div className="flex items-center gap-2 overflow-x-auto text-slate-200">
                    <Terminal className="w-4 h-4 text-[#00F2FE] shrink-0" />
                    <code className="whitespace-nowrap">{cliCommand}</code>
                  </div>
                  <button
                    onClick={handleCopyCli}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-[#00F2FE] hover:text-black transition-colors shrink-0 ml-2"
                    title="Copy command"
                  >
                    {copiedCli ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setTrialModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#00F2FE] text-black hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Zap className="w-4 h-4" />
                  <span>START 14-DAY FREE CLOUD TRIAL</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Pricing Estimator */}
          <div className="mt-20 sm:mt-32 border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#00F2FE] mb-1">
                  [ TRANSPARENT CLUSTER TIERS ]
                </div>
                <h3 className="text-2xl sm:text-4xl font-sans font-bold text-white">
                  Real-Time Pricing Calculator
                </h3>
              </div>

              {/* Annual Switcher */}
              <div className="flex items-center gap-3 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`px-4 py-1.5 rounded-full transition-colors ${!annualBilling ? 'bg-[#00F2FE] text-black font-bold' : 'text-white/60'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`px-4 py-1.5 rounded-full transition-colors flex items-center gap-1 ${annualBilling ? 'bg-[#00F2FE] text-black font-bold' : 'text-white/60'}`}
                >
                  <span>Annual</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">20% OFF</span>
                </button>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl border border-[#00F2FE]/30 bg-gradient-to-br from-[#08152B] to-[#040A14] items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-white/80">
                    <span>ENGINEERING SEATS:</span>
                    <span className="text-[#00F2FE] font-bold text-sm">{seatCount} DEVELOPERS</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    value={seatCount}
                    onChange={(e) => setSeatCount(Number(e.target.value))}
                    className="w-full accent-[#00F2FE] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-white/40">
                    <span>1 SEAT</span>
                    <span>30 SEATS</span>
                    <span>60+ SEATS (ENTERPRISE)</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#00F2FE]" />
                    <span>SOC2 Type II &bull; HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Unlimited Tracing Nodes</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-black/50 border border-white/10 text-center space-y-3">
                <div className="text-xs font-mono text-[#00F2FE] uppercase tracking-widest">
                  ESTIMATED INVESTMENT
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-sans">
                  ${calculatedPrice}
                  <span className="text-xs font-mono text-white/50 font-normal"> / month</span>
                </div>
                <p className="text-[11px] font-mono text-white/50">
                  {annualBilling ? 'Billed annually with instant provisioning.' : 'Billed monthly with zero contract locks.'}
                </p>
                <button
                  onClick={() => setTrialModalOpen(true)}
                  className="w-full py-2.5 rounded-lg bg-[#00F2FE] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  DEPLOY CLUSTER NOW
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Trial Modal */}
      {trialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#08152B] border border-[#00F2FE]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#00F2FE]">ORBIT CLOUD ONBOARDING</div>
                <h3 className="text-xl font-sans font-bold text-white">Start 14-Day Free Trial</h3>
              </div>
              <button
                onClick={() => { setTrialModalOpen(false); setTrialRequested(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {trialRequested ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#00F2FE]/20 border border-[#00F2FE] flex items-center justify-center mx-auto text-[#00F2FE]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Cluster Provisioned</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Your tenant API keys and eBPF deployment manifest have been sent to your work email.
                </p>
                <button
                  onClick={() => { setTrialModalOpen(false); setTrialRequested(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#00F2FE] text-black font-mono text-xs font-bold"
                >
                  Open Dashboard Console
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTrialRequested(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">WORK EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@stripe.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#00F2FE]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">PRIMARY CLOUD ENVIRONMENT</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#00F2FE]">
                    <option value="aws">AWS (Amazon Web Services EKS)</option>
                    <option value="gcp">Google Cloud Platform (GKE)</option>
                    <option value="azure">Microsoft Azure (AKS)</option>
                    <option value="baremetal">Bare-Metal Kubernetes</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#00F2FE] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  INITIALIZE TELEMETRY CLUSTER
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        ORBIT AUTONOMOUS TELEMETRY &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
