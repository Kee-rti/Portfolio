import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ExploringSection } from './components/sections/ExploringSection';
import { ProjectsSection } from './components/sections/Projects';
import { ProdInteractiveDemo } from './components/sections/ProdInteractiveDemo';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to warm ivory light mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-surface text-ink transition-colors duration-300 flex flex-col justify-between selection:bg-rose-subtle selection:text-ink">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Hero />
        <ExploringSection />
        <ProjectsSection />
        <ProdInteractiveDemo />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
