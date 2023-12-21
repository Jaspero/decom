import { blogData } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { categories, articles, authors } = await blogData();

  return {
    blog: {
			categories,
			articles,
			authors
		}
  };
};
