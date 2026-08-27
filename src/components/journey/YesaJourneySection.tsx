import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';

const JOURNEY_STAGES = [
  {
    num: '01',
    title: 'APPLICATION',
    desc: 'The beginning of the journey.',
  },
  {
    num: '02',
    title: 'INTERVIEW',
    desc: 'The opportunity to enter the YESA journey.',
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    desc: 'Observation period. Maximum 6 months. The purpose is to observe, learn, understand the environment and gradually become involved.',
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    desc: 'Work on real-world projects with senior members.',
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    desc: 'Develop enough experience to lead teams within the organization and develop leadership skills.',
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    desc: 'The long-term aspiration of the YESA journey. By this stage, YESA expects the participant to have developed into a world-class leader.',
  }
];

// Architectural Node with smooth interpolation
const ArchitecturalNode = ({ idx, activeProgress }: { idx: number, activeProgress: MotionValue<number> }) => {
  const scale = useTransform(activeProgress, [0, 1], [1, 1.4]);
  const borderOpacity = useTransform(activeProgress, [0, 1], [0.3, 1]);
  const glowOpacity = useTransform(activeProgress, [0, 1], [0, 0.7]);
  const elementsOpacity = useTransform(activeProgress, [0, 1], [0.1, 0.4]);

  return (
    <motion.div style={{ scale }} className="relative w-full h-full flex items-center justify-center">
      {/* Base Node */}
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="w-3 h-3 md:w-4 md:h-4 bg-[#08090B] border-[2px] border-[var(--accent-base)] rounded-full relative z-10" 
      />
      
      {/* Glow */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute w-12 h-12 md:w-20 md:h-20 bg-[var(--accent-glow)] blur-xl rounded-full"
      />

      {/* Evolution / Complexity Additions */}
      {idx >= 2 && (
        <motion.div style={{ opacity: elementsOpacity }} className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent" />
      )}
      {idx >= 4 && (
        <>
          <motion.div style={{ opacity: elementsOpacity }} className="absolute w-[250%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent rotate-45" />
          <motion.div style={{ opacity: elementsOpacity }} className="absolute w-[250%] h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-base)] to-transparent -rotate-45" />
          <motion.div style={{ opacity: elementsOpacity }} className="absolute w-10 h-10 md:w-16 md:h-16 border border-[var(--accent-base)] rounded-full" />
        </>
      )}
      {idx === 5 && (
        <motion.div style={{ opacity: elementsOpacity }} className="absolute w-20 h-20 md:w-32 md:h-32 border border-[var(--accent-base)] rounded-full border-dashed" />
      )}
    </motion.div>
  );
};

const JourneyStageContent: React.FC<{ 
  stage: typeof JOURNEY_STAGES[0]; 
  idx: number;
  smoothProgress: MotionValue<number>;
  totalStages: number;
}> = ({ stage, idx, smoothProgress, totalStages }) => {
  // Broadened triggers to ensure smooth, continuous overlap between fading stages
  const triggerStart = (idx - 0.8) / totalStages;
  const triggerPeak = idx / totalStages;
  const triggerEnd = (idx + 0.8) / totalStages;

  // activeState drives everything and uses the spring-smoothed progress
  const activeState = useTransform(smoothProgress, 
    [triggerStart, triggerPeak, triggerEnd], 
    [0, 1, 0]
  );

  // Map opacities directly against smoothProgress to guarantee they reach 0 outside the window.
  // We include intermediate ghost steps (e.g. 0.08) to preserve the depth effect, but force 0 at the boundaries
  // to prevent inactive stages from stacking up permanently and creating a white overlay/blob.
  
  const midStart = (triggerStart + triggerPeak) / 2;
  const midEnd = (triggerPeak + triggerEnd) / 2;

  const titleOpacity = useTransform(smoothProgress, 
    [triggerStart, midStart, triggerPeak, midEnd, triggerEnd], 
    [0, 0.08, 1, 0.08, 0]
  );
  
  const descOpacity = useTransform(smoothProgress, 
    [triggerStart, midStart, triggerPeak, midEnd, triggerEnd], 
    [0, 0.05, 0.8, 0.05, 0]
  );
  
  const labelOpacity = useTransform(smoothProgress, 
    [triggerStart, midStart, triggerPeak, midEnd, triggerEnd], 
    [0, 0.3, 1, 0.3, 0]
  );

  const y = useTransform(activeState, [0, 1], [60, 0]);
  const labelY = useTransform(activeState, [0, 1], [15, 0]);
  
  // Align left for even, right for odd on desktop
  const isEven = idx % 2 === 0;

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center pointer-events-none overflow-hidden">
      
      {/* Center Spine Node */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-24 h-24 flex items-center justify-center">
        <ArchitecturalNode idx={idx} activeProgress={activeState} />
      </div>

      <Container className="relative w-full flex">
        {/* 
          Using w-[60%] allows the text container to cross the spine by 10%.
          This gives oversized typography room to breathe without clipping, 
          while maintaining the asymmetric visual anchor.
        */}
        <div className={`w-full pl-24 md:pl-0 md:w-[60%] flex flex-col justify-center ${isEven ? 'md:pr-10 lg:pr-16' : 'md:ml-auto md:pl-10 lg:pl-16'}`}>
          <div className={`flex flex-col ${isEven ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-start text-left w-full`}>
            
            <motion.div style={{ opacity: labelOpacity, y: labelY }} className="flex items-center gap-4 mb-6">
              <span className="font-mono-tag text-xs md:text-sm tracking-[0.2em] text-[var(--accent-base)] uppercase">
                Stage {stage.num}
              </span>
              <div className="h-[1px] w-12 bg-[var(--accent-base)] opacity-50" />
            </motion.div>
            
            <motion.div style={{ y, opacity: titleOpacity }} className="w-full">
              <DisplayHeading className="mb-6 text-[clamp(2.5rem,6vw+1rem,5rem)] tracking-tight leading-[1] w-full break-words">
                {stage.title}
              </DisplayHeading>
            </motion.div>
            
            <motion.div style={{ opacity: descOpacity }} className="w-full">
              <p className={`text-white text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg ${isEven ? 'md:ml-auto' : ''}`}>
                {stage.desc}
              </p>
            </motion.div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export const YesaJourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Extremely smooth spring to act as the master timing function for the entire section
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    mass: 1,
    restDelta: 0.0001
  });

  const pathHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#08090B] text-white">
      {/* 600vh creates a deliberately slow, cinematic journey */}
      <div className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
          
          {/* Architectural Background Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen">
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
          </div>

          {/* Central Architectural Spine */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[1px] bg-white/10 md:-translate-x-1/2 z-0">
            {/* The active progression cyan path */}
            <motion.div 
              className="w-full bg-[var(--accent-base)] shadow-[0_0_20px_var(--accent-glow)] origin-top"
              style={{ height: pathHeight }}
            />
          </div>

          {/* Journey Stages */}
          <div className="absolute inset-0 flex flex-col">
            {JOURNEY_STAGES.map((stage, idx) => (
              <div key={stage.num} className="absolute inset-0">
                <JourneyStageContent 
                  stage={stage} 
                  idx={idx} 
                  smoothProgress={smoothProgress} 
                  totalStages={JOURNEY_STAGES.length - 1} 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
