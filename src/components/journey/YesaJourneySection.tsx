import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import {
  ApplicationVisual,
  InterviewVisual,
  VolunteeringVisual,
  PaidInternshipVisual,
  ExperiencedVisual,
  WorldClassLeaderVisual,
} from './StageVisualizations';

interface JourneyStage {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  tag: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    num: '01',
    title: 'APPLICATION',
    subtitle: 'INTAKE PROTOCOL',
    desc: 'The beginning of the journey. Complete the technical evaluation and define your engineering focus with zero tuition barrier.',
    tag: 'Stage 01',
  },
  {
    num: '02',
    title: 'INTERVIEW',
    subtitle: 'BILATERAL EVALUATION',
    desc: 'The opportunity to enter the YESA journey. Direct alignment dialogue with senior fellows to evaluate raw potential and velocity.',
    tag: 'Stage 02',
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    subtitle: 'MAX 6 MONTHS OBSERVATION',
    desc: 'Observation period capped at 6 months maximum. Observe production workflows, assimilate institutional knowledge, and gradually contribute.',
    tag: 'Stage 03',
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    subtitle: 'COMMERCIAL SPRINT LABS',
    desc: 'Work on real-world production projects alongside senior industry architects. Guaranteed compensation and verified commercial output.',
    tag: 'Stage 04',
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    subtitle: 'SQUAD LEADERSHIP',
    desc: 'Lead multi-disciplinary teams within the ecosystem. Develop organizational velocity, mentor incoming cohorts, and direct technical roadmaps.',
    tag: 'Stage 05',
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    subtitle: 'ARCHITECTURAL APEX',
    desc: 'The long-term aspiration of the YESA journey. Graduate as an autonomous, recognized leader ready to build and scale global ventures.',
    tag: 'Stage 06',
  },
];

