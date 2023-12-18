import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: '../public/cms',
      fallback: 'index.html'
    })
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
