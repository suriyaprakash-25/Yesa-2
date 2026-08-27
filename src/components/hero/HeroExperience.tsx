import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../core/Container';
import { Button } from '../core/Button';
import { AscentPathVisualizer } from './AscentPathVisualizer';

interface HeroExperienceProps {
  onOpenApply?: () => void;
  onExplorePath?: () => void;
  onNavigateSection?: (section: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({
  onOpenApply,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects on scroll
  const yHeroText = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
  const yBgText = useTransform(scrollY, [0, 1000], [0, -300]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] w-full bg-[#090D0F] overflow-hidden flex flex-col justify-center pt-20"
    >
      {/* Interactive Background Field */}
      <AscentPathVisualizer mousePosition={mousePos} />

      <Container className="relative z-10 w-full h-full flex flex-col justify-center">
        <motion.div 
          className="flex flex-col items-start max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute w-full h-full bg-[var(--accent-base)] rounded-full animate-ping opacity-75" />
              <div className="relative w-1.5 h-1.5 bg-[var(--accent-light)] rounded-full" />
            </div>
            <span className="font-mono text-xs md:text-sm tracking-widest text-[var(--accent-light)] uppercase">
              100% FREE INCUBATOR PROGRAM
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="hero-heading text-white">
              Incubator for Future Leaders.
            </h1>
          </motion.div>

          {/* Subhead */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-white/80 font-display text-2xl md:text-3xl lg:text-4xl tracking-tight font-medium">
              Choose your field. We provide the path.
            </p>
          </motion.div>

          {/* Micro-path Steps */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-16 text-white/50 text-sm md:text-base font-mono tracking-wide">
            <span className="text-white/80">Volunteering</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent-base)]/50" />
            <span className="text-white/80">Paid Internship</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent-base)]/50" />
            <span className="text-white/80">Experienced</span>
            <ArrowRight className="w-4 h-4 text-[var(--accent-base)]/50" />
            <span className="text-[var(--accent-light)]">World-Class Leader</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Button 
              variant="primary" 
              size="lg"
              onClick={onOpenApply}
              className="group relative overflow-hidden bg-[var(--accent-base)] hover:bg-[var(--accent-light)] text-[#090D0F] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_var(--accent-glow)] border-none"
            >
              <span className="relative z-10 flex items-center gap-2 font-bold tracking-widest text-sm uppercase">
                Apply to YESA
              </span>
            </Button>

            <button 
              onClick={scrollToJourney}
              className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors py-2"
            >
              <span className="font-mono text-sm tracking-widest uppercase transition-colors">
                ↓ Explore the Journey
              </span>
            </button>
          </motion.div>

        </motion.div>
      </Container>
      
      {/* Giant Background Wordmark Scroll Cue */}
      <motion.div 
        style={{ y: yBgText }}
        className="absolute -bottom-24 left-0 w-full flex justify-center pointer-events-none z-0"
      >
        <h2 className="font-display font-black text-[30vw] leading-[0.7] text-white/[0.02] select-none text-center whitespace-nowrap overflow-hidden">
          YESA
        </h2>
      </motion.div>

    </section>
  );
};
