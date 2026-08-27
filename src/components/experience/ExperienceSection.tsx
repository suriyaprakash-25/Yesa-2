import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading, SubHeading } from '../core/Typography';
import { ExperienceVisualizer } from './ExperienceVisualizer';

interface StageTextProps {
  title: string;
  subtitle: string;
  desc: string;
  progress: MotionValue<number>;
  range: [number, number, number, number];
}

const StageText: React.FC<StageTextProps> = ({ title, subtitle, desc, progress, range }) => {
  // Range is [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd]
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none px-6"
    >
      <span className="font-mono-tag text-sky-400 tracking-widest uppercase mb-6">{subtitle}</span>
      <DisplayHeading className="mb-6">{title}</DisplayHeading>
      <p className="text-lg md:text-xl text-white/60 font-light max-w-lg leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const finalTransitionOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#08090B] text-white">
      
      {/* Tall scroll container */}
      <div className="h-[400vh] relative">
        
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Visualizer */}
          <ExperienceVisualizer progress={scrollYProgress} />

          {/* Text Layers */}
          <Container className="relative z-10 w-full h-full flex items-center justify-center">
            
            <StageText 
              title="Volunteering"
              subtitle="01. Observe"
              desc="Observation period. Maximum 6 months. The purpose is to observe, learn, understand the environment and gradually become involved."
              progress={scrollYProgress}
              range={[0, 0.1, 0.2, 0.25]}
            />

            <StageText 
              title="Paid Internship"
              subtitle="02. Participate"
              desc="Work on real-world projects with senior members."
              progress={scrollYProgress}
              range={[0.25, 0.35, 0.45, 0.5]}
            />

            <StageText 
              title="Experienced"
              subtitle="03. Contribute"
              desc="Lead teams within the organization. Develop leadership skills."
              progress={scrollYProgress}
              range={[0.5, 0.6, 0.7, 0.75]}
            />

            <StageText 
              title="Pioneer"
              subtitle="04. Lead"
              desc="Pioneer in your idea. You are now the central organizing element."
              progress={scrollYProgress}
              range={[0.75, 0.85, 0.9, 0.95]}
            />

          </Container>

          {/* Final Transition Out */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center bg-[#08090B] z-20 pointer-events-none"
            style={{ opacity: finalTransitionOpacity }}
          >
            <SubHeading className="text-white/80 tracking-wide text-2xl md:text-4xl text-center px-6">
              Leadership is not the end.
            </SubHeading>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
