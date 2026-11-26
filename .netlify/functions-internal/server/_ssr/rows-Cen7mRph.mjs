import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rows-Cen7mRph.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
/** Label / value line used in detail screens. */
function DetailRow({ label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] items-baseline gap-4 border-t border-border py-4", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[0.95rem] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 text-right text-[1.05rem] break-words",
			children: value
		})]
	});
}
/** Tappable list row with optional leading icon and trailing chevron. */
function NavRow({ icon, label, description, to, onClick, right, className }) {
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid w-10 shrink-0 place-items-center text-primary",
			children: icon
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[1.05rem]",
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-sm text-muted-foreground",
				children: description
			}) : null]
		}),
		right ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
			className: "h-6 w-6 shrink-0 text-primary",
			strokeWidth: 1.8
		})
	] });
	const cls = cn("flex w-full items-center gap-4 py-4 transition-colors hover:bg-card/50", className);
	if (to) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cls,
		children: body
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cls,
		children: body
	});
}
function ToggleRow({ label, description, checked, onCheckedChange, disabled, id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 border-t border-border py-4 first:border-t-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			className: "min-w-0 flex-1 cursor-pointer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[1.05rem]",
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-sm text-muted-foreground",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id,
			checked,
			onCheckedChange,
			disabled
		})]
	});
}
function EmptyState({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3 px-6 py-12 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[1.05rem] text-muted-foreground",
			children: title
		}), children]
	});
}
/** Underlined tabs like "Všetky / Príjemcovia / Šablóny". */
function UnderlineTabs({ tabs, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		className: "grid border-b border-border",
		style: { gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` },
		children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			role: "tab",
			type: "button",
			"aria-selected": value === t.value,
			onClick: () => onChange(t.value),
			className: cn("relative truncate px-2 py-4 text-[1.05rem] transition-colors", value === t.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
			children: [t.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-primary transition-opacity", value === t.value ? "opacity-100" : "opacity-0") })]
		}, t.value))
	});
}
//#endregion
export { ToggleRow as a, Switch as i, EmptyState as n, UnderlineTabs as o, NavRow as r, DetailRow as t };
