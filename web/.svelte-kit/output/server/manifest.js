export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/favicon.ico","brand/logo-white.svg","brand/logo.png","brand/logo.svg","images/factory-1.jpg","images/factory-2.jpg","images/factory-3.jpg","images/factory.jpg","images/hardware-1.jpg","images/hardware-2.jpg","images/hardware-3.jpg","images/hardware-4.jpg","images/hardware-5.jpg","images/hardware.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BjLLLM6C.js","app":"_app/immutable/entry/app.wol-teOK.js","imports":["_app/immutable/entry/start.BjLLLM6C.js","_app/immutable/chunks/entry.ek6F9sZ3.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/index.CY0Epjix.js","_app/immutable/entry/app.wol-teOK.js","_app/immutable/chunks/Component.BwNXiCAZ.js","_app/immutable/chunks/index.IHki7fMi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
