import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MagneticCTAProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const MagneticCTA: React.FC<MagneticCTAProps> = ({
  onClick,
  children = "Begin your journey",
  className = ""
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const { left, top, width, height } = btn.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F3F5F7] text-[#08090B] font-sans font-semibold text-sm sm:text-base tracking-wide cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_45px_rgba(56,189,248,0.45)] hover:bg-white transition-all duration-300 border border-white outline-none select-none ${className}`}
    >
      {/* Dynamic ambient halo */}
      <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-white to-sky-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />

      <span className="relative z-10 font-bold">{children}</span>

      <div className="relative z-10 w-6 h-6 rounded-full bg-[#08090B] text-white flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </motion.button>
  );
};
