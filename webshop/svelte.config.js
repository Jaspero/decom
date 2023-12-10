import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: './public/webshop',
      fallback: 'index.html'
    })
  },
  preprocess: vitePreprocess(),
  vitePlugin: {
    inspector: true
  }
};
export default config;
