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

  // Stages
  const stages = [
    { name: "Volunteering", y: 400, color: "var(--stage-2-color)" },
    { name: "Paid Internship", y: 250, color: "var(--stage-3-color)" },
    { name: "Experienced", y: 100, color: "var(--stage-4-color)" },
    { name: "World-Class Leader", y: -50, color: "var(--stage-5-color)" },
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
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
              <stop offset="30%" stopColor="rgba(56, 189, 248, 0.3)" />
              <stop offset="60%" stopColor="rgba(52, 211, 153, 0.5)" />
              <stop offset="100%" stopColor="rgba(251, 191, 36, 0.8)" />
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
            d="M500,800 C500,600 550,500 500,400 C450,300 520,200 500,100 C480,0 500,-100 500,-200"
            fill="none"
            stroke="url(#ascentGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          />

          {/* Interactive Nodes & Grid lines */}
          {stages.map((stage, i) => (
            <motion.g key={stage.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + (i * 0.2), duration: 1 }}
            >
              {/* Subtle horizontal connecting line */}
              <line 
                x1="0" y1={stage.y + 400} 
                x2="1000" y2={stage.y + 400} 
                stroke="rgba(255,255,255,0.03)" 
                strokeWidth="1"
              />
              
              {/* Data Node */}
              <circle 
                cx="500" 
                cy={stage.y + 400} 
                r="3" 
                fill={stage.color}
                filter="url(#glow)"
              />
              
              {/* Ambient Ring */}
              <motion.circle 
                cx="500" 
                cy={stage.y + 400} 
                r="12" 
                fill="none"
                stroke={stage.color}
                strokeWidth="1"
                opacity="0.3"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: i }}
              />
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
};
