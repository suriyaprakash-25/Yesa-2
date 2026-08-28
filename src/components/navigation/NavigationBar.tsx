import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationBarProps {
  onOpenApply?: () => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'journey', label: 'JOURNEY' },
  { id: 'what-we-do', label: 'WHAT WE DO' },
  { id: 'fields', label: 'FIELDS' },
  { id: 'future', label: 'FUTURE' },
];

export const NavigationBar: React.FC<NavigationBarProps> = ({ onOpenApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

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
          ? 'py-3.5 bg-[#090D0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo "YESA" Left */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-4 rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <span className="text-[#090D0F] font-display font-black text-xs tracking-tighter">Y.</span>
          </div>
          <span className="font-display font-black text-xl tracking-wider text-white">
            YESA
          </span>
        </button>

        {/* Center-Right Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-mono text-xs tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer relative py-1.5 ${
                  isActive
                    ? 'text-[#009D9E] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#009D9E] shadow-[0_0_8px_rgba(0,157,158,0.8)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleApplyClick}
            className={`group relative inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              isApplyRoute
                ? 'bg-[#9AEDFC] text-[#090D0F] shadow-[0_0_20px_rgba(0,157,158,0.6)]'
                : 'text-[#090D0F] bg-[#009D9E] hover:bg-[#9AEDFC] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,157,158,0.4)] active:scale-95'
            }`}
          >
            <span>Apply</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#090D0F]/95 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden px-6 py-5"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-mono text-xs uppercase tracking-[0.18em] transition-colors text-left ${
                      isActive
                        ? 'bg-white/[0.06] text-[#009D9E] font-semibold border border-[#009D9E]/20'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />}
                  </button>
                );
              })}
              {/* Mobile Apply Button */}
              <button
                onClick={handleApplyClick}
                className="mt-2 w-full py-3 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-[#090D0F] bg-[#009D9E] hover:bg-[#9AEDFC] text-center transition-colors"
              >
                Apply to YESA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
