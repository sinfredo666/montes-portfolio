/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        rule: 'var(--color-rule)',
        ruby: 'var(--color-ruby)',
        'ruby-glass': 'var(--color-ruby-glass)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Arial', '"Helvetica Neue"', 'sans-serif'],
        mono: ['"Space Mono"', '"IBM Plex Mono"', '"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};
