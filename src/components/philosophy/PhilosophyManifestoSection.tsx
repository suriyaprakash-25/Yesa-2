import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';
import { X, Check } from 'lucide-react';

export const PhilosophyManifestoSection: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] py-10 md:py-12 border-t border-[var(--border-subtle)] overflow-hidden transition-colors duration-300"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-dim)] rounded-full blur-3xl pointer-events-none opacity-40 dark:opacity-25" />

      <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* 1. Header Architectural Kicker */}
        <div className="flex items-center justify-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
          <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
          <span>THE YESA THESIS</span>
          <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
        </div>

        {/* 2. Bold Editorial Manifesto Headline */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial text-[clamp(2.2rem,5.5vw+1rem,4.8rem)] leading-[1.08] tracking-tight text-[var(--text-secondary)] mb-2 [overflow-wrap:normal] [word-break:keep-all]"
          >
            You don't need <span className="line-through decoration-[var(--accent-base)]/50 decoration-2 sm:decoration-3">another course</span>.
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial font-semibold text-[clamp(2.8rem,7vw+1.2rem,6rem)] leading-[1.02] tracking-tight text-[var(--text-primary)] [overflow-wrap:normal] [word-break:keep-all]"
          >
            You need a{' '}
            <span className="text-[var(--accent-base)] italic underline decoration-[var(--accent-base)]/30 underline-offset-8">
              path
            </span>
            .
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Traditional bootcamps charge thousands for passive video playlists. We built a 100% free incubator designed around live production execution, senior mentorship, and progressive velocity.
          </motion.p>
        </div>

        {/* 3. Dual-Panel Comparative Architectural Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Panel 1: The Tutorial Trap (What Doesn't Work) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 bg-[#F7F8F9] dark:bg-[#101518] border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between transition-colors duration-300"
          >
            <div>
              {/* Card Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[var(--text-secondary)] font-bold tracking-[0.2em] uppercase">
                  // 01 · THE TUTORIAL TRAP
                </span>
              </div>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight leading-tight mb-3">
                Passive Video Consuming
              </h4>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal mb-8">
                Pre-recorded curricula isolated from real-world stakes, leaving engineers unprepared for commercial production environments.
              </p>

              {/* Point-by-point deconstruction */}
              <ul className="space-y-4 font-sans text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>40+ hours of passive video watching with zero live accountability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Synthetic toy projects never deployed to real users or production traffic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Expensive tuition fees that create financial barriers before you even start.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 dark:bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>Generic certificates of completion that modern tech leaders ignore.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
              <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                Result: Stagnant velocity &amp; surface-level syntax
              </span>
            </div>
          </motion.div>

          {/* Panel 2: The YESA Architectural Path (What Works) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-10 bg-[#EDF8F6] dark:bg-[#0E1719] border border-[var(--accent-base)]/40 shadow-[0_8px_30px_rgba(0,157,158,0.08)] dark:shadow-[0_8px_32px_rgba(0,157,158,0.2)] flex flex-col justify-between transition-colors duration-300"
          >
            {/* Subtle glow edge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-base)]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Card Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[var(--accent-base)] font-bold tracking-[0.2em] uppercase">
                  // 02 · THE FELLOWSHIP FORMULA
                </span>
              </div>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight leading-tight mb-3">
                Active Production Velocity
              </h4>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal mb-8">
                Real-world immersion where candidates evolve through observation, commercial sprints, squad leadership, and venture scale.
              </p>

              {/* Point-by-point thesis */}
              <ul className="space-y-4 font-sans text-sm text-[var(--text-primary)]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-base)]/15 text-[var(--accent-base)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold">100% Free Incubator:</strong> Zero tuition fee, zero debt, purely merit-based selection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-base)]/15 text-[var(--accent-base)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold">Commercial Sprint Labs:</strong> Work on production modules alongside senior industry architects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-base)]/15 text-[var(--accent-base)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold">1-on-1 Senior Fellowship:</strong> Continuous architectural reviews and direct mentorship dialogue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent-base)]/15 text-[var(--accent-base)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="font-semibold">Global Leadership Trajectory:</strong> Graduate equipped to architect and scale real ventures.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--accent-base)]/20 flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--accent-base)] font-bold uppercase tracking-wider">
                Result: Proven architectural authority
              </span>
              <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};
