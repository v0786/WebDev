import React, { useState, useEffect, Suspense, lazy } from 'react';
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

// Code-split concept demos for fast initial page load
const RestaurantDemo = lazy(() =>
  import('./demos/restaurant/RestaurantDemo').then((m) => ({ default: m.RestaurantDemo }))
);
const SaaSDemo = lazy(() =>
  import('./demos/saas/SaaSDemo').then((m) => ({ default: m.SaaSDemo }))
);
const AgencyDemo = lazy(() =>
  import('./demos/agency/AgencyDemo').then((m) => ({ default: m.AgencyDemo }))
);

const DemoLoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-[#06080F] flex flex-col items-center justify-center text-slate-300 font-mono text-xs space-y-4">
    <div className="w-8 h-8 rounded-full border-2 border-neon-cyan border-t-transparent animate-spin" />
    <div>Loading Concept Experience...</div>
  </div>
);

export const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      // Scroll to top when switching between demos or returning to root
      if (
        hash.startsWith('#/restaurant') ||
        hash.startsWith('#/saas') ||
        hash.startsWith('#/agency') ||
        hash === ''
      ) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Check which demo view to display
  const isRestaurantDemo = currentHash.startsWith('#/restaurant') || currentHash === '#restaurant';
  const isSaaSDemo = currentHash.startsWith('#/saas') || currentHash === '#saas';
  const isAgencyDemo = currentHash.startsWith('#/agency') || currentHash === '#agency';

  if (isRestaurantDemo) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <RestaurantDemo />
      </Suspense>
    );
  }

  if (isSaaSDemo) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <SaaSDemo />
      </Suspense>
    );
  }

  if (isAgencyDemo) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <AgencyDemo />
      </Suspense>
    );
  }

  // Default: Main Portfolio View
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
