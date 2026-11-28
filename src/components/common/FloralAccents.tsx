import React from 'react';

// Delicate decorative star / flower accents for playful, editorial elegance

/**
 * 4-point curved editorial star (✦) with crisp, balanced proportions at any size
 */
export const StarDoodle: React.FC<{ className?: string; size?: number }> = ({
  className = 'text-rose',
  size = 16,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`inline-block shrink-0 ${className}`}
  >
    <path d="M12 1.5C12.35 7.45 16.55 11.65 22.5 12C16.55 12.35 12.35 16.55 12 22.5C11.65 16.55 7.45 12.35 1.5 12C7.45 11.65 11.65 7.45 12 1.5Z" />
  </svg>
);

/**
 * Cute 5-petal blossom using soft filled petals and a contrasting center dot
 * so it reads cleanly even at 12px–16px in both light and dark modes.
 */
export const FlowerDoodle: React.FC<{ className?: string; size?: number }> = ({
  className = 'text-rose',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`inline-block shrink-0 ${className}`}
  >
    {/* 5 rounded petals arranged radially around (12, 12) */}
    <circle cx="12" cy="6.2" r="3.4" fillOpacity="0.88" />
    <circle cx="17.5" cy="10.2" r="3.4" fillOpacity="0.88" />
    <circle cx="15.4" cy="16.7" r="3.4" fillOpacity="0.88" />
    <circle cx="8.6" cy="16.7" r="3.4" fillOpacity="0.88" />
    <circle cx="6.5" cy="10.2" r="3.4" fillOpacity="0.88" />
    {/* Soft center core */}
    <circle cx="12" cy="12" r="2.7" className="text-surface" fill="currentColor" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);

/**
 * Playful twin-sparkle cluster (✨) with soft rounded curves
 */
export const SparkleDoodle: React.FC<{ className?: string; size?: number }> = ({
  className = 'text-lilac',
  size = 14,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`inline-block shrink-0 ${className}`}
  >
    {/* Primary 4-point curved sparkle */}
    <path d="M10.5 2C10.8 6.8 14.2 10.2 19 10.5C14.2 10.8 10.8 14.2 10.5 19C10.2 14.2 6.8 10.8 2 10.5C6.8 10.2 10.2 6.8 10.5 2Z" />
    {/* Tiny companion star */}
    <path d="M18.5 14C18.7 16.1 19.9 17.3 22 17.5C19.9 17.7 18.7 18.9 18.5 21C18.3 18.9 17.1 17.7 15 17.5C17.1 17.3 18.3 16.1 18.5 14Z" fillOpacity="0.8" />
  </svg>
);
