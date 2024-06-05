import { b as blogData } from "../../../../../../chunks/blog.js";
import { p as paginateArray } from "../../../../../../chunks/paginate-array.js";
const load = async ({ params }) => {
  const { categories, articles } = await blogData();
  const categoryArticles = articles.filter((it) => it.categoryId === params.category);
  const { pageSize, pages } = paginateArray(categoryArticles);
  return {
    categories,
    pageSize,
    page: pages[parseInt(params.page, 10) - 1] || []
  };
};
export {
  load
};
