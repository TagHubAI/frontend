import { defineConfig } from 'windicss/helpers';
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
    require('windicss/plugin/aspect-ratio'),
    plugin(({ addUtilities }) => {
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
        '.bg-gradient': {
          background: `conic-gradient(
            from 230.29deg at 51.63%52.16%,
            #2400ff 0deg,
            #0087ff 67.5deg,
            #ff1d7a 198.75deg,
            #f5381b 251.25deg,
            #ff5335 301.88deg,
            #691eff 360deg
          )`,
        },
      });
    }),
  ],
  shortcuts: {
    container: 'max-w-6xl m-auto px-6',
    // btn: 'inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300',
    link: 'transition-all duration-300 text-zinc-500 hover:text-black dark:(text-zinc-400 hover:text-white)',
  },
});
