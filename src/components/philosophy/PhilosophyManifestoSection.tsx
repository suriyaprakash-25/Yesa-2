import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { Container } from '../core/Container';
import { Badge } from '../core/Badge';

interface PhilosophyManifestoSectionProps {
  onOpenApply: () => void;
  onExploreJourney?: () => void;
}

export const PhilosophyManifestoSection: React.FC<PhilosophyManifestoSectionProps> = ({
  onOpenApply: _onOpenApply,
  onExploreJourney,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  // Progressive kinetic ascent steps
  const progressionSteps = [
    {
      word: 'CHOOSE',
      phase: 'STAGE 01',
      subtitle: 'Your Field of Conviction',
      description: 'You select the discipline you want to master—engineering, AI, design, strategy, or ventures. No arbitrary prerequisite barriers.',
    },
    {
      word: 'LEARN',
      phase: 'STAGE 02',
      subtitle: 'World-Class Foundations',
      description: 'Absorb high-level frameworks and masterclasses led by distinguished global lecturers and curriculum architects.',
    },
    {
      word: 'OBSERVE',
      phase: 'STAGE 03',
      subtitle: 'Cohort Immersion',
      description: 'Work alongside peers in an observation and volunteering structure, experiencing how industry leaders solve non-trivial problems.',
    },
    {
      word: 'CONTRIBUTE',
      phase: 'STAGE 04',
      subtitle: 'Compensated Execution',
      description: 'Advance to paid internships and direct operational impact, shipping modules on active real-world projects.',
    },
    {
      word: 'LEAD',
      phase: 'STAGE 05',
      subtitle: 'Venture & Autonomy',
      description: 'Direct institutional initiatives or receive incubation investment into your own breakthrough enterprise.',
    },
  ];

  // The 4 authentic YESA offerings with bespoke visual identifiers (no generic icons)
  const offerings = [
    {
      id: 'trainings',
      title: 'Free Trainings',
      tagline: '100% Free Comprehensive Curriculum',
      description: 'In-depth domain education structured around actual competence rather than commercial certification mill fees. Zero tuition, ever.',
      glyph: (
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center font-mono text-xs font-bold text-sky-400">
          0.00$
        </div>
      ),
      spec: 'ZERO TUITION',
    },
    {
      id: 'experienceships',
      title: 'Experience-Ship Programs',
      tagline: 'Applied Real-World Immersion',
      description: 'Moving beyond passive tutorials. Participants work within live project environments with tangible operational stakes.',
      glyph: (
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
          <div className="w-3.5 h-3.5 border-2 border-emerald-400 rounded-sm rotate-45 animate-pulse" />
        </div>
      ),
      spec: 'LIVE PROJECTS',
    },
    {
      id: 'leaders',
      title: 'Cohort Programs with Industry Leaders',
      tagline: 'Active Practitioner Collaboration',
      description: 'Small, focused peer cohorts led by seasoned practitioners who review work, challenge thinking, and model decision-making.',
      glyph: (
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
          <div className="flex -space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full border border-amber-400 bg-amber-400/20" />
            <span className="w-2.5 h-2.5 rounded-full border border-sky-400 bg-sky-400/20" />
          </div>
        </div>
      ),
      spec: 'COHORT DRIVEN',
    },
    {
      id: 'lecturers',
      title: 'Guidance from Top Global Lecturers',
      tagline: 'International Intellectual Depth',
      description: 'Direct sessions with distinguished educators and thought leaders from top academic and research institutions around the world.',
      glyph: (
        <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center font-mono text-[10px] text-purple-300">
          [GLO]
        </div>
      ),
      spec: 'WORLD-CLASS',
    },
  ];

  return (
    <section id="philosophy" className="relative py-28 md:py-40 bg-[#08090B] text-[#F3F5F7] overflow-hidden">
      
      {/* ---------------------------------------------------------
          CONTINUOUS ASCENT SPINE LINE FROM HERO
          --------------------------------------------------------- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-b from-sky-400/40 via-white/[0.15] to-sky-400/30" />
      </div>

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-sky-500/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />

      <Container size="lg">
        <div className="relative z-10 space-y-28 md:space-y-36">

          {/* ---------------------------------------------------------
              PART 1: THE EDITORIAL MANIFESTO
              "YOU DON'T NEED ANOTHER COURSE. YOU NEED A PATH."
              --------------------------------------------------------- */}
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Top Indicator Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
                  01 // THE CORE PHILOSOPHY
                </span>
              </div>
              <Badge variant="emerald" dot className="font-mono text-xs">
                100% FREE
              </Badge>
            </motion.div>

            {/* Monumental Editorial Statement */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h2 className="font-display font-extrabold tracking-[-0.04em] text-white leading-[1.0] text-[clamp(2.5rem,5.5vw+1rem,5.5rem)]">
                YOU DON'T NEED <br />
                <span className="text-[#5D6673]">ANOTHER COURSE.</span> <br />
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#38BDF8] bg-clip-text text-transparent">
                  YOU NEED A PATH.
                </span>
              </h2>
            </motion.div>

            {/* Supporting Clarification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto space-y-4"
            >
              <p className="font-sans text-xl sm:text-2xl text-[#94A3B8] font-light leading-relaxed">
                "Choose your field. <span className="text-white font-medium">YESA provides the path.</span>"
              </p>
              
              <p className="text-sm text-[#64748B] leading-relaxed max-w-lg mx-auto">
                YESA is not simply delivering content. It provides a structured mechanism for gradual, continuous development into authentic leadership.
              </p>
            </motion.div>

          </div>

          {/* ---------------------------------------------------------
              PART 2: THE 5-STAGE KINETIC PROGRESSION STRIP
              CHOOSE → LEARN → OBSERVE → CONTRIBUTE → LEAD
              --------------------------------------------------------- */}
          <div className="space-y-8">
            
            <div className="text-center space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400">
                GRADUAL DEVELOPMENT IN MOTION
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                The Movement of Growth
              </h3>
            </div>

            {/* Interactive Kinetic Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              {progressionSteps.map((step, idx) => {
                const isActive = activeStageIndex === idx;

                return (
                  <button
                    key={step.word}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[160px] group ${
                      isActive
                        ? 'bg-[#13171E] border-sky-400/50 shadow-[0_8px_30px_rgba(56,189,248,0.2)]'
                        : 'bg-[#0E1116]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#11141A]'
                    }`}
                  >
                    {/* Active Top Glow Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activePhilosophyTab"
                        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-400 via-white to-sky-400"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center justify-between w-full">
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          : 'bg-white/[0.04] text-[#64748B] border border-white/[0.06]'
                      }`}>
                        {step.phase}
                      </span>
                      
                      {idx < progressionSteps.length - 1 ? (
                        <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          isActive ? 'text-sky-400' : 'text-[#475569]'
                        }`} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" />
                      )}
                    </div>

                    <div className="space-y-1 mt-4">
                      <div className={`font-display text-2xl font-extrabold tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-white'
                      }`}>
                        {step.word}
                      </div>
                      <div className="text-xs text-sky-400/90 font-medium font-sans">
                        {step.subtitle}
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/[0.06] text-[11px] text-[#64748B] leading-relaxed line-clamp-2">
                      {step.description}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deep-Dive Banner for Selected Stage */}
            <div className="p-6 rounded-2xl bg-[#0E1116]/90 border border-white/[0.08] backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-sky-400">
                    [{progressionSteps[activeStageIndex].phase} : {progressionSteps[activeStageIndex].word}]
                  </span>
                  <span className="text-xs text-[#94A3B8]">
                    — {progressionSteps[activeStageIndex].subtitle}
                  </span>
                </div>
                <p className="text-sm text-[#CBD5E1] max-w-3xl leading-relaxed">
                  {progressionSteps[activeStageIndex].description}
                </p>
              </div>

              <div className="font-mono text-xs text-[#64748B] shrink-0">
                100% FREE PATHWAY
              </div>
            </div>

          </div>

          {/* ---------------------------------------------------------
              PART 3: THE FOUR AUTHENTIC YESA OFFERINGS
              (Free Trainings, Experience-ship, Industry Leaders, Global Lecturers)
              --------------------------------------------------------- */}
          <div className="space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
                  INSTITUTIONAL ARCHITECTURE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  What YESA Actually Provides
                </h3>
              </div>
              <p className="text-xs font-mono text-[#64748B] max-w-xs">
                Zero tuition. No commercial courses. Pure structural progression.
              </p>
            </div>

            {/* 4 Distinct Editorial Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offerings.map((item, idx) => {
                const isHovered = hoveredPillar === idx;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredPillar(idx)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                      isHovered
                        ? 'bg-[#13171E] border-white/[0.25] shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
                        : 'bg-[#0E1116]/80 border-white/[0.08]'
                    }`}
                  >
                    {/* Top Edge Accent */}
                    <div className={`absolute inset-x-0 top-0 h-[1px] transition-opacity duration-300 ${
                      isHovered ? 'bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-100' : 'opacity-0'
                    }`} />

                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        {item.glyph}
                        <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[#94A3B8]">
                          {item.spec}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs font-sans text-sky-400 mt-1 font-medium">
                          {item.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#64748B]">
                      <span>YESA CORE PROVISION</span>
                      <span className="text-emerald-400">100% FREE</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ---------------------------------------------------------
              PART 4: SEAMLESS TRANSITION CONDUIT TO "THE YESA JOURNEY"
              --------------------------------------------------------- */}
          <div className="pt-8 text-center relative">
            <div className="inline-flex flex-col items-center gap-3">
              <button
                onClick={onExploreJourney}
                className="group flex flex-col items-center gap-2 focus:outline-none cursor-pointer"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#94A3B8] group-hover:text-white transition-colors">
                  THE ASCENT CONTINUES
                </span>
                
                <div className="px-5 py-2 rounded-full bg-[#0E1116] border border-white/[0.1] text-xs font-sans text-white group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all flex items-center gap-2">
                  <span>Explore The Full Progression Pathway</span>
                  <ArrowDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </button>

              <div className="w-[1px] h-12 bg-gradient-to-b from-sky-400 to-transparent" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
