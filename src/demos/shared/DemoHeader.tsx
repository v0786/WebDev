import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Compass, 
  Utensils, 
  Cpu, 
  Scissors, 
  Building, 
  Gauge, 
  Palette, 
  Layers, 
  Sprout 
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../config/portfolio';

export interface DemoHeaderProps {
  currentDemo: 'forma' | 'maison' | 'orbit' | 'atelier27' | 'arc' | 'vanta' | 'noir' | 'kanvaa' | 'farm-fresh' | string;
  title: string;
  category?: string;
  accentColor?: string;
  badgeColor?: string;
}

export const ALL_DEMOS = [
  {
    id: 'forma',
    brand: 'FORMA',
    label: 'Architecture',
    route: '#/demo/forma',
    icon: Compass,
    color: '#E5A958',
  },
  {
    id: 'maison',
    brand: 'MAISON',
    label: 'Dining & Cellar',
    route: '#/demo/maison',
    icon: Utensils,
    color: '#D49D42',
  },
  {
    id: 'orbit',
    brand: 'ORBIT',
    label: 'AI SaaS',
    route: '#/demo/orbit',
    icon: Cpu,
    color: '#00F2FE',
  },
  {
    id: 'atelier27',
    brand: 'ATELIER 27',
    label: 'Haute Fashion',
    route: '#/demo/atelier27',
    icon: Scissors,
    color: '#E0B384',
  },
  {
    id: 'arc',
    brand: 'ARC',
    label: 'Real Estate',
    route: '#/demo/arc',
    icon: Building,
    color: '#D6A354',
  },
  {
    id: 'vanta',
    brand: 'VANTA',
    label: 'Hypercar',
    route: '#/demo/vanta',
    icon: Gauge,
    color: '#FF462D',
  },
  {
    id: 'noir',
    brand: 'NOIR',
    label: 'Creative Studio',
    route: '#/demo/noir',
    icon: Palette,
    color: '#A855F7',
  },
  {
    id: 'kanvaa',
    brand: 'KANVAA',
    label: 'Indian Craft',
    route: '#/demo/kanvaa',
    icon: Layers,
    color: '#E5A958',
  },
  {
    id: 'farm-fresh',
    brand: 'FARM / FRESH',
    label: 'Food FMCG',
    route: '#/demo/farm-fresh',
    icon: Sprout,
    color: '#10B981',
  },
];

export const DemoHeader: React.FC<DemoHeaderProps> = ({
  currentDemo,
  title,
  category,
  accentColor = '#E5A958',
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Dynamic SEO title & description for individual concept demo views
    const originalTitle = document.title;
    const descMeta = document.querySelector('meta[name="description"]');
    const originalDesc = descMeta?.getAttribute('content') || '';
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonicalLink?.getAttribute('href') || 'https://v0786.github.io/WebDev/';

    const matchedProject = PORTFOLIO_PROJECTS.find(p => p.id.startsWith(currentDemo) || p.demoRoute.includes(currentDemo));
    if (matchedProject) {
      document.title = `${matchedProject.brandName} — ${matchedProject.title} | Vaibhav Sonkusare`;
      if (descMeta) {
        descMeta.setAttribute('content', `${matchedProject.brandName} (${matchedProject.category}): ${matchedProject.shortDescription}`);
      }
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://v0786.github.io/WebDev/${matchedProject.demoRoute}`);
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.title = originalTitle;
      if (descMeta && originalDesc) {
        descMeta.setAttribute('content', originalDesc);
      }
      if (canonicalLink && originalCanonical) {
        canonicalLink.setAttribute('href', originalCanonical);
      }
    };
  }, [currentDemo]);

  return (
    <aside aria-label="Concept demo banner" className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07080B]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2' 
        : 'bg-[#07080B]/85 backdrop-blur-md border-b border-white/10 py-2.5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3 text-xs">
        
        {/* Left: Return to portfolio & Concept badge */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-3 w-full lg:w-auto justify-between lg:justify-start">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'work';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all hover:scale-[1.02] active:scale-95 cursor-pointer border border-white/15 shrink-0 min-h-[36px]"
            title="Return to main portfolio"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">Back to Portfolio</span>
          </a>

          <div className="flex items-center gap-2">
            <span 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium border bg-black/60 shadow-sm"
              style={{ borderColor: `${accentColor}50`, color: accentColor }}
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>CONCEPT PROTOTYPE</span>
            </span>
            <span className="text-bone-300 text-[11px] font-mono truncate max-w-[180px] sm:max-w-xs">
              {title} {category ? `// ${category}` : ''}
            </span>
          </div>
        </div>

        {/* Right: Switcher pills for all 9 demo projects */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 lg:pb-0 scrollbar-none w-full lg:w-auto">
          <span className="text-bone-300/50 text-[10px] hidden xl:inline mr-1 font-mono uppercase tracking-widest shrink-0">
            Switch Demo:
          </span>
          {ALL_DEMOS.map((demo) => {
            const Icon = demo.icon;
            const isActive = currentDemo === demo.id || 
              (demo.id === 'maison' && currentDemo === 'restaurant') ||
              (demo.id === 'orbit' && currentDemo === 'saas') ||
              (demo.id === 'noir' && currentDemo === 'agency');

            return (
              <a
                key={demo.id}
                href={demo.route}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono transition-all shrink-0 min-h-[32px] ${
                  isActive
                    ? 'bg-white/20 text-white border border-white/30 shadow-md font-semibold'
                    : 'text-bone-300/70 hover:text-white hover:bg-white/[0.06] border border-transparent'
                }`}
                style={isActive ? { borderColor: demo.color, color: '#FFFFFF' } : undefined}
                title={`${demo.brand} — ${demo.label}`}
              >
                <Icon className="w-3 h-3 shrink-0" style={{ color: demo.color }} />
                <span>{demo.brand}</span>
              </a>
            );
          })}
        </div>

      </div>
    </aside>
  );
};
