import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

export const ExperienceVisualizer: React.FC<{
  progress: MotionValue<number>;
  idx: number;
}> = ({ progress, idx }) => {
  // progress here is the activeState (0 -> 1 -> 0) of the specific stage
  
  // Base scale and glow for the active node
  const scale = useTransform(progress, [0, 1], [1, 1.4]);
  const glowOpacity = useTransform(progress, [0, 1], [0, 0.7]);
  const elementsOpacity = useTransform(progress, [0, 1], [0.05, 0.5]);
  const networkScale = useTransform(progress, [0, 1], [0.8, 1]);

  return (
    <motion.div style={{ scale }} className="relative w-full h-full flex items-center justify-center">
      {/* Base Node */}
      <div className="w-3 h-3 md:w-4 md:h-4 bg-[#08090B] border-[2px] border-[var(--accent-base)] rounded-full relative z-10" />
      
      {/* Central Glow */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute w-16 h-16 md:w-24 md:h-24 bg-[var(--accent-glow)] blur-xl rounded-full"
      />

      {/* 
        Evolution Logic:
        Stage 0 (Volunteering): Simple node (already rendered above) + minimal ring
        Stage 1 (Paid Internship): Connected (orbital lines)
        Stage 2 (Experienced): Branching network
        Stage 3 (Pioneer): Expanded complex network 
      */}

      <motion.div style={{ opacity: elementsOpacity, scale: networkScale }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Stage 0+ (Minimal Ring) */}
        <div className="absolute w-12 h-12 md:w-16 md:h-16 border border-[var(--accent-base)] rounded-full border-dashed" />
        
        {/* Stage 1+ (Connected Orbit) */}
        {idx >= 1 && (
          <>
            <div className="absolute w-24 h-24 md:w-32 md:h-32 border border-[var(--accent-base)] rounded-full opacity-50" />
            <div className="absolute w-2 h-2 bg-[var(--accent-base)] rounded-full -translate-y-12 md:-translate-y-16" />
            <div className="absolute w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent" />
          </>
        )}

        {/* Stage 2+ (Branching Network) */}
        {idx >= 2 && (
          <>
            <div className="absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent rotate-45" />
            <div className="absolute w-[300px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent -rotate-45" />
            <div className="absolute w-1 h-1 bg-[var(--accent-base)] rounded-full translate-x-12 translate-y-12" />
            <div className="absolute w-1 h-1 bg-[var(--accent-base)] rounded-full -translate-x-12 translate-y-12" />
            <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-[var(--accent-base)] rounded-full opacity-30 border-dashed" />
          </>
        )}

        {/* Stage 3 (Pioneer Expanded Network) */}
        {idx === 3 && (
          <>
            <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent rotate-[22.5deg]" />
            <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent -rotate-[22.5deg]" />
            <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent rotate-[67.5deg]" />
            <div className="absolute w-[400px] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent -rotate-[67.5deg]" />
            
            <div className="absolute w-40 h-40 md:w-64 md:h-64 border border-[var(--accent-base)] rounded-full opacity-20" />
            
            {/* Network Nodes */}
            <div className="absolute w-2 h-2 bg-[var(--accent-base)] rounded-full translate-x-20 md:translate-x-32" />
            <div className="absolute w-2 h-2 bg-[var(--accent-base)] rounded-full -translate-x-20 md:-translate-x-32" />
            <div className="absolute w-1.5 h-1.5 bg-[var(--accent-base)] rounded-full translate-y-20 md:translate-y-32" />
            <div className="absolute w-1.5 h-1.5 bg-[var(--accent-base)] rounded-full -translate-y-20 md:-translate-y-32" />
          </>
        )}

      </motion.div>
    </motion.div>
  );
};
