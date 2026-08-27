import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BranchingPathVisualizerProps {
  progress: MotionValue<number>;
}

export const BranchingPathVisualizer: React.FC<BranchingPathVisualizerProps> = ({ progress }) => {
  // Line comes straight up, then branches left and right.
  // Stage 1 (Straight Line): 0 - 0.3
  // Stage 2 (Branching out): 0.3 - 0.7
  
  const mainLineLength = useTransform(progress, [0, 0.3], [0, 1]);
  const leftBranchLength = useTransform(progress, [0.3, 0.7], [0, 1]);
  const rightBranchLength = useTransform(progress, [0.3, 0.7], [0, 1]);
  const nodeOpacity = useTransform(progress, [0.65, 0.7], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full flex justify-center overflow-visible z-0">
      <svg 
        viewBox="0 0 1000 800" 
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-[80vh] min-h-[600px] opacity-30"
      >
        <defs>
          <filter id="branchGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          
          {/* Main trunk entering from top */}
          <motion.line 
            x1="500" y1="0" 
            x2="500" y2="400" 
            stroke="#ffffff" 
            strokeWidth="2" 
            filter="url(#branchGlow)"
            style={{ pathLength: mainLineLength }}
          />
          
          {/* Left Branch */}
          <motion.path 
            d="M500,400 C500,550 200,500 200,700" 
            stroke="#38BDF8" 
            strokeWidth="2"
            filter="url(#branchGlow)"
            style={{ pathLength: leftBranchLength }}
          />

          {/* Right Branch */}
          <motion.path 
            d="M500,400 C500,550 800,500 800,700" 
            stroke="#34D399" 
            strokeWidth="2"
            filter="url(#branchGlow)"
            style={{ pathLength: rightBranchLength }}
          />

          {/* Nodes at the end of the branches */}
          <motion.circle 
            cx="200" cy="700" r="4" 
            fill="#38BDF8" filter="url(#branchGlow)"
            style={{ opacity: nodeOpacity }}
          />
          <motion.circle 
            cx="800" cy="700" r="4" 
            fill="#34D399" filter="url(#branchGlow)"
            style={{ opacity: nodeOpacity }}
          />

        </g>
      </svg>
    </div>
  );
};
