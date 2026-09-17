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
      title: "Direct Collaboration & Clear Communication",
      description: "You communicate directly with the person architecting, designing, and coding your site. No account handlers, no misinterpreted briefs, and zero agency bureaucratic delay.",
      icon: <UserCheck className="w-6 h-6 text-neon-cyan" />,
      tag: "1-on-1 Focus"
    },
    {
      title: "AI-Assisted Efficiency & Agility",
      description: "I integrate state-of-the-art AI tooling into design ideation and code generation workflows, accelerating turnaround while dedicating time to handcrafted polish and performance.",
      icon: <Cpu className="w-6 h-6 text-neon-violet" />,
      tag: "Modern Workflows"
    },
    {
      title: "Flawless Multi-Device Responsiveness",
      description: "Every layout is tested across mobile screens, tablets, laptops, and wide monitors. Your visitors receive a seamless, intuitive experience no matter what device they use.",
      icon: <Smartphone className="w-6 h-6 text-neon-electric" />,
      tag: "Responsive First"
    },
    {
      title: "Clear Scope & Transparent Pricing",
      description: "All milestones, deliverables, and payment structures are explicitly agreed upon before development kicks off. No surprise charges or vague contractual ambiguities.",
      icon: <FileCheck2 className="w-6 h-6 text-emerald-400" />,
      tag: "Upfront Integrity"
    },
    {
      title: "Engineered for Real Business Objectives",
      description: "A website must be more than eye candy—it must communicate your value proposition, build institutional trust, and make it effortless for prospects to get in touch.",
      icon: <Target className="w-6 h-6 text-amber-400" />,
      tag: "Outcome Driven"
    },
    {
      title: "Honest, Realistic Commitments",
      description: "I provide realistic technical timelines and genuine capability commitments without making unsupported guarantees about search rankings, instantaneous traffic, or inflated claims.",
      icon: <ShieldAlert className="w-6 h-6 text-sky-400" />,
      tag: "No Gimmicks"
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
