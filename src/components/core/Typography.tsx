import React from 'react';
import clsx from 'clsx';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const DisplayHeading: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h1', 
  ...props 
}) => {
  return (
    <Component 
      className={clsx(
        "font-display font-bold tracking-[-0.04em] text-white leading-[1.04]",
        "text-[var(--text-hero)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SectionTitle: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h2', 
  ...props 
}) => {
  return (
    <Component 
      className={clsx(
        "font-display font-semibold tracking-[-0.03em] text-[#F3F5F7] leading-[1.12]",
        "text-[var(--text-section)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const SubHeading: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h3', 
  ...props 
}) => {
  return (
    <Component 
      className={clsx(
        "font-display font-medium tracking-[-0.02em] text-[#E2E8F0] leading-snug",
        "text-[var(--text-h2)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const BodyText: React.FC<TypographyProps & { size?: 'sm' | 'md' | 'lg'; muted?: boolean }> = ({ 
  children, 
  className, 
  size = 'md',
  muted = false,
  as: Component = 'p', 
  ...props 
}) => {
  const sizeClasses = {
    sm: "text-[var(--text-micro)] leading-[1.6]",
    md: "text-[var(--text-supporting)] leading-[1.65]",
    lg: "text-[var(--text-h3)] leading-[1.7]",
  };

  return (
    <Component 
      className={clsx(
        "font-sans font-normal antialiased",
        muted ? "text-[#9BA3AF]" : "text-[#D1D5DB]",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const MonoLabel: React.FC<TypographyProps & { glow?: boolean }> = ({ 
  children, 
  className, 
  glow = false,
  as: Component = 'span', 
  ...props 
}) => {
  return (
    <Component 
      className={clsx(
        "font-mono text-[var(--text-eyebrow)] uppercase tracking-[0.12em] font-medium inline-flex items-center gap-1.5",
        glow ? "text-[var(--accent-base)] drop-shadow-[0_0_8px_var(--accent-glow)]" : "text-[#64748B]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Kicker: React.FC<TypographyProps> = ({
  children,
  className,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full",
        "bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm",
        "font-mono text-[var(--text-eyebrow)] uppercase tracking-widest text-[#94A3B8]",
        className
      )}
      {...props}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-base)] animate-pulse"></span>
      {children}
    </Component>
  );
};
