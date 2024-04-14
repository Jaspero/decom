import { blogData } from '$lib/server/blog';
import { paginateArray } from '$lib/utils/paginate-array';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { categories, articles, authors } = await blogData();
  const { pages } = paginateArray(articles);

  return {
    blog: {
      allPages: pages.map((p, i) => i + 1),
      pages: categories.map((category) => {
        const categoryArticles = articles.filter((it) => it.categoryId === category.id);
        const { pages } = paginateArray(categoryArticles);

        return {
          category: category,
          pages: pages.map((p, i) => i + 1)
        };
      }),
      categories,
      articles,
      authors
    }
  };
};
