import * as server from '../entries/pages/blog/page/_page_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/page/_page_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/page/[page]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.CstxbdHS.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/BlogSnippets.CyQSDBNt.js","_app/immutable/chunks/entry.ek6F9sZ3.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/chunks/index.BS762lBe.js","_app/immutable/chunks/BlogSnippet.BN2JXCR3.js","_app/immutable/chunks/stores.d6XaYIdv.js","_app/immutable/chunks/meta.store.BdqmDbcc.js"];
export const stylesheets = [];
export const fonts = [];
