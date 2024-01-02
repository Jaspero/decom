import { blogData } from '$lib/server/blog';
import { paginateArray } from '$lib/utils/paginate-array';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const { categories, articles } = await blogData();
  const categoryArticles = articles.filter((it) => it.categoryId === params.category);
  const { pageSize, pages } = paginateArray(categoryArticles);

  return {
    categories,
    pageSize,
    page: pages[parseInt(params.page, 10) - 1] || []
  };
};
