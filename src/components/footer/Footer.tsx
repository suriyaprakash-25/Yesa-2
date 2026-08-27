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
    <footer className="w-full bg-[#08090B] border-t border-white/5 py-8 md:py-12 relative z-20">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Minimal Branding */}
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-xl text-white tracking-wide">YESA</span>
          <div className="w-px h-4 bg-white/20" />
          <span className="font-mono-tag text-white/40 uppercase tracking-widest text-xs">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Right: Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button 
            onClick={() => scrollTo('journey')}
            className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Journey
          </button>
          <button 
            onClick={() => scrollTo('fields')}
            className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Fields
          </button>
          <button 
            onClick={() => scrollTo('experience')}
            className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollTo('future')}
            className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Future
          </button>
          <button 
            onClick={() => scrollTo('apply')}
            className="font-mono text-xs uppercase tracking-widest text-sky-400 hover:text-sky-300 transition-colors ml-4 md:ml-8"
          >
            Apply
          </button>
        </nav>

      </Container>
    </footer>
  );
};