// Architectural Spine Node
const ArchitecturalNode = ({
  idx,
  activeProgress,
}: {
  idx: number;
  activeProgress: MotionValue<number>;
}) => {
  const scale = useTransform(activeProgress, [0, 1], [0.9, 1.35]);
  const borderOpacity = useTransform(activeProgress, [0, 1], [0.3, 1]);
  const glowOpacity = useTransform(activeProgress, [0, 1], [0, 0.8]);

  return (
    <motion.div style={{ scale }} className="relative w-full h-full flex items-center justify-center">
      {/* Base Node */}
      <motion.div
        style={{ opacity: borderOpacity }}
        className="w-4 h-4 rounded-full bg-[var(--color-surface-elevated)] border-2 border-[var(--accent-base)] relative z-10 shadow-[var(--shadow-glow-accent)]"
      />

      {/* Glow Halo */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute w-12 h-12 md:w-16 md:h-16 bg-[var(--accent-dim)] blur-md rounded-full pointer-events-none"
      />

      {/* Apex Radiant Wings for Stage 06 */}
      {idx === 5 && (
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute w-20 h-20 md:w-28 md:h-28 border border-[var(--accent-base)]/40 rounded-full animate-[spin_10s_linear_infinite]"
        />
      )}
    </motion.div>
  );
};

// Distinct Visual Component Mapper
const renderStageVisual = (idx: number, activeProgress: MotionValue<number>) => {
  switch (idx) {
    case 0:
      return <ApplicationVisual activeProgress={activeProgress} />;
    case 1:
      return <InterviewVisual activeProgress={activeProgress} />;
    case 2:
      return <VolunteeringVisual activeProgress={activeProgress} />;
    case 3:
      return <PaidInternshipVisual activeProgress={activeProgress} />;
    case 4:
      return <ExperiencedVisual activeProgress={activeProgress} />;
    case 5:
      return <WorldClassLeaderVisual activeProgress={activeProgress} />;
    default:
      return null;
  }
};

const JourneyStageContent: React.FC<{
  stage: JourneyStage;
  idx: number;
  smoothProgress: MotionValue<number>;
  totalStages: number;
}> = ({ stage, idx, smoothProgress, totalStages }) => {
  const peak = idx / (totalStages - 1);
  const delta = 0.12;
  const start = Math.max(0, peak - delta);
  const end = Math.min(1, peak + delta);

  const activeStatePoints =
    idx === 0
      ? [0, end]
      : idx === totalStages - 1
      ? [start, 1]
      : [start, peak, end];

  const activeStateValues =
    idx === 0
      ? [1, 0]
      : idx === totalStages - 1
      ? [0, 1]
      : [0, 1, 0];

  const activeState = useTransform(smoothProgress, activeStatePoints, activeStateValues);

  const opacityPoints =
    idx === 0
      ? [0, end - delta * 0.4, end]
      : idx === totalStages - 1
      ? [start, start + delta * 0.4, 1]
      : [start, start + delta * 0.4, peak, end - delta * 0.4, end];

  const opacityValues =
    idx === 0
      ? [1, 0.8, 0]
      : idx === totalStages - 1
      ? [0, 0.8, 1]
      : [0, 0.8, 1, 0.8, 0];

  const contentOpacity = useTransform(smoothProgress, opacityPoints, opacityValues);

  const yPoints =
    idx === 0
      ? [0, end]
      : idx === totalStages - 1
      ? [start, 1]
      : [start, peak, end];

  const yValues =
    idx === 0
      ? [0, -40]
      : idx === totalStages - 1
      ? [40, 0]
      : [40, 0, -40];

  const contentY = useTransform(smoothProgress, yPoints, yValues);
  const isEven = idx % 2 === 0;

  return (
    <motion.div
      style={{ opacity: contentOpacity }}
      className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
    >
      {/* Center Spine Node (Desktop) / Left Node (Mobile) */}
      <div className="absolute left-2.5 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center z-20 pointer-events-auto">
        <ArchitecturalNode idx={idx} activeProgress={activeState} />
      </div>

      <Container size="full" className="max-w-[1600px] px-3 sm:px-10 lg:px-12 xl:px-16 w-full relative z-10">
        <motion.div
          style={{ y: contentY }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-16 lg:gap-24 items-center w-full pl-6 sm:pl-12 md:pl-0"
        >
          {/* Column 1: Text Narrative */}
          <div
            className={`flex flex-col justify-center ${
              isEven
                ? 'md:text-right md:items-end order-1'
                : 'md:text-left md:items-start order-1 md:order-2'
            }`}
          >
            {/* Stage Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-semibold">
                STAGE {stage.num}
              </span>
              <div className="w-4 sm:w-6 h-[1px] bg-[var(--accent-base)]/40" />
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                {stage.subtitle}
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-display font-black text-[clamp(1.65rem,5.2vw,4.8rem)] text-[var(--text-primary)] tracking-tight leading-[0.98] mb-3 sm:mb-5 [overflow-wrap:normal] [word-break:keep-all] break-normal">
              {stage.title}
            </h3>

            {/* Stage Narrative */}
            <p className="text-xs sm:text-base lg:text-lg text-[var(--text-secondary)] font-light leading-relaxed max-w-lg">
              {stage.desc}
            </p>
          </div>

          {/* Column 2: Distinct Visual Mockup Treatment */}
          <div
            className={`flex items-center ${
              isEven
                ? 'justify-start md:justify-start order-2'
                : 'justify-start md:justify-end order-2 md:order-1'
            } pointer-events-auto w-full`}
          >
            {renderStageVisual(idx, activeState)}
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export const YesaJourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 26,
    mass: 0.6,
  });

  const spineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" ref={containerRef} className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Pinned 600vh scroll tracks 6 stages evenly */}
      <div className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Continuous Architectural Spine */}
          <div className="absolute top-0 bottom-0 left-8 sm:left-14 md:left-1/2 w-[1.5px] bg-[var(--border-subtle)] md:-translate-x-1/2 z-10">
            <motion.div
              style={{ height: spineHeight }}
              className="w-full bg-gradient-to-b from-[var(--accent-base)]/40 via-[var(--accent-base)] to-[var(--accent-light)] shadow-[var(--shadow-glow-accent)] origin-top relative"
            >
              {/* Mercury Liquid Droplet Tip */}
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

          {/* Render 6 Stages */}
          {JOURNEY_STAGES.map((stage, idx) => (
            <JourneyStageContent
              key={stage.num}
              stage={stage}
              idx={idx}
              smoothProgress={smoothProgress}
              totalStages={JOURNEY_STAGES.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
