import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as each } from "./ssr.js";
import "./client.js";
import { cleanSlug } from "@jaspero/utils";
import { B as BlogSnippet } from "./BlogSnippet.js";
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="svelte-3b3ob3">${slots.default ? slots.default({}) : ``} </nav>`;
});
const TabsItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { href } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="${["svelte-7yf5xe", active ? "active" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``} </a>`;
});
const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "1em" } = $$props;
  let { width = size } = $$props;
  let { height = size } = $$props;
  let { color = "currentColor" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { ariaHidden = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { desc = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0)
    $$bindings.ariaHidden(ariaHidden);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${add_attribute("viewBox", viewBox, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("class", className, 0)}${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("aria-hidden", ariaHidden, 0)}>${desc ? `<desc>${escape(desc)}</desc>` : ``}${title ? `<title>${escape(title)}</title>` : ``}<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"${add_attribute("fill", color, 0)}></path></svg>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageItems;
  let { pages } = $$props;
  let { prefix } = $$props;
  let { current } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  pageItems = Array.from(Array(pages).keys());
  return `${pages > 1 ? `<div class="pagination"><button ${current === 1 ? "disabled" : ""} aria-label="Previous page">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, { size: "24" }, {}, {})}</button> ${each(pageItems, (item, index) => {
    return `<a${add_attribute("href", prefix + (index + 1), 0)} class="${["page", index === current - 1 ? "active" : ""].join(" ").trim()}">${escape(item + 1)}</a>`;
  })} <button ${current === pages ? "disabled" : ""} aria-label="Next page">${validate_component(ArrowRight, "ArrowRight").$$render($$result, { size: "24" }, {}, {})}</button></div>` : ``}`;
});
const BlogSnippets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { articles = [] } = $$props;
  let { baseLink } = $$props;
  let { baseAuthorLink = "" } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  if ($$props.baseLink === void 0 && $$bindings.baseLink && baseLink !== void 0)
    $$bindings.baseLink(baseLink);
  if ($$props.baseAuthorLink === void 0 && $$bindings.baseAuthorLink && baseAuthorLink !== void 0)
    $$bindings.baseAuthorLink(baseAuthorLink);
  return `<div class="snippets svelte-10fsbu2">${each(articles, (article) => {
    return `${validate_component(BlogSnippet, "BlogSnippet").$$render(
      $$result,
      {
        author: article.author,
        authorLink: baseAuthorLink + "/" + cleanSlug(article.author?.name),
        category: article.category,
        description: article.description,
        image: article.image,
        imageAlt: article.imageAlt || "Blog image",
        link: baseLink + (article.categoryId ? "/" + article.categoryId : "") + "/" + article.id,
        title: article.title
      },
      {},
      {}
    )}`;
  })} </div>`;
});
export {
  BlogSnippets as B,
  Pagination as P,
  Tabs as T,
  TabsItem as a
};
