import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/web',
      fallback: 'index.html',
      strict: false
    }),
    prerender: {
      crawl: true,
      handleMissingId: 'warn',
      entries: [
        /**
         * Contains links to all other pages
         */
        '/sitemap-hidden'
      ]
    }
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true
  },
  compilerOptions: {
    customElement: true
  }
};
export default config;
