import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BranchingPathVisualizerProps {
  progress: MotionValue<number>;
}

export const BranchingPathVisualizer: React.FC<BranchingPathVisualizerProps> = ({ progress }) => {
  // Main trunk enters from top center (0.45 -> 0.6)
  const mainLineLength = useTransform(progress, [0.45, 0.6], [0, 1]);
  // Branches diverge left and right down into the two cards (0.55 -> 0.75)
  const leftBranchLength = useTransform(progress, [0.55, 0.75], [0, 1]);
  const rightBranchLength = useTransform(progress, [0.55, 0.75], [0, 1]);
  // Terminal anchor nodes and junction glows
  const junctionOpacity = useTransform(progress, [0.5, 0.6], [0, 1]);
  const nodeOpacity = useTransform(progress, [0.7, 0.82], [0, 1]);

  return (
    <div className="w-full h-24 sm:h-28 md:h-32 relative flex justify-center items-center overflow-visible pointer-events-none">
      <svg
        viewBox="0 0 800 120"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <filter id="branchGlowPrimary" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Subtle Baseline Guidelines (Always Visible in Phase 2) */}
        <g stroke="none" fill="none">
          {/* Trunk guideline */}
          <line
            x1="400"
            y1="4"
            x2="400"
            y2="30"
            stroke="rgba(0, 157, 158, 0.3)"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          {/* Left curve guideline */}
          <path
            d="M400,30 C400,75 200,75 200,120"
            stroke="rgba(0, 157, 158, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Right curve guideline */}
          <path
            d="M400,30 C400,75 600,75 600,120"
            stroke="rgba(154, 237, 252, 0.3)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </g>

        {/* 2. Active Glowing Branch Paths */}
        <g fill="none">
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

          {/* Main Trunk: descends from origin to split junction */}
          <motion.line
            x1="400"
            y1="4"
            x2="400"
            y2="30"
            stroke="#009D9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: mainLineLength }}
          />

          {/* Central Split Junction Node */}
          <motion.circle
            cx="400"
            cy="30"
            r="4.5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="1.5"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: junctionOpacity }}
          />

          {/* Left Branch: curves outward & downward to Card 01 top anchor */}
          <motion.path
            d="M400,30 C400,75 200,75 200,120"
            stroke="#009D9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: leftBranchLength }}
          />

          {/* Right Branch: curves outward & downward to Card 02 top anchor */}
          <motion.path
            d="M400,30 C400,75 600,75 600,120"
            stroke="#9AEDFC"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: rightBranchLength }}
          />

          {/* Left Terminal Node (Top Center of Card 01) */}
          <motion.circle
            cx="200"
            cy="118"
            r="5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: nodeOpacity }}
          />

          {/* Right Terminal Node (Top Center of Card 02) */}
          <motion.circle
            cx="600"
            cy="118"
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
