import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as ibanGroups } from "./iban-XZadvt3S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Iban-BgJVlcae.js
var import_jsx_runtime = require_jsx_runtime();
/** IBAN in blocks of four; the bank-identifying blocks are emphasized like on the reference screens. */
function Iban({ value, className }) {
	const groups = ibanGroups(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("tabular-nums tracking-wide", className),
		children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: i === 1 || i >= 4 ? "font-bold" : void 0,
			children: [g, i < groups.length - 1 ? " " : ""]
		}, i))
	});
}
//#endregion
export { Iban as t };
