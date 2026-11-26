import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-DbgEJg-W.js
var import_jsx_runtime = require_jsx_runtime();
/** Full-bleed content block separated from neighbours by the canvas gap. */
function Section({ title, action, children, className, flush }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("bank-section", flush && "px-0", className),
		children: [title || action ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mb-5 flex items-center justify-between gap-3", flush && "px-5"),
			children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[1.45rem] font-extrabold tracking-tight",
				children: title
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), action ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 text-[0.95rem] font-medium text-link",
				children: action
			}) : null]
		}) : null, children]
	});
}
//#endregion
export { Section as t };
