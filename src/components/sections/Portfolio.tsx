import React, { useState, Suspense, lazy } from 'react';
import { ArrowUpRight, Eye, Github } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../../config/portfolio';
import { soundFx } from '../audio/SoundEffects';

const CaseStudyModal = lazy(() =>
  import('./CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);

export const Portfolio: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const handleOpenCaseStudy = (proj: PortfolioProject) => {
    soundFx.playModalReveal();
    setActiveModalProject(proj);
  };

  return (
    <section id="work" className="py-24 sm:py-36 relative border-b border-white/[0.08] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 sm:mb-24">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FF00]" />
              <span>[ 05 / SELECTED WORK ]</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans text-bone-100 font-black tracking-tight uppercase">
              SELECTED <br />
              <span className="font-serif italic font-normal text-[#B8FF00] lowercase">
                work
              </span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-bone-300/85 font-light leading-relaxed">
            A collection of digital experiences created across different industries, audiences and visual directions.
          </div>
        </div>

        {/* 9 Projects with Varied Layout Compositions */}
        <div className="space-y-24 sm:space-y-36">
          {PORTFOLIO_PROJECTS.map((project) => {
            const isFullWidth = project.layoutVariant === 'full-width' || project.layoutVariant === 'long-form-scroll';
            const isImageLeft = project.layoutVariant === 'split-layout' || project.layoutVariant === 'dark-cinematic';
            const isOverlapping = project.layoutVariant === 'overlapping' || project.layoutVariant === 'typography-driven';

            return (
              <article key={project.id} className="relative group">
                
                {isFullWidth ? (
                  /* Full-Width Panoramic Visual Layout */
                  <div className="space-y-6">
                    <div 
                      onClick={() => handleOpenCaseStudy(project)}
                      className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#B8FF00]/50 transition-all duration-700 cursor-pointer shadow-2xl p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br"
                      style={{ backgroundImage: `linear-gradient(135deg, ${project.previewCardStyle})` }}
                      data-cursor="view"
                      data-cursor-text="INSPECT"
                    >
                      <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-bone-300/80">
                        <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                          PROJECT {project.index} &bull; {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.isConcept && (
                            <span className="px-2.5 py-0.5 rounded bg-white/10 text-[10px] text-bone-200">
                              CONCEPT PROJECT
                            </span>
                          )}
                          <span className="text-[#B8FF00] font-semibold">{project.year}</span>
                        </div>
                      </div>

                      <div className="relative z-10 my-auto text-center py-6">
                        <h3 className="text-4xl sm:text-6xl md:text-7xl font-serif italic text-bone-100 tracking-tight group-hover:text-[#B8FF00] transition-colors drop-shadow-md">
                          {project.brandName}
                        </h3>
                        <div className="mt-3 text-xs sm:text-sm font-sans text-bone-300/80 max-w-lg mx-auto font-light">
                          {project.headline}
                        </div>

                        {/* Special UX supply chain badge for Farm/Fresh */}
                        {project.id === 'farm-fresh-foodnia' && (
                          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-emerald-400/90 bg-black/50 px-4 py-2 rounded-full border border-emerald-500/20">
                            <span>Agriculture</span> &rarr; 
                            <span>Research</span> &rarr; 
                            <span>Formulation</span> &rarr; 
                            <span>Production</span> &rarr; 
                            <span>Distribution</span> &rarr; 
                            <span>Consumer</span>
                          </div>
                        )}
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-bone-300/85 border-t border-white/10 pt-4">
                        <span>FULL-BLEED ARCHITECTURE</span>
                        <span className="flex items-center gap-1.5 text-bone-100 group-hover:text-[#B8FF00]">
                          CLICK TO INSPECT CASE STUDY &rarr;
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <p className="text-xs sm:text-sm font-sans text-bone-300 max-w-xl font-light">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 shrink-0">
                        <button
                          onClick={() => handleOpenCaseStudy(project)}
                          aria-label={`View ${project.brandName} case study details`}
                          className="min-h-[44px] px-5 py-2.5 rounded-full border border-white/15 text-bone-200 hover:text-white hover:border-[#B8FF00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#B8FF00]" aria-hidden="true" />
                          <span>CASE STUDY</span>
                        </button>
                        <a
                          href={project.demoRoute}
                          aria-label={`Launch ${project.brandName} interactive prototype demo`}
                          className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#B8FF00] text-gray-900 font-bold hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] active:bg-[#A6E600] active:text-gray-900 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
                        >
                          <span>LAUNCH DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                        <a
                          href="https://github.com/v0786/WebDev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] px-4 py-2.5 rounded-full border border-white/15 text-bone-300 hover:text-white hover:border-[#B8FF00] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
                          title="View project source code on GitHub"
                        >
                          <Github className="w-3.5 h-3.5 text-[#B8FF00]" />
                          <span className="hidden sm:inline">REPO</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Asymmetric / Split / Overlapping Layout */
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isOverlapping ? 'relative' : ''}`}>
                    
                    {/* Visual Box */}
                    <div className={`lg:col-span-7 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div
                        onClick={() => handleOpenCaseStudy(project)}
                        className={`w-full h-[340px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#B8FF00]/50 transition-all duration-700 cursor-pointer shadow-2xl p-8 flex flex-col justify-between bg-gradient-to-br ${project.previewCardStyle}`}
                        data-cursor="view"
                        data-cursor-text="INSPECT"
                      >
                        <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-bone-300/80">
                          <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                            {project.category}
                          </span>
                          <div className="flex items-center gap-2">
                            {project.isConcept && (
                              <span className="px-2.5 py-0.5 rounded bg-white/10 text-[10px] text-bone-200">
                                CONCEPT PROJECT
                              </span>
                            )}
                            <span className="text-[#B8FF00] font-semibold">{project.year}</span>
                          </div>
                        </div>

                        <div className="relative z-10 my-auto text-center py-4">
                          <h3 className="text-3xl sm:text-5xl font-serif italic text-bone-100 tracking-tight group-hover:text-[#B8FF00] transition-colors">
                            {project.brandName}
                          </h3>
                          <div className="mt-2 text-xs font-mono text-bone-300/85 uppercase tracking-widest max-w-sm mx-auto">
                            {project.headline}
                          </div>
                        </div>

                        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-bone-300/85 border-t border-white/10 pt-3">
                          <span>EDITION // {project.year}</span>
                          <span className="text-bone-100 group-hover:text-[#B8FF00] flex items-center gap-1">
                            VIEW CASE STUDY &rarr;
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metadata Box */}
                    <div className={`lg:col-span-5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} space-y-5 text-left`}>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-serif italic text-[#B8FF00] font-bold">
                          {project.index}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-bone-300">
                          // {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-sans font-bold text-bone-100 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-sans text-bone-300 font-light leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 border-y border-white/[0.08] py-4">
                        {project.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2.5 text-xs font-mono text-bone-300">
                            <span className="w-1 h-1 rounded-full bg-[#B8FF00] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => handleOpenCaseStudy(project)}
                          aria-label={`View ${project.brandName} case study details`}
                          className="min-h-[44px] px-5 py-2.5 rounded-full border border-white/15 hover:border-[#B8FF00] text-bone-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#B8FF00]" aria-hidden="true" />
                          <span>CASE STUDY</span>
                        </button>

                        <a
                          href={project.demoRoute}
                          aria-label={`Launch ${project.brandName} interactive prototype demo`}
                          className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#B8FF00] text-gray-900 font-bold hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8FF00] active:bg-[#A6E600] active:text-gray-900 text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
                        >
                          <span>LAUNCH DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>

                        <a
                          href="https://github.com/v0786/WebDev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] px-4 py-2.5 rounded-full border border-white/15 text-bone-300 hover:text-white hover:border-[#B8FF00] text-xs font-mono uppercase tracking-wider transition-colors flex items-center gap-1.5"
                          title="View project source code on GitHub"
                        >
                          <Github className="w-3.5 h-3.5 text-[#B8FF00]" />
                          <span className="hidden sm:inline">REPO</span>
                        </a>
                      </div>
                    </div>

                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Fullscreen Inspection Modal */}
      {activeModalProject && (
        <Suspense fallback={null}>
          <CaseStudyModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
            onSelectProject={(p) => setActiveModalProject(p)}
            allProjects={PORTFOLIO_PROJECTS}
          />
        </Suspense>
      )}
    </section>
  );
};
