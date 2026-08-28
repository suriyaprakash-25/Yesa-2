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

  // Step 1: Word stack progressive lighting (0.0 -> 0.28)
  const word1Opacity = useTransform(smoothProgress, [0, 0.08, 0.22], [1, 0.4, 0.2]);
  const word1Scale = useTransform(smoothProgress, [0, 0.08, 0.22], [1.08, 1, 0.95]);

  const word2Opacity = useTransform(smoothProgress, [0.06, 0.14, 0.24], [0.3, 1, 0.3]);
  const word2Scale = useTransform(smoothProgress, [0.06, 0.14, 0.24], [0.95, 1.08, 0.95]);

  const word3Opacity = useTransform(smoothProgress, [0.12, 0.20, 0.28], [0.3, 1, 0.3]);
  const word3Scale = useTransform(smoothProgress, [0.12, 0.20, 0.28], [0.95, 1.08, 0.95]);

  const word4Opacity = useTransform(smoothProgress, [0.18, 0.26, 0.32], [0.3, 1, 1]);
  const word4Scale = useTransform(smoothProgress, [0.18, 0.26, 0.32], [0.95, 1.12, 1.12]);

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
    <section id="future" ref={containerRef} className="relative w-full bg-[#090D0F] text-white">
      {/* 160vh pinned scroll interaction */}
      <div className="h-[160vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16 w-full relative z-10">
            {/* Phase 1: Progressive Word-Stack (0.0 -> 0.32) */}
            <motion.div
              style={{ opacity: stackOpacity, y: stackY }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                  FUTURE PROGRESSION
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-6 font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
                <motion.span style={{ opacity: word1Opacity, scale: word1Scale }} className="text-white">
                  LEARNING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-white/15" />
                <motion.span style={{ opacity: word2Opacity, scale: word2Scale }} className="text-[#9AEDFC]">
                  BUILDING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-white/15" />
                <motion.span style={{ opacity: word3Opacity, scale: word3Scale }} className="text-white">
                  LEADING
                </motion.span>
                <div className="w-[1px] h-4 sm:h-6 bg-white/15" />
                <motion.span
                  style={{ opacity: word4Opacity, scale: word4Scale }}
                  className="text-white drop-shadow-[0_0_20px_rgba(0,157,158,0.6)]"
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#009D9E]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                    IN THE FUTURE
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
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
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[#131719] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#009D9E]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  {/* Top Connector Anchor Node */}
                  <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#009D9E] border border-[#9AEDFC] shadow-[0_0_10px_#009D9E]" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#009D9E] tracking-widest uppercase">
                        PATHWAY 01
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#009D9E]/15 border border-[#009D9E]/30 text-[#9AEDFC]">
                        INTERNAL SQUAD
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2.5 tracking-tight">
                      Work on our idea.
                    </h4>

                    <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                      As participants become experienced leaders, they may contribute to and architect
                      cutting-edge initiatives being developed directly within YESA.
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#009D9E]">
                    <span>Institutional Track</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Path 02 Card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-[#131719] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#9AEDFC]/50 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
                  {/* Top Connector Anchor Node */}
                  <div className="hidden md:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#9AEDFC] border border-[#009D9E] shadow-[0_0_10px_#9AEDFC]" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#9AEDFC] tracking-widest uppercase">
                        PATHWAY 02
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#9AEDFC]/15 border border-[#9AEDFC]/30 text-[#9AEDFC]">
                        VENTURE BACKING
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-2.5 tracking-tight">
                      We invest in your idea.
                    </h4>

                    <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                      YESA’s long-term vision includes backing and investing in the most promising ideas,
                      technologies, and autonomous ventures founded by its fellows.
                    </p>
                  </div>

                  <div className="pt-3.5 mt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#9AEDFC]">
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
      <div className="relative w-full py-18 md:py-24 border-t border-white/[0.06] flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,157,158,0.08),transparent_70%)] pointer-events-none" />

        <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#009D9E] font-semibold block mb-8">
              THE YESA PHILOSOPHY
            </span>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02] [overflow-wrap:normal] [word-break:keep-all]">
              Your journey<br />can become someone else's<br />
              <span className="text-[#9AEDFC]">beginning.</span>
            </h2>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
