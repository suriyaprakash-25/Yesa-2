import React from 'react';
import clsx from 'clsx';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'emerald' | 'gold' | 'outline' | 'mono';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  dot = false,
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white/[0.05] border-white/[0.1] text-[#94A3B8]",
    accent: "bg-sky-500/[0.1] border-sky-500/30 text-sky-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)]",
    emerald: "bg-emerald-500/[0.1] border-emerald-500/30 text-emerald-300",
    gold: "bg-amber-500/[0.1] border-amber-500/30 text-amber-300",
    outline: "bg-transparent border-white/[0.15] text-[#CBD5E1]",
    mono: "bg-[#0E1116] border-white/[0.08] text-[#94A3B8] font-mono text-[11px] tracking-wider"
  };

  const dotColors = {
    default: "bg-[#64748B]",
    accent: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
    emerald: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    gold: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
    outline: "bg-white/60",
    mono: "bg-sky-400"
  };

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs font-medium backdrop-blur-md transition-all duration-200 select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className={clsx("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])} />
      )}
      <span>{children}</span>
    </div>
  );
};
