import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';
import { OfferingCard } from './OfferingCard';
import type { OfferingType } from './OfferingCard';
import collaborationImg from '../../assets/yesa_collaboration.webp';

interface OfferingItem {
  type: OfferingType;
  num: string;
  title: string;
  sublabel: string;
  description: string;
  tag: string;
  spec: string;
}

export const InfrastructureSection: React.FC = () => {
  const offerings: OfferingItem[] = [
    {
      type: 'trainings',
      num: '01',
      title: 'Free Trainings',
      sublabel: 'FOUNDATION',
      description:
        'Zero-cost barrier. Access foundational knowledge and specialized tracks designed to unearth your potential without financial friction.',
      tag: 'Zero Cost',
      spec: 'Foundational & Specialized Tracks',
    },
    {
      type: 'experience',
      num: '02',
      title: 'Experience-ship',
      sublabel: 'IMMERSION',
      description:
        'Structured transition from initial observation to paid commercial internship, embedding you inside real-world production environments.',
      tag: 'Industry Paid',
      spec: 'Observation to Paid Placement',
    },
    {
      type: 'leaders',
      num: '03',
      title: 'Industry Leaders',
      sublabel: 'MENTORSHIP',
      description:
        'Cohort-based progression guided by practitioners who have built, scaled, and led tier-one engineering and venture teams.',
      tag: '1-on-1 Access',
      spec: 'Cohort-Based Practitioner Guidance',
    },
    {
      type: 'global',
      num: '04',
      title: 'Global Lecturers',
      sublabel: 'CURRICULUM',
      description:
        'Borderless curriculum and masterclasses from world-class minds, expanding your engineering perspective beyond geographic limitations.',
      tag: 'Borderless',
      spec: 'Global Masterclasses & Top Minds',
    },
  ];

  return (
    <section id="what-we-do" className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] pt-16 pb-16 md:pt-22 md:pb-22 border-t border-[var(--border-subtle)] overflow-hidden scroll-mt-20 transition-colors duration-300">
      <Container size="full" className="max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-base)] font-semibold">
              WHAT WE DO
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.05] [overflow-wrap:normal] [word-break:keep-all]">
            A 100% free incubator designed to architect your gradual development.
          </h2>
        </div>

        {/* Supporting Visual Anchor: High-End Editorial Collaboration Scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border-subtle)] mb-8 lg:mb-10 bg-[var(--color-surface-card)] shadow-[var(--shadow-elevated)]"
        >
          {/* 16:9 Aspect ratio container with overlay */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={collaborationImg}
              alt="YESA Fellows collaborating in an architectural incubator studio"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
            {/* Bottom Scrim for HUD legibility only (bottom 176px) — upper photo is 100% untouched and crystal clear */}
            <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Corner Architectural Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[var(--accent-base)]/60 pointer-events-none" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[var(--accent-base)]/60 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[var(--accent-base)]/60 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[var(--accent-base)]/60 pointer-events-none" />

            {/* Image Overlay HUD Metadata */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-8 max-w-full z-10">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#9AEDFC] font-bold block mb-1.5">
                  INCUBATOR ECOSYSTEM · COHORT LABS
                </span>
                <p className="font-display font-bold text-lg sm:text-2xl text-white tracking-tight leading-snug">
                  High-velocity peer immersion & verified industry mentorship.
                </p>
              </div>

              {/* HUD Badges */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
                <span className="font-mono text-[10px] sm:text-xs px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white whitespace-nowrap shadow-sm font-medium">
                  ZERO TUITION
                </span>
                <span className="font-mono text-[10px] sm:text-xs px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white whitespace-nowrap shadow-sm font-medium">
                  1-ON-1 GUIDANCE
                </span>
                <span className="font-mono text-[10px] sm:text-xs px-3 py-1.5 rounded-lg bg-[#009D9E]/30 text-[#9AEDFC] backdrop-blur-md border border-[#009D9E]/60 font-bold whitespace-nowrap shadow-sm">
                  100% MERIT
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Across Infrastructure Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 w-full">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={offering.type}
              type={offering.type}
              num={offering.num}
              title={offering.title}
              sublabel={offering.sublabel}
              description={offering.description}
              tag={offering.tag}
              spec={offering.spec}
              delay={index * 0.08}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
