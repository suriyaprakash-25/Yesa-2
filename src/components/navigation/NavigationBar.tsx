import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavigationBarProps {
  onOpenApply?: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'journey', label: 'Journey' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'fields', label: 'Fields' },
  { id: 'future', label: 'Future' },
];

export const NavigationBar: React.FC<NavigationBarProps> = ({ onOpenApply }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scrollspy calculation only on home route
      if (location.pathname === '/') {
        const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
        const scrollPosition = scrollY + window.innerHeight * 0.35;

        let currentActive = '';
        for (const section of sections) {
          if (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              currentActive = section.id;
              break;
            }
          }
        }
        setActiveSection(currentActive);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/?section=${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleApplyClick = () => {
    setMobileMenuOpen(false);
    if (onOpenApply) {
      onOpenApply();
    } else {
      navigate('/apply');
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none">
      {/* Unified Floating Pill Capsule Navbar */}
      <div className="w-full max-w-[1020px] pointer-events-auto rounded-full px-5 sm:px-7 py-2.5 sm:py-3 bg-white/95 dark:bg-[#101518]/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-between transition-all duration-300">
        
        {/* 1. Left Brand Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2.5 group cursor-pointer select-none focus-visible:outline-none"
          aria-label="YESA home"
        >
          <div className="w-7 h-7 rounded-full bg-[var(--text-primary)] text-[var(--color-bg-base)] flex items-center justify-center font-display font-black text-xs shadow-xs transition-transform duration-200 group-hover:scale-105">
            Y.
          </div>
          <span className="font-display font-black text-xl tracking-tight text-[var(--text-primary)]">
            YESA
          </span>
        </button>

        {/* 2. Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-[14px] transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* 3. Right Action Cluster: Theme Toggle + Pill CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Subtle Sun/Moon Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-[#38BDF8]" />
            ) : (
              <Sun className="w-4 h-4 text-[#007577]" />
            )}
          </button>

          {/* Soft Tinted Pill Action Button (matches reference design) */}
          <button
            id="nav-apply-btn"
            onClick={handleApplyClick}
            className="font-sans text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full bg-[#E5F2EC] text-[#0A4E3B] hover:bg-[#D7EADE] dark:bg-[#009D9E] dark:text-[#090D0F] dark:hover:bg-[#38BDF8] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            Apply to YESA
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[1020px] pointer-events-auto mt-2 rounded-2xl p-5 bg-white/95 dark:bg-[#101518]/95 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.12] shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-black/5 dark:bg-white/10 text-[var(--text-primary)] font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">
                  Theme: {theme}
                </span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-black/5 dark:bg-white/10 text-[var(--text-primary)] flex items-center gap-1.5"
                >
                  {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-[#38BDF8]" /> : <Sun className="w-3.5 h-3.5 text-[#007577]" />}
                  <span>Switch</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
