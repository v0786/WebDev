import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl my-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close privacy policy"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-neon-cyan">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            <p className="text-xs text-slate-400 font-mono">{PERSONAL_INFO.brandName}</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-1.5">
            <h4 className="font-semibold text-white">1. Direct Communication & Data Collection</h4>
            <p>
              This website operates strictly as a direct portfolio and client acquisition platform. We do not run automated marketing tracking pixels or sell user data. Any information provided through the enquiry brief (name, email, project details) is used solely to reply directly to your inquiry and evaluate project requirements.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-semibold text-white">2. No Third-Party Database Storage</h4>
            <p>
              The project enquiry form operates via direct email dispatch (<code className="text-neon-cyan">{PERSONAL_INFO.email}</code>) and direct WhatsApp messaging. Your data is not silently retained on unsecured external databases.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-semibold text-white">3. Third-Party Links</h4>
            <p>
              This website includes links to verified personal profiles (such as Instagram at <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">@{PERSONAL_INFO.instagramHandle}</a>). We are not responsible for the privacy practices of external platforms.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-semibold text-white">4. Contact & Inquiries</h4>
            <p>
              For any questions regarding privacy or to request the deletion of any email correspondence, please contact <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neon-cyan hover:underline">{PERSONAL_INFO.email}</a>.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-xs font-semibold text-white border border-white/10 transition-colors"
          >
            Close Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};
