import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';
import { ArrowRight } from 'lucide-react';
import { Button } from '../core/Button';

const ABSTRACT_FIELDS = [
  { id: 'alpha', num: '01', title: 'FIELD ALPHA', desc: 'Select this discipline to master the structural path.' },
  { id: 'beta', num: '02', title: 'FIELD BETA', desc: 'Select this discipline to master the structural path.' },
  { id: 'gamma', num: '03', title: 'FIELD GAMMA', desc: 'Select this discipline to master the structural path.' },
  { id: 'delta', num: '04', title: 'FIELD DELTA', desc: 'Select this discipline to master the structural path.' }
];

const FieldNode = ({ activeProgress }: { activeProgress: MotionValue<number> }) => {
  const scale = useTransform(activeProgress, [0, 1], [1, 1.5]);
  const borderOpacity = useTransform(activeProgress, [0, 1], [0.3, 1]);
  const glowOpacity = useTransform(activeProgress, [0, 1], [0, 0.6]);
  
  // A subtle horizontal line extending towards the text
  const lineScaleX = useTransform(activeProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(activeProgress, [0, 1], [0, 0.3]);

  return (
    <motion.div style={{ scale }} className="relative w-full h-full flex items-center justify-center">
      {/* Node */}
      <motion.div 
        style={{ opacity: borderOpacity }}
        className="w-3 h-3 md:w-4 md:h-4 bg-[#08090B] border-[2px] border-[var(--accent-base)] rounded-full relative z-10" 
      />
      {/* Glow */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute w-12 h-12 md:w-20 md:h-20 bg-[var(--accent-glow)] blur-xl rounded-full"
      />
      {/* Horizontal Technical Line */}
      <motion.div 
        style={{ scaleX: lineScaleX, opacity: lineOpacity }}
        className="absolute left-1/2 top-1/2 w-[100px] md:w-[200px] h-[1px] bg-[var(--accent-base)] origin-left"
      />
    </motion.div>
  );
};

const FieldContent: React.FC<{ 
  field: typeof ABSTRACT_FIELDS[0]; 
  idx: number;
  smoothProgress: MotionValue<number>;
}> = ({ field, idx, smoothProgress }) => {
  // Map index 0->3 to progress 0.25 -> 1.0 (reserving 0.0 for the title)
  const peak = (idx + 1) * 0.25;
  const start = peak - 0.25;
  const end = peak + 0.25;

  const midStart = (start + peak) / 2;
  const midEnd = (peak + end) / 2;

  // Active state drives the vertical movement
  const activeState = useTransform(smoothProgress, [start, peak, end], [0, 1, 0]);
  const y = useTransform(activeState, [0, 1], [60, 0]);

  // Opacities mapped to explicitly reach 0 outside the window
  const titleOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.05, 1, 0.05, 0]);
  const descOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.02, 0.8, 0.02, 0]);
  const labelOpacity = useTransform(smoothProgress, [start, midStart, peak, midEnd, end], [0, 0.1, 1, 0.1, 0]);

  return (
    <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden">
      
      {/* Node placed precisely over the left-aligned spine */}
      <div className="absolute left-6 md:left-24 lg:left-32 -translate-x-1/2 w-24 h-24 flex items-center justify-center">
        <FieldNode activeProgress={activeState} />
      </div>

      <Container className="relative w-full flex pointer-events-auto">
        <div className="w-full pl-20 md:pl-48 lg:pl-64 pr-6 flex flex-col justify-center text-left">
          
          <motion.div style={{ opacity: labelOpacity }} className="flex items-center gap-4 mb-4">
            <span className="font-mono-tag text-xs md:text-sm tracking-[0.2em] text-[var(--accent-base)] uppercase">
              Field {field.num}
            </span>
            <div className="h-[1px] w-12 bg-[var(--accent-base)] opacity-50" />
          </motion.div>
          
          <motion.div style={{ y, opacity: titleOpacity }} className="w-full">
            <DisplayHeading className="mb-6 text-[clamp(2.5rem,6vw+1rem,6rem)] tracking-tight leading-[1] w-full break-words">
              {field.title}
            </DisplayHeading>
          </motion.div>
          
          <motion.div style={{ opacity: descOpacity }} className="w-full flex flex-col md:flex-row md:items-center gap-6">
            <p className="text-white text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
              {field.desc}
            </p>
            {/* CTA Button appears when field is active */}
            <motion.div style={{ opacity: activeState }} className="pointer-events-auto">
              <Button variant="primary" size="sm" className="group">
                <span className="flex items-center gap-2">
                  Select
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </div>
  );
};

export const FieldSelectionSection: React.FC = () => {
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
  
  // Title fades out as we start scrolling to the first field
  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(smoothProgress, [0, 0.15], [0, -50]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#090D0F] text-white">
      {/* 500vh ensures cinematic scrolling (1 viewport for title + 4 fields) */}
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
            <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 w-full">
              <div className="pl-20 md:pl-48 lg:pl-64">
                <span className="font-mono-tag text-xs md:text-sm tracking-[0.2em] text-[var(--accent-base)] uppercase mb-6 block">
                  STAGE 07 — FIELD SELECTION
                </span>
                <DisplayHeading className="text-[clamp(3rem,8vw+1rem,8rem)] tracking-tight leading-[0.9]">
                  CHOOSE<br/>YOUR FIELD
                </DisplayHeading>
              </div>
            </Container>
          </motion.div>

          {/* The Fields */}
          {ABSTRACT_FIELDS.map((field, idx) => (
            <FieldContent 
              key={field.id}
              field={field} 
              idx={idx} 
              smoothProgress={smoothProgress} 
            />
          ))}

        </div>
      </div>
    </section>
  );
};
