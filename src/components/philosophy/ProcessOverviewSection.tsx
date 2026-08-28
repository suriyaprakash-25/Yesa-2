import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import Roadmap Stage Images
import applicationImg from '../../assets/roadmap/application img.png';
import interviewImg from '../../assets/roadmap/interview image.png';
import volunteeringImg from '../../assets/roadmap/volunteering img.png';
import paidInternshipImg from '../../assets/roadmap/paid internship img.png';
import experiencedImg from '../../assets/roadmap/experienced img.png';
import worldClassLeaderImg from '../../assets/roadmap/worldclassleader img.png';

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
    image: applicationImg,
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
    image: interviewImg,
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
    image: volunteeringImg,
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
    image: paidInternshipImg,
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
    image: experiencedImg,
  },
  {
    num: '06',
    title: 'WORLD-CLASS LEADER',
    phase: 'MASTERY',
    subtitle: 'ARCHITECTURAL APEX',
    desc: 'Autonomous institution building, ecosystem venture sponsorship, and global industry leadership.',
    tag: 'Apex Role',
    metric: 'Autonomous Leadership',
    outcome: 'Fellow-Founded Venture Backing',
    image: worldClassLeaderImg,
  },
];

export const ProcessOverviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure pinned scroll progress across ~260vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 26,
    mass: 0.6,
  });

  // Calculate horizontal translation for the card rail
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-68%']);

  // Timeline progress indicators
  const timelineFill = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="process-overview"
      ref={containerRef}
      className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] transition-colors duration-300"
    >
      {/* Pinned 260vh container for generous, controlled horizontal scroll */}
      <div className="h-[260vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 lg:py-10 overflow-hidden">

          {/* Section Header */}
          <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 z-20 shrink-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
                  <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
                  <span>SYSTEM ARCHITECTURE</span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] tracking-tight leading-none [overflow-wrap:normal] [word-break:keep-all]">
                  The 6-Stage Roadmap.
                </h3>
              </div>

              {/* Progress Tracker and Navigation hint */}
              <div className="flex items-center gap-6">
                <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
                  <span>Scroll to traverse</span>
                  <div className="w-24 h-[2px] bg-[var(--border-medium)] rounded-full overflow-hidden">
                    <motion.div
                      style={{ width: timelineFill }}
                      className="h-full bg-[var(--accent-base)] shadow-[var(--shadow-glow-accent)]"
                    />
                  </div>
                </div>

                <button
                  onClick={scrollToJourney}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-base)] hover:text-[var(--accent-light)] font-semibold transition-colors cursor-pointer group"
                >
                  <span>Detailed Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Connected Timeline Bar */}
          <div className="w-full relative z-10 my-2 px-6 sm:px-10 lg:px-16">
            <div className="w-full h-[1.5px] bg-[var(--border-subtle)] relative">
              <motion.div
                style={{ width: timelineFill }}
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[var(--accent-base)] via-[var(--accent-light)] to-[var(--accent-base)] shadow-[var(--shadow-glow-accent)] relative"
              >
                {/* Mercury Liquid Droplet at the moving tip of the horizontal line */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-30">
                  <div className="absolute w-5 h-5 rounded-full bg-[var(--accent-base)]/25 blur-xs" />
                  <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[var(--accent-base)] via-[var(--accent-light)] to-white p-[1px] shadow-sm border border-white/80">
                    <div className="w-full h-full rounded-full bg-[var(--accent-base)] relative overflow-hidden flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Horizontally Scrolling Card Track */}
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
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)]" />
                STAGE 01 (APPLICATION) → STAGE 06 (WORLD-CLASS LEADER)
              </span>
              <span className="hidden sm:inline text-[var(--text-ghost)]">
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
  const cardScale = useTransform(
    progress,
    [threshold - 0.12, threshold, threshold + 0.12],
    [0.96, 1.02, 0.96]
  );
  
  const glowOpacity = useTransform(
    progress,
    [threshold - 0.1, threshold, threshold + 0.1],
    [0.02, 0.18, 0.02]
  );

  return (
    <motion.div
      style={{
        scale: cardScale,
      }}
      className="w-[340px] sm:w-[400px] md:w-[460px] lg:w-[490px] shrink-0 rounded-3xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between relative shadow-[var(--shadow-elevated)] group hover:border-[var(--accent-base)]/50 transition-colors duration-300 min-h-[460px] sm:min-h-[500px]"
    >
      {/* Ambient Inner Glow on Active State */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_0%,var(--accent-glow),transparent_70%)] pointer-events-none"
      />

      {/* Top Bar: Large Stylized Stage Number Badge & Phase Tag */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center font-display font-black text-lg sm:text-xl text-[var(--text-primary)] group-hover:border-[var(--accent-base)] group-hover:text-[var(--accent-base)] transition-colors shadow-sm">
              {stage.num}
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[var(--accent-base)] font-semibold block">
                {stage.phase}
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                {stage.subtitle}
              </span>
            </div>
          </div>

          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-base)] font-semibold border border-[var(--accent-glow)]">
            {stage.tag}
          </span>
        </div>

        {/* Stage Headline */}
        <h4 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[var(--text-primary)] tracking-tight leading-tight mb-2 group-hover:text-[var(--accent-base)] transition-colors">
          {stage.title}
        </h4>

        {/* Stage Narrative Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-3">
          {stage.desc}
        </p>
      </div>

      {/* Center: High-Resolution Roadmap Stage Image Asset */}
      <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)] relative my-2 group-hover:border-[var(--accent-base)]/40 transition-all duration-300 flex items-center justify-center">
        <img
          src={stage.image}
          alt={`YESA Stage ${stage.num} — ${stage.title}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Bottom Architectural Highlight & Metric Card */}
      <div className="mt-3 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase text-[var(--text-secondary)] tracking-wider block">
            CORE MILESTONE
          </span>
          <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] font-semibold flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)]" />
            {stage.metric}
          </span>
        </div>

        <div className="text-right">
          <span className="font-mono text-[10px] uppercase text-[var(--text-secondary)] tracking-wider block">
            VERIFIED OUTCOME
          </span>
          <span className="font-mono text-xs text-[var(--accent-base)] font-semibold tracking-tight block mt-0.5">
            {stage.outcome}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
