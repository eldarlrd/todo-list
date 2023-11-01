import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

/* https://vitejs.dev/config
   https://vitest.dev/config */
export default defineConfig({
  base: '/todo-list/',
  plugins: [preact()],
  resolve: {
    alias: {
      '@': '/src',
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'src/setup.ts',
    coverage: { all: true, include: ['src/**/*.{ts,tsx}'] }
  }
});