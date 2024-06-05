import * as server from '../entries/pages/_...url_/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_...url_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[...url]/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.C4HS5TYJ.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/index.IHki7fMi.js","_app/immutable/chunks/stores.d6XaYIdv.js","_app/immutable/chunks/entry.ek6F9sZ3.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/chunks/meta.store.BdqmDbcc.js","_app/immutable/chunks/Button.CTOLldax.js"];
export const stylesheets = [];
export const fonts = [];
