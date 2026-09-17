import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowUpRight, Wrench, Target, Compass } from 'lucide-react';
import { PortfolioProject } from '../../config/portfolio';
import { Button } from '../ui/Button';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close case study preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mandatory Concept Notice */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-300 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
          <div>
            <strong className="font-semibold block">{project.statusBadge}</strong>
            <span>{project.caseStudy.clientNotice}</span>
          </div>
        </div>

        {/* Header Badges & Titles */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/25">
              {project.projectCode} • {project.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.brandName}
          </h3>
          <p className="text-sm sm:text-base text-slate-300">
            {project.headline}
          </p>
        </div>

        {/* Visual Mockup Canvas */}
        <div className={`h-48 sm:h-56 rounded-2xl bg-gradient-to-r ${project.previewCardStyle} border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden mb-8`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          <div className="relative z-10 space-y-1">
            <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">Interactive Architectural Concept</span>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{project.title} Demonstration System</span>
            </h4>
          </div>
        </div>

        {/* Design Goals & Overview */}
        <div className="space-y-6 mb-8">
          <div className="p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Design Goals</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.caseStudy.designGoals}
            </p>
          </div>

          {/* Design Decisions */}
          <div className="p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-neon-electric uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Key Design & UX Decisions</span>
            </div>
            <div className="space-y-2">
              {project.caseStudy.designDecisions.map((decision, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Methods */}
          <div className="p-5 rounded-2xl bg-dark-850/90 border border-white/5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-neon-violet uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>Tools & Methodology</span>
            </div>
            <div className="space-y-2">
              {project.caseStudy.toolsAndMethods.map((tool, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-violet shrink-0 mt-2" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Demonstration Summary */}
        <div className="p-4 rounded-2xl bg-dark-800/60 border border-white/5 text-xs text-slate-400 mb-8 font-mono">
          <strong className="text-slate-300 block mb-1">Architecture Demonstration:</strong>
          {project.caseStudy.demonstrationOverview}
        </div>

        {/* Modal Bottom Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Ready to build a website tailored to your specific business?
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              href="#enquire"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Start a Project
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
