import React, { useState, useEffect } from 'react';
import { ProjectQuoteCalculator } from './ProjectQuoteCalculator';
import { InvoiceStudio } from './InvoiceStudio';
import { Calculator, FileText, ArrowLeft } from 'lucide-react';

interface InvoicePageProps {
  onBackToHome?: () => void;
  defaultView?: 'calculator' | 'studio';
}

export const InvoicePage: React.FC<InvoicePageProps> = ({
  onBackToHome,
  defaultView = 'calculator',
}) => {
  const [currentView, setCurrentView] = useState<'calculator' | 'studio'>(defaultView);

  useEffect(() => {
    // Scroll to top on load/view switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#090807] text-[#f1e9df] pt-20 pb-16 px-4 md:px-8 relative isolation-isolate">
      {/* Background ambient lighting matching site theme */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#d8a66b]/10 blur-[120px]" />
      </div>

      {/* Top Header Controls */}
      <div className="max-w-6xl mx-auto mb-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#d8a66b]/20 pb-4">
        <div className="flex items-center gap-3">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="px-3 py-1.5 bg-[#14110d] border border-[#d8a66b]/30 hover:border-[#f0c892] rounded-lg text-xs font-mono uppercase tracking-wider text-[#f0c892] flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Main Site
            </button>
          )}
          <span className="text-xs font-mono text-[#b5a89d] uppercase">
            Project Billing & Quotation Suite
          </span>
        </div>

        {/* View Selector Toggle */}
        <div className="inline-flex p-1 bg-[#14110d] border border-[#d8a66b]/30 rounded-xl">
          <button
            onClick={() => setCurrentView('calculator')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all ${
              currentView === 'calculator'
                ? 'bg-[#d8a66b] text-[#090807] font-bold shadow-md shadow-[#d8a66b]/20'
                : 'text-[#b5a89d] hover:text-[#f1e9df]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Option A: Get Quoted
          </button>
          <button
            onClick={() => setCurrentView('studio')}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all ${
              currentView === 'studio'
                ? 'bg-[#d8a66b] text-[#090807] font-bold shadow-md shadow-[#d8a66b]/20'
                : 'text-[#b5a89d] hover:text-[#f1e9df]'
            }`}
          >
            <FileText className="w-4 h-4" />
            Option B: Invoice Studio
          </button>
        </div>
      </div>

      {/* Render Selected View */}
      <div className="relative z-10">
        {currentView === 'calculator' ? (
          <ProjectQuoteCalculator
            onOpenInvoiceStudio={() => setCurrentView('studio')}
          />
        ) : (
          <InvoiceStudio
            onBackToCalculator={() => setCurrentView('calculator')}
          />
        )}
      </div>
    </div>
  );
};
