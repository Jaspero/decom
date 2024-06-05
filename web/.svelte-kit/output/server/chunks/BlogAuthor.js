import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const BlogAuthor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "by" } = $$props;
  let { name } = $$props;
  let { image = "" } = $$props;
  let { about = "" } = $$props;
  let { link } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<section class="${["svelte-1ad7f5r", type === "about" ? "about" : ""].join(" ").trim()}"><div class="flex">${image ? `<img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} class="svelte-1ad7f5r">` : ``} <div class="flex-1">${type === "by" ? `<h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;" data-svelte-h="svelte-1av6kmz">WRITTEN BY</h1> <a${add_attribute("href", link, 0)}>${escape(name)}</a>` : ``} ${type === "read-more" ? `<h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;" data-svelte-h="svelte-agb7du">ARTICLE BY</h1> <a${add_attribute("href", link, 0)}>${escape(name)}</a>` : ``} ${type === "about" ? `<h1 style="letter-spacing: 2px; font-weight: bold; opacity: .5; font-size: 1rem;" data-svelte-h="svelte-12288sq">ABOUT</h1> <p>${escape(name)}</p>` : ``}</div></div> ${type == "about" && about ? `<div class="w-full m-t-m"><!-- HTML_TAG_START -->${about}<!-- HTML_TAG_END --></div>` : ``} </section>`;
});
export {
  BlogAuthor as B
};
