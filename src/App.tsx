import React, { useState, useEffect, Suspense, lazy } from 'react';
import { CinematicPortfolio } from './components/cinematic/CinematicPortfolio';

// Code-split all 9 dedicated concept project demos for instant initial bundle loading
const FormaDemo = lazy(() =>
  import('./demos/forma/FormaDemo').then((m) => ({ default: m.FormaDemo }))
);
const MaisonDemo = lazy(() =>
  import('./demos/maison/MaisonDemo').then((m) => ({ default: m.MaisonDemo }))
);
const OrbitDemo = lazy(() =>
  import('./demos/orbit/OrbitDemo').then((m) => ({ default: m.OrbitDemo }))
);
const AtelierDemo = lazy(() =>
  import('./demos/atelier27/AtelierDemo').then((m) => ({ default: m.AtelierDemo }))
);
const ArcDemo = lazy(() =>
  import('./demos/arc/ArcDemo').then((m) => ({ default: m.ArcDemo }))
);
const VantaDemo = lazy(() =>
  import('./demos/vanta/VantaDemo').then((m) => ({ default: m.VantaDemo }))
);
const NoirDemo = lazy(() =>
  import('./demos/noir/NoirDemo').then((m) => ({ default: m.NoirDemo }))
);
const KanvaaDemo = lazy(() =>
  import('./demos/kanvaa/KanvaaDemo').then((m) => ({ default: m.KanvaaDemo }))
);
const FarmFreshDemo = lazy(() =>
  import('./demos/farm-fresh/FarmFreshDemo').then((m) => ({ default: m.FarmFreshDemo }))
);
const SalesDemo = lazy(() =>
  import('./demos/sales/SalesDemo').then((m) => ({ default: m.SalesDemo }))
);
const InvoicePage = lazy(() =>
  import('./components/invoice/InvoicePage').then((m) => ({ default: m.InvoicePage }))
);

const DemoLoadingFallback: React.FC = () => (
  <div className="min-h-screen bg-[#07080B] flex flex-col items-center justify-center text-bone-300 font-mono text-xs space-y-4">
    <div className="w-8 h-8 rounded-full border-2 border-[#B8FF00] border-t-transparent animate-spin" />
    <div className="tracking-widest uppercase text-[#B8FF00] font-bold">COMPILING PROTOTYPE EXPERIENCE...</div>
    <div className="text-[10px] text-bone-300/50">SONKUSARE VAIBHAV // CONCEPT DEMO</div>
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
      
      // Handle section smooth scroll for /work, /about, /skills, /experience, /contact
      const sectionRoutes: Record<string, string> = {
        '#/work': 'work',
        '#/about': 'about',
        '#/skills': 'skills',
        '#/experience': 'experience',
        '#/contact': 'contact',
        '#work': 'work',
        '#about': 'about',
        '#skills': 'skills',
        '#experience': 'experience',
        '#contact': 'contact',
        '#top': 'top',
        '#/top': 'top',
      };

      if (sectionRoutes[hash]) {
        const elem = document.getElementById(sectionRoutes[hash]);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      if (
        hash.includes('sales') ||
        hash.includes('login') ||
        hash.includes('dashboard') ||
        hash.startsWith('#/demo/') ||
        hash.startsWith('#/work/') ||
        hash.startsWith('#/restaurant') ||
        hash.startsWith('#/saas') ||
        hash.startsWith('#/agency') ||
        hash === '' ||
        hash === '#'
      ) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '';

  const isInvoice =
    pathname === '/invoice' ||
    pathname.startsWith('/invoice/') ||
    pathname === '/quote' ||
    currentHash.includes('invoice') ||
    currentHash.includes('quote') ||
    currentHash.includes('billing') ||
    currentHash === '#/invoice' ||
    currentHash === '#/quote';

  if (isInvoice) {
    const isStudio = currentHash.includes('studio') || pathname.includes('studio') || currentHash.includes('invoice');
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <InvoicePage
          onBackToHome={() => {
            window.location.hash = '';
            window.history.pushState(null, '', '/');
          }}
          defaultView={isStudio ? 'studio' : 'calculator'}
        />
      </Suspense>
    );
  }

  const isSales =
    pathname === '/sales' ||
    pathname.startsWith('/sales') ||
    pathname === '/login' ||
    currentHash.includes('sales') ||
    currentHash.includes('login') ||
    currentHash.includes('dashboard') ||
    currentHash === '#/sales' ||
    currentHash === '#sales' ||
    currentHash === '#/login' ||
    currentHash === '#login';

  const isForma = pathname.includes('/forma') || currentHash.startsWith('#/demo/forma') || currentHash.startsWith('#/work/forma') || currentHash === '#/forma';
  const isMaison = pathname.includes('/maison') || pathname.includes('/restaurant') || currentHash.startsWith('#/demo/maison') || currentHash.startsWith('#/work/maison') || currentHash === '#/maison' || currentHash.startsWith('#/restaurant') || currentHash === '#restaurant';
  const isOrbit = pathname.includes('/orbit') || pathname.includes('/saas') || currentHash.startsWith('#/demo/orbit') || currentHash.startsWith('#/work/orbit') || currentHash === '#/orbit' || currentHash.startsWith('#/saas') || currentHash === '#saas';
  const isAtelier = pathname.includes('/atelier') || currentHash.startsWith('#/demo/atelier27') || currentHash.startsWith('#/work/atelier-27') || currentHash.startsWith('#/work/atelier27') || currentHash === '#/atelier27';
  const isArc = pathname.includes('/arc') || currentHash.startsWith('#/demo/arc') || currentHash.startsWith('#/work/arc') || currentHash === '#/arc';
  const isVanta = pathname.includes('/vanta') || currentHash.startsWith('#/demo/vanta') || currentHash.startsWith('#/work/vanta') || currentHash === '#/vanta';
  const isNoir = pathname.includes('/noir') || pathname.includes('/agency') || currentHash.startsWith('#/demo/noir') || currentHash.startsWith('#/work/noir') || currentHash === '#/noir' || currentHash.startsWith('#/agency') || currentHash === '#agency';
  const isKanvaa = pathname.includes('/kanvaa') || currentHash.startsWith('#/demo/kanvaa') || currentHash.startsWith('#/work/kanvaa') || currentHash === '#/kanvaa';
  const isFarmFresh = pathname.includes('/farm-fresh') || currentHash.startsWith('#/demo/farm-fresh') || currentHash.startsWith('#/work/farm-fresh') || currentHash === '#/farm-fresh';

  if (isSales) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <SalesDemo />
      </Suspense>
    );
  }

  if (isForma) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <FormaDemo />
      </Suspense>
    );
  }

  if (isMaison) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <MaisonDemo />
      </Suspense>
    );
  }

  if (isOrbit) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <OrbitDemo />
      </Suspense>
    );
  }

  if (isAtelier) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <AtelierDemo />
      </Suspense>
    );
  }

  if (isArc) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <ArcDemo />
      </Suspense>
    );
  }

  if (isVanta) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <VantaDemo />
      </Suspense>
    );
  }

  if (isNoir) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <NoirDemo />
      </Suspense>
    );
  }

  if (isKanvaa) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <KanvaaDemo />
      </Suspense>
    );
  }

  if (isFarmFresh) {
    return (
      <Suspense fallback={<DemoLoadingFallback />}>
        <FarmFreshDemo />
      </Suspense>
    );
  }

  return <CinematicPortfolio />;
};

export default App;
