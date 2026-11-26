import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { I as Lock } from "../_libs/lucide-react.mjs";
import { n as TatraMark } from "./Logo-Cb0FUsJR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CardVisual-CwPp7jOw.js
var import_jsx_runtime = require_jsx_runtime();
var card_forest_webp_asset_default = {
	version: 1,
	asset_id: "c87d044b-09c4-4e86-85b7-145c3184e241",
	project_id: "9977ccbf-77f0-4757-abc0-3044b89aaf40",
	url: "/__l5e/assets-v1/c87d044b-09c4-4e86-85b7-145c3184e241/card-forest.webp",
	r2_key: "a/v1/9977ccbf-77f0-4757-abc0-3044b89aaf40/c87d044b-09c4-4e86-85b7-145c3184e241/card-forest.webp",
	original_filename: "card-forest.webp",
	size: 90566,
	content_type: "image/webp",
	created_at: "2026-11-22T08:29:26Z"
};
var DESIGNS = {
	forest: card_forest_webp_asset_default.url,
	mono: {
		version: 1,
		asset_id: "d36edecc-d88c-487f-9ac6-03de1ad42219",
		project_id: "9977ccbf-77f0-4757-abc0-3044b89aaf40",
		url: "/__l5e/assets-v1/d36edecc-d88c-487f-9ac6-03de1ad42219/card-mono.webp",
		r2_key: "a/v1/9977ccbf-77f0-4757-abc0-3044b89aaf40/d36edecc-d88c-487f-9ac6-03de1ad42219/card-mono.webp",
		original_filename: "card-mono.webp",
		size: 29532,
		content_type: "image/webp",
		created_at: "2026-11-22T08:29:29Z"
	}.url
};
/** Payment card artwork with chip, mark and network label. */
function CardVisual({ design, brand, cardType, holder, number, blocked, size = "lg", className }) {
	const dark = design !== "mono";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative aspect-[1.586] overflow-hidden rounded-xl shadow-tile", size === "sm" ? "w-28 rounded-md" : "w-full", className),
		role: "img",
		"aria-label": `${brand} ${cardType === "credit" ? "kreditná" : "debetná"} karta${number ? " " + number : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: DESIGNS[design] ?? card_forest_webp_asset_default.url,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute inset-0", dark ? "text-paper" : "text-ink"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TatraMark, { className: cn("absolute", size === "sm" ? "top-1.5 left-1.5 h-4 w-4" : "top-4 left-4 h-9 w-9") }),
					size === "lg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[38%] left-[9%] h-[17%] w-[13%] rounded-md bg-gradient-to-br from-chart-6/90 to-chart-1/70 ring-1 ring-black/20" }),
						number ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-[22%] left-[9%] text-sm font-semibold tracking-[0.18em] drop-shadow",
							children: number
						}) : null,
						holder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-[9%] left-[9%] max-w-[55%] truncate text-[0.7rem] font-semibold tracking-wider uppercase drop-shadow",
							children: holder
						}) : null
					] }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("absolute right-[6%] bottom-[7%] text-right font-black italic drop-shadow", size === "sm" ? "text-[0.6rem]" : "text-2xl"),
						children: [brand === "VISA" ? "VISA" : "mastercard", size === "lg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[0.6rem] font-medium not-italic",
							children: cardType === "credit" ? "Credit" : "Debit"
						}) : null]
					})
				]
			}),
			blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center bg-canvas/70 backdrop-blur-[2px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-negative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " Zablokovaná"]
				})
			}) : null
		]
	});
}
//#endregion
export { CardVisual as t };
