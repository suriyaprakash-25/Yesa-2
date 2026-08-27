import React from 'react';
import clsx from 'clsx';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size" | "children"> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'monastic';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  className,
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[var(--text-cta)] tracking-wide",
    md: "px-5 py-2.5 text-[var(--text-cta)] tracking-wide",
    lg: "px-7 py-3.5 text-base tracking-wide font-medium",
  };

  const variantStyles = {
    primary: 
      "bg-[#F3F5F7] text-[#08090B] font-semibold hover:bg-white active:bg-[#E2E8F0] shadow-[0_1px_15px_rgba(255,255,255,0.12)] border border-white",
    
    secondary: 
      "bg-[#13171E] text-[#F3F5F7] hover:bg-[#1A1F29] border border-white/[0.12] hover:border-white/[0.25] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)]",
    
    outline: 
      "bg-transparent text-[#E2E8F0] border border-white/[0.18] hover:border-white/[0.4] hover:bg-white/[0.04]",
    
    ghost: 
      "bg-transparent text-[#94A3B8] hover:text-[#F3F5F7] hover:bg-white/[0.06] border border-transparent",
    
    glow: 
      "bg-[var(--accent-subtle)] text-[var(--accent-hover)] border border-[var(--accent-glow)] hover:bg-[var(--accent-glow)] hover:border-[var(--accent-base)] shadow-[0_0_25px_-5px_var(--accent-glow)]",
    
    monastic: 
      "bg-transparent text-[#CBD5E1] border-b border-white/30 hover:border-[var(--accent-base)] rounded-none px-1 py-1 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ y: -1, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      disabled={disabled || isLoading}
      className={clsx(
        "relative inline-flex items-center justify-center gap-2.5 rounded-full cursor-pointer select-none outline-none font-sans transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-[var(--accent-base)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090B]",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          {children && <span>{children}</span>}
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </motion.button>
  );
};
