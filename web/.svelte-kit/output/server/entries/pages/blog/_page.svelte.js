import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { T as Tabs, a as TabsItem, B as BlogSnippets, P as Pagination } from "../../../chunks/BlogSnippets.js";
import { m as meta } from "../../../chunks/meta.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  meta.set({ title: "Blog" });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TabsItem, "TabsItem").$$render($$result, { href: "/blog", active: true }, {}, {
        default: () => {
          return `All posts`;
        }
      })} ${each(data.categories, (category) => {
        return `${validate_component(TabsItem, "TabsItem").$$render($$result, { href: "/blog/" + category.id }, {}, {
          default: () => {
            return `${escape(category.name)}`;
          }
        })}`;
      })}`;
    }
  })} ${validate_component(BlogSnippets, "BlogSnippets").$$render(
    $$result,
    {
      articles: data.page,
      baseLink: "/blog",
      baseAuthorLink: "/blog/authors"
    },
    {},
    {}
  )} ${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      pages: data.pageSize,
      prefix: "/blog/page/",
      current: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
