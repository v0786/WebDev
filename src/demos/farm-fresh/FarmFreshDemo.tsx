import React, { useState } from 'react';
import { DemoHeader } from '../shared/DemoHeader';
import { Sprout, Microscope, Sparkles, Factory, Truck, Utensils, Check, ShieldCheck, QrCode } from 'lucide-react';

export const FarmFreshDemo: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [traceModalOpen, setTraceModalOpen] = useState(false);
  const [subscriptionOpen, setSubscriptionOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const stages = [
    {
      num: '01',
      title: 'Regenerative Agriculture',
      icon: Sprout,
      headline: 'Living Soil & Biodiversity Ecosystems',
      desc: 'No synthetic fertilizers, no chemical pesticides. We cultivate living mycelial networks and cover crops that sequester 4.2 tons of carbon per hectare.',
      metrics: 'Soil Organic Matter: 6.8% &bull; Earthworm Count: 42/m³',
      location: 'Nagano Prefecture Highlands &bull; 1,100m Alpine Altitude',
    },
    {
      num: '02',
      title: 'Agronomic Research',
      icon: Microscope,
      headline: 'Biological Testing & Molecular Nutrition',
      desc: 'Our in-house agronomy laboratory analyzes phytonutrient concentrations, polyphenol profiles, and microbial diversity before harvest begins.',
      metrics: 'Antioxidant Bio-Density: +42% vs standard organic',
      location: 'Verdant Bio-Laboratories &bull; ISO-17025 Certified',
    },
    {
      num: '03',
      title: 'Formulation & Clean Science',
      icon: Sparkles,
      headline: 'Zero-Additive Functional Botanical Formulas',
      desc: 'Cold ultrasonic extractions preserve delicate enzymatic integrity. Every batch is formulated without artificial emulsifiers, gums, or refined sugars.',
      metrics: 'Enzymatic Bioactivity: 99.4% &bull; Zero Heavy Metals',
      location: 'Formulation Suite 04 &bull; Cleanroom Class 10,000',
    },
    {
      num: '04',
      title: 'Small-Batch Production',
      icon: Factory,
      headline: 'Gentle Cold-Pressure Processing',
      desc: 'Small artisanal batches of 500 liters processed under High-Pressure Cold Hydrostatic conditions (HPP), extending nutrient longevity without heat degradation.',
      metrics: 'Thermal Degradation: 0.0% &bull; Solar-Powered Facility',
      location: 'Verdant Production Atelier &bull; Zero-Waste Certified',
    },
    {
      num: '05',
      title: 'Cold-Chain Distribution',
      icon: Truck,
      headline: 'Real-Time Temperature-Logged Logistics',
      desc: 'From our cleanroom to your refrigerator, IoT temperature beacons stream telemetry every 60 seconds, guaranteeing unbroken 2°C to 4°C cold chains.',
      metrics: 'Mean Transit Temp: 3.2°C &bull; 100% Recyclable Packaging',
      location: 'National Cold-Chain Relay &bull; Carbon-Neutral Delivery',
    },
    {
      num: '06',
      title: 'Mindful Consumer Dining',
      icon: Utensils,
      headline: 'Transparent Nutrition on Your Table',
      desc: 'Scan the on-bottle QR code to view the exact farm coordinates, harvest date, soil health metrics, and laboratory purity certificate for your specific bottle.',
      metrics: 'Batch Provenance: Verifiable &bull; Direct-to-Consumer',
      location: 'Patron Tables Across Japan &bull; Subscription CSA',
    },
  ];

  const currentStage = stages[activeStage];

  return (
    <div className="min-h-screen bg-[#060D08] text-[#EDF7EE] selection:bg-[#10B981]/30 selection:text-white font-sans flex flex-col justify-between">
      
      {/* Universal Demo Header */}
      <DemoHeader
        currentDemo="farm-fresh"
        title="VERDANT LABS // FARM TO FORK"
        category="Regenerative Food Supply Chain"
        accentColor="#10B981"
      />

      <main className="flex-grow">
        <section className="relative px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-16 sm:pb-24 max-w-7xl mx-auto">
          
          {/* Masthead */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase flex items-center gap-2 mb-2">
                <Sprout className="w-3.5 h-3.5" />
                <span>RADICAL FOOD SUPPLY-CHAIN TRANSPARENCY &bull; JAPANESE PHILOSOPHY</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-sans font-black tracking-tight text-white uppercase leading-none">
                VERDANT<span className="text-[#10B981]">.LABS</span>
              </h1>
            </div>

            <div className="text-xs sm:text-sm font-mono text-[#10B981]/80 max-w-xs text-left sm:text-right">
              SOIL TO CELL &bull; 6-STAGE NARRATIVE &bull; HARVEST 2026
            </div>
          </div>

          {/* Hero Composition: Custom 6-Stage Supply Chain SVG Vector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left: Interactive Supply Chain Journey Vector */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-[#10B981]/30 bg-gradient-to-b from-[#0C1E12] to-[#040A06] p-6 sm:p-10 shadow-2xl">
                
                <div className="flex items-center justify-between text-xs font-mono text-[#10B981] pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    <span>PHASE {currentStage.num} OF 06 // {currentStage.title.toUpperCase()}</span>
                  </div>
                  <button
                    onClick={() => setTraceModalOpen(true)}
                    className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono transition-colors flex items-center gap-1.5 text-white"
                  >
                    <QrCode className="w-3 h-3 text-[#10B981]" />
                    <span>SCAN BATCH QR</span>
                  </button>
                </div>

                {/* Custom SVG Drawing: 6-Stage Supply Chain Infographic */}
                <div className="w-full aspect-[16/10] flex items-center justify-center relative">
                  <svg viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Horizon Curvature Ground Line */}
                    <path d="M 30 280 Q 300 250 570 280" stroke="#10B981" strokeWidth="1.2" opacity="0.4" />

                    {/* Soil Horizon Stratum Lines */}
                    <g stroke="#10B981" strokeWidth="0.8" opacity="0.25">
                      <line x1="30" y1="300" x2="570" y2="300" strokeDasharray="4 4" />
                      <line x1="30" y1="320" x2="570" y2="320" />
                      <line x1="30" y1="340" x2="570" y2="340" strokeDasharray="2 2" />
                    </g>

                    {/* Supply Chain Node Pathway */}
                    <path
                      d="M 60 220 C 140 120, 200 240, 280 150 C 360 80, 420 220, 520 180"
                      stroke="#10B981"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 3"
                    />

                    {/* 6 Interactive Stage Stations on Path */}
                    {[
                      { x: 60, y: 220, label: '01 SOIL', icon: 'S' },
                      { x: 150, y: 160, label: '02 R&D', icon: 'R' },
                      { x: 250, y: 190, label: '03 FORM', icon: 'F' },
                      { x: 340, y: 120, label: '04 PROD', icon: 'P' },
                      { x: 430, y: 190, label: '05 DIST', icon: 'D' },
                      { x: 520, y: 180, label: '06 TABLE', icon: 'T' },
                    ].map((st, idx) => {
                      const isCurr = activeStage === idx;
                      return (
                        <g key={idx} transform={`translate(${st.x}, ${st.y})`} className="cursor-pointer" onClick={() => setActiveStage(idx)}>
                          {/* Active Ring Pulsing */}
                          {isCurr && (
                            <circle cx="0" cy="0" r="28" fill="#10B981" fillOpacity="0.2">
                              <animate attributeName="r" values="20;32;20" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                          )}
                          <circle
                            cx="0"
                            cy="0"
                            r={isCurr ? 18 : 12}
                            fill={isCurr ? '#10B981' : '#0E2416'}
                            stroke="#10B981"
                            strokeWidth={isCurr ? 2.5 : 1.2}
                          />
                          <text
                            x="0"
                            y="4"
                            textAnchor="middle"
                            fill={isCurr ? '#060D08' : '#10B981'}
                            fontSize="10"
                            fontFamily="monospace"
                            fontWeight="bold"
                          >
                            {st.icon}
                          </text>
                          <text
                            x="0"
                            y={idx % 2 === 0 ? 32 : -22}
                            textAnchor="middle"
                            fill={isCurr ? '#FFFFFF' : '#10B981'}
                            fontSize="9"
                            fontFamily="monospace"
                            fontWeight={isCurr ? 'bold' : 'normal'}
                            opacity={isCurr ? 1 : 0.7}
                          >
                            {st.label}
                          </text>
                        </g>
                      );
                    })}

                    {/* Botanical Leaf Vectors on Left */}
                    <g transform="translate(70, 70)" stroke="#10B981" strokeWidth="1.5" fill="#10B981" fillOpacity="0.15">
                      <path d="M 10 60 Q 40 10 90 20 Q 80 70 10 60 Z" />
                      <line x1="10" y1="60" x2="80" y2="25" stroke="#10B981" strokeWidth="1" />
                    </g>

                    {/* Scientific Molecular Formula Callout on Right */}
                    <g transform="translate(450, 40)" stroke="#10B981" strokeWidth="1.2" opacity="0.8">
                      <polygon points="40,20 60,30 60,50 40,60 20,50 20,30" fill="#0C1E12" />
                      <polygon points="60,30 80,20 100,30 100,50 80,60 60,50" fill="#0C1E12" />
                      <text x="50" y="80" fill="#10B981" fontSize="9" fontFamily="monospace">POLYPHENOL C15H10O7</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#10B981] gap-2">
                  <div dangerouslySetInnerHTML={{ __html: currentStage.metrics }} />
                  <div className="text-white/60">{currentStage.location}</div>
                </div>

              </div>
            </div>

            {/* Right: Narrative & 6-Stage Progression Stepper */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs font-mono">
                  SUPPLY-CHAIN STORYTELLING
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
                  From living soil to <br />
                  <span className="font-serif italic text-[#10B981]">cellular nutrition</span>.
                </h2>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">
                  Inspired by the deep structural transparency of Japanese agriculture (Foodnia), we disclose every link in the food chain. No anonymous brokers. Verifiable purity at every step.
                </p>
              </div>

              {/* 6 Stages Stepper List */}
              <div className="space-y-2 border-y border-white/10 py-5">
                <div className="text-xs font-mono uppercase tracking-widest text-[#10B981] mb-2">
                  CHRONOLOGICAL JOURNEY (CLICK TO INSPECT):
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {stages.map((st, idx) => (
                    <button
                      key={st.num}
                      onClick={() => setActiveStage(idx)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all min-h-[44px] ${
                        activeStage === idx
                          ? 'bg-[#10B981]/20 border-[#10B981] text-white font-bold'
                          : 'bg-white/[0.02] border-white/10 text-white/60 hover:border-white/20'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-[#10B981]">{st.num} // STAGE</div>
                      <div className="truncate font-sans">{st.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Stage Deep-Dive Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#10B981]/30 space-y-2">
                <div className="text-xs font-mono text-[#10B981] font-bold">
                  PHASE {currentStage.num}: {currentStage.headline}
                </div>
                <p className="text-xs font-sans text-white/80 font-light leading-relaxed">
                  {currentStage.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setSubscriptionOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#10B981] text-[#060D08] hover:bg-white font-mono text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2 shadow-xl min-h-[44px]"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>JOIN SEASONAL REGENERATIVE CSA</span>
                </button>
              </div>

            </div>

          </div>

        </section>
      </main>

      {/* Batch Traceability QR Modal */}
      {traceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0C1A10] border border-[#10B981]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#10B981]">VERDANT BATCH TELEMETRY</div>
                <h3 className="text-xl font-sans font-bold text-white">Batch Certificate #VL-2026-NAGANO</h3>
              </div>
              <button
                onClick={() => setTraceModalOpen(false)}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/60">FARM PLOT:</span>
                  <span className="text-white font-bold">Nagano Hill 4, Plot B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">HARVEST DATE:</span>
                  <span className="text-white">18 September 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">SOIL MICROBIOME SCORE:</span>
                  <span className="text-[#10B981] font-bold">98.4 / 100 (Exceptional)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">PESTICIDE RESIDUES:</span>
                  <span className="text-[#10B981] font-bold">0.000 PPM (Non-Detectable)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">COLD-CHAIN TEMPERATURE LOG:</span>
                  <span className="text-[#10B981] font-bold">Consistent 3.1°C</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#10B981]/10 text-[#10B981] text-xs">
                <Check className="w-4 h-4 shrink-0" />
                <span>Independently verified by Japan Agricultural Standard (JAS) &amp; ISO-17025.</span>
              </div>

              <button
                onClick={() => setTraceModalOpen(false)}
                className="w-full py-2.5 rounded-full bg-[#10B981] text-black font-bold uppercase"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSA Subscription Modal */}
      {subscriptionOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#0C1A10] border border-[#10B981]/40 p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <div className="text-xs font-mono text-[#10B981]">REGENERATIVE HARVEST SHARE</div>
                <h3 className="text-xl font-sans font-bold text-white">Join Seasonal Allocation</h3>
              </div>
              <button
                onClick={() => { setSubscriptionOpen(false); setSubscribed(false); }}
                className="text-white/50 hover:text-white text-xs font-mono"
              >
                [CLOSE]
              </button>
            </div>

            {subscribed ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center mx-auto text-[#10B981]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Harvest Allocation Confirmed</h4>
                <p className="text-xs text-white/70 max-w-xs mx-auto font-mono">
                  Welcome to Verdant Labs. Your weekly chilled harvest shipment details and farm updates have been delivered to your email.
                </p>
                <button
                  onClick={() => { setSubscriptionOpen(false); setSubscribed(false); }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#10B981] text-black font-mono text-xs font-bold"
                >
                  Return to Journey
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="space-y-4 text-xs font-mono"
              >
                <div className="space-y-1">
                  <label className="text-white/60">YOUR FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Kenji Takahashi"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">SUBSCRIPTION TIER</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#10B981]">
                    <option value="weekly">Weekly Regenerative Harvest Share (4kg Chilled + Tonics)</option>
                    <option value="biweekly">Fortnightly Botanical Formula &amp; Produce Box</option>
                    <option value="restaurant">Culinary Restaurant Bulk Delivery (30kg)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-white/60">DELIVERY EMAIL &amp; ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="patron@verdant.jp"
                    className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/15 text-white focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#10B981] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
                >
                  CONFIRM CSA SUBSCRIPTION
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs font-mono text-white/50">
        VERDANT LABS REGENERATIVE FOOD &bull; DEMONSTRATION PROTOTYPE BY SONKUSARE VAIBHAV &bull; 2026
      </footer>

    </div>
  );
};
