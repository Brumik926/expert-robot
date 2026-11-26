import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fields-BZ6j3Yt0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Dark input well with the label inside, matching the reference payment form. */
function FieldShell({ label, required, error, hint, icon, htmlFor, children, className, inline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor,
			className: cn("bank-field relative flex min-h-[4.25rem] cursor-text gap-3 px-5 transition-shadow focus-within:ring-2 focus-within:ring-primary/70", inline ? "items-center" : "flex-col justify-center py-3", error && "ring-2 ring-negative/80"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("text-[0.95rem] text-muted-foreground", inline ? "shrink-0" : "text-[0.8rem]"),
					children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: " *"
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex min-w-0 flex-1 items-center gap-3", inline && "justify-end"),
					children
				}),
				icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-1/2 right-5 -translate-y-1/2 text-primary",
					children: icon
				}) : null
			]
		}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "mt-1.5 px-1 text-sm text-negative",
			children: error
		}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1.5 px-1 text-sm text-muted-foreground",
			children: hint
		}) : null]
	});
}
var inputBase = "w-full min-w-0 bg-transparent text-[1.05rem] text-field-foreground placeholder:text-muted-foreground/60 outline-none disabled:opacity-60";
var TextField = (0, import_react.forwardRef)(function TextField({ id, label, error, hint, icon, inline, required, className, shellClassName, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		required,
		error,
		hint,
		icon,
		htmlFor: id,
		inline,
		className: shellClassName,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			ref,
			id,
			"aria-invalid": error ? true : void 0,
			className: cn(inputBase, inline && "text-right", icon && "pr-9", className),
			...props
		})
	});
});
var TextAreaField = (0, import_react.forwardRef)(function TextAreaField({ id, label, error, hint, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		error,
		hint,
		htmlFor: id,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			ref,
			id,
			rows: 2,
			"aria-invalid": error ? true : void 0,
			className: cn(inputBase, "resize-none", className),
			...props
		})
	});
});
var SelectField = (0, import_react.forwardRef)(function SelectField({ id, label, error, options, inline, className, ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
		label,
		error,
		htmlFor: id,
		inline,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			ref,
			id,
			className: cn(inputBase, "cursor-pointer appearance-none bg-field", inline && "text-right", className),
			...props,
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o.value,
				children: o.label
			}, o.value))
		})
	});
});
/** Search well used on lists ("Hľadať"). */
function SearchField({ value, onChange, placeholder = "Hľadať", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("bank-field flex h-14 items-center gap-4 px-5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "h-6 w-6 shrink-0 text-primary",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10.5",
				cy: "10.5",
				r: "6.5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "m15.5 15.5 5 5",
				strokeLinecap: "round"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "search",
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			"aria-label": placeholder,
			className: "w-full bg-transparent text-[1.05rem] text-field-foreground placeholder:text-muted-foreground outline-none"
		})]
	});
}
//#endregion
export { TextField as a, TextAreaField as i, SearchField as n, SelectField as r, FieldShell as t };
