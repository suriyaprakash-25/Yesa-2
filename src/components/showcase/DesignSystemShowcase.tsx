import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Type, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../core/Button';
import { Badge } from '../core/Badge';
import { Card } from '../core/Card';
import { GlassPanel } from '../core/GlassPanel';
import { Container } from '../core/Container';
import { DisplayHeading, SectionTitle, SubHeading, BodyText, MonoLabel, Kicker } from '../core/Typography';
import { ASCENT_STAGES, type AscentStageId } from '../../types/design-system';
import { AscentVisualizer } from '../visual/AscentVisualizer';
import { StageTimelineNav } from '../navigation/StageTimelineNav';

interface DesignSystemShowcaseProps {
  activeView: 'overview' | 'tokens' | 'typography' | 'components' | 'ascent';
  onSelectView: (view: 'overview' | 'tokens' | 'typography' | 'components' | 'ascent') => void;
}

export const DesignSystemShowcase: React.FC<DesignSystemShowcaseProps> = ({
  activeView,
  onSelectView
}) => {
  const [selectedStage, setSelectedStage] = useState<AscentStageId>('potential');
  const currentStageData = ASCENT_STAGES.find(s => s.id === selectedStage) || ASCENT_STAGES[0];

  return (
    <div className="py-8 space-y-16">
      
      {/* ---------------------------------------------------------
          HERO DIRECTION & CREATIVE CONCEPT INTRO
          --------------------------------------------------------- */}
      <section className="relative">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Kicker className="mx-auto">
                PHASE 01 // FOUNDATION & IDENTITY SPECIMEN
              </Kicker>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <DisplayHeading className="text-center">
                Incubator for <br />
                <span className="bg-gradient-to-b from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  Future Leaders.
                </span>
              </DisplayHeading>
              
              <p className="text-xl md:text-2xl text-[#94A3B8] font-sans font-light max-w-2xl mx-auto tracking-tight">
                "Choose your field. <span className="text-white font-medium">We provide the path.</span>"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <Badge variant="emerald" dot>100% Free Program</Badge>
              <Badge variant="mono">Real-World Projects</Badge>
              <Badge variant="accent">Global Top Lecturers</Badge>
              <Badge variant="outline">Cohort Guidance</Badge>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------
          VIEW 1: THE ASCENT (CORE VISUAL & PROGRESSION CONCEPT)
          --------------------------------------------------------- */}
      {(activeView === 'overview' || activeView === 'ascent') && (
        <section className="relative">
          <Container>
            <div className="space-y-6">
              
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <MonoLabel glow className="mb-2">01 // CORE METAPHOR & JOURNEY</MonoLabel>
                  <SectionTitle>The Ascent System</SectionTitle>
                  <BodyText muted className="mt-1">
                    A candidate progresses from latent potential to world-class institutional leadership.
                  </BodyText>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#64748B]">STAGE FOCUS:</span>
                  <Badge variant="accent">{currentStageData.title}</Badge>
                </div>
              </div>

              {/* Interactive Stage Timeline Navigator */}
              <StageTimelineNav 
                activeStageId={selectedStage}
                onSelectStage={setSelectedStage}
              />

              {/* Main Ascent Interactive Canvas & Stage Inspector */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Left: Dynamic 60fps Abstract Progression Metaphor Canvas */}
                <div className="lg:col-span-7 h-[460px]">
                  <AscentVisualizer activeStageId={selectedStage} />
                </div>

                {/* Right: Stage Deep-Dive Card */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <Card 
                    variant="elevated" 
                    glowEffect 
                    glowColor={currentStageData.glowColor}
                    cornerAccent
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-3xl font-extrabold text-white/90">
                          {currentStageData.stepNumber}
                        </span>
                        <Badge variant="outline" className="font-mono text-[10px]">
                          {currentStageData.stateBadge}
                        </Badge>
                      </div>

                      <div>
                        <SubHeading className="text-white text-2xl font-bold">
                          {currentStageData.title}
                        </SubHeading>
                        <p className="text-sm font-mono text-sky-400 mt-0.5">
                          {currentStageData.subtitle}
                        </p>
                      </div>

                      <BodyText size="md" muted className="leading-relaxed">
                        {currentStageData.description}
                      </BodyText>

                      <div className="p-3.5 rounded-xl bg-[#08090B] border border-white/[0.08] space-y-1">
                        <div className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">
                          Progression Milestone
                        </div>
                        <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                          <ChevronRight className="w-3.5 h-3.5" />
                          {currentStageData.progressionNote}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-xs text-[#64748B] font-mono">100% FREE INITIATIVE</span>
                      <Button 
                        variant="glow" 
                        size="sm"
                        onClick={() => {
                          const idx = ASCENT_STAGES.findIndex(s => s.id === selectedStage);
                          const nextIdx = (idx + 1) % ASCENT_STAGES.length;
                          setSelectedStage(ASCENT_STAGES[nextIdx].id);
                        }}
                      >
                        Advance Stage →
                      </Button>
                    </div>
                  </Card>
                </div>

              </div>

              {/* Journey Step Matrix (Application -> Interview -> Volunteering -> Paid -> Experienced -> Leader) */}
              <div className="pt-6">
                <Card variant="glass" className="p-6">
                  <div className="text-xs font-mono uppercase text-[#94A3B8] tracking-widest mb-4">
                    The Complete Institutional Progression Path
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {[
                      { step: '01', title: 'Application', note: 'Direct Intent' },
                      { step: '02', title: 'Interview', note: 'Dialogue' },
                      { step: '03', title: 'Volunteering', note: 'Observation' },
                      { step: '04', title: 'Paid Internship', note: 'Impact' },
                      { step: '05', title: 'Experienced', note: 'Mastery' },
                      { step: '06', title: 'World-Class Leader', note: 'Venture' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#08090B]/60 border border-white/[0.06] flex flex-col justify-between">
                        <div className="font-mono text-[10px] text-sky-400">{item.step}</div>
                        <div className="text-xs font-semibold text-white mt-1">{item.title}</div>
                        <div className="text-[10px] text-[#64748B] font-mono">{item.note}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------
          VIEW 2: TYPOGRAPHY SYSTEM SPECIMEN
          --------------------------------------------------------- */}
      {(activeView === 'overview' || activeView === 'typography') && (
        <section className="relative">
          <Container>
            <div className="space-y-6">
              
              <div className="border-b border-white/[0.08] pb-6">
                <MonoLabel glow className="mb-2">02 // TYPOGRAPHIC ARCHITECTURE</MonoLabel>
                <SectionTitle>Typography Hierarchy</SectionTitle>
                <BodyText muted className="mt-1">
                  High-contrast sans-serif type system balanced with structural monospace metadata.
                </BodyText>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Scale Comparison Card */}
                <div className="lg:col-span-8 space-y-4">
                  <Card variant="glass" className="space-y-6 p-8">
                    
                    <div className="space-y-1 pb-6 border-b border-white/[0.06]">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase">Display / Hero (clamp 44px - 100px)</span>
                      <DisplayHeading className="text-4xl sm:text-5xl md:text-6xl">
                        Future Leaders.
                      </DisplayHeading>
                    </div>

                    <div className="space-y-1 pb-6 border-b border-white/[0.06]">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase">Section Title (clamp 32px - 56px)</span>
                      <SectionTitle className="text-2xl sm:text-3xl md:text-4xl">
                        Choose your field. We provide the path.
                      </SectionTitle>
                    </div>

                    <div className="space-y-1 pb-6 border-b border-white/[0.06]">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase">Subheading / Section Kicker</span>
                      <SubHeading className="text-xl">
                        Free trainings, real projects, and international guidance.
                      </SubHeading>
                    </div>

                    <div className="space-y-1 pb-6 border-b border-white/[0.06]">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase">Body Copy (16px / 1.65 line height)</span>
                      <BodyText size="md" muted>
                        YESA is an incubator designed to help people gradually develop into future leaders. Through free trainings, observation periods, paid internships, and leadership mentorship, participants work on real-world projects.
                      </BodyText>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#64748B] uppercase">Monospace System Tag (JetBrains Mono)</span>
                      <div className="flex items-center gap-3">
                        <MonoLabel glow>[ STAGE_01 // POTENTIAL ]</MonoLabel>
                        <MonoLabel>[ STATUS: 100% FREE ]</MonoLabel>
                        <MonoLabel>[ COHORT_SYSTEM: ACTIVE ]</MonoLabel>
                      </div>
                    </div>

                  </Card>
                </div>

                {/* Typography Principles Breakdown */}
                <div className="lg:col-span-4 space-y-4">
                  <Card variant="elevated" className="space-y-4">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <Type className="w-4 h-4 text-sky-400" />
                      Type Philosophy
                    </h4>
                    
                    <div className="space-y-3 text-xs text-[#94A3B8] leading-relaxed">
                      <div className="p-3 rounded-lg bg-[#08090B] border border-white/[0.06]">
                        <span className="font-bold text-white block mb-0.5">Plus Jakarta Sans & Cabinet Grotesk</span>
                        Used for headlines and primary editorial statements with tight negative tracking (-0.03em).
                      </div>
                      <div className="p-3 rounded-lg bg-[#08090B] border border-white/[0.06]">
                        <span className="font-bold text-white block mb-0.5">Inter</span>
                        Balanced readability for long-form descriptions and institutional manifestos.
                      </div>
                      <div className="p-3 rounded-lg bg-[#08090B] border border-white/[0.06]">
                        <span className="font-bold text-white block mb-0.5">JetBrains Mono</span>
                        Technical precision for stage progression indexes, badges, and system states.
                      </div>
                    </div>
                  </Card>
                </div>

              </div>

            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------
          VIEW 3: COLOR SYSTEM & DESIGN TOKENS
          --------------------------------------------------------- */}
      {(activeView === 'overview' || activeView === 'tokens') && (
        <section className="relative">
          <Container>
            <div className="space-y-6">
              
              <div className="border-b border-white/[0.08] pb-6">
                <MonoLabel glow className="mb-2">03 // COLOR & ATMOSPHERIC SURFACES</MonoLabel>
                <SectionTitle>Color System</SectionTitle>
                <BodyText muted className="mt-1">
                  Obsidian surfaces, restrained hairline borders, and strategic progression illuminations.
                </BodyText>
              </div>

              {/* Color Swatch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Void Base */}
                <Card variant="glass" className="space-y-3">
                  <div className="h-20 rounded-xl bg-[#08090B] border border-white/[0.1] flex items-end p-3">
                    <span className="font-mono text-[10px] text-white">#08090B</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Deep Void</h5>
                    <p className="text-xs text-[#94A3B8]">Primary background canvas</p>
                  </div>
                </Card>

                {/* Obsidian Surface */}
                <Card variant="glass" className="space-y-3">
                  <div className="h-20 rounded-xl bg-[#0E1116] border border-white/[0.1] flex items-end p-3">
                    <span className="font-mono text-[10px] text-white">#0E1116</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Obsidian Surface</h5>
                    <p className="text-xs text-[#94A3B8]">Container & panel surface</p>
                  </div>
                </Card>

                {/* Elevated Surface */}
                <Card variant="glass" className="space-y-3">
                  <div className="h-20 rounded-xl bg-[#13171E] border border-white/[0.15] flex items-end p-3">
                    <span className="font-mono text-[10px] text-white">#13171E</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Elevated Card</h5>
                    <p className="text-xs text-[#94A3B8]">Interactive components & cards</p>
                  </div>
                </Card>

                {/* Strategic Ascent Cyan */}
                <Card variant="glass" className="space-y-3">
                  <div className="h-20 rounded-xl bg-sky-500/20 border border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.25)] flex items-end p-3">
                    <span className="font-mono text-[10px] text-sky-200">#38BDF8</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-sky-300">Ascent Cyan</h5>
                    <p className="text-xs text-[#94A3B8]">Progression & focus accent</p>
                  </div>
                </Card>

              </div>

              {/* Surface & Hairline Border Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-white/[0.07] bg-[#0E1116]/60 backdrop-blur-md">
                  <span className="font-mono text-xs text-[#64748B] block mb-1">HAIRLINE SUBTLE</span>
                  <div className="text-xs text-[#94A3B8]">rgba(255, 255, 255, 0.07) — For subtle section dividers</div>
                </div>
                <div className="p-4 rounded-xl border border-white/[0.14] bg-[#0E1116]/80 backdrop-blur-md">
                  <span className="font-mono text-xs text-[#64748B] block mb-1">HAIRLINE MEDIUM</span>
                  <div className="text-xs text-[#94A3B8]">rgba(255, 255, 255, 0.14) — For active card contours</div>
                </div>
                <div className="p-4 rounded-xl border border-sky-500/40 bg-sky-500/[0.05] backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.1)]">
                  <span className="font-mono text-xs text-sky-400 block mb-1">ASCENT ACTIVE GLOW</span>
                  <div className="text-xs text-sky-200">rgba(56, 189, 248, 0.4) — Strategic interactive focus</div>
                </div>
              </div>

            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------
          VIEW 4: COMPONENT FOUNDATIONS & INTERACTION SPECIMENS
          --------------------------------------------------------- */}
      {(activeView === 'overview' || activeView === 'components') && (
        <section className="relative">
          <Container>
            <div className="space-y-6">
              
              <div className="border-b border-white/[0.08] pb-6">
                <MonoLabel glow className="mb-2">04 // INTERACTIVE COMPONENTS</MonoLabel>
                <SectionTitle>Component Foundations</SectionTitle>
                <BodyText muted className="mt-1">
                  Tested with 60fps micro-interactions, keyboard accessibility, and state fidelity.
                </BodyText>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Button Matrix */}
                <div className="lg:col-span-6 space-y-4">
                  <Card variant="glass" className="space-y-6 p-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Button Variations</h4>
                      <p className="text-xs text-[#94A3B8]">Designed for hierarchy, restraint, and deliberate action.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="primary">Primary Solid</Button>
                        <Button variant="secondary">Secondary Card</Button>
                        <Button variant="outline">Outline Hairline</Button>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Button variant="glow" icon={<ArrowRight className="w-4 h-4" />}>
                          Ascent Glow
                        </Button>
                        <Button variant="ghost">Ghost Nav</Button>
                        <Button variant="monastic">Monastic Underline →</Button>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button size="sm" variant="primary">Small</Button>
                        <Button size="md" variant="primary">Medium</Button>
                        <Button size="lg" variant="primary">Large Action</Button>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Badge & Pill Matrix */}
                <div className="lg:col-span-6 space-y-4">
                  <Card variant="glass" className="space-y-6 p-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Badges & Indicators</h4>
                      <p className="text-xs text-[#94A3B8]">Micro-status pills for institutional state clarity.</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default State</Badge>
                        <Badge variant="accent" dot>Ascent Active</Badge>
                        <Badge variant="emerald" dot>100% Free</Badge>
                        <Badge variant="gold" dot>Experienced</Badge>
                        <Badge variant="mono">[ STAGE_01 ]</Badge>
                      </div>

                      <div className="p-4 rounded-xl bg-[#08090B] border border-white/[0.06] space-y-2">
                        <span className="font-mono text-[10px] text-[#64748B]">INTERACTIVE CARD HOVER TEST</span>
                        <Card variant="interactive" className="p-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">Hover over this surface</span>
                            <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                          </div>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>

              </div>

            </div>
          </Container>
        </section>
      )}

      {/* ---------------------------------------------------------
          INSTITUTIONAL MANIFESTO SUMMARY
          --------------------------------------------------------- */}
      <section className="relative pt-4">
        <Container>
          <GlassPanel blur="lg" borderStyle="medium" className="p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              PHASE 01 FOUNDATIONS COMPLETE & VERIFIED
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready for Phase 02 Interactive Journey Implementation
            </h3>

            <p className="text-[#94A3B8] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Design tokens, typography scales, restrained color matrices, 60fps canvas visualizers, and responsive component foundations are locked and adhere to the strict YESA philosophy.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" onClick={() => onSelectView('ascent')}>
                Explore The Ascent Stages
              </Button>
              <Button variant="outline" onClick={() => onSelectView('tokens')}>
                Inspect Color Tokens
              </Button>
            </div>
          </GlassPanel>
        </Container>
      </section>

    </div>
  );
};
