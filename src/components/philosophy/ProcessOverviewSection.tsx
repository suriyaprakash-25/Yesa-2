import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import stage01Img from '../../assets/roadmap/stage_01.png';
import stage02Img from '../../assets/roadmap/stage_02.png';
import stage03Img from '../../assets/roadmap/stage_03.png';
import stage04Img from '../../assets/roadmap/stage_04.png';
import stage05Img from '../../assets/roadmap/stage_05.png';
import stage06Img from '../../assets/roadmap/stage_06.png';

interface StageOverview {
  num: string;
  title: string;
  phase: string;
  subtitle: string;
  desc: string;
  tag: string;
  metric: string;
  outcome: string;
  image: string;
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
    image: stage01Img,
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
    image: stage02Img,
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
    image: stage03Img,
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
    image: stage04Img,
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
    image: stage05Img,
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
    image: stage06Img,
  },
];

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
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-4 md:py-8">

          {/* Section Header with Live Scroll Progress Indicator */}
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20 shrink-0 mb-3 sm:mb-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#009D9E]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-none [overflow-wrap:normal] [word-break:keep-all]">
                  The 6-Stage Roadmap.
                </h3>
              </div>

              {/* Progress Tracker and Navigation hint */}
              <div className="flex items-center gap-5">
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

          {/* Connected Glowing Timeline Bar with Liquid Mercury Ball */}
          <div className="w-full relative z-10 my-2 px-6 sm:px-10 lg:px-16">
            <div className="w-full h-[1px] bg-white/[0.08] relative">
              <motion.div
                style={{ width: timelineFill }}
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#009D9E] via-[#9AEDFC] to-[#009D9E] shadow-[0_0_8px_rgba(0,157,158,0.5)] relative"
              >
                {/* Mercury Liquid Droplet at the moving tip of the horizontal line */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-30">
                  <div className="absolute w-5 h-5 rounded-full bg-[#009D9E]/30 blur-xs" />
                  <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#00484A] via-[#9AEDFC] to-[#FFFFFF] p-[1px] shadow-[0_0_8px_rgba(154,237,252,0.7),0_0_4px_rgba(0,157,158,0.5)] border border-white/80">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#009D9E] to-[#041A1C] relative overflow-hidden flex items-center justify-center">
                      <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white/95 blur-[0.2px]" />
                      <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_3px_#FFFFFF]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Horizontally Scrolling Card Track (moves with vertical scroll) */}
          <div className="relative w-full overflow-hidden flex items-center z-10 py-3">
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
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20 shrink-0 mt-1">
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
      className="w-[340px] sm:w-[380px] md:w-[420px] lg:w-[450px] shrink-0 rounded-3xl bg-[#131719] border border-white/[0.08] p-5 sm:p-7 flex flex-col justify-between relative shadow-[0_12px_40px_rgba(0,0,0,0.6)] group hover:border-[#009D9E]/50 transition-colors duration-300 min-h-[460px] sm:min-h-[500px]"
    >
      {/* Ambient Inner Glow on Active State */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,rgba(0,157,158,0.35),transparent_70%)] pointer-events-none"
      />

      {/* Top Bar: Large Stylized Stage Number Badge & Phase Tag */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center font-display font-black text-lg sm:text-xl text-white group-hover:border-[#009D9E] group-hover:text-[#9AEDFC] transition-colors shadow-inner">
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
        <h4 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight mb-2 group-hover:text-[#9AEDFC] transition-colors">
          {stage.title}
        </h4>

        {/* Stage Narrative Description */}
        <p className="text-xs sm:text-sm text-[#8A8A8A] font-light leading-relaxed mb-3 line-clamp-2">
          {stage.desc}
        </p>
      </div>

      {/* Center: Stage Graphic Container */}
      <div className="w-full h-44 sm:h-52 rounded-2xl bg-[#090D0F] border border-white/[0.06] overflow-hidden my-2 flex items-center justify-center p-3 sm:p-4 group-hover:border-[#009D9E]/30 transition-all shadow-inner relative">
        <img
          src={stage.image}
          alt={stage.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,157,158,0.3)]"
          loading="lazy"
        />
      </div>

      {/* Bottom Architectural Highlight & Metric Card */}
      <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
        <div>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#8A8A8A] tracking-wider block">
            CORE MILESTONE
          </span>
          <span className="font-mono text-xs sm:text-sm text-white font-semibold flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
            {stage.metric}
          </span>
        </div>

        <div className="text-right">
          <span className="font-mono text-[9px] sm:text-[10px] uppercase text-[#8A8A8A] tracking-wider block">
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
