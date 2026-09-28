import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Send, 
  Code, 
  Smartphone, 
  Database, 
  Palette, 
  ShoppingBag,
  FileText
} from 'lucide-react';
import { QuoteFeature, QuoteRequest, invoiceService } from '../../services/invoiceService';

interface ProjectTypeOption {
  id: string;
  title: string;
  icon: React.ElementType;
  basePrice: number;
  description: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'web-app',
    title: 'Full-Stack Web App',
    icon: Code,
    basePrice: 1500,
    description: 'Custom React/Next.js dynamic web application with modern backend',
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    icon: Smartphone,
    basePrice: 2200,
    description: 'Cross-platform iOS/Android mobile app built for performance',
  },
  {
    id: 'scraper-ai',
    title: 'Lead Gen & AI Scraper System',
    icon: Database,
    basePrice: 1200,
    description: 'Automated data extraction, lead scraper, and workflow automation',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design & Branding',
    icon: Palette,
    basePrice: 800,
    description: 'Cinematic user experience design, design systems, and prototypes',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platform',
    icon: ShoppingBag,
    basePrice: 1800,
    description: 'Scalable storefront, product catalog, cart, and payment checkout',
  },
];

const AVAILABLE_FEATURES: QuoteFeature[] = [
  { id: 'auth-roles', name: 'User Auth & Role Management', category: 'Security', price: 350, description: 'JWT/OAuth, Multi-tenant roles & granular RLS security' },
  { id: 'payment-gateway', name: 'Stripe & UPI Payment Integration', category: 'Payments', price: 400, description: 'Checkout, subscriptions, and instant payment webhooks' },
  { id: 'admin-dashboard', name: 'Custom Admin Control Panel', category: 'Management', price: 500, description: 'Real-time analytics, user management, and content control' },
  { id: 'pdf-invoice-engine', name: 'Invoicing & PDF Export Engine', category: 'Automation', price: 450, description: 'Automated invoice generation, email billing, and export' },
  { id: 'realtime-sync', name: 'Realtime WebSockets / Live Sync', category: 'Backend', price: 450, description: 'Live notifications, chat, and collaborative data updates' },
  { id: 'seo-analytics', name: 'Advanced SEO & Analytics Suite', category: 'Marketing', price: 300, description: 'Structured meta data, Sitemap generator, and Google Analytics 4' },
  { id: 'ai-chat-assistant', name: 'AI Chatbot & Automation Bot', category: 'AI Tools', price: 650, description: 'Custom LLM integration, knowledge retrieval, and automated replies' },
  { id: 'multi-language', name: 'Internationalization (i18n)', category: 'Localization', price: 350, description: 'Multi-language content switcher & locale formatting' },
];

interface ProjectQuoteCalculatorProps {
  onQuoteCreated?: (quote: QuoteRequest) => void;
  onOpenInvoiceStudio?: () => void;
}

