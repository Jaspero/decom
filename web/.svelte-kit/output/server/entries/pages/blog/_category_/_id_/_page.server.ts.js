import { b as blogData } from "../../../../../chunks/blog.js";
const load = async ({ params }) => {
  const { articles } = await blogData();
  return articles.find((it) => it.id === params.id);
};
export {
  load
};
