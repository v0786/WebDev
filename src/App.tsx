import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { WhyWorkWithMe } from './components/sections/WhyWorkWithMe';
import { Process } from './components/sections/Process';
import { AboutMe } from './components/sections/AboutMe';
import { EnquiryForm } from './components/sections/EnquiryForm';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-neon-cyan/20 selection:text-neon-cyan flex flex-col justify-between">
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <WhyWorkWithMe />
        <Process />
        <AboutMe />
        <EnquiryForm />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
