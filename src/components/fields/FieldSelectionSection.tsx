import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { YESA_DISCIPLINES, type Discipline } from './fieldData';
import { DisciplineVisual } from './FieldVisuals';

interface FieldSelectionSectionProps {
  onSelectField?: (fieldId: string) => void;
}

export const FieldSelectionSection: React.FC<FieldSelectionSectionProps> = ({ onSelectField }) => {
  const [activeId, setActiveId] = useState<string>(YESA_DISCIPLINES[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeDiscipline: Discipline =
    YESA_DISCIPLINES.find((d) => d.id === activeId) || YESA_DISCIPLINES[0];

  const handleSelect = (field: Discipline) => {
    setSelectedId(field.id);
    if (onSelectField) {
      onSelectField(field.id);
    } else {
      const target = document.getElementById('experience') || document.getElementById('apply');
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  return (
    <section
      id="fields"
      className="relative w-full bg-[#090D0F] pt-28 pb-28 md:pt-36 md:pb-36 border-t border-white/[0.06] overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Grid Texture */}
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
        <div className="max-w-3xl mb-12 md:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
              STAGE 07 — FIELD SELECTION
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] [overflow-wrap:normal] [word-break:keep-all]">
            CHOOSE<br />YOUR FIELD.
          </h2>
          <p className="text-sm md:text-base text-[#8A8A8A] font-light mt-4 max-w-xl leading-relaxed">
            Select your discipline. Your entire YESA path — from initial volunteering to world-class
            leadership — adapts to your chosen domain.
          </p>
        </div>

        {/* Desktop Interactive Discipline Map (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Column: Interactive Discipline List */}
          <div className="lg:col-span-5 flex flex-col space-y-4" role="tablist" aria-label="YESA Disciplines">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-2">
              <span className="font-mono text-xs text-[#8A8A8A] uppercase tracking-[0.2em]">
                DISCIPLINE SELECTOR
              </span>
              <span className="font-mono text-[11px] text-[#009D9E]">04 SPECIALIZED TRACKS</span>
            </div>

            {YESA_DISCIPLINES.map((discipline) => {
              const isActive = discipline.id === activeId;
              return (
                <button
                  key={discipline.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${discipline.id}`}
                  tabIndex={0}
                  onClick={() => setActiveId(discipline.id)}
                  onMouseEnter={() => setActiveId(discipline.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(discipline.id);
                    }
                  }}
                  className={`group relative w-full text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-white/[0.04] border border-[#009D9E]/50 shadow-[0_4px_24px_rgba(0,157,158,0.15)]'
                      : 'bg-transparent border border-transparent hover:bg-white/[0.02] hover:border-white/[0.04]'
                  }`}
                >
                  {/* Left Side: Number & Name */}
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isActive ? 'text-[#009D9E]' : 'text-[#8A8A8A]/60 group-hover:text-white/60'
                      }`}
                    >
                      {discipline.num}
                    </span>

                    <span
                      className={`font-display font-black text-xl sm:text-2xl tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-white translate-x-1'
                          : 'text-[#8A8A8A] opacity-40 group-hover:opacity-80'
                      }`}
                    >
                      {discipline.title}
                    </span>
                  </div>

                  {/* Active Indicator & Interactive Arrow */}
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <motion.div
                        layoutId="active-field-indicator"
                        className="flex items-center gap-2"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      >
                        <span className="font-mono text-[10px] uppercase text-[#9AEDFC] font-semibold tracking-wider hidden xl:inline">
                          ACTIVE
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#009D9E] shadow-[0_0_10px_#009D9E]" />
                      </motion.div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Unified Detail Panel (Smooth Cross-Fade) */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[480px] flex flex-col justify-between overflow-hidden">
              {/* Corner Architectural Bracket */}
              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[#009D9E]/50 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDiscipline.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  id={`panel-${activeDiscipline.id}`}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  {/* Panel Top: Category Tag & Large Heading */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#009D9E] tracking-wider">
                          {activeDiscipline.tag}
                        </span>
                        <div className="w-4 h-[1px] bg-[#009D9E]/40" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8A8A]">
                          {activeDiscipline.spec}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[#009D9E]/15 border border-[#009D9E]/30 text-[#9AEDFC] font-medium">
                        {activeDiscipline.outcome}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                      {activeDiscipline.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#8A8A8A] font-light leading-relaxed">
                    {activeDiscipline.shortDesc}
                  </p>

                  {/* Middle Architectural Visual Identity */}
                  <div className="w-full">
                    <DisciplineVisual id={activeDiscipline.id} />
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[#8A8A8A] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
                      Full Pathway Customization Enabled
                    </span>

                    <button
                      onClick={() => handleSelect(activeDiscipline)}
                      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        selectedId === activeDiscipline.id
                          ? 'bg-[#9AEDFC] text-[#090D0F] shadow-[0_0_25px_rgba(0,157,158,0.7)]'
                          : 'bg-[#009D9E] hover:bg-[#9AEDFC] text-[#090D0F] hover:scale-[1.03] shadow-[0_0_20px_rgba(0,157,158,0.3)]'
                      }`}
                    >
                      {selectedId === activeDiscipline.id ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#090D0F]" />
                          <span>DISCIPLINE LOCKED</span>
                        </>
                      ) : (
                        <>
                          <span>SELECT THIS DISCIPLINE</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Carousel (< lg) */}
        <div className="lg:hidden">
          {/* Quick Selection Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
            {YESA_DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeId === d.id
                    ? 'bg-[#009D9E] text-[#090D0F] font-bold shadow-[0_0_12px_rgba(0,157,158,0.4)]'
                    : 'bg-white/[0.03] text-[#8A8A8A] border border-white/[0.06]'
                }`}
              >
                {d.num}. {d.title}
              </button>
            ))}
          </div>

          {/* Active Detail Card on Mobile */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#009D9E]">
                  {activeDiscipline.tag}
                </span>
                <span className="font-mono text-[10px] text-[#9AEDFC] px-2 py-0.5 rounded bg-[#009D9E]/15 border border-[#009D9E]/30">
                  {activeDiscipline.outcome}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                {activeDiscipline.title}
              </h3>
            </div>

            <p className="text-xs text-[#8A8A8A] font-light leading-relaxed">
              {activeDiscipline.shortDesc}
            </p>

            <div className="w-full">
              <DisciplineVisual id={activeDiscipline.id} />
            </div>

            <button
              onClick={() => handleSelect(activeDiscipline)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[#009D9E] text-[#090D0F] hover:bg-[#9AEDFC] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,157,158,0.3)]"
            >
              <span>SELECT THIS DISCIPLINE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
