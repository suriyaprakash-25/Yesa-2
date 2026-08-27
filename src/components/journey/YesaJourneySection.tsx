import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading, SubHeading } from '../core/Typography';
import { Button } from '../core/Button';
import { ArrowRight } from 'lucide-react';

const JOURNEY_STAGES = [
  {
    num: '01',
    title: 'APPLICATION',
    desc: 'The beginning of the journey.',
    color: 'var(--stage-1-color)',
    glow: 'var(--stage-1-glow)'
  },
  {
    num: '02',
    title: 'INTERVIEW',
    desc: 'The opportunity to enter the YESA journey.',
    color: 'var(--stage-2-color)',
    glow: 'var(--stage-2-glow)'
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    desc: 'Observation period. Maximum 6 months. The purpose is to observe, learn, understand the environment and gradually become involved.',
    color: 'var(--stage-3-color)',
    glow: 'var(--stage-3-glow)'
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    desc: 'Work on real-world projects with senior members.',
    color: 'var(--stage-4-color)',
    glow: 'var(--stage-4-glow)'
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    desc: 'Develop enough experience to lead teams within the organization and develop leadership skills.',
    color: 'var(--stage-4-color)',
    glow: 'var(--stage-4-glow)'
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    desc: 'The long-term aspiration of the YESA journey. By this stage, YESA expects the participant to have developed into a world-class leader.',
    color: 'var(--stage-5-color)',
    glow: 'var(--stage-5-glow)'
  }
];

// Sub-components to respect React hook rules

const JourneyStageNode: React.FC<{ stage: typeof JOURNEY_STAGES[0], nodeTrigger: number, scrollYProgress: MotionValue<number>, idx: number }> = ({ stage, nodeTrigger, scrollYProgress, idx }) => {
  const t1 = Math.max(0, nodeTrigger - 0.06);
  const t2 = Math.max(t1 + 0.02, nodeTrigger);
  const t3 = Math.min(1, Math.max(t2 + 0.02, nodeTrigger + 0.06));

  const scale = useTransform(scrollYProgress, [t1, t2, t3], [0.5, 1.5, 0.8]);
  const opacity = useTransform(scrollYProgress, [t1, t2], [0, 1]);
  
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
      style={{ top: `${nodeTrigger * 100}%`, scale, opacity }}
    >
      <div className="w-4 h-4 rounded-full border-2 border-[#08090B] relative z-10"
           style={{ backgroundColor: stage.color, boxShadow: `0 0 20px ${stage.glow}` }}
      />
      <div 
        className="absolute w-12 h-12 rounded-full border border-current opacity-30 pointer-events-none animate-pulse-ring"
        style={{ color: stage.color, animationDelay: `${idx * 0.2}s` }}
      />
    </motion.div>
  );
};

const JourneyStageContent: React.FC<{ stage: typeof JOURNEY_STAGES[0], nodeTrigger: number, scrollYProgress: MotionValue<number> }> = ({ stage, nodeTrigger, scrollYProgress }) => {
  const t1 = Math.max(0, nodeTrigger - 0.06);
  const t2 = Math.max(t1 + 0.02, nodeTrigger);
  const t3 = Math.min(1, Math.max(t2 + 0.02, nodeTrigger + 0.06));

  const opacity = useTransform(scrollYProgress, [t1, t2, t3], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [t1, t2, t3], [50, 0, -50]);
  const scale = useTransform(scrollYProgress, [t1, t2, t3], [0.95, 1, 1.05]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center max-w-2xl pointer-events-none"
    >
      <div className="mb-4">
        <span className="font-mono-tag tracking-[0.2em] text-2xl md:text-3xl" style={{ color: stage.color }}>
          {stage.num}
        </span>
      </div>
      
      <DisplayHeading className="mb-6 tracking-tight leading-none text-4xl md:text-6xl lg:text-7xl">
        {stage.title}
      </DisplayHeading>
      
      <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl opacity-70">
        {stage.desc}
      </p>
    </motion.div>
  );
};

export const YesaJourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const backgroundColor = useTransform(scrollYProgress, [0.85, 0.95], ["#08090B", "#F3F5F7"]);
  const textColor = useTransform(scrollYProgress, [0.85, 0.95], ["#F3F5F7", "#08090B"]);
  const pathColor = useTransform(scrollYProgress, [0.85, 0.95], ["rgba(255,255,255,0.2)", "rgba(0,0,0,0.1)"]);
  const activePathColor = useTransform(scrollYProgress, [0.85, 0.95], ["#38BDF8", "#08090B"]);

  const endTransitionOpacity = useTransform(scrollYProgress, [0.93, 0.98], [0, 1]);
  const endTransitionY = useTransform(scrollYProgress, [0.93, 0.98], [50, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor, color: textColor }}
      className="relative w-full transition-colors duration-200"
    >
      <div className="h-[700vh] relative">
        <div className="sticky top-0 h-screen w-full flex overflow-hidden">
          
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              opacity: gridOpacity,
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <Container className="relative z-10 w-full h-full flex flex-col md:flex-row items-center">
            
            <div className="w-full md:w-1/3 h-full flex items-center justify-center relative py-20">
              <div className="relative w-full h-full max-w-[200px] flex justify-center">
                
                <motion.div 
                  className="absolute top-0 bottom-0 w-px"
                  style={{ backgroundColor: pathColor }}
                />
                
                <motion.div 
                  className="absolute top-0 w-1 origin-top shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                  style={{ 
                    backgroundColor: activePathColor,
                    height: '100%',
                    scaleY: smoothProgress 
                  }}
                />

                {JOURNEY_STAGES.map((stage, idx) => {
                  const nodeTrigger = 0.1 + (idx * 0.16);
                  return (
                    <JourneyStageNode 
                      key={stage.num} 
                      stage={stage} 
                      nodeTrigger={nodeTrigger} 
                      scrollYProgress={scrollYProgress} 
                      idx={idx} 
                    />
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-2/3 h-full relative flex items-center justify-center lg:justify-start px-6 lg:pl-20">
              
              {JOURNEY_STAGES.map((stage, idx) => {
                const nodeTrigger = 0.1 + (idx * 0.16);
                return (
                  <JourneyStageContent 
                    key={stage.num} 
                    stage={stage} 
                    nodeTrigger={nodeTrigger} 
                    scrollYProgress={scrollYProgress} 
                  />
                );
              })}

              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none"
                style={{
                  opacity: endTransitionOpacity,
                  y: endTransitionY
                }}
              >
                <SubHeading className="mb-8">Where do you want to begin?</SubHeading>
                <div className="pointer-events-auto">
                  <Button variant="primary" size="lg" className="group">
                    <span className="flex items-center gap-2">
                      Choose Your Field
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </motion.div>

            </div>
          </Container>
        </div>
      </div>
    </motion.section>
  );
};
