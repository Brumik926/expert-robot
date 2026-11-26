//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D_o4FWpC.js
var manifest = { "22413bd6660cf3f31a34e2057e3f89309a1bb9fa6281d92b476c8d9dbd08d31a": {
	functionName: "executePayment_createServerFn_handler",
	importer: () => import("./_ssr/payments.functions-SrL64kOl.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
