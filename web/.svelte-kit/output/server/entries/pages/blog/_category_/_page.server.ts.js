import { p as paginateArray } from "../../../../chunks/paginate-array.js";
import { b as blogData } from "../../../../chunks/blog.js";
const load = async ({ params }) => {
  const { categories, articles } = await blogData();
  const categoryArticles = articles.filter((it) => it.categoryId === params.category);
  const { pageSize, pages } = paginateArray(categoryArticles);
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
export {
  load
};
