import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { m as meta } from "../../../chunks/meta.store.js";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { E as ENV_CONFIG } from "../../../chunks/env-config.js";
import { getFunctions } from "firebase/functions";
import "@jaspero/web-components/dist/render-alert.js";
const firebaseApp = initializeApp(ENV_CONFIG.firebase);
getStorage(firebaseApp);
getFirestore(firebaseApp);
getFunctions(firebaseApp, ENV_CONFIG.region);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  meta.set({ title: data.title, ...data.meta });
  if (!data.renderLayout)
    ;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<!-- HTML_TAG_START -->${data.content}<!-- HTML_TAG_END --> `;
});
export {
  Page as default
};
