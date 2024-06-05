import { c as create_ssr_component, b as each, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import { m as meta, M as META_SUFFIX } from "../../../../chunks/meta.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  meta.set({ title: "Authors - Blog " + META_SUFFIX });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1v4o5ji">Authors</h1> ${each(data.authors, (author) => {
    return `<a href="${"/blog/authors/" + escape(author.id, true)}"><p>${escape(author.name)}</p> ${author.image ? `<img${add_attribute("src", author.image, 0)}${add_attribute("alt", author.name, 0)}>` : ``} ${author.about ? `<!-- HTML_TAG_START -->${author.about}<!-- HTML_TAG_END -->` : ``} </a>`;
  })}`;
});
export {
  Page as default
};
