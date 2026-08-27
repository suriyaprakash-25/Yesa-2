import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { Container } from '../core/Container';
import { ArrowRight } from 'lucide-react';

interface StageOverview {
  num: string;
  title: string;
  phase: string;
  desc: string;
  tag: string;
}

const STAGES: StageOverview[] = [
  {
    num: '01',
    title: 'APPLICATION',
    phase: 'ENTRY',
    desc: 'Profile qualification & ambition screening.',
    tag: '100% Free',
  },
  {
    num: '02',
    title: 'INTERVIEW',
    phase: 'ASSESSMENT',
    desc: 'Mindset, integrity & technical evaluation.',
    tag: 'Selective',
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    phase: 'OBSERVE',
    desc: 'Hands-on immersion in production workflows.',
    tag: 'Max 6 Mos',
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    phase: 'PARTICIPATE',
    desc: 'Commercial project execution & compensation.',
    tag: 'Industry Paid',
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    phase: 'CONTRIBUTE',
    desc: 'Team leadership & direct initiative ownership.',
    tag: 'Management',
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    phase: 'MASTERY',
    desc: 'Global venture leadership & industry impact.',
    tag: 'Pinnacle',
  },
];

export const ProcessOverviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.3,
  });

  // Calculate progress for horizontal line (0% to 100%)
  const lineWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const scrollToJourney = () => {
    const journeyEl = document.getElementById('journey');
    if (journeyEl) journeyEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#090D0F] py-24 md:py-32 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />
      </div>

      <Container className="relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                SYSTEM ARCHITECTURE
              </span>
            </div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight [overflow-wrap:normal] [word-break:keep-all]">
              The 6-Stage Roadmap.
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm md:text-base text-[#8A8A8A] max-w-md font-light leading-relaxed">
              Every stage is a deliberate transition from raw potential to recognized authority.
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Connected Roadmap */}
        <div className="hidden lg:block relative my-12">
          {/* Base Connection Track */}
          <div className="absolute top-7 left-8 right-8 h-[1px] bg-white/[0.08] z-0" />
          
          {/* Active Progress Filling Line */}
          <motion.div
            className="absolute top-7 left-8 h-[2px] bg-[#009D9E] shadow-[0_0_12px_rgba(0,157,158,0.8)] origin-left z-0"
            style={{ width: lineWidth, maxWidth: 'calc(100% - 4rem)' }}
          />

          {/* 6 Stage Nodes Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {STAGES.map((stage, idx) => {
              // Calculate threshold for when this node lights up
              const threshold = idx / (STAGES.length - 1);
              
              return (
                <RoadmapNode
                  key={stage.num}
                  stage={stage}
                  threshold={threshold}
                  progress={smoothProgress}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Connected Roadmap */}
        <div className="lg:hidden relative pl-8 sm:pl-12 my-8 space-y-8">
          {/* Vertical Architectural Line */}
          <div className="absolute left-3.5 sm:left-5 top-4 bottom-4 w-[1px] bg-white/[0.08]" />
          <motion.div
            className="absolute left-3.5 sm:left-5 top-4 w-[2px] bg-[#009D9E] shadow-[0_0_10px_rgba(0,157,158,0.8)] origin-top"
            style={{ height: lineWidth }}
          />

          {STAGES.map((stage) => (
            <div key={stage.num} className="relative flex items-start gap-4 sm:gap-6 group">
              {/* Node Indicator */}
              <div className="absolute -left-8 sm:-left-12 top-1.5 flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#090D0F] border border-white/[0.15] shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#009D9E]" />
              </div>

              {/* Card content */}
              <div className="flex-1 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-[#009D9E]">
                    STAGE {stage.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-[#8A8A8A] border border-white/[0.05]">
                    {stage.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1.5">
                  {stage.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Connective Action */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-widest">
            Detailed breakdown follows below
          </span>
          <button
            onClick={scrollToJourney}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#009D9E] hover:text-[#9AEDFC] transition-colors cursor-pointer group"
          >
            <span>Explore Deep-Dive Stages</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </Container>
    </section>
  );
};

interface RoadmapNodeProps {
  stage: StageOverview;
  threshold: number;
  progress: MotionValue<number>;
}

const RoadmapNode: React.FC<RoadmapNodeProps> = ({ stage, threshold, progress }) => {
  // Interpolate node brightness and scale based on scroll position
  const nodeScale = useTransform(progress, [threshold - 0.1, threshold, threshold + 0.1], [1, 1.25, 1]);
  const nodeGlow = useTransform(
    progress,
    [threshold - 0.1, threshold, threshold + 0.1],
    [0, 0.9, 0.4]
  );
  const cardBorder = useTransform(
    progress,
    [threshold - 0.08, threshold, threshold + 0.08],
    ['rgba(255, 255, 255, 0.05)', 'rgba(0, 157, 158, 0.4)', 'rgba(255, 255, 255, 0.08)']
  );

  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {/* Node Dot */}
      <div className="relative mb-6 flex items-center justify-center">
        <motion.div
          style={{ scale: nodeScale }}
          className="w-4 h-4 rounded-full bg-[#090D0F] border-2 border-[#009D9E] relative z-10 shadow-[0_0_10px_rgba(0,157,158,0.5)]"
        />
        <motion.div
          style={{ opacity: nodeGlow }}
          className="absolute w-8 h-8 rounded-full bg-[#009D9E]/30 blur-md pointer-events-none"
        />
      </div>

      {/* Stage Card */}
      <motion.div
        style={{ borderColor: cardBorder }}
        className="w-full p-4 rounded-xl bg-white/[0.02] border transition-all duration-300 hover:bg-white/[0.04] text-left flex flex-col justify-between min-h-[160px]"
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] font-bold text-[#009D9E]">
              {stage.num}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A8A8A] px-1.5 py-0.5 rounded bg-white/[0.03]">
              {stage.phase}
            </span>
          </div>
          <h4 className="font-display font-bold text-sm text-white leading-tight mb-2">
            {stage.title}
          </h4>
        </div>
        <p className="text-[11px] text-[#8A8A8A] font-light leading-relaxed line-clamp-3">
          {stage.desc}
        </p>
      </motion.div>
    </div>
  );
};
