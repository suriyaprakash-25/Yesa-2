import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../core/Button';
import { Badge } from '../core/Badge';

interface HeaderProps {
  activeTab: 'experience' | 'philosophy' | 'journey' | 'offerings' | 'venture' | 'specimen';
  onSelectTab: (tab: 'experience' | 'philosophy' | 'journey' | 'offerings' | 'venture' | 'specimen') => void;
  onOpenApply: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab = 'experience',
  onSelectTab,
  onOpenApply,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: Array<{ id: 'experience' | 'philosophy' | 'journey' | 'offerings' | 'venture' | 'specimen'; label: string; tag?: string }> = [
    { id: 'experience', label: 'Experience' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'journey', label: 'The Ascent', tag: '6 STAGES' },
    { id: 'offerings', label: 'Provisions' },
    { id: 'venture', label: 'Venture' },
    { id: 'specimen', label: 'Design System', tag: 'TOKENS' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-5 py-3 rounded-2xl bg-[#0E1116]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Brand Wordmark & Institutional Kicker */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onSelectTab('experience')}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            >
              {/* Minimalist Monolithic Symbol */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-white to-[#CBD5E1] p-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all">
                <div className="w-full h-full bg-[#08090B] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-extrabold text-white text-sm tracking-tighter">Y</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg tracking-[-0.03em] text-white">YESA</span>
                  <span className="hidden sm:inline-block font-mono text-[10px] uppercase text-[#64748B] tracking-widest px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    INCUBATOR
                  </span>
                </div>
                <span className="text-[11px] text-[#94A3B8] font-sans tracking-tight hidden md:block">
                  Incubator for Future Leaders
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#08090B]/60 p-1.5 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/[0.03]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeHeaderPill"
                      className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.15] shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {link.tag && (
                    <span className="relative z-10 font-mono text-[9px] px-1 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      {link.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Status Pill */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center">
              <Badge variant="emerald" dot className="font-mono text-[11px] py-1 tracking-wider">
                100% FREE
              </Badge>
            </div>

            <Button 
              variant="primary" 
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              onClick={onOpenApply}
            >
              Apply for Ascent
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 p-4 rounded-2xl bg-[#0E1116]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-3"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      onSelectTab(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      activeTab === link.id
                        ? 'bg-white/[0.08] text-white border border-white/[0.1]'
                        : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.tag && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">
                        {link.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#94A3B8]">
                <span>Incubator for Future Leaders</span>
                <span className="font-mono text-emerald-400">100% Free</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
