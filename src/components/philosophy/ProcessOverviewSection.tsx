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
  metric: string;
}

const STAGES: StageOverview[] = [
  {
    num: '01',
    title: 'APPLICATION',
    phase: 'ENTRY',
    desc: 'Profile qualification & ambition screening.',
    tag: '100% Free',
    metric: 'Open Intake',
  },
  {
    num: '02',
    title: 'INTERVIEW',
    phase: 'ASSESSMENT',
    desc: 'Mindset, integrity & technical evaluation.',
    tag: 'Selective',
    metric: '1-on-1 Review',
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    phase: 'OBSERVE',
    desc: 'Hands-on immersion in production workflows.',
    tag: 'Max 6 Mos',
    metric: 'Skill Building',
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    phase: 'PARTICIPATE',
    desc: 'Commercial project execution & compensation.',
    tag: 'Industry Paid',
    metric: 'Direct Stipend',
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    phase: 'CONTRIBUTE',
    desc: 'Team leadership & direct initiative ownership.',
    tag: 'Management',
    metric: 'Lead & Mentor',
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    phase: 'MASTERY',
    desc: 'Global venture leadership & industry impact.',
    tag: 'Pinnacle',
    metric: 'Venture Impact',
  },
];

// Bespoke Geometric Line-Art Micro-Visuals
const StageMicroVisual: React.FC<{ stageNum: string }> = ({ stageNum }) => {
  switch (stageNum) {
    case '01':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <rect x="6" y="4" width="26" height="28" rx="3" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.4" />
          <line x1="11" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.25" />
          <line x1="11" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6" />
          <line x1="11" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.4" />
          <path d="M38 18H54M48 12L54 18L48 24" stroke="#9AEDFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="34" cy="18" r="2" fill="#009D9E" />
        </svg>
      );
    case '02':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <circle cx="14" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="18" r="1.5" fill="#9AEDFC" />
          <path d="M22 13C25 15 25 21 22 23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5" />
          <path d="M27 9C32 13 32 23 27 27" stroke="#9AEDFC" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.8" />
          <circle cx="50" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="18" r="1.5" fill="#9AEDFC" />
          <path d="M42 13C39 15 39 21 42 23" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5" />
        </svg>
      );
    case '03':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <circle cx="32" cy="18" r="13" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
          <path d="M32 6C38.6 6 44 11.4 44 18C44 21.5 42.5 24.5 40 26.5" stroke="#9AEDFC" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="32" cy="18" r="3" fill="#009D9E" />
          <circle cx="32" cy="18" r="7" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="13" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="43" y1="18" x2="51" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        </svg>
      );
    case '04':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <rect x="8" y="22" width="6" height="10" rx="1" fill="#009D9E" fillOpacity="0.25" stroke="currentColor" strokeWidth="1" />
          <rect x="18" y="16" width="6" height="16" rx="1" fill="#009D9E" fillOpacity="0.45" stroke="currentColor" strokeWidth="1" />
          <rect x="28" y="10" width="6" height="22" rx="1" fill="#009D9E" fillOpacity="0.65" stroke="currentColor" strokeWidth="1" />
          <path d="M11 18L21 12L31 7L46 5" stroke="#9AEDFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="49" cy="8" r="4.5" stroke="#9AEDFC" strokeWidth="1.25" fill="#090D0F" />
          <path d="M49 5.5V10.5M47 7.5H51" stroke="#9AEDFC" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case '05':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <circle cx="32" cy="7" r="3.5" fill="#009D9E" stroke="#9AEDFC" strokeWidth="1.25" />
          <path d="M32 11V16M32 16L17 24M32 16L32 24M32 16L47 24" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6" />
          <circle cx="17" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="32" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="47" cy="25" r="2.5" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case '06':
      return (
        <svg viewBox="0 0 64 36" className="w-full h-8 text-[#009D9E]" fill="none">
          <ellipse cx="32" cy="18" rx="22" ry="8" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.4" />
          <circle cx="32" cy="18" r="9" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6" />
          <path d="M32 5L34.5 14L43.5 18L34.5 22L32 31L29.5 22L20.5 18L29.5 14Z" fill="#009D9E" fillOpacity="0.25" stroke="#9AEDFC" strokeWidth="1.25" />
          <circle cx="32" cy="18" r="2" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
};

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

      <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10 w-full">
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
        <div className="hidden lg:block relative my-12 w-full">
          {/* Base Connection Track connecting Node 1 to Node 6 */}
          <div className="absolute top-7 left-[8.333%] right-[8.333%] h-[1px] bg-white/[0.08] z-0" />
          
          {/* Active Progress Filling Line */}
          <motion.div
            className="absolute top-7 left-[8.333%] h-[2px] bg-[#009D9E] shadow-[0_0_12px_rgba(0,157,158,0.8)] origin-left z-0"
            style={{ width: useTransform(smoothProgress, [0, 1], ['0%', '83.333%']) }}
          />

          {/* 6 Stage Nodes Grid */}
          <div className="grid grid-cols-6 gap-4 xl:gap-5 w-full relative z-10">
            {STAGES.map((stage, idx) => {
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
        <div className="lg:hidden relative pl-8 sm:pl-12 my-8 space-y-6">
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
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {stage.title}
                </h4>

                {/* Mobile Micro-Visual */}
                <div className="py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] my-2.5 flex items-center justify-center">
                  <StageMicroVisual stageNum={stage.num} />
                </div>

                <p className="text-xs text-[#8A8A8A] font-light leading-relaxed mt-2">
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
    ['rgba(255, 255, 255, 0.06)', 'rgba(0, 157, 158, 0.45)', 'rgba(255, 255, 255, 0.08)']
  );

  return (
    <div className="flex flex-col items-center text-center group cursor-pointer w-full">
      {/* Node Dot */}
      <div className="relative mb-5 flex items-center justify-center">
        <motion.div
          style={{ scale: nodeScale }}
          className="w-4 h-4 rounded-full bg-[#090D0F] border-2 border-[#009D9E] relative z-10 shadow-[0_0_10px_rgba(0,157,158,0.5)]"
        />
        <motion.div
          style={{ opacity: nodeGlow }}
          className="absolute w-8 h-8 rounded-full bg-[#009D9E]/30 blur-md pointer-events-none"
        />
      </div>

      {/* Stage Card with tightened vertical proportion and line-art visual */}
      <motion.div
        style={{ borderColor: cardBorder }}
        className="w-full p-4 rounded-2xl bg-white/[0.02] border transition-all duration-300 hover:bg-white/[0.04] hover:border-[#009D9E]/40 text-left flex flex-col justify-between min-h-[220px]"
      >
        {/* Card Top: Number & Phase */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[11px] font-bold text-[#009D9E]">
              {stage.num}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A8A8A] px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.04]">
              {stage.phase}
            </span>
          </div>
          <h4 className="font-display font-bold text-xs sm:text-[13px] text-white leading-tight">
            {stage.title}
          </h4>
        </div>

        {/* Card Center: Geometric Line-Art Micro-Visual */}
        <div className="py-2.5 px-2 rounded-xl bg-white/[0.02] border border-white/[0.04] my-2 flex items-center justify-center group-hover:border-[#009D9E]/20 transition-colors">
          <StageMicroVisual stageNum={stage.num} />
        </div>

        {/* Card Bottom: Description & Metric Tag */}
        <div>
          <p className="text-[11px] text-[#8A8A8A] font-light leading-relaxed mb-2 line-clamp-2">
            {stage.desc}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
            <span className="font-mono text-[9px] text-[#009D9E] font-medium tracking-tight">
              {stage.metric}
            </span>
            <span className="font-mono text-[9px] text-white/40 tracking-wider">
              {stage.tag}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
