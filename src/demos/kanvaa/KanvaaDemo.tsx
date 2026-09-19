import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Layers, MapPin, Volume2, VolumeX, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { soundFx } from '../../components/audio/SoundEffects';

export const KanvaaDemo: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<'varanasi' | 'kutch' | 'chanderi'>('varanasi');
  const [loomPlaying, setLoomPlaying] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [reserveConfirmed, setReserveConfirmed] = useState(false);

  const cooperatives = {
    varanasi: {
      region: 'Varanasi, Uttar Pradesh',
      craft: 'Kadhwa Zari & Pure Mulberry Brocade',
      artisans: '14 Master Weavers &bull; 6th Generation Lineage',
      process: 'Hand-thrown wooden fly shuttle with real silver-gilt zari threads. Takes 90 days per saree.',
      elevation: 'Ganges River Valley &bull; Ancient Guild Archive',
    },
    kutch: {
      region: 'Bhuj, Kutch, Gujarat',
      craft: 'Natural Madder & Indigo Rogan Hand-Painting',
      artisans: '8 Artisan Families &bull; Castor Seed Oil Pigments',
      process: 'Castor seed oil boiled for 48 hours to create tactile elastic pigment applied with a single brass stylus.',
      elevation: 'Great Rann Salt Terraces &bull; Desert Heritage',
    },
    chanderi: {
      region: 'Chanderi, Madhya Pradesh',
      craft: 'Featherweight Tissue Silk & Gold Zari Bootis',
      artisans: '22 Guild Weavers &bull; Hand-Spun Cotton Warp',
      process: 'Translucent silk gossamer woven on traditional pit looms dating back to Vedic antiquity.',
      elevation: 'Betwa River Ridge &bull; Historical Fort Looms',
    },
  };

  const currentCoop = cooperatives[activeRegion];

  const toggleLoomAudio = () => {
    if (!loomPlaying) {
      soundFx.playChirp(220, 0.08, 'triangle', 0.04);
      setTimeout(() => soundFx.playChirp(330, 0.06, 'sine', 0.03), 120);
      setLoomPlaying(true);
    } else {
      setLoomPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0A06] text-[#F7F1E7] selection:bg-[#E5A958]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="kanvaa"
        title="KANVAA HERITAGE"
        category="Contemporary Indian Luxury"
        accentColor="#E5A958"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#E5A958] uppercase flex items-center gap-2 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>INDIGENOUS HANDLOOM ATELIER &bull; VARANASI / KUTCH / CHANDERI</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic tracking-tight text-white leading-none">
                KANVAA<span className="text-[#E5A958] not-italic font-sans">.</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#E5A958]/80 max-w-xs text-left sm:text-right">
              ANCIENT LOOMS &bull; TIMELESS PROVENANCE &bull; EDITION 2026
            </div>
          </div>

          {/* Hero Composition: Custom Indian Handloom Shuttle & Warp SVG Vector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Custom Handloom Shuttle & Mandala Geometries Vector */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5A958]/30 bg-gradient-to-b from-[#1C140A] to-[#0A0704] p-6 sm:p-10 shadow-2xl">
                
                <div className="flex items-center justify-between text-xs font-mono text-[#E5A958] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>LOOM GEOMETRY // {currentCoop.region.toUpperCase()}</span>
                  </div>
                  <button
                    onClick={toggleLoomAudio}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono transition-colors flex items-center gap-1.5 text-white"
                  >
                    {loomPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#E5A958]" /> : <VolumeX className="w-3.5 h-3.5 text-white/50" />}
                    <span>{loomPlaying ? 'LOOM RHYTHM PLAYING' : 'HEAR LOOM SOUND'}</span>
                  </button>
                </div>

                {/* Custom SVG Drawing: Artisan Handloom Shuttle & Zari Weave Lines */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Background Terracotta Halo */}
                    <circle cx="300" cy="180" r="150" fill="#E5A958" fillOpacity="0.06" />

                    {/* Warp & Weft Grid Matrix (The Fabric of Time) */}
                    <g stroke="#E5A958" strokeWidth="0.8" opacity="0.35">
                      {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540].map((x) => (
                        <line key={x} x1={x} y1="30" x2={x} y2="330" />
                      ))}
                      {[60, 90, 120, 150, 180, 210, 240, 270, 300].map((y) => (
                        <line key={y} x1="60" y1={y} x2="540" y2={y} strokeDasharray="3 3" />
                      ))}
                    </g>

                    {/* Traditional Carved Wooden Handloom Shuttle Vector */}
                    <g transform="translate(150, 140)">
                      {/* Shuttle Boat Body */}
                      <path
                        d="M 20 40 Q 150 15 280 40 Q 150 65 20 40 Z"
                        fill="#2A1B0E"
                        stroke="#E5A958"
                        strokeWidth="2"
                      />
                      {/* Metal Tipped Cones on Shuttle Ends */}
                      <polygon points="10,40 25,35 25,45" fill="#E5A958" />
                      <polygon points="290,40 275,35 275,45" fill="#E5A958" />

                      {/* Thread Bobbin Pirn Well */}
                      <rect x="80" y="32" width="140" height="16" rx="4" fill="#0E0A06" stroke="#E5A958" strokeWidth="1" />

                      {/* Golden Raw Silk Zari Pirn Thread Coil */}
                      <g stroke="#F59E0B" strokeWidth="1.5">
                        {[90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210].map((x) => (
                          <line key={x} x1={x} y1="32" x2={x} y2="48" />
                        ))}
                      </g>

                      {/* Emitting Silver Zari Thread Line */}
                      <path
                        d="M 150 32 Q 130 -40 220 -80 Q 310 -120 400 -60"
                        stroke="#F59E0B"
                        strokeWidth="1.8"
                        fill="none"
                        strokeDasharray="4 2"
                      />
                    </g>

                    {/* Classical Indian Geometric Booti Motifs (Paisley / Kalka Outline) */}
                    <g transform="translate(360, 70)" stroke="#E5A958" strokeWidth="1.5" fill="#E5A958" fillOpacity="0.15">
                      <path d="M 40 80 C 40 40, 90 20, 90 50 C 90 80, 50 100, 40 80 Z" />
                      <circle cx="65" cy="55" r="8" fill="#F59E0B" fillOpacity="0.4" />
                    </g>
                    <g transform="translate(100, 210)" stroke="#E5A958" strokeWidth="1.5" fill="#E5A958" fillOpacity="0.15">
                      <path d="M 40 80 C 40 40, 90 20, 90 50 C 90 80, 50 100, 40 80 Z" />
                      <circle cx="65" cy="55" r="8" fill="#F59E0B" fillOpacity="0.4" />
                    </g>

                    {/* Loom Guild Annotations */}
                    <g fontSize="9" fontFamily="monospace" fill="#E5A958" opacity="0.85">
                      <text x="70" y="50">WARP: 100% UNBLEACHED AHIMSA SILK</text>
                      <text x="360" y="325">WEFT: HAND-TWISTED REAL SILVER ZARI</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#E5A958] gap-2">
                  <div>CRAFT: {currentCoop.craft}</div>
                  <div className="text-white/60">{currentCoop.artisans}</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Cooperative Region Switcher */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#E5A958]/15 text-[#E5A958] border border-[#E5A958]/30 text-xs font-mono">
                  INDIAN CRAFT REVIVAL
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight">
                  Handwoven heritage for <br />
                  <span className="text-[#E5A958] font-sans font-bold not-italic">global collectors</span>.
                </h2>
                <p className="text-sm font-sans text-stone-300 font-light leading-relaxed">
                  KANVAA partners directly with master weaving cooperatives across India. Eliminating middlemen ensures fair master-craftsman wages, preserves ancient loom techniques, and delivers authenticated heirloom textiles.
                </p>
              </div>

              {/* Artisan Cooperative Switcher */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#E5A958] mb-3">
                  SELECT ARTISAN GUILD:
                </div>
                <div className="space-y-2">
                  {(['varanasi', 'kutch', 'chanderi'] as const).map((reg) => (
                    <div
                      key={reg}
                      onClick={() => setActiveRegion(reg)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeRegion === reg
                          ? 'bg-[#E5A958]/15 border-[#E5A958] text-white'
                          : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-mono font-bold text-[#E5A958] flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{cooperatives[reg].region}</span>
                        </div>
                        <div className="text-xs font-sans text-stone-300 mt-1">{cooperatives[reg].craft}</div>
                      </div>
                      {activeRegion === reg && <Check className="w-4 h-4 text-[#E5A958] shrink-0 ml-2" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReserveModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#E5A958] text-black hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>RESERVE HEIRLOOM TEXTILE PIECE</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Reserve Heirloom Piece Modal */}
      {reserveModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#171008] border border-[#E5A958]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#E5A958]">KANVAA GUILD ARCHIVE</div>
                <h3 className="text-xl font-serif italic text-white">Heirloom Textile Reservation</h3>
              </div>
              <button
                onClick={() => { setReserveModalOpen(false); setReserveConfirmed(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {reserveConfirmed ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#E5A958]/20 border border-[#E5A958] flex items-center justify-center mx-auto text-[#E5A958]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif italic text-white">Provenance Certificate Issued</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Your interest in the {currentCoop.craft} piece has been registered with the Varanasi Guild. The artisan curator will contact you directly with weave documentation.
                </p>
                <button
                  onClick={() => { setReserveModalOpen(false); setReserveConfirmed(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#E5A958] text-black font-mono text-xs font-bold"
                >
                  Return to Guild Explorer
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReserveConfirmed(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">COLLECTOR / PATRON NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Ananya Singhania"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E5A958]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">SELECTED WEAVING COOPERATIVE</label>
                  <input
                    type="text"
                    disabled
                    value={`${currentCoop.region} — ${currentCoop.craft}`}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-[#E5A958]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">CONTACT EMAIL / WHATSAPP</label>
                  <input
                    type="email"
                    required
                    placeholder="patron@heritage.in"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#E5A958]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#E5A958] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  REQUEST HEIRLOOM PROVENANCE DOSSIER
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        KANVAA INDIAN CRAFT &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
