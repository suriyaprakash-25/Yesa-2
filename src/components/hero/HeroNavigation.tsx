import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';

interface HeroNavigationProps {
  onOpenApply: () => void;
  onNavigateSection?: (section: string) => void;
}

export const HeroNavigation: React.FC<HeroNavigationProps> = ({
  onOpenApply,
  onNavigateSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'journey', label: 'Journey' },
    { id: 'fields', label: 'Fields' },
    { id: 'experience', label: 'Experience' },
    { id: 'future', label: 'Future' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 ${
        scrolled
          ? 'bg-[#08090B]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Minimal Monolithic YESA Brand Mark */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-white to-[#94A3B8] p-[1px] shadow-[0_0_15px_rgba(255,255,255,0.12)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all">
              <div className="w-full h-full bg-[#08090B] rounded-[7px] flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-sm tracking-tighter">Y</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-[-0.03em] text-white">
                YESA
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#64748B] hidden sm:block">
                INCUBATOR
              </span>
            </div>
          </a>
        </div>

        {/* Center: Minimal Refined Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 px-6 py-2 rounded-full bg-[#0E1116]/60 border border-white/[0.06] backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateSection?.(item.id)}
              className="text-xs font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer tracking-wide relative group"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sky-400 group-hover:w-full transition-all duration-200" />
            </button>
          ))}
        </nav>

        {/* Right: 100% Free Badge & Prominent Apply CTA */}
        <div className="flex items-center gap-3.5">
          <Badge variant="emerald" dot className="hidden sm:inline-flex font-mono text-[10px] py-1">
            100% FREE
          </Badge>

          <Button
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            onClick={onOpenApply}
            className="shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Apply
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-4 rounded-2xl bg-[#0E1116]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigateSection?.(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-[#94A3B8] hover:text-white hover:bg-white/[0.04] transition-colors text-left"
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
              <span>Incubator for Future Leaders</span>
              <span className="font-mono text-emerald-400 font-medium">100% Free</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
