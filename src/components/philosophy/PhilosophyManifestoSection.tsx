import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '../core/Container';

export const PhilosophyManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this pinned ~130vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    mass: 0.4,
  });

  // Statement 1: "You don't need another course." in muted gray
  // Fades out smoothly as user scrolls past 0.4
  const opacityStatement1 = useTransform(smoothProgress, [0, 0.28, 0.48], [1, 1, 0]);
  const yStatement1 = useTransform(smoothProgress, [0, 0.28, 0.48], [0, 0, -35]);
  const scaleStatement1 = useTransform(smoothProgress, [0, 0.48], [1, 0.95]);

  // Statement 2: "You need a path." in full primary text with accent emphasis
  // Crossfades in from 0.48 to 0.72, remains solid
  const opacityStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [0, 1, 1]);
  const yStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [35, 0, 0]);
  const scaleStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [0.95, 1, 1]);

  // Central connector line growing down
  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--color-bg-base)] transition-colors duration-300">
      {/* Pinned 130vh scroll interaction */}
      <div className="h-[130vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Central Architectural Spine */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-[var(--border-subtle)] -translate-x-1/2 z-0">
            <motion.div 
              className="w-full bg-gradient-to-b from-[var(--accent-base)]/40 via-[var(--accent-base)] to-[var(--accent-light)] shadow-[var(--shadow-glow-accent)] origin-top relative"
              style={{ height: pathHeight }}
            >
              {/* Liquid Mercury / Precision Indicator at moving tip */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center pointer-events-none z-30">
                <div className="absolute w-5 h-5 rounded-full bg-[var(--accent-base)]/25 blur-xs" />
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[var(--accent-base)] via-[var(--accent-light)] to-white p-[1px] shadow-sm border border-white/80">
                  <div className="w-full h-full rounded-full bg-[var(--accent-base)] relative overflow-hidden flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <Container className="relative z-10 w-full text-center">
            
            {/* Statement 1: "YOU DON'T NEED ANOTHER COURSE." */}
            <motion.div 
              style={{ 
                opacity: opacityStatement1, 
                y: yStatement1, 
                scale: scaleStatement1 
              }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] mb-4">
                THE REALITY
              </span>
              <h2 className="font-editorial font-medium text-[var(--text-secondary)] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw+1rem,5rem)] leading-[1.08] [overflow-wrap:normal] [word-break:keep-all]">
                YOU DON'T NEED<br />ANOTHER COURSE.
              </h2>
            </motion.div>

            {/* Statement 2: "YOU NEED A PATH." */}
            <motion.div 
              style={{ 
                opacity: opacityStatement2, 
                y: yStatement2, 
                scale: scaleStatement2 
              }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
            >
              <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
                <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
                <span>THE FORMULA</span>
                <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
              </div>
              <h2 className="font-editorial font-medium md:font-semibold text-[var(--text-primary)] tracking-[-0.025em] text-[clamp(3rem,8vw+1.2rem,7rem)] leading-[1.04] [overflow-wrap:normal] [word-break:keep-all]">
                YOU NEED<br />
                <span className="text-[var(--accent-base)] italic underline decoration-[var(--accent-base)]/30 decoration-4 underline-offset-8">
                  A PATH.
                </span>
              </h2>
            </motion.div>

          </Container>

          {/* Ambient Subtle Glow */}
          <div className="absolute w-96 h-96 bg-[var(--accent-dim)] rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
