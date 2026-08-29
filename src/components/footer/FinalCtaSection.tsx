import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenApply?: () => void;
}

// Decorative geometric shape cluster resting on top of the footer curve
const GeometricShapeCluster: React.FC = () => {
  const shapes = [
    { type: 'circle', color: 'bg-[#009D9E]', size: 'w-2.5 h-2.5', delay: 0 },
    { type: 'square', color: 'bg-[#F59E0B]', size: 'w-2.5 h-2.5', delay: 0.1 },
    { type: 'diamond', color: 'bg-[#38BDF8]', size: 'w-3 h-3', delay: 0.2 },
    { type: 'circle', color: 'bg-[#34D399]', size: 'w-2 h-2', delay: 0.15 },
    { type: 'square', color: 'bg-white/80', size: 'w-2 h-2', delay: 0.05 },
    { type: 'diamond', color: 'bg-[#F59E0B]', size: 'w-2.5 h-2.5', delay: 0.25 },
    { type: 'circle', color: 'bg-[#009D9E]', size: 'w-3 h-3', delay: 0.1 },
    { type: 'square', color: 'bg-[#38BDF8]', size: 'w-2.5 h-2.5', delay: 0.3 },
    { type: 'circle', color: 'bg-[#FDE68A]', size: 'w-2 h-2', delay: 0.18 },
    { type: 'diamond', color: 'bg-[#34D399]', size: 'w-2.5 h-2.5', delay: 0.22 },
    { type: 'square', color: 'bg-white/70', size: 'w-2 h-2', delay: 0.08 },
    { type: 'circle', color: 'bg-[#009D9E]', size: 'w-2.5 h-2.5', delay: 0.12 },
  ];

  return (
    <div className="absolute -top-3.5 sm:-top-4 left-8 sm:left-16 lg:left-24 z-20 flex items-center gap-1.5 sm:gap-2 pointer-events-none select-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          initial={{ y: 6, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: s.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`${s.size} ${s.color} ${
            s.type === 'circle'
              ? 'rounded-full'
              : s.type === 'diamond'
              ? 'rotate-45 rounded-[1px]'
              : 'rounded-[2px]'
          } shadow-sm`}
        />
      ))}
    </div>
  );
};

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenApply }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      navigate('/apply');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apply" className="relative w-full pt-10 md:pt-12 bg-[var(--color-bg-base)] transition-colors duration-300 overflow-visible">
      {/* Outer wrapper to contain the curved card */}
      <div className="w-full relative px-2 sm:px-4 lg:px-6">
        
        {/* Decorative Top Geometric Shape Cluster */}
        <GeometricShapeCluster />

        {/* The Grand Rounded Footer Card */}
        <div
          className="relative w-full rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] bg-[#0A1316] text-white pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 border-t border-white/[0.12] shadow-[0_-12px_40px_rgba(0,0,0,0.15)] overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '44px 44px',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent-base)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
            
            {/* 1. Top Row: Headline & Main Action Button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12 pb-10 sm:pb-12 border-b border-white/[0.08]">
              {/* Left: Heading & Subheading */}
              <div className="max-w-2xl text-left">
                <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.02] [overflow-wrap:normal] [word-break:keep-all]">
                  Join the fellowship!
                </h2>
                <p className="text-white/70 text-base sm:text-lg md:text-xl font-normal leading-relaxed mt-4 max-w-xl">
                  100% free incubator. Zero tuition barrier. A structured pathway from raw potential to recognized architectural leadership.
                </p>
              </div>

              {/* Right: Large Soft-Pill Action Button (matches reference design) */}
              <div className="flex items-center">
                <button
                  onClick={handleApply}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl sm:rounded-full bg-[#E5F4EC] hover:bg-white text-[#0A4E3B] font-sans font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer whitespace-nowrap"
                >
                  <span>Start Application</span>
                  <div className="w-8 h-8 rounded-full bg-[#0A4E3B]/10 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4 text-[#0A4E3B]" />
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Middle Row: Provenance / Location & Navigation Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-10 sm:py-14 border-b border-white/[0.08]">
              {/* Left: Status & Provenance */}
              <div className="flex flex-col gap-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-base)] font-bold">
                    YESA LABS
                  </span>
                </div>
                <p className="text-white/60 text-xs sm:text-sm font-light">
                  Autonomous Incubator Ecosystem · Architecting Future Leaders.
                </p>
              </div>

              {/* Right: Horizontal Nav Links */}
              <nav className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10" aria-label="Footer Navigation">
                <button
                  onClick={() => scrollToSection('journey')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Journey
                </button>
                <button
                  onClick={() => scrollToSection('what-we-do')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection('fields')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Fields
                </button>
                <button
                  onClick={() => scrollToSection('future')}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Future
                </button>
                <button
                  onClick={handleApply}
                  className="font-sans text-sm text-[var(--accent-light)] hover:text-white font-semibold transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </nav>
            </div>

            {/* 3. Bottom Row: Massive Display Watermark Logo */}
            <div className="pt-10 sm:pt-14 pb-4 pointer-events-none select-none flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full text-center">
                <span className="font-display font-black text-[21vw] leading-[0.72] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/50 to-white/10 block select-none">
                  YES<span className="text-[var(--accent-base)]">A</span>
                </span>
              </div>
            </div>

            {/* 4. Legal / Copyright Bar */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50 border-t border-white/[0.06]">
              <div className="flex items-center gap-6">
                <button onClick={() => {}} className="hover:text-white/80 transition-colors cursor-pointer">
                  Terms &amp; conditions
                </button>
                <span>·</span>
                <button onClick={() => {}} className="hover:text-white/80 transition-colors cursor-pointer">
                  Privacy policy
                </button>
              </div>
              <div>
                © {new Date().getFullYear()} YESA Labs. All rights reserved.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
