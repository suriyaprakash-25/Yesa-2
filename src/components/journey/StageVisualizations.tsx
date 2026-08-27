import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface StageVisualProps {
  activeProgress: MotionValue<number>;
}

// 01. APPLICATION: Animated Form / Intake Protocol
export const ApplicationVisual: React.FC<StageVisualProps> = ({ activeProgress }) => {
  const formProgress = useTransform(activeProgress, [0.2, 0.8], [0, 1]);
  const barWidth = useTransform(formProgress, [0, 1], ['15%', '100%']);

  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-[#131719]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#009D9E] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#009D9E] font-semibold">
            CANDIDATE INTAKE PROTOCOL
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8A8A8A]">STAGE 01/06</span>
      </div>

      {/* Simulated Form Fields */}
      <div className="space-y-3">
        {/* Field 1: Track Selection */}
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <span className="font-mono text-[9px] uppercase text-[#8A8A8A] block mb-1">
            Focus Discipline
          </span>
          <div className="flex items-center justify-between text-xs text-white font-mono">
            <span>Systems Architecture</span>
            <span className="text-[#9AEDFC] text-[10px]">SELECTED ✓</span>
          </div>
        </div>

        {/* Field 2: Motivation & Background */}
        <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <span className="font-mono text-[9px] uppercase text-[#8A8A8A] block mb-1">
            Intake Readiness
          </span>
          <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              style={{ width: barWidth }}
              className="h-full bg-gradient-to-r from-[#009D9E] to-[#9AEDFC] rounded-full"
            />
          </div>
        </div>

        {/* Submit Status Pill */}
        <div className="pt-2 flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/50">Verification</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#009D9E]/15 border border-[#009D9E]/30 text-[#9AEDFC] font-mono text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#009D9E]" />
            <span>Ready for Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 02. INTERVIEW: Two Dialogue / Resonance Nodes
export const InterviewVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-[#131719]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#9AEDFC] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9AEDFC] font-semibold">
            BILATERAL EVALUATION
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8A8A8A]">STAGE 02/06</span>
      </div>

      {/* Resonance Simulation */}
      <div className="relative py-4 flex items-center justify-between">
        {/* Node Left: Candidate */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-[#009D9E]/20 border border-[#009D9E] flex items-center justify-center shadow-[0_0_15px_rgba(0,157,158,0.4)]">
            <span className="font-mono text-[11px] font-bold text-white">YOU</span>
          </div>
          <span className="font-mono text-[9px] text-[#8A8A8A]">Applicant</span>
        </div>

        {/* Dynamic Waveform Connecting */}
        <div className="flex-1 mx-3 flex items-center justify-center gap-1">
          {[4, 12, 20, 16, 24, 14, 8, 18, 10, 4].map((height, i) => (
            <motion.div
              key={i}
              className="w-1 bg-[#009D9E] rounded-full"
              animate={{ height: [height, height * 0.4, height] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Node Right: Mentor Architect */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/20 flex items-center justify-center">
            <span className="font-mono text-[11px] font-bold text-[#9AEDFC]">YESA</span>
          </div>
          <span className="font-mono text-[9px] text-[#8A8A8A]">Panel</span>
        </div>
      </div>

      {/* Match Metric Footer */}
      <div className="mt-2 pt-3 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px]">
        <span className="text-white/60">Alignment Metric</span>
        <span className="text-[#9AEDFC] font-semibold">96.8% Fit Verified</span>
      </div>
    </div>
  );
};

// 03. VOLUNTEERING: Circular Progress Arc (Max 6 Months)
export const VolunteeringVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-[#131719]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#009D9E] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#009D9E] font-semibold">
            OBSERVATION TIMELINE
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8A8A8A]">STAGE 03/06</span>
      </div>

      {/* Center Circular Gauge */}
      <div className="flex items-center justify-center my-2 relative">
        <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#009D9E"
            strokeWidth="6"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="62.8" // 75% filled arc
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_8px_rgba(0,157,158,0.7)]"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-display font-black text-2xl text-white tracking-tight">
            6 MO
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-[#009D9E]">
            MAX CAP
          </span>
        </div>
      </div>

      {/* Milestone Points */}
      <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-white/[0.04]">
        <div className="p-1 rounded bg-white/[0.02]">
          <span className="font-mono text-[9px] text-white block">M 01</span>
          <span className="font-mono text-[8px] text-[#8A8A8A]">Observe</span>
        </div>
        <div className="p-1 rounded bg-white/[0.02]">
          <span className="font-mono text-[9px] text-white block">M 03</span>
          <span className="font-mono text-[8px] text-[#8A8A8A]">Understand</span>
        </div>
        <div className="p-1 rounded bg-[#009D9E]/10 border border-[#009D9E]/30">
          <span className="font-mono text-[9px] text-[#9AEDFC] block font-semibold">M 06</span>
          <span className="font-mono text-[8px] text-[#009D9E]">Paid Shift</span>
        </div>
      </div>
    </div>
  );
};

// 04. PAID INTERNSHIP: Kanban Project Stack & Senior Pairing
export const PaidInternshipVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-[#131719]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#009D9E] animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#009D9E] font-semibold">
            COMMERCIAL SPRINT LAB
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8A8A8A]">STAGE 04/06</span>
      </div>

      {/* Stacked Project Cards */}
      <div className="space-y-2.5">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-[#009D9E]/30 relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] font-bold text-white">
              Prod Engine v2.4
            </span>
            <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-[#009D9E]/20 text-[#9AEDFC] font-semibold">
              PAID ACTIVE
            </span>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-[#8A8A8A]">
            <span>Pair: Sr. Tech Architect</span>
            <span className="text-[#009D9E]">PR #418 Merged</span>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] font-medium text-white/80">
              Distributed Cache Module
            </span>
            <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-white/[0.05] text-[#8A8A8A]">
              STAGING
            </span>
          </div>
          <span className="font-mono text-[9px] text-white/40">Sprint Target 98% Complete</span>
        </div>
      </div>

      {/* Compensation & Commercial Guarantee Footer */}
      <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px]">
        <span className="text-white/60">Compensation Status</span>
        <span className="text-[#9AEDFC] font-bold">Guaranteed Paid Stipend</span>
      </div>
    </div>
  );
};

// 05. EXPERIENCED: Organizational Leadership Tree
export const ExperiencedVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-5 rounded-2xl bg-[#131719]/90 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#009D9E] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#009D9E] font-semibold">
            LEADERSHIP TOPOLOGY
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8A8A8A]">STAGE 05/06</span>
      </div>

      {/* Tree Structure */}
      <div className="py-2 flex flex-col items-center">
        {/* Top Node (Lead) */}
        <div className="px-3 py-1.5 rounded-lg bg-[#009D9E]/20 border border-[#009D9E] text-center shadow-[0_0_15px_rgba(0,157,158,0.3)]">
          <span className="font-mono text-[11px] font-bold text-white block">YOU · TEAM LEAD</span>
          <span className="font-mono text-[8px] text-[#9AEDFC] uppercase">Squad Commander</span>
        </div>

        {/* Connector Line Branch */}
        <div className="w-[1px] h-3 bg-[#009D9E]/50 my-1" />
        <div className="w-44 h-[1px] bg-[#009D9E]/30 relative">
          <div className="absolute left-0 top-0 w-[1px] h-3 bg-[#009D9E]/40" />
          <div className="absolute left-1/2 top-0 w-[1px] h-3 bg-[#009D9E]/40 -translate-x-1/2" />
          <div className="absolute right-0 top-0 w-[1px] h-3 bg-[#009D9E]/40" />
        </div>

        {/* 3 Sub-Squad Nodes */}
        <div className="grid grid-cols-3 gap-2 w-full mt-3">
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] text-center">
            <span className="font-mono text-[9px] text-white block">Engineers</span>
            <span className="font-mono text-[7px] text-[#8A8A8A]">4 Members</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] text-center">
            <span className="font-mono text-[9px] text-white block">Product</span>
            <span className="font-mono text-[7px] text-[#8A8A8A]">Active Track</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04] text-center">
            <span className="font-mono text-[9px] text-white block">Mentees</span>
            <span className="font-mono text-[7px] text-[#8A8A8A]">3 Guided</span>
          </div>
        </div>
      </div>

      {/* Leadership Verified Footer */}
      <div className="mt-2 pt-2.5 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px]">
        <span className="text-white/60">Scope of Influence</span>
        <span className="text-[#9AEDFC] font-semibold">Multi-Discipline Command</span>
      </div>
    </div>
  );
};

