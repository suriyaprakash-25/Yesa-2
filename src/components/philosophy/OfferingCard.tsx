import React from 'react';
import { motion } from 'framer-motion';

export type OfferingType = 'trainings' | 'experience' | 'leaders' | 'global';

interface OfferingCardProps {
  type: OfferingType;
  num: string;
  title: string;
  sublabel: string;
  description: string;
  tag: string;
  spec: string;
  delay?: number;
}

const FOOTER_SPECS: Record<OfferingType, { label: string; value: string }> = {
  trainings: { label: 'TRACK FORMAT', value: 'OPEN CURRICULUM' },
  experience: { label: 'COMPENSATION', value: 'DIRECT STIPEND' },
  leaders: { label: 'INTERACTION', value: 'PRACTITIONER 1-ON-1' },
  global: { label: 'DELIVERY', value: 'GLOBAL SESSIONS' },
};

// 4 Distinct Full-Bleed Thematic SVG Background Patterns
const ThematicPattern: React.FC<{ type: OfferingType }> = ({ type }) => {
  switch (type) {
    case 'trainings':
      // 01 · Free Trainings: Circuit/Terminal Lines & Intersection Nodes
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[#009D9E]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit Grid Lines */}
          <path
            d="M20 40H140V120H280 M60 20V180H180V260H280 M20 220H100V320H240 M200 40V100H260V220 M140 180V340 M260 280V340"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />
          <path
            d="M40 80H180V160H260 M100 120V240H220V300"
            stroke="#9AEDFC"
            strokeWidth="1.5"
          />
          {/* Intersecting Nodes with Subtle Pulse */}
          <circle cx="140" cy="120" r="3.5" fill="#9AEDFC" className="animate-pulse" />
          <circle cx="180" cy="180" r="3" fill="#009D9E" />
          <circle cx="180" cy="160" r="3.5" fill="#9AEDFC" className="animate-pulse" />
          <circle cx="100" cy="220" r="3" fill="#009D9E" />
          <circle cx="220" cy="240" r="3.5" fill="#9AEDFC" />
          <circle cx="60" cy="180" r="2.5" fill="currentColor" />
          <circle cx="260" cy="100" r="3" fill="currentColor" />
        </svg>
      );

    case 'experience':
      // 02 · Experience-ship: Ascending Step / Stepped Bars Progression
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[#009D9E]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ascending Stepped Progress Bars */}
          <rect x="25" y="270" width="35" height="70" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.1" />
          <rect x="75" y="225" width="35" height="115" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.15" />
          <rect x="125" y="170" width="35" height="170" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.2" />
          <rect x="175" y="110" width="35" height="230" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
          <rect x="225" y="45" width="35" height="295" rx="3" stroke="#9AEDFC" strokeWidth="1.75" fill="#9AEDFC" fillOpacity="0.3" />

          {/* Stepping Ascent Vector Ray */}
          <path
            d="M42 270L92 225L142 170L192 110L242 45"
            stroke="#9AEDFC"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <circle cx="242" cy="45" r="4.5" fill="#9AEDFC" className="animate-pulse" />
          <circle cx="192" cy="110" r="3.5" fill="#009D9E" />
          <circle cx="142" cy="170" r="3.5" fill="#009D9E" />
        </svg>
      );

    case 'leaders':
      // 03 · Industry Leaders: Interconnected Node & Mesh Network
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[#009D9E]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triangular Interlocking Constellation Network */}
          <path
            d="M150 40L240 130L190 240L110 240L60 130Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />
          <path
            d="M150 40L150 160L240 130 M150 160L190 240 M150 160L110 240 M150 160L60 130 M60 130L150 40"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M150 160L260 270 M150 160L40 270 M110 240L150 330L190 240"
            stroke="#9AEDFC"
            strokeWidth="1.5"
          />

          {/* Mentorship Data Nodes */}
          <circle cx="150" cy="40" r="5" fill="#9AEDFC" className="animate-pulse" />
          <circle cx="150" cy="160" r="6" fill="#009D9E" stroke="#9AEDFC" strokeWidth="2" />
          <circle cx="240" cy="130" r="4" fill="currentColor" />
          <circle cx="60" cy="130" r="4" fill="currentColor" />
          <circle cx="190" cy="240" r="4.5" fill="#9AEDFC" />
          <circle cx="110" cy="240" r="4.5" fill="#9AEDFC" />
          <circle cx="150" cy="330" r="4" fill="#009D9E" />
        </svg>
      );

    case 'global':
      // 04 · Global Lecturers: Globe Latitude/Longitude & Concentric Orbital Rings
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[#009D9E]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Global Orbital Matrix */}
          <circle cx="150" cy="180" r="115" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" />
          <circle cx="150" cy="180" r="85" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="150" cy="180" rx="115" ry="40" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="150" cy="180" rx="40" ry="115" stroke="#9AEDFC" strokeWidth="1.5" />
          
          {/* Diagonal Tilted Satellite Orbits */}
          <ellipse
            cx="150"
            cy="180"
            rx="125"
            ry="48"
            transform="rotate(-30 150 180)"
            stroke="#9AEDFC"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />

          {/* Global Orbital Intersection Nodes */}
          <circle cx="150" cy="65" r="4" fill="#9AEDFC" className="animate-pulse" />
          <circle cx="150" cy="295" r="4" fill="#9AEDFC" />
          <circle cx="35" cy="180" r="3.5" fill="#009D9E" />
          <circle cx="265" cy="180" r="3.5" fill="#009D9E" />
          <circle cx="150" cy="180" r="5" fill="#009D9E" stroke="#9AEDFC" strokeWidth="2" />
        </svg>
      );
  }
};

