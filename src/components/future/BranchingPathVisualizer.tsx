import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BranchingPathVisualizerProps {
  progress: MotionValue<number>;
}

export const BranchingPathVisualizer: React.FC<BranchingPathVisualizerProps> = ({ progress }) => {
  // Main trunk enters from top center (0.45 -> 0.62)
  const mainLineLength = useTransform(progress, [0.45, 0.62], [0, 1]);
  // Branches diverge left and right down into the two cards (0.6 -> 0.85)
  const leftBranchLength = useTransform(progress, [0.6, 0.85], [0, 1]);
  const rightBranchLength = useTransform(progress, [0.6, 0.85], [0, 1]);
  // Junction and terminal node glows appear as the paths connect (0.75 -> 0.88)
  const junctionOpacity = useTransform(progress, [0.58, 0.65], [0, 1]);
  const nodeOpacity = useTransform(progress, [0.8, 0.9], [0, 1]);

  return (
    <div className="w-full h-24 sm:h-28 md:h-36 relative flex justify-center items-center overflow-visible pointer-events-none">
      <svg
        viewBox="0 0 800 140"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <filter id="branchGlowPrimary" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="none" strokeWidth="1" fill="none">
          {/* Top Origin Node */}
          <motion.circle
            cx="400"
            cy="4"
            r="4"
            fill="#FFFFFF"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: junctionOpacity }}
          />

          {/* 1. Main trunk descending from top origin down to the split junction */}
          <motion.line
            x1="400"
            y1="4"
            x2="400"
            y2="45"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: mainLineLength }}
          />

          {/* Central Split Junction Node */}
          <motion.circle
            cx="400"
            cy="45"
            r="4"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="1.5"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: junctionOpacity }}
          />

          {/* 2. Left Branch: curves outward & downward to left card center (x = 200, y = 140) */}
          <motion.path
            d="M400,45 C400,95 200,80 200,140"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: leftBranchLength }}
          />

          {/* 3. Right Branch: curves outward & downward to right card center (x = 600, y = 140) */}
          <motion.path
            d="M400,45 C400,95 600,80 600,140"
            stroke="#9AEDFC"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: rightBranchLength }}
          />

          {/* Left Terminal Anchor Node (connecting directly to top of Card 01) */}
          <motion.circle
            cx="200"
            cy="138"
            r="5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: nodeOpacity }}
          />

          {/* Right Terminal Anchor Node (connecting directly to top of Card 02) */}
          <motion.circle
            cx="600"
            cy="138"
            r="5"
            fill="#9AEDFC"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: nodeOpacity }}
          />
        </g>
      </svg>
    </div>
  );
};
