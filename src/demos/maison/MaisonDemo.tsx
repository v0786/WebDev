import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Utensils, Wine, Clock, Users, Calendar, Check, Sparkles } from 'lucide-react';

export const MaisonDemo: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  const [cellarRegion, setCellarRegion] = useState<'all' | 'bordeaux' | 'burgundy' | 'piemonte'>('all');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [reservationComplete, setReservationComplete] = useState(false);

  const tastingMenu = [
    {
      course: 'COURSE I',
      name: 'Hokkaido Scallop Crudo',
      elements: 'Kalamansi dashi, fermented green strawberry, nori crisp, white truffle snow',
      pairing: '2020 Domaine Leflaive Puligny-Montrachet 1er Cru',
      provenance: 'Wild-harvested Hokkaido, Japan &bull; 48hr dry aging',
    },
    {
      course: 'COURSE II',
      name: 'Roasted Sunchoke Velouté',
      elements: 'Black Périgord truffle pearls, smoked hazelnuts, brown butter foam',
      pairing: '2018 Jean-Louis Chave Hermitage Blanc',
      provenance: 'Heirloom sunchokes, Provence &bull; Cultured Normandy butter',
    },
    {
      course: 'COURSE III',
      name: 'Line-Caught Brittany Turbot',
      elements: 'Bone marrow emulsion, sea succulents, golden ossetra caviar, chartreuse jus',
      pairing: '2019 Domaine Dujac Morey-Saint-Denis',
      provenance: 'Dayboat fishing, Saint-Malo &bull; Royal Caviar House',
    },
    {
      course: 'COURSE IV',
      name: 'A5 Miyazaki Wagyu Tenderloin',
      elements: 'Ember-roasted matsutake, black garlic demi-glace, pickled ramps, beef tallow brioche',
      pairing: '2015 Château Pichon Longueville Comtesse de Lalande, Pauillac',
      provenance: 'Miyazaki Prefecture, Japan &bull; 45-day koji cure',
    },
    {
      course: 'COURSE V',
      name: 'Dark Guanaja Chocolate Sphere',
      elements: 'Smoked Madagascar vanilla cream, sour cherry gelée, single-malt gold mist',
      pairing: 'Rare 30-Year Boal Madeira, Blandy’s',
      provenance: '70% Guanaja, Valrhona &bull; Highland Peat extraction',
    },
  ];

  const cellarVault = [
    {
      name: 'Château Margaux Premier Grand Cru',
      vintage: '2010',
      region: 'bordeaux',
      regionLabel: 'Bordeaux, France',
      notes: 'Velvety violet, blackcurrant cedar, immense depth and aristocratic structure.',
      cellarBin: 'BIN-104',
    },
    {
      name: 'Romanée-Saint-Vivant Grand Cru, DRC',
      vintage: '2017',
      region: 'burgundy',
      regionLabel: 'Burgundy, France',
      notes: 'Sublime rose petal aromatics, forest earth, transcendent crystalline silk.',
      cellarBin: 'VAULT-02',
    },
    {
      name: 'Giacomo Conterno Barolo Monfortino Riserva',
      vintage: '2013',
      region: 'piemonte',
      regionLabel: 'Piemonte, Italy',
      notes: 'Tarry licorice, dried damson, sculpted athletic tannins of extraordinary purity.',
      cellarBin: 'BIN-88',
    },
    {
      name: 'Château Cheval Blanc 1er Grand Cru Classé A',
      vintage: '2015',
      region: 'bordeaux',
      regionLabel: 'Bordeaux, France',
      notes: 'Cashmere-smooth plum, exotic spice box, flawless precision and mineral lift.',
      cellarBin: 'BIN-112',
    },
  ];

  const filteredCellar = cellarRegion === 'all' 
    ? cellarVault 
    : cellarVault.filter(w => w.region === cellarRegion);

  return (
    <div className="min-h-screen bg-[#0E0B08] text-[#F5EFE6] selection:bg-[#D49D42]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="maison"
        title="MAISON RESTAURANT"
        category="Michelin Dining & Cellar"
        accentColor="#D49D42"
      />

      {/* Main Experience */}
      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#D49D42] uppercase flex items-center gap-2 mb-2">
                <Utensils className="w-3.5 h-3.5" />
                <span>MICHELIN 2-STAR GASTRONOMY &bull; SEASONAL CELLAR</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif italic tracking-tight text-white leading-none">
                MAISON<span className="text-[#D49D42] font-normal font-sans">.</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#D49D42]/80 max-w-xs text-left sm:text-right">
              EVENING SEATING 18:30 &bull; PRIVATE DINING &bull; TASTING RESERVATIONS
            </div>
          </div>

          {/* Hero Composition: Custom Gastronomy SVG Illustration */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Custom Atmospheric Culinary Vector Illustration */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#D49D42]/30 bg-gradient-to-b from-[#1C140D] to-[#0E0A07] p-6 sm:p-10 shadow-2xl">
                
                <div className="flex items-center justify-between text-xs font-mono text-[#D49D42] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>DEGUSTATION EXPERIENCE // 5 COURSES</span>
                  </div>
                  <span className="text-white/60">AUTUMN REPERTOIRE</span>
                </div>

                {/* Custom SVG Drawing: Fine Dining Wine & Plate Ambiance */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg
                    viewBox="0 0 600 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Atmospheric Glow */}
                    <radialGradient id="candleGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D49D42" stopOpacity="0.35" />
                      <stop offset="60%" stopColor="#D49D42" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#D49D42" stopOpacity="0" />
                    </radialGradient>
                    <circle cx="300" cy="180" r="160" fill="url(#candleGlow)" />

                    {/* Dining Table Surface Line */}
                    <line x1="60" y1="280" x2="540" y2="280" stroke="#D49D42" strokeWidth="1" opacity="0.4" />

                    {/* Wine Glass Silhouette Vector */}
                    <g transform="translate(140, 100)">
                      {/* Glass Bowl */}
                      <path
                        d="M 10 20 C 10 90, 80 90, 80 20 Z"
                        fill="#D49D42"
                        fillOpacity="0.12"
                        stroke="#D49D42"
                        strokeWidth="1.5"
                      />
                      {/* Wine liquid */}
                      <path
                        d="M 18 45 C 20 80, 70 80, 72 45 Z"
                        fill="#8B1D2C"
                        fillOpacity="0.6"
                      />
                      {/* Stem */}
                      <line x1="45" y1="90" x2="45" y2="175" stroke="#D49D42" strokeWidth="2" />
                      {/* Base Foot */}
                      <ellipse cx="45" cy="175" rx="35" ry="5" fill="#D49D42" fillOpacity="0.3" stroke="#D49D42" strokeWidth="1.2" />
                    </g>

                    {/* Gastronomic Cloche & Plate Vector */}
                    <g transform="translate(260, 130)">
                      {/* Porcelain Rim Outer */}
                      <ellipse cx="120" cy="140" rx="140" ry="25" fill="#17120D" stroke="#D49D42" strokeWidth="1.8" />
                      {/* Plate Center Well */}
                      <ellipse cx="120" cy="140" rx="80" ry="14" fill="#0E0B08" stroke="#D49D42" strokeWidth="0.8" strokeDasharray="3 3" />
                      {/* Artful Culinary Garnish Center */}
                      <circle cx="120" cy="140" r="16" fill="#D49D42" fillOpacity="0.8" />
                      <circle cx="105" cy="138" r="6" fill="#10B981" fillOpacity="0.9" />
                      <circle cx="135" cy="142" r="5" fill="#EF4444" fillOpacity="0.8" />
                      {/* Sauce droplets */}
                      <circle cx="90" cy="142" r="2.5" fill="#D49D42" />
                      <circle cx="148" cy="136" r="3" fill="#D49D42" />
                      <circle cx="130" cy="150" r="2" fill="#D49D42" />
                    </g>

                    {/* Candle Flame Glow */}
                    <g transform="translate(480, 150)">
                      <line x1="20" y1="70" x2="20" y2="130" stroke="#D49D42" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                      <path
                        d="M 20 40 C 14 55, 14 65, 20 70 C 26 65, 26 55, 20 40 Z"
                        fill="#FFB703"
                      />
                      <circle cx="20" cy="55" r="4" fill="#FFFFFF" opacity="0.8" />
                    </g>

                    {/* Michelin Star Rosettes */}
                    <g fill="#D49D42" opacity="0.8">
                      <polygon points="300,45 304,55 315,55 306,62 309,72 300,66 291,72 294,62 285,55 296,55" />
                      <polygon points="330,45 334,55 345,55 336,62 339,72 330,66 321,72 324,62 315,55 326,55" />
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#D49D42] gap-2">
                  <div>DEGUSTATION: 5 COURSES &bull; $265 USD</div>
                  <div className="text-white/60">SOMMELIER WINE PAIRING: $185 USD</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & Reservation Call to Action */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#D49D42]/15 text-[#D49D42] border border-[#D49D42]/30 text-xs font-mono">
                  SENSORY DINING
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight">
                  Where seasonality meets <br />
                  <span className="text-[#D49D42] font-sans font-bold not-italic">culinary cinema</span>.
                </h2>
                <p className="text-sm font-sans text-white/70 font-light leading-relaxed">
                  Every evening at MAISON is choreographed as a 5-course exploration of rare terroir, heritage foraging, and cellar vintages. We seat 28 guests per evening to preserve intimacy.
                </p>
              </div>

              {/* Seating Details */}
              <div className="space-y-2 border-y border-white/10 py-5 font-mono text-xs text-white/70">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D49D42]" />
                  <span>Seating 1: 18:30 &bull; Seating 2: 21:15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-[#D49D42]" />
                  <span>Main Salon (28 Guests) &bull; The Private Cellar (Up to 12)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setReserveModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#D49D42] text-[#0E0B08] hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>RESERVE A TABLE</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Tasting Menu Explorer */}
          <div className="mt-20 sm:mt-32 border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#D49D42] mb-1">
                  [ CURRENT AUTUMN DEGUSTATION ]
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif italic text-white">
                  The Tasting Progression
                </h3>
              </div>
              <div className="text-xs font-mono text-white/50">
                SELECT A COURSE TO EXPLORE PAIRING &amp; PROVENANCE
              </div>
            </div>

            {/* Course Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
              {tastingMenu.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCourse(idx)}
                  className={`p-3 rounded-xl border text-xs font-mono transition-all text-center min-h-[44px] ${
                    activeCourse === idx
                      ? 'bg-[#D49D42]/20 border-[#D49D42] text-[#D49D42] font-bold'
                      : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/25'
                  }`}
                >
                  <div>{item.course}</div>
                  <div className="text-[10px] truncate">{item.name}</div>
                </button>
              ))}
            </div>

            {/* Active Course Card */}
            <div className="p-8 rounded-2xl border border-[#D49D42]/30 bg-gradient-to-br from-[#1C140D] to-[#0E0A07] space-y-6">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="text-xs font-mono text-[#D49D42] uppercase tracking-wider mb-1">
                    {tastingMenu[activeCourse].course}
                  </div>
                  <h4 className="text-2xl sm:text-4xl font-serif italic text-white">
                    {tastingMenu[activeCourse].name}
                  </h4>
                  <p className="text-sm font-sans text-white/80 font-light mt-2 max-w-2xl">
                    {tastingMenu[activeCourse].elements}
                  </p>
                </div>
                <div className="shrink-0 p-4 rounded-xl bg-black/40 border border-[#D49D42]/30 text-right">
                  <div className="text-[10px] font-mono text-[#D49D42] uppercase">PROVENANCE</div>
                  <div className="text-xs font-mono text-white/80" dangerouslySetInnerHTML={{ __html: tastingMenu[activeCourse].provenance }} />
                </div>
              </div>

              {/* Sommelier Pairing */}
              <div className="flex items-center gap-3 text-xs font-mono text-white/80 bg-white/[0.03] p-4 rounded-xl">
                <Wine className="w-5 h-5 text-[#D49D42] shrink-0" />
                <div>
                  <span className="text-[#D49D42] font-bold">SOMMELIER PAIRING: </span>
                  <span>{tastingMenu[activeCourse].pairing}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cellar Vault Filter */}
          <div className="mt-20 border-t border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#D49D42] mb-1">
                  [ 1,400+ BOTTLE REPOSITORY ]
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif italic text-white">
                  The Cellar Archives
                </h3>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {(['all', 'bordeaux', 'burgundy', 'piemonte'] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => setCellarRegion(reg)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase transition-colors min-h-[36px] ${
                      cellarRegion === reg
                        ? 'bg-[#D49D42] text-black font-bold'
                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredCellar.map((wine) => (
                <div key={wine.cellarBin} className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#D49D42]">{wine.regionLabel} &bull; {wine.vintage}</div>
                    <h5 className="text-lg font-serif italic text-white">{wine.name}</h5>
                    <p className="text-xs font-sans text-white/60 font-light">{wine.notes}</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-white/50 shrink-0 ml-3">
                    {wine.cellarBin}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </section>
      </main>

      {/* Table Reservation Suite Modal */}
      {reserveModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#140F0A] border border-[#D49D42]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#D49D42]">MAISON RESERVATIONS</div>
                <h3 className="text-xl font-serif italic text-white">Table Booking Request</h3>
              </div>
              <button
                onClick={() => { setReserveModalOpen(false); setReservationComplete(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {reservationComplete ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#D49D42]/20 border border-[#D49D42] flex items-center justify-center mx-auto text-[#D49D42]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif italic text-white">Reservation Confirmed</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Your table request is registered. Our Maître d&apos; will telephone within 2 hours to confirm dietary needs.
                </p>
                <button
                  onClick={() => { setReserveModalOpen(false); setReservationComplete(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#D49D42] text-black font-mono text-xs font-bold"
                >
                  Return to Menu
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReservationComplete(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-white/60">GUESTS</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D49D42]">
                      <option value="2">2 Guests (Salon)</option>
                      <option value="4">4 Guests (Salon)</option>
                      <option value="6">6 Guests (Booth)</option>
                      <option value="12">Up to 12 (Private Cellar)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-white/60">SEATING TIME</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D49D42]">
                      <option value="1830">18:30 (First Seating)</option>
                      <option value="2115">21:15 (Late Seating)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">GUEST NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Lady Eleanor Vance"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D49D42]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">EMAIL &amp; PHONE</label>
                  <input
                    type="email"
                    required
                    placeholder="guest@domain.com"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D49D42]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">DIETARY PREFERENCES / ALLERGIES</label>
                  <input
                    type="text"
                    placeholder="e.g. Shellfish allergy, Pescatarian"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#D49D42]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#D49D42] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  CONFIRM RESERVATION
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        MAISON MICHELIN REPOSITORY &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
