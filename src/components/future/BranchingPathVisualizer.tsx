import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BranchingPathVisualizerProps {
  progress: MotionValue<number>;
}

export const BranchingPathVisualizer: React.FC<BranchingPathVisualizerProps> = ({ progress }) => {
  // Step 2a: Main trunk descends (0.35 -> 0.44)
  const mainLineLength = useTransform(progress, [0.35, 0.44], [0, 1]);
  const junctionOpacity = useTransform(progress, [0.35, 0.42], [0, 1]);

  // Step 2b: Left Branch draws down to Card 01 on first scroll stage (0.40 -> 0.55)
  const leftBranchLength = useTransform(progress, [0.40, 0.55], [0, 1]);
  const leftNodeOpacity = useTransform(progress, [0.50, 0.58], [0, 1]);

  // Step 2c: Right Branch draws down to Card 02 on second separate scroll stage (0.65 -> 0.82)
  const rightBranchLength = useTransform(progress, [0.65, 0.82], [0, 1]);
  const rightNodeOpacity = useTransform(progress, [0.78, 0.86], [0, 1]);

  return (
    <div className="w-full h-36 sm:h-44 md:h-52 relative flex justify-center items-center overflow-visible pointer-events-none">
      <svg
        viewBox="0 0 800 160"
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

        {/* 1. Subtle Baseline Guidelines */}
        <g stroke="none" fill="none">
          {/* Trunk guideline */}
          <line
            x1="400"
            y1="4"
            x2="400"
            y2="36"
            stroke="rgba(0, 157, 158, 0.25)"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          {/* Left curve guideline */}
          <path
            d="M400,36 C400,105 200,90 200,160"
            stroke="rgba(0, 157, 158, 0.25)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Right curve guideline */}
          <path
            d="M400,36 C400,105 600,90 600,160"
            stroke="rgba(154, 237, 252, 0.25)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </g>

        {/* 2. Active Animated Glowing Branch Paths */}
        <g fill="none">
          {/* Top Origin Node */}
          <motion.circle
            cx="400"
            cy="4"
            r="4.5"
            fill="#FFFFFF"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: junctionOpacity }}
          />

          {/* Main Trunk: descends from top origin down to split junction */}
          <motion.line
            x1="400"
            y1="4"
            x2="400"
            y2="36"
            stroke="#009D9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: mainLineLength }}
          />

          {/* Central Split Junction Node */}
          <motion.circle
            cx="400"
            cy="36"
            r="5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="1.5"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: junctionOpacity }}
          />

          {/* Left Branch: draws down to Card 01 on separate scroll stage */}
          <motion.path
            d="M400,36 C400,105 200,90 200,160"
            stroke="#009D9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: leftBranchLength }}
          />

          {/* Right Branch: draws down to Card 02 on next separate scroll stage */}
          <motion.path
            d="M400,36 C400,105 600,90 600,160"
            stroke="#9AEDFC"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branchGlowPrimary)"
            style={{ pathLength: rightBranchLength }}
          />

          {/* Left Terminal Node (Top Center of Card 01) */}
          <motion.circle
            cx="200"
            cy="158"
            r="5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: leftNodeOpacity }}
          />

          {/* Right Terminal Node (Top Center of Card 02) */}
          <motion.circle
            cx="600"
            cy="158"
            r="5"
            fill="#9AEDFC"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#branchGlowPrimary)"
            style={{ opacity: rightNodeOpacity }}
          />
        </g>
      </svg>
    </div>
  );
};
