const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      // Semantic tokens -> nilainya berubah otomatis saat class `dark` aktif (lihat index.css)
      colors: {
        surface: token('surface'),
        subtle: token('subtle'),
        chip: token('chip'),
        line: token('line'),
        fg: token('fg'),
        muted: token('muted'),
        soft: token('soft'),
        faint: token('faint'),
      },
    },
  },
  plugins: [],
};
