import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/site';
import { FlowerDoodle } from '../common/FloralAccents';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/85 backdrop-blur-md border-b border-border shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Studio Mark */}
        <a
          href="#main-content"
          className="group flex items-center gap-2 text-ink hover:text-rose transition-colors duration-200"
        >
          <span className="font-display italic text-2xl font-semibold tracking-tight">
            kirti
          </span>
          <FlowerDoodle size={18} className="text-rose group-hover:rotate-90 transition-transform duration-500" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium xl:gap-7">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-muted hover:text-ink transition-all duration-200 relative py-1 hover:-translate-y-px hover:underline decoration-rose-border underline-offset-8"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Résumé & Theme Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border border-rose-border bg-rose-subtle text-rose-dark dark:text-rose hover:bg-rose-border/40 hover:-translate-y-px transition-all duration-200"
          >
            <span>résumé.pdf</span>
            <span className="text-[10px]">↗</span>
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink transition-all duration-200 hover:border-rose hover:text-rose active:scale-95"
          >
            {isDark ? (
              // Sun icon for dark mode
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon for light mode
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink transition-colors hover:border-rose hover:text-rose lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-surface-elevated border-t border-border px-5 py-4 shadow-soft sm:px-6">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-xl px-3 text-ink-muted transition-colors hover:bg-surface-muted hover:text-rose"
              >
                <span>{item.label}</span>
                <span className="text-xs text-rose">→</span>
              </a>
            ))}
            <div className="pt-2 border-t border-border">
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-sm font-mono text-rose"
              >
                <span>Download Résumé (PDF)</span>
                <span>↗</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
