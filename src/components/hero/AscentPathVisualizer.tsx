import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AscentPathVisualizerProps {
  mousePosition: { x: number; y: number };
}

export const AscentPathVisualizer: React.FC<AscentPathVisualizerProps> = ({ mousePosition }) => {

  // Calculate mouse offset for parallax (very subtle)
  const [windowCenter, setWindowCenter] = useState(() => ({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  }));
  
  useEffect(() => {
    const handleResize = () => {
      setWindowCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Subtle parallax values
  const offsetX = (mousePosition.x - windowCenter.x) * 0.05;
  const offsetY = (mousePosition.y - windowCenter.y) * 0.05;

  // Visual Nodes representing Choice -> Direction -> Progression
  const nodes = [
    { id: 1, y: 400, x: 500 },
    { id: 2, y: 250, x: 530 },
    { id: 3, y: 100, x: 480 },
    { id: 4, y: -50, x: 510 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen"
        animate={{
          x: offsetX,
          y: offsetY,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 800" 
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="ascentGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--path-origin)" />
              <stop offset="50%" stopColor="var(--path-active)" />
              <stop offset="100%" stopColor="var(--path-glow)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Core Ascension Path */}
          <motion.path
            d="M500,800 C500,600 500,500 500,400 C500,300 550,300 530,250 C510,200 470,180 480,100 C490,20 510,0 510,-50 C510,-100 510,-150 510,-200"
            fill="none"
            stroke="url(#ascentGradient)"
            strokeWidth="2.5"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />

          {/* Architectural structural lines (subtle grid/depth) */}
          <motion.path
            d="M500,400 L420,400 L420,300"
            fill="none"
            stroke="var(--path-origin)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          />
          <motion.path
            d="M530,250 L600,250 L600,150"
            fill="none"
            stroke="var(--path-origin)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          />
          <motion.path
            d="M480,100 L430,100 L430,0"
            fill="none"
            stroke="var(--path-origin)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
          />

          {/* Interactive Nodes */}
          {nodes.map((node, i) => (
            <motion.g key={node.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
            >
              {/* Data Node */}
              <circle 
                cx={node.x} 
                cy={node.y} 
                r="3" 
                fill="var(--path-active)"
                filter="url(#glow)"
              />
              
              {/* Ambient Ring */}
              <motion.circle 
                cx={node.x} 
                cy={node.y} 
                r="16" 
                fill="none"
                stroke="var(--path-glow)"
                strokeWidth="1"
                opacity="0.3"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
};
