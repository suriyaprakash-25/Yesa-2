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
  // Custom geometric technical line-art icons
  const renderLineArtIcon = () => {
    switch (type) {
      case 'trainings':
        return (
          <svg viewBox="0 0 48 48" className="w-8 h-8 text-[#009D9E]" fill="none">
            {/* Terminal / Knowledge Foundation Matrix */}
            <rect
              x="6"
              y="8"
              width="36"
              height="32"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.4" />
            <circle cx="12" cy="13" r="1.5" fill="#9AEDFC" />
            <circle cx="17" cy="13" r="1.5" fill="currentColor" fillOpacity="0.5" />
            <path
              d="M14 26L18 30L14 34"
              stroke="#9AEDFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="22" y1="34" x2="32" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'experience':
        return (
          <svg viewBox="0 0 48 48" className="w-8 h-8 text-[#009D9E]" fill="none">
            {/* Stepping Ladder & Transition Vector */}
            <rect x="8" y="30" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.4" />
            <rect x="20" y="22" width="8" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6" />
            <rect x="32" y="14" width="8" height="26" rx="1.5" stroke="#9AEDFC" strokeWidth="1.5" />
            <path
              d="M12 24L24 16L36 8"
              stroke="#9AEDFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 2"
            />
            <circle cx="36" cy="8" r="3" fill="#009D9E" stroke="#9AEDFC" strokeWidth="1.25" />
          </svg>
        );
      case 'leaders':
        return (
          <svg viewBox="0 0 48 48" className="w-8 h-8 text-[#009D9E]" fill="none">
            {/* Interlocking Leadership Triangle Network */}
            <polygon
              points="24,6 42,40 6,40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
            <polygon
              points="24,18 34,36 14,36"
              stroke="#9AEDFC"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="6" r="2.5" fill="#9AEDFC" />
            <circle cx="42" cy="40" r="2.5" fill="#009D9E" />
            <circle cx="6" cy="40" r="2.5" fill="#009D9E" />
            <circle cx="24" cy="28" r="2.5" fill="#FFFFFF" />
          </svg>
        );
      case 'global':
        return (
          <svg viewBox="0 0 48 48" className="w-8 h-8 text-[#009D9E]" fill="none">
            {/* Geodesic Global Orbit Matrix */}
            <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.3" />
            <ellipse cx="24" cy="24" rx="17" ry="6" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6" />
            <ellipse cx="24" cy="24" rx="6" ry="17" stroke="#9AEDFC" strokeWidth="1.5" />
            <line x1="7" y1="24" x2="41" y2="24" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" strokeOpacity="0.5" />
            <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#009D9E]/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden cursor-default"
    >
      {/* Ambient Corner Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#009D9E]/0 group-hover:bg-[#009D9E]/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

      {/* Top Header: Number & Stage Tag */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#009D9E] tracking-wider">
              {num}
            </span>
            <div className="w-3 h-[1px] bg-[#009D9E]/40" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A]">
              {sublabel}
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.03] text-[#8A8A8A] border border-white/[0.06] group-hover:border-[#009D9E]/30 group-hover:text-white transition-colors">
            {tag}
          </span>
        </div>

        {/* Icon & Title Row */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] shrink-0 group-hover:border-[#009D9E]/30 group-hover:bg-[#009D9E]/10 transition-all duration-300">
            <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
              {renderLineArtIcon()}
            </div>
          </div>
          <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#9AEDFC] transition-colors leading-tight">
            {title}
          </h4>
        </div>

        {/* Supporting Micro-Spec Feature Line (Closes the vertical gap) */}
        <div className="py-1.5 px-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] mb-3 flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-[#009D9E]" />
          <span className="font-mono text-[10px] text-[#9AEDFC]/90 tracking-tight font-medium">
            {spec}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#8A8A8A] font-light leading-relaxed group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>

      {/* Bottom Technical Status Line */}
      <div className="pt-3 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-white/40 group-hover:text-white/60 transition-colors">
        <span>ARCHITECTURAL TRACK</span>
        <span className="text-[#009D9E] group-hover:translate-x-0.5 transition-transform">VERIFIED →</span>
      </div>
    </motion.div>
  );
};
