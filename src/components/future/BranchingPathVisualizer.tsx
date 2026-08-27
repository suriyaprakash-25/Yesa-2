import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface BranchingPathVisualizerProps {
  progress: MotionValue<number>;
}

export const BranchingPathVisualizer: React.FC<BranchingPathVisualizerProps> = ({ progress }) => {
  // Main line enters (0 -> 0.35), then branches left and right (0.35 -> 0.8)
  const mainLineLength = useTransform(progress, [0, 0.35], [0, 1]);
  const leftBranchLength = useTransform(progress, [0.35, 0.8], [0, 1]);
  const rightBranchLength = useTransform(progress, [0.35, 0.8], [0, 1]);
  const nodeOpacity = useTransform(progress, [0.75, 0.85], [0, 1]);

  return (
    <div className="absolute inset-0 pointer-events-none w-full h-full flex justify-center overflow-visible z-0">
      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full min-h-[600px] opacity-40"
      >
        <defs>
          <filter id="yesaBranchGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          {/* Main trunk entering from top center */}
          <motion.line
            x1="500"
            y1="0"
            x2="500"
            y2="380"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#yesaBranchGlow)"
            style={{ pathLength: mainLineLength }}
          />

          {/* Left Branch -> Path 01 */}
          <motion.path
            d="M500,380 C500,520 220,480 220,680"
            stroke="#009D9E"
            strokeWidth="2"
            filter="url(#yesaBranchGlow)"
            style={{ pathLength: leftBranchLength }}
          />

          {/* Right Branch -> Path 02 */}
          <motion.path
            d="M500,380 C500,520 780,480 780,680"
            stroke="#9AEDFC"
            strokeWidth="2"
            filter="url(#yesaBranchGlow)"
            style={{ pathLength: rightBranchLength }}
          />

          {/* Glowing Terminal Nodes */}
          <motion.circle
            cx="220"
            cy="680"
            r="5"
            fill="#009D9E"
            stroke="#9AEDFC"
            strokeWidth="1.5"
            filter="url(#yesaBranchGlow)"
            style={{ opacity: nodeOpacity }}
          />
          <motion.circle
            cx="780"
            cy="680"
            r="5"
            fill="#9AEDFC"
            stroke="#009D9E"
            strokeWidth="1.5"
            filter="url(#yesaBranchGlow)"
            style={{ opacity: nodeOpacity }}
          />
        </g>
      </svg>
    </div>
  );
};
