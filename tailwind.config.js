/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'surface-muted': 'var(--color-surface-muted)',
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
        'ink-faint': 'var(--color-ink-faint)',
        rose: {
          subtle: 'var(--color-rose-subtle)',
          border: 'var(--color-rose-border)',
          DEFAULT: 'var(--color-rose)',
          dark: 'var(--color-rose-dark)',
        },
        lilac: {
          subtle: 'var(--color-lilac-subtle)',
          DEFAULT: 'var(--color-lilac)',
        },
        plum: {
          subtle: 'var(--color-plum-subtle)',
          DEFAULT: 'var(--color-plum)',
          deep: 'var(--color-plum-deep)',
        },
        accent: {
          green: 'var(--color-accent-green)',
          greenSubtle: 'var(--color-accent-green-subtle)',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(74, 32, 52, 0.05)',
        'soft-hover': '0 8px 30px -4px rgba(74, 32, 52, 0.1)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'pill': '100px',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