// 06. WORLD-CLASS LEADER: Radiant Payoff & Concentric Rings
export const WorldClassLeaderVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-b from-[#009D9E]/20 via-[#131719] to-[#090D0F] border border-[#009D9E]/50 shadow-[0_0_40px_rgba(0,157,158,0.35)] backdrop-blur-md relative overflow-hidden">
      {/* Radiant Background Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,157,158,0.25),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#009D9E]/20 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#9AEDFC] shadow-[0_0_10px_#9AEDFC] animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#9AEDFC] font-bold">
            ARCHITECTURAL APEX
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#009D9E] font-bold">STAGE 06/06</span>
      </div>

      {/* Dynamic Concentric Celestial Rings */}
      <div className="relative py-4 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-[#009D9E]/30 animate-[spin_12s_linear_infinite]" />
        <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#9AEDFC]/50 animate-[spin_8s_linear_infinite_reverse]" />
        <div className="absolute w-12 h-12 rounded-full bg-[#009D9E] border-2 border-[#9AEDFC] flex items-center justify-center shadow-[0_0_25px_rgba(0,157,158,0.9)]">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#090D0F]" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      {/* Long-Term Aspiration Statement */}
      <div className="mt-3 pt-3 border-t border-[#009D9E]/20 text-center relative z-10">
        <span className="font-mono text-[11px] font-bold text-white uppercase tracking-widest block mb-0.5">
          GLOBAL AUTHORITY
        </span>
        <span className="font-mono text-[9px] text-[#9AEDFC]/80">
          Recognized Venture & Engineering Leadership
        </span>
      </div>
    </div>
  );
};
