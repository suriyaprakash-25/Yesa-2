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
    <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] backdrop-blur-md transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            CANDIDATE INTAKE PROTOCOL
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--text-secondary)]">STAGE 01/06</span>
      </div>

      {/* Simulated Form Fields */}
      <div className="space-y-2.5">
        {/* Field 1: Track Selection */}
        <div className="p-2 sm:p-2.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)]">
          <span className="font-mono text-[9px] uppercase text-[var(--text-secondary)] block mb-1">
            Focus Discipline
          </span>
          <div className="flex items-center justify-between text-xs text-[var(--text-primary)] font-mono">
            <span>Systems Architecture</span>
            <span className="text-[var(--accent-base)] text-[10px] font-semibold">SELECTED ✓</span>
          </div>
        </div>

        {/* Field 2: Motivation & Background */}
        <div className="p-2 sm:p-2.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)]">
          <span className="font-mono text-[9px] uppercase text-[var(--text-secondary)] block mb-1">
            Intake Readiness
          </span>
          <div className="h-1.5 w-full bg-[var(--border-medium)] rounded-full overflow-hidden">
            <motion.div
              style={{ width: barWidth }}
              className="h-full bg-gradient-to-r from-[var(--accent-base)] to-[var(--accent-light)] rounded-full"
            />
          </div>
        </div>

        {/* Submit Status Pill */}
        <div className="pt-1 flex items-center justify-between">
          <span className="font-mono text-[10px] text-[var(--text-secondary)]">Verification</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-glow)] text-[var(--accent-base)] font-mono text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)]" />
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
    <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] backdrop-blur-md transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            BILATERAL EVALUATION
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--text-secondary)]">STAGE 02/06</span>
      </div>

      {/* Resonance Simulation */}
      <div className="relative py-3 flex items-center justify-between">
        {/* Node Left: Candidate */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-base)] flex items-center justify-center shadow-sm">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[var(--text-primary)]">YOU</span>
          </div>
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-secondary)]">Applicant</span>
        </div>

        {/* Dynamic Waveform Connecting */}
        <div className="flex-1 min-w-0 mx-2 flex items-center justify-center gap-1">
          {[4, 10, 18, 14, 22, 12, 8, 16, 10, 4].map((height, i) => (
            <motion.div
              key={i}
              className="w-0.5 sm:w-1 bg-[var(--accent-base)] rounded-full shrink-0"
              animate={{ height: [height, height * 0.35, height] }}
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
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--border-medium)] flex items-center justify-center">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[var(--accent-base)]">YESA</span>
          </div>
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-secondary)]">Panel</span>
        </div>
      </div>

      {/* Match Metric Footer */}
      <div className="mt-2 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[10px]">
        <span className="text-[var(--text-secondary)]">Alignment Metric</span>
        <span className="text-[var(--accent-base)] font-semibold">96.8% Fit Verified</span>
      </div>
    </div>
  );
};

// 03. VOLUNTEERING: Circular Progress Arc (Max 6 Months)
export const VolunteeringVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] backdrop-blur-md transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            OBSERVATION TIMELINE
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--text-secondary)]">STAGE 03/06</span>
      </div>

      {/* Center Circular Gauge */}
      <div className="flex items-center justify-center my-1 relative">
        <svg className="w-24 h-24 sm:w-28 sm:h-28 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="var(--border-medium)" strokeWidth="6" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="var(--accent-base)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="62.8"
            strokeLinecap="round"
            className="filter drop-shadow-sm"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-display font-black text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight">
            6 MO
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            MAX CAP
          </span>
        </div>
      </div>

      {/* Milestone Points */}
      <div className="grid grid-cols-3 gap-1.5 text-center pt-2 border-t border-[var(--border-subtle)]">
        <div className="p-1 rounded bg-[var(--color-surface-elevated)]">
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-primary)] block font-medium">M 01</span>
          <span className="font-mono text-[7px] sm:text-[8px] text-[var(--text-secondary)]">Observe</span>
        </div>
        <div className="p-1 rounded bg-[var(--color-surface-elevated)]">
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-primary)] block font-medium">M 03</span>
          <span className="font-mono text-[7px] sm:text-[8px] text-[var(--text-secondary)]">Understand</span>
        </div>
        <div className="p-1 rounded bg-[var(--accent-dim)] border border-[var(--accent-glow)]">
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--accent-base)] block font-semibold">M 06</span>
          <span className="font-mono text-[7px] sm:text-[8px] text-[var(--accent-base)] font-medium">Paid Shift</span>
        </div>
      </div>
    </div>
  );
};

// 04. PAID INTERNSHIP: Kanban Project Stack & Senior Pairing
export const PaidInternshipVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] backdrop-blur-md transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            COMMERCIAL SPRINT LAB
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--text-secondary)]">STAGE 04/06</span>
      </div>

      {/* Stacked Project Cards */}
      <div className="space-y-2">
        <div className="p-2 sm:p-2.5 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--accent-base)]/40 relative overflow-hidden shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] font-bold text-[var(--text-primary)]">
              Prod Engine v2.4
            </span>
            <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-[var(--accent-dim)] text-[var(--accent-base)] font-semibold border border-[var(--accent-glow)]">
              PAID ACTIVE
            </span>
          </div>
          <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-[var(--text-secondary)]">
            <span>Pair: Sr. Tech Architect</span>
            <span className="text-[var(--accent-base)] font-medium">PR #418 Merged</span>
          </div>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)]">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-[10px] font-medium text-[var(--text-primary)]">
              Distributed Cache Module
            </span>
            <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-[var(--border-subtle)] text-[var(--text-secondary)]">
              STAGING
            </span>
          </div>
          <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-secondary)]">Sprint Target 98% Complete</span>
        </div>
      </div>

      {/* Compensation & Commercial Guarantee Footer */}
      <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[9px] sm:text-[10px]">
        <span className="text-[var(--text-secondary)]">Compensation Status</span>
        <span className="text-[var(--accent-base)] font-bold">Guaranteed Paid Stipend</span>
      </div>
    </div>
  );
};