export const ProjectQuoteCalculator: React.FC<ProjectQuoteCalculatorProps> = ({
  onQuoteCreated,
  onOpenInvoiceStudio,
}) => {
  const [selectedType, setSelectedType] = useState<string>('web-app');
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    'auth-roles',
    'payment-gateway',
    'admin-dashboard',
  ]);
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'flexible'>('standard');

  // Contact form
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  const currentProjectType = useMemo(() => {
    return PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];
  }, [selectedType]);

  const selectedFeatures = useMemo(() => {
    return AVAILABLE_FEATURES.filter((f) => selectedFeatureIds.includes(f.id));
  }, [selectedFeatureIds]);

  const rawTotal = useMemo(() => {
    const featuresCost = selectedFeatures.reduce((sum, f) => sum + f.price, 0);
    return currentProjectType.basePrice + featuresCost;
  }, [currentProjectType, selectedFeatures]);

  const finalEstimatedCost = useMemo(() => {
    if (timeline === 'rush') return Math.round(rawTotal * 1.3);
    if (timeline === 'flexible') return Math.round(rawTotal * 0.9);
    return rawTotal;
  }, [rawTotal, timeline]);

  const toggleFeature = (id: string) => {
    setSelectedFeatureIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim()) {
      alert('Please fill in your name and email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await invoiceService.submitQuoteRequest({
        client_name: clientName,
        client_email: clientEmail,
        client_company: clientCompany,
        project_type: currentProjectType.title,
        timeline,
        selected_features: selectedFeatures,
        estimated_cost: finalEstimatedCost,
        notes,
      });

      setSubmittedQuote(result);
      if (onQuoteCreated) {
        onQuoteCreated(result);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-[#0d0b09]/90 border border-[#d8a66b]/30 rounded-2xl shadow-2xl backdrop-blur-xl text-[#f1e9df]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#d8a66b]/20 pb-6 mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#f0c892] uppercase mb-2">
            <Calculator className="w-4 h-4 text-[#d8a66b]" />
            Instant Project Cost Estimator
          </div>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-[#f1e9df]">
            Get <span className="font-serif italic lowercase text-[#f0c892]">Quoted</span> In Seconds
          </h2>
          <p className="text-xs md:text-sm text-[#b5a89d] font-sans mt-1 max-w-xl">
            Configure your project parameters, select required modules, and get an instant transparent price quote and delivery estimate.
          </p>
        </div>

        {onOpenInvoiceStudio && (
          <button
            onClick={onOpenInvoiceStudio}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 bg-[#d8a66b]/10 hover:bg-[#d8a66b]/20 border border-[#d8a66b]/40 rounded-lg text-xs font-mono uppercase tracking-wider text-[#f0c892] transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            Open Invoice Studio Dashboard
          </button>
        )}
      </div>

      {submittedQuote ? (
        /* Submitted Success View */
        <div className="p-8 md:p-12 text-center bg-[#15120e] border border-[#d8a66b]/40 rounded-xl space-y-6 animate-fadeIn">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#d8a66b]/20 border border-[#f0c892] flex items-center justify-center text-[#f0c892]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-display text-[#f0c892] uppercase tracking-wide">
              Quotation Request Received!
            </h3>
            <p className="text-sm text-[#b5a89d] mt-2 max-w-md mx-auto">
              Your quote reference is <span className="font-mono text-[#f0c892]">{submittedQuote.id}</span>. We will review your scope and get back to you at <span className="text-[#f1e9df] font-semibold">{submittedQuote.client_email}</span>.
            </p>
          </div>

          <div className="max-w-lg mx-auto p-4 bg-[#090807] border border-[#d8a66b]/20 rounded-lg text-left text-xs font-mono space-y-2 text-[#b5a89d]">
            <div className="flex justify-between border-b border-[#d8a66b]/10 pb-2">
              <span>Project Type:</span>
              <span className="text-[#f1e9df]">{submittedQuote.project_type}</span>
            </div>
            <div className="flex justify-between border-b border-[#d8a66b]/10 pb-2">
              <span>Delivery Track:</span>
              <span className="text-[#f0c892] uppercase">{submittedQuote.timeline}</span>
            </div>
            <div className="flex justify-between border-b border-[#d8a66b]/10 pb-2">
              <span>Features Included:</span>
              <span className="text-[#f1e9df]">{submittedQuote.selected_features.length} Items</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-bold text-[#f0c892]">
              <span>Estimated Total:</span>
              <span>${submittedQuote.estimated_cost.toLocaleString()} USD</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setSubmittedQuote(null)}
              className="px-6 py-3 bg-[#d8a66b] hover:bg-[#f0c892] text-[#090807] font-mono text-xs uppercase tracking-widest font-bold rounded-lg transition-colors"
            >
              Calculate Another Quote
            </button>
            {onOpenInvoiceStudio && (
              <button
                onClick={onOpenInvoiceStudio}
                className="px-6 py-3 bg-[#090807] border border-[#d8a66b]/50 text-[#f0c892] hover:bg-[#d8a66b]/20 font-mono text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Go to Invoice Studio
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Interactive Calculator Grid */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left / Main Configuration Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d8a66b] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#d8a66b]/20 border border-[#d8a66b] flex items-center justify-center text-[10px]">1</span>
                Select Project Type
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-[#d8a66b]/15 border-[#f0c892] shadow-lg shadow-[#d8a66b]/10'
                          : 'bg-[#14110d] border-[#d8a66b]/20 hover:border-[#d8a66b]/50 hover:bg-[#1a1612]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-[#f0c892]' : 'text-[#b5a89d]'}`} />
                        <span className="text-xs font-mono text-[#f0c892] font-semibold">
                          From ${type.basePrice}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-sm text-[#f1e9df]">{type.title}</h4>
                        <p className="text-[11px] text-[#b5a89d] line-clamp-2 mt-1">{type.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Feature Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#d8a66b] uppercase tracking-wider">
                  <span className="w-5 h-5 rounded-full bg-[#d8a66b]/20 border border-[#d8a66b] flex items-center justify-center text-[10px]">2</span>
                  Select Add-On Modules & Features
                </div>
                <span className="text-[11px] font-mono text-[#b5a89d]">
                  {selectedFeatureIds.length} Selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_FEATURES.map((feat) => {
                  const isChecked = selectedFeatureIds.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-[#d8a66b]/10 border-[#d8a66b]'
                          : 'bg-[#120f0c] border-[#d8a66b]/15 hover:border-[#d8a66b]/30'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}} // handled by parent onClick
                          className="mt-1 accent-[#d8a66b] cursor-pointer"
                        />
                        <div>
                          <div className="text-xs font-sans font-medium text-[#f1e9df]">{feat.name}</div>
                          <div className="text-[10px] text-[#b5a89d] mt-0.5">{feat.description}</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#f0c892] whitespace-nowrap">+${feat.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Urgency */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#d8a66b] uppercase tracking-wider mb-3">
                <span className="w-5 h-5 rounded-full bg-[#d8a66b]/20 border border-[#d8a66b] flex items-center justify-center text-[10px]">3</span>
                Select Delivery Timeline
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTimeline('flexible')}
                  className={`p-3 rounded-lg border text-center font-mono text-xs transition-all ${
                    timeline === 'flexible'
                      ? 'bg-[#d8a66b]/20 border-[#f0c892] text-[#f0c892]'
                      : 'bg-[#120f0c] border-[#d8a66b]/20 text-[#b5a89d] hover:border-[#d8a66b]/40'
                  }`}
                >
                  <div className="font-bold">Flexible</div>
                  <div className="text-[10px] opacity-75 mt-0.5">Save 10% (3-4 wks)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('standard')}
                  className={`p-3 rounded-lg border text-center font-mono text-xs transition-all ${
                    timeline === 'standard'
                      ? 'bg-[#d8a66b]/20 border-[#f0c892] text-[#f0c892]'
                      : 'bg-[#120f0c] border-[#d8a66b]/20 text-[#b5a89d] hover:border-[#d8a66b]/40'
                  }`}
                >
                  <div className="font-bold">Standard</div>
                  <div className="text-[10px] opacity-75 mt-0.5">Regular (1-2 wks)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTimeline('rush')}
                  className={`p-3 rounded-lg border text-center font-mono text-xs transition-all ${
                    timeline === 'rush'
                      ? 'bg-[#d8a66b]/20 border-[#f0c892] text-[#f0c892]'
                      : 'bg-[#120f0c] border-[#d8a66b]/20 text-[#b5a89d] hover:border-[#d8a66b]/40'
                  }`}
                >
                  <div className="font-bold">Fast-Track</div>
                  <div className="text-[10px] opacity-75 mt-0.5">Priority (+30%)</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Summary & Direct Submit Form */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#120f0c] p-6 rounded-xl border border-[#d8a66b]/30 relative">
            <div>
              <div className="flex items-center justify-between border-b border-[#d8a66b]/20 pb-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d8a66b]">Quote Summary</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#d8a66b]/20 text-[#f0c892] rounded">
                  ESTIMATE ONLY
                </span>
              </div>

              {/* Items Summary Breakdown */}
              <div className="space-y-3 text-xs font-mono mb-6">
                <div className="flex justify-between text-[#f1e9df]">
                  <span>Base Scope ({currentProjectType.title}):</span>
                  <span>${currentProjectType.basePrice}</span>
                </div>

                {selectedFeatures.length > 0 && (
                  <div className="space-y-1.5 pl-2 border-l border-[#d8a66b]/20 text-[#b5a89d]">
                    {selectedFeatures.map((f) => (
                      <div key={f.id} className="flex justify-between">
                        <span className="truncate max-w-[180px]">+ {f.name}</span>
                        <span>${f.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {timeline !== 'standard' && (
                  <div className="flex justify-between text-[#f0c892]">
                    <span>Timeline Adjustment ({timeline.toUpperCase()}):</span>
                    <span>
                      {timeline === 'rush' ? '+30%' : '-10%'}
                    </span>
                  </div>
                )}

                <div className="pt-4 border-t border-[#d8a66b]/30 flex justify-between items-baseline">
                  <span className="text-sm font-sans font-bold text-[#f1e9df]">Estimated Investment</span>
                  <span className="text-3xl font-display text-[#f0c892] font-bold">
                    ${finalEstimatedCost.toLocaleString()} <span className="text-xs text-[#b5a89d] font-mono">USD</span>
                  </span>
                </div>
              </div>

              {/* Client Info Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-3.5 pt-2 border-t border-[#d8a66b]/20">
                <div className="text-xs font-mono text-[#d8a66b] uppercase tracking-wider">
                  Request Official Proposal / Invoice
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] focus:border-[#f0c892] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] focus:border-[#f0c892] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Company / Organization (Optional)</label>
                  <input
                    type="text"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] focus:border-[#f0c892] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#b5a89d] mb-1">Project Notes / Requirements</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe key objectives or deadline details..."
                    className="w-full px-3 py-2 bg-[#090807] border border-[#d8a66b]/30 rounded text-xs text-[#f1e9df] focus:border-[#f0c892] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-[#d8a66b] to-[#f0c892] text-[#090807] font-mono text-xs uppercase font-bold tracking-widest rounded-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#d8a66b]/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Processing Quote...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Get Official Quotation
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
