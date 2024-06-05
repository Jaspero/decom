import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const BlogSnippet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { imageAlt } = $$props;
  let { category } = $$props;
  let { title } = $$props;
  let { description = "" } = $$props;
  let { link } = $$props;
  let { author = null } = $$props;
  let { authorLink = "" } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.imageAlt === void 0 && $$bindings.imageAlt && imageAlt !== void 0)
    $$bindings.imageAlt(imageAlt);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.authorLink === void 0 && $$bindings.authorLink && authorLink !== void 0)
    $$bindings.authorLink(authorLink);
  return `<a${add_attribute("href", link, 0)} class="article svelte-1kptnzr"><header class="svelte-1kptnzr">${image ? `<img class="article-image"${add_attribute("src", image, 0)}${add_attribute("alt", imageAlt, 0)}>` : `<img class="article-image" src="/images/dummy-img.jpg" alt="Couldn't load or is missing">`} ${category ? `<span class="article-category svelte-1kptnzr">${escape(category)}</span>` : ``}</header> <main class="svelte-1kptnzr"><p class="article-title svelte-1kptnzr">${escape(title)}</p> ${description ? `<p>${escape(description)}</p>` : ``} <div class="flex-1 flex items-end justify-between gap-x-4 gap-x-2"><span class="link-to-article svelte-1kptnzr" data-svelte-h="svelte-ujyud1">Read full article</span> ${author ? `<span class="opacity-75">By <a class="article-author svelte-1kptnzr"${add_attribute("href", authorLink, 0)}>${escape(author.name)}</a></span>` : ``}</div></main> </a>`;
});
export {
  BlogSnippet as B
};
