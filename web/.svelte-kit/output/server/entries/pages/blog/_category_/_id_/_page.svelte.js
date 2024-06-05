import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../../../../chunks/ssr.js";
import { B as BlogAuthor } from "../../../../../chunks/BlogAuthor.js";
import { m as meta } from "../../../../../chunks/meta.store.js";
import { cleanSlug } from "@jaspero/utils";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { author, content, image, imageAlt } = data;
  if (data.meta) {
    meta.set(data.meta);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid"><div class="col-8 col-s-10 col-xs-12"><p>${escape(data.title)}</p> ${data.description ? `${escape(data.description)}` : ``} <div class="flex fw-wrap">${author ? `${validate_component(BlogAuthor, "BlogAuthor").$$render(
    $$result,
    {
      type: "read-more",
      name: author.name,
      image: author.image,
      link: "/blog/authors/" + cleanSlug(author.name)
    },
    {},
    {}
  )}` : ``}</div></div></div> <div class="grid"><div class="col-8 col-s-10 col-xs-12">${image ? `<img${add_attribute("src", image, 0)}${add_attribute("alt", imageAlt, 0)}>` : ``} <hr> <div class="article-global-selector"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div> <div class="flex fw-wrap">${author ? `${validate_component(BlogAuthor, "BlogAuthor").$$render(
    $$result,
    {
      type: "read-more",
      name: author.name,
      link: "/blog/authors/" + cleanSlug(author.name),
      image: author.image,
      about: author.about
    },
    {},
    {}
  )}` : ``}</div></div></div>`;
});
export {
  Page as default
};
