import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Container } from '../core/Container';
import { HeroInteractiveField } from './HeroInteractiveField';
import heroFellowsImg from '../../assets/hero_fellows.jpg';

interface HeroExperienceProps {
  onOpenApply: () => void;
  onExplorePath: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({
  onOpenApply,
  onExplorePath,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse movement for subtle parallax & interactive particle field
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleApply = () => {
    onOpenApply();
  };

  const handleExplore = () => {
    onExplorePath();
  };

  // Scroll animations for graceful exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Staggered Entrance Animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(5px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const microPathSteps = [
    { label: 'Volunteering', num: '01' },
    { label: 'Paid Internship', num: '02' },
    { label: 'Experienced', num: '03' },
    { label: 'World-Class Leader', num: '04' },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] w-full bg-[var(--color-bg-base)] text-[var(--text-primary)] overflow-hidden flex flex-col justify-between pt-24 pb-8 md:pt-32 md:pb-12 transition-colors duration-300"
    >
      {/* ========================================================================= */}
      {/* 1. Full-Bleed Ambient Background Photo Layer (z-0)                         */}
      {/* Uses crisp directional alpha masking to eliminate milky/foggy overlays     */}
      {/* ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[70%] lg:w-[65%] xl:w-[60%] pointer-events-none select-none z-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,transparent_10%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,1)_80%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_10%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,1)_80%)]">
        <img
          src={heroFellowsImg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-75 md:opacity-85 filter contrast-110 saturate-100 dark:opacity-35 dark:saturate-[0.85] dark:contrast-[1.05] transition-all duration-300"
          loading="eager"
        />

        {/* Dark-mode specific edge shadows */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-[#090D0F] via-[#090D0F]/70 to-transparent w-full h-full" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-[#090D0F] via-transparent to-[#090D0F]/85 w-full h-full" />
      </div>

      {/* ========================================================================= */}
      {/* 2. Full-width Interactive Particle Canvas (z-10)                          */}
      {/* Animate constellation particles over the atmospheric photo backdrop       */}
      {/* ========================================================================= */}
      <HeroInteractiveField mousePosition={mousePos} />

      {/* Subtle Corner Architectural Accent lines */}
      <div className="absolute top-28 left-8 w-12 h-12 border-t border-l border-[var(--border-subtle)] pointer-events-none hidden lg:block z-20" />
      <div className="absolute top-28 right-8 w-12 h-12 border-t border-r border-[var(--border-subtle)] pointer-events-none hidden lg:block z-20" />

      {/* ========================================================================= */}
      {/* 3. Left-Aligned Text Content & Actions Layer (z-20)                        */}
      {/* ========================================================================= */}
      <Container size="full" className="relative z-20 w-full max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16 flex-1 flex flex-col justify-center my-auto">
        <motion.div
          className="max-w-3xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          {/* 1. Eyebrow label — Human architectural kicker */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-base)] font-bold">
              <span className="w-5 h-[1.5px] bg-[var(--accent-base)]" />
              <span>100% FREE INCUBATOR PROGRAM</span>
            </div>
          </motion.div>

          {/* 2. Headline: "Incubator for Future Leaders." */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-7 w-full">
            <h1 className="font-display font-black text-[var(--text-primary)] text-[clamp(2.5rem,5.6vw,5.6rem)] tracking-[-0.035em] leading-[1.02] text-left [overflow-wrap:normal] [word-break:keep-all] break-normal max-w-3xl">
              Incubator for<br className="hidden sm:inline" /> Future Leaders.
            </h1>
          </motion.div>

          {/* 3. Subhead */}
          <motion.div variants={itemVariants} className="mb-7 sm:mb-8 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-light tracking-tight leading-relaxed">
              Choose your field. <span className="text-[var(--text-primary)] font-normal">We provide the path.</span>
            </p>
          </motion.div>

          {/* 4. Micro-path 01-04 Stage Pill Row */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 w-full">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-2.5 px-4 sm:px-5 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] backdrop-blur-md shadow-[var(--shadow-subtle)]">
              {microPathSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-[var(--accent-base)]">
                      {step.num}.
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] tracking-tight font-medium">
                      {step.label}
                    </span>
                  </div>
                  {idx < microPathSteps.length - 1 && (
                    <svg
                      className="w-3.5 h-3.5 text-[var(--accent-base)]/60 shrink-0 mx-0.5 sm:mx-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 3.5L10.5 8L6 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* 5. CTAs (Primary & Secondary) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1"
          >
            {/* Primary CTA */}
            <button
              onClick={handleApply}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--color-bg-base)] bg-[var(--accent-base)] hover:bg-[var(--accent-light)] hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer shadow-md hover:shadow-[var(--shadow-glow-accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-4"
              aria-label="Apply to the YESA incubator program"
            >
              <span>Apply to YESA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={handleExplore}
              className="group flex items-center gap-3 px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent-base)] focus-visible:outline-offset-4 rounded-full"
              aria-label="Scroll down to explore the YESA journey"
            >
              <div className="w-8 h-8 rounded-full border border-[var(--border-medium)] flex items-center justify-center group-hover:border-[var(--accent-base)] group-hover:text-[var(--accent-base)] transition-all">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest font-medium">
                Explore the Journey
              </span>
            </button>
          </motion.div>
        </motion.div>
      </Container>

      {/* ========================================================================= */}
      {/* 4. Ghost "YESA" Wordmark Backdrop                                         */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none flex justify-center -mb-6 sm:-mb-10 md:-mb-14 z-10">
        <span className="font-display font-black text-[18vw] leading-none text-[var(--ghost-wordmark-color)] tracking-tighter block translate-y-1/4 select-none transition-colors duration-300">
          YESA
        </span>
      </div>
    </section>
  );
};
