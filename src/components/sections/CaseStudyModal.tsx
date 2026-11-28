import React, { useEffect, useRef } from 'react';
import { Project } from '../../data/projects/types';
import { Badge } from '../common/Badge';
import { FlowerDoodle, StarDoodle } from '../common/FloralAccents';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousBodyOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const dialog = dialogRef.current;
    const getFocusableElements = () =>
      dialog
        ? Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
        : [];

    (getFocusableElements()[0] ?? dialog)?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab' || !dialog) return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!dialog.contains(document.activeElement)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        tabIndex={-1}
        className="relative w-full max-w-3xl bg-surface-elevated border border-border rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-surface-elevated/95 backdrop-blur-md border-b border-border px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span id="case-study-title" className="font-display italic text-xl sm:text-2xl font-bold text-ink">
              {project.title}
            </span>
            <Badge variant={project.accent} size="sm">{project.status}</Badge>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 sm:p-2 rounded-full border border-border hover:border-rose text-ink-muted hover:text-ink transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 text-ink">
          
          {/* Summary */}
          <div className="space-y-2">
            <p className="text-base text-ink font-medium leading-relaxed font-sans">
              {project.oneLiner}
            </p>
            {project.links.github && (
              <div className="pt-1">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-rose hover:underline"
                >
                  <span>View code on GitHub</span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>

          {/* 1. Problem Statement */}
          <section className="space-y-2 p-5 rounded-2xl bg-surface-muted/50 border border-border-subtle">
            <h3 className="font-mono text-xs uppercase tracking-wider text-rose font-semibold flex items-center gap-2">
              <StarDoodle size={12} className="text-rose" />
              <span>01 / The Problem & Why It Matters</span>
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed font-sans">
              {caseStudy.problemStatement}
            </p>
          </section>

          {/* 2. Visual Workflow / Data Flow */}
          {caseStudy.workflowDiagram && (
            <section className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-plum dark:text-rose font-semibold flex items-center gap-2">
                <FlowerDoodle size={13} className="text-plum dark:text-rose" />
                <span>02 / Execution Workflow</span>
              </h3>
              <p className="text-xs text-ink-muted">
                {caseStudy.architectureDescription}
              </p>
              <div className="p-4 rounded-2xl bg-surface-muted/80 border border-border font-mono text-xs overflow-x-auto leading-relaxed">
                <pre>{caseStudy.workflowDiagram}</pre>
              </div>
            </section>
          )}

          {/* 3. Key Components */}
          <section className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold">
              03 / Key Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyComponents.map((c, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-border-subtle bg-surface-elevated space-y-1">
                  <div className="font-mono text-xs font-semibold text-ink">{c.name}</div>
                  <p className="text-xs text-ink-muted leading-relaxed">{c.purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Engineering Decisions & Trade-Offs */}
          <section className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-lilac font-semibold flex items-center gap-2">
              <StarDoodle size={12} className="text-lilac" />
              <span>04 / Key Decisions & Trade-offs</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.engineeringDecisions.map((dec, i) => (
                <div key={i} className="p-4 rounded-2xl border border-border bg-surface-elevated space-y-1.5">
                  <h4 className="font-mono text-xs font-semibold text-ink">
                    {i + 1}. {dec.title}
                  </h4>
                  <div className="text-xs text-ink-muted space-y-1">
                    <p><strong className="text-ink">Context:</strong> {dec.context}</p>
                    <p><strong className="text-rose">Choice:</strong> {dec.choice}</p>
                    <p><strong className="text-ink">Rationale:</strong> {dec.rationale}</p>
                    <p className="text-ink-faint font-mono"><strong className="text-ink-muted">Trade-off:</strong> {dec.tradeOff}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Implementation Details */}
          <section className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold">
              05 / Implementation Details
            </h3>
            <ul className="space-y-1.5 text-xs text-ink-muted font-sans list-disc list-inside">
              {caseStudy.implementationDetails.map((detail, i) => (
                <li key={i} className="leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Validation & Verified Metrics */}
          <section className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-green font-semibold flex items-center gap-2">
              <FlowerDoodle size={12} className="text-accent-green" />
              <span>06 / Validation & Results</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {caseStudy.validationAndMetrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-border-subtle bg-surface-muted/40 text-center space-y-1">
                  <div className="font-display text-lg font-bold text-ink">{m.value}</div>
                  <div className="font-mono text-xs text-rose font-medium">{m.metric}</div>
                  <p className="text-[11px] text-ink-muted">{m.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Limitations & Future Work */}
          <section className="space-y-2 p-4 rounded-2xl bg-surface-muted/30 border border-border-subtle text-xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold">
              07 / Honest Limitations & Next Steps
            </h3>
            <ul className="space-y-1 text-ink-muted list-disc list-inside">
              {caseStudy.limitationsAndFutureWork.map((lim, i) => (
                <li key={i}>{lim}</li>
              ))}
            </ul>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-surface-elevated/95 backdrop-blur-md border-t border-border px-5 sm:px-8 py-3 flex items-center justify-between text-xs font-mono">
          <span className="text-ink-muted">Project notes & stated limitations</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-border hover:border-rose text-ink transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
