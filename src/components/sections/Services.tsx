import React from 'react';
import { 
  Building2, 
  Rocket, 
  Sparkles, 
  ShoppingBag,
  RefreshCw, 
  Smartphone, 
  Cpu, 
  Wrench, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../../config/services';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-neon-cyan" />,
  Rocket: <Rocket className="w-6 h-6 text-neon-electric" />,
  Sparkles: <Sparkles className="w-6 h-6 text-neon-violet" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-emerald-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-sky-400" />,
  Cpu: <Cpu className="w-6 h-6 text-purple-400" />,
  Wrench: <Wrench className="w-6 h-6 text-orange-400" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-dark-950/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
            <span>TAILORED WEB SOLUTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & Capabilities
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Modern, business-oriented website development combining AI-powered workflows, flexible no-code builders, and handcrafted frontend code.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="rounded-3xl bg-dark-900/80 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-neon-cyan/40 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-neon-cyan/5 group"
            >
              <div>
                {/* Top Row: Icon + Status Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-neon-cyan" />}
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border ${
                    service.status === "Available Now"
                      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/25"
                      : "bg-amber-500/10 text-amber-300 border-amber-500/25"
                  }`}>
                    {service.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Business-Oriented Benefit */}
                <div className="p-3 rounded-xl bg-dark-850/90 border border-white/5 mb-4">
                  <span className="text-[10px] font-mono text-neon-electric uppercase tracking-wider block mb-1">
                    Business Value:
                  </span>
                  <p className="text-xs text-slate-300 leading-snug">
                    {service.businessBenefit}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-1.5 mb-6">
                  {service.keyDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3 h-3 text-neon-cyan shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="#enquire"
                  className="w-full py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-750 text-xs font-semibold text-neon-cyan hover:text-white flex items-center justify-center gap-1.5 transition-all border border-white/5 hover:border-neon-cyan/30"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 p-5 rounded-2xl bg-dark-850/60 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-neon-cyan shrink-0" />
            <span>Honest capability boundary: I tailor tools specifically to each project rather than forcing unnecessary complexity.</span>
          </div>
          <span className="font-mono text-slate-300">No-Code + AI + Custom Code</span>
        </div>

      </div>
    </section>
  );
};
