import React from 'react';
import { Container } from '../core/Container';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#090D0F] border-t border-white/[0.08] py-12 md:py-16 relative z-20">
      <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-2xl text-white tracking-tight">YESA</span>
            <div className="w-[1px] h-4 bg-white/20" />
            <span className="font-mono text-xs text-[#8A8A8A]">
              © {new Date().getFullYear()}
            </span>
          </div>
          <span className="font-mono text-xs text-[#8A8A8A] hidden sm:inline">
            · Incubator for Future Leaders · 100% Free
          </span>
        </div>

        {/* Center/Right: Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8" aria-label="Footer Navigation">
          <button
            onClick={() => scrollTo('journey')}
            className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2 rounded"
          >
            Journey
          </button>
          <button
            onClick={() => scrollTo('fields')}
            className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2 rounded"
          >
            Fields
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2 rounded"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo('future')}
            className="font-mono text-xs uppercase tracking-widest text-[#8A8A8A] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2 rounded"
          >
            Future
          </button>
          <button
            onClick={() => scrollTo('apply')}
            className="font-mono text-xs uppercase tracking-widest text-[#009D9E] hover:text-[#9AEDFC] font-semibold transition-colors cursor-pointer"
          >
            Apply
          </button>
        </nav>

      </Container>
    </footer>
  );
};
