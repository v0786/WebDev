import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../audio/SoundEffects';

interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  explanation: string;
  deliverables: string[];
  technology: string[];
  exampleProjects: string;
}

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First expanded by default

  const services: ServiceItem[] = [
    {
      number: '01',
      title: 'WEB DESIGN',
      subtitle: 'UX/UI & ART DIRECTION',
      explanation: 'Bespoke visual systems, information architecture, wireframing, and responsive design systems engineered to establish immediate authority and clarity.',
      deliverables: ['UX/UI Strategy', 'Art Direction', 'Information Architecture', 'Responsive Design', 'Design Systems & Tokens'],
      technology: ['Figma', 'Typography Tokens', 'Responsive Grids', 'Design Systems'],
      exampleProjects: 'FORMA, ATELIER 27, NOIR'
    },
    {
      number: '02',
      title: 'WEB DEVELOPMENT',
      subtitle: 'HANDCRAFTED FRONTEND ENGINEERING',
      explanation: 'Clean production codebases engineered in React, Next.js, and TypeScript. Modern APIs, Headless CMS integration, accessible structure, and zero bloat.',
      deliverables: ['React & Next.js Builds', 'Strict TypeScript', 'APIs & Relays', 'Headless CMS', 'Accessible HTML5'],
      technology: ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
      exampleProjects: 'ORBIT, ARC, VANTA'
    },
    {
      number: '03',
      title: 'BUSINESS WEBSITES',
      subtitle: 'AUTHORITY & CONVERSION',
      explanation: 'High-prestige websites tailored for corporate firms, restaurants, hospitality, architecture studios, and professional service providers that turn attention into inquiries.',
      deliverables: ['Corporate Web Flagships', 'Hospitality Suites', 'Restaurant Portals', 'Professional Services', 'Local Business Solutions'],
      technology: ['Next.js', 'Tailwind CSS', 'SEO Markup', 'Form Terminals'],
      exampleProjects: 'MAISON, FORMA, KANVAA'
    },
    {
      number: '04',
      title: 'LANDING PAGES',
      subtitle: 'CONVERSION-FOCUSED UX',
      explanation: 'Laser-focused landing pages engineered for campaigns, product launches, and lead generation. Built around human psychology and frictionless conversion pathways.',
      deliverables: ['Campaign Microsites', 'Product Launches', 'Lead Generation Relays', 'Conversion UX', 'A/B Test Ready'],
      technology: ['React', 'Conversion UX', 'Sub-second FCP', 'Analytics Hooks'],
      exampleProjects: 'ORBIT Telemetry, VANTA Hypercar'
    },
    {
      number: '05',
      title: 'E-COMMERCE',
      subtitle: 'SENSORY SHOPPING EXPERIENCES',
      explanation: 'Distinctive digital storefronts that transcend generic templates. Immersive product experiences, tactile catalogs, shopping UX, and frictionless checkout.',
      deliverables: ['Product Experiences', 'Digital Catalogs', 'Shopping UX', 'Checkout Experiences', 'Payment Gateways'],
      technology: ['Headless Commerce', 'Stripe Payments', 'Multi-Currency Relays'],
      exampleProjects: 'ATELIER 27, KANVAA, FARM / FRESH'
    },
    {
      number: '06',
      title: 'INTERACTIVE EXPERIENCES',
      subtitle: 'MOTION & SCROLL STORYTELLING',
      explanation: 'Memorable web experiences using motion, scroll-driven storytelling, 3D, WebGL accents, and experimental interfaces that elevate brand stature.',
      deliverables: ['Motion Choreography', 'Scroll Storytelling', '3D Accents', 'WebGL Canvases', 'Experimental Interfaces'],
      technology: ['Three.js', 'Framer Motion', 'GSAP', 'GLSL Shaders'],
      exampleProjects: 'Hero Digital Monolith, VANTA Aerodynamics, NOIR'
    },
    {
      number: '07',
      title: 'AI-POWERED EXPERIENCES',
      subtitle: 'INTELLIGENT WORKFLOWS & INTERFACES',
      explanation: 'Integrating modern AI capabilities, automated pipelines, and intelligent interfaces directly into web experiences where they provide genuine value.',
      deliverables: ['AI Interfaces', 'Workflow Automation', 'AI Integrations', 'Intelligent Workflows', 'Client Relays'],
      technology: ['OpenAI APIs', 'Autonomous Pipelines', 'State Machines'],
      exampleProjects: 'ORBIT AI Platform, Proposal Compiler'
    }
  ];

  const toggleExpand = (idx: number) => {
    soundFx.playClick();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
              <span>[ 04 / SERVICES &amp; DISCIPLINES ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans text-bone-100 font-black tracking-tight uppercase">
              SERVICE <br />
              <span className="font-serif italic font-normal text-[#B8FF00] lowercase">directory</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-mono text-bone-300 uppercase tracking-wider">
            An agency-grade service hierarchy built to deliver measurable business clarity and visual authority.
          </div>
        </div>

        {/* Expandable Editorial List (Section 16 & 17) */}
        <div className="divide-y divide-white/[0.08]">
          {services.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.number}
                tabIndex={0}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() => toggleExpand(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
                className={`py-8 sm:py-10 transition-all duration-300 cursor-pointer group px-4 -mx-4 rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-[#B8FF00] ${
                  isExpanded || isHovered ? 'bg-white/[0.03]' : 'bg-transparent'
                }`}
                data-cursor="link"
                data-cursor-text={isExpanded ? 'CLOSE' : 'EXPAND'}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Number & Subtitle */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="text-base sm:text-lg font-mono text-[#B8FF00] font-bold">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Center: Title & Expandable Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-bone-100 tracking-tight group-hover:text-[#B8FF00] transition-colors uppercase">
                      {item.title}
                    </h3>
                    
                    {/* Always visible brief description */}
                    <p className="max-w-prose text-xs sm:text-sm font-sans text-bone-300 leading-relaxed font-light">
                      {item.explanation}
                    </p>

                    {/* Section 17 Revealed on Interaction: Deliverables, Technologies, Examples */}
                    {(isExpanded || isHovered) && (
                      <div className="pt-2 space-y-4 animate-in fade-in duration-300">
                        
                        {/* Deliverables */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                            DELIVERABLES
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.deliverables.map((del, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-3 py-1 rounded-full text-[11px] font-mono text-bone-200 bg-white/[0.04] border border-white/[0.08]"
                              >
                                {del}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Relevant Technologies */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                            RELEVANT TECHNOLOGIES
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technology.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-0.5 rounded text-[10px] font-mono text-[#B8FF00] bg-[#B8FF00]/10 border border-[#B8FF00]/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Project Examples */}
                        <div className="pt-1 text-[11px] font-mono text-bone-300/85 flex flex-wrap items-center gap-3">
                          <span className="text-[#B8FF00] font-semibold">PROJECT EXAMPLES:</span>
                          <span>{item.exampleProjects}</span>
                        </div>

                      </div>
                    )}
                  </div>

                  {/* Right: Interaction Trigger */}
                  <div className="lg:col-span-2 flex items-center lg:justify-end text-xs font-mono text-[#B8FF00] font-bold uppercase tracking-wider group-hover:underline pt-2 lg:pt-0">
                    <span>{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
                    <ArrowUpRight className={`w-4 h-4 ml-1 transform transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