export const OfferingCard: React.FC<OfferingCardProps> = ({
  type,
  num,
  title,
  sublabel,
  description,
  tag,
  spec,
  delay = 0,
}) => {
  const footerSpec = FOOTER_SPECS[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative p-6 sm:p-7 rounded-2xl bg-[#131719] border border-white/[0.08] hover:border-[#009D9E]/50 hover:bg-[#151a1d] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden cursor-default min-h-[340px]"
    >
      {/* ========================================================= */}
      {/* Full-Bleed Thematic SVG Background Pattern                */}
      {/* Fills entire card at 6% opacity, brightening on hover     */}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-[0.06] group-hover:opacity-[0.13] transition-opacity duration-500 ease-out p-2">
        <ThematicPattern type={type} />
      </div>

      {/* Ambient Corner Accent Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#009D9E]/0 group-hover:bg-[#009D9E]/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none z-0" />

      {/* ========================================================= */}
      {/* Card Content (z-10 for high contrast & legibility)        */}
      {/* ========================================================= */}
      <div className="relative z-10">
        {/* Top Header: Number, Category & Status Badge */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm sm:text-base font-bold text-[#009D9E] tracking-wider">
              {num}
            </span>
            <div className="w-3.5 h-[1px] bg-[#009D9E]/40" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#8A8A8A] font-medium">
              {sublabel}
            </span>
          </div>

          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] text-[#9AEDFC] border border-white/[0.08] group-hover:border-[#009D9E]/40 transition-colors font-semibold">
            {tag}
          </span>
        </div>

        {/* Card Title (Larger, prominent typography) */}
        <h4 className="font-display font-black text-2xl sm:text-[1.75rem] text-white tracking-tight group-hover:text-[#9AEDFC] transition-colors leading-tight mb-3.5">
          {title}
        </h4>

        {/* Supporting Micro-Spec Feature Pill */}
        <div className="py-2 px-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-4 sm:mb-5 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
          <span className="font-mono text-xs sm:text-[13px] text-[#9AEDFC] tracking-tight font-medium">
            {spec}
          </span>
        </div>

        {/* Narrative Description */}
        <p className="text-sm sm:text-[15px] text-[#8A8A8A] font-normal leading-relaxed group-hover:text-white/90 transition-colors">
          {description}
        </p>
      </div>

      {/* ========================================================= */}
      {/* Bottom Technical Status Line (Genuinely distinct per card)*/}
      {/* ========================================================= */}
      <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono relative z-10">
        <span className="text-[#8A8A8A] uppercase tracking-wider">
          {footerSpec.label}
        </span>
        <span className="text-[#009D9E] font-semibold tracking-tight">
          {footerSpec.value}
        </span>
      </div>
    </motion.div>
  );
};
