import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zeisworks.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/gap-analysis/thank-you') &&
        !page.includes('/local-search-checklist/thank-you'),
    }),
  ],
});
