import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface StageOverview {
  num: string;
  title: string;
  phase: string;
  subtitle: string;
  desc: string;
  tag: string;
  metric: string;
  outcome: string;
}

const STAGES: StageOverview[] = [
  {
    num: '01',
    title: 'APPLICATION',
    phase: 'ENTRY',
    subtitle: 'PROFILE INTAKE',
    desc: 'Profile qualification, merit evaluation & ambition screening with zero tuition barrier.',
    tag: '100% Free',
    metric: 'Open Merit Intake',
    outcome: 'Zero Tuition Barrier',
  },
  {
    num: '02',
    title: 'INTERVIEW',
    phase: 'ASSESSMENT',
    subtitle: 'BILATERAL EVALUATION',
    desc: 'Mindset alignment, integrity screening & technical dialogue directly with senior ecosystem fellows.',
    tag: 'Selective',
    metric: '1-on-1 Evaluation',
    outcome: 'Direct Fellow Dialogue',
  },
  {
    num: '03',
    title: 'VOLUNTEERING',
    phase: 'OBSERVE',
    subtitle: 'WORKFLOW IMMERSION',
    desc: 'Hands-on immersion in production environments, observing architecture and workflows capped at 6 months.',
    tag: 'Max 6 Mos',
    metric: 'Skill Assimilation',
    outcome: 'Capped Observation Period',
  },
  {
    num: '04',
    title: 'PAID INTERNSHIP',
    phase: 'PARTICIPATE',
    subtitle: 'COMMERCIAL SPRINTS',
    desc: 'Commercial project execution alongside seasoned architects with guaranteed stipend compensation.',
    tag: 'Industry Paid',
    metric: 'Commercial Output',
    outcome: 'Direct Guaranteed Stipend',
  },
  {
    num: '05',
    title: 'EXPERIENCED',
    phase: 'CONTRIBUTE',
    subtitle: 'SQUAD LEADERSHIP',
    desc: 'Multi-disciplinary squad leadership, technical velocity management, and cohort mentoring.',
    tag: 'Management',
    metric: 'Team Leadership',
    outcome: 'Decentralized Initiative Ownership',
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    phase: 'MASTERY',
    subtitle: 'ARCHITECTURAL APEX',
    desc: 'Autonomous global venture leadership, architectural direction, and large-scale ecosystem impact.',
    tag: 'Pinnacle',
    metric: 'Venture Incubation',
    outcome: 'Venture & Capital Backing',
  },
];

