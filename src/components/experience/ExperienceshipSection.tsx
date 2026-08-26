import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Eye, Users, Cpu, Compass, Sparkles } from 'lucide-react';
import { Container } from '../core/Container';
import { Badge } from '../core/Badge';

// ─── Experience Stage Interface & Data ───────────────────────────────────────
export interface ExperienceStage {
  id: string;
  step: string;
  keyword: 'OBSERVE' | 'PARTICIPATE' | 'CONTRIBUTE' | 'LEAD';
  title: string;
  subtitle: string;
  periodBadge: string;
  description: string;
  responsibilityLevel: string;
  accentColor: string;
  accentGlow: string;
  environmentFeatures: string[];
}

export const EXPERIENCE_STAGES: ExperienceStage[] = [
  {
    id: 'observe',
    step: '01',
    keyword: 'OBSERVE',
    title: 'Volunteering & Observation',
    subtitle: 'Observation Period · Maximum 6 Months',
    periodBadge: 'MAX 6 MONTHS',
    description:
      'You begin in a zero-pressure, highly focused observation perimeter. Your sole objective is to watch seasoned leaders solve real problems, absorb internal workflows, and understand the technical environment.',
    responsibilityLevel: 'Level 1: Passive Observation & Environmental Calibration',
    accentColor: '#38BDF8', // Cyan
    accentGlow: 'rgba(56, 189, 248, 0.3)',
    environmentFeatures: [
      'Single perimeter focal lens',
      'Ambient workflow telemetry monitoring',
      'Zero barrier participation',
    ],
  },
  {
    id: 'participate',
    step: '02',
    keyword: 'PARTICIPATE',
    title: 'Cohort Synchronization',
    subtitle: 'Gradual Peer & Mentor Involvement',
    periodBadge: 'COHORT CALIBRATION',
    description:
      'Interactive elements begin appearing. You step into structured cohort squads, synchronizing directly with senior practitioners to evaluate architectural decisions and test your own understanding in peer reviews.',
    responsibilityLevel: 'Level 2: Dual Feedback Loops & Collaborative Sprints',
    accentColor: '#34D399', // Emerald
    accentGlow: 'rgba(52, 211, 153, 0.3)',
    environmentFeatures: [
      'Dual-node feedback loops',
      'Direct synchronization with senior leaders',
      'Cohort sprint alignment',
    ],
  },
  {
    id: 'contribute',
    step: '03',
    keyword: 'CONTRIBUTE',
    title: 'Paid Internship',
    subtitle: 'Real-World Projects with Senior Members',
    periodBadge: 'COMPENSATED EXECUTION',
    description:
      'Multiple connected project conduits ignite. You deploy production-grade modules on live, real-world projects alongside senior members—receiving compensation for direct technical and operational output.',
    responsibilityLevel: 'Level 3: Multi-Node Real-World Project Deployment',
    accentColor: '#FBBF24', // Amber
    accentGlow: 'rgba(251, 191, 36, 0.3)',
    environmentFeatures: [
      'Multi-node active network execution',
      'Paid contribution on live deliverables',
      'Senior review & production deployment',
    ],
  },
  {
    id: 'lead',
    step: '04',
    keyword: 'LEAD',
    title: 'Experienced & Pioneer',
    subtitle: 'Lead Teams & Pioneer Your Own Ideas',
    periodBadge: 'ORGANIZATIONAL LEADERSHIP',
    description:
      'You become the central organizing node of the system. You lead multidisciplinary teams within the organization, master advanced leadership capabilities, and pioneer your own breakthrough venture ideas with YESA backing.',
    responsibilityLevel: 'Level 4: Central Constellation & Venture Direction',
    accentColor: '#A855F7', // Purple/White
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    environmentFeatures: [
      'Central organizing command node',
      'Direction of organizational squads',
      'Pioneering venture autonomy & incubation',
    ],
  },
];

