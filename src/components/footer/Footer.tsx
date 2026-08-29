import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../core/Container';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (id === 'apply') {
      navigate('/apply');
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/?section=${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // When on the home page, the grand unified footer card in FinalCtaSection renders the complete footer
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="w-full bg-[var(--footer-bg)] border-t border-[var(--footer-border)] py-6 md:py-8 relative z-20 transition-colors duration-300">
      <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (location.pathname !== '/') navigate('/');
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display font-black text-2xl text-[var(--footer-heading)] tracking-tight cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] rounded"
            >
              YESA
            </button>
            <div className="w-[1px] h-4 bg-[var(--border-subtle)]" />
            <span className="font-mono text-xs text-[var(--footer-text)]">
              © {new Date().getFullYear()}
            </span>
          </div>
          <span className="font-mono text-xs text-[var(--footer-text)] hidden sm:inline">
            · Incubator for Future Leaders · 100% Free
          </span>
        </div>

        {/* Center/Right: Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8" aria-label="Footer Navigation">
          <button
            onClick={() => scrollTo('journey')}
            className="font-mono text-xs uppercase tracking-widest text-[var(--footer-text)] hover:text-[var(--footer-heading)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2 rounded"
          >
            Journey
          </button>
          <button
            onClick={() => scrollTo('what-we-do')}
            className="font-mono text-xs uppercase tracking-widest text-[var(--footer-text)] hover:text-[var(--footer-heading)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2 rounded"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollTo('fields')}
            className="font-mono text-xs uppercase tracking-widest text-[var(--footer-text)] hover:text-[var(--footer-heading)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2 rounded"
          >
            Fields
          </button>
          <button
            onClick={() => scrollTo('future')}
            className="font-mono text-xs uppercase tracking-widest text-[var(--footer-text)] hover:text-[var(--footer-heading)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2 rounded"
          >
            Future
          </button>
          <button
            onClick={() => scrollTo('apply')}
            className="font-mono text-xs uppercase tracking-widest text-[var(--accent-base)] hover:text-[var(--accent-light)] font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2 rounded"
          >
            Apply
          </button>
        </nav>
      </Container>
    </footer>
  );
};
