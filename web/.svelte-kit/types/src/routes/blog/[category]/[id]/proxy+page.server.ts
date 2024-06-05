// @ts-nocheck
import { blogData } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const { articles } = await blogData();
  return articles.find((it) => it.id === params.id);
};
