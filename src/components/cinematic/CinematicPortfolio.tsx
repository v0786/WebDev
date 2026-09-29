import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ContactSection } from './ContactSection';
import { LeadCaptureModal } from '../modals/LeadCaptureModal';
import { SmoothScrollProvider } from '../common/SmoothScrollProvider';

export const CinematicPortfolio: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <div
        id="top"
        className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black overflow-x-hidden"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Dynamic Pop-up Lead Capture Form */}
        <LeadCaptureModal />
      </div>
    </SmoothScrollProvider>
  );
};

export default CinematicPortfolio;
