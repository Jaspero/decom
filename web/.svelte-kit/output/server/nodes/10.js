import * as server from '../entries/pages/sitemap-hidden/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sitemap-hidden/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sitemap-hidden/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.D6wk4Vqx.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/meta.store.BdqmDbcc.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/chunks/BlogAuthor.C3lPfj3O.js"];
export const stylesheets = [];
export const fonts = [];
