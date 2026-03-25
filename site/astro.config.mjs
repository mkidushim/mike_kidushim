// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://mkidushim.github.io",
  base: '/mike_kidushim/',

  vite: {
    plugins: [tailwindcss()],
  },
});