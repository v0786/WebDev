import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceSection } from './ExperienceSection';
import { ContactSection } from './ContactSection';
import { LeadCaptureModal } from '../modals/LeadCaptureModal';

export const CinematicPortfolio: React.FC = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <div
      id="top"
      className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black overflow-x-hidden"
    >
      <HeroSection onVideoEnd={() => setVideoEnded(true)} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Dynamic Pop-up Lead Capture Form */}
      <LeadCaptureModal videoEnded={videoEnded} />
    </div>
  );
};

export default CinematicPortfolio;
