import { i as __toESM } from "../_runtime.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { g as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { w as processDueItems } from "./bank-CoEeU7CF.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as settingsQuery, m as useInvalidateMoney } from "./use-bank-BzaercXi.mjs";
import { t as BalanceVisibilityContext } from "./BalanceVisibility-CGu_tYw9.mjs";
import { t as BottomNav } from "./BottomNav-BZkLyty9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-BR-18plw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function applyTheme(theme) {
	const dark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	document.documentElement.classList.toggle("dark", dark);
	try {
		localStorage.setItem("tatra-theme", theme);
	} catch {}
}
function AuthenticatedLayout() {
	const { data: settings } = useQuery(settingsQuery);
	const invalidateMoney = useInvalidateMoney();
	const processed = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!settings) return;
		applyTheme(settings.theme);
		if (settings.theme !== "system") return;
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyTheme("system");
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [settings]);
	(0, import_react.useEffect)(() => {
		if (processed.current) return;
		processed.current = true;
		processDueItems().then((n) => {
			if (n > 0) {
				toast.info(n === 1 ? "Spracovali sme 1 naplánovanú platbu" : `Spracovali sme ${n} naplánované platby`);
				invalidateMoney();
			}
		}).catch(() => {});
	}, [invalidateMoney]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BalanceVisibilityContext.Provider, {
		value: settings?.hide_balances ?? false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto min-h-dvh max-w-md bg-canvas pb-nav",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, { navItem: settings?.nav_item ?? "karty" })]
	});
}
//#endregion
export { AuthenticatedLayout as component };
