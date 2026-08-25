import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

// Stage Data
interface JourneyStage {
  id: string;
  index: number;
  label: string;
  sublabel: string;
  description: string;
  color: string;
  glow: string;
  tagToken: string;
}

const STAGES: JourneyStage[] = [
  {
    id: "application",
    index: 1,
    label: "APPLICATION",
    sublabel: "The Beginning",
    description: "The beginning of the journey. Every world-class leader started exactly here — with a single decision to enter the path.",
    color: "#94A3B8",
    glow: "rgba(148,163,184,0.20)",
    tagToken: "ENTRY POINT",
  },
  {
    id: "interview",
    index: 2,
    label: "INTERVIEW",
    sublabel: "The Gate",
    description: "The opportunity to enter the YESA journey. Not a test of what you already know — a conversation about who you intend to become.",
    color: "#38BDF8",
    glow: "rgba(56,189,248,0.22)",
    tagToken: "SELECTION",
  },
  {
    id: "volunteering",
    index: 3,
    label: "VOLUNTEERING",
    sublabel: "Observation Period · Up to 6 Months",
    description: "The observation period. You immerse yourself in the environment — watching, absorbing, and gradually becoming involved. No pressure, pure growth.",
    color: "#34D399",
    glow: "rgba(52,211,153,0.22)",
    tagToken: "INTERNSHIP I",
  },
  {
    id: "paid-internship",
    index: 4,
    label: "PAID INTERNSHIP",
    sublabel: "Real Work, Real Stakes",
    description: "Work on real-world projects alongside senior members. Compensated contribution — your output ships into live systems alongside experienced practitioners.",
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.25)",
    tagToken: "INTERNSHIP II",
  },
  {
    id: "experienced",
    index: 5,
    label: "EXPERIENCED",
    sublabel: "Leadership Emerges",
    description: "You have developed enough experience to lead teams within the organization. This is where leadership skills crystallize through practice, not theory.",
    color: "#F97316",
    glow: "rgba(249,115,22,0.25)",
    tagToken: "LEADERSHIP",
  },
  {
    id: "world-class-leader",
    index: 6,
    label: "WORLD-CLASS LEADER",
    sublabel: "The Long-Term Aspiration",
    description: "The culmination of the YESA journey. By this stage, YESA expects the participant to have developed into a world-class leader — capable of reshaping industries, institutions, and ideas.",
    color: "#FFFFFF",
    glow: "rgba(255,255,255,0.35)",
    tagToken: "THE SUMMIT",
  },
];

