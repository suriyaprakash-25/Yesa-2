import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../core/Container';

interface JourneyStage {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  metric: string;
  lightCardBg: string;
  lightCardBorder: string;
  lightNumColor: string;
  lightPillBg: string;
  lightPillBorder: string;
  lightPillText: string;
  darkCardBg: string;
  darkCardBorder: string;
  darkNumColor: string;
  darkPillBg: string;
  darkPillBorder: string;
  darkPillText: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    num: '01',
    title: 'Application',
    subtitle: 'INTAKE PROTOCOL',
    desc: 'We begin by carefully evaluating your intrinsic drive, engineering curiosity, and shared vision. This initial assessment helps us determine alignment with the incubator ecosystem—with a strict zero tuition barrier for all accepted fellows.',
    metric: '100% MERIT EVALUATION',
    lightCardBg: 'bg-[#F2F8F5]',
    lightCardBorder: 'border-[#D4E8DC]',
    lightNumColor: 'text-[#007577]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#C2E0CE]',
    lightPillText: 'text-[#007577]',
    darkCardBg: 'dark:bg-[#101713]',
    darkCardBorder: 'dark:border-[#1E3326]',
    darkNumColor: 'dark:text-[#34D399]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#1E3326]',
    darkPillText: 'dark:text-[#34D399]',
  },
  {
    num: '02',
    title: 'Interview',
    subtitle: 'BILATERAL EVALUATION',
    desc: 'Direct alignment dialogue with senior fellows and industry mentors. We believe strong relationships lead to exceptional outcomes—evaluating raw technical velocity, problem-solving intuition, and collaborative temperament.',
    metric: 'DIRECT FELLOW DIALOGUE',
    lightCardBg: 'bg-[#FAF7EE]',
    lightCardBorder: 'border-[#EAE3CB]',
    lightNumColor: 'text-[#926008]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#DFD5B6]',
    lightPillText: 'text-[#926008]',
    darkCardBg: 'dark:bg-[#181510]',
    darkCardBorder: 'dark:border-[#38311B]',
    darkNumColor: 'dark:text-[#FBBF24]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#38311B]',
    darkPillText: 'dark:text-[#FBBF24]',
  },
  {
    num: '03',
    title: 'Volunteering',
    subtitle: 'OBSERVATION TIMELINE',
    desc: 'An immersive observation period capped strictly at six months maximum. Shadow live enterprise engineering squads, assimilate institutional best practices, absorb production workflows, and gradually contribute to core modules.',
    metric: 'MAX 6 MONTHS OBSERVATION',
    lightCardBg: 'bg-[#FAF3F3]',
    lightCardBorder: 'border-[#EED9D9]',
    lightNumColor: 'text-[#A23B3B]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#E5C4C4]',
    lightPillText: 'text-[#A23B3B]',
    darkCardBg: 'dark:bg-[#181112]',
    darkCardBorder: 'dark:border-[#381E21]',
    darkNumColor: 'dark:text-[#F87171]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#381E21]',
    darkPillText: 'dark:text-[#F87171]',
  },
  {
    num: '04',
    title: 'Paid Internship',
    subtitle: 'COMMERCIAL SPRINT LABS',
    desc: 'Transition directly into commercial sprint labs. Work on production-grade infrastructure projects alongside senior staff architects with guaranteed compensation, rigorous code reviews, and verified deployment output.',
    metric: 'GUARANTEED STIPEND',
    lightCardBg: 'bg-[#F0F7FA]',
    lightCardBorder: 'border-[#D1E8F2]',
    lightNumColor: 'text-[#0369A1]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#BBDDF0]',
    lightPillText: 'text-[#0369A1]',
    darkCardBg: 'dark:bg-[#0F1519]',
    darkCardBorder: 'dark:border-[#1A3342]',
    darkNumColor: 'dark:text-[#38BDF8]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#1A3342]',
    darkPillText: 'dark:text-[#38BDF8]',
  },
  {
    num: '05',
    title: 'Experienced',
    subtitle: 'SQUAD LEADERSHIP',
    desc: 'Step into squad leadership within the YESA ecosystem. Direct multi-disciplinary engineering pods, develop institutional velocity, mentor incoming cohorts, and architect critical paths across active technical roadmaps.',
    metric: 'SQUAD COMMAND & MENTORSHIP',
    lightCardBg: 'bg-[#F4F3FA]',
    lightCardBorder: 'border-[#DDD9EE]',
    lightNumColor: 'text-[#5B3EA3]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#C8C2E6]',
    lightPillText: 'text-[#5B3EA3]',
    darkCardBg: 'dark:bg-[#14111A]',
    darkCardBorder: 'dark:border-[#2B233D]',
    darkNumColor: 'dark:text-[#A78BFA]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#2B233D]',
    darkPillText: 'dark:text-[#A78BFA]',
  },
  {
    num: '06',
    title: 'World-Class Leader',
    subtitle: 'ARCHITECTURAL APEX',
    desc: 'The culmination of the fellowship journey. Graduate as an autonomous, recognized industry leader equipped with direct venture capital access, high-trust peer networks, and the velocity to build and scale global institutions.',
    metric: 'GLOBAL VENTURE SCALE',
    lightCardBg: 'bg-[#EDF8F8]',
    lightCardBorder: 'border-[#C7EBEB]',
    lightNumColor: 'text-[#007577]',
    lightPillBg: 'bg-white/80',
    lightPillBorder: 'border-[#AEE2E2]',
    lightPillText: 'text-[#007577]',
    darkCardBg: 'dark:bg-[#0E1617]',
    darkCardBorder: 'dark:border-[#153436]',
    darkNumColor: 'dark:text-[#2DD4BF]',
    darkPillBg: 'dark:bg-black/30',
    darkPillBorder: 'dark:border-[#153436]',
    darkPillText: 'dark:text-[#2DD4BF]',
  },
];

