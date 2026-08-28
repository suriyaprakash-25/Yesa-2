import React from 'react';
import { motion } from 'framer-motion';

export type OfferingType = 'trainings' | 'experience' | 'leaders' | 'global';

interface OfferingCardProps {
  type: OfferingType;
  num: string;
  title: string;
  sublabel: string;
  description: string;
  tag: string;
  spec: string;
  delay?: number;
}

const FOOTER_SPECS: Record<OfferingType, { label: string; value: string }> = {
  trainings: { label: 'TRACK FORMAT', value: 'OPEN CURRICULUM' },
  experience: { label: 'COMPENSATION', value: 'DIRECT STIPEND' },
  leaders: { label: 'INTERACTION', value: 'PRACTITIONER 1-ON-1' },
  global: { label: 'DELIVERY', value: 'GLOBAL SESSIONS' },
};

// 4 Distinct Full-Bleed Thematic SVG Background Patterns
const ThematicPattern: React.FC<{ type: OfferingType }> = ({ type }) => {
  switch (type) {
    case 'trainings':
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[var(--accent-base)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Circuit Grid Lines */}
          <path
            d="M20 40H140V120H280 M60 20V180H180V260H280 M20 220H100V320H240 M200 40V100H260V220 M140 180V340 M260 280V340"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="4 4"
          />
          <path
            d="M40 80H180V160H260 M100 120V240H220V300"
            stroke="var(--accent-light)"
            strokeWidth="1.5"
          />
          {/* Intersecting Nodes */}
          <circle cx="140" cy="120" r="3.5" fill="var(--accent-light)" className="animate-pulse" />
          <circle cx="180" cy="180" r="3" fill="currentColor" />
          <circle cx="180" cy="160" r="3.5" fill="var(--accent-light)" className="animate-pulse" />
          <circle cx="100" cy="220" r="3" fill="currentColor" />
          <circle cx="220" cy="240" r="3.5" fill="var(--accent-light)" />
          <circle cx="60" cy="180" r="2.5" fill="currentColor" />
          <circle cx="260" cy="100" r="3" fill="currentColor" />
        </svg>
      );

    case 'experience':
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[var(--accent-base)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ascending Stepped Progress Bars */}
          <rect x="25" y="270" width="35" height="70" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.1" />
          <rect x="75" y="225" width="35" height="115" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.15" />
          <rect x="125" y="170" width="35" height="170" rx="3" stroke="currentColor" strokeWidth="1.25" fill="currentColor" fillOpacity="0.2" />
          <rect x="175" y="110" width="35" height="230" rx="3" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.25" />
          <rect x="225" y="45" width="35" height="295" rx="3" stroke="var(--accent-light)" strokeWidth="1.75" fill="var(--accent-light)" fillOpacity="0.3" />

          {/* Stepping Ascent Vector Ray */}
          <path
            d="M42 270L92 225L142 170L192 110L242 45"
            stroke="var(--accent-light)"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <circle cx="242" cy="45" r="4.5" fill="var(--accent-light)" className="animate-pulse" />
          <circle cx="192" cy="110" r="3.5" fill="currentColor" />
          <circle cx="142" cy="170" r="3.5" fill="currentColor" />
        </svg>
      );

    case 'leaders':
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[var(--accent-base)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M150 40L240 130L190 240L110 240L60 130Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="3 3"
          />
          <path
            d="M150 40L150 160L240 130 M150 160L190 240 M150 160L110 240 M150 160L60 130 M60 130L150 40"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d="M150 160L260 270 M150 160L40 270 M110 240L150 330L190 240"
            stroke="var(--accent-light)"
            strokeWidth="1.5"
          />
          <circle cx="150" cy="40" r="4" fill="var(--accent-light)" />
          <circle cx="240" cy="130" r="3.5" fill="currentColor" />
          <circle cx="190" cy="240" r="3.5" fill="currentColor" />
          <circle cx="110" cy="240" r="3.5" fill="currentColor" />
          <circle cx="60" cy="130" r="3.5" fill="currentColor" />
          <circle cx="150" cy="160" r="5" fill="currentColor" stroke="var(--accent-light)" strokeWidth="2" />
        </svg>
      );

    case 'global':
      return (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full text-[var(--accent-base)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="180" r="115" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" />
          <circle cx="150" cy="180" r="85" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="150" cy="180" rx="115" ry="40" stroke="currentColor" strokeWidth="1.25" />
          <ellipse cx="150" cy="180" rx="40" ry="115" stroke="var(--accent-light)" strokeWidth="1.5" />
          
          <ellipse
            cx="150"
            cy="180"
            rx="125"
            ry="48"
            transform="rotate(-30 150 180)"
            stroke="var(--accent-light)"
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />

          <circle cx="150" cy="65" r="4" fill="var(--accent-light)" className="animate-pulse" />
          <circle cx="150" cy="295" r="4" fill="var(--accent-light)" />
          <circle cx="35" cy="180" r="3.5" fill="currentColor" />
          <circle cx="265" cy="180" r="3.5" fill="currentColor" />
          <circle cx="150" cy="180" r="5" fill="currentColor" stroke="var(--accent-light)" strokeWidth="2" />
        </svg>
      );
  }
};

export const OfferingCard: React.FC<OfferingCardProps> = ({
  type,
  num,
  title,
  sublabel,
  description,
  tag,
  spec,
  delay = 0,
}) => {
  const footerSpec = FOOTER_SPECS[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      className="group relative p-6 sm:p-7 rounded-2xl bg-[var(--color-surface-card)] border border-[var(--border-subtle)] hover:border-[var(--accent-base)]/50 hover:bg-[var(--color-surface-elevated)] transition-all duration-300 flex flex-col justify-between shadow-[var(--shadow-elevated)] overflow-hidden cursor-default min-h-[340px]"
    >
      {/* Full-Bleed Thematic SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500 ease-out p-2">
        <ThematicPattern type={type} />
      </div>

      {/* Ambient Corner Accent Glow (Dark mode only) */}
      <div className="hidden dark:block absolute top-0 right-0 w-36 h-36 bg-[var(--accent-dim)] group-hover:bg-[var(--accent-glow)] rounded-full blur-2xl transition-all duration-500 pointer-events-none z-0" />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-sm sm:text-base font-bold text-[var(--accent-base)] tracking-wider">
              {num}
            </span>
            <div className="w-3.5 h-[1px] bg-[var(--accent-base)]/40" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)] font-medium">
              {sublabel}
            </span>
          </div>

          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-dim)] text-[var(--accent-base)] border border-[var(--accent-glow)] group-hover:border-[var(--accent-base)]/40 transition-colors font-semibold">
            {tag}
          </span>
        </div>

        {/* Card Title */}
        <h4 className="font-display font-black text-2xl sm:text-[1.75rem] text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-base)] transition-colors leading-tight mb-3.5">
          {title}
        </h4>

        {/* Supporting Feature Pill */}
        <div className="py-2 px-3 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--border-subtle)] mb-4 sm:mb-5 flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)]" />
          <span className="font-mono text-xs sm:text-[13px] text-[var(--accent-base)] tracking-tight font-semibold">
            {spec}
          </span>
        </div>

        {/* Narrative Description */}
        <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] font-normal leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
          {description}
        </p>
      </div>

      {/* Bottom Technical Status Line */}
      <div className="pt-4 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono relative z-10">
        <span className="text-[var(--text-secondary)] uppercase tracking-wider">
          {footerSpec.label}
        </span>
        <span className="text-[var(--accent-base)] font-bold tracking-tight">
          {footerSpec.value}
        </span>
      </div>
    </motion.div>
  );
};