// Milestone Node
function MilestoneNode({ stage, state }: { stage: JourneyStage; state: "completed" | "active" | "future" }) {
  const isActive = state === "active";
  const isCompleted = state === "completed";
  const isFuture = state === "future";

  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ scale: isActive ? 1 : isCompleted ? 0.85 : 0.7 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {isActive && (
        <motion.div
          className="absolute rounded-full"
          style={{ width: 56, height: 56, border: `1px solid ${stage.color}`, opacity: 0.3 }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.div
        className="relative rounded-full flex items-center justify-center"
        style={{
          width: isActive ? 36 : isCompleted ? 28 : 22,
          height: isActive ? 36 : isCompleted ? 28 : 22,
          background: isActive
            ? `radial-gradient(circle, ${stage.color} 0%, ${stage.color}88 60%, transparent 100%)`
            : isCompleted
            ? `${stage.color}30`
            : "rgba(255,255,255,0.04)",
          border: `1.5px solid ${isActive ? stage.color : isCompleted ? `${stage.color}60` : "rgba(255,255,255,0.10)"}`,
          boxShadow: isActive ? `0 0 24px ${stage.glow}, 0 0 48px ${stage.glow}` : "none",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {isCompleted && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke={stage.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {isActive && <div className="rounded-full" style={{ width: 8, height: 8, background: "#08090B" }} />}
        {isFuture && <div className="rounded-full" style={{ width: 4, height: 4, background: "rgba(255,255,255,0.15)" }} />}
      </motion.div>
    </motion.div>
  );
}

// Stage Detail Panel
function StageDetailPanel({ stage, isLast }: { stage: JourneyStage; isLast: boolean }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="font-mono font-bold leading-none mb-3 select-none"
          style={{ fontSize: "clamp(4rem, 10vw, 8rem)", color: stage.color, opacity: 0.12, letterSpacing: "-0.04em", lineHeight: 0.85, userSelect: "none", pointerEvents: "none" }}
        >
          {String(stage.index).padStart(2, "0")}
        </div>
        <div className="font-mono text-[10px] tracking-[0.2em] mb-3" style={{ color: stage.color, opacity: 0.7 }}>
          ◈ {stage.tagToken}
        </div>
        <h2
          className="font-display font-black mb-2 leading-none"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: stage.color, letterSpacing: "-0.03em" }}
        >
          {stage.label}
        </h2>
        <div className="font-mono text-xs mb-5" style={{ color: stage.color, opacity: 0.55, letterSpacing: "0.06em" }}>
          {stage.sublabel}
        </div>
        <div className="h-px mb-5" style={{ background: `linear-gradient(to right, ${stage.color}50, transparent)`, width: "80%" }} />
        <p className="font-sans leading-relaxed max-w-md" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)", color: "#9BA3AF", lineHeight: 1.75 }}>
          {stage.description}
        </p>
        {isLast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden p-8"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20 tracking-widest">◤</div>
              <div className="absolute top-4 right-4 font-mono text-[9px] text-white/20 tracking-widest">◥</div>
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-white/20 tracking-widest">◣</div>
              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/20 tracking-widest">◢</div>
              <div className="flex items-center justify-center mb-6 relative" style={{ height: 120 }}>
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute rounded-full"
                    style={{ width: ring * 60, height: ring * 60, border: `1px solid rgba(255,255,255,${0.12 / ring})` }}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3 + ring, repeat: Infinity, ease: "easeInOut", delay: ring * 0.4 }}
                  />
                ))}
                <div className="relative z-10 font-display font-black text-white text-center" style={{ fontSize: "0.65rem", letterSpacing: "0.25em", lineHeight: 1.8 }}>
                  THE JOURNEY
                  <br />
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.55rem" }}>HAS OPENED UP</span>
                </div>
              </div>
              <p className="font-sans text-center" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", lineHeight: 1.8, letterSpacing: "0.03em" }}>
                This is not where the path ends.
                <br />
                This is where it expands.
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

