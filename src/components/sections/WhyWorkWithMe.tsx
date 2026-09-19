import React from 'react';

export const WhyWorkWithMe: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'DESIGN + DEVELOPMENT',
      subtitle: 'ONE INTEGRATED WORKFLOW',
      description: 'One integrated workflow where design concepts and frontend code are authored together, eliminating miscommunication and preserving visual nuance.'
    },
    {
      number: '02',
      title: 'CUSTOM VISUAL DIRECTION',
      subtitle: 'DESIGNED AROUND THE PROJECT',
      description: 'Design decisions are made specifically around your brand, audience and business goals—never forced into a generic off-the-shelf template.'
    },
    {
      number: '03',
      title: 'RESPONSIVE',
      subtitle: 'EVERY SCREEN CONSIDERED',
      description: 'Mobile, tablet and desktop layouts are designed with purposeful hierarchy and ergonomic touch targets from the very beginning.'
    },
    {
      number: '04',
      title: 'PERFORMANCE CONSCIOUS',
      subtitle: 'EFFICIENT IMPLEMENTATION',
      description: 'Efficient implementation and optimized assets throughout the development lifecycle to ensure snappy user experiences.'
    },
    {
      number: '05',
      title: 'SEO READY',
      subtitle: 'SEMANTIC ARCHITECTURE',
      description: 'Semantic HTML5, structured metadata, and accessible hierarchy built into the foundation to ensure clean discoverability.'
    },
    {
      number: '06',
      title: 'DIRECT COLLABORATION',
      subtitle: 'WORK DIRECTLY WITH THE CREATOR',
      description: 'Direct communication with the person designing and building the experience—no middlemen, account layers, or outsourced handoffs.'
    }
  ];

  return (
    <section className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3">
              [ 06 / BUILT AROUND THE BUSINESS ]
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans text-bone-100 font-bold tracking-tight">
              BUILT AROUND <br />
              <span className="font-serif italic font-normal text-[#B8FF00]">THE BUSINESS</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
            Six principles that govern how I collaborate, architect experiences, and deliver production digital properties.
          </div>
        </div>

        {/* 6 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4 hover:border-[#B8FF00]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#B8FF00] font-bold">
                  PRINCIPLE {item.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]/60" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-bone-100 tracking-tight">
                  {item.title}
                </h3>
                <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300 mt-1">
                  {item.subtitle}
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
