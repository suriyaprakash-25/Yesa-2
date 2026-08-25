import React from 'react';
import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass' | 'interactive' | 'ascent-stage';
  glowEffect?: boolean;
  glowColor?: string;
  cornerAccent?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  glowEffect = false,
  glowColor = 'rgba(56, 189, 248, 0.15)',
  cornerAccent = false,
  className,
  ...props
}) => {
  const variantStyles = {
    default: "bg-[#0E1116] border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
    elevated: "bg-[#13171E] border-white/[0.12] shadow-[0_16px_40px_rgb(0,0,0,0.5)]",
    glass: "bg-[#0E1116]/60 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
    interactive: "bg-[#0E1116]/80 hover:bg-[#13171E] border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer",
    'ascent-stage': "bg-[#0C0E12] border-white/[0.07] hover:border-white/[0.25] transition-all duration-300"
  };

  return (
    <motion.div
      className={clsx(
        "relative rounded-2xl border p-6 overflow-hidden",
        variantStyles[variant],
        className
      )}
      style={{
        ...(glowEffect ? { boxShadow: `0 0 40px -10px ${glowColor}` } : {}),
        ...props.style
      }}
      {...props}
    >
      {/* Subtle top hairline highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

      {/* Optional Architectural Corner Accents */}
      {cornerAccent && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30 pointer-events-none" />
        </>
      )}

      {children}
    </motion.div>
  );
};
