import { blogData } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { authors } = await blogData();

  return {
    authors
  };
};
