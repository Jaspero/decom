import { blogData } from '$lib/server/blog';
import { paginateArray } from '$lib/utils/paginate-array';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { categories, articles } = await blogData();
  const { pageSize, pages } = paginateArray(articles);

  return {
    categories,
    pageSize,
    page: (pages[0] || []).map((doc) => {
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
