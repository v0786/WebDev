import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Gauge, Wind, Check, Flame } from 'lucide-react';

export const VantaDemo: React.FC = () => {
  const [liveryColor, setLiveryColor] = useState<'cadmium' | 'obsidian' | 'glacier'>('cadmium');
  const [aeroActive, setAeroActive] = useState(true);
  const [allocationModalOpen, setAllocationModalOpen] = useState(false);
  const [allocationReserved, setAllocationReserved] = useState(false);

  const liveries = [
    { id: 'cadmium', name: 'Cadmium Scarlet', hex: '#FF462D', accent: '#FF462D' },
    { id: 'obsidian', name: 'Forged Carbon Noir', hex: '#1C1D21', accent: '#A1A1AA' },
    { id: 'glacier', name: 'Monaco Glacier Blue', hex: '#0284C7', accent: '#38BDF8' },
  ];

  const currentLivery = liveries.find(l => l.id === liveryColor) || liveries[0];

  return (
    <div className="min-h-screen bg-[#080505] text-[#FAECE9] selection:bg-[#FF462D]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="vanta"
        title="VANTA AUTOMOTIVE"
        category="Electric Hypercar Atelier"
        accentColor="#FF462D"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#FF462D] uppercase flex items-center gap-2 mb-2">
                <Gauge className="w-3.5 h-3.5" />
                <span>QUAD-MOTOR PROPULSION &bull; 1,980 HP &bull; LE MANS SPEC</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
                VANTA<span className="text-[#FF462D]">.X</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#FF462D]/80 max-w-xs text-left sm:text-right">
              0-100 KM/H: 1.84s &bull; TOP VELOCITY: 412 KM/H &bull; 24 UNITS
            </div>
          </div>

          {/* Hero Composition: Custom Hypercar Aerodynamics SVG Vector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Aerodynamics & Hypercar Silhouette Vector */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#FF462D]/30 bg-gradient-to-b from-[#1C0D0B] to-[#0A0505] p-6 sm:p-10 shadow-2xl">
                
                {/* Visualizer Status Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-[#FF462D] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF462D] animate-ping" />
                    <span>WIND TUNNEL TELEMETRY // 320 KM/H AIRSPEED</span>
                  </div>
                  <button
                    onClick={() => setAeroActive(!aeroActive)}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono transition-colors flex items-center gap-1.5 text-white"
                  >
                    <Wind className="w-3 h-3 text-[#FF462D]" />
                    <span>{aeroActive ? 'AERODYNAMICS ACTIVE' : 'STATIC CHASSIS'}</span>
                  </button>
                </div>

                {/* Custom Hypercar & Streamline SVG Vector */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Wind Tunnel Streamlines */}
                    {aeroActive && (
                      <g stroke={currentLivery.accent} strokeWidth="1.2" opacity="0.45">
                        <path d="M 10 110 Q 150 90 260 140 T 480 130 T 590 120" strokeDasharray="6 3">
                          <animate attributeName="strokeDashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M 10 160 Q 140 140 220 170 T 450 170 T 590 160" strokeDasharray="8 4">
                          <animate attributeName="strokeDashoffset" from="100" to="0" dur="1.6s" repeatCount="indefinite" />
                        </path>
                        <path d="M 10 210 Q 130 200 200 220 T 420 225 T 590 220" strokeDasharray="6 3">
                          <animate attributeName="strokeDashoffset" from="100" to="0" dur="1.8s" repeatCount="indefinite" />
                        </path>
                        <path d="M 10 260 L 590 260" strokeDasharray="4 4" opacity="0.3" />
                      </g>
                    )}

                    {/* Ground Track Surface */}
                    <line x1="40" y1="285" x2="560" y2="285" stroke="#FF462D" strokeWidth="1.5" opacity="0.6" />

                    {/* Hypercar Silhouette Chassis Vector */}
                    <g transform="translate(100, 140)">
                      {/* Underbody & Diffuser */}
                      <path
                        d="M 40 140 L 360 140 L 380 110 L 320 95 L 240 60 L 150 70 L 90 95 L 30 115 Z"
                        fill="#120A09"
                        stroke={currentLivery.accent}
                        strokeWidth="2"
                      />

                      {/* Cockpit Canopy Bubble */}
                      <path
                        d="M 160 70 C 180 30, 260 30, 280 70 Z"
                        fill="#050303"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                      />

                      {/* Carbon Fibre Rear Wing Cantilever */}
                      <rect x="340" y="45" width="45" height="6" rx="2" fill={currentLivery.hex} stroke={currentLivery.accent} strokeWidth="1" />
                      <line x1="360" y1="51" x2="360" y2="95" stroke={currentLivery.accent} strokeWidth="2" />

                      {/* Forged Aerodisc Wheels */}
                      {/* Front Wheel */}
                      <circle cx="100" cy="140" r="28" fill="#0A0606" stroke={currentLivery.accent} strokeWidth="2" />
                      <circle cx="100" cy="140" r="14" fill="#1C1D21" stroke="#FF462D" strokeWidth="1" />
                      <circle cx="100" cy="140" r="4" fill="#FFFFFF" />

                      {/* Rear Wheel */}
                      <circle cx="310" cy="140" r="30" fill="#0A0606" stroke={currentLivery.accent} strokeWidth="2" />
                      <circle cx="310" cy="140" r="15" fill="#1C1D21" stroke="#FF462D" strokeWidth="1" />
                      <circle cx="310" cy="140" r="4" fill="#FFFFFF" />

                      {/* Headlight & Taillight Laser Accents */}
                      <polygon points="35,115 50,118 45,123" fill="#38BDF8" />
                      <polygon points="375,108 385,107 380,115" fill="#FF462D" />
                    </g>

                    {/* Downforce & Drag Telemetry Callouts */}
                    <g fontSize="9" fontFamily="monospace" fill={currentLivery.accent} opacity="0.9">
                      <text x="390" y="80">&darr; DOWNFORCE: 1,140 KG</text>
                      <text x="70" y="110">DRAG COEFF: Cd 0.19</text>
                      <text x="440" y="310">ACTIVE REAR DIFFUSER</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#FF462D] gap-2">
                  <div>LIVERY: <span className="font-bold text-white">{currentLivery.name}</span></div>
                  <div>BATTERY: 110 KWH SOLID-STATE &bull; 800V ARCHITECTURE</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Livery Configurator */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#FF462D]/15 text-[#FF462D] border border-[#FF462D]/30 text-xs font-mono">
                  COMPUTATIONAL PERFORMANCE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-white tracking-tight uppercase leading-tight">
                  Electric power, <br />
                  <span className="text-[#FF462D]">ferocious velocity</span>.
                </h2>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">
                  Engineered with 4 independent axial-flux electric motors delivering 1,980 horsepower directly to all four contact patches. Zero transmission delay. Total computational torque vectoring.
                </p>
              </div>

              {/* Bespoke Livery Switcher */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#FF462D] mb-3">
                  SELECT PRODUCTION LIVERY:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {liveries.map((liv) => (
                    <button
                      key={liv.id}
                      onClick={() => setLiveryColor(liv.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        liveryColor === liv.id
                          ? 'bg-[#FF462D]/15 border-[#FF462D] text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full mx-auto mb-2 border border-white/20" style={{ backgroundColor: liv.hex }} />
                      <div className="text-[10px] font-mono leading-tight">{liv.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setAllocationModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#FF462D] text-white hover:bg-white hover:text-black font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Flame className="w-4 h-4" />
                  <span>SECURE PRODUCTION ALLOCATION</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Allocation Reservation Modal */}
      {allocationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#140807] border border-[#FF462D]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#FF462D]">VANTA.X PRODUCTION RUN</div>
                <h3 className="text-xl font-sans font-bold text-white">Priority Build Slot Application</h3>
              </div>
              <button
                onClick={() => { setAllocationModalOpen(false); setAllocationReserved(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {allocationReserved ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FF462D]/20 border border-[#FF462D] flex items-center justify-center mx-auto text-[#FF462D]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Allocation Dossier Transmitted</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Your chassis allocation request for Vanta.X in {currentLivery.name} has been placed in priority queue. The factory liaison will connect within 24 hours.
                </p>
                <button
                  onClick={() => { setAllocationModalOpen(false); setAllocationReserved(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#FF462D] text-white font-mono text-xs font-bold"
                >
                  Return to Configurator
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAllocationReserved(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">PATRON / RACING TEAM NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Scuderia Kronos / Marcus Sterling"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#FF462D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">SELECTED SPECIFICATION</label>
                  <input
                    type="text"
                    disabled
                    value={`Vanta.X Coupe // ${currentLivery.name} ($2.8M USD)`}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-[#FF462D]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">DIRECT TELEPHONE &amp; COUNTRY</label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7911 123456"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#FF462D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#FF462D] text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  SUBMIT CHASSIS ALLOCATION APPLICATION
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        VANTA HYPERCAR PERFORMANCE &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
