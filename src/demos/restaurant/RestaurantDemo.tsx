import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { InView } from '../../components/motion-primitives/in-view';
import { Tilt } from '../../components/motion-primitives/tilt';
import { Spotlight } from '../../components/motion-primitives/spotlight';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import { 
  Calendar, Clock, MapPin, Phone, Mail, Award, Wine, 
  Sparkles, CheckCircle2, ChevronRight, X, UtensilsCrossed, 
  Compass, ShieldCheck, Menu
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  dietary?: string[];
  isChefSpecial?: boolean;
}

const MENU_CATEGORIES = [
  { id: 'tasting', label: 'Tasting Experience' },
  { id: 'starters', label: 'Entrées & Starters' },
  { id: 'mains', label: 'Principale / Mains' },
  { id: 'desserts', label: 'Artisan Desserts' },
  { id: 'cellar', label: 'Cellar & Cocktails' },
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Wild Turbot & Sea Fennel',
    category: 'tasting',
    description: 'Line-caught Brittany turbot, emulsion of roasted kombu, glazed sunchoke, and pickled sea fennel pearls.',
    price: '€64',
    dietary: ['GF', 'Ocean Catch'],
    isChefSpecial: true,
  },
  {
    id: 'm2',
    name: 'A5 Miyazaki Wagyu Rossini',
    category: 'tasting',
    description: 'Seared tenderloin, Hudson Valley foie gras, winter black Périgord truffle jus, pomme purée mousseline.',
    price: '€88',
    dietary: ['Signature'],
    isChefSpecial: true,
  },
  {
    id: 'm3',
    name: 'Morel Mushroom & Smoked Ricotta Agnolotti',
    category: 'tasting',
    description: 'Hand-crimped pasta pillows, vin jaune reduction, aged parmigiano-reggiano foam, crispy sage.',
    price: '€42',
    dietary: ['Vegetarian'],
  },
  {
    id: 'm4',
    name: 'Heirloom Beet Tartare & Smoked Crème',
    category: 'starters',
    description: 'Salt-baked Chioggia beets, shallot crisps, black garlic tuile, horseradish emulsion, and micro mustard.',
    price: '€28',
    dietary: ['Vegan Option', 'GF'],
  },
  {
    id: 'm5',
    name: 'Carpaccio of Hokkaido Scallops',
    category: 'starters',
    description: 'Citrus calamansi dressing, compressed green apple, Oscietra caviar, and cold-pressed yuzu oil.',
    price: '€36',
    dietary: ['GF', 'Raw Bar'],
    isChefSpecial: true,
  },
  {
    id: 'm6',
    name: 'Pan-Roasted Atlantic Black Cod',
    category: 'mains',
    description: 'Miso-dashi velouté, charred baby leeks, maitake mushroom tempura, and shiso oil.',
    price: '€56',
    dietary: ['GF'],
  },
  {
    id: 'm7',
    name: 'Roasted Challans Duck Breast',
    category: 'mains',
    description: 'Spiced lavender honey glaze, heritage carrot tartlet, blood orange gastrique, duck jus.',
    price: '€52',
    dietary: ['Heritage Poultry'],
  },
  {
    id: 'm8',
    name: '70% Valrhona Dark Chocolate Sphere',
    category: 'desserts',
    description: 'Smoked Madagascar vanilla mousse, hazelnut praline crunch, warm passionfruit espresso ganache poured tableside.',
    price: '€24',
    dietary: ['Artisan Pastry'],
    isChefSpecial: true,
  },
  {
    id: 'm9',
    name: 'Poached Conference Pear & Chartreuse Sorbet',
    category: 'desserts',
    description: 'Infused with saffron and star anise, almond financier crumble, herbal chartreuse granita.',
    price: '€22',
    dietary: ['Vegetarian'],
  },
  {
    id: 'm10',
    name: 'The Alchemist Smoked Manhattan',
    category: 'cellar',
    description: 'Rye whiskey, vintage Carpano Antica vermouth, smoked cherrywood tincture, bitters, marasca cherry.',
    price: '€26',
    dietary: ['Handcrafted Cocktail'],
    isChefSpecial: true,
  },
  {
    id: 'm11',
    name: 'Dom Pérignon Vintage Champagne 2013',
    category: 'cellar',
    description: 'By the glass. Vibrant brioche, stone fruit, and mineral acidity from our sommelier reserve.',
    price: '€48',
    dietary: ['Cellar Exclusive'],
  },
];

