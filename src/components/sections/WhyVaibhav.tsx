import React from 'react';

export const WhyVaibhav: React.FC = () => {
  const capabilities = [
    {
      title: 'DESIGN THINKING',
      desc: 'Information architecture, user experience strategy, wireframing, and bespoke visual art direction tailored to your brand.'
    },
    {
      title: 'FRONTEND ENGINEERING',
      desc: 'Clean, maintainable codebases written in React, Next.js, and TypeScript with semantic HTML and accessible structure.'
    },
    {
      title: 'MOTION & INTERACTION',
      desc: 'Thoughtful micro-interactions, subtle scroll storytelling, and intentional movement that enhance user engagement.'
    },
    {
      title: 'RESPONSIVE UX',
      desc: 'Purpose-designed mobile layouts with minimum 44px touch targets and natural ergonomics across all viewports.'
    },
    {
      title: 'SEO ARCHITECTURE',
      desc: 'Semantic tags, structured Schema.org markup, Open Graph previews, and fast initial paint to support search visibility.'
    },
    {
      title: 'AI INTEGRATION',
      desc: 'Integrating intelligent workflows, automated pipelines, and modern AI capabilities where they provide genuine business value.'
    }
  ];

  return (
    <section className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3">
              [ 08 / THE DIRECT COLLABORATION MODEL ]
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans text-bone-100 font-black tracking-tight leading-tight uppercase">
              ONE PERSON. <br />
              <span className="font-serif italic font-normal text-[#B8FF00] lowercase">design + code</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
            I can take a project from idea and structure through design, development, interaction and launch without unnecessary handoffs between separate teams.
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 hover:border-[#B8FF00]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#B8FF00] font-bold">
                <span>0{idx + 1}</span>
                <span>//</span>
                <span>{item.title}</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
