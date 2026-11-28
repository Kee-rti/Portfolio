import React from 'react';
import { siteConfig } from '../../data/site';
import { FlowerDoodle, StarDoodle, SparkleDoodle } from '../common/FloralAccents';
import { useInView } from '../../hooks/useInView';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-14 sm:py-18 border-t border-border transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-rose font-medium">
                About Me
              </span>
              <FlowerDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              A Bit of Background
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md font-sans">
            How I got into technology, how I think about engineering problems, and what I'm looking to do next.
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base text-ink-muted leading-relaxed font-sans">
            {siteConfig.bioLong.map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}

            <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-4 text-xs font-mono text-ink-muted">
              <div className="flex items-center gap-1.5">
                <StarDoodle size={12} className="text-rose" />
                <span>B.Tech in Computer Science & Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <SparkleDoodle size={12} className="text-lilac" />
                <span>CGPA: 8.2 • Lovely Professional University</span>
              </div>
            </div>
          </div>

          {/* Right: How I Approach Engineering (5 cols) */}
          <div className="group lg:col-span-5 bg-surface-elevated border border-border hover:border-rose-border rounded-3xl p-6 sm:p-7 shadow-soft hover:shadow-soft-hover transition-all duration-300 space-y-5">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-plum dark:text-rose font-semibold">
                How I Approach Engineering
              </span>
              <FlowerDoodle size={15} className="text-rose group-hover:rotate-45 transition-transform duration-500" />
            </div>

            <div className="space-y-3.5">
              <div className="space-y-1">
                <h4 className="font-display italic text-sm text-ink font-medium">
                  1. Understand the Underlying Mechanics
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Before reaching for high-level frameworks, I try to understand the raw math, data structures, and edge cases.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-display italic text-sm text-ink font-medium">
                  2. Keep AI Workflows Safe & Inspectable
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Language models are non-deterministic; the code calling them should have clear validation gates and approval checkpoints.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-display italic text-sm text-ink font-medium">
                  3. Respect User Privacy by Design
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  When local browser inference can solve a problem, running client-side is often faster, cheaper, and fundamentally more private.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-display italic text-sm text-ink font-medium">
                  4. Clarity in Communication
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Good engineering includes writing clean documentation, honest trade-offs, and software that other people can easily navigate.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
