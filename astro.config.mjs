import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.DEPLOY_BASE || '/',
  output: 'static',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    assets: 'assets',
    format: 'directory'
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