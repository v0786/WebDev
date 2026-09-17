import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Utensils, Zap, Palette } from 'lucide-react';

interface DemoHeaderProps {
  currentDemo: 'restaurant' | 'saas' | 'agency';
  title: string;
  badgeColor?: string;
}

export const DemoHeader: React.FC<DemoHeaderProps> = ({
  currentDemo,
  title,
  badgeColor = 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const demos = [
    {
      id: 'restaurant',
      label: "L'Aura Restaurant",
      route: '#/restaurant',
      icon: Utensils,
      color: 'hover:text-amber-400',
    },
    {
      id: 'saas',
      label: 'ApexFlow SaaS',
      route: '#/saas',
      icon: Zap,
      color: 'hover:text-cyan-400',
    },
    {
      id: 'agency',
      label: 'Studio Vektor',
      route: '#/agency',
      icon: Palette,
      color: 'hover:text-lime-400',
    },
  ];

  return (
    <aside aria-label="Concept demo banner" className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-2' 
        : 'bg-black/80 backdrop-blur-sm border-b border-white/10 py-2.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 text-xs">
        
        {/* Left: Return to portfolio & Concept badge */}
        <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 w-full md:w-auto justify-between md:justify-start">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-[1.02] active:scale-95 cursor-pointer border border-white/10 shrink-0"
            title="Return to main portfolio"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </a>

          <div className="flex items-center gap-1.5">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${badgeColor}`}>
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>CONCEPT PROJECT</span>
            </span>
            <span className="hidden sm:inline text-slate-400 text-[11px] truncate max-w-xs">
              Demonstration prototype — {title}
            </span>
          </div>
        </div>

        {/* Right: Cross-demo switcher pills */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
          <span className="text-slate-400 text-[11px] hidden lg:inline mr-1 font-mono">
            Switch Concept:
          </span>
          {demos.map((demo) => {
            const Icon = demo.icon;
            const isActive = currentDemo === demo.id;
            return (
              <a
                key={demo.id}
                href={demo.route}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all shrink-0 ${
                  isActive
                    ? 'bg-white/20 text-white border border-white/20 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{demo.label}</span>
              </a>
            );
          })}
        </div>

      </div>
    </aside>
  );
};