// ─── Abstract Generative Complexity Environment Visualizer ──────────────────
// Visualizes the evolution from simple focal lens to full central constellation
const AbstractEnvironmentVisualizer: React.FC<{ activeStage: ExperienceStage }> = ({
  activeStage,
}) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl bg-[#0B0D10] border border-white/[0.08] overflow-hidden flex items-center justify-center p-6 select-none shadow-2xl">
      
      {/* Background Grid & Radar Sweep */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Dynamic Ambient Background Glow */}
      <motion.div
        animate={{
          background: `radial-gradient(circle 320px at 50% 50%, ${activeStage.accentGlow}, transparent 70%)`,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* HUD Telemetry Overlay */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[#64748B] tracking-wider">
        SYS.METAPHOR // {activeStage.keyword}_ENVIRONMENT
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px]" style={{ color: activeStage.accentColor }}>
        <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeStage.accentColor }} />
        STAGE {activeStage.step} ACTIVE
      </div>

      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#64748B]">
        {activeStage.responsibilityLevel}
      </div>

      {/* ── Interactive Abstract Geometric Complexity Renderer ── */}
      <div className="relative w-full max-w-[340px] h-[300px] flex items-center justify-center">
        
        {/* STAGE 1: OBSERVE — Simple Observation Perimeter Lens */}
        {activeStage.id === 'observe' && (
          <motion.div
            key="observe-env"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Outer Observation Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute w-56 h-56 rounded-full border border-dashed border-sky-400/20"
            />
            {/* Inner Lens Ring */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-36 h-36 rounded-full border border-sky-400/40 bg-sky-400/[0.03] flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full border border-sky-400/80 flex items-center justify-center bg-[#08090B]">
                <Eye className="w-6 h-6 text-sky-400" />
              </div>
            </motion.div>

            {/* Ambient Signal Rays */}
            <div className="absolute -top-4 font-mono text-[9px] text-sky-400/60 tracking-widest">
              [ PASSIVE OBSERVATION PERIMETER ]
            </div>
          </motion.div>
        )}

        {/* STAGE 2: PARTICIPATE — Dual Interactive Syncing Loops */}
        {activeStage.id === 'participate' && (
          <motion.div
            key="participate-env"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Dual Intersecting Orbital Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-48 h-48 rounded-full border border-emerald-400/30 -translate-x-6"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-48 h-48 rounded-full border border-emerald-400/30 translate-x-6"
            />

            {/* Participant & Senior Peer Nodes */}
            <div className="relative z-10 flex items-center gap-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#0E1116] border border-emerald-400/80 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <span className="font-mono font-bold text-xs text-emerald-300">YOU</span>
                </div>
                <span className="font-mono text-[8px] text-emerald-400/70 mt-1">OBSERVER</span>
              </div>

              {/* Dynamic Sync Bridge Line */}
              <div className="relative w-16 h-[2px] bg-gradient-to-r from-emerald-400 via-white to-emerald-400">
                <motion.div
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-white absolute -top-[3px] left-1/2"
                />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-[#0E1116] border border-emerald-400/40 flex items-center justify-center">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-mono text-[8px] text-[#64748B] mt-1">LEADER</span>
              </div>
            </div>

            <div className="absolute -top-4 font-mono text-[9px] text-emerald-400/60 tracking-widest">
              [ COHORT FEEDBACK SYNCHRONIZATION ]
            </div>
          </motion.div>
        )}

        {/* STAGE 3: CONTRIBUTE — Multiple Connected Project Conduits (Paid Internship) */}
        {activeStage.id === 'contribute' && (
          <motion.div
            key="contribute-env"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Dynamic Circuit Matrix */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 300">
              <line x1="170" y1="150" x2="60" y2="70" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="170" y1="150" x2="280" y2="70" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="170" y1="150" x2="60" y2="230" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
              <line x1="170" y1="150" x2="280" y2="230" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            </svg>

            {/* Satellite Live Project Nodes */}
            <div className="absolute top-10 left-8 px-2 py-1 rounded bg-[#0E1116] border border-amber-400/40 text-[9px] font-mono text-amber-300">
              PRJ_ALPHA.LIVE
            </div>
            <div className="absolute top-10 right-8 px-2 py-1 rounded bg-[#0E1116] border border-amber-400/40 text-[9px] font-mono text-amber-300">
              PRJ_BETA.PROD
            </div>
            <div className="absolute bottom-10 left-8 px-2 py-1 rounded bg-[#0E1116] border border-amber-400/40 text-[9px] font-mono text-amber-300">
              STIPEND.ACTIVE
            </div>
            <div className="absolute bottom-10 right-8 px-2 py-1 rounded bg-[#0E1116] border border-amber-400/40 text-[9px] font-mono text-amber-300">
              REVIEW.SENIOR
            </div>

            {/* Central Compensated Contributor Node */}
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#13171E] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.35)]">
              <Cpu className="w-8 h-8 text-amber-400" />
            </div>

            <div className="absolute -top-4 font-mono text-[9px] text-amber-400/70 tracking-widest">
              [ REAL-WORLD DEPLOYMENT MATRIX ]
            </div>
          </motion.div>
        )}

        {/* STAGE 4: LEAD — The Central Organizing Constellation */}
        {activeStage.id === 'lead' && (
          <motion.div
            key="lead-env"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center w-full h-full"
          >
            {/* Concentric Expanding Leadership Waves */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + ring,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: ring * 0.3,
                }}
                className="absolute rounded-full border"
                style={{
                  width: ring * 85,
                  height: ring * 85,
                  borderColor: ring === 1 ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}

            {/* Orbital Satellite Division Nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-56 h-56"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]" />
            </motion.div>

            {/* Central Epicenter: World-Class Leader */}
            <div className="relative z-10 w-18 h-18 rounded-full bg-white text-[#08090B] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.6)]">
              <Compass className="w-7 h-7 text-[#08090B]" />
              <span className="font-mono font-bold text-[8px] tracking-tighter">LEADER</span>
            </div>

            <div className="absolute -top-4 font-mono text-[9px] text-purple-400/80 tracking-widest">
              [ CENTRAL ORGANIZING CONSTELLATION ]
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

// ─── Main Experience-ship Section Component ──────────────────────────────────
export const ExperienceshipSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(EXPERIENCE_STAGES[0].id);

  const activeStage =
    EXPERIENCE_STAGES.find((s) => s.id === activeStageId) || EXPERIENCE_STAGES[0];

  return (
    <section
      id="experience"
      className="relative bg-[#08090B] py-32 overflow-hidden selection:bg-sky-500/20"
    >
      {/* ── Top Conduit Connection ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-20 bg-gradient-to-b from-sky-400/30 via-sky-400/20 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-sky-400/30 ring-4 ring-sky-400/10 -mt-1" />
      </div>

      <Container size="lg" className="relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Badge variant="accent" dot className="font-mono text-[10px] py-0.5 tracking-wider">
              PRACTICAL EVOLUTION
            </Badge>
            <span className="font-mono text-xs text-[#64748B]">/</span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              EXPERIENCE-SHIP
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.04em] leading-[1.08] mb-6"
          >
            Learning alone is not the destination. <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-white bg-clip-text text-transparent">
              Experience matters.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans"
          >
            Leadership develops through direct real-world experience. YESA creates the environment
            where you gradually observe, participate, contribute on live projects, and lead.
          </motion.p>
        </div>

        {/* ── Visual Progression Strip: OBSERVE → PARTICIPATE → CONTRIBUTE → LEAD ── */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {EXPERIENCE_STAGES.map((stage) => {
              const isActive = stage.id === activeStage.id;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between group ${
                    isActive
                      ? 'bg-[#0E1116] border-white/25 shadow-xl'
                      : 'bg-[#0B0D10]/70 border-white/[0.06] opacity-70 hover:opacity-100 hover:bg-[#0E1116]/60'
                  }`}
                  style={{
                    borderColor: isActive ? stage.accentColor : undefined,
                    boxShadow: isActive
                      ? `0 0 25px -5px ${stage.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.1)`
                      : undefined,
                  }}
                >
                  {/* Top Bar: Keyword & Step */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className="font-mono text-xs font-bold tracking-wider"
                      style={{ color: isActive ? stage.accentColor : '#94A3B8' }}
                    >
                      {stage.keyword}
                    </span>
                    <span className="font-mono text-[11px] text-[#64748B]">
                      {stage.step}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-tight">
                      {stage.title}
                    </div>
                    <div className="font-mono text-[10px] text-[#64748B] mt-0.5">
                      {stage.periodBadge}
                    </div>
                  </div>

                  {/* Active Bottom Glow Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeExperienceTab"
                      className="absolute -bottom-[1px] left-4 right-4 h-[2px] rounded-full"
                      style={{ backgroundColor: stage.accentColor }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Two-Panel Interactive Deep Dive: Generative Metaphor & Editorial Breakdown ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Panel: Abstract Environment Visualizer (6 cols) */}
          <div className="lg:col-span-6">
            <AbstractEnvironmentVisualizer activeStage={activeStage} />
          </div>

          {/* Right Panel: Editorial Storytelling & Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stage Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded"
                      style={{
                        backgroundColor: `${activeStage.accentColor}15`,
                        color: activeStage.accentColor,
                      }}
                    >
                      STAGE {activeStage.step} · {activeStage.keyword}
                    </span>
                    <span className="font-mono text-xs text-[#64748B]">
                      {activeStage.periodBadge}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                    {activeStage.title}
                  </h3>
                  <div className="font-mono text-xs text-[#94A3B8] mt-1">
                    {activeStage.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-[#94A3B8] leading-relaxed font-sans">
                  {activeStage.description}
                </p>

                {/* Environment Capabilities List */}
                <div className="space-y-2.5 pt-2 border-t border-white/[0.08]">
                  <div className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider mb-2">
                    Progression Environment Parameters:
                  </div>
                  {activeStage.environmentFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#E2E8F0] font-sans">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: activeStage.accentColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Institutional Note */}
                <div className="p-4 rounded-xl bg-[#0E1116] border border-white/[0.06] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: activeStage.accentColor }} />
                  <div className="text-xs text-[#94A3B8] font-sans">
                    <span className="text-white font-medium">YESA Core Philosophy:</span> We do not simply teach. We provide the real-world sandbox to observe, execute, and pioneer.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Closing Conceptual Transition toward the Future ── */}
        <div className="mt-32 pt-16 border-t border-white/[0.08] flex flex-col items-center text-center">
          <div className="font-mono text-xs text-[#64748B] tracking-[0.25em] uppercase mb-4">
            THE NEXT HORIZON
          </div>

          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            "Leadership is not the end."
          </h3>

          <p className="text-sm text-[#94A3B8] max-w-md font-sans mb-8">
            World-class leadership expands into venture creation, long-term impact, and institutional incubation.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#94A3B8] animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-white/20 via-sky-400/30 to-transparent mt-2" />
            <div className="font-mono text-[10px] tracking-[0.2em] text-[#64748B] mt-2">
              THE FUTURE OF YESA ↓
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ExperienceshipSection;
