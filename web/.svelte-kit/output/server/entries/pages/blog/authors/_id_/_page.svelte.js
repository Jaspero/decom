import { c as create_ssr_component, v as validate_component, b as each } from "../../../../../chunks/ssr.js";
import { B as BlogAuthor } from "../../../../../chunks/BlogAuthor.js";
import { B as BlogSnippet } from "../../../../../chunks/BlogSnippet.js";
import { cleanSlug } from "@jaspero/utils";
import { m as meta } from "../../../../../chunks/meta.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { articles, author } = data;
  if (author) {
    meta.set(author.meta);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${author ? `<div class="banner-light"><div class="grid"><div class="col-8 col-s-10-col-xs-12">${validate_component(BlogAuthor, "BlogAuthor").$$render(
    $$result,
    {
      type: "about",
      name: author.name,
      link: "/blog/authors/" + cleanSlug(author.name),
      image: author.image,
      about: author.about
    },
    {},
    {}
  )}</div></div></div>` : ``} ${articles ? `${each(articles, (article) => {
    return `<div class="grid"><div class="col-8 col-s-10 col-xs-12">${validate_component(BlogSnippet, "BlogSnippet").$$render(
      $$result,
      {
        category: article.category,
        description: article.description,
        image: article.image,
        imageAlt: article.imageAlt,
        link: "/blog" + (article.categoryId ? "/" + article.categoryId : "") + "/" + article.id,
        title: article.title
      },
      {},
      {}
    )}</div> </div>`;
  })}` : ``}`;
});
export {
  Page as default
};
