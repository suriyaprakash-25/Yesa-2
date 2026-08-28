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
      "bg-[var(--text-primary)] text-[var(--color-bg-base)] font-semibold hover:opacity-90 active:scale-[0.98] shadow-sm border border-[var(--text-primary)]",
    
    secondary: 
      "bg-[var(--color-surface-elevated)] text-[var(--text-primary)] hover:bg-[var(--color-surface-subtle)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] shadow-[var(--shadow-subtle)]",
    
    outline: 
      "bg-transparent text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--border-strong)] hover:bg-[var(--border-subtle)]",
    
    ghost: 
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] border border-transparent",
    
    glow: 
      "bg-[var(--accent-dim)] text-[var(--accent-base)] border border-[var(--accent-glow)] hover:bg-[var(--accent-glow)] hover:border-[var(--accent-base)] shadow-[var(--shadow-glow-accent)]",
    
    monastic: 
      "bg-transparent text-[var(--text-secondary)] border-b border-[var(--border-medium)] hover:border-[var(--accent-base)] rounded-none px-1 py-1 hover:text-[var(--text-primary)]"
  };

  return (
    <motion.button
      whileHover={{ y: -1, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
      disabled={disabled || isLoading}
      className={clsx(
        "relative inline-flex items-center justify-center gap-2.5 rounded-full cursor-pointer select-none outline-none font-sans transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-[var(--accent-base)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)]",
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
