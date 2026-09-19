import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Scissors, Sparkles, Eye, Check, Calendar } from 'lucide-react';

export const AtelierDemo: React.FC = () => {
  const [activeLook, setActiveLook] = useState(0);
  const [zoomWeave, setZoomWeave] = useState(false);
  const [fittingModalOpen, setFittingModalOpen] = useState(false);
  const [fittingConfirmed, setFittingConfirmed] = useState(false);

  const collection = [
    {
      number: 'LOOK 01',
      title: 'The Nocturne Drape',
      category: 'Evening Haute Couture',
      textile: 'Double-faced silk satin & hand-loomed mulberry gauze',
      notes: 'An asymmetric architectural collar cascading into fluid floor-length folds.',
      edition: 'Numbered 03 of 07 pieces worldwide',
    },
    {
      number: 'LOOK 02',
      title: 'Structured Cashmere Overcoat',
      category: 'Bespoke Outerwear',
      textile: 'Virgin Mongolian cashmere & hand-stitched horn buttons',
      notes: 'Sculpted drop-shoulder silhouette with hidden interior silk jacquard lining.',
      edition: 'Bespoke commission only (4-6 weeks)',
    },
    {
      number: 'LOOK 03',
      title: 'Pleated Organza Column',
      category: 'Gala Salon Wear',
      textile: 'Micro-pleated Lyon silk organza & obsidian bead embroidery',
      notes: 'Light-refracting crystalline pleats engineered to hold structural tension in motion.',
      edition: 'Numbered 01 of 05 pieces worldwide',
    },
  ];

  return (
    <div className="min-h-screen bg-[#100C12] text-[#F3EBF4] selection:bg-[#E0B384]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="atelier27"
        title="ATELIER 27"
        category="Haute Couture & Runway"
        accentColor="#E0B384"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#E0B384] uppercase flex items-center gap-2 mb-2">
                <Scissors className="w-3.5 h-3.5" />
                <span>HAUTE COUTURE &bull; SALON PRIVÉ &bull; PARIS / MILAN</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic tracking-tight text-white leading-none">
                ATELIER 27<span className="text-[#E0B384] not-italic font-sans">.</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#E0B384]/80 max-w-xs text-left sm:text-right">
              COLLECTION NOCTURNE &bull; RUNWAY EDITION &bull; 2026
            </div>
          </div>

          {/* Hero Composition: Custom Haute Couture Silhouette SVG Vector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Fashion Drape Vector Drawing */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#E0B384]/30 bg-gradient-to-b from-[#1C1520] to-[#0E0A10] p-6 sm:p-10 shadow-2xl">
                
                <div className="flex items-center justify-between text-xs font-mono text-[#E0B384] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>RUNWAY MONOGRAPH // {collection[activeLook].number}</span>
                  </div>
                  <button
                    onClick={() => setZoomWeave(!zoomWeave)}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3 h-3" />
                    <span>{zoomWeave ? 'VIEW SILHOUETTE' : 'INSPECT WEAVE'}</span>
                  </button>
                </div>

                {/* SVG Silhouette / Weave */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  {zoomWeave ? (
                    /* Macro Textile Weave Pattern */
                    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <rect width="600" height="360" fill="#140D18" />
                      <g stroke="#E0B384" strokeWidth="2.5" opacity="0.4">
                        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560].map((x) => (
                          <line key={x} x1={x} y1="0" x2={x} y2="360" />
                        ))}
                      </g>
                      <g stroke="#F3EBF4" strokeWidth="2.5" opacity="0.3">
                        {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((y) => (
                          <line key={y} x1="0" y1={y} x2="600" y2={y} />
                        ))}
                      </g>
                      <circle cx="300" cy="180" r="100" stroke="#E0B384" strokeWidth="1.5" fill="#E0B384" fillOpacity="0.08" strokeDasharray="4 4" />
                      <text x="300" y="175" textAnchor="middle" fill="#E0B384" fontSize="12" fontFamily="monospace">
                        600 TPI SILK WEAVE // LYON GAUZE
                      </text>
                      <text x="300" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" opacity="0.7">
                        WARP: HAND-TWISTED &bull; WEFT: RAW MATTE
                      </text>
                    </svg>
                  ) : (
                    /* Haute Couture Silhouette Vector */
                    <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Ambient Halo */}
                      <ellipse cx="300" cy="180" rx="180" ry="120" fill="#E0B384" fillOpacity="0.07" />

                      {/* Tailoring Measurement Baseline */}
                      <line x1="180" y1="310" x2="420" y2="310" stroke="#E0B384" strokeWidth="1" opacity="0.4" />

                      {/* Head / Neck Model Line */}
                      <ellipse cx="300" cy="55" rx="16" ry="24" stroke="#E0B384" strokeWidth="1.5" fill="#1C1520" />
                      <line x1="300" y1="80" x2="300" y2="105" stroke="#E0B384" strokeWidth="1.5" />

                      {/* Asymmetric Draped Gown Silhouette */}
                      <path
                        d="M 270 105 C 250 140, 230 180, 210 310 L 390 310 C 370 240, 360 170, 330 105 Z"
                        fill="#1F1724"
                        stroke="#E0B384"
                        strokeWidth="1.8"
                      />

                      {/* Draped Cascading Pleat Waves */}
                      <path
                        d="M 270 105 Q 310 180 250 310"
                        stroke="#E0B384"
                        strokeWidth="1.2"
                        strokeDasharray="4 2"
                        opacity="0.7"
                      />
                      <path
                        d="M 290 105 Q 330 200 320 310"
                        stroke="#E0B384"
                        strokeWidth="1.2"
                        opacity="0.8"
                      />
                      <path
                        d="M 310 105 Q 350 190 360 310"
                        stroke="#E0B384"
                        strokeWidth="1.2"
                        strokeDasharray="4 2"
                        opacity="0.7"
                      />

                      {/* Shoulder Cantilever Lapel */}
                      <polygon
                        points="260,105 230,135 275,145 285,110"
                        fill="#E0B384"
                        fillOpacity="0.25"
                        stroke="#E0B384"
                        strokeWidth="1.5"
                      />

                      {/* Editorial Measurement Callouts */}
                      <g fontSize="9" fontFamily="monospace" fill="#E0B384" opacity="0.8">
                        <text x="140" y="110">SHOULDER 42cm</text>
                        <line x1="225" y1="108" x2="255" y2="108" stroke="#E0B384" strokeWidth="0.8" />
                        
                        <text x="410" y="200">WAIST 64cm</text>
                        <line x1="345" y1="198" x2="400" y2="198" stroke="#E0B384" strokeWidth="0.8" />

                        <text x="410" y="305">SWEEP 148cm</text>
                        <line x1="390" y1="305" x2="400" y2="305" stroke="#E0B384" strokeWidth="0.8" />
                      </g>
                    </svg>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#E0B384] gap-2">
                  <div>LOOK: {collection[activeLook].title}</div>
                  <div className="text-white/60">{collection[activeLook].edition}</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Look Selector */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#E0B384]/15 text-[#E0B384] border border-[#E0B384]/30 text-xs font-mono">
                  THE ATELIER MANIFESTO
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight">
                  Textile architecture in <br />
                  <span className="text-[#E0B384] font-sans font-bold not-italic">fluid motion</span>.
                </h2>
                <p className="text-sm font-sans text-white/70 font-light leading-relaxed">
                  We reject mass production. Each garment is developed as an individual commission, hand-fitted in our private salons to celebrate sculptural proportion and human grace.
                </p>
              </div>

              {/* Look Selector Pills */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#E0B384] mb-3">
                  SELECT RUNWAY LOOK:
                </div>
                <div className="space-y-2">
                  {collection.map((item, idx) => (
                    <div
                      key={item.number}
                      onClick={() => setActiveLook(idx)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeLook === idx
                          ? 'bg-[#E0B384]/15 border-[#E0B384] text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-[10px] font-mono text-[#E0B384]">{item.number} &bull; {item.category}</div>
                        <div className="text-sm font-serif italic text-white">{item.title}</div>
                      </div>
                      {activeLook === idx && <Check className="w-4 h-4 text-[#E0B384]" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setFittingModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#E0B384] text-[#100C12] hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>REQUEST PRIVATE SALON FITTING</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Private Fitting Modal */}
      {fittingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#18111C] border border-[#E0B384]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#E0B384]">SALON PRIVÉ APPOINTMENT</div>
                <h3 className="text-xl font-serif italic text-white">Private Fitting Consultation</h3>
              </div>
              <button
                onClick={() => { setFittingModalOpen(false); setFittingConfirmed(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {fittingConfirmed ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E0B384]/20 border border-[#E0B384] flex items-center justify-center mx-auto text-[#E0B384]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif italic text-white">Fitting Invitation Dispatched</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Our Paris couture director will contact your personal concierge to arrange private salon fittings and fabric swatches.
                </p>
                <button
                  onClick={() => { setFittingModalOpen(false); setFittingConfirmed(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#E0B384] text-black font-mono text-xs font-bold"
                >
                  Return to Lookbook
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFittingConfirmed(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">CLIENT NAME / HOUSE</label>
                  <input
                    type="text"
                    required
                    placeholder="Baroness Camille de Montmirail"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E0B384]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">PREFERRED SALON LOCATION</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E0B384]">
                    <option value="paris">Paris Atelier (Place Vendôme)</option>
                    <option value="milan">Milan Showroom (Via Montenapoleone)</option>
                    <option value="london">London Private Suite (Mayfair)</option>
                    <option value="residence">Private Residence Visit (Worldwide Concierge)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">CONTACT EMAIL / WHATSAPP</label>
                  <input
                    type="text"
                    required
                    placeholder="concierge@residence.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E0B384]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#E0B384] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  SCHEDULE SALON APPOINTMENT
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        ATELIER 27 HAUTE COUTURE &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
