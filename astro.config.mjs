import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import rehypeMermaid from 'rehype-mermaid';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Use different strategies based on environment
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

// Use 'pre-built' on Vercel/production to avoid Playwright, 'inline-svg' locally
const mermaidStrategy = isProduction || isVercel ? 'pre-built' : 'inline-svg';

console.log(`Using Mermaid strategy: ${mermaidStrategy}`);

// https://astro.build/config
export default defineConfig({
  site: 'https://kronosoft.vercel.app',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy:
              process.env.NODE_ENV === 'production'
                ? 'pre-mermaid'
                : 'inline-svg',
          },
        ],
      ],
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    }),
  ],

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['three'],
    },
  },

  adapter: vercel(),
});
