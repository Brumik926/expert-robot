import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { o as useQueryClient } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-sign-out-B_4Hu2lz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSignOut() {
	const qc = useQueryClient();
	const navigate = useNavigate();
	const [pending, setPending] = (0, import_react.useState)(false);
	return async () => {
		if (pending) return;
		setPending(true);
		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				toast.error("Odhlásenie zlyhalo: " + error.message);
				return;
			}
			qc.clear();
			navigate({
				to: "/auth",
				search: { mode: "login" },
				replace: true
			});
		} catch {
			toast.error("Odhlásenie zlyhalo. Skúste to znova.");
		} finally {
			setPending(false);
		}
	};
}
//#endregion
export { useSignOut as t };
