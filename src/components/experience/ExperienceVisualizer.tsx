import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface ExperienceVisualizerProps {
  progress: MotionValue<number>;
}

export const ExperienceVisualizer: React.FC<ExperienceVisualizerProps> = ({ progress }) => {
  // We map the overall progress (0 to 1) into 4 distinct stage triggers.
  // Stage 1 (Observe): 0.0 - 0.25
  // Stage 2 (Participate): 0.25 - 0.5
  // Stage 3 (Contribute): 0.5 - 0.75
  // Stage 4 (Lead): 0.75 - 1.0

  // Central Node
  const centralScale = useTransform(progress, [0, 0.7, 0.9], [1, 1.2, 3]);
  const centralGlow = useTransform(
    progress,
    [0, 0.7, 0.9],
    ["drop-shadow(0 0 5px rgba(56,189,248,0.2))", "drop-shadow(0 0 15px rgba(56,189,248,0.5))", "drop-shadow(0 0 40px rgba(255,255,255,1))"]
  );
  const centralColor = useTransform(
    progress,
    [0.7, 0.9],
    ["rgba(56,189,248,1)", "rgba(255,255,255,1)"] // Sky to White
  );

  // Orbital Rings
  const ring1Opacity = useTransform(progress, [0, 0.1, 0.8, 0.9], [0, 0.2, 0.2, 0]);
  const ring2Opacity = useTransform(progress, [0, 0.1, 0.8, 0.9], [0, 0.1, 0.1, 0]);

  // Orbiting Nodes (Appear in Stage 2)
  const nodeOpacity = useTransform(progress, [0.2, 0.3, 0.8, 0.9], [0, 1, 1, 0]);
  
  // Connections (Lines form in Stage 3)
  const linePathLength = useTransform(progress, [0.45, 0.6], [0, 1]);
  const lineOpacity = useTransform(progress, [0.45, 0.6, 0.8, 0.9], [0, 0.6, 0.6, 0]);

  // Pulse Opacity
  const pulseOpacity = useTransform(progress, [0.8, 0.9], [1, 0]);

  return (
    <div className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg viewBox="-200 -200 400 400" className="w-full max-w-[600px] h-auto overflow-visible">
        
        {/* Orbital Rings */}
        <motion.circle cx="0" cy="0" r="100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" style={{ opacity: ring1Opacity }} />
        <motion.circle cx="0" cy="0" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" style={{ opacity: ring2Opacity }} />

        {/* Network Connections (Stage 3) */}
        <motion.g style={{ opacity: lineOpacity }} stroke="rgba(56,189,248,0.4)" strokeWidth="1.5">
          {/* Central to Ring 1 */}
          <motion.line x1="0" y1="0" x2="70" y2="-71" style={{ pathLength: linePathLength }} />
          <motion.line x1="0" y1="0" x2="-86" y2="50" style={{ pathLength: linePathLength }} />
          <motion.line x1="0" y1="0" x2="34" y2="94" style={{ pathLength: linePathLength }} />
          
          {/* Ring 1 to Ring 2 */}
          <motion.line x1="70" y1="-71" x2="113" y2="-113" style={{ pathLength: linePathLength }} />
          <motion.line x1="-86" y1="50" x2="-138" y2="80" style={{ pathLength: linePathLength }} />
          
          {/* Inter-ring connections */}
          <motion.line x1="70" y1="-71" x2="-86" y2="50" strokeDasharray="2 4" style={{ pathLength: linePathLength }} />
          <motion.line x1="34" y1="94" x2="-138" y2="80" strokeDasharray="2 4" style={{ pathLength: linePathLength }} />
        </motion.g>

        {/* Orbiting Nodes (Stage 2) */}
        <motion.g style={{ opacity: nodeOpacity }} fill="currentColor">
          {/* Ring 1 Nodes */}
          <circle cx="70" cy="-71" r="4" className="text-emerald-400" />
          <circle cx="-86" cy="50" r="4" className="text-emerald-400" />
          <circle cx="34" cy="94" r="4" className="text-emerald-400" />
          
          {/* Ring 2 Nodes */}
          <circle cx="113" cy="-113" r="3" className="text-amber-400" />
          <circle cx="-138" cy="80" r="3" className="text-amber-400" />
          <circle cx="41" cy="-154" r="3" className="text-amber-400" />
        </motion.g>

        {/* The Central Node (The Participant) */}
        <motion.circle 
          cx="0" 
          cy="0" 
          r="8" 
          style={{ 
            scale: centralScale, 
            filter: centralGlow,
            fill: centralColor
          }} 
        />
        
        {/* Pulsing rings around central node */}
        <motion.circle
          cx="0" cy="0" r="8"
          fill="none"
          stroke="rgba(56,189,248,0.5)"
          strokeWidth="1"
          animate={{ scale: [1, 3, 1], opacity: [1, 0, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          style={{ opacity: pulseOpacity }}
        />
        
      </svg>
    </div>
  );
};
