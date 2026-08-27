import React from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    full: "max-w-[1600px]",
  };

  return (
    <div
      className={clsx(
        "w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-24",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