export const YesaJourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] pt-20 pb-32 md:pt-28 md:pb-40 border-t border-[var(--border-subtle)] overflow-visible scroll-mt-20 transition-colors duration-300"
    >
      <Container size="full" className="max-w-[1440px] px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
            <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
            <span>OUR PROCESS</span>
            <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight leading-[1.05] mb-5 [overflow-wrap:normal] [word-break:keep-all]">
            The 6 Stages of Growth.
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal max-w-2xl mx-auto leading-relaxed">
            From initial intake protocol to recognized global architectural leadership. A deliberate, 100% free incubator journey designed for progressive velocity.
          </p>
        </div>

        {/* Sticky Card Stacking Deck */}
        <div className="relative max-w-[740px] mx-auto pb-24">
          {JOURNEY_STAGES.map((stage, idx) => {
            // Progressive top offset ensures preceding card headers remain stacked & visible
            const topOffsetDesktop = 120 + idx * 24; // e.g. 120px, 144px, 168px, 192px...
            const topOffsetMobile = 90 + idx * 16;

            return (
              <div
                key={stage.num}
                className="sticky w-full mb-12 sm:mb-16 md:mb-20 last:mb-0 transition-all duration-300"
                style={{
                  top: `clamp(${topOffsetMobile}px, 14vh + ${idx * 20}px, ${topOffsetDesktop}px)`,
                  zIndex: idx + 10,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full rounded-2xl sm:rounded-3xl p-7 sm:p-10 md:p-12 border ${stage.lightCardBg} ${stage.lightCardBorder} ${stage.darkCardBg} ${stage.darkCardBorder} transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]`}
                >
                  {/* Stage Number (Centered Large Display) */}
                  <div className="flex flex-col items-center justify-center text-center mb-4">
                    <span
                      className={`font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-none ${stage.lightNumColor} ${stage.darkNumColor} tracking-tight select-none`}
                    >
                      {parseInt(stage.num, 10)}
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[var(--text-secondary)] font-semibold mt-2.5">
                      {stage.subtitle}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] text-center tracking-tight leading-tight mb-4 [overflow-wrap:normal] [word-break:keep-all]">
                    {stage.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-[15px] md:text-base text-[var(--text-secondary)] text-center leading-relaxed font-normal max-w-xl mx-auto mb-6">
                    {stage.desc}
                  </p>

                  {/* Bottom Milestone Metric Tag */}
                  <div className="flex justify-center">
                    <div
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] sm:text-xs font-mono font-semibold tracking-wider ${stage.lightPillBg} ${stage.lightPillBorder} ${stage.lightPillText} ${stage.darkPillBg} ${stage.darkPillBorder} ${stage.darkPillText}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      <span>{stage.metric}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
