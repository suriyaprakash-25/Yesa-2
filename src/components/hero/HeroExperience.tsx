import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Container } from '../core/Container';
import { HeroInteractiveField } from './HeroInteractiveField';
import heroFellowsImg from '../../assets/hero_fellows.jpg';

interface HeroExperienceProps {
  onOpenApply?: () => void;
  onExplorePath?: () => void;
  onNavigateSection?: (section: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({
  onOpenApply,
  onExplorePath,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects on scroll
  const yHeroText = useTransform(scrollY, [0, 900], [0, -80]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigate = useNavigate();

  const handleApply = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      navigate('/apply');
    }
  };

  const handleExplore = () => {
    if (onExplorePath) {
      onExplorePath();
    } else {
      const journeyEl = document.getElementById('journey') || document.getElementById('philosophy');
      if (journeyEl) journeyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Staggered cinematic animation container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
        duration: 0.8,
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
      className="relative min-h-[100vh] w-full bg-[#090D0F] overflow-hidden flex flex-col justify-between pt-24 pb-8 md:pt-32 md:pb-12"
    >
      {/* ========================================================================= */}
      {/* 1. Full-Bleed Ambient Background Photo Layer (z-0)                         */}
      {/* Covers the right ~65% of the hero with multi-directional #090D0F gradients */}
      {/* ========================================================================= */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[70%] lg:w-[65%] xl:w-[60%] pointer-events-none select-none z-0 overflow-hidden">
        {/* Supporting Editorial Photograph at 25-30% opacity on desktop, 16% on mobile */}
        <img
          src={heroFellowsImg}
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center opacity-16 md:opacity-28 lg:opacity-30 filter saturate-[0.85] contrast-[1.1]"
          loading="eager"
        />

        {/* Strong Left Horizontal Fade Mask into pure #090D0F */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D0F] via-[#090D0F]/60 to-transparent w-full h-full" />
        
        {/* Subtle Vertical Top and Bottom Edge Blend Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D0F] via-transparent to-[#090D0F]/90 w-full h-full" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090D0F]/40 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 2. Full-width Interactive Particle Canvas (z-10)                          */}
      {/* Animate constellation particles over the atmospheric photo backdrop       */}
      {/* ========================================================================= */}
      <HeroInteractiveField mousePosition={mousePos} />

      {/* Subtle Corner Architectural Accent lines */}
      <div className="absolute top-28 left-8 w-12 h-12 border-t border-l border-white/[0.08] pointer-events-none hidden lg:block z-20" />
      <div className="absolute top-28 right-8 w-12 h-12 border-t border-r border-white/[0.08] pointer-events-none hidden lg:block z-20" />

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
          {/* 1. Eyebrow label */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009D9E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009D9E]"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-medium">
                100% FREE INCUBATOR PROGRAM
              </span>
            </div>
          </motion.div>

          {/* 2. Headline: "Incubator for Future Leaders." */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-7 w-full">
            <h1 className="font-display font-black text-white text-[clamp(2.5rem,5.6vw,5.6rem)] tracking-[-0.035em] leading-[1.02] text-left [overflow-wrap:normal] [word-break:keep-all] break-normal max-w-3xl">
              Incubator for<br className="hidden sm:inline" /> Future Leaders.
            </h1>
          </motion.div>

          {/* 3. Subhead */}
          <motion.div variants={itemVariants} className="mb-7 sm:mb-8 max-w-xl">
            <p className="text-base sm:text-lg md:text-xl text-[#8A8A8A] font-light tracking-tight leading-relaxed">
              Choose your field. <span className="text-white font-normal">We provide the path.</span>
            </p>
          </motion.div>

          {/* 4. Micro-path 01-04 Stage Pill Row */}
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 w-full">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-2.5 px-4 sm:px-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              {microPathSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-mono text-[11px] sm:text-xs font-semibold text-[#009D9E]">
                      {step.num}.
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white tracking-tight font-medium">
                      {step.label}
                    </span>
                  </div>
                  {idx < microPathSteps.length - 1 && (
                    <svg
                      className="w-3.5 h-3.5 text-[#009D9E]/60 shrink-0 mx-0.5 sm:mx-1"
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
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#090D0F] bg-[#009D9E] hover:bg-[#9AEDFC] hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(0,157,158,0.4)] active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(0,157,158,0.2)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
              aria-label="Apply to the YESA incubator program"
            >
              <span>Apply to YESA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={handleExplore}
              className="group flex items-center gap-3 px-4 py-3 text-[#8A8A8A] hover:text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#009D9E] focus-visible:outline-offset-4 rounded-full"
              aria-label="Scroll down to explore the YESA journey"
            >
              <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#009D9E] group-hover:text-[#009D9E] transition-all">
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
        <span className="font-display font-black text-[18vw] leading-none text-white/[0.08] tracking-tighter block translate-y-1/4 select-none">
          YESA
        </span>
      </div>
    </section>
  );
};
