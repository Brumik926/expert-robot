import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { S as useRouter, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { gt as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-Bs733ZyZ.js
var import_jsx_runtime = require_jsx_runtime();
/** Sticky screen header: optional back arrow, bold title and right-side actions. */
function PageHeader({ title, back, right, className, children }) {
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-30 bg-background/95 px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-4 backdrop-blur", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-4",
				children: [back ? typeof back === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: back,
					"aria-label": "Späť",
					className: "-ml-1 shrink-0 p-1 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-7 w-7",
						strokeWidth: 1.6
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Späť",
					onClick: () => router.history.back(),
					className: "-ml-1 shrink-0 p-1 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-7 w-7",
						strokeWidth: 1.6
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-[1.6rem] font-extrabold tracking-tight",
					children: title
				})]
			}), right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center gap-3",
				children: right
			}) : null]
		}), children]
	});
}
function HeaderIconButton({ label, onClick, children, badge }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "relative p-1 text-primary",
		children: [children, badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-primary bg-background px-1 text-[0.65rem] font-bold text-foreground",
			children: badge > 99 ? "99+" : badge
		}) : null]
	});
}
//#endregion
export { PageHeader as n, HeaderIconButton as t };
