import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { Badge } from '../core/Badge';

interface FinalCTAFooterProps {
  onOpenApply: () => void;
  onNavigateSection?: (section: string) => void;
}

export const FinalCTAFooter: React.FC<FinalCTAFooterProps> = ({
  onOpenApply,
  onNavigateSection,
}) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'journey', label: 'Journey' },
    { id: 'fields', label: 'Fields' },
    { id: 'experience', label: 'Experience' },
    { id: 'future', label: 'Future' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="apply-cta" className="relative bg-[#08090B] pt-24 pb-12 overflow-hidden selection:bg-sky-500/20">
      
      {/* ── 1. The Ascent Path Convergence: Line Resolves into the CTA ── */}
      <div className="relative flex flex-col items-center justify-center mb-16">
        
        {/* Continuous descending line from Future section */}
        <div className="w-px h-28 bg-gradient-to-b from-purple-400/50 via-sky-400/60 to-white" />
        
        {/* Convergence Concentric Rings */}
        <div className="relative flex items-center justify-center -mt-2">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-sky-400/20"
              style={{
                width: ring * 48,
                height: ring * 48,
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2.8 + ring * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: ring * 0.2,
              }}
            />
          ))}

          {/* Focal Convergence Core */}
          <div className="relative z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            <div className="w-3 h-3 rounded-full bg-[#08090B]" />
          </div>
        </div>

        <div className="font-mono text-[10px] tracking-[0.25em] text-sky-400/80 mt-6 uppercase">
          THE PATHWAY CONVERGENCE
        </div>
      </div>

      <Container size="lg" className="relative z-10">
        
        {/* ── 2. The Core Editorial Message ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6"
          >
            <Sparkles className="w-3 h-3 text-sky-400" />
            <span className="font-mono text-[10px] tracking-widest text-[#94A3B8] uppercase">
              YOUR BEGINNING AWAITS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-[-0.04em] leading-[1.05] mb-6"
          >
            "Your journey starts <br />
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              with a choice."
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-semibold text-xl sm:text-2xl text-[#CBD5E1] tracking-tight mb-2"
          >
            Choose your field. <span className="text-[#64748B] font-normal">We provide the path.</span>
          </motion.p>
        </div>

        {/* ── 3. Dominant Primary CTA Interaction (The Centerpiece Action) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-xl mx-auto mb-28"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-white/10 to-purple-500/20 blur-3xl rounded-3xl pointer-events-none" />

          <div className="relative rounded-3xl bg-[#0E1116]/90 border border-white/20 p-8 sm:p-12 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] group hover:border-sky-400/50 transition-all duration-500">
            
            {/* 100% Free Reassurance Pill */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="emerald" dot className="font-mono text-[10px] py-0.5 tracking-wider">
                100% FREE
              </Badge>
              <span className="font-mono text-xs text-[#64748B]">·</span>
              <span className="font-mono text-xs text-[#94A3B8]">ZERO TUITION FEES</span>
            </div>

            {/* The Dominant Master Action Button */}
            <motion.button
              onClick={onOpenApply}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 px-8 rounded-2xl bg-white text-[#08090B] font-display font-extrabold text-xl sm:text-2xl tracking-tight flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] hover:bg-[#F3F5F7] transition-all cursor-pointer"
            >
              <span>Apply to YESA</span>
              <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
            </motion.button>

            {/* Reassurance Grid */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Cohort Mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Real-World Projects</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Paid Progression</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Leadership Incubation</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── 4. Final Monumental Brand Moment ── */}
        <div className="relative py-16 border-t border-white/[0.08] text-center select-none">
          <div className="flex flex-col items-center justify-center">
            
            {/* Monogram Seal */}
            <div className="w-14 h-14 rounded-2xl bg-white p-[1px] shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-4">
              <div className="w-full h-full bg-[#08090B] rounded-[15px] flex items-center justify-center">
                <span className="font-display font-extrabold text-white text-2xl tracking-tighter">Y</span>
              </div>
            </div>

            {/* Giant Monolithic Brand Name */}
            <h1
              className="font-display font-black tracking-[-0.05em] text-white leading-none mb-3"
              style={{
                fontSize: 'clamp(4.5rem, 15vw, 11rem)',
                letterSpacing: '-0.06em',
              }}
            >
              YESA
            </h1>

            {/* Tagline */}
            <div className="font-display font-semibold text-lg sm:text-2xl text-[#94A3B8] tracking-tight">
              Incubator for Future Leaders
            </div>

            <div className="font-mono text-xs text-[#64748B] mt-2 tracking-widest uppercase">
              "CHOOSE YOUR FIELD. WE PROVIDE THE PATH."
            </div>
          </div>
        </div>

        {/* ── 5. Minimal Institutional Footer Bar ── */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#64748B]">
              © {currentYear} YESA. All rights reserved.
            </span>
            <Badge variant="emerald" dot className="font-mono text-[9px] py-0.5">
              100% FREE
            </Badge>
          </div>

          {/* Center: Clean Institutional Navigation */}
          <nav className="flex items-center flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigateSection?.(link.id)}
                className="font-mono text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer tracking-wider uppercase"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenApply}
              className="font-mono text-xs text-sky-400 hover:text-sky-300 transition-colors cursor-pointer tracking-wider uppercase font-semibold flex items-center gap-1"
            >
              <span>Apply</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Right: Scroll to top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 font-mono text-xs text-[#64748B] hover:text-white transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>

        </div>

      </Container>
    </footer>
  );
};

export default FinalCTAFooter;
