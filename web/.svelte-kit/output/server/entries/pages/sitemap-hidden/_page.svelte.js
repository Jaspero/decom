import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { m as meta } from "../../../chunks/meta.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  meta.set({ title: "Sitemap", noIndex: true });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1u0l2dv">Sitemap</h1> <h3 data-svelte-h="svelte-16u2duq">Pages</h3> <ul>${each(data.pages, (page) => {
    return `<li><a${add_attribute("href", page.url, 0)}>${escape(page.title)}</a></li>`;
  })}</ul> <h3 data-svelte-h="svelte-162v62c">Blog</h3> <ul data-svelte-h="svelte-1ouqbmr"><li><a href="/blog">Blog</a></li>  <li><a href="/blog/authors">Blog Authors</a></li> <li><a href="/blog/authors/id">Blog Authors</a></li> <li><a href="/blog/page/1">Blog Page</a></li> <li><a href="/blog/category">Blog Category</a></li> <li><a href="/blog/category/page">Blog Category Page</a></li> <li><a href="/blog/category/page/1">Blog Category Page</a></li> <li><a href="/blog/category/category">Blog Category Page</a></li></ul> <h4 data-svelte-h="svelte-1ni3061">Articles</h4> <ul>${each(data.blog.articles, (article) => {
    return `<li><a href="${"/blog/" + escape(article.categoryId, true) + "/" + escape(article.id, true)}">${escape(article.title)}</a></li>`;
  })}</ul> <h4 data-svelte-h="svelte-1014e4u">Categories</h4> <ul>${each(data.blog.categories, (category) => {
    return `<li><a href="${"/blog/" + escape(category.id, true)}">${escape(category.name)}</a></li>`;
  })}</ul> <h4 data-svelte-h="svelte-6lunuy">Authors</h4> <ul>${each(data.blog.authors, (author) => {
    return `<li><a href="${"/blog/authors/" + escape(author.id, true)}">${escape(author.name)}</a></li>`;
  })}</ul> <h4 data-svelte-h="svelte-erpcbq">Pages</h4> <h5 data-svelte-h="svelte-13d1t12">All Posts</h5> ${each(data.blog.allPages, (page) => {
    return `<li><a href="${"/blog/page/" + escape(page, true)}">${escape(page)}</a></li>`;
  })} ${each(data.blog.pages, (category) => {
    return `<h5>${escape(category.category.name)}</h5> <ul>${each(category.pages, (page) => {
      return `<li><a href="${"/blog/categories/" + escape(category.category.id, true) + "/page/" + escape(page, true)}">${escape(page)}</a></li>`;
    })} </ul>`;
  })}`;
});
export {
  Page as default
};
