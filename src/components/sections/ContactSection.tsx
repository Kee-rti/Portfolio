import React, { useState } from 'react';
import { siteConfig } from '../../data/site';
import { FlowerDoodle, StarDoodle, SparkleDoodle } from '../common/FloralAccents';
import { useInView } from '../../hooks/useInView';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { ref, isVisible } = useInView();

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-14 sm:py-18 border-t border-border transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Header with flower doodle */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-rose-border bg-rose-subtle text-rose-dark dark:text-rose">
            <FlowerDoodle size={13} className="text-rose" />
            <span>Get in Touch</span>
            <StarDoodle size={11} className="text-rose" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
            Let's connect.
          </h2>

          <p className="text-base text-ink-muted leading-relaxed font-sans max-w-xl mx-auto">
            I'm currently exploring opportunities in AI/ML and software engineering. If you have an open role, an interesting project, or just want to chat about technology, feel free to reach out.
          </p>
        </div>

        {/* Actionable Email Box */}
        <div className="bg-surface-elevated border border-border hover:border-rose-border rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 max-w-lg mx-auto space-y-5">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Email Address
            </span>
            <div className="font-display text-xl sm:text-2xl text-ink font-medium select-all">
              {siteConfig.email}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-plum dark:bg-rose text-surface hover:opacity-90 transition-all shadow-soft flex items-center gap-1.5"
            >
              <span>Send an Email</span>
              <span>↗</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-4 py-2.5 rounded-full text-xs font-mono border border-border hover:border-rose text-ink transition-colors bg-surface-muted/50 flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <SparkleDoodle size={12} className="text-accent-green" />
                  <span className="text-accent-green">Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy</span>
                  <span className="text-ink-faint">📋</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Row */}
          <div className="pt-5 border-t border-border-subtle flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-rose transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span>•</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-rose transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span>•</span>
            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-rose transition-colors flex items-center gap-1"
            >
              <span>LeetCode</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span>•</span>
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-rose transition-colors flex items-center gap-1"
            >
              <span>Résumé (PDF)</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
