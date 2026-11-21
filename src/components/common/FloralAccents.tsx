import React from 'react';

// Delicate decorative star / flower accents for playful, editorial elegance
export const StarDoodle: React.FC<{ className?: string; size?: number }> = ({ className = "text-rose", size = 16 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`inline-block ${className}`}
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export const FlowerDoodle: React.FC<{ className?: string; size?: number }> = ({ className = "text-rose", size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`inline-block ${className}`}
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M12 18a3 3 0 0 0-3 3v1a3 3 0 0 0 6 0v-1a3 3 0 0 0-3-3z" />
    <path d="M22 12a3 3 0 0 0-3-3h-1a3 3 0 0 0 0 6h1a3 3 0 0 0 3-3z" />
    <path d="M6 12a3 3 0 0 0-3-3H2a3 3 0 0 0 0 6h1a3 3 0 0 0 3-3z" />
  </svg>
);

export const SparkleDoodle: React.FC<{ className?: string; size?: number }> = ({ className = "text-lilac", size = 14 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill="currentColor" 
    className={`inline-block ${className}`}
  >
    <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
  </svg>
);
