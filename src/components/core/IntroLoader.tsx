import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC = () => {
  const [showLoader, setShowLoader] = useState<boolean>(() => {
    // Check if user has already seen the intro in this session
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('yesa_intro_seen');
    }
    return false;
  });

  useEffect(() => {
    if (!showLoader) return;

    // Set flag and trigger dissolve after ~900ms (complete total duration < 1.2s)
    const timer = setTimeout(() => {
      sessionStorage.setItem('yesa_intro_seen', 'true');
      setShowLoader(false);
    }, 950);

    return () => clearTimeout(timer);
  }, [showLoader]);

  const letters = ['Y', 'E', 'S', 'A'];

  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.04,
            filter: 'blur(12px)',
            transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[var(--color-bg-base)] select-none pointer-events-auto transition-colors duration-300"
        >
          {/* Subtle ambient glow behind logo */}
          <div className="absolute w-72 h-72 bg-[var(--accent-dim)] rounded-full blur-3xl pointer-events-none" />

          {/* Letter Stagger Reveal */}
          <div className="relative flex items-center gap-1 sm:gap-2 overflow-hidden mb-4">
            {letters.map((letter, i) => (
              <motion.span
                key={letter}
                initial={{ y: 50, opacity: 0, filter: 'blur(8px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-[var(--text-primary)] inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Minimal Baseline Rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-[1.5px] bg-[var(--accent-base)] origin-center"
          />

          {/* Minimal Mono Tagline */}
          <motion.span
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-secondary)] mt-3"
          >
            Incubator for Future Leaders
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
