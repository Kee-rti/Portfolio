import React from 'react';
import { siteConfig } from '../../data/site';
import { StarDoodle, FlowerDoodle, SparkleDoodle } from '../common/FloralAccents';

export const Hero: React.FC = () => {
  return (
    <section className="pt-8 sm:pt-14 pb-14 sm:pb-18 relative">
      {/* Delicate floating background accents */}
      <div className="absolute top-6 right-8 hidden lg:block pointer-events-none animate-twinkle">
        <StarDoodle size={22} className="text-rose rotate-12" />
      </div>
      <div className="absolute top-44 left-0 hidden lg:block pointer-events-none animate-float-gentle">
        <SparkleDoodle size={18} className="text-lilac opacity-60" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Personal Narrative & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7">
          
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-accent-green/30 bg-accent-greenSubtle text-accent-green animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span>{siteConfig.statusBadge.text}</span>
            <FlowerDoodle size={13} className="text-accent-green" />
          </div>

          {/* Headline & Intro */}
          <div className="space-y-3.5 animate-fade-in-up" style={{ animationDelay: '90ms' }}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-normal tracking-tight text-ink leading-[1.12]">
              {siteConfig.headline}
            </h1>
            <p className="font-display italic text-lg sm:text-xl text-plum dark:text-rose font-medium leading-relaxed">
              {siteConfig.intro}
            </p>
          </div>

          {/* Supporting Text */}
          <p
            className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans max-w-xl animate-fade-in-up"
            style={{ animationDelay: '180ms' }}
          >
            {siteConfig.supportingText}
          </p>

          {/* Clear Actions */}
          <div
            className="flex flex-wrap items-center gap-3 pt-1 animate-fade-in-up"
            style={{ animationDelay: '260ms' }}
          >
            <a
              href="#work"
              className="group/cta px-6 py-3 rounded-full text-sm font-medium bg-plum dark:bg-rose text-surface hover:opacity-95 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-soft hover:shadow-soft-hover inline-flex items-center gap-2"
            >
              <span>Explore my work</span>
              <span className="text-xs group-hover/cta:translate-y-0.5 transition-transform duration-200">↓</span>
            </a>

            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-sm font-medium border border-rose-border bg-rose-subtle text-rose-dark dark:text-rose hover:bg-rose-border/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 font-mono text-xs"
            >
              <span>Download résumé</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-full text-xs font-mono text-ink-muted hover:text-ink hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-1.5 border border-border bg-surface-elevated hover:border-rose-border"
            >
              <span>GitHub</span>
              <span className="text-[10px]">↗</span>
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-full text-xs font-mono text-ink-muted hover:text-ink hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-1.5 border border-border bg-surface-elevated hover:border-rose-border"
            >
              <span>LinkedIn</span>
              <span className="text-[10px]">↗</span>
            </a>

            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-full text-xs font-mono text-ink-muted hover:text-ink hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-1.5 border border-border bg-surface-elevated hover:border-rose-border"
            >
              <span>LeetCode</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          {/* Academic Credential Strip */}
          <div
            className="pt-2 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs font-mono text-ink-muted border-t border-border-subtle animate-fade-in-up"
            style={{ animationDelay: '340ms' }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block" />
              Final-Year B.Tech CSE (CGPA: 8.2)
            </span>
            <span className="text-ink-faint">•</span>
            <span>Lovely Professional University</span>
            <span className="text-ink-faint">•</span>
            <span className="text-plum dark:text-rose">New Delhi, India</span>
          </div>

        </div>

        {/* Right Column: Prominent Editorial Portrait (5 cols / ~42% visual area) */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '120ms' }}>
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
            
            {/* Soft decorative background shape offset */}
            <div className="absolute -inset-2.5 sm:-inset-3 bg-gradient-to-tr from-rose-subtle via-lilac-subtle/50 to-surface-muted rounded-[2.25rem] -rotate-1 group-hover:rotate-1 transition-transform duration-500 transform -z-10 opacity-75" />

            {/* Editorial Frame */}
            <div className="relative rounded-[2rem] overflow-hidden bg-surface-elevated border border-border group-hover:border-rose-border shadow-soft group-hover:shadow-soft-hover transition-all duration-400 p-2.5 sm:p-3">
              
              {/* 4:5 Aspect Ratio Photo Container */}
              <div className="relative aspect-[4/5] w-full rounded-[1.4rem] overflow-hidden bg-surface-muted">
                <img
                  src="/kirti.jpg"
                  alt="Kirti — Computer Science Student & Aspiring AI/ML Engineer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* Floating corner stamp */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-elevated/92 backdrop-blur-md border border-border-subtle shadow-sm flex items-center gap-1.5 text-[11px] font-mono text-ink">
                  <FlowerDoodle size={13} className="text-rose group-hover:rotate-90 transition-transform duration-500" />
                  <span>kirti</span>
                </div>

                {/* Bottom editorial caption plate */}
                <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-surface-elevated/92 backdrop-blur-md border border-border-subtle shadow-sm flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green inline-block animate-pulse" />
                    <span className="font-medium text-[11px] sm:text-xs">Applied AI & Software</span>
                  </div>
                  <span className="text-plum dark:text-rose text-[11px] font-mono flex items-center gap-1">
                    <span>Delhi</span>
                    <StarDoodle size={11} className="text-rose animate-twinkle" />
                  </span>
                </div>
              </div>

            </div>

            {/* Delicate floral doodles outside the frame */}
            <div className="absolute -bottom-3 -left-3 hidden sm:block pointer-events-none animate-float-slow">
              <StarDoodle size={22} className="text-rose rotate-12" />
            </div>
            <div className="absolute -top-3 -right-2 hidden sm:block pointer-events-none animate-float-gentle">
              <SparkleDoodle size={19} className="text-lilac" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
