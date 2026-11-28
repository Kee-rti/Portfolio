import React from 'react';
import { skillCategories } from '../../data/skills';
import { FlowerDoodle, StarDoodle } from '../common/FloralAccents';
import { useInView } from '../../hooks/useInView';

export const SkillsSection: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
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
                Skills & Technologies
              </span>
              <FlowerDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              Technical Toolkit
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md font-sans">
            Languages, frameworks, and engineering tools I've worked with across academic coursework, projects, and internships.
          </p>
        </div>

        {/* 5 Categories Balanced Grid: Row 1 has 3 (2 cols each), Row 2 has 2 (3 cols each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 items-stretch">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group bg-surface-elevated border border-border rounded-3xl p-6 shadow-soft space-y-3.5 hover:border-rose-border hover:-translate-y-1 hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between ${
                idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
              }`}
            >
              <div className="space-y-1 border-b border-border-subtle pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-medium text-lg text-ink">
                    {category.title}
                  </h3>
                  <StarDoodle size={13} className="text-rose group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-xs text-ink-muted font-sans">
                  {category.subtitle}
                </p>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-surface-muted text-ink-muted border border-border-subtle hover:text-ink hover:border-rose-border hover:scale-[1.03] transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
