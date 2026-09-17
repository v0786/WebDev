import React from 'react';
import { 
  Compass, 
  FileCheck, 
  Code2, 
  Eye, 
  Rocket, 
  Globe, 
  CheckCircle2, 
  HelpCircle,
  Clock,
  Layers,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { WORKFLOW_STEPS, PRICING_PACKAGES } from '../../config/process';
import { Button } from '../ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-neon-cyan" />,
  FileCheck: <FileCheck className="w-5 h-5 text-emerald-400" />,
  Code2: <Code2 className="w-5 h-5 text-neon-electric" />,
  Eye: <Eye className="w-5 h-5 text-neon-violet" />,
  Rocket: <Rocket className="w-5 h-5 text-amber-400" />
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-dark-950/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-cyan">
            <Compass className="w-3.5 h-3.5" />
            <span>HOW I WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Transparent 5-Step Process
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Collaborating with an independent website creator should be simple, clear, and reassuring. Here is how we turn your vision into a published reality.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-3xl bg-dark-900/85 backdrop-blur-md border border-white/10 flex flex-col justify-between hover:border-neon-cyan/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-electric">
                    {step.stepNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[step.icon]}
                  </div>
                </div>

                <div className="text-xs font-mono text-neon-cyan font-bold uppercase tracking-wider mb-1">
                  {step.stepName}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {step.headline}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-slate-400 font-mono">
                Step {step.stepNumber} Milestone
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring Process Clause */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-dark-850/70 border border-white/5 flex items-center justify-between gap-4 text-xs text-slate-300 mb-24">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Exact scope, deliverables, realistic timeline, and payment milestones are formally confirmed before development begins.</span>
          </div>
          <span className="font-mono text-neon-cyan shrink-0 hidden sm:inline">No Hidden Terms</span>
        </div>

        {/* Configurable Pricing Packages Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-electric">
              <Globe className="w-3.5 h-3.5" />
              <span>FLEXIBLE SERVICE PACKAGES</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Tailored Engagement Packages
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every business has distinct requirements. Displayed with <strong className="text-slate-200">"Request a Quote"</strong> until your custom project scope is assessed. Quotes are standard in USD with international invoicing available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PRICING_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-7 rounded-3xl bg-dark-900/85 backdrop-blur-md border flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.isPopular
                    ? 'border-neon-cyan/50 shadow-xl shadow-neon-cyan/10 bg-gradient-to-b from-dark-850 to-dark-900'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-neon-cyan text-dark-950 text-[11px] font-bold tracking-wide uppercase font-mono">
                    Recommended for Most Businesses
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white">{pkg.packageName}</h4>
                    <p className="text-xs text-slate-400 mt-1">{pkg.tagline}</p>
                  </div>

                  {/* Price Display */}
                  <div className="p-3.5 rounded-2xl bg-dark-850 border border-white/5 font-mono text-sm text-neon-cyan font-bold mb-6 flex items-center justify-between">
                    <span>{pkg.priceDisplay}</span>
                    <span className="text-[11px] text-slate-400 font-normal">USD Standard</span>
                  </div>

                  {/* Key Package Specifications */}
                  <div className="space-y-2 mb-6 pb-4 border-b border-white/5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                      <span><strong>Pages:</strong> {pkg.numberOfPages}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-neon-electric shrink-0" />
                      <span><strong>Timeline:</strong> {pkg.estimatedDeliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RotateCcw className="w-3.5 h-3.5 text-neon-violet shrink-0" />
                      <span><strong>Revisions:</strong> {pkg.revisionPolicy}</span>
                    </div>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Core Inclusions:
                    </span>
                    {pkg.includedFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Additional Services */}
                  <div className="p-3 rounded-xl bg-dark-850/60 border border-white/5 text-[11px] text-slate-400 mb-6">
                    <strong className="text-slate-300 block mb-0.5">Add-on Potential:</strong>
                    {pkg.additionalServices}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Button
                    href="#enquire"
                    variant={pkg.isPopular ? "primary" : "secondary"}
                    size="sm"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Scope disclaimer */}
          <div className="max-w-2xl mx-auto text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Final quotation is based strictly on your required functionality, page count, and timeline.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
