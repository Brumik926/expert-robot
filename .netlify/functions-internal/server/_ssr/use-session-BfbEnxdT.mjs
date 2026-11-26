import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-session-BfbEnxdT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/** Client-side session for public pages (welcome / auth). Protected pages use the route gate. */
function useSession() {
	const [session, setSession] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
		supabase.auth.getSession().then(({ data: d }) => {
			setSession(d.session);
			setReady(true);
		});
		return () => data.subscription.unsubscribe();
	}, []);
	return {
		session,
		ready
	};
}
//#endregion
export { useSession as t };
