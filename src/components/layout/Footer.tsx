import React from 'react';
import { siteConfig } from '../../data/site';
import { FlowerDoodle, StarDoodle } from '../common/FloralAccents';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border mt-8 sm:mt-12 py-10 sm:py-12 bg-surface-muted/30 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
        
        {/* Left: Studio Mark & Note */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-display italic text-lg font-semibold text-ink">kirti</span>
          <FlowerDoodle size={14} className="text-rose" />
          <span className="text-xs text-ink-muted">
            • Final-Year CS Student • New Delhi
          </span>
        </div>

        {/* Center: Playful Motif */}
        <div className="flex items-center gap-2 text-xs font-mono text-ink-faint">
          <StarDoodle size={11} className="text-rose" />
          <span>Built with React & Tailwind CSS</span>
          <StarDoodle size={11} className="text-lilac" />
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-4 sm:gap-5 text-xs font-mono">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-rose transition-colors"
          >
            github
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-rose transition-colors"
          >
            linkedin
          </a>
          <a
            href={siteConfig.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-rose transition-colors"
          >
            leetcode
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors pl-2 border-l border-border"
          >
            <span>top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
