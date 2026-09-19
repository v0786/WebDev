import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../config/personal';
import { PrivacyModal } from '../sections/PrivacyModal';
import { soundFx } from '../audio/SoundEffects';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] pt-16 pb-12 text-bone-300 select-none bg-[#07080B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono">
          
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="text-lg font-sans font-black tracking-widest text-bone-100 uppercase">
              {PERSONAL_INFO.brandName}
            </div>
            <div className="text-bone-300 space-y-1">
              <div>CREATIVE DEVELOPER</div>
              <div>WEB DESIGNER</div>
              <div className="text-[#B8FF00] font-bold">{PERSONAL_INFO.location.toUpperCase()}</div>
              <div className="text-[11px] text-bone-300/80">&copy; 2026</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <div className="text-bone-100 uppercase tracking-widest font-bold">DIRECTORY</div>
            <ul className="space-y-2 text-bone-300">
              <li><a href="#work" className="hover:text-[#B8FF00] transition-colors">WORK</a></li>
              <li><a href="#services" className="hover:text-[#B8FF00] transition-colors">SERVICES</a></li>
              <li><a href="#process" className="hover:text-[#B8FF00] transition-colors">PROCESS</a></li>
              <li><a href="#about" className="hover:text-[#B8FF00] transition-colors">ABOUT</a></li>
              <li><a href="#contact" className="hover:text-[#B8FF00] transition-colors">CONTACT</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="space-y-2">
            <div className="text-bone-100 uppercase tracking-widest font-bold">COMMISSION</div>
            <ul className="space-y-2 text-bone-300">
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#B8FF00] transition-colors break-all">
                  EMAIL: {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a href={PERSONAL_INFO.whatsAppUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                  WHATSAPP: {PERSONAL_INFO.whatsAppNumber}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-bone-100 transition-colors text-left"
                >
                  Privacy Policy &amp; Ethics
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Socials */}
          <div className="space-y-2">
            <div className="text-bone-100 uppercase tracking-widest font-bold">CONNECT</div>
            <ul className="space-y-2 text-bone-300">
              {PERSONAL_INFO.email && (
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#B8FF00] transition-colors flex items-center gap-1">
                    <span>EMAIL</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B8FF00]" />
                  </a>
                </li>
              )}
              {PERSONAL_INFO.whatsAppUrl && (
                <li>
                  <a href={PERSONAL_INFO.whatsAppUrl} target="_blank" rel="noreferrer" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1">
                    <span>WHATSAPP</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B8FF00]" />
                  </a>
                </li>
              )}
              {PERSONAL_INFO.githubUrl && (
                <li>
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1">
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B8FF00]" />
                  </a>
                </li>
              )}
              {PERSONAL_INFO.linkedinUrl && (
                <li>
                  <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1">
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B8FF00]" />
                  </a>
                </li>
              )}
              {PERSONAL_INFO.instagramUrl && (
                <li>
                  <a href={PERSONAL_INFO.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#B8FF00] transition-colors flex items-center gap-1">
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3 text-[#B8FF00]" />
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-bone-300">
          <div>
            SONKUSARE VAIBHAV &bull; MUMBAI, INDIA &bull; &copy; 2026
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#B8FF00]">AVAILABLE FOR SELECT COMMISSIONS</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-bone-300"
              title="Return to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};

export default Footer;
