import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    extend: {
      fontFamily: { 'main': 'Inter, sans' }
    }
  },
  preflight: {
    '@font-face': [
      {
        fontFamily: 'Inter',
        fontDisplay: 'swap',
        src: 'url("src/assets/Inter.woff2") format("woff2")'
      }
    ]
  }
});