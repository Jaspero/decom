import { b as blogData } from "../../../chunks/blog.js";
import { p as paginateArray } from "../../../chunks/paginate-array.js";
import { f as firestore } from "../../../chunks/firebase-admin.js";
const load = async () => {
  const { categories, articles, authors } = await blogData();
  const { pages } = paginateArray(articles);
  const { docs } = await firestore.collection("pages").where("active", "==", true).get();
  return {
    pages: docs.map((doc) => {
      const dt = doc.data();
      return {
        title: dt.title,
        url: dt.url
      };
    }),
    blog: {
      allPages: pages.map((p, i) => i + 1),
      pages: categories.map((category) => {
        const categoryArticles = articles.filter((it) => it.categoryId === category.id);
        const { pages: pages2 } = paginateArray(categoryArticles);
        return {
          category,
          pages: pages2.map((p, i) => i + 1)
        };
      }),
      categories,
      articles,
      authors
    }
  };
};
export {
  load
};