// 05. EXPERIENCED: Organizational Leadership Tree (Symmetrically Balanced)
export const ExperiencedVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-4 sm:p-5 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-elevated)] backdrop-blur-md transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--accent-base)] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-semibold">
            LEADERSHIP TOPOLOGY
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--text-secondary)]">STAGE 05/06</span>
      </div>

      {/* Tree Structure with Mathematical Symmetry */}
      <div className="py-1 flex flex-col items-center w-full">
        {/* Top Node (Lead) */}
        <div className="px-3.5 py-1.5 rounded-lg bg-[var(--accent-dim)] border border-[var(--accent-base)] text-center shadow-sm">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[var(--text-primary)] block">YOU · TEAM LEAD</span>
          <span className="font-mono text-[8px] text-[var(--accent-base)] uppercase tracking-wider font-semibold">Squad Commander</span>
        </div>

        {/* Mathematical Symmetrical SVG Connector Tree */}
        <div className="w-full h-7 my-1">
          <svg className="w-full h-full" viewBox="0 0 300 28" preserveAspectRatio="none" fill="none">
            {/* Trunk down from top node */}
            <line x1="150" y1="0" x2="150" y2="14" stroke="var(--accent-base)" strokeWidth="1.5" strokeOpacity="0.8" />
            
            {/* Horizontal branch bar */}
            <line x1="50" y1="14" x2="250" y2="14" stroke="var(--accent-base)" strokeWidth="1.5" strokeOpacity="0.6" />
            
            {/* Drop lines to child boxes */}
            <line x1="50" y1="14" x2="50" y2="28" stroke="var(--accent-base)" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="150" y1="14" x2="150" y2="28" stroke="var(--accent-base)" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="250" y1="14" x2="250" y2="28" stroke="var(--accent-base)" strokeWidth="1.5" strokeOpacity="0.8" />
            
            {/* Node dots */}
            <circle cx="50" cy="28" r="2.5" fill="var(--accent-base)" />
            <circle cx="150" cy="28" r="2.5" fill="var(--accent-base)" />
            <circle cx="250" cy="28" r="2.5" fill="var(--accent-base)" />
          </svg>
        </div>

        {/* 3 Sub-Squad Nodes */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
          <div className="p-1.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] text-center">
            <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-primary)] font-medium block">Engineers</span>
            <span className="font-mono text-[7px] text-[var(--text-secondary)]">4 Members</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] text-center">
            <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-primary)] font-medium block">Product</span>
            <span className="font-mono text-[7px] text-[var(--text-secondary)]">Active Track</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] text-center">
            <span className="font-mono text-[8px] sm:text-[9px] text-[var(--text-primary)] font-medium block">Mentees</span>
            <span className="font-mono text-[7px] text-[var(--text-secondary)]">3 Guided</span>
          </div>
        </div>
      </div>

      {/* Leadership Verified Footer */}
      <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[9px] sm:text-[10px]">
        <span className="text-[var(--text-secondary)]">Scope of Influence</span>
        <span className="text-[var(--accent-base)] font-semibold">Multi-Discipline Command</span>
      </div>
    </div>
  );
};

// 06. WORLD-CLASS LEADER: Radiant Payoff & Concentric Rings (Adapted for Light & Dark)
export const WorldClassLeaderVisual: React.FC<StageVisualProps> = () => {
  return (
    <div className="w-full max-w-sm p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[var(--accent-dim)] via-[var(--color-surface-card)] to-[var(--color-surface-elevated)] border-2 border-[var(--accent-base)] shadow-[0_10px_35px_var(--accent-dim)] backdrop-blur-md relative overflow-hidden transition-colors duration-300">
      {/* Radiant Background Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,var(--accent-glow),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border-subtle)] relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-base)] shadow-sm animate-ping" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-base)] font-bold">
            ARCHITECTURAL APEX
          </span>
        </div>
        <span className="font-mono text-[9px] text-[var(--accent-base)] font-bold">STAGE 06/06</span>
      </div>

      {/* Dynamic Concentric Celestial Rings */}
      <div className="relative py-3 flex items-center justify-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[var(--accent-base)]/30 animate-[spin_12s_linear_infinite]" />
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-[var(--accent-base)]/60 animate-[spin_8s_linear_infinite_reverse]" />
        <div className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--accent-base)] border-2 border-white flex items-center justify-center shadow-lg text-white">
          <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      {/* Long-Term Aspiration Statement */}
      <div className="mt-2.5 pt-2.5 border-t border-[var(--border-subtle)] text-center relative z-10">
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-widest block mb-0.5">
          GLOBAL AUTHORITY
        </span>
        <span className="font-mono text-[8px] sm:text-[9px] text-[var(--accent-base)] font-semibold">
          Recognized Venture & Engineering Leadership
        </span>
      </div>
    </div>
  );
};
