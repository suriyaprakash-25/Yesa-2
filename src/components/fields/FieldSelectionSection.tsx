import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../core/Container';
import { YESA_DISCIPLINES, type Discipline } from './fieldData';
import { DisciplineVisual } from './FieldVisuals';

interface FieldSelectionSectionProps {
  onSelectField?: (fieldId: string) => void;
}

export const FieldSelectionSection: React.FC<FieldSelectionSectionProps> = ({
  onSelectField,
}) => {
  const [activeId, setActiveId] = useState<string>(YESA_DISCIPLINES[0].id);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeDiscipline =
    YESA_DISCIPLINES.find((d) => d.id === activeId) || YESA_DISCIPLINES[0];

  const handleSelect = (discipline: Discipline) => {
    setSelectedId(discipline.id);
    if (onSelectField) {
      onSelectField(discipline.id);
    }
  };

  return (
    <section
      id="fields"
      className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] py-10 md:py-12 border-t border-[var(--border-subtle)] overflow-hidden scroll-mt-20 transition-colors duration-300"
    >
      <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10 text-left">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
            <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
            <span>CHOOSE YOUR FIELD</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.05] [overflow-wrap:normal] [word-break:keep-all]">
            Specialized tracks built for exceptional talent.
          </h2>
        </div>

        {/* Desktop Split Layout (>= lg) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start relative">
          
          {/* Left Column: Interactive Tab Rail */}
          <div className="lg:col-span-5 flex flex-col space-y-2 relative">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-2">
              <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                DISCIPLINE SELECTOR
              </span>
              <span className="font-mono text-[11px] text-[var(--accent-base)] font-bold">04 DOMAINS</span>
            </div>

            {YESA_DISCIPLINES.map((discipline) => {
              const isActive = discipline.id === activeId;
              return (
                <div key={discipline.id} className="relative">
                  <button
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
                    className={`group relative w-full text-left p-5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between z-10 ${
                      isActive
                        ? 'bg-[var(--color-surface-card)] border border-[var(--accent-base)]/50 shadow-[var(--shadow-subtle)]'
                        : 'bg-transparent border border-transparent hover:bg-[var(--color-surface-card)]/50 hover:border-[var(--border-subtle)]'
                    }`}
                  >
                    {/* Left Side: Number & Name */}
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isActive ? 'text-[var(--accent-base)]' : 'text-[var(--text-secondary)]/70 group-hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {discipline.num}
                      </span>

                      <span
                        className={`font-display font-black text-xl sm:text-2xl tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-[var(--text-primary)] translate-x-1'
                            : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {discipline.title}
                      </span>
                    </div>

                    {/* Active Indicator Node */}
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase text-[var(--accent-base)] font-bold tracking-wider hidden xl:inline">
                            SELECTED
                          </span>
                          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-base)] border border-[var(--accent-light)] shadow-[var(--shadow-glow-accent)]" />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Architectural Connecting Bridge Line */}
                  {isActive && (
                    <motion.div
                      layoutId="discipline-map-bridge"
                      className="hidden lg:flex items-center absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 w-8 xl:w-12 pointer-events-none z-20"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    >
                      <div className="h-[2px] w-full bg-gradient-to-r from-[var(--accent-base)] to-[var(--accent-light)] shadow-[var(--shadow-glow-accent)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] -ml-1 shrink-0 shadow-sm" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Unified Detail Panel */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-10 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] min-h-[480px] flex flex-col justify-between overflow-hidden">
              {/* Corner Architectural Bracket */}
              <div className="absolute top-5 right-5 w-6 h-6 border-t border-r border-[var(--accent-base)]/50 pointer-events-none" />

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
                  {/* Panel Top */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[var(--accent-base)] tracking-wider">
                          {activeDiscipline.tag}
                        </span>
                        <div className="w-4 h-[1px] bg-[var(--accent-base)]/40" />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                          {activeDiscipline.spec}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-glow)] text-[var(--accent-base)] font-bold">
                        {activeDiscipline.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] tracking-tight leading-tight">
                      {activeDiscipline.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                    {activeDiscipline.shortDesc}
                  </p>

                  {/* Middle Architectural Visual Identity */}
                  <div className="w-full">
                    <DisciplineVisual id={activeDiscipline.id} />
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[var(--text-secondary)] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)]" />
                      Direct Pathway Alignment
                    </span>

                    <button
                      onClick={() => handleSelect(activeDiscipline)}
                      className={`group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        selectedId === activeDiscipline.id
                          ? 'bg-[var(--accent-base)] text-[var(--color-bg-base)] shadow-md'
                          : 'bg-[var(--accent-base)] hover:bg-[var(--accent-light)] text-[var(--color-bg-base)] hover:scale-[1.03] shadow-sm hover:shadow-[var(--shadow-glow-accent)]'
                      }`}
                    >
                      {selectedId === activeDiscipline.id ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-white" />
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

        {/* Mobile Selection Tabs (< lg) */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
            {YESA_DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeId === d.id
                    ? 'bg-[var(--accent-base)] text-[var(--color-bg-base)] font-bold shadow-sm'
                    : 'bg-[var(--color-surface-card)] text-[var(--text-secondary)] border border-[var(--border-subtle)]'
                }`}
              >
                {d.num}. {d.title}
              </button>
            ))}
          </div>

          {/* Active Detail Card on Mobile */}
          <div className="p-6 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] flex flex-col space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[var(--accent-base)]">
                  {activeDiscipline.tag}
                </span>
                <span className="font-mono text-[10px] text-[var(--accent-base)] px-2 py-0.5 rounded bg-[var(--accent-dim)] border border-[var(--accent-glow)] font-semibold">
                  {activeDiscipline.badge}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-[var(--text-primary)]">
                {activeDiscipline.title}
              </h3>
            </div>

            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              {activeDiscipline.shortDesc}
            </p>

            <div className="w-full">
              <DisciplineVisual id={activeDiscipline.id} />
            </div>

            <button
              onClick={() => handleSelect(activeDiscipline)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider bg-[var(--accent-base)] text-[var(--color-bg-base)] hover:bg-[var(--accent-light)] transition-all cursor-pointer shadow-md"
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
