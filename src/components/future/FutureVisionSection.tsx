import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '../core/Container';
import { BranchingPathVisualizer } from './BranchingPathVisualizer';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    mass: 0.6,
  });

  // Step 1: Word stack progressive lighting (0.0 -> 0.28) with bright baseline clarity
  const word1Opacity = useTransform(smoothProgress, [0, 0.08, 0.22], [1, 0.75, 0.6]);
  const word1Scale = useTransform(smoothProgress, [0, 0.08, 0.22], [1.08, 1, 0.96]);

  const word2Opacity = useTransform(smoothProgress, [0.06, 0.14, 0.24], [0.65, 1, 0.65]);
  const word2Scale = useTransform(smoothProgress, [0.06, 0.14, 0.24], [0.96, 1.08, 0.96]);

  const word3Opacity = useTransform(smoothProgress, [0.12, 0.20, 0.28], [0.65, 1, 0.65]);
  const word3Scale = useTransform(smoothProgress, [0.12, 0.20, 0.28], [0.96, 1.08, 0.96]);

  const word4Opacity = useTransform(smoothProgress, [0.18, 0.26, 0.32], [0.65, 1, 1]);
  const word4Scale = useTransform(smoothProgress, [0.18, 0.26, 0.32], [0.96, 1.12, 1.12]);

  // Word Stack fades out cleanly by 0.32
  const stackOpacity = useTransform(smoothProgress, [0, 0.22, 0.32], [1, 0.7, 0]);
  const stackY = useTransform(smoothProgress, [0, 0.32], [0, -25]);

  // Step 2: "IN THE FUTURE" Header & Origin Diagram emerge at 0.30 -> 0.42
  const headerOpacity = useTransform(smoothProgress, [0.30, 0.42], [0, 1]);
  const headerY = useTransform(smoothProgress, [0.30, 0.42], [20, 0]);
  const branchOpacity = useTransform(smoothProgress, [0.32, 0.44], [0, 1]);

  // Step 3: Both Pathway Cards are fully revealed right at the midpoint of scroll (0.38 -> 0.52), staying fully visible through 1.0
  const cardsOpacity = useTransform(smoothProgress, [0.38, 0.52, 1], [0, 1, 1]);
  const cardsY = useTransform(smoothProgress, [0.38, 0.52, 1], [25, 0, 0]);
  const cardsScale = useTransform(smoothProgress, [0.38, 0.52, 1], [0.96, 1, 1]);

  return (
    <section id="future" ref={containerRef} className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* 160vh pinned scroll interaction */}
      <div className="h-[160vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16 w-full relative z-10">
            {/* Phase 1: Progressive Word-Stack (0.0 -> 0.32) */}
            <motion.div
              style={{ opacity: stackOpacity, y: stackY }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                  FUTURE PROGRESSION
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-6 font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
                <motion.span style={{ opacity: word1Opacity, scale: word1Scale }} className="text-[#8896A6] dark:text-[#94A3B8]">
                  LEARNING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-[var(--border-medium)]" />
                <motion.span
                  style={{ opacity: word2Opacity, scale: word2Scale }}
                  className="text-[#009D9E] dark:text-[#00C2C4] drop-shadow-[0_0_16px_rgba(0,157,158,0.2)]"
                >
                  BUILDING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-[var(--border-medium)]" />
                <motion.span style={{ opacity: word3Opacity, scale: word3Scale }} className="text-[#8896A6] dark:text-[#94A3B8]">
                  LEADING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-[var(--border-medium)]" />
                <motion.span
                  style={{ opacity: word4Opacity, scale: word4Scale }}
                  className="text-[#8896A6] dark:text-[#94A3B8]"
                >
                  CREATING
                </motion.span>
              </div>
            </motion.div>

            {/* Phase 2: Centered Two Pathways Revealed at Mid-Scroll */}
            <div className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto py-2">
              {/* 1. Header (Top) */}
              <motion.div
                style={{ opacity: headerOpacity, y: headerY }}
                className="text-center mb-2 z-10"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] mb-2.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent-base)]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-base)] font-semibold">
                    IN THE FUTURE
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
                  Two Pathways for Future Leaders.
                </h3>
              </motion.div>

              {/* 2. Visual Branching Path */}
              <motion.div
                style={{ opacity: branchOpacity }}
                className="w-full max-w-4xl px-4 sm:px-6"
              >
                <BranchingPathVisualizer progress={smoothProgress} />
              </motion.div>

              {/* 3. Both Pathway Cards Positioned at Mid-Screen */}
              <motion.div
                style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full relative z-10 -mt-1"
              >
                {/* Path 01 Card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] hover:border-[var(--accent-base)]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  {/* Top Connector Anchor Node */}
                  <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-base)] border border-[var(--accent-light)] shadow-[var(--shadow-glow-accent)]" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[var(--accent-base)] tracking-widest uppercase">
                        PATHWAY 01
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-glow)] text-[var(--accent-base)] font-semibold">
                        INTERNAL SQUAD
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-2.5 tracking-tight">
                      Work on our idea.
                    </h4>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                      As participants become experienced leaders, they may contribute to and architect
                      cutting-edge initiatives being developed directly within YESA.
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent-base)] font-semibold">
                    <span>Direct Impact</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Path 02 Card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] hover:border-[var(--accent-base)]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  {/* Top Connector Anchor Node */}
                  <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent-base)] border border-[var(--accent-light)] shadow-[var(--shadow-glow-accent)]" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[var(--accent-base)] tracking-widest uppercase">
                        PATHWAY 02
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-glow)] text-[var(--accent-base)] font-semibold">
                        VENTURE BACKING
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-[var(--text-primary)] mb-2.5 tracking-tight">
                      We invest in your idea.
                    </h4>

                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                      YESA’s long-term vision includes backing and investing in the most promising ideas,
                      technologies, and autonomous ventures founded by its fellows.
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--accent-base)] font-semibold">
                    <span>Incubator Capital</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>

      {/* Spacious, Emotional Statement */}
      <div className="relative w-full py-18 md:py-24 border-t border-[var(--border-subtle)] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent-dim),transparent_70%)] pointer-events-none" />

        <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent-base)] font-semibold block mb-8">
              THE YESA PHILOSOPHY
            </span>

            <h2 className="font-editorial font-normal md:font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--text-primary)] tracking-tight leading-[1.08] [overflow-wrap:normal] [word-break:keep-all]">
              Your journey<br />can become someone else's<br />
              <span className="text-[var(--accent-base)] dark:text-[#9AEDFC] italic">beginning.</span>
            </h2>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
