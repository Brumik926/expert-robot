import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { n as useHideBalances } from "./BalanceVisibility-CGu_tYw9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Money-DPz904-G.js
var import_jsx_runtime = require_jsx_runtime();
function Money({ value, currency = "EUR", signed, sensitive, className, currencyClassName }) {
	const hide = useHideBalances() && sensitive;
	const sign = signed === "in" ? "+" : signed === "out" ? "−" : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("whitespace-nowrap tabular-nums", className),
		children: [
			hide ? "••• •••" : `${sign ? sign + " " : ""}${formatAmount(value)}`,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("text-[0.62em] font-semibold uppercase", currencyClassName),
				children: currency
			})
		]
	});
}
//#endregion
export { Money as t };
