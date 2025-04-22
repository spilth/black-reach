// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Silence Sass deprecations for Bootstrap
          quietDeps: true,
        },
      },
    }
  }
});