import { blogData } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { articles } = await blogData();
  return articles.find((it) => it.id === params.id);
};
