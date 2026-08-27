import React, { useEffect, useState } from 'react';

export const GridBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scroll position to a subtle opacity fluctuation (e.g. between 0.02 and 0.05)
  // Simple sine wave based on scroll
  const opacity = 0.02 + Math.abs(Math.sin(scrollY / 1000)) * 0.03;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
      style={{
        opacity,
        backgroundSize: '60px 60px',
        backgroundImage: `
          linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
          linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
        `,
        transition: 'opacity 0.2s ease-out'
      }}
    />
  );
};