// Bespoke Geometric Line-Art Micro-Visuals for each stage
const StageCardVisual: React.FC<{ stageNum: string }> = ({ stageNum }) => {
  switch (stageNum) {
    case '01':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          <rect x="12" y="8" width="48" height="44" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="rgba(0,157,158,0.03)" />
          <line x1="20" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <line x1="20" y1="26" x2="50" y2="26" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="20" y1="34" x2="36" y2="34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="20" y1="42" x2="46" y2="42" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          
          <path d="M72 30H104M94 20L104 30L94 40" stroke="#9AEDFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="66" cy="30" r="3" fill="#009D9E" />
          <circle cx="104" cy="30" r="3" fill="#9AEDFC" />
        </svg>
      );
    case '02':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          <circle cx="28" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="28" cy="30" r="6" fill="rgba(0,157,158,0.2)" stroke="#9AEDFC" strokeWidth="1.5" />
          <circle cx="28" cy="30" r="2" fill="#FFFFFF" />
          
          <path d="M48 20C54 24 54 36 48 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
          <path d="M56 14C66 22 66 38 56 46" stroke="#9AEDFC" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
          
          <circle cx="92" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="92" cy="30" r="6" fill="rgba(0,157,158,0.2)" stroke="#9AEDFC" strokeWidth="1.5" />
          <circle cx="92" cy="30" r="2" fill="#FFFFFF" />
          
          <path d="M72 20C66 24 66 36 72 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
        </svg>
      );
    case '03':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          <circle cx="60" cy="30" r="24" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 3" strokeOpacity="0.4" />
          <circle cx="60" cy="30" r="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
          <path d="M60 10C71 10 80 19 80 30C80 36 77 42 72 46" stroke="#9AEDFC" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="30" r="5" fill="#009D9E" stroke="#9AEDFC" strokeWidth="1.5" />
          
          <line x1="20" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="84" y1="30" x2="100" y2="30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        </svg>
      );
    case '04':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          <rect x="20" y="36" width="12" height="18" rx="2" fill="#009D9E" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
          <rect x="38" y="26" width="12" height="28" rx="2" fill="#009D9E" fillOpacity="0.4" stroke="currentColor" strokeWidth="1.5" />
          <rect x="56" y="16" width="12" height="38" rx="2" fill="#009D9E" fillOpacity="0.6" stroke="currentColor" strokeWidth="1.5" />
          <rect x="74" y="8" width="12" height="46" rx="2" fill="#009D9E" fillOpacity="0.8" stroke="#9AEDFC" strokeWidth="1.5" />
          
          <path d="M26 30L44 20L62 12L94 6" stroke="#9AEDFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="98" cy="6" r="4" fill="#090D0F" stroke="#9AEDFC" strokeWidth="2" />
        </svg>
      );
    case '05':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          {/* Top Leader Node */}
          <circle cx="60" cy="12" r="6" fill="#009D9E" stroke="#9AEDFC" strokeWidth="2" />
          <line x1="60" y1="18" x2="60" y2="28" stroke="#9AEDFC" strokeWidth="1.5" />
          <line x1="30" y1="28" x2="90" y2="28" stroke="#9AEDFC" strokeWidth="1.5" strokeOpacity="0.7" />
          
          {/* Connector Branches */}
          <line x1="30" y1="28" x2="30" y2="44" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="28" x2="60" y2="44" stroke="currentColor" strokeWidth="1.5" />
          <line x1="90" y1="28" x2="90" y2="44" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Child Nodes */}
          <circle cx="30" cy="46" r="4.5" fill="#131719" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="46" r="4.5" fill="#131719" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="90" cy="46" r="4.5" fill="#131719" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case '06':
      return (
        <svg viewBox="0 0 120 60" className="w-full h-16 text-[#009D9E]" fill="none">
          <ellipse cx="60" cy="30" rx="42" ry="16" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 3" strokeOpacity="0.4" />
          <circle cx="60" cy="30" r="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
          
          {/* Apex 8-point Radiant Star */}
          <path
            d="M60 8L64 24L80 30L64 36L60 52L56 36L40 30L56 24Z"
            fill="rgba(0,157,158,0.3)"
            stroke="#9AEDFC"
            strokeWidth="1.5"
          />
          <circle cx="60" cy="30" r="3" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
};