const GALLERY_IMAGES = [
  {
    title: 'Culinary Precision',
    category: 'Plating Architecture',
    subtitle: 'Every plate is an orchestrated harmony of flavor, texture, and visual balance.',
    color: 'from-amber-900/60 via-stone-900 to-black',
  },
  {
    title: 'The Wine Sanctuary',
    category: 'Cellar Archive',
    subtitle: 'Over 1,200 temperature-regulated vintages from renowned terroirs across France and Italy.',
    color: 'from-rose-950/60 via-stone-900 to-black',
  },
  {
    title: 'Grand Dining Salon',
    category: 'Atmosphere',
    subtitle: 'Acoustically softened architecture with warm amber chandeliers and custom linen appointments.',
    color: 'from-stone-900 via-amber-950/40 to-black',
  },
  {
    title: 'Chef’s Counter Experience',
    category: 'Private Seating',
    subtitle: 'An intimate 8-seat culinary theater observing our brigade execute 10 bespoke courses.',
    color: 'from-yellow-950/50 via-stone-900 to-black',
  },
];

export const RestaurantDemo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('tasting');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Reservation form state
  const [resDate, setResDate] = useState('2026-09-25');
  const [resTime, setResTime] = useState('19:30');
  const [resGuests, setResGuests] = useState('2 Guests');
  const [resSeating, setResSeating] = useState('Main Dining Room');
  const [resName, setResName] = useState('Alexander Sterling');
  const [resEmail, setResEmail] = useState('a.sterling@example.com');
  const [resNotes, setResNotes] = useState('Anniversary dinner celebration. Seating by the window if possible.');

  const filteredMenu = MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  const resetReservation = () => {
    setBookingSuccess(false);
    setReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0C0A09] text-[#F5EBE1] selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB] font-sans">
      {/* Top Demo Header */}
      <DemoHeader
        currentDemo="restaurant"
        title="L'Aura Haute Cuisine Concept"
        badgeColor="text-amber-400 border-amber-400/30 bg-amber-400/10"
      />

      {/* Concept Notice Sub-Banner */}
      <div className="bg-[#1A1614] border-b border-[#D4AF37]/15 py-1.5 px-4 text-center text-[11px] font-mono text-amber-200/80 flex items-center justify-center gap-2">
        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
        <span>CONCEPT PROJECT DEMO — Fictional luxury restaurant experience engineered for design and architectural showcase.</span>
      </div>

      {/* Main Restaurant Navigation */}
      <nav className="sticky top-[41px] z-40 bg-[#0C0A09]/90 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#8C7326] flex items-center justify-center text-black font-serif font-bold text-xl shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="font-serif tracking-[0.25em] text-xl font-bold text-white block group-hover:text-amber-300 transition-colors">
                L’AURA
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-amber-300/80 block">
                Haute Cuisine &amp; Cellar
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-stone-300">
            <a href="#story" className="hover:text-[#D4AF37] transition-colors">Our Story</a>
            <a href="#menu" className="hover:text-[#D4AF37] transition-colors">Menu Highlights</a>
            <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Atmosphere</a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors">Hours &amp; Location</a>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setReservationModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#C59B27] text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-950/40 hover:shadow-amber-500/20 hover:scale-[1.03] active:scale-98 transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#14100E] border-b border-[#D4AF37]/20 px-6 py-6 space-y-4 text-sm font-medium">
            <a 
              href="#story" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Our Story
            </a>
            <a 
              href="#menu" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Menu Highlights
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Atmosphere
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Hours &amp; Location
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setReservationModalOpen(true);
              }}
              className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden border-b border-stone-800/60">
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-rose-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Heritage Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1715] border border-[#D4AF37]/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Michelin Guide Selected • Concept Showcase</span>
          </div>

          {/* Animated Hero Headline with TextEffect */}
          <div className="max-w-4xl mx-auto mb-6">
            <h1 className="sr-only">Culinary Artistry Redefined</h1>
            <TextEffect
              as="p"
              per="word"
              preset="fade-in-blur"
              className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight leading-[1.1]"
            >
              Culinary Artistry Redefined
            </TextEffect>
          </div>

          <p className="max-w-2xl mx-auto text-stone-300 text-sm sm:text-lg leading-relaxed font-light mb-10">
            An orchestrated exploration of seasonal European terroir, contemporary culinary architecture, and rare estate vintages curated for memorable evenings.
          </p>

          {/* Action CTAs & Operational Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setReservationModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#BF9723] hover:from-[#DFBF58] hover:to-[#D4AF37] text-stone-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-950/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book An Evening</span>
            </button>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A1513] hover:bg-[#251E1B] text-stone-200 hover:text-white border border-[#D4AF37]/30 font-medium text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Menu</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </a>
          </div>

          {/* Hero Visual Showcase Card with Tilt & Spotlight */}
          <InView
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <Tilt rotationFactor={6} className="rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37]/30 via-white/5 to-transparent shadow-2xl">
              <div className="relative rounded-[22px] bg-[#14100E] p-6 sm:p-8 border border-white/10 overflow-hidden text-left">
                <Spotlight className="from-amber-400/20 via-amber-400/5 to-transparent" size={280} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
                    <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-wider">
                      <Clock className="w-4 h-4" />
                      <span>Dinner Seating</span>
                    </div>
                    <div className="text-xl font-serif text-white">17:30 — 23:00</div>
                    <div className="text-xs text-stone-400">Tuesday through Sunday. Last seating at 21:30.</div>
                  </div>

                  <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
                    <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-wider">
                      <Wine className="w-4 h-4" />
                      <span>Sommelier Reserve</span>
                    </div>
                    <div className="text-xl font-serif text-white">1,200+ Bottles</div>
                    <div className="text-xs text-stone-400">Bespoke wine flight pairings available with each tasting menu.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-wider">
                      <MapPin className="w-4 h-4" />
                      <span>The Mayfair Salon</span>
                    </div>
                    <div className="text-xl font-serif text-white">42 Rue de l’Étoile</div>
                    <div className="text-xs text-stone-400">Valet parking &amp; private car reception at main entrance.</div>
                  </div>
                </div>

              </div>
            </Tilt>
          </InView>

        </div>
      </header>

      {/* Story & Philosophy Section */}
      <section id="story" className="py-24 relative bg-[#0F0D0B] border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <InView
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Our Heritage &amp; Ethos</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Rooted in Terroir, Guided by Innovation
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Founded on the premise that fine dining should be both reverent and audacious, L’Aura sources exclusively from artisanal producers within our regional biosphere. We celebrate forgotten heritage seeds, sustainable line-caught seafood, and low-intervention viticulture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#171311] border border-white/5 space-y-1">
                  <div className="text-amber-300 font-serif text-2xl font-bold">100%</div>
                  <div className="text-xs font-semibold text-white">Organic &amp; Traceable Origin</div>
                  <div className="text-[11px] text-stone-400">Directly partnered with 14 bio-dynamic family farms.</div>
                </div>
                <div className="p-4 rounded-xl bg-[#171311] border border-white/5 space-y-1">
                  <div className="text-amber-300 font-serif text-2xl font-bold">Zero-Waste</div>
                  <div className="text-xs font-semibold text-white">Closed-Loop Kitchen System</div>
                  <div className="text-[11px] text-stone-400">In-house fermentation, composting, and zero single-use plastics.</div>
                </div>
              </div>

              {/* Chef Quote Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1A1513] to-[#120F0D] border-l-4 border-[#D4AF37] border-y border-r border-white/5 space-y-2">
                <p className="font-serif italic text-stone-200 text-sm sm:text-base leading-relaxed">
                  “We do not merely assemble ingredients; we uncover the emotional resonance of a harvest. A great meal should linger in your memory long after the last vintage is poured.”
                </p>
                <div className="text-xs font-mono text-amber-300 pt-1">
                  — Chef Laurent Vaneau, Chef de Cuisine
                </div>
              </div>
            </InView>

            {/* Story Visual Panel with Tilt */}
            <InView
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <Tilt rotationFactor={7} className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#241B16] via-[#14100E] to-[#0A0807] border border-[#D4AF37]/25 shadow-2xl relative overflow-hidden space-y-6">
                <Spotlight className="from-amber-400/20 via-transparent to-transparent" size={240} />

                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-[10px] font-mono tracking-widest uppercase border border-amber-400/20">
                    Artisanal Standards
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    The Ten-Course Gastronomic Suite
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Designed as a progression of five movements: Ocean Depths, Forest Foraging, Pasture Heritage, Cleansing Elements, and Sweet Alchemy.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-300">Tasting Experience</span>
                    <span className="font-mono text-amber-300 font-bold">€185 per guest</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-300">Prestigious Wine Pairing</span>
                    <span className="font-mono text-amber-300 font-bold">+ €115 per guest</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-stone-300">Non-Alcoholic Botanical Flight</span>
                    <span className="font-mono text-amber-300 font-bold">+ €65 per guest</span>
                  </div>
                </div>

                <button
                  onClick={() => setReservationModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-[#DFBF58] text-stone-950 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Tasting Journey</span>
                </button>
              </Tilt>
            </InView>

          </div>

        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 relative bg-[#0C0A09] border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              Seasonal Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Culinary Highlights
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Each recipe reflects the harvest cycle. Vegetarian and bespoke allergy adaptations are prepared with prior notice.
            </p>
          </InView>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-stone-950 shadow-md font-bold'
                    : 'bg-[#171311] text-stone-300 hover:text-white hover:bg-[#221B18] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid with Tilt & Spotlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMenu.map((item, idx) => (
              <InView
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Tilt
                  rotationFactor={5}
                  className="h-full rounded-2xl bg-[#14100E] border border-white/10 hover:border-[#D4AF37]/50 p-6 flex flex-col justify-between transition-all group relative overflow-hidden shadow-xl"
                >
                  <Spotlight className="from-amber-400/25 via-amber-400/5 to-transparent" size={240} />
                  
                  <div className="space-y-4">
                    {/* Header: Name & Price */}
                    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-3">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </h3>
                        {item.isChefSpecial && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-300 mt-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Chef’s Signature</span>
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-base font-bold text-[#D4AF37] shrink-0">
                        {item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-stone-300 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dietary tags */}
                  {item.dietary && (
                    <div className="flex items-center flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                      {item.dietary.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2 py-0.5 rounded-md bg-[#1F1916] text-[10px] font-mono text-stone-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Tilt>
              </InView>
            ))}
          </div>

          {/* Custom Wine Cellar CTA Note */}
          <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#1A1412] via-[#221814] to-[#1A1412] border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h4 className="text-base font-serif font-bold text-white">Looking for rare vintage selections?</h4>
              <p className="text-xs text-stone-400">Our Head Sommelier is available to curate customized vertical pairings for private celebrations.</p>
            </div>
            <button
              onClick={() => setReservationModalOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#DFBF58] text-stone-950 font-semibold text-xs tracking-wider uppercase shrink-0"
            >
              Consult Sommelier
            </button>
          </div>

        </div>
      </section>

      {/* Atmospheric Gallery Showcase */}
      <section id="gallery" className="py-24 relative bg-[#0F0D0B] border-b border-stone-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              The Space
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              An Atmosphere of Intimacy
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Designed with bespoke Italian acoustic paneling, soft bronze lighting, and private dining alcoves for uninterrupted conversation.
            </p>
          </InView>

          {/* Visual Cards Grid with Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <InView
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Tilt
                  rotationFactor={4}
                  className="rounded-3xl overflow-hidden bg-gradient-to-br border border-white/10 hover:border-[#D4AF37]/50 transition-all p-8 h-80 flex flex-col justify-between relative group"
                  style={{ backgroundImage: `linear-gradient(to bottom right, #1F1714, #120D0B)` }}
                >
                  <Spotlight className="from-amber-400/20 via-transparent to-transparent" size={260} />
                  
                  {/* Subtle geometric pattern overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 group-hover:opacity-20 transition-opacity" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-black/60 text-amber-300 border border-amber-300/30">
                      {img.category}
                    </span>
                    <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
                  </div>

                  <div className="relative z-10 space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-xs text-stone-300 max-w-md leading-relaxed">
                      {img.subtitle}
                    </p>
                  </div>
                </Tilt>
              </InView>
            ))}
          </div>

        </div>
      </section>

      {/* Hours, Location & Details Section */}
      <section id="location" className="py-24 relative bg-[#0C0A09]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Hours & Policies */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 rounded-3xl bg-[#14100E] border border-white/10 p-8 space-y-6"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  Operational Schedule
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Opening Hours &amp; Dress Code
                </h3>
              </div>

              <div className="space-y-3 divide-y divide-white/5 text-xs">
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-white">Tuesday — Friday</span>
                  <span className="text-stone-300 font-mono">17:30 — 23:00 (Dinner)</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="font-semibold text-white">Saturday &amp; Sunday</span>
                  <span className="text-stone-300 font-mono">12:00 — 15:00 &amp; 17:30 — 23:30</span>
                </div>
                <div className="flex items-center justify-between pt-3">
                  <span className="font-semibold text-white">Monday</span>
                  <span className="text-amber-300 font-mono">Closed for Culinary R&amp;D</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1D1714] border border-white/5 space-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Atmosphere Etiquette:</span>
                </div>
                <p>
                  To preserve the intimacy of the dining salon, we kindly ask guests to observe an elegant evening dress code. Athletic wear and beachwear are not permitted.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setReservationModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#DFBF58] text-stone-950 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Make a Reservation
                </button>
              </div>
            </InView>

            {/* Address & Stylized Map Card */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#1C1613] to-[#120E0C] border border-[#D4AF37]/30 p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>The Location</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white">
                  42 Rue de l’Étoile, Mayfair
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Situated in the historic diplomatic quarter, with private courtyard drop-off and dedicated security valet service.
                </p>

                {/* Stylized Concept Map Preview */}
                <div className="h-44 rounded-2xl bg-[#0A0807] border border-white/10 p-4 relative overflow-hidden flex flex-col items-center justify-center text-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                  <Compass className="w-8 h-8 text-[#D4AF37] mb-2 animate-pulse" />
                  <div className="font-serif text-sm text-white font-bold">L’Aura Mayfair Salon</div>
                  <div className="text-[11px] font-mono text-stone-400 mt-0.5">51.5074° N, 0.1278° W</div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-amber-300">
                    Interactive Map Mockup
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>+44 (0) 20 7946 0912</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>concierge@laura-dining.concept</span>
                </div>
              </div>
            </InView>

          </div>

        </div>
      </section>

      {/* Interactive Reservation Modal */}
      {reservationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#14100E] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
            
            {/* Close button */}
            <button
              onClick={resetReservation}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Interactive Front-End Demo</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Reserve an Experience at L’Aura
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Select your preferred date, party size, and seating area. Reservations open 30 days in advance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Date</label>
                    <input
                      type="date"
                      value={resDate}
                      onChange={(e) => setResDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Seating Time</label>
                    <select
                      value={resTime}
                      onChange={(e) => setResTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="17:30">17:30 (Early Tasting)</option>
                      <option value="18:30">18:30</option>
                      <option value="19:30">19:30 (Prime Dinner)</option>
                      <option value="20:30">20:30 (Prime Dinner)</option>
                      <option value="21:15">21:15 (Late Seating)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Party Size</label>
                    <select
                      value={resGuests}
                      onChange={(e) => setResGuests(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests (Table for Two)</option>
                      <option value="4 Guests">4 Guests</option>
                      <option value="6 Guests">6 Guests (Private Alcove)</option>
                      <option value="8 Guests">8 Guests (Chef’s Counter)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Seating Preference</label>
                    <select
                      value={resSeating}
                      onChange={(e) => setResSeating(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="Main Dining Room">Main Dining Room</option>
                      <option value="Chef’s Counter">Chef’s Counter (Culinary View)</option>
                      <option value="Garden Solarium">Garden Solarium Terrace</option>
                      <option value="Private Wine Vault">Private Wine Vault</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={resName}
                      onChange={(e) => setResName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={resEmail}
                      onChange={(e) => setResEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-300 mb-1.5">Special Dietary &amp; Notes</label>
                  <textarea
                    rows={2}
                    value={resNotes}
                    onChange={(e) => setResNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1C1613] border border-white/10 text-white text-xs focus:border-[#D4AF37] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#DFBF58] to-[#C59B27] text-stone-950 font-bold text-xs uppercase tracking-wider hover:scale-[1.01] transition-all cursor-pointer shadow-lg shadow-amber-950/40"
                >
                  Confirm Table Request (Demo)
                </button>
              </form>
            ) : (
              /* Success Confirmation Voucher */
              <div className="text-center py-4 space-y-5 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-amber-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    Demo Voucher Confirmed
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    We Look Forward to Welcoming You
                  </h3>
                  <p className="text-xs text-stone-300 max-w-sm mx-auto mt-2 leading-relaxed">
                    This is a concept interaction demonstration. Your simulated reservation details have been processed:
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1B1512] border border-[#D4AF37]/30 text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Booking Reference:</span>
                    <span className="text-amber-300 font-bold">#LAURA-8829-DEMO</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Guest:</span>
                    <span className="text-white">{resName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Date &amp; Time:</span>
                    <span className="text-white">{resDate} at {resTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-stone-400">Party &amp; Seating:</span>
                    <span className="text-white">{resGuests} • {resSeating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Status:</span>
                    <span className="text-emerald-400 font-bold">Front-End Demo Confirmed</span>
                  </div>
                </div>

                <button
                  onClick={resetReservation}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all"
                >
                  Close Demo Modal
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Global Concept Footer */}
      <footer className="py-12 bg-[#080605] border-t border-stone-800/80 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="font-serif tracking-widest text-sm text-stone-200 font-bold block">
              L’AURA HAUTE CUISINE
            </span>
            <span className="text-[11px] text-stone-400 mt-1 block">
              Concept project created by Vaibhav Sonkusare for demonstration purposes only.
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#hero" className="hover:text-amber-300 transition-colors">Top</a>
            <a href="#menu" className="hover:text-amber-300 transition-colors">Menu</a>
            <a 
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-amber-300 hover:underline"
            >
              ← Back to Main Portfolio
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
