import * as server from '../entries/pages/blog/authors/_id_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/authors/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/authors/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BzbxqcNk.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/BlogAuthor.C3lPfj3O.js","_app/immutable/chunks/BlogSnippet.BN2JXCR3.js","_app/immutable/chunks/index.BS762lBe.js","_app/immutable/chunks/meta.store.BdqmDbcc.js","_app/immutable/chunks/index.CY0Epjix.js"];
export const stylesheets = [];
export const fonts = [];
