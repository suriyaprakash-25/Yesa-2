import React from 'react';

// Import Discipline High-Resolution Visual Assets
import agentDevImg from '../../assets/roadmap/01-agent-development.jpg';
import designImg from '../../assets/roadmap/02-design.jpg';
import productImg from '../../assets/roadmap/03-product.jpg';
import salesMarketingImg from '../../assets/roadmap/04-sales-marketing.jpg';

export const AgentDevelopmentVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* High-Resolution Blueprint Image — Inverted to crisp blueprint in light mode, original in dark mode */}
      <img
        src={agentDevImg}
        alt="YESA Agent Development Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-all duration-700 ease-out invert hue-rotate-180 brightness-95 dark:invert-0 dark:hue-rotate-0 dark:brightness-100"
        loading="lazy"
      />

      {/* Top HUD — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-secondary)] relative z-10 px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md">
        <span className="text-[var(--accent-base)] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse" />
          AGENT_TOPOLOGY
        </span>
        <span className="text-[var(--text-primary)] font-semibold">DISCIPLINE 01</span>
      </div>

      {/* Bottom Status — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md relative z-10">
        <span className="text-[var(--text-secondary)] font-medium">TOPOLOGY: MULTI-AGENT</span>
        <span className="text-[var(--accent-base)] font-bold">SYSTEMS ARCHITECTURE</span>
      </div>
    </div>
  );
};

export const DesignVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* High-Resolution Blueprint Image — Inverted to crisp blueprint in light mode, original in dark mode */}
      <img
        src={designImg}
        alt="YESA Design Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-all duration-700 ease-out invert hue-rotate-180 brightness-95 dark:invert-0 dark:hue-rotate-0 dark:brightness-100"
        loading="lazy"
      />

      {/* Top HUD — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-secondary)] relative z-10 px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md">
        <span className="text-[var(--accent-base)] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse" />
          GRID_ARCHITECTURE
        </span>
        <span className="text-[var(--text-primary)] font-semibold">DISCIPLINE 02</span>
      </div>

      {/* Bottom Status — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md relative z-10">
        <span className="text-[var(--text-secondary)] font-medium">CANVAS: DESIGN SYSTEMS</span>
        <span className="text-[var(--accent-base)] font-bold">INTERFACE PRECISION</span>
      </div>
    </div>
  );
};

export const ProductVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* High-Resolution Blueprint Image — Inverted to crisp blueprint in light mode, original in dark mode */}
      <img
        src={productImg}
        alt="YESA Product Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-all duration-700 ease-out invert hue-rotate-180 brightness-95 dark:invert-0 dark:hue-rotate-0 dark:brightness-100"
        loading="lazy"
      />

      {/* Top HUD — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-secondary)] relative z-10 px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md">
        <span className="text-[var(--accent-base)] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse" />
          ROADMAP_ORCHESTRATION
        </span>
        <span className="text-[var(--text-primary)] font-semibold">DISCIPLINE 03</span>
      </div>

      {/* Bottom Status — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md relative z-10">
        <span className="text-[var(--text-secondary)] font-medium">ALIGNMENT: STRATEGY & ROADMAP</span>
        <span className="text-[var(--accent-base)] font-bold">END-TO-END EXECUTION</span>
      </div>
    </div>
  );
};

export const SalesMarketingVisual: React.FC = () => {
  return (
    <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl bg-[var(--color-surface-subtle)] border border-[var(--border-subtle)] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden group">
      {/* High-Resolution Blueprint Image — Inverted to crisp blueprint in light mode, original in dark mode */}
      <img
        src={salesMarketingImg}
        alt="YESA Sales & Marketing Discipline"
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-all duration-700 ease-out invert hue-rotate-180 brightness-95 dark:invert-0 dark:hue-rotate-0 dark:brightness-100"
        loading="lazy"
      />

      {/* Top HUD — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-secondary)] relative z-10 px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md">
        <span className="text-[var(--accent-base)] font-bold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse" />
          GLOBAL_DISTRIBUTION
        </span>
        <span className="text-[var(--text-primary)] font-semibold">DISCIPLINE 04</span>
      </div>

      {/* Bottom Status — Zero shadow, crisp border */}
      <div className="flex items-center justify-between font-mono text-[10px] text-[var(--text-primary)] px-3 py-1.5 rounded-lg bg-[var(--color-surface-card)]/90 border border-[var(--border-medium)] backdrop-blur-md relative z-10">
        <span className="text-[var(--text-secondary)] font-medium">GROWTH: ENTERPRISE SPRINT</span>
        <span className="text-[var(--accent-base)] font-bold">REVENUE ARCHITECTURE</span>
      </div>
    </div>
  );
};

export const DisciplineVisual: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case 'agent-development':
      return <AgentDevelopmentVisual />;
    case 'design':
      return <DesignVisual />;
    case 'product':
      return <ProductVisual />;
    case 'sales-marketing':
      return <SalesMarketingVisual />;
    default:
      return null;
  }
};
