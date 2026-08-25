import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AscentMetaphorBackground } from './AscentMetaphorBackground';
import { AscentProgressHUD } from './AscentProgressHUD';
import { MagneticCTA } from './MagneticCTA';
import { Badge } from '../core/Badge';
import { Container } from '../core/Container';

interface HeroExperienceProps {
  onOpenApply: () => void;
  onExplorePath: () => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({
  onOpenApply,
  onExplorePath,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollY } = useScroll();

  // Subtle parallax and fade transformations as user scrolls
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);
  const heroScale = useTransform(scrollY, [0, 450], [1, 0.96]);
  const heroTranslateY = useTransform(scrollY, [0, 450], [0, 60]);

  // Subtle tilt for typography
  const rotateX = (mousePos.y - 0.5) * -6;
  const rotateY = (mousePos.x - 0.5) * 8;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#08090B] pt-24 pb-10">
      
      {/* 1. Dynamic 60fps The Ascent Progression Canvas Background */}
      <AscentMetaphorBackground mousePos={mousePos} intensity={1.0} />

      {/* 2. Main Hero Editorial Typography & Statement */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroTranslateY }}
        className="relative z-10 my-auto flex-1 flex flex-col justify-center py-8 md:py-16"
      >
        <Container size="lg">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            
            {/* Entrance 1: Tagline Kicker Capsule */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#CBD5E1]">
                  INCUBATOR FOR FUTURE LEADERS
                </span>
              </div>

              <Badge variant="emerald" dot className="font-mono text-xs py-1">
                100% FREE
              </Badge>
            </motion.div>

            {/* Entrance 2: Monumental Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                perspective: 1000,
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="space-y-4"
            >
              <h1 className="font-display font-extrabold tracking-[-0.04em] text-white leading-[0.94] text-[clamp(2.75rem,6.5vw+1rem,6.75rem)] select-none">
                INCUBATOR <br />
                <span className="bg-gradient-to-b from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  FOR FUTURE LEADERS.
                </span>
              </h1>
            </motion.div>

            {/* Entrance 3: Core Philosophy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#94A3B8] font-light tracking-tight max-w-2xl mx-auto leading-relaxed">
                "Choose your field. <br className="hidden sm:inline" />
                <span className="text-white font-medium">We provide the path.</span>"
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#64748B] max-w-md mx-auto leading-relaxed">
                A 100% free incubator designed to guide ambitious individuals from initial curiosity into world-class institutional leadership.
              </p>
            </motion.div>

            {/* Entrance 4: Actions (Magnetic Primary CTA + Secondary Exploration Cue) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <MagneticCTA onClick={onOpenApply}>
                Begin your journey
              </MagneticCTA>

              <button
                onClick={onExplorePath}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
              >
                <span>Explore the path</span>
                <ChevronDown className="w-3.5 h-3.5 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

          </div>
        </Container>
      </motion.div>

      {/* 3. Entrance 5: Bottom Progression HUD Ladder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full pt-4"
      >
        <AscentProgressHUD onSelectMilestone={() => onOpenApply()} />
      </motion.div>

      {/* 4. Scroll Indicator Connector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 flex flex-col items-center justify-center pt-6 pb-2 text-center"
      >
        <button
          onClick={onExplorePath}
          className="flex flex-col items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#5D6673] hover:text-white transition-colors cursor-pointer group"
        >
          <span>ASCEND</span>
          <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-sky-400 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-sky-400"
            />
          </div>
        </button>
      </motion.div>

    </div>
  );
};
