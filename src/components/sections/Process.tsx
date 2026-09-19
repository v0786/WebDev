import React, { useState } from 'react';
import { soundFx } from '../audio/SoundEffects';

interface ProcessPhase {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const phases: ProcessPhase[] = [
    {
      number: '01',
      name: 'DISCOVER',
      subtitle: 'UNDERSTAND BUSINESS, AUDIENCE & GOALS',
      description: 'We unpack your commercial objectives, competitive landscape, target audience psychology, and what makes your offering singular. No assumptions; total clarity.',
      keyOutputs: ['Stakeholder Discovery', 'Audience Profile', 'Competitive Benchmark', 'Value Proposition']
    },
    {
      number: '02',
      name: 'DEFINE',
      subtitle: 'CLARIFY STRUCTURE, CONTENT & PRIORITIES',
      description: 'We establish the information architecture, conversion pathways, content requirements, and technical stack before writing code or making design mockups.',
      keyOutputs: ['Sitemap Architecture', 'Conversion Wireframes', 'Content Outlines', 'Technical Scope Matrix']
    },
    {
      number: '03',
      name: 'DESIGN',
      subtitle: 'CREATE THE VISUAL SYSTEM & EXPERIENCE',
      description: 'Designing high-fidelity editorial layouts, bespoke typography pairings, color systems, and interactive motion prototypes in Figma that command instant authority.',
      keyOutputs: ['Editorial Design System', 'High-Fidelity UI Screens', 'Interactive Motion Specs', 'Mobile Layouts']
    },
    {
      number: '04',
      name: 'BUILD',
      subtitle: 'DEVELOP THE RESPONSIVE PRODUCTION WEBSITE',
      description: 'Writing clean, handcrafted code in React, Next.js, and strict TypeScript. Integrating 60 FPS motion, sub-50ms interaction speeds, and semantic structure.',
      keyOutputs: ['Production Codebase', 'Strict TypeScript', 'Mobile Ergonomics', 'Sub-second Load Times']
    },
    {
      number: '05',
      name: 'REFINE',
      subtitle: 'TEST, OPTIMIZE & PREPARE FOR LAUNCH',
      description: 'Comprehensive cross-browser validation across iOS, Android, and desktop, accessibility audits, Core Web Vitals profiling, and Search Console indexing.',
      keyOutputs: ['Cross-Device QA Audit', 'SEO Schema Verification', 'Speed & Latency Optimization', 'Domain & CDN Setup']
    },
    {
      number: '06',
      name: 'EVOLVE',
      subtitle: 'CONTINUE IMPROVING AFTER LAUNCH',
      description: 'Ongoing strategic refinement, conversion rate optimization, new landing page rollouts, and feature expansions as your business grows.',
      keyOutputs: ['Post-Launch Analytics', 'CRO Iteration', 'Ongoing Retainer Support', 'Feature Expansions']
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
              <span>[ 07 / THE VAIBHAV METHOD ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans text-bone-100 font-black tracking-tight uppercase">
              THE <br />
              <span className="font-serif italic font-normal text-[#B8FF00] lowercase">
                Vaibhav Method
              </span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
            A structured six-phase framework that takes your project from abstract concept to high-converting production with absolute transparency.
          </div>
        </div>

        {/* Interactive Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {phases.map((phase, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={phase.number}
                onClick={() => {
                  soundFx.playChirp(360 + idx * 50, 0.05, 'sine', 0.02);
                  setActiveStep(idx);
                }}
                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-white/[0.04] border-[#B8FF00]/60 shadow-xl shadow-[#B8FF00]/5'
                    : 'bg-white/[0.015] border-white/[0.08] hover:border-white/25'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#B8FF00] font-bold">
                    <span>PHASE {phase.number}</span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#B8FF00] animate-ping' : 'bg-[#B8FF00]/40'}`} />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-sans font-bold text-bone-100 tracking-tight">
                      {phase.name}
                    </h3>
                    <div className="text-[10px] font-mono text-bone-300 uppercase tracking-widest mt-1">
                      {phase.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-bone-300">
                    KEY DELIVERABLES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {phase.keyOutputs.map((out, oIdx) => (
                      <span
                        key={oIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-bone-200 bg-white/[0.03] border border-white/[0.06]"
                      >
                        {out}
                      </span>
                    ))}
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
