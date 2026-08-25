import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../core/Button';
import { Badge } from '../core/Badge';
import { Container } from '../core/Container';
import { DisplayHeading } from '../core/Typography';
import { AscentVisualizer } from '../visual/AscentVisualizer';
import type { AscentStageId } from '../../types/design-system';

interface HeroSectionProps {
  onOpenApply: () => void;
  onExploreJourney: () => void;
  currentStage: AscentStageId;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApply,
  onExploreJourney,
  currentStage
}) => {
  return (
    <section className="relative pt-6 pb-16 md:py-24 overflow-hidden">
      
      {/* Background Subtle Geometry Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-500/[0.04] via-transparent to-transparent blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Typography & Statement */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline / Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#94A3B8]">
                  INCUBATOR FOR FUTURE LEADERS
                </span>
              </div>

              <Badge variant="emerald" dot className="font-mono text-[11px]">
                100% FREE PROGRAM
              </Badge>
            </motion.div>

            {/* Monumental Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <DisplayHeading className="leading-[0.98]">
                Where Ambition <br />
                <span className="bg-gradient-to-r from-white via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  Becomes Leadership.
                </span>
              </DisplayHeading>

              <p className="font-sans text-xl sm:text-2xl text-[#94A3B8] font-light leading-relaxed max-w-xl">
                "Choose your field. <span className="text-white font-medium">We provide the path.</span>"
              </p>
            </motion.div>

            {/* Core Value Micro-Summary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm text-[#94A3B8] max-w-lg leading-relaxed space-y-2 border-l border-white/[0.1] pl-4"
            >
              <p>
                YESA is a 100% free incubator structured to guide people through real-world execution: from free trainings and volunteering to paid internships and global leadership.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={onOpenApply}
              >
                Apply for the Ascent
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onExploreJourney}
              >
                Explore The Journey
              </Button>
            </motion.div>

            {/* Strategic Pillars Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08]"
            >
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">COST</span>
                <span className="text-xs font-semibold text-white">100% Free</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">MENTORSHIP</span>
                <span className="text-xs font-semibold text-white">Global Lecturers</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">PRACTICE</span>
                <span className="text-xs font-semibold text-white">Real Projects</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-[#64748B] uppercase block">ADVANCEMENT</span>
                <span className="text-xs font-semibold text-white">Paid Pathway</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visualizer Metaphor Surface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <div className="h-[440px] rounded-xl overflow-hidden">
                <AscentVisualizer activeStageId={currentStage} />
              </div>

              {/* Floating Status Capsule */}
              <div className="absolute -bottom-4 left-6 right-6 p-3 rounded-xl bg-[#0E1116]/95 border border-white/[0.12] backdrop-blur-xl flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  <span className="font-mono text-xs font-medium text-white">
                    THE ASCENT // ACTIVE PATHWAY
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#94A3B8] px-2 py-0.5 rounded bg-white/[0.05]">
                  COHORT DRIVEN
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
