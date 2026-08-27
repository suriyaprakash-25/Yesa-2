import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('yesa_intro_loaded');
  });

  useEffect(() => {
    if (!isLoading) return;

    // Set the flag and hide loader after sequence
    sessionStorage.setItem('yesa_intro_loaded', 'true');
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 1.2s brief sequence

    return () => clearTimeout(timer);
  }, [isLoading]);

  const word = "YESA".split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[var(--color-bg-base)] flex items-center justify-center overflow-hidden"
        >
          <div className="flex space-x-2">
            {word.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display font-bold text-white text-6xl md:text-8xl tracking-widest"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
