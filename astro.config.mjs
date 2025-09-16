import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mark-65-arch.github.io',
  base: process.env.NODE_ENV === 'production' ? '/AstroEstate/' : undefined,
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  vite: {
    server: {
      allowedHosts: true
    }
  }
});