import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Building, Check, Compass, Shield } from 'lucide-react';

export const ArcDemo: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [lightingMode, setLightingMode] = useState<'dawn' | 'noon' | 'dusk'>('dusk');
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  const [dossierRequested, setDossierRequested] = useState(false);

  const residences = [
    {
      level: 'LEVEL 48 // THE CROWN PENTHOUSE',
      name: 'The Celestial Sky Villa',
      area: '920 m² &bull; 9,900 sq ft',
      bedrooms: '5 Suites &bull; 7 Baths &bull; Private 25m Pool',
      price: '$38,500,000 USD',
      terrace: '360° Panoramic Skyline & Ocean Horizon',
      features: ['Private high-speed keycard elevator', 'Double-height 7.2m living salon', 'Climate-controlled 800-bottle wine gallery', 'Private rooftop helipad access'],
    },
    {
      level: 'LEVEL 36–37 // DUPLEX RESIDENCE',
      name: 'The Meridian Duplex',
      area: '540 m² &bull; 5,800 sq ft',
      bedrooms: '4 Suites &bull; 5 Baths',
      price: '$21,800,000 USD',
      terrace: 'West-Facing Sunset Loggia',
      features: ['Architectural cantilevered spiral staircase', 'Sub-Zero & Gaggenau culinary kitchen', 'Automated acoustic motorized louvers', 'Private 3-car subterranean vault'],
    },
    {
      level: 'LEVEL 24 // HORIZON SUITE',
      name: 'The Solstice Residence',
      area: '380 m² &bull; 4,100 sq ft',
      bedrooms: '3 Suites &bull; 4 Baths',
      price: '$14,200,000 USD',
      terrace: 'East-Facing Sunrise Balcony',
      features: ['Floor-to-ceiling acoustic triple-glazing', 'Custom Italian Calacatta marble vanities', 'Lutron intelligent circadian illumination', 'Private resident concierge privileges'],
    },
  ];

  const skyColors = {
    dawn: { bg: 'from-[#1A1829] to-[#0A0D14]', sun: '#F59E0B', ray: 'rgba(245, 158, 11, 0.2)' },
    noon: { bg: 'from-[#14233D] to-[#08101E]', sun: '#38BDF8', ray: 'rgba(56, 189, 248, 0.2)' },
    dusk: { bg: 'from-[#2D161B] via-[#1E1122] to-[#0A0D14]', sun: '#EC4899', ray: 'rgba(236, 72, 153, 0.25)' },
  };

  return (
    <div className="min-h-screen bg-[#07090D] text-[#ECEFF4] selection:bg-[#D6A354]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="arc"
        title="ARC RESIDENCES"
        category="Ultra-Luxury Real Estate"
        accentColor="#D6A354"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#D6A354] uppercase flex items-center gap-2 mb-2">
                <Building className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL SKY RESIDENCES &bull; PRIVATE COLLECTION</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
                ARC<span className="text-[#D6A354]">.</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#D6A354]/80 max-w-xs text-left sm:text-right">
              PENTHOUSE PORTFOLIO &bull; 360° SKYLINE &bull; PRIVATE ALLOCATION
            </div>
          </div>

          {/* Hero Composition: Custom Real Estate Architectural Skyline SVG Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Tower Elevation & Sunpath SVG */}
            <div className="lg:col-span-7">
              <div className={`relative rounded-2xl overflow-hidden border border-[#D6A354]/30 bg-gradient-to-b ${skyColors[lightingMode].bg} p-6 sm:p-10 shadow-2xl transition-all duration-700`}>
                
                {/* Sunpath Mode Toggles */}
                <div className="flex items-center justify-between text-xs font-mono text-[#D6A354] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>SUNPATH SIMULATOR // {lightingMode.toUpperCase()} LIGHT</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
                    {(['dawn', 'noon', 'dusk'] as const).map((m) => (
                      <button
                        key={m}
                        onClick={() => setLightingMode(m)}
                        className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase transition-colors ${
                          lightingMode === m ? 'bg-[#D6A354] text-black font-bold' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom SVG Drawing: Monolithic Penthouse Tower & Sunpath Arc */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Sunpath Celestial Arcs */}
                    <path
                      d="M 50 320 A 280 200 0 0 1 550 320"
                      stroke="#D6A354"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />

                    {/* Sun Position Indicator based on lightingMode */}
                    <circle
                      cx={lightingMode === 'dawn' ? 140 : lightingMode === 'noon' ? 300 : 460}
                      cy={lightingMode === 'dawn' ? 190 : lightingMode === 'noon' ? 130 : 190}
                      r="16"
                      fill={skyColors[lightingMode].sun}
                      fillOpacity="0.8"
                    />
                    <circle
                      cx={lightingMode === 'dawn' ? 140 : lightingMode === 'noon' ? 300 : 460}
                      cy={lightingMode === 'dawn' ? 190 : lightingMode === 'noon' ? 130 : 190}
                      r="36"
                      fill={skyColors[lightingMode].sun}
                      fillOpacity="0.15"
                    />

                    {/* Ground Datum */}
                    <line x1="40" y1="330" x2="560" y2="330" stroke="#D6A354" strokeWidth="1" opacity="0.3" />

                    {/* Arc Monolithic Tower Massing */}
                    <g transform="translate(230, 60)">
                      {/* Main Tower Body */}
                      <rect x="0" y="0" width="140" height="270" fill="#0B0F17" stroke="#D6A354" strokeWidth="1.5" />

                      {/* Floorplate Ribbons */}
                      {[30, 60, 90, 120, 150, 180, 210, 240].map((y) => (
                        <line key={y} x1="0" y1={y} x2="140" y2={y} stroke="#D6A354" strokeWidth="0.8" opacity="0.4" />
                      ))}

                      {/* Highlighted Selected Unit Floor */}
                      <rect
                        x="0"
                        y={selectedUnit === 0 ? 0 : selectedUnit === 1 ? 75 : 155}
                        width="140"
                        height={selectedUnit === 0 ? 30 : 35}
                        fill="#D6A354"
                        fillOpacity="0.35"
                        stroke="#D6A354"
                        strokeWidth="1.8"
                      />

                      {/* Glass Curtain-Wall Vertical Mullions */}
                      {[25, 50, 75, 100, 125].map((x) => (
                        <line key={x} x1={x} y1="0" x2={x} y2="270" stroke="#38BDF8" strokeWidth="0.6" opacity="0.25" />
                      ))}

                      {/* Rooftop Helipad & Crown Structure */}
                      <polygon points="0,0 70,-25 140,0" fill="#141E2E" stroke="#D6A354" strokeWidth="1.2" />
                      <line x1="70" y1="-25" x2="70" y2="-40" stroke="#D6A354" strokeWidth="1.5" />
                      <circle cx="70" cy="-40" r="3" fill="#EC4899" />
                    </g>

                    {/* Skyline Callout Data */}
                    <g fontSize="9" fontFamily="monospace" fill="#D6A354" opacity="0.8">
                      <text x="385" y="70">&larr; PENTHOUSE 48 (+210m)</text>
                      <text x="385" y="145">&larr; DUPLEX SUITES (+145m)</text>
                      <text x="385" y="225">&larr; SOLSTICE RESIDENCES (+90m)</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#D6A354] gap-2">
                  <div>SELECTED: {residences[selectedUnit].name}</div>
                  <div className="text-white/70 font-bold">{residences[selectedUnit].price}</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Unit Switcher */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#D6A354]/15 text-[#D6A354] border border-[#D6A354]/30 text-xs font-mono">
                  THE SKY COLLECTION
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                  Living above the <br />
                  <span className="font-serif italic text-[#D6A354]">cloud horizon</span>.
                </h2>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">
                  ARC rises 210 meters above the metropolis, pairing brutalist structural purity with bespoke interior commissions, private elevator relays, and uncompromised panoramic tranquility.
                </p>
              </div>

              {/* Unit Selector */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#D6A354] mb-3">
                  SELECT RESIDENCE SPECIFICATION:
                </div>
                <div className="space-y-2">
                  {residences.map((u, idx) => (
                    <div
                      key={u.name}
                      onClick={() => setSelectedUnit(idx)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedUnit === idx
                          ? 'bg-[#D6A354]/15 border-[#D6A354] text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-mono text-[#D6A354]">{u.level}</div>
                        <div className="text-sm font-sans font-bold text-white">{u.name}</div>
                        <div className="text-xs font-mono text-white/60" dangerouslySetInnerHTML={{ __html: u.area }} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-[#D6A354] font-bold">{u.price}</div>
                        {selectedUnit === idx && <Check className="w-4 h-4 text-[#D6A354] ml-auto mt-1" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setDossierModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#D6A354] text-black hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Shield className="w-4 h-4" />
                  <span>REQUEST CONFIDENTIAL BROKER DOSSIER</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Confidential Dossier Request Modal */}
      {dossierModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0F141E] border border-[#D6A354]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#D6A354]">ARC RESIDENCES SALES GALLERY</div>
                <h3 className="text-xl font-sans font-bold text-white">Private Placement Inquiry</h3>
              </div>
              <button
                onClick={() => { setDossierModalOpen(false); setDossierRequested(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {dossierRequested ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#D6A354]/20 border border-[#D6A354] flex items-center justify-center mx-auto text-[#D6A354]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Encrypted Dossier Dispatched</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  The complete architectural floorplate drawings, legal title disclosures, and private appointment access have been delivered.
                </p>
                <button
                  onClick={() => { setDossierModalOpen(false); setDossierRequested(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#D6A354] text-black font-mono text-xs font-bold"
                >
                  Return to Residence Viewer
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDossierRequested(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">PRINCIPAL OR FIDUCIARY NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Sterling Family Office / Lord Sterling"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D6A354]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">DESIRED RESIDENCE</label>
                  <input
                    type="text"
                    disabled
                    value={`${residences[selectedUnit].name} (${residences[selectedUnit].price})`}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-[#D6A354]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">CONFIDENTIAL EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="counsel@familyoffice.ch"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D6A354]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#D6A354] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  RECEIVE ARCHITECTURAL DOSSIER
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        ARC RESIDENCES SKY COLLECTION &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