// Mobile Journey
function MobileJourney() {
  return (
    <div className="flex flex-col items-start gap-0 px-6 py-12">
      {STAGES.map((stage, i) => (
        <div key={stage.id} className="flex items-start gap-4 w-full">
          <div className="flex flex-col items-center" style={{ minWidth: 28 }}>
            <div
              className="rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ width: 28, height: 28, border: `1.5px solid ${stage.color}`, background: `${stage.color}12`, boxShadow: `0 0 16px ${stage.glow}` }}
            >
              <span className="font-mono font-bold" style={{ fontSize: 9, color: stage.color }}>
                {String(stage.index).padStart(2, "0")}
              </span>
            </div>
            {i < STAGES.length - 1 && (
              <div
                style={{ width: 1.5, height: 64, background: `linear-gradient(to bottom, ${stage.color}40, ${STAGES[i + 1].color}20)`, marginTop: 4, marginBottom: 4 }}
              />
            )}
          </div>
          <div className="pb-10 flex-1">
            <div className="font-mono mb-1" style={{ fontSize: 9, color: stage.color, letterSpacing: "0.18em", opacity: 0.6 }}>
              {stage.tagToken}
            </div>
            <h3 className="font-display font-black mb-2 leading-tight" style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", color: stage.color, letterSpacing: "-0.02em" }}>
              {stage.label}
            </h3>
            <div className="font-mono mb-3" style={{ fontSize: 10, color: stage.color, opacity: 0.5, letterSpacing: "0.06em" }}>
              {stage.sublabel}
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: "#7B8494", maxWidth: 320 }}>
              {stage.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Main Section
interface YesaJourneySectionProps {
  onBegin?: () => void;
}

export const YesaJourneySection: React.FC<YesaJourneySectionProps> = ({ onBegin }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (v) => {
      const rawIndex = Math.floor(v * STAGES.length);
      const clamped = Math.max(0, Math.min(STAGES.length - 1, rawIndex));
      setActiveStageIndex(clamped);
    });
    return unsubscribe;
  }, [smoothProgress]);

  const pathProgressValue = useTransform(smoothProgress, [0, 1], [0, 1]);
  const [pathPct, setPathPct] = useState(0);
  useEffect(() => {
    const unsub = pathProgressValue.on("change", setPathPct);
    return unsub;
  }, [pathProgressValue]);

  const measureNodes = useCallback(() => {}, []);
  useEffect(() => {
    measureNodes();
    window.addEventListener("resize", measureNodes);
    return () => window.removeEventListener("resize", measureNodes);
  }, [measureNodes]);

  const activeStage = STAGES[activeStageIndex];

  return (
    <section ref={sectionRef} id="journey" className="relative bg-[#08090B]" style={{ minHeight: "600vh" }}>
      {/* Section header */}
      <div className="relative z-10 pt-28 pb-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center mb-12">
            <div className="w-px h-16 mb-3" style={{ background: "linear-gradient(to bottom, rgba(56,189,248,0.5), rgba(56,189,248,0.15))" }} />
            <div className="font-mono text-[10px] tracking-[0.22em] text-[#38BDF8]/60 mb-3">CONTINUING THE ASCENT</div>
          </div>
          <div className="font-mono text-xs tracking-[0.25em] text-[#94A3B8]/50 mb-5 uppercase">The YESA Journey</div>
          <h2 className="font-display font-black text-white leading-none mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}>
            Six Stages.
            <br />
            <span style={{ color: "#38BDF8" }}>One Ascent.</span>
          </h2>
          <p className="font-sans max-w-xl mx-auto text-center" style={{ color: "#6B7280", fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.8 }}>
            Scroll through the journey. Each stage is a milestone on the path from participant to world-class leader.
          </p>
        </motion.div>
      </div>

      {/* Scroll-driven sticky experience */}
      <div className="relative" style={{ height: `${STAGES.length * 100}vh` }}>
        {/* Desktop sticky */}
        <div className="sticky top-0 h-screen overflow-hidden hidden md:flex">
          {/* Left: milestone path */}
          <div className="relative flex flex-col items-center justify-center" style={{ width: 120, flexShrink: 0 }}>
            {/* Static spine */}
            <div
              className="absolute w-px"
              style={{ top: "10%", bottom: "10%", left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.05)" }}
            />
            {/* Animated progress fill */}
            <div
              className="absolute w-px overflow-hidden"
              style={{ top: "10%", bottom: "10%", left: "50%", transform: "translateX(-50%)" }}
            >
              <div
                style={{
                  width: 1.5,
                  height: `${pathPct * 100}%`,
                  background: `linear-gradient(to bottom, ${activeStage.color}80, ${activeStage.color}30)`,
                  boxShadow: `0 0 8px ${activeStage.glow}`,
                  transition: "height 0.3s linear, background 0.8s ease",
                }}
              />
            </div>

            {/* Nodes */}
            <div className="relative flex flex-col justify-between py-[10%] h-full w-full items-center">
              {STAGES.map((stage, i) => {
                const nodeState: "completed" | "active" | "future" =
                  i < activeStageIndex ? "completed" : i === activeStageIndex ? "active" : "future";
                return (
                  <div key={stage.id} ref={(el) => { nodeRefs.current[i] = el; }} className="flex items-center justify-center relative">
                    <MilestoneNode stage={stage} state={nodeState} />
                    <div
                      className="absolute font-mono text-[9px] tracking-widest"
                      style={{ right: -36, color: nodeState === "future" ? "rgba(255,255,255,0.15)" : stage.color, opacity: nodeState === "future" ? 0.4 : 0.7, transition: "all 0.4s ease" }}
                    >
                      {String(stage.index).padStart(2, "0")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: active stage detail */}
          <div
            className="flex-1 flex flex-col justify-center pl-16 pr-12 relative overflow-hidden"
            style={{ paddingTop: 80, paddingBottom: 80 }}
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute pointer-events-none"
              animate={{ background: `radial-gradient(ellipse 600px 500px at 0% 50%, ${activeStage.glow}, transparent 70%)` }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ inset: 0 }}
            />
            {/* Monumental background number */}
            <motion.div
              className="absolute font-mono font-black select-none pointer-events-none"
              style={{ fontSize: "clamp(12rem, 25vw, 22rem)", color: activeStage.color, opacity: 0.025, right: -40, bottom: -60, letterSpacing: "-0.06em", lineHeight: 0.8 }}
              animate={{ color: activeStage.color }}
              transition={{ duration: 0.8 }}
            >
              {String(activeStage.index).padStart(2, "0")}
            </motion.div>
            <div className="relative z-10 max-w-2xl">
              <StageDetailPanel stage={activeStage} isLast={activeStageIndex === STAGES.length - 1} />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileJourney />
        </div>
      </div>

      {/* Progress pill — fixed bottom */}
      <motion.div
        className="fixed bottom-6 left-1/2 z-50 hidden md:flex items-center gap-3 rounded-full px-5 py-2.5"
        style={{ transform: "translateX(-50%)", background: "rgba(14,17,22,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)" }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px" }}
      >
        {STAGES.map((stage, i) => {
          const isDone = i < activeStageIndex;
          const isNow = i === activeStageIndex;
          return (
            <motion.div
              key={stage.id}
              className="rounded-full"
              animate={{
                width: isNow ? 28 : isDone ? 8 : 6,
                height: 6,
                background: isNow ? stage.color : isDone ? `${stage.color}60` : "rgba(255,255,255,0.1)",
                boxShadow: isNow ? `0 0 10px ${stage.glow}` : "none",
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
        <div className="w-px h-4 bg-white/10 mx-1" />
        <span className="font-mono text-[10px] tracking-widest" style={{ color: activeStage.color, minWidth: 140 }}>
          {String(activeStage.index).padStart(2, "0")} · {activeStage.label}
        </span>
      </motion.div>

      {/* Closing transition */}
      <div className="relative z-10 flex flex-col items-center py-32 px-6" style={{ background: "linear-gradient(to bottom, transparent, rgba(8,9,11,0.95) 40%)" }}>
        <div className="w-px mb-10" style={{ height: 80, background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(56,189,248,0.3))" }} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="font-mono text-[10px] tracking-[0.25em] text-[#94A3B8]/40 mb-6 uppercase">The Only Question That Remains</div>
          <h3 className="font-display font-black text-white leading-none mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", letterSpacing: "-0.04em" }}>
            Where do you want
            <br />
            <span style={{ color: "#38BDF8" }}>to begin?</span>
          </h3>
          <p className="font-sans mb-12 max-w-md mx-auto" style={{ color: "#6B7280", fontSize: "1rem", lineHeight: 1.8 }}>
            Choose your field. The path from here is yours.
          </p>
          <motion.button
            onClick={onBegin}
            className="group relative flex flex-col items-center gap-3 mx-auto cursor-pointer"
            whileHover={{ y: 4 }}
            transition={{ duration: 0.3 }}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <div className="font-mono text-xs tracking-[0.2em] text-[#38BDF8]/70 group-hover:text-[#38BDF8] transition-colors duration-300">
              CHOOSE YOUR FIELD
            </div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 32, height: 32, border: "1px solid rgba(56,189,248,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
              className="group-hover:border-[#38BDF8]/60 transition-colors duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2.5V9.5M6 9.5L3 6.5M6 9.5L9 6.5" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
        <div className="w-px mt-16" style={{ height: 60, background: "linear-gradient(to bottom, rgba(56,189,248,0.3), rgba(56,189,248,0.05))" }} />
      </div>
    </section>
  );
};

export default YesaJourneySection;
