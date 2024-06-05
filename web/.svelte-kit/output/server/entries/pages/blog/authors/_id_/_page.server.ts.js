import { b as blogData } from "../../../../../chunks/blog.js";
import { cleanSlug } from "@jaspero/utils";
const load = async ({ params }) => {
  const { authors, articles } = await blogData();
  return {
    author: authors.find((it) => cleanSlug(it.name) === params.id),
    articles: articles.filter((it) => it.author && cleanSlug(it.author.name) === params.id)
  };
};
export {
  load
};
