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
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center bg-[#090D0F] select-none pointer-events-auto"
        >
          {/* Subtle ambient glow behind logo */}
          <div className="absolute w-72 h-72 bg-[#009D9E]/10 rounded-full blur-3xl pointer-events-none" />

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
                className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtle Technical Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8A8A8A]">
              Incubator for Future Leaders
            </span>
          </motion.div>

          {/* Micro loading line */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 140, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#009D9E] to-transparent mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
