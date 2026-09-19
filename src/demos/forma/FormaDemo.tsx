import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Compass, Layers, Check, ArrowUpRight, Grid, MoveRight } from 'lucide-react';

export const FormaDemo: React.FC = () => {
  const [activeMaterial, setActiveMaterial] = useState<'travertine' | 'concrete' | 'glass' | 'bronze'>('travertine');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  const materials = [
    {
      id: 'travertine',
      name: 'Roman Travertine',
      origin: 'Tivoli Quarries, Italy',
      tone: '#D1B280',
      description: 'Honed linear cut sedimentary stone with subtle micropores and thermal mass longevity.',
    },
    {
      id: 'concrete',
      name: 'Poured Graphite Concrete',
      origin: 'Valais, Switzerland',
      tone: '#6A707E',
      description: 'Ultra-high-density monolithic architectural concrete cast in rough timber board forms.',
    },
    {
      id: 'glass',
      name: 'Smoked Acoustic Glass',
      origin: 'Saint-Gobain, France',
      tone: '#4A5568',
      description: 'Multi-layer low-iron laminated acoustic glazing with custom light transmission coefficient.',
    },
    {
      id: 'bronze',
      name: 'Brushed Architectural Bronze',
      origin: 'Munich, Germany',
      tone: '#B8860B',
      description: 'Hand-patinated copper-tin architectural alloy engineered for graceful coastal weathering.',
    },
  ];

  const projects = [
    {
      code: 'RES-04',
      title: 'The Monolith Residence',
      location: 'Engadin Valley, Switzerland',
      year: '2025',
      area: '1,450 m²',
      concept: 'Carved into the granite hillside, this private residence uses cantilevered concrete slabs to frame the alpine horizon.',
    },
    {
      code: 'CULT-09',
      title: 'Pavilion of Silence',
      location: 'Kyoto Prefecture, Japan',
      year: '2026',
      area: '820 m²',
      concept: 'An architectural sanctuary balancing charred cedar columns with reflective travertine water courts.',
    },
    {
      code: 'URB-12',
      title: 'Atelier Brutalist',
      location: 'Berlin Mitte, Germany',
      year: '2024',
      area: '2,100 m²',
      concept: 'A 5-story cultural creative foundation blending raw structural honesty with acoustic timber galleries.',
    },
  ];

  const currentMat = materials.find((m) => m.id === activeMaterial) || materials[0];

  return (
    <div className="min-h-screen bg-[#090A0E] text-[#EDE8DF] selection:bg-[#E5A958]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="forma"
        title="FORMA ARCHITECTURE"
        category="Monolithic Architecture Studio"
        accentColor="#E5A958"
      />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Brand Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#E5A958] uppercase flex items-center gap-2 mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>MONOLITHIC ARCHITECTURE &bull; ZÜRICH / KYOTO</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight uppercase leading-none">
                FORMA<span className="text-[#E5A958]">.</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-white/60 max-w-sm text-left sm:text-right">
              SPATIAL PERMANENCE &bull; MATERIAL RESTRAINT &bull; EDITION 2026
            </div>
          </div>

          {/* Hero Composition: Custom Monolithic Architectural SVG Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Architectural CAD Illustration */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#12141C] to-[#0A0C11] p-6 sm:p-10 shadow-2xl">
                
                {/* Elevation Controls */}
                <div className="flex items-center justify-between text-xs font-mono text-white/60 pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5A958] animate-pulse" />
                    <span>ELEVATION NORTH // 1:50 AXONOMETRIC</span>
                  </div>
                  <button
                    onClick={() => setWireframeMode(!wireframeMode)}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                  >
                    <Grid className="w-3 h-3" />
                    <span>{wireframeMode ? 'SOLID RENDER' : 'CAD BLUEPRINT'}</span>
                  </button>
                </div>

                {/* Custom Architectural SVG Vector */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 600 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Architectural Grid Lines */}
                    <g opacity={wireframeMode ? 0.35 : 0.12} stroke="#E5A958" strokeWidth="0.8" strokeDasharray="3 3">
                      <line x1="0" y1="60" x2="600" y2="60" />
                      <line x1="0" y1="120" x2="600" y2="120" />
                      <line x1="0" y1="180" x2="600" y2="180" />
                      <line x1="0" y1="240" x2="600" y2="240" />
                      <line x1="0" y1="300" x2="600" y2="300" />
                      <line x1="100" y1="0" x2="100" y2="360" />
                      <line x1="200" y1="0" x2="200" y2="360" />
                      <line x1="300" y1="0" x2="300" y2="360" />
                      <line x1="400" y1="0" x2="400" y2="360" />
                      <line x1="500" y1="0" x2="500" y2="360" />
                    </g>

                    {/* Ground Plane */}
                    <line x1="40" y1="300" x2="560" y2="300" stroke="#E5A958" strokeWidth="1.5" />

                    {/* Monolithic Structure Masses */}
                    {/* Base Podiums */}
                    <rect
                      x="90"
                      y="210"
                      width="420"
                      height="90"
                      fill={wireframeMode ? 'transparent' : '#181B26'}
                      stroke="#E5A958"
                      strokeWidth={wireframeMode ? 1.5 : 1}
                      strokeOpacity="0.8"
                    />

                    {/* Cantilever Slab Upper */}
                    <polygon
                      points="120,130 500,130 480,210 100,210"
                      fill={wireframeMode ? 'transparent' : currentMat.tone}
                      fillOpacity={wireframeMode ? 0 : 0.25}
                      stroke="#E5A958"
                      strokeWidth={wireframeMode ? 1.8 : 1.2}
                    />

                    {/* Glazing Window Ribbon */}
                    <rect
                      x="140"
                      y="160"
                      width="320"
                      height="35"
                      fill={wireframeMode ? 'transparent' : '#38BDF8'}
                      fillOpacity="0.2"
                      stroke="#38BDF8"
                      strokeWidth="1"
                    />

                    {/* Vertical Mullions */}
                    {[180, 220, 260, 300, 340, 380, 420].map((x) => (
                      <line key={x} x1={x} y1="160" x2={x} y2="195" stroke="#38BDF8" strokeWidth="0.8" opacity="0.6" />
                    ))}

                    {/* Upper Terrace Overhang */}
                    <rect
                      x="180"
                      y="70"
                      width="260"
                      height="60"
                      fill={wireframeMode ? 'transparent' : '#1F2433'}
                      stroke="#E5A958"
                      strokeWidth="1.2"
                    />

                    {/* Dimension Notations */}
                    <g fontSize="9" fontFamily="monospace" fill="#E5A958" opacity="0.8">
                      <text x="510" y="175">+ 8.40m</text>
                      <text x="510" y="255">+ 3.20m</text>
                      <text x="510" y="305">± 0.00m (Datum)</text>
                      <text x="270" y="325">&lt; 38.50 METERS &gt;</text>
                    </g>
                  </svg>
                </div>

                {/* Material Inspector Footer */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-white/60 gap-2">
                  <div>ACTIVE FINISH: <span className="text-[#E5A958] font-bold">{currentMat.name}</span></div>
                  <div>SURFACE: {currentMat.origin}</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Material Switcher */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#E5A958]/10 text-[#E5A958] border border-[#E5A958]/30 text-xs font-mono">
                  SPATIAL PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                  Architecture as <br />
                  <span className="font-serif italic text-[#E5A958]">monolithic landscape</span>.
                </h2>
                <p className="text-sm font-sans text-white/70 font-light leading-relaxed">
                  We conceive residential and cultural spaces not as decorative objects, but as permanent geological volumes carved from earth, stone, light, and silence.
                </p>
              </div>

              {/* Material Palettes Switcher */}
              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#E5A958] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>MATERIAL SPECIFICATION</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setActiveMaterial(mat.id as any)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        activeMaterial === mat.id
                          ? 'bg-[#E5A958]/15 border-[#E5A958] text-white'
                          : 'bg-white/[0.03] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono font-medium">
                        <span>{mat.name}</span>
                        {activeMaterial === mat.id && <Check className="w-3.5 h-3.5 text-[#E5A958]" />}
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] font-mono text-white/50 pt-1">
                  {currentMat.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#E5A958] text-[#090A0E] hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <span>REQUEST MONOGRAPH RFP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Selected Monograph Projects */}
          <div className="mt-20 sm:mt-32 border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#E5A958] mb-1">
                  [ CATALOGUE // 2024–2026 ]
                </div>
                <h3 className="text-2xl sm:text-4xl font-sans font-bold text-white tracking-tight">
                  Selected Works &amp; Spatial Works
                </h3>
              </div>
              <div className="text-xs font-mono text-white/50">
                CLICK PROJECT TO INSPECT ELEVATION DATA
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={proj.code}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activeProjectIdx === idx
                      ? 'bg-white/[0.06] border-[#E5A958] shadow-lg'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#E5A958]">
                      <span>{proj.code}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h4 className="text-xl font-sans font-bold text-white tracking-tight">
                      {proj.title}
                    </h4>
                    <p className="text-xs font-mono text-white/50">
                      {proj.location} &bull; {proj.area}
                    </p>
                    <p className="text-xs font-sans text-white/70 font-light leading-relaxed pt-2">
                      {proj.concept}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#E5A958]">
                    <span>INSPECT BLUEPRINT</span>
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>

      {/* Monograph Consultation RFP Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0F1118] border border-[#E5A958]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#E5A958]">FORMA ATELIER RFP</div>
                <h3 className="text-xl font-sans font-bold text-white">Commission Spatial Study</h3>
              </div>
              <button
                onClick={() => { setInquiryModalOpen(false); setInquirySent(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {inquirySent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E5A958]/20 border border-[#E5A958] flex items-center justify-center mx-auto text-[#E5A958]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Commission Request Received</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Our partners in Zürich and Kyoto review select inquiries within 48 business hours.
                </p>
                <button
                  onClick={() => { setInquiryModalOpen(false); setInquirySent(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#E5A958] text-black font-mono text-xs font-bold"
                >
                  Return to Exploration
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySent(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">CLIENT OR ENTITY NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Studio Valais / Private Patron"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E5A958]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-white/60">PROJECT LOCATION &amp; TYPOLOGY</label>
                  <input
                    type="text"
                    required
                    placeholder="Private Alpine Villa, Switzerland (1,200 m²)"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E5A958]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-white/60">CONTACT EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="principal@residence.ch"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E5A958]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#E5A958] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  TRANSMIT RFP DOSSIER
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        FORMA ARCHITECTURAL ATELIER &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
