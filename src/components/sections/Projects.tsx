import React, { useState } from 'react';
import { projects, Project } from '../../data/projects';
import { Badge } from '../common/Badge';
import { FlowerDoodle, SparkleDoodle } from '../common/FloralAccents';
import { CaseStudyModal } from './CaseStudyModal';
import { useInView } from '../../hooks/useInView';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { ref, isVisible } = useInView();

  return (
    <section
      id="work"
      ref={ref}
      className={`scroll-mt-24 py-14 sm:py-18 border-t border-border transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 sm:max-w-[48%] sm:justify-end">
              <span className="font-mono text-xs uppercase tracking-wider text-rose font-medium">
                Projects
              </span>
              <FlowerDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md font-sans">
            A look into the problems I've tackled, the tools I've used, and the engineering decisions behind each project.
          </p>
        </div>

        {/* Clean, Scannable Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-border bg-surface-elevated p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-rose-border hover:shadow-soft-hover sm:p-7 lg:p-8"
            >
              {/* Header: Name, Category, Status */}
              <div className="mb-5 flex flex-col gap-3 border-b border-border-subtle pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="font-mono text-xs text-rose font-semibold">0{index + 1}</span>
                  <h3 className="min-w-0 break-words font-display text-2xl font-normal tracking-tight text-ink transition-colors group-hover:text-rose">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant={project.accent} size="sm">
                    {project.category}
                  </Badge>
                  <Badge variant="muted" size="sm">{project.status}</Badge>
                </div>
              </div>

              {/* Body: One-liner, Problem, Tech */}
              <div className="space-y-4">
                <p className="text-base text-ink font-medium leading-relaxed font-sans">
                  {project.oneLiner}
                </p>

                <div className="text-sm text-ink-muted leading-relaxed font-sans space-y-1">
                  <span className="font-mono text-xs text-plum dark:text-rose font-semibold uppercase tracking-wider block">
                    The Problem:
                  </span>
                  <p>{project.problemSummary}</p>
                </div>

                {/* 3-5 Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-surface-muted text-ink-muted border border-border-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions: Case study & links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    aria-haspopup="dialog"
                    className="group/btn inline-flex min-h-11 items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-plum dark:bg-rose text-surface hover:opacity-95 hover:-translate-y-px active:scale-[0.98] transition-all duration-200 shadow-soft flex items-center gap-2"
                  >
                    <SparkleDoodle size={12} className="text-surface group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View Case Study</span>
                    <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">→</span>
                  </button>

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full text-xs font-mono border border-border hover:border-rose text-ink transition-colors flex items-center gap-1.5"
                    >
                      <span>GitHub</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}

                  {project.hasInteractiveDemo && (
                    <a
                      href="#interactive-lab"
                      className="px-4 py-2.5 rounded-full text-xs font-mono text-rose hover:underline flex items-center gap-1"
                    >
                      <span>Try Interactive Demo</span>
                      <span>↓</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
