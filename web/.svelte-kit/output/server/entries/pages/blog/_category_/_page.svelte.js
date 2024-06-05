import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, d as spread, f as escape_object, g as escape_attribute_value, v as validate_component, b as each, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { T as Tabs, a as TabsItem, B as BlogSnippets, P as Pagination } from "../../../../chunks/BlogSnippets.js";
import { m as meta } from "../../../../chunks/meta.store.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let properties;
  let { variant = "filled" } = $$props;
  let { color = "primary" } = $$props;
  let { size = "" } = $$props;
  let { href = "" } = $$props;
  let { target = "" } = $$props;
  let { rel = "" } = $$props;
  let { disabled = false } = $$props;
  let { loading = false } = $$props;
  let { form = "" } = $$props;
  let { type = "button" } = $$props;
  let containerElement;
  let bindingElement;
  let ariaLabel = null;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  properties = {
    class: [
      "button",
      variant == "filled" && "variant-filled",
      variant == "outlined" && "variant-outlined",
      variant == "ghost" && "variant-ghost",
      variant == "underlined" && "variant-underlined",
      variant == "icon" && "variant-icon",
      color == "primary" && "color-primary",
      color == "secondary" && "color-secondary",
      color == "error" && "color-error",
      color == "warn" && "color-warn",
      color == "blackish" && "color-blackish",
      color == "gray" && "color-gray",
      size && "xl"
    ].filter(Boolean).join(" ")
  };
  return `<div${add_attribute("this", containerElement, 0)}>${href ? `<a${spread(
    [
      escape_object(properties),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { rel: escape_attribute_value(rel) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    { classes: "svelte-ym4q3x" }
  )}${add_attribute("this", bindingElement, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      escape_object(properties),
      { disabled: disabled || null },
      { form: escape_attribute_value(form) },
      { type: escape_attribute_value(type) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    {
      classes: (loading ? "loading" : "") + " svelte-ym4q3x"
    }
  )}${add_attribute("this", bindingElement, 0)}>${slots.default ? slots.default({}) : ``}</button>`} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeCat;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  activeCat = data.categories.find((it) => it.id === $page.params.category);
  {
    if (activeCat) {
      meta.set(activeCat.meta);
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
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
            active: activeCat?.id === category.id
          },
          {},
          {
            default: () => {
              return `${escape(category.name)} `;
            }
          }
        )}`;
      })}`;
    }
  })} ${data.page.length ? `${validate_component(BlogSnippets, "BlogSnippets").$$render(
    $$result,
    {
      articles: data.page,
      baseLink: "/blog",
      baseAuthorLink: "/blog/authors"
    },
    {},
    {}
  )}` : `<div class="max-w-2xl mx-auto">There are no articles currently.
    <div class="mt-2">${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Return to home page`;
    }
  })}</div></div>`} ${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      pages: data.pageSize,
      prefix: "/blog/" + $page.params.category + "/page/",
      current: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
