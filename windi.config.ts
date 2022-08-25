import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import plugin from 'windicss/plugin';

export default defineConfig({
  attributify: true,
  darkMode: 'class',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: 'IBM Plex Sans, system-ui, sans-serif',
        mono: 'IBM Plex Mono, monospace',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      addComponents({
        '.btn': {
          '@apply': 'bg-black',
        },
      });

      addUtilities({
        '.bg-dot': {
          backgroundImage:
            'radial-gradient(#ddd 1px, transparent 0), radial-gradient(#ddd 1px, transparent 0)',
          backgroundPosition: '0 0, 25px 25px',
          backgroundSize: '50px 50px',
        },
        '.bg-grid': {
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        },
      });
    }),
  ],
  shortcuts: {
    link: `transition-all duration-300 text-zinc-500 
    hover:text-black dark:(text-zinc-400 hover:text-white)`,
  },
});

export const x = 10;
