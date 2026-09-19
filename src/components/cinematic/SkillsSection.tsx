import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'FRONTEND & CREATIVE ENGINEERING',
    badge: 'CORE CRAFT',
    items: ['React.js', 'TypeScript', 'Three.js / WebGL', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    description: 'Specialized in ultra-responsive web applications, bespoke spatial layouts, fluid kinetic physics, and buttery 120 FPS micro-interactions.',
    stat: '120 FPS FLUID',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'VISUAL DIRECTION & UI/UX',
    badge: 'AESTHETIC LEAD',
    items: ['Figma', 'Design Systems', 'Micro-Interactions', 'Editorial Typography', 'Spatial Design'],
    description: 'Translating brand essence into cinematic digital languages, high-conversion user journeys, and tactile dark-mode interfaces.',
    stat: 'BESPOKE GRADE',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'FULL STACK & CLOUD PLATFORMS',
    badge: 'ARCHITECTURE',
    items: ['Node.js', 'PostgreSQL', 'Supabase', 'RESTful APIs', 'Serverless', 'Vercel / GitHub Actions'],
    description: 'Resilient backend foundations, optimized database indexing, dynamic data pipelines, and fast continuous delivery.',
    stat: '< 100ms TBT',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI WORKFLOWS & CREATIVE MOTION',
    badge: 'INNOVATION',
    items: ['Generative AI Workflows', 'Prompt Architecture', 'Dynamic 3D Canvases', 'SEO & Core Web Vitals'],
    description: 'Leveraging cutting-edge AI toolchains for accelerated production without sacrificing handcrafted frontend polish or organic search dominance.',
    stat: '100% LIGHTHOUSE',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            03 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CORE DISCIPLINES.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              CRAFT &amp; CAPABILITIES.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#9C8E80] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The engineering and creative stack powering bespoke web platforms, immersive 3D interactions, and conversion-focused design systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative rounded-2xl border border-[#B3916D]/45 bg-[#0F0C0A] p-7 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-[#D4AF37]/80 hover:bg-[#14100D] ${cat.colSpan}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] px-2.5 py-1 border border-[#D4AF37]/40 rounded-sm bg-[#D4AF37]/5">
                    {cat.badge}
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C4B5A5]">
                    {cat.stat}
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-3 group-hover:text-[#F7E7C4] transition-colors uppercase leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cat.title}
                </h3>

                <p
                  className="text-xs sm:text-[13px] font-light text-[#C4B5A5] leading-[1.75] mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#B3916D]/25">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#B3916D]/35 bg-[#080605] text-[#EAD8C7] group-hover:border-[#D4AF37]/50 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
