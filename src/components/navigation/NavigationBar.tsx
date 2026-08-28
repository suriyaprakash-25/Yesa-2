import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

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
    handleScroll(); // Initial check
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

  const isApplyRoute = location.pathname === '/apply';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isApplyRoute
          ? 'py-3 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-[var(--shadow-subtle)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* 1. Left Brand Logo "YESA" */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-4 rounded-lg"
          aria-label="YESA home"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--color-bg-base)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm">
            <span className="font-display font-black text-xs tracking-tighter">Y.</span>
          </div>
          <span className="font-display font-black text-xl tracking-wider text-[var(--text-primary)]">
            YESA
          </span>
        </button>

        {/* 2. Center Pill/Capsule Enclosed Navigation Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--nav-pill-bg)] border border-[var(--nav-pill-border)] backdrop-blur-md shadow-[var(--shadow-subtle)]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-semibold'
                    : 'text-[var(--nav-link-color)] hover:text-[var(--nav-link-hover)] hover:bg-[var(--nav-active-bg)]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[var(--nav-active-bg)] border border-[var(--nav-active-border)] -z-10 shadow-inner"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* 3. Right Action Cluster: Theme Toggle, Apply Pill & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Circular Theme Toggle Button (Sun / Moon) */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--nav-btn-bg)] border border-[var(--nav-btn-border)] hover:border-[var(--nav-btn-hover-border)] text-[var(--nav-btn-text)] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -45, opacity: 0, scale: 0.75 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.75 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center text-[#9AEDFC]"
                >
                  <Moon className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -45, opacity: 0, scale: 0.75 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.75 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center text-[#007577]"
                >
                  <Sun className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Outlined Pill Button with Accent Circular Arrow Tile */}
          <button
            id="nav-apply-btn"
            onClick={handleApplyClick}
            className={`group relative inline-flex items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
              isApplyRoute
                ? 'bg-[var(--accent-dim)] border-[var(--accent-base)] text-[var(--text-primary)] shadow-[0_0_15px_var(--accent-glow)]'
                : 'bg-[var(--nav-btn-bg)] hover:bg-[var(--nav-active-bg)] border-[var(--nav-btn-border)] hover:border-[var(--nav-btn-hover-border)] text-[var(--nav-btn-text)]'
            }`}
          >
            <span className="font-sans text-xs font-medium tracking-wide">
              Apply
            </span>
            <div className="w-7 h-7 rounded-full bg-[var(--accent-base)] group-hover:bg-[var(--accent-light)] text-[var(--color-bg-base)] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[var(--nav-btn-bg)] border border-[var(--nav-btn-border)] text-[var(--text-primary)] hover:bg-[var(--nav-active-bg)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--nav-bg)] backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1 p-2 rounded-2xl bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)]">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-2.5 rounded-xl font-sans text-sm tracking-wide transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[var(--accent-base)] bg-[var(--accent-dim)] font-semibold'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--nav-active-bg)]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleApplyClick}
                  className="flex-1 flex items-center justify-between px-5 py-3 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--accent-base)] text-[var(--text-primary)] font-sans text-sm font-semibold tracking-wide hover:bg-[var(--accent-dim)] transition-colors shadow-sm"
                >
                  <span>Apply to YESA</span>
                  <div className="w-7 h-7 rounded-full bg-[var(--accent-base)] text-[var(--color-bg-base)] flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
