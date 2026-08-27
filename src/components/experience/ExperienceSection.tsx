import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';
import { ExperienceVisualizer } from './ExperienceVisualizer';

const EXPERIENCE_STAGES = [
  {
    num: '01',
    title: 'VOLUNTEERING',
    desc: 'Observation period. Maximum 6 months. The purpose is to observe, learn, understand the environment and gradually become involved.',
  },
  {
    num: '02',
    title: 'PAID INTERNSHIP',
    desc: 'Work on real-world projects with senior members.',
  },
  {
    num: '03',
    title: 'EXPERIENCED',
    desc: 'Lead teams within the organization. Develop leadership skills.',
  },
  {
    num: '04',
    title: 'PIONEER',
    desc: 'Pioneer your idea. You are now the central organizing element.',
  }
];

const ExperienceStageContent: React.FC<{ 
  stage: typeof EXPERIENCE_STAGES[0]; 
  idx: number;
  smoothProgress: MotionValue<number>;
}> = ({ stage, idx, smoothProgress }) => {
  // Map index 0->3 to progress 0.2 -> 0.8
  const peak = 0.2 + (idx * 0.2);
  const start = peak - 0.2;
  const end = peak + 0.2;

  const midStart = (start + peak) / 2;
  const midEnd = (peak + end) / 2;

  // activeState drives the vertical movement and the visualizer node
  const activeState = useTransform(smoothProgress, [start, peak, end], [0, 1, 0]);
  const y = useTransform(activeState, [0, 1], [60, 0]);

  // Opacities mapped to explicitly reach 0 outside the window (Ghost typography pattern)
  const titleOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.05, 1, 0.05, 0]);
  const descOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.02, 0.8, 0.02, 0]);
  const labelOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.1, 1, 0.1, 0]);

  return (
    <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
      
      {/* Node placed precisely over the left-aligned spine */}
      <div className="absolute left-6 md:left-24 lg:left-32 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
        <ExperienceVisualizer progress={activeState} idx={idx} />
      </div>

      <Container className="relative w-full flex pointer-events-auto">
        <div className="w-full pl-20 md:pl-48 lg:pl-64 pr-6 flex flex-col justify-center text-left">
          
          <motion.div style={{ opacity: labelOpacity }} className="flex items-center gap-4 mb-4">
            <span className="font-mono-tag text-xs md:text-sm tracking-[0.2em] text-[var(--accent-base)] uppercase">
              {stage.num}. STAGE
            </span>
            <div className="h-[1px] w-12 bg-[var(--accent-base)] opacity-50" />
          </motion.div>
          
          <motion.div style={{ y, opacity: titleOpacity }} className="w-full">
            <DisplayHeading className="mb-6 text-[clamp(2.5rem,6vw+1rem,6rem)] tracking-tight leading-[1] w-full break-words">
              {stage.title}
            </DisplayHeading>
          </motion.div>
          
          <motion.div style={{ opacity: descOpacity }} className="w-full">
            <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              {stage.desc}
            </p>
          </motion.div>

        </div>
      </Container>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 1,
    restDelta: 0.0001
  });

  // Path grows from top to bottom
  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Title fades out as we start scrolling to the first stage
  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [0, -50]);

  // Final bridge statement appears at the very end (0.9 to 1.0)
  const finalStatementOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const finalStatementY = useTransform(smoothProgress, [0.85, 0.95], [40, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#08090B] text-white">
      {/* 500vh ensures cinematic scrolling (1 viewport for title, 3 viewports for 4 stages, 1 viewport for ending) */}
      <div className="h-[500vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          
          {/* Subtle Grid Continuation */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen">
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          </div>

          {/* Left-Aligned Architectural Spine */}
          <div className="absolute top-0 bottom-0 left-6 md:left-24 lg:left-32 w-[1px] bg-white/10 -translate-x-1/2 z-0">
            <motion.div 
              className="w-full bg-[var(--accent-base)] shadow-[0_0_20px_var(--accent-glow)] origin-top"
              style={{ height: pathHeight }}
            />
          </div>

          {/* Intro Title */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute inset-0 flex items-center pointer-events-none"
          >
            <Container className="w-full">
              <div className="pl-20 md:pl-48 lg:pl-64">
                <span className="font-mono-tag text-xs md:text-sm tracking-[0.2em] text-[var(--accent-base)] uppercase mb-6 block">
                  STAGE 08 — EXPERIENCE-SHIP
                </span>
                <DisplayHeading className="text-[clamp(3rem,8vw+1rem,8rem)] tracking-tight leading-[0.9]">
                  BUILD<br/>EXPERIENCE
                </DisplayHeading>
              </div>
            </Container>
          </motion.div>

          {/* The Experience Stages */}
          {EXPERIENCE_STAGES.map((stage, idx) => (
            <ExperienceStageContent 
              key={stage.num}
              stage={stage} 
              idx={idx} 
              smoothProgress={smoothProgress} 
            />
          ))}

          {/* Final Cinematic Bridge */}
          <motion.div 
            style={{ opacity: finalStatementOpacity, y: finalStatementY }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Container className="w-full text-center">
              <span className="font-mono-tag tracking-widest text-[var(--accent-base)] uppercase block text-sm md:text-base">
                Leadership is not the end.
              </span>
            </Container>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
