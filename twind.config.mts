import { defineConfig } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

// https://twind.style/reference
export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
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
        src: 'url("Inter.woff2") format("woff2")'
      }
    ]
  }
});