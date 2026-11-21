import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rose' | 'lilac' | 'plum' | 'green' | 'muted';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'rose',
  className = '',
  size = 'md',
}) => {
  const variantStyles = {
    rose: 'bg-rose-subtle text-rose-dark dark:text-rose border-rose-border/60',
    lilac: 'bg-lilac-subtle text-lilac dark:text-lilac border-lilac/30',
    plum: 'bg-plum-subtle text-plum dark:text-plum border-plum/20',
    green: 'bg-accent-greenSubtle text-accent-green border-accent-green/30',
    muted: 'bg-surface-muted text-ink-muted border-border',
  }[variant];

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full border tracking-wide ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
