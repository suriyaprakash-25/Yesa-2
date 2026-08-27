import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';
import { ScrollPathConnector } from '../visual/ScrollPathConnector';

export const PhilosophyManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. First statement (Course)
  const opacityStatement1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [1, 1, 0]);
  const yStatement1 = useTransform(scrollYProgress, [0, 0.25, 0.45], [0, 0, -50]);
  const scaleStatement1 = useTransform(scrollYProgress, [0, 0.45], [1, 0.95]);

  // 2. Second statement (Path) - massive scale
  const opacityStatement2 = useTransform(scrollYProgress, [0.55, 0.75, 0.9, 1], [0, 1, 1, 0]);
  const yStatement2 = useTransform(scrollYProgress, [0.55, 0.75, 0.9, 1], [50, 0, 0, -50]);
  const scaleStatement2 = useTransform(scrollYProgress, [0.55, 0.75, 0.9, 1], [0.9, 1, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#08090B]">
      
      {/* 
        ========================================================
        PART 1: THE STICKY NARRATIVE (150vh tall)
        ========================================================
      */}
      <div className="h-[150vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Path Continuation connecting from Hero */}
          <ScrollPathConnector progress={scrollYProgress} height="100vh" className="top-0" />

          <Container className="relative z-10 w-full text-center">
            
            {/* Statement 1 */}
            <motion.div 
              style={{ opacity: opacityStatement1, y: yStatement1, scale: scaleStatement1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
            >
              <DisplayHeading className="text-white/40 tracking-tight text-[clamp(2.5rem,5vw+1rem,5rem)]">
                YOU DON'T NEED<br/>ANOTHER COURSE.
              </DisplayHeading>
            </motion.div>

            {/* Statement 2 */}
            <motion.div 
              style={{ opacity: opacityStatement2, y: yStatement2, scale: scaleStatement2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none px-4"
            >
              <DisplayHeading className="text-[var(--accent-base)] tracking-tight text-[clamp(3.5rem,8vw+2rem,8rem)] leading-[0.9]">
                YOU NEED<br/>A PATH.
              </DisplayHeading>
            </motion.div>

          </Container>
        </div>
      </div>
    </section>
  );
};
