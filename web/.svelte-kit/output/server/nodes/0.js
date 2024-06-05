import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DH66SvjD.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/stores.d6XaYIdv.js","_app/immutable/chunks/entry.ek6F9sZ3.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/chunks/meta.store.BdqmDbcc.js"];
export const stylesheets = ["_app/immutable/assets/0.f8mS1J4q.css"];
export const fonts = [];
