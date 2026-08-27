import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Container } from '../core/Container';
import { HeroInteractiveField } from './HeroInteractiveField';

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
  const yHeroText = useTransform(scrollY, [0, 900], [0, -120]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleApply = () => {
    if (onOpenApply) {
      onOpenApply();
    } else {
      const applyEl = document.getElementById('apply');
      if (applyEl) applyEl.scrollIntoView({ behavior: 'smooth' });
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
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
      className="relative min-h-[100vh] w-full bg-[#090D0F] overflow-hidden flex flex-col justify-between pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Bespoke Interactive Particle/Line Field */}
      <HeroInteractiveField mousePosition={mousePos} />

      {/* Subtle Corner Architectural Accent lines */}
      <div className="absolute top-28 left-8 w-12 h-12 border-t border-l border-white/[0.08] pointer-events-none hidden lg:block" />
      <div className="absolute top-28 right-8 w-12 h-12 border-t border-r border-white/[0.08] pointer-events-none hidden lg:block" />

      {/* Main Content Area */}
      <Container className="relative z-10 w-full flex-1 flex flex-col justify-center">
        <motion.div
          className="max-w-4xl flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009D9E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009D9E]"></span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8A8A8A] font-medium">
                100% FREE INCUBATOR PROGRAM
              </span>
            </div>
          </motion.div>

          {/* Headline: "Incubator for Future Leaders." */}
          <motion.div variants={itemVariants} className="mb-6 w-full">
            <h1 className="font-display font-black text-white text-[clamp(2.6rem,7.5vw,6.8rem)] tracking-[-0.04em] leading-[0.98] text-left [overflow-wrap:normal] [word-break:keep-all]">
              Incubator for Future Leaders.
            </h1>
          </motion.div>

          {/* Subhead */}
          <motion.div variants={itemVariants} className="mb-8 max-w-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-[#8A8A8A] font-light tracking-tight leading-snug">
              Choose your field. <span className="text-white">We provide the path.</span>
            </p>
          </motion.div>

          {/* Micro-path line: Connected steps with SVG arrow connectors */}
          <motion.div variants={itemVariants} className="mb-10 w-full">
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 py-2.5 px-4 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
              {microPathSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-semibold text-[#009D9E]">
                      {step.num}.
                    </span>
                    <span className="font-mono text-xs text-white tracking-tight font-medium">
                      {step.label}
                    </span>
                  </div>
                  {idx < microPathSteps.length - 1 && (
                    <svg
                      className="w-3.5 h-3.5 text-[#009D9E]/60 shrink-0 mx-0.5"
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

          {/* Two CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <button
              onClick={handleApply}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#090D0F] bg-[#009D9E] hover:bg-[#9AEDFC] hover:scale-[1.04] hover:shadow-[0_0_35px_rgba(0,157,158,0.5)] active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(0,157,158,0.25)]"
            >
              <span>Apply to YESA</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={handleExplore}
              className="group flex items-center justify-center sm:justify-start gap-2.5 px-4 py-3 text-[#8A8A8A] hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#009D9E] group-hover:text-[#009D9E] transition-all">
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest font-medium">
                Explore the Journey
              </span>
            </button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Large faint "YESA" wordmark bleeding off the bottom edge as a scroll cue */}
      <div className="relative w-full overflow-hidden pointer-events-none select-none flex justify-center -mb-6 sm:-mb-10 md:-mb-14 opacity-60">
        <span className="font-display font-black text-[18vw] leading-none text-white/[0.03] tracking-tighter block translate-y-1/4">
          YESA
        </span>
      </div>
    </section>
  );
};
