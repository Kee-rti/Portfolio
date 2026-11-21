import React from 'react';
import { exploringData } from '../../data/exploring';
import { FlowerDoodle, StarDoodle, SparkleDoodle } from '../common/FloralAccents';

export const ExploringSection: React.FC = () => {
  return (
    <section id="exploring" className="py-14 sm:py-18 border-t border-border">
      <div className="space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-rose font-medium">
                Curiosity & Focus
              </span>
              <FlowerDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              {exploringData.sectionTitle}
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md font-sans">
            {exploringData.introductoryText}
          </p>
        </div>

        {/* 3 Editorial Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {exploringData.areas.map((area) => (
            <div
              key={area.id}
              className="bg-surface-elevated border border-border rounded-3xl p-6 sm:p-7 shadow-soft space-y-3.5 hover:border-rose-border transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-rose">
                      {area.number}
                    </span>
                    <span className="text-border-subtle font-mono text-xs">—</span>
                    <h3 className="font-display text-base sm:text-lg font-medium text-ink">
                      {area.title}
                    </h3>
                  </div>
                  {area.accent === 'rose' && <StarDoodle size={13} className="text-rose" />}
                  {area.accent === 'lilac' && <SparkleDoodle size={13} className="text-lilac" />}
                  {area.accent === 'plum' && <FlowerDoodle size={13} className="text-plum dark:text-rose" />}
                </div>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  {area.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-ink-faint">
                <span>Direction {area.number}</span>
                <span className="text-rose">✦</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Research Note Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-surface-muted/60 border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-rose font-mono font-medium">
            <SparkleDoodle size={13} className="text-rose flex-shrink-0" />
            <span className="uppercase tracking-wider text-[11px]">{exploringData.researchNote.badge}:</span>
            <span className="text-ink font-sans font-normal text-xs sm:text-sm">
              {exploringData.researchNote.text}
            </span>
          </div>
          <span className="font-mono text-[11px] text-ink-faint whitespace-nowrap">
            Independent Inquiry • Ongoing
          </span>
        </div>

      </div>
    </section>
  );
};
