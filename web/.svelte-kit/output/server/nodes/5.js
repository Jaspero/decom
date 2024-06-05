import * as server from '../entries/pages/blog/_category_/_id_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_category_/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[category]/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.tyumdT-I.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/BlogAuthor.C3lPfj3O.js","_app/immutable/chunks/meta.store.BdqmDbcc.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/chunks/index.BS762lBe.js"];
export const stylesheets = [];
export const fonts = [];
