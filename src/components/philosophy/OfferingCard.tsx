import React from 'react';
import { motion } from 'framer-motion';

export type OfferingType = 'trainings' | 'experience' | 'leaders' | 'global';

interface OfferingCardProps {
  type: OfferingType;
  title: string;
  description: string;
  delay?: number;
}

export const OfferingCard: React.FC<OfferingCardProps> = ({ type, title, description, delay = 0 }) => {
  
  // Renders a unique abstract graphic based on the offering type
  const renderAbstractGraphic = () => {
    switch(type) {
      case 'trainings':
        return (
          <div className="relative w-full h-32 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
            <div className="absolute w-24 h-24 border border-sky-400/30 rounded-full group-hover:border-sky-400/80 transition-colors"></div>
            <div className="absolute w-16 h-16 border-t border-r border-sky-300/50 rotate-45 group-hover:rotate-90 transition-transform duration-1000"></div>
            <div className="absolute w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
          </div>
        );
      case 'experience':
        return (
          <div className="relative w-full h-32 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
            <div className="absolute flex gap-4">
              <div className="w-1 h-12 bg-emerald-400/20 group-hover:bg-emerald-400/60 transition-colors group-hover:h-16 duration-500"></div>
              <div className="w-1 h-20 bg-emerald-400/40 group-hover:bg-emerald-400/80 transition-colors group-hover:h-24 duration-500 delay-100"></div>
              <div className="w-1 h-16 bg-emerald-400/20 group-hover:bg-emerald-400/60 transition-colors group-hover:h-20 duration-500 delay-200"></div>
            </div>
            <div className="absolute w-full h-px bg-emerald-400/30 top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(52,211,153,0.5)]"></div>
          </div>
        );
      case 'leaders':
        return (
          <div className="relative w-full h-32 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
            <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-amber-400/40 fill-none group-hover:stroke-amber-400/90 transition-colors duration-500">
              <polygon points="50,10 90,90 10,90" strokeWidth="1" className="group-hover:stroke-[1.5] transition-all"/>
              <polygon points="50,30 75,80 25,80" strokeWidth="1" className="group-hover:-translate-y-2 transition-transform duration-700"/>
              <circle cx="50" cy="50" r="3" className="fill-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
            </svg>
          </div>
        );
      case 'global':
        return (
          <div className="relative w-full h-32 flex items-center justify-center overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-700">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 group-hover:border-white/50 transition-colors"></div>
            <div className="absolute w-20 h-20 rounded-full border border-white/10 rotate-45 group-hover:rotate-[225deg] transition-transform duration-1000 ease-out"></div>
            <div className="absolute w-20 h-20 rounded-full border border-white/10 -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-1000 ease-out"></div>
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)] group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group glass-surface p-10 md:p-12 rounded-none border-l-2 border-l-transparent hover:border-l-[var(--accent-base)] hover:bg-white/[0.02] transition-all duration-500 cursor-default"
    >
      {renderAbstractGraphic()}
      
      <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-4 group-hover:text-[var(--accent-hover)] transition-colors tracking-tight">
        {title}
      </h3>
      <p className="text-[var(--text-supporting)] text-white/50 leading-relaxed font-sans group-hover:text-white/70 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};
