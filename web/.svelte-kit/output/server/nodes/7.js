import * as server from '../entries/pages/blog/authors/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/authors/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/authors/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.Bbfzfi9m.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/meta.store.BdqmDbcc.js","_app/immutable/chunks/index.CY0Epjix.js"];
export const stylesheets = [];
export const fonts = [];
