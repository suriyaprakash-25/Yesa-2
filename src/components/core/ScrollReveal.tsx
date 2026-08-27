import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.5,
  yOffset = 24
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // --ease-institutional
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
