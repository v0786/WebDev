import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: '2024 — PRESENT',
    title: 'INDEPENDENT CREATIVE DEVELOPER & DESIGNER',
    organization: 'VAIBHAV SONKUSARE STUDIO / MUMBAI & GLOBAL',
    description: 'Directing and engineering bespoke cinematic web platforms, interactive demos, and AI-accelerated workflows for visionary businesses and ambitious brands worldwide.',
  },
  {
    id: '02',
    year: '2023 — 2024',
    title: 'FRONTEND & INTERACTIVE SPECIALIST',
    organization: 'BESPOKE DIGITAL EXPERIENCES',
    description: 'Crafted fluid responsive architectures, tactile micro-animations, and high-conversion editorial layouts delivering seamless 60-120 FPS performance.',
  },
  {
    id: '03',
    year: '2022 — 2023',
    title: 'UI/UX DESIGN & BRAND SYSTEMS',
    organization: 'COMMERCIAL DIGITAL LAB',
    description: 'Engineered comprehensive design systems, wireframe-to-production pipelines, and typography-first marketing sites optimized for Core Web Vitals.',
  },
  {
    id: '04',
    year: 'MILESTONE',
    title: '9 BESPOKE INTERACTIVE CONCEPT ARCHITECTURES',
    organization: 'FLAGSHIP DIGITAL PORTFOLIO',
    description: 'Authored 9 production-grade concept platforms across Architecture, Michelin Gastronomy, AI Observability, Swiss Horology, Haute Couture, and DeFi.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / TRAJECTORY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              BACKGROUND.
            </span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Animated Gold Spine Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[1px] bg-[#8C6D4F]/20">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {journey.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Glowing Node Dot */}
                <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-3 h-3 rounded-full border border-[#D4AF37] bg-[#0E0C0A] group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37]">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mt-0.5 sm:mt-0">
                    {item.organization}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-2 group-hover:text-[#F7E7C4] transition-colors uppercase leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-xs sm:text-[13px] font-light text-[#9C8E80] leading-[1.75]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
