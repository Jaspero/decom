import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { s as subscribe } from "../../chunks/utils.js";
import { p as page } from "../../chunks/stores.js";
import { m as meta, M as META_SUFFIX } from "../../chunks/meta.store.js";
import "@jaspero/web-components/dist/alert.wc.js";
import "@jaspero/web-components/dist/confirm.wc.js";
import "@jaspero/web-components/dist/select.wc.js";
import "@jaspero/web-components/dist/toggle.wc.js";
function ldJson(structured) {
  if (structured) {
    return structured.includes("<script") ? structured : `<script type="application/ld+json">${structured}<\/script>`;
  }
  return "";
}
const Meta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let url;
  let ogTitle;
  let ogDescription;
  let structured;
  let $meta, $$unsubscribe_meta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_meta = subscribe(meta, (value) => $meta = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  title = $meta.title + META_SUFFIX;
  url = $page.url.origin + $page.url.pathname;
  ogTitle = ($meta.og?.title || $meta.title) + META_SUFFIX;
  ogDescription = $meta.og?.description || $meta.description;
  structured = ldJson($meta.structured);
  $$unsubscribe_meta();
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-iwvkbu_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="og:url"${add_attribute("content", url, 0)}><meta property="twitter:url"${add_attribute("content", url, 0)}><meta property="twitter:card" content="summary_large_image"><meta property="og:title"${add_attribute("content", ogTitle, 0)}><meta property="twitter:title"${add_attribute("content", ogTitle, 0)}>${$meta.author ? `<meta name="author"${add_attribute("content", $meta.author, 0)}>` : ``}${$meta.description ? `<meta name="description"${add_attribute("content", $meta.description, 0)}>` : ``}${$meta.keywords ? `<meta name="keywords"${add_attribute("content", $meta.keywords, 0)}>` : ``}${$meta.og?.type ? `<meta property="og:type"${add_attribute("content", $meta.og?.type, 0)}>` : ``}${ogDescription ? `<meta property="og:description"${add_attribute("content", ogDescription, 0)}> <meta property="twitter:description"${add_attribute("content", ogDescription, 0)}>` : ``}${$meta.og?.image ? `<meta property="og:image"${add_attribute("content", $meta.og.image, 0)}> <meta property="twitter:image"${add_attribute("content", $meta.og.image, 0)}>` : ``}${$meta.noIndex ? `<meta name="robots" content="noindex, nofollow">` : ``}${$meta.og?.articleAuthor ? `<meta property="article:author"${add_attribute("content", $meta.og.articleAuthor, 0)}>` : ``}${$meta.og?.articlePublishedTime ? `<meta property="article:published_time"${add_attribute("content", $meta.og.articlePublishedTime, 0)}>` : ``}${$meta.og?.articleModifiedTime ? `<meta property="article:modified_time"${add_attribute("content", $meta.og.articleModifiedTime, 0)}>` : ``}${$meta.og?.articleSection ? `<meta property="article:section"${add_attribute("content", $meta.og.articleSection, 0)}>` : ``}${$meta.og?.articleTag ? `<meta property="article:tag"${add_attribute("content", $meta.og.articleTag, 0)}>` : ``}${$meta.og?.profileFirstName ? `<meta property="profile:first_name"${add_attribute("content", $meta.og.profileFirstName, 0)}>` : ``}${$meta.og?.profileLastName ? `<meta property="profile:last_name"${add_attribute("content", $meta.og.profileLastName, 0)}>` : ``}${$meta.og?.profileUsername ? `<meta property="profile:username"${add_attribute("content", $meta.og.profileUsername, 0)}>` : ``}<!-- HTML_TAG_START -->${structured}<!-- HTML_TAG_END --><!-- HEAD_svelte-iwvkbu_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} ${validate_component(Meta, "Meta").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
