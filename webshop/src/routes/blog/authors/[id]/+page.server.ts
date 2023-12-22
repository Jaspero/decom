import { blogData } from '$lib/server/blog';
import { cleanSlug } from '@jaspero/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { authors, articles } = await blogData();

  return {
    author: authors.find((it: any) => cleanSlug(it.name) === params.id),
    articles: articles.filter((it: any) => it.author && cleanSlug(it.author.name) === params.id)
  };
};
