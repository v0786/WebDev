import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PortfolioProject } from '../../config/portfolio';
import { soundFx } from '../audio/SoundEffects';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectProject?: (project: PortfolioProject) => void;
  allProjects?: PortfolioProject[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects = []
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = currentIndex !== -1 && allProjects.length > 0
    ? allProjects[(currentIndex + 1) % allProjects.length]
    : null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto bg-[#07080B]/90 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-[#0D0F14] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl my-8 max-h-[90vh] overflow-y-auto text-bone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Min 44x44px touch target) */}
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-bone-300 hover:text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Concept Notice Disclaimer (Section 31) */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#B8FF00]/10 border border-[#B8FF00]/20 text-[#B8FF00] text-xs font-mono flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#B8FF00] shrink-0 mt-0.5" />
          <span>{project.caseStudy.clientNotice}</span>
        </div>

        {/* Header Badges & Project Title */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#B8FF00]">
            <span>PROJECT {project.index}</span>
            <span>&bull;</span>
            <span>{project.category}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
            {project.isConcept && (
              <>
                <span>&bull;</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-bone-200">CONCEPT PROJECT</span>
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-bone-100">
            {project.brandName}
          </h2>

          <div className="text-sm sm:text-base font-sans text-bone-300/80 font-light max-w-2xl">
            {project.headline}
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className={`w-full h-64 sm:h-80 md:h-96 rounded-2xl bg-gradient-to-br ${project.previewCardStyle} p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 mb-10 shadow-2xl`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,242,236,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
          
          <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-bone-300/70">
            <span>{project.category}</span>
            <span className="px-3 py-1 rounded-full bg-black/60 text-[#B8FF00] font-semibold border border-white/10">
              {project.year}
            </span>
          </div>

          <div className="relative z-10 text-center my-auto">
            <h3 className="text-4xl sm:text-6xl font-serif italic text-bone-100 drop-shadow-lg">
              {project.brandName}
            </h3>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-bone-300/60 border-t border-white/10 pt-3">
            <span>CREATIVE DEVELOPER &bull; SONKUSARE VAIBHAV</span>
            <span>MUMBAI, INDIA</span>
          </div>
        </div>

        {/* Editorial Case Study Content Sections */}
        <div className="space-y-10 text-sm sm:text-base font-sans leading-relaxed text-bone-300/90 font-light">
          
          {/* About */}
          <div className="space-y-2 border-t border-white/10 pt-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
              01 // ABOUT THE PROJECT
            </div>
            <p>{project.caseStudy.about}</p>
          </div>

          {/* The Challenge */}
          <div className="space-y-2 border-t border-white/10 pt-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
              02 // THE CHALLENGE
            </div>
            <p>{project.caseStudy.challenge}</p>
          </div>

          {/* Strategy */}
          <div className="space-y-2 border-t border-white/10 pt-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
              03 // STRATEGY &amp; STRUCTURE
            </div>
            <p>{project.caseStudy.strategy}</p>
          </div>

          {/* Design & Interaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
                04 // DESIGN DIRECTION
              </div>
              <p className="text-xs sm:text-sm">{project.caseStudy.design}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
                05 // INTERACTION &amp; MOTION
              </div>
              <p className="text-xs sm:text-sm">{project.caseStudy.interaction}</p>
            </div>
          </div>

          {/* Technology & Objective */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#B8FF00] font-bold">
              06 // RELEVANT TECHNOLOGY &amp; OBJECTIVES
            </div>
            <p>{project.caseStudy.objective}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.caseStudy.technology.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full text-xs font-mono text-bone-200 bg-white/[0.05] border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Action Buttons & Next Project Switcher */}
        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.demoRoute}
              onClick={() => soundFx.playClick()}
              className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#B8FF00] text-[#07080B] font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-colors flex items-center gap-2"
            >
              <span>LAUNCH CONCEPT PROTOTYPE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/v0786/WebDev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="min-h-[44px] px-5 py-2.5 rounded-full border border-white/15 text-bone-200 hover:text-white hover:border-[#B8FF00] font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>GITHUB REPOSITORY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B8FF00]" />
            </a>
          </div>

          {nextProject && onSelectProject && (
            <button
              onClick={() => {
                soundFx.playClick();
                onSelectProject(nextProject);
              }}
              className="min-h-[44px] text-xs font-mono text-bone-300 hover:text-[#B8FF00] transition-colors flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>NEXT PROJECT: {nextProject.brandName}</span>
              <ArrowRight className="w-4 h-4 text-[#B8FF00]" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
