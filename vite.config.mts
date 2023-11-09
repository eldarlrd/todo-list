import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config
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
  // https://vitest.dev/config
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'happy-dom',
    setupFiles: '__tests__/setup.ts',
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    coverage: { all: true, include: ['src/{hooks,slices}/*.{ts,tsx}'] }
  }
});