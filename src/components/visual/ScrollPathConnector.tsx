import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface ScrollPathConnectorProps {
  progress: MotionValue<number>;
  height?: string;
  className?: string;
}

export const ScrollPathConnector: React.FC<ScrollPathConnectorProps> = ({ 
  progress, 
  height = "100%",
  className = ""
}) => {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 w-10 z-0 pointer-events-none opacity-30 ${className}`} style={{ height }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 40 1000" 
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(251, 191, 36, 0.5)" /> {/* Starts from Gold (Experience) */}
            <stop offset="50%" stopColor="rgba(56, 189, 248, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.1)" />
          </linearGradient>
          <filter id="connectorGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <line 
          x1="20" y1="0" 
          x2="20" y2="1000" 
          stroke="rgba(255, 255, 255, 0.05)" 
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Animated fill path */}
        <motion.line
          x1="20" y1="0" 
          x2="20" y2="1000"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          filter="url(#connectorGlow)"
          style={{ pathLength: progress }}
        />
      </svg>
    </div>
  );
};
