import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Rocket, Sparkles, Layers } from 'lucide-react';
import { Container } from '../core/Container';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';

interface FutureVisionSectionProps {
  onOpenApply: () => void;
  onExploreJourney?: () => void;
}

export const FutureVisionSection: React.FC<FutureVisionSectionProps> = ({
  onOpenApply,
  onExploreJourney,
}) => {
  // Four transformative horizon milestones
  const horizonStages = [
    { word: 'LEARNING', label: '01. Foundational Craft' },
    { word: 'BUILDING', label: '02. Real-World Execution' },
    { word: 'LEADING', label: '03. Organizational Direction' },
    { word: 'CREATING', label: '04. Venture & Autonomy' },
  ];

  return (
    <section
      id="future"
      className="relative bg-[#08090B] pt-32 pb-40 overflow-hidden selection:bg-sky-500/20"
    >
      {/* ── Top Conduit Connection from Experience-ship ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-20 bg-gradient-to-b from-sky-400/40 via-purple-400/30 to-transparent" />
        <div className="w-2.5 h-2.5 rounded-full bg-purple-400/40 ring-4 ring-purple-400/10 -mt-1" />
      </div>

      {/* ── Expansive Ambient Horizon Glow & Mesh ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft horizontal ambient illumination */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-500/[0.04] via-purple-500/[0.04] to-transparent blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <Container size="lg" className="relative z-10">
        
        {/* ── Section Header: The Horizon of YESA ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Badge variant="accent" dot className="font-mono text-[10px] py-0.5 tracking-wider">
              THE NEXT HORIZON
            </Badge>
            <span className="font-mono text-xs text-[#64748B]">/</span>
            <span className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase">
              FUTURE VISION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-0.04em] leading-[1.08] mb-6"
          >
            The journey does not end with experience. <br />
            <span className="bg-gradient-to-r from-sky-300 via-purple-300 to-white bg-clip-text text-transparent">
              It expands into creation.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-sans"
          >
            YESA envisions a future where participants develop the mastery to either advance
            institutional initiatives or pioneer breakthrough ideas of their own with YESA backing.
          </motion.p>
        </div>

        {/* ── 4-Stage Horizon Bar: LEARNING → BUILDING → LEADING → CREATING ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-2 rounded-2xl bg-[#0E1116]/80 border border-white/[0.08] backdrop-blur-xl">
            {horizonStages.map((stage) => (
              <div
                key={stage.word}
                className="p-4 rounded-xl bg-[#13171E]/40 border border-white/[0.04] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-[#64748B]">{stage.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/40" />
                </div>
                <div className="font-display font-extrabold text-lg text-white tracking-wide">
                  {stage.word}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Visual Conduit Bifurcation: One Journey. Multiple Futures. ── */}
        <div className="relative mb-20 flex flex-col items-center">
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-purple-400/60" />
          
          <div className="my-2 px-4 py-1 rounded-full bg-[#0E1116] border border-purple-500/30 text-purple-300 font-mono text-[11px] tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            ONE JOURNEY · MULTIPLE FUTURES
          </div>

          {/* Desktop SVG Branching Lines */}
          <div className="hidden lg:block w-full max-w-4xl h-16 relative">
            <svg className="w-full h-full" viewBox="0 0 800 64" fill="none">
              {/* Left Branch to Path 01 */}
              <path
                d="M 400 0 C 400 32, 200 32, 200 64"
                stroke="url(#branchCyan)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Right Branch to Path 02 */}
              <path
                d="M 400 0 C 400 32, 600 32, 600 64"
                stroke="url(#branchPurple)"
                strokeWidth="1.5"
                fill="none"
              />
              <defs>
                <linearGradient id="branchCyan" x1="400" y1="0" x2="200" y2="64" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A855F7" />
                  <stop offset="1" stopColor="#38BDF8" />
                </linearGradient>
                <linearGradient id="branchPurple" x1="400" y1="0" x2="600" y2="64" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A855F7" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ── The Two Major Pathways: PATH 01 & PATH 02 ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28">
          
          {/* PATH 01: WORK ON OUR IDEA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:p-10 rounded-2xl bg-[#0E1116]/90 border border-sky-500/20 hover:border-sky-500/40 transition-all duration-300 backdrop-blur-xl shadow-2xl group flex flex-col justify-between"
            style={{
              boxShadow: '0 0 35px -10px rgba(56, 189, 248, 0.15)',
            }}
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full blur-2xl pointer-events-none group-hover:bg-sky-500/15 transition-all" />

            <div>
              {/* Path Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold tracking-widest text-sky-400 px-3 py-1 rounded bg-sky-400/10 border border-sky-400/20">
                  PATH 01
                </span>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                  INSTITUTIONAL INITIATIVE
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Work on Our Idea
                </h3>
              </div>

              {/* Short Core Explanation */}
              <p className="text-base text-[#94A3B8] leading-relaxed font-sans mb-6">
                As participants become experienced, they may contribute to ideas being developed
                within YESA.
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                  <span>Direct collaboration with senior architects on YESA institutional systems.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                  <span>Lead specialized operational squads and mentor rising cohort members.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                  <span>Shape the long-term infrastructure and expansion of the incubator.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>ORIENTATION: COLLABORATIVE</span>
              <span className="text-sky-400">INTERNAL IMPACT →</span>
            </div>
          </motion.div>

          {/* PATH 02: WE INVEST IN YOUR IDEA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative p-8 sm:p-10 rounded-2xl bg-[#0E1116]/90 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-xl shadow-2xl group flex flex-col justify-between"
            style={{
              boxShadow: '0 0 35px -10px rgba(168, 85, 247, 0.15)',
            }}
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full blur-2xl pointer-events-none group-hover:bg-purple-500/15 transition-all" />

            <div>
              {/* Path Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold tracking-widest text-purple-400 px-3 py-1 rounded bg-purple-400/10 border border-purple-400/20">
                  PATH 02
                </span>
                <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider">
                  VENTURE INCUBATION
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center text-purple-400">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  We Invest in Your Idea
                </h3>
              </div>

              {/* Short Core Explanation */}
              <p className="text-base text-[#94A3B8] leading-relaxed font-sans mb-6">
                YESA's future vision includes supporting promising ideas developed by its
                participants through investment.
              </p>

              {/* Architectural Highlights */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span>Pioneer and build original concepts nurtured during your experience-ship.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span>Access institutional guidance, technical resources, and advisory masterclasses.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#CBD5E1] font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 mt-1.5" />
                  <span>Potential incubation backing for vetted, high-conviction member projects.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-[#64748B]">
              <span>ORIENTATION: AUTONOMOUS</span>
              <span className="text-purple-400">VENTURE SCALE →</span>
            </div>
          </motion.div>

        </div>

        {/* ── Final Memorable Conceptual Statement & Grand Finale Intake CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#0E1116] via-[#0B0D10] to-[#08090B] border border-white/[0.12] p-8 sm:p-16 text-center overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        >
          {/* Radial Center Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-b from-sky-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

          {/* Micro Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#CBD5E1] uppercase">
              THE YESA COMMITMENT
            </span>
          </div>

          {/* Monumental Final Message */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-[-0.03em] leading-[1.1] max-w-4xl mx-auto mb-6">
            "Your journey can become <br />
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-purple-300 bg-clip-text text-transparent">
              someone else's beginning."
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto font-sans mb-10 leading-relaxed">
            Choose your field. Progress from volunteering to world-class leadership.
            100% free with zero tuition barriers.
          </p>

          {/* Master Intake Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={onOpenApply}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)]"
            >
              Apply for Intake
            </Button>

            {onExploreJourney && (
              <Button
                variant="outline"
                size="lg"
                icon={<Layers className="w-4 h-4" />}
                onClick={onExploreJourney}
                className="w-full sm:w-auto border-white/20 hover:border-white/40"
              >
                Review Full Ascent
              </Button>
            )}
          </div>

          {/* Footnote reassurance */}
          <div className="mt-8 font-mono text-[11px] text-[#64748B]">
            Zero tuition fees · Structured progression · Mentorship from global lecturers
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default FutureVisionSection;
