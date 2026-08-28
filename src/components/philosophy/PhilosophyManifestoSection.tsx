import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Container } from '../core/Container';

export const PhilosophyManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this pinned ~180vh section
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

  // Statement 2: "You need a path." in full white
  // Crossfades in from 0.48 to 0.72, remains solid full white
  const opacityStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [0, 1, 1]);
  const yStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [35, 0, 0]);
  const scaleStatement2 = useTransform(smoothProgress, [0.48, 0.72, 1], [0.95, 1, 1]);

  // Central connector line growing down
  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#090D0F]">
      {/* Pinned 130vh scroll interaction */}
      <div className="h-[130vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Central Architectural Spine */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.06] -translate-x-1/2 z-0">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#009D9E]/30 via-[#009D9E] to-[#9AEDFC] shadow-[0_0_10px_rgba(0,157,158,0.5)] origin-top relative"
              style={{ height: pathHeight }}
            >
              {/* Liquid Mercury Glowing Ball at the moving tip */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center pointer-events-none z-30">
                <div className="absolute w-5 h-5 rounded-full bg-[#009D9E]/25 blur-xs" />
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#00484A] via-[#9AEDFC] to-[#FFFFFF] p-[1px] shadow-[0_0_8px_rgba(154,237,252,0.7),0_0_4px_rgba(0,157,158,0.4)] border border-white/80">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#009D9E] to-[#041A1C] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white/95 blur-[0.2px]" />
                    <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_3px_#FFFFFF]" />
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
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8A8A] mb-4">
                THE REALITY
              </span>
              <h2 className="font-display font-black text-[#8A8A8A] tracking-[-0.03em] text-[clamp(2.4rem,6vw+1rem,5.5rem)] leading-[1.02] [overflow-wrap:normal] [word-break:keep-all]">
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-[#009D9E]/30 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                  THE FORMULA
                </span>
              </div>
              <h2 className="font-display font-black text-white tracking-[-0.04em] text-[clamp(3.2rem,8.5vw+1.5rem,7.5rem)] leading-[0.96] [overflow-wrap:normal] [word-break:keep-all]">
                YOU NEED<br />A PATH.
              </h2>
            </motion.div>

          </Container>

          {/* Ambient Subtle Glow */}
          <div className="absolute w-96 h-96 bg-[#009D9E]/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
