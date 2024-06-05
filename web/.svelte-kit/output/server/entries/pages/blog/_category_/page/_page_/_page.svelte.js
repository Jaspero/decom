import { s as subscribe } from "../../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../../../../chunks/ssr.js";
import { T as Tabs, a as TabsItem, B as BlogSnippets, P as Pagination } from "../../../../../../chunks/BlogSnippets.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { m as meta } from "../../../../../../chunks/meta.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeCat;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  activeCat = data.categories.find((it) => it.id === $page.params.category);
  {
    if (activeCat && activeCat.meta) {
      meta.set(activeCat.meta);
    }
  }
  $$unsubscribe_page();
  return `<div class="grid"><div class="col-8 col-s-10 col-xs-12">${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TabsItem, "TabsItem").$$render($$result, { href: "/blog" }, {}, {
        default: () => {
          return `All posts`;
        }
      })} ${each(data.categories, (category) => {
        return `${validate_component(TabsItem, "TabsItem").$$render(
          $$result,
          {
            href: "/blog/" + category.id,
            active: activeCat.id === category.id
          },
          {},
          {
            default: () => {
              return `${escape(category.name)}`;
            }
          }
        )}`;
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
      prefix: "/blog/" + $page.params.category + "/page/",
      current: parseInt($page.params.page, 10)
    },
    {},
    {}
  )}</div></div>`;
});
export {
  Page as default
};
