import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Palette, Sparkles, Check } from 'lucide-react';

export const NoirDemo: React.FC = () => {
  const [activeExperiment, setActiveExperiment] = useState<'kinetic' | 'brutalist' | 'wireframe'>('kinetic');
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [proposalTransmitted, setProposalTransmitted] = useState(false);

  const experiments = [
    {
      id: 'kinetic',
      title: '01 // Kinetic Typography Matrix',
      desc: 'Variable font axes responding dynamically to scroll acceleration, sound frequency, and viewport inertia.',
    },
    {
      id: 'brutalist',
      title: '02 // Radical Monospace Layouts',
      desc: 'Anti-template editorial architecture rejecting symmetric grids in favor of asymmetric tension.',
    },
    {
      id: 'wireframe',
      title: '03 // Generative WebGL Geometry',
      desc: 'Real-time mathematical 3D spatial distortions computed at 60 FPS in pure GLSL fragment shaders.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0612] text-[#F3E8FF] selection:bg-[#A855F7]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="noir"
        title="NOIR CREATIVE STUDIO"
        category="Avant-Garde Digital Agency"
        accentColor="#A855F7"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase flex items-center gap-2 mb-2">
                <Palette className="w-3.5 h-3.5" />
                <span>EXPERIMENTAL DIGITAL DIRECTION &bull; AVANT-GARDE ATELIER</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
                NOIR<span className="text-[#A855F7]">_LAB</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#A855F7]/80 max-w-xs text-left sm:text-right">
              TYPOGRAPHIC CHOREOGRAPHY &bull; WEBGL EXPERIMENTS &bull; AWARDS 2026
            </div>
          </div>

          {/* Hero Composition: Custom Brutalist Kinetic SVG Vector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Typographic Wireframe Canvas */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#A855F7]/30 bg-gradient-to-b from-[#1B0B2A] to-[#0A0410] p-6 sm:p-10 shadow-2xl">
                
                {/* Visualizer Status Bar */}
                <div className="flex items-center justify-between text-xs font-mono text-[#A855F7] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
                    <span>LABORATORY // EXPERIMENT 07.X</span>
                  </div>
                  <span className="text-white/60">FPS: 60.0 &bull; GLSL 3.0</span>
                </div>

                {/* Custom SVG Drawing: Brutalist Kinetic Typography Wireframe */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Perspective Horizon Mesh */}
                    <g stroke="#A855F7" strokeWidth="0.8" opacity="0.3">
                      <line x1="300" y1="180" x2="0" y2="360" />
                      <line x1="300" y1="180" x2="150" y2="360" />
                      <line x1="300" y1="180" x2="300" y2="360" />
                      <line x1="300" y1="180" x2="450" y2="360" />
                      <line x1="300" y1="180" x2="600" y2="360" />
                      <line x1="50" y1="300" x2="550" y2="300" />
                      <line x1="120" y1="240" x2="480" y2="240" />
                      <line x1="200" y1="200" x2="400" y2="200" />
                    </g>

                    {/* Central 3D Wireframe Kinetic Torus / Diamond Geometry */}
                    <g transform="translate(300, 150)">
                      {/* Outer Wireframe Polygon */}
                      <polygon
                        points="0,-90 90,-40 90,60 0,110 -90,60 -90,-40"
                        fill="#1F0E30"
                        fillOpacity="0.4"
                        stroke="#A855F7"
                        strokeWidth="2"
                      />
                      {/* Inner Facet Lines */}
                      <line x1="0" y1="-90" x2="0" y2="110" stroke="#C084FC" strokeWidth="1.5" />
                      <line x1="-90" y1="-40" x2="90" y2="60" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="-90" y1="60" x2="90" y2="-40" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 2" />
                      <circle cx="0" cy="10" r="30" stroke="#E879F9" strokeWidth="1.5" fill="#E879F9" fillOpacity="0.1" />
                    </g>

                    {/* Brutalist Typographic Overlays */}
                    <text x="50" y="80" fill="#FFFFFF" fontSize="32" fontFamily="sans-serif" fontWeight="900" opacity="0.9">
                      RADICAL
                    </text>
                    <text x="50" y="115" fill="#A855F7" fontSize="26" fontFamily="serif" fontStyle="italic" opacity="0.9">
                      anti-template
                    </text>
                    <text x="360" y="320" fill="#E879F9" fontSize="28" fontFamily="monospace" fontWeight="700">
                      // FORM_2026
                    </text>

                    {/* Crosshair Grids */}
                    <g stroke="#A855F7" strokeWidth="1" opacity="0.8">
                      <line x1="40" y1="180" x2="70" y2="180" />
                      <line x1="55" y1="165" x2="55" y2="195" />
                      <line x1="530" y1="180" x2="560" y2="180" />
                      <line x1="545" y1="165" x2="545" y2="195" />
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#A855F7] gap-2">
                  <div>DISCIPLINE: EXPERIMENTAL ART DIRECTION</div>
                  <div className="text-white/60">AWARDS: FWA OF THE DAY &bull; AWWWARDS SITE OF THE MONTH</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Experiment Switcher */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#A855F7]/15 text-[#A855F7] border border-[#A855F7]/30 text-xs font-mono">
                  AVANT-GARDE MANIFESTO
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-white tracking-tight uppercase leading-tight">
                  Design that commands <br />
                  <span className="text-[#A855F7] font-serif italic font-normal lowercase">total attention</span>.
                </h2>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">
                  The digital world is suffering from template exhaustion. NOIR partners with fearless luxury, entertainment, and tech brands to author experiences that live permanently in cultural memory.
                </p>
              </div>

              {/* Experiment Switcher */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#A855F7] mb-3">
                  EXPLORE LAB RESEARCH:
                </div>
                <div className="space-y-2">
                  {experiments.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => setActiveExperiment(exp.id as any)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between ${
                        activeExperiment === exp.id
                          ? 'bg-[#A855F7]/15 border-[#A855F7] text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-[#A855F7]">{exp.title}</div>
                        <div className="text-xs font-sans text-white/70 mt-1 font-light leading-relaxed">{exp.desc}</div>
                      </div>
                      {activeExperiment === exp.id && <Check className="w-4 h-4 text-[#A855F7] shrink-0 ml-2 mt-0.5" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setProposalModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#A855F7] text-black hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>TRANSMIT CREATIVE BRIEF</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Creative Brief Proposal Modal */}
      {proposalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#170B24] border border-[#A855F7]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#A855F7]">NOIR COMMISSION TERMINAL</div>
                <h3 className="text-xl font-sans font-bold text-white">Initiate Creative Direction</h3>
              </div>
              <button
                onClick={() => { setProposalModalOpen(false); setProposalTransmitted(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {proposalTransmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#A855F7]/20 border border-[#A855F7] flex items-center justify-center mx-auto text-[#A855F7]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Creative Brief Registered</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Our studio partners in Berlin and Tokyo will examine your brand ambition and deliver initial art direction recommendations.
                </p>
                <button
                  onClick={() => { setProposalModalOpen(false); setProposalTransmitted(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#A855F7] text-black font-mono text-xs font-bold"
                >
                  Return to Studio Lab
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setProposalTransmitted(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">BRAND / CLIENT NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Maison Kinetix / Studio Alpha"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#A855F7]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">SCOPE OF EXPERIMENTATION</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#A855F7]">
                    <option value="brand">Full Brand Identity &amp; Flagship Web Experience</option>
                    <option value="campaign">Interactive Campaign Microsite &amp; WebGL</option>
                    <option value="redesign">Radical Anti-Template Re-Architecture</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">CONTACT CHANNEL</label>
                  <input
                    type="email"
                    required
                    placeholder="director@brand.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#A855F7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#A855F7] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  TRANSMIT CREATIVE BRIEF TO NOIR
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        NOIR AVANT-GARDE STUDIO &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
