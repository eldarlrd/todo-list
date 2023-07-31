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
      'react-dom': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react/jsx-runtime': 'preact/jsx-runtime'
    }
  }
});