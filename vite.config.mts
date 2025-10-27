/// <reference types='vitest/config' />
import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config
export default defineConfig({
  base: '/todo-list/',
  plugins: [preact(), VitePWA({
    srcDir: 'src',
    filename: 'sw.ts',
    manifest: false,
    injectRegister: null,
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    injectManifest: {
      globPatterns: ['**/*.{html,css,js,png,webp,woff2,webmanifest}']
    }
  })],
  resolve: {
    alias: {
      '@': '/src',
      '#': '/src/assets',
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
    coverage: {
      include: ['src/{hooks,slices}/*.{ts,tsx}'],
      exclude: [
        'src/hooks/{useAppState,useAuthListener,useStateSync}.ts' // Firebase
      ]
    }
  }
});
