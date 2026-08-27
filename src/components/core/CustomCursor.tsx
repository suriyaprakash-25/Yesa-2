import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isEnabled] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics-based spring interpolation for sleek movement
  const springX = useSpring(cursorX, { stiffness: 600, damping: 35, mass: 0.1 });
  const springY = useSpring(cursorY, { stiffness: 600, damping: 35, mass: 0.1 });

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, [role="button"], [role="tab"], input, textarea, select, label, .cursor-pointer, [data-cursor-interactive]')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isEnabled]);

  if (!isEnabled || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: isHovered ? 40 : isClicked ? 6 : 8,
        height: isHovered ? 40 : isClicked ? 6 : 8,
        backgroundColor: isHovered ? 'transparent' : '#009D9E',
        borderColor: isHovered ? '#9AEDFC' : 'transparent',
        borderWidth: isHovered ? '1.5px' : '0px',
        boxShadow: isHovered
          ? '0 0 16px rgba(0, 157, 158, 0.4), inset 0 0 8px rgba(0, 157, 158, 0.2)'
          : '0 0 10px rgba(0, 157, 158, 0.8)',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 450,
        damping: 28,
        mass: 0.12,
      }}
    >
      {/* Inner subtle center dot when hovered */}
      {isHovered && (
        <div className="w-1 h-1 rounded-full bg-[#9AEDFC] shadow-[0_0_6px_#9AEDFC]" />
      )}
    </motion.div>
  );
};
