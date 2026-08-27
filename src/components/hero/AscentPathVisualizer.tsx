import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AscentPathVisualizerProps {
  mousePosition: { x: number; y: number };
}

export const AscentPathVisualizer: React.FC<AscentPathVisualizerProps> = ({ mousePosition }) => {
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

  // Use springs for smooth parallax follow
  const springConfig = { damping: 30, stiffness: 50 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    if (windowCenter.x > 0) {
      mouseX.set(mousePosition.x - windowCenter.x);
      mouseY.set(mousePosition.y - windowCenter.y);
    }
  }, [mousePosition, windowCenter, mouseX, mouseY]);

  // Different depths parallax at different speeds
  const layer1X = useTransform(mouseX, [-1000, 1000], [20, -20]);
  const layer1Y = useTransform(mouseY, [-1000, 1000], [20, -20]);
  
  const layer2X = useTransform(mouseX, [-1000, 1000], [50, -50]);
  const layer2Y = useTransform(mouseY, [-1000, 1000], [50, -50]);

  const layer3X = useTransform(mouseX, [-1000, 1000], [90, -90]);
  const layer3Y = useTransform(mouseY, [-1000, 1000], [90, -90]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#090D0F]">
      
      {/* Layer 1: Distant Slow Mesh */}
      <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg viewBox="0 0 1000 800" className="w-full h-full min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <path d="M0,400 Q250,300 500,400 T1000,400" fill="none" stroke="var(--accent-base)" strokeWidth="1" />
          <path d="M0,600 Q250,500 500,600 T1000,600" fill="none" stroke="var(--accent-base)" strokeWidth="1" />
          <path d="M0,200 Q250,100 500,200 T1000,200" fill="none" stroke="var(--accent-base)" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Layer 2: Medium Structural Lines */}
      <motion.div style={{ x: layer2X, y: layer2Y }} className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
        <svg viewBox="0 0 1000 800" className="w-full h-full min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <path d="M300,0 L300,800 M700,0 L700,800 M500,0 L500,800" fill="none" stroke="var(--accent-base)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="400" r="150" fill="none" stroke="var(--accent-base)" strokeWidth="1" />
          <circle cx="500" cy="400" r="2" fill="var(--accent-base)" />
        </svg>
      </motion.div>

      {/* Layer 3: Foreground Interactive Particles */}
      <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
        <svg viewBox="0 0 1000 800" className="w-full h-full min-w-[1200px]" preserveAspectRatio="xMidYMid slice">
          <motion.circle cx="350" cy="250" r="3" fill="var(--accent-base)" 
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
          />
          <motion.circle cx="650" cy="550" r="4" fill="var(--accent-base)" 
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          />
          <motion.circle cx="750" cy="200" r="2" fill="var(--accent-base)" 
            animate={{ opacity: [0.1, 0.8, 0.1] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          />
          
          <path d="M350,250 L500,400 L650,550" fill="none" stroke="var(--accent-base)" strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      </motion.div>

      {/* Gradient Mask to fade out edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#090D0F_70%)] pointer-events-none" />
    </div>
  );
};
