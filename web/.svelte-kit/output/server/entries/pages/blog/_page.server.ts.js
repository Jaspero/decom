import { b as blogData } from "../../../chunks/blog.js";
import { p as paginateArray } from "../../../chunks/paginate-array.js";
const load = async () => {
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
export {
  load
};
