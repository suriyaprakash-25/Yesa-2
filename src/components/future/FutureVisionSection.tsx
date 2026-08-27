import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';
import { BranchingPathVisualizer } from './BranchingPathVisualizer';

const PathwayCard: React.FC<{ 
  title: string, 
  desc: string, 
  align: 'left' | 'right',
  progress: MotionValue<number>,
  accentColor: string
}> = ({ title, desc, align, progress, accentColor }) => {
  const opacity = useTransform(progress, [0.5, 0.7, 0.85, 0.9], [0, 1, 1, 0]);
  const y = useTransform(progress, [0.5, 0.7, 0.85, 0.9], [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className={`w-full md:w-1/2 flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} p-6 mt-12 md:mt-0`}
    >
      <div className={`w-12 h-1 mb-6`} style={{ backgroundColor: accentColor }} />
      <h3 className="font-display text-2xl md:text-3xl text-white mb-4 tracking-wide">{title}</h3>
      <p className="text-white/60 font-light leading-relaxed max-w-sm">{desc}</p>
    </motion.div>
  );
};

export const FutureVisionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const initialTextOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const initialTextY = useTransform(scrollYProgress, [0.15, 0.25], [0, -50]);
  const finalOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.85, 0.95], [0.95, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#08090B] text-white">
      
      <div className="h-[350vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          
          <BranchingPathVisualizer progress={scrollYProgress} />

          <Container className="relative z-10 w-full h-full flex flex-col justify-center">
            
            {/* Initial Transition Text */}
            <motion.div 
              style={{ opacity: initialTextOpacity, y: initialTextY }}
              className="absolute top-1/4 left-0 w-full text-center"
            >
              <div className="flex flex-col gap-4 font-mono-tag tracking-widest text-white/40 uppercase">
                <span>Learning</span>
                <motion.div className="w-px h-8 bg-white/20 mx-auto" />
                <span>Building</span>
                <motion.div className="w-px h-8 bg-white/20 mx-auto" />
                <span className="text-white/70">Leading</span>
                <motion.div className="w-px h-8 bg-white/20 mx-auto" />
                <span className="text-white">Creating</span>
              </div>
            </motion.div>

            {/* The Diverging Paths Content */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start pt-32">
              <PathwayCard 
                title="PATH 01: WORK ON OUR IDEA"
                desc="As participants become experienced, they may contribute to ideas being developed within YESA."
                align="left"
                progress={scrollYProgress}
                accentColor="#38BDF8"
              />
              
              <PathwayCard 
                title="PATH 02: WE INVEST IN YOUR IDEA"
                desc="YESA's future vision includes supporting promising ideas developed by its participants through investment."
                align="right"
                progress={scrollYProgress}
                accentColor="#34D399"
              />
            </div>

            {/* Final Statement */}
            <motion.div 
              style={{ opacity: finalOpacity, scale: finalScale }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4"
            >
              <DisplayHeading className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Your journey<br/>can become<br/>someone else's<br/>beginning.
              </DisplayHeading>
            </motion.div>

          </Container>
        </div>
      </div>
    </section>
  );
};
