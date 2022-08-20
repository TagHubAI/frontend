import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
  attributify: true,
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
});
