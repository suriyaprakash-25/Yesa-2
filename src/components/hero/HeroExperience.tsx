import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Container } from '../core/Container';
import { Button } from '../core/Button';
import { AscentPathVisualizer } from './AscentPathVisualizer';
import { HeroNavigation } from './HeroNavigation';
import { DisplayHeading, SubHeading, Kicker } from '../core/Typography';

interface HeroExperienceProps {
  onOpenApply?: () => void;
  onExplorePath?: () => void;
  onNavigateSection?: (section: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({
  onOpenApply,
  onExplorePath,
  onNavigateSection
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects on scroll
  const yHeroText = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      // We only want the cursor position relative to the window
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Sequence
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.5,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#08090B] overflow-hidden flex flex-col justify-center"
    >
      {/* Abstract Visualizer */}
      <AscentPathVisualizer mousePosition={mousePos} />

      {/* Navigation Layer */}
      <HeroNavigation 
        onOpenApply={onOpenApply || (() => {})} 
        onNavigateSection={onNavigateSection || (() => {})} 
      />

      <Container className="relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ y: yHeroText, opacity: opacityHero }}
        >
          
          {/* Main Editorial Copy */}
          <div className="lg:col-span-8 flex flex-col items-start py-24 md:py-0 pr-4 md:pr-12">
            
            <motion.div variants={itemVariants} className="mb-6">
              <Kicker className="text-[var(--accent-base)]">100% Free Incubator Program</Kicker>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <DisplayHeading className="leading-[0.95] text-left">
                INCUBATOR <br />
                FOR FUTURE <br />
                LEADERS.
              </DisplayHeading>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12 max-w-lg border-l border-white/10 pl-6">
              <SubHeading className="text-white/80 font-normal">
                Choose your field. <br className="hidden md:block"/> We provide the path.
              </SubHeading>
              <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed">
                Volunteering → Paid Internship → Experienced → World-Class Leader.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <Button 
                variant="primary" 
                size="lg"
                onClick={onOpenApply}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-sm">
                  APPLY TO YESA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button 
                onClick={onExplorePath}
                className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-base)] transition-colors">
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 group-hover:text-[var(--accent-base)] transition-all" />
                </div>
                <span className="text-[var(--text-nav)] uppercase tracking-widest font-mono-tag">EXPLORE THE JOURNEY</span>
              </button>
            </motion.div>

          </div>

          {/* Right side asymmetric balance (Empty or subtle supporting visual) */}
          <div className="hidden lg:block lg:col-span-4 relative h-full">
            {/* The abstract path visualizer naturally falls into this area */}
          </div>

        </motion.div>
      </Container>
      
      {/* Ambient Floor Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08090B] to-transparent z-0"></div>
    </section>
  );
};
