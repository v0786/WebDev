import React from 'react';

export const PositioningSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Communicate Brand Identity',
      desc: 'Communicate what your business genuinely stands for and establish visual authority from the very first viewport.'
    },
    {
      num: '02',
      title: 'Guide Visitors Naturally',
      desc: 'Architect intuitive pathways through the content that make exploring offerings effortless and engaging.'
    },
    {
      num: '03',
      title: 'Perform Across Devices',
      desc: 'Fluid layouts, responsive ergonomics, and conscious optimization ensuring a reliable experience on any screen.'
    },
    {
      num: '04',
      title: 'Crawlable & Search Ready',
      desc: 'Clean semantic HTML5, structured metadata, and SEO-friendly foundations built into every template.'
    },
    {
      num: '05',
      title: 'Make the Next Action Obvious',
      desc: 'Frictionless project inquiry forms and direct WhatsApp chat that turn visitor attention into real conversations.'
    }
  ];

  return (
    <section className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Label */}
        <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
          <span>[ 03 / POSITIONING &amp; BUSINESS VALUE ]</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="max-w-5xl space-y-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-black text-bone-100 tracking-tight leading-[0.98]">
            YOUR WEBSITE <br />
            <span className="font-serif italic font-normal text-[#B8FF00]">should do more</span> <br />
            THAN LOOK GOOD.
          </h2>

          <p className="text-base sm:text-xl font-sans text-bone-300 font-light leading-relaxed max-w-3xl">
            A strong website should communicate what a business stands for, guide visitors through the experience, perform well, work across devices and make the next action obvious.
          </p>
        </div>

        {/* 5 Core Business Pillars Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 flex flex-col justify-between hover:border-[#B8FF00]/40 transition-colors"
            >
              <div>
                <div className="text-xs font-mono text-[#B8FF00] font-bold mb-2">
                  {p.num}
                </div>
                <h3 className="text-base font-sans font-bold text-bone-100 tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs font-sans text-bone-300 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
