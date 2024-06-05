// @ts-nocheck
import { blogData } from '$lib/server/blog';
import { paginateArray } from '$lib/utils/paginate-array';
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
  const { categories, articles } = await blogData();
  const { pageSize, pages } = paginateArray(articles);

  return {
    categories,
    pageSize,
    page: (pages[parseInt(params.page, 10) - 1] || []).map((doc) => {
      const {
        content,
        meta,
        status,

        ...dt
      } = doc;

      return dt;
    })
  };
};
