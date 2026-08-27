import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';
import { OfferingCard } from './OfferingCard';
import type { OfferingType } from './OfferingCard';
import collaborationImg from '../../assets/yesa_collaboration.jpg';

interface OfferingItem {
  type: OfferingType;
  num: string;
  title: string;
  sublabel: string;
  description: string;
  tag: string;
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
    },
    {
      type: 'experience',
      num: '02',
      title: 'Experience-ship',
      sublabel: 'IMMERSION',
      description:
        'Structured transition from initial observation to paid commercial internship, embedding you inside real-world production environments.',
      tag: 'Industry Paid',
    },
    {
      type: 'leaders',
      num: '03',
      title: 'Industry Leaders',
      sublabel: 'MENTORSHIP',
      description:
        'Cohort-based progression guided by practitioners who have built, scaled, and led tier-one engineering and venture teams.',
      tag: '1-on-1 Access',
    },
    {
      type: 'global',
      num: '04',
      title: 'Global Lecturers',
      sublabel: 'CURRICULUM',
      description:
        'Borderless curriculum and masterclasses from world-class minds, expanding your engineering perspective beyond geographic limitations.',
      tag: 'Borderless',
    },
  ];

  return (
    <section className="relative w-full bg-[#090D0F] py-24 md:py-36 border-t border-white/[0.06] overflow-hidden">
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
        <div className="max-w-3xl mb-16 md:mb-20 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#009D9E] font-semibold">
              WHAT WE DO
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] [overflow-wrap:normal] [word-break:keep-all]">
            A 100% free incubator designed to architect your gradual development.
          </h2>
        </div>

        {/* Supporting Visual Anchor: High-End Editorial Collaboration Scene */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] mb-12 lg:mb-16 bg-[#131719] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          {/* 16:9 Aspect ratio container with overlay */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img
              src={collaborationImg}
              alt="YESA Fellows collaborating in an architectural incubator studio"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F] via-[#090D0F]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090D0F]/70 via-transparent to-[#090D0F]/70" />

            {/* Corner Architectural Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#009D9E]/60 pointer-events-none" />
            <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#009D9E]/60 pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#009D9E]/60 pointer-events-none" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#009D9E]/60 pointer-events-none" />

            {/* Image Overlay HUD Metadata */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#009D9E] font-semibold block mb-1">
                  INCUBATOR ECOSYSTEM · COHORT LABS
                </span>
                <p className="font-display font-bold text-lg sm:text-2xl text-white tracking-tight">
                  High-velocity peer immersion & verified industry mentorship.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-white/70">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  ZERO TUITION
                </span>
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  1-ON-1 GUIDANCE
                </span>
                <span className="px-2.5 py-1 rounded bg-[#009D9E]/20 text-[#9AEDFC] backdrop-blur-md border border-[#009D9E]/40">
                  100% MERIT
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4-Across Infrastructure Cards Grid (Staggered by 80ms) */}
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
              delay={index * 0.08} // 80ms stagger per card
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
