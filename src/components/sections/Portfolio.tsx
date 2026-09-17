import React, { useState } from 'react';
import { Layers, Eye, ArrowUpRight, AlertCircle, Sparkles, Check } from 'lucide-react';
import { DEMO_PROJECTS, PortfolioProject } from '../../config/portfolio';
import { CaseStudyModal } from './CaseStudyModal';
import { Button } from '../ui/Button';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <section id="work" className="py-24 relative bg-dark-900/50 border-t border-white/5">
      
      {/* Radial soft background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-850 border border-white/10 text-xs font-mono text-neon-electric">
            <Layers className="w-3.5 h-3.5" />
            <span>DEMONSTRATION PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated Showcase Projects
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am actively building my professional portfolio. Below are three fully realized concept projects engineered to demonstrate my design quality, frontend capabilities, and strategic approach.
          </p>

          {/* Transparent Authenticity Disclaimer */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-dark-850/90 border border-white/10 text-xs text-slate-300 max-w-xl mx-auto text-left sm:text-center">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>All projects are fictional concept brands built for visual and architectural demonstration. Client case studies will be published upon completion.</span>
          </div>
        </div>

        {/* 3 Showcase Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEMO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-dark-900/85 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-2xl hover:shadow-neon-cyan/10 hover:-translate-y-1.5 group"
            >
              <div>
                {/* Visual Header / Mockup Gradient Banner */}
                <div className={`h-52 rounded-t-3xl bg-gradient-to-br ${project.previewCardStyle} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-pattern opacity-25 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Top Tags */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-dark-950/80 text-neon-cyan border border-white/10 backdrop-blur-md">
                      {project.projectCode}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Concept Demo
                    </span>
                  </div>

                  {/* Brand & Category Label */}
                  <div className="relative z-10 space-y-1">
                    <span className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{project.brandName}</span>
                      <Sparkles className="w-4 h-4 text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs font-mono text-neon-electric mt-0.5">
                      {project.headline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Included Architecture:
                    </span>
                    {project.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-neon-cyan/40 text-xs font-semibold text-slate-200 hover:text-neon-cyan flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Case Study & Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Project CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Have a unique business or product to launch?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              I can help you build a clean, conversion-engineered website using a pragmatic mix of no-code speed and custom-coded polish.
            </p>
          </div>
          <Button
            href="#enquire"
            variant="primary"
            size="md"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Start a Project Enquiry
          </Button>
        </div>

      </div>

      {/* Case Study Preview Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
