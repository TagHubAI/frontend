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
      colors: {
        gray: { ...(colors.gray as object), 50: '#F8FAFC' },
      },
      fontFamily: {
        sans: 'IBM Plex Sans, system-ui, sans-serif',
        mono: 'IBM Plex Mono, monospace',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-dot': {
          backgroundImage:
            'radial-gradient(#ddd 1px, transparent 0), radial-gradient(#ddd 1px, transparent 0)',
          backgroundPosition: '0 0, 25px 25px',
          backgroundSize: '50px 50px',
        },
      });
    }),
  ],
  shortcuts: {
    link: 'transition-all duration-300 text-gray-500 hover:text-black dark:(text-gray-400 hover:text-white)',
  },
});

export const x = 10;
