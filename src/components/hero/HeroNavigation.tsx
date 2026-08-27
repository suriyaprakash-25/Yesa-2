import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '../core/Button';

interface HeroNavigationProps {
  onOpenApply: () => void;
  onNavigateSection: (section: string) => void;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({
  onOpenApply,
  onNavigateSection
}) => {
  // Animation variants
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Institutional ease
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-10"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        
        {/* Minimal Brand Identity */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#08090B] font-display font-bold text-xs tracking-tighter">Y.</span>
          </div>
          <span className="font-display font-bold text-lg tracking-widest uppercase">YESA</span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div variants={itemVariants} className="hidden md:flex items-center gap-8">
          {['Journey', 'Fields', 'Experience', 'Future'].map((item) => (
            <button
              key={item}
              onClick={() => onNavigateSection(item.toLowerCase())}
              className="text-[var(--text-nav)] font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest font-mono-tag relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[var(--accent-base)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div variants={itemVariants}>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={onOpenApply}
            className="rounded-full px-6 py-2 uppercase tracking-widest text-[var(--text-nav)]"
          >
            Apply
          </Button>
        </motion.div>

      </div>
    </motion.nav>
  );
};
