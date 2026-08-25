import React from 'react';
import clsx from 'clsx';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  borderStyle?: 'subtle' | 'medium' | 'accent';
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  blur = 'md',
  borderStyle = 'subtle',
  className,
  ...props
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm bg-[#0E1116]/40',
    md: 'backdrop-blur-md bg-[#0E1116]/70',
    lg: 'backdrop-blur-xl bg-[#0E1116]/85',
    xl: 'backdrop-blur-2xl bg-[#0E1116]/95',
  };

  const borderClasses = {
    subtle: 'border border-white/[0.07]',
    medium: 'border border-white/[0.14]',
    accent: 'border border-sky-500/30 shadow-[0_0_30px_-5px_rgba(56,189,248,0.15)]',
  };

  return (
    <div
      className={clsx(
        "rounded-2xl relative",
        blurClasses[blur],
        borderClasses[borderStyle],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
