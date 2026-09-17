import React from 'react';
import { 
  UserCheck, 
  Cpu, 
  Smartphone, 
  Target, 
  FileCheck2, 
  ShieldAlert 
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const points = [
    {
      title: "Direct 1-on-1 Maker Collaboration",
      description: "You work directly with the person designing and coding your website. No junior account handlers, no lost context in handover chains, and zero agency bureaucratic markup.",
      icon: <UserCheck className="w-6 h-6 text-neon-cyan" />,
      tag: "Direct Access"
    },
    {
      title: "Time Zone Overlap & Async Agility",
      description: "Experienced in seamless asynchronous collaboration across North America, Europe, and Australia. You receive structured written briefs, milestone demos, and daily/weekly progress updates.",
      icon: <Target className="w-6 h-6 text-neon-violet" />,
      tag: "Global Workflow"
    },
    {
      title: "AI Prototyping + Custom Code Polish",
      description: "I harness modern AI design tooling to explore concepts rapidly and iterate on layouts, then write handcrafted, maintainable React and TypeScript code for production-grade speed and reliability.",
      icon: <Cpu className="w-6 h-6 text-neon-electric" />,
      tag: "Modern Tech"
    },
    {
      title: "Transparent USD Milestone Contracts",
      description: "Every deliverable, timeline, and payment milestone is clearly outlined before work starts. Invoicing in USD (or EUR/GBP) via international bank transfer, Wise, or Stripe with no unexpected fees.",
      icon: <FileCheck2 className="w-6 h-6 text-emerald-400" />,
      tag: "Fair & Upfront"
    },
    {
      title: "Mobile Ergonomics & Global Performance",
      description: "Websites are optimized for fast load times worldwide and tested across iPhone, Android, tablets, and 4K displays with accessible typography and touch ergonomics.",
      icon: <Smartphone className="w-6 h-6 text-sky-400" />,
      tag: "Fast & Fluid"
    },
    {
      title: "Honest Commitments & Zero Gimmicks",
      description: "No inflated client logos, no fabricated testimonials, and no unrealistic SEO ranking guarantees. Just disciplined technical execution, genuine communication, and dedicated craftsmanship.",
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      tag: "100% Authentic"
    }
  ];

  return (
    <section id="why-me" className="py-24 relative bg-dark-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
            <span>THE FREELANCE ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Work Directly With Me
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A focused partnership delivering international-standard digital solutions with speed, clarity, and personal accountability.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-dark-900/70 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:border-white/25 hover:shadow-xl hover:shadow-neon-cyan/5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pt.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5">
                    {pt.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-neon-cyan transition-colors">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
