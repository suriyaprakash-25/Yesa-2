import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';

// ─── Field Track Data Architecture ──────────────────────────────────────────
// Architected for seamless drop-in of finalized field names without layout redesign.
export interface FieldProgressionStage {
  step: string;
  label: string;
  description: string;
}

export interface FieldTrack {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  tag: string;
  accentColor: string;
  accentGlow: string;
  glyph: 'orbit' | 'prism' | 'matrix' | 'nexus' | 'meridian';
  progression: {
    training: FieldProgressionStage;
    experience: FieldProgressionStage;
    realWorldWork: FieldProgressionStage;
    leadership: FieldProgressionStage;
  };
}

export const DEFAULT_FIELD_TRACKS: FieldTrack[] = [
  {
    id: 'field-01',
    index: '01',
    title: 'FIELD TRACK 01',
    subtitle: 'Choose your discipline of conviction',
    tag: 'PATHWAY I',
    accentColor: '#38BDF8', // Cyan
    accentGlow: 'rgba(56, 189, 248, 0.25)',
    glyph: 'orbit',
    progression: {
      training: {
        step: '01',
        label: 'Domain Training',
        description: 'Zero-tuition fundamental frameworks and intensive curriculum architected by global practitioners.',
      },
      experience: {
        step: '02',
        label: 'Cohort Observation',
        description: 'Observation period and peer immersion to understand workflows, standards, and problem-solving.',
      },
      realWorldWork: {
        step: '03',
        label: 'Real-World Work',
        description: 'Compensated contribution shipping active deliverables directly alongside senior organization leaders.',
      },
      leadership: {
        step: '04',
        label: 'World-Class Leadership',
        description: 'Autonomous mastery to lead multidisciplinary teams or direct incubated venture initiatives.',
      },
    },
  },
  {
    id: 'field-02',
    index: '02',
    title: 'FIELD TRACK 02',
    subtitle: 'Structured path for specialized practice',
    tag: 'PATHWAY II',
    accentColor: '#34D399', // Emerald
    accentGlow: 'rgba(52, 211, 153, 0.25)',
    glyph: 'prism',
    progression: {
      training: {
        step: '01',
        label: 'Domain Training',
        description: 'Specialized masterclasses focusing on core problem spaces without commercial barrier fees.',
      },
      experience: {
        step: '02',
        label: 'Cohort Observation',
        description: 'Direct immersion within active cohort squads to learn tactical execution in live environments.',
      },
      realWorldWork: {
        step: '03',
        label: 'Real-World Work',
        description: 'Paid internship phase with direct accountability for production-grade operational output.',
      },
      leadership: {
        step: '04',
        label: 'World-Class Leadership',
        description: 'Institutional stewardship, mentoring rising members, and commanding strategic project scale.',
      },
    },
  },
  {
    id: 'field-03',
    index: '03',
    title: 'FIELD TRACK 03',
    subtitle: 'From foundational craft to high-scale mastery',
    tag: 'PATHWAY III',
    accentColor: '#FBBF24', // Amber
    accentGlow: 'rgba(251, 191, 36, 0.25)',
    glyph: 'matrix',
    progression: {
      training: {
        step: '01',
        label: 'Domain Training',
        description: 'Deep-dive domain fundamentals built for rapid acquisition of critical operational capabilities.',
      },
      experience: {
        step: '02',
        label: 'Cohort Observation',
        description: 'Guided observation structure evaluating how seasoned practitioners make high-stakes decisions.',
      },
      realWorldWork: {
        step: '03',
        label: 'Real-World Work',
        description: 'Direct deployment to real-world projects with compensation and senior engineering review.',
      },
      leadership: {
        step: '04',
        label: 'World-Class Leadership',
        description: 'Executive responsibility, high-conviction decision-making, and long-term organizational impact.',
      },
    },
  },
  {
    id: 'field-04',
    index: '04',
    title: 'FIELD TRACK 04',
    subtitle: 'Cross-functional development roadmap',
    tag: 'PATHWAY IV',
    accentColor: '#A855F7', // Purple
    accentGlow: 'rgba(168, 85, 247, 0.25)',
    glyph: 'nexus',
    progression: {
      training: {
        step: '01',
        label: 'Domain Training',
        description: 'Structured analytical and technical foundations curated by world-class visiting educators.',
      },
      experience: {
        step: '02',
        label: 'Cohort Observation',
        description: 'Hands-on shadowing period ensuring seamless calibration to high-velocity development cycles.',
      },
      realWorldWork: {
        step: '03',
        label: 'Real-World Work',
        description: 'Real-world project execution with tangible stakes, live user feedback, and paid stipends.',
      },
      leadership: {
        step: '04',
        label: 'World-Class Leadership',
        description: 'Incubating novel institutional ideas and leading specialized divisions with global excellence.',
      },
    },
  },
  {
    id: 'field-05',
    index: '05',
    title: 'FIELD TRACK 05',
    subtitle: 'Strategic domain trajectory',
    tag: 'PATHWAY V',
    accentColor: '#F43F5E', // Rose
    accentGlow: 'rgba(244, 63, 94, 0.25)',
    glyph: 'meridian',
    progression: {
      training: {
        step: '01',
        label: 'Domain Training',
        description: 'Systematic zero-cost training program designed to transform raw ambition into refined expertise.',
      },
      experience: {
        step: '02',
        label: 'Cohort Observation',
        description: 'Collaborative cohort environment fostering deep understanding of complex operational systems.',
      },
      realWorldWork: {
        step: '03',
        label: 'Real-World Work',
        description: 'Direct contribution to institutional initiatives with compensated project accountability.',
      },
      leadership: {
        step: '04',
        label: 'World-Class Leadership',
        description: 'Full autonomy to architect breakthrough solutions and guide the next generation of participants.',
      },
    },
  },
];

