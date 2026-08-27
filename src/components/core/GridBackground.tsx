import React, { useEffect, useRef } from 'react';

export const GridBackground: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateOpacity = () => {
      if (divRef.current) {
        const scrollY = window.scrollY;
        const opacity = 0.02 + Math.abs(Math.sin(scrollY / 1000)) * 0.03;
        divRef.current.style.opacity = String(opacity);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateOpacity);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={divRef}
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{
        opacity: 0.02,
        backgroundSize: '60px 60px',
        backgroundImage: `
          linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
        `,
        transition: 'opacity 0.15s ease-out',
        willChange: 'opacity',
      }}
    />
  );
};