export const ProcessOverviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Vertical scroll progress drives horizontal glide (start -> end of 220vh track)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.6,
  });

  // Transform vertical scroll into horizontal translation for the large card track
  // On desktop/tablet, translates from 0% to -65% to reveal all 6 large cards
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-64%']);
  const timelineFill = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const scrollToJourney = () => {
    const journeyEl = document.getElementById('journey');
    if (journeyEl) journeyEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="process-overview"
      ref={containerRef}
      className="relative w-full bg-[#090D0F] text-white border-t border-white/[0.06]"
    >
      {/* 220vh pinned container gives comfortable, controllable horizontal scroll travel */}
      <div className="h-[220vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-6 md:py-10">
          
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

          {/* Section Header with Live Scroll Progress Indicator */}
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20 shrink-0 mb-4 sm:mb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#009D9E]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none [overflow-wrap:normal] [word-break:keep-all]">
                  The 6-Stage Roadmap.
                </h3>
              </div>

              {/* Progress Tracker and Navigation hint */}
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-[#8A8A8A]">
                  <span>Scroll to traverse</span>
                  <div className="w-24 h-[2px] bg-white/[0.1] rounded-full overflow-hidden">
                    <motion.div
                      style={{ width: timelineFill }}
                      className="h-full bg-[#009D9E] shadow-[0_0_8px_rgba(0,157,158,0.8)]"
                    />
                  </div>
                </div>

                <button
                  onClick={scrollToJourney}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#009D9E] hover:text-[#9AEDFC] transition-colors cursor-pointer group"
                >
                  <span>Detailed Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Connected Glowing Timeline Bar */}
          <div className="w-full relative z-10 my-2 px-6 sm:px-10 lg:px-16">
            <div className="w-full h-[1px] bg-white/[0.08] relative">
              <motion.div
                style={{ width: timelineFill }}
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#009D9E] via-[#9AEDFC] to-[#009D9E] shadow-[0_0_12px_rgba(0,157,158,0.9)]"
              />
            </div>
          </div>

          {/* Horizontally Scrolling Card Track (moves with vertical scroll) */}
          <div className="relative w-full overflow-hidden flex items-center z-10 py-4">
            <motion.div
              style={{ x }}
              className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-10 lg:px-16 w-max cursor-grab active:cursor-grabbing"
            >
              {STAGES.map((stage, idx) => {
                const threshold = idx / (STAGES.length - 1);
                return (
                  <RoadmapLargeCard
                    key={stage.num}
                    stage={stage}
                    threshold={threshold}
                    progress={smoothProgress}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Connective Footer Label */}
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20 shrink-0 mt-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8A]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
                STAGE 01 (APPLICATION) → STAGE 06 (WORLD-CLASS LEADER)
              </span>
              <span className="hidden sm:inline text-white/30">
                DRAG OR VERTICALLY SCROLL TO GLIDE
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface RoadmapLargeCardProps {
  stage: StageOverview;
  threshold: number;
  progress: MotionValue<number>;
}

const RoadmapLargeCard: React.FC<RoadmapLargeCardProps> = ({
  stage,
  threshold,
  progress,
}) => {
  // Highlight active stage card as it passes the viewport focal area
  const cardScale = useTransform(
    progress,
    [threshold - 0.12, threshold, threshold + 0.12],
    [0.96, 1.02, 0.96]
  );
  
  const glowOpacity = useTransform(
    progress,
    [threshold - 0.1, threshold, threshold + 0.1],
    [0.05, 0.25, 0.05]
  );

  const borderHighlight = useTransform(
    progress,
    [threshold - 0.1, threshold, threshold + 0.1],
    ['rgba(255, 255, 255, 0.08)', 'rgba(0, 157, 158, 0.6)', 'rgba(255, 255, 255, 0.08)']
  );

  return (
    <motion.div
      style={{
        scale: cardScale,
        borderColor: borderHighlight,
      }}
      className="w-[340px] sm:w-[400px] md:w-[460px] lg:w-[490px] shrink-0 rounded-3xl bg-[#131719] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_12px_40px_rgba(0,0,0,0.6)] group hover:border-[#009D9E]/50 transition-colors duration-300 min-h-[380px] sm:min-h-[420px]"
    >
      {/* Ambient Inner Glow on Active State */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,157,158,0.35),transparent_70%)] pointer-events-none"
      />

      {/* Top Bar: Large Stylized Stage Number Badge & Phase Tag */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center font-display font-black text-lg sm:text-xl text-white group-hover:border-[#009D9E] group-hover:text-[#9AEDFC] transition-colors shadow-inner">
              {stage.num}
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold block">
                {stage.phase}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8A8A8A]">
                {stage.subtitle}
              </span>
            </div>
          </div>

          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.04] text-[#9AEDFC] border border-white/[0.08]">
            {stage.tag}
          </span>
        </div>

        {/* Stage Headline */}
        <h4 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight mb-3 group-hover:text-[#9AEDFC] transition-colors">
          {stage.title}
        </h4>

        {/* Stage Narrative Description */}
        <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed mb-4">
          {stage.desc}
        </p>
      </div>

      {/* Center: Geometric Line-Art Micro-Visual with Dark Glass Well */}
      <div className="w-full py-3.5 px-4 rounded-2xl bg-[#090D0F]/80 border border-white/[0.06] my-2 flex items-center justify-center group-hover:border-[#009D9E]/30 transition-colors shadow-inner">
        <StageCardVisual stageNum={stage.num} />
      </div>

      {/* Bottom Architectural Highlight & Metric Card */}
      <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8A8A8A] tracking-wider block">
            CORE MILESTONE
          </span>
          <span className="font-mono text-xs sm:text-sm text-white font-semibold flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
            {stage.metric}
          </span>
        </div>

        <div className="text-right">
          <span className="font-mono text-[10px] uppercase text-[#8A8A8A] tracking-wider block">
            VERIFIED OUTCOME
          </span>
          <span className="font-mono text-xs text-[#9AEDFC] tracking-tight block mt-0.5">
            {stage.outcome}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