// ─── Abstract Geometric Glyphs ───────────────────────────────────────────────
const FieldGlyph: React.FC<{ type: FieldTrack['glyph']; color: string; active?: boolean }> = ({
  type,
  color,
  active = false,
}) => {
  switch (type) {
    case 'orbit':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="1.2" strokeOpacity={active ? 0.9 : 0.4} strokeDasharray="3 3" />
          <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="1.5" strokeOpacity={active ? 1 : 0.6} fill={active ? `${color}20` : 'none'} />
          <circle cx="26" cy="12" r="2" fill={color} />
        </svg>
      );
    case 'prism':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <polygon points="16,4 28,26 4,26" stroke={color} strokeWidth="1.4" strokeOpacity={active ? 1 : 0.5} fill={active ? `${color}15` : 'none'} />
          <line x1="16" y1="4" x2="16" y2="26" stroke={color} strokeWidth="1" strokeOpacity={active ? 0.8 : 0.3} strokeDasharray="2 2" />
        </svg>
      );
    case 'matrix':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="3" stroke={color} strokeWidth="1.4" strokeOpacity={active ? 1 : 0.5} fill={active ? `${color}15` : 'none'} />
          <circle cx="12" cy="12" r="2" fill={color} fillOpacity={active ? 1 : 0.5} />
          <circle cx="20" cy="12" r="2" fill={color} fillOpacity={active ? 0.8 : 0.3} />
          <circle cx="12" cy="20" r="2" fill={color} fillOpacity={active ? 0.8 : 0.3} />
          <circle cx="20" cy="20" r="2" fill={color} fillOpacity={active ? 1 : 0.5} />
        </svg>
      );
    case 'nexus':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <line x1="16" y1="4" x2="16" y2="28" stroke={color} strokeWidth="1.2" strokeOpacity={active ? 0.9 : 0.4} />
          <line x1="4" y1="16" x2="28" y2="16" stroke={color} strokeWidth="1.2" strokeOpacity={active ? 0.9 : 0.4} />
          <circle cx="16" cy="16" r="6" stroke={color} strokeWidth="1.4" fill={active ? `${color}20` : 'none'} />
        </svg>
      );
    case 'meridian':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <circle cx="16" cy="16" r="11" stroke={color} strokeWidth="1.2" strokeOpacity={active ? 0.9 : 0.4} />
          <ellipse cx="16" cy="16" rx="5" ry="11" stroke={color} strokeWidth="1.2" strokeOpacity={active ? 1 : 0.5} />
          <line x1="5" y1="16" x2="27" y2="16" stroke={color} strokeWidth="1" strokeOpacity={active ? 0.8 : 0.3} />
        </svg>
      );
  }
};

