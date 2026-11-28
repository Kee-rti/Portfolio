import React from 'react';
import { experiences } from '../../data/experience';
import { Badge } from '../common/Badge';
import { FlowerDoodle, StarDoodle } from '../common/FloralAccents';
import { useInView } from '../../hooks/useInView';

export const ExperienceSection: React.FC = () => {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
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
                Experience
              </span>
              <FlowerDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              Where I've Contributed
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md font-sans">
            Internship contributions spanning machine learning prototypes, technical research, and system documentation.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-surface-elevated border border-border rounded-3xl p-6 sm:p-8 shadow-soft hover:border-rose-border hover:-translate-y-0.5 hover:shadow-soft-hover transition-all duration-300 space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border-subtle pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {exp.role}
                    </h3>
                    <span className="text-ink-faint font-display italic text-base">at</span>
                    <span className="font-display font-medium text-plum dark:text-rose text-lg">
                      {exp.company}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-ink-muted">
                    {exp.type}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {exp.badge && <Badge variant="plum" size="sm">{exp.badge}</Badge>}
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface-muted text-ink border border-border">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-ink-muted leading-relaxed font-sans">
                {exp.summary}
              </p>

              {/* Verified Highlights */}
              <ul className="space-y-2 text-sm text-ink-muted font-sans list-none">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <StarDoodle size={12} className="text-rose mt-1 shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-ink-faint mr-1">Skills:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-surface-muted text-ink-muted border border-border-subtle"
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