// ─── Component Props ──────────────────────────────────────────────────────────
interface ChooseFieldSectionProps {
  tracks?: FieldTrack[];
  onStartJourney?: (trackId?: string) => void;
}

export const ChooseFieldSection: React.FC<ChooseFieldSectionProps> = ({
  tracks = DEFAULT_FIELD_TRACKS,
  onStartJourney,
}) => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>(tracks[0].id);
  const [hoveredTrackId, setHoveredTrackId] = useState<string | null>(null);

  // Active track is either hovered or selected
  const activeTrack = tracks.find((t) => t.id === (hoveredTrackId || selectedTrackId)) || tracks[0];

  const progressionOrder: (keyof FieldTrack['progression'])[] = [
    'training',
    'experience',
    'realWorldWork',
    'leadership',
  ];

  return (
    <section id="fields" className="relative bg-[#08090B] py-32 overflow-hidden selection:bg-sky-500/20">
      
      {/* ── Visual Conduit Connection from Journey Section ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-20 bg-gradient-to-b from-sky-400/40 via-sky-400/20 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-sky-400/30 ring-4 ring-sky-400/10 -mt-1" />
      </div>

      {/* ── Background Subtle Ambient Grid & Glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          animate={{
            background: `radial-gradient(circle 500px at 50% 30%, ${activeTrack.accentGlow}, transparent 70%)`,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 pointer-events-none"
        />
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
              FIELD EXPLORATION
            </Badge>
            <span className="font-mono text-xs text-[#64748B]">/</span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              PLUG-AND-PLAY ARCHITECTURE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.04em] leading-[1.08] mb-6"
          >
            Choose your field. <br />
            <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
              We provide the path.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans"
          >
            Select any discipline. YESA provides the structured, zero-cost progression from
            foundational craft to world-class institutional leadership.
          </motion.p>
        </div>

        {/* ── Interactive Field Nodes (Horizontal Ribbon on Desktop, Vertical on Mobile) ── */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="font-mono text-xs text-[#64748B] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Selectable Domain Tracks
            </span>
            <span className="font-mono text-[11px] text-[#475569]">
              {tracks.length} Tracks Configured
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {tracks.map((track) => {
              const isSelected = track.id === selectedTrackId;
              const isHovered = track.id === hoveredTrackId;
              const isProminent = isSelected || isHovered;

              return (
                <motion.button
                  key={track.id}
                  onClick={() => setSelectedTrackId(track.id)}
                  onMouseEnter={() => setHoveredTrackId(track.id)}
                  onMouseLeave={() => setHoveredTrackId(null)}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={`relative p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[140px] group ${
                    isSelected
                      ? 'bg-[#0E1116] border-white/25 shadow-lg'
                      : isHovered
                      ? 'bg-[#0E1116]/80 border-white/15'
                      : 'bg-[#0B0D10]/60 border-white/[0.06] opacity-75 hover:opacity-100'
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? `0 0 25px -5px ${track.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.1)`
                      : undefined,
                    borderColor: isSelected ? track.accentColor : undefined,
                  }}
                >
                  {/* Top Bar: Glyph & Tag */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <div
                      className="p-2 rounded-lg transition-colors duration-300"
                      style={{
                        backgroundColor: isProminent ? `${track.accentColor}15` : 'rgba(255,255,255,0.03)',
                      }}
                    >
                      <FieldGlyph type={track.glyph} color={track.accentColor} active={isProminent} />
                    </div>
                    <span
                      className="font-mono text-[10px] tracking-wider px-2 py-0.5 rounded border transition-colors duration-300"
                      style={{
                        color: isProminent ? track.accentColor : '#64748B',
                        borderColor: isProminent ? `${track.accentColor}40` : 'rgba(255,255,255,0.06)',
                        backgroundColor: isProminent ? `${track.accentColor}08` : 'transparent',
                      }}
                    >
                      {track.tag}
                    </span>
                  </div>

                  {/* Bottom: Track Title & Subtitle */}
                  <div>
                    <div className="font-mono text-[10px] text-[#64748B] mb-0.5">
                      TRACK {track.index}
                    </div>
                    <div className="font-display font-bold text-base text-white tracking-tight group-hover:text-white transition-colors">
                      {track.title}
                    </div>
                    <div className="text-xs text-[#94A3B8] line-clamp-1 mt-0.5 font-sans">
                      {track.subtitle}
                    </div>
                  </div>

                  {/* Active Indicator Pulse */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeFieldIndicator"
                      className="absolute -bottom-[1px] left-4 right-4 h-[2px] rounded-full"
                      style={{ backgroundColor: track.accentColor }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── The Revealed Path: FIELD ↓ PATH ↓ EXPERIENCE ↓ LEADERSHIP ── */}
        <motion.div
          layout
          className="relative rounded-2xl bg-[#0E1116]/90 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl overflow-hidden shadow-2xl"
          style={{
            borderColor: `${activeTrack.accentColor}30`,
          }}
        >
          {/* Accent Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${activeTrack.accentColor}15`,
                  borderColor: `${activeTrack.accentColor}40`,
                }}
              >
                <FieldGlyph type={activeTrack.glyph} color={activeTrack.accentColor} active />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#64748B]">CONFIGURED FIELD:</span>
                  <span className="font-display font-bold text-lg text-white">
                    {activeTrack.title}
                  </span>
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${activeTrack.accentColor}20`,
                      color: activeTrack.accentColor,
                    }}
                  >
                    ACTIVE PATHWAY
                  </span>
                </div>
                <div className="text-xs text-[#94A3B8] font-sans">
                  {activeTrack.subtitle}
                </div>
              </div>
            </div>

            {/* Formula Badge */}
            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#94A3B8] bg-[#13171E] px-3.5 py-1.5 rounded-full border border-white/[0.06]">
              <span className="text-white font-semibold">FIELD</span>
              <span style={{ color: activeTrack.accentColor }}>→</span>
              <span>PATH</span>
              <span style={{ color: activeTrack.accentColor }}>→</span>
              <span>EXPERIENCE</span>
              <span style={{ color: activeTrack.accentColor }}>→</span>
              <span className="text-emerald-400 font-semibold">LEADERSHIP</span>
            </div>
          </div>

          {/* 4-Stage Progressive Pathway Display */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Connecting Circuit Line on Desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 -z-0" />
            
            <AnimatePresence mode="wait">
              {progressionOrder.map((stageKey, idx) => {
                const stage = activeTrack.progression[stageKey];
                const stageTitles = [
                  'Training',
                  'Experience',
                  'Real-World Work',
                  'Leadership',
                ];

                return (
                  <motion.div
                    key={`${activeTrack.id}-${stageKey}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative z-10 flex flex-col bg-[#13171E]/60 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-5 transition-all group"
                  >
                    {/* Step Node Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border shadow-sm transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${activeTrack.accentColor}20`,
                          borderColor: activeTrack.accentColor,
                          color: activeTrack.accentColor,
                        }}
                      >
                        {stage.step}
                      </div>

                      <span className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase">
                        {stageTitles[idx]}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="font-display font-bold text-base text-white mb-2 tracking-tight">
                      {stage.label}
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans flex-1">
                      {stage.description}
                    </p>

                    {/* Stage Completion Indicator */}
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-[#64748B]">
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: activeTrack.accentColor }} />
                      <span>YESA Core Provision</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ── Bottom Section CTA ── */}
          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="font-display font-bold text-lg text-white">
                Ready to choose your discipline?
              </div>
              <div className="text-xs text-[#94A3B8] font-sans">
                100% Free · Cohort Guidance · Real-world Progression
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={() => onStartJourney?.(activeTrack.id)}
              className="w-full sm:w-auto shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.4)]"
            >
              Start your journey
            </Button>
          </div>
        </motion.div>

        {/* ── Downward Conduit into Next Section ── */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-white/20 via-sky-400/30 to-transparent" />
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#64748B] mt-2">
            EXPERIENCE & REAL-WORLD IMMERSION ↓
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ChooseFieldSection;
