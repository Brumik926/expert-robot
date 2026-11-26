import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { R as LayoutGrid, Z as CirclePlay, ft as Building2, k as MessageCircle, ot as ChartLine, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as BANK_NAME } from "./Logo-Cb0FUsJR.mjs";
import { a as formatShortDate } from "./format-TV6Q3ifl.mjs";
import { t as useSession } from "./use-session-BfbEnxdT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIwo7_sE.js
var import_jsx_runtime = require_jsx_runtime();
var welcome_art_webp_asset_default = {
	version: 1,
	asset_id: "9a05486a-c663-40ae-9ce0-0c56221a0614",
	project_id: "9977ccbf-77f0-4757-abc0-3044b89aaf40",
	url: "/__l5e/assets-v1/9a05486a-c663-40ae-9ce0-0c56221a0614/welcome-art.webp",
	r2_key: "a/v1/9977ccbf-77f0-4757-abc0-3044b89aaf40/9a05486a-c663-40ae-9ce0-0c56221a0614/welcome-art.webp",
	original_filename: "welcome-art.webp",
	size: 135660,
	content_type: "image/webp",
	created_at: "2026-11-22T08:29:24Z"
};
/** Brand mark used on the welcome screen: registered sign above the wordmark. */
function BrandMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-1 text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg leading-none",
			children: "®"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[1.6rem] leading-none font-extrabold tracking-[0.14em] uppercase",
			children: BANK_NAME
		})]
	});
}
var QUICK_LINKS = [
	{
		to: "/auth",
		label: "Vyskúšať demo",
		icon: CirclePlay,
		search: { mode: "register" }
	},
	{
		to: "/kontakty",
		label: "Pobočky",
		icon: Building2,
		search: {}
	},
	{
		to: "/kurzy",
		label: "Kurzový lístok",
		icon: ChartLine,
		search: {}
	},
	{
		to: "/kontakty",
		label: "Chatbot",
		icon: MessageCircle,
		search: {}
	},
	{
		to: "/kontakty",
		label: "Adam",
		icon: Sparkles,
		search: {}
	},
	{
		to: "/auth",
		label: "možnosti",
		icon: LayoutGrid,
		search: { mode: "login" }
	}
];
function Welcome() {
	const { session } = useSession();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative mx-auto flex min-h-dvh max-w-md flex-col overflow-hidden bg-canvas text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: welcome_art_webp_asset_default.url,
					alt: "",
					className: "absolute inset-y-0 right-0 h-full w-[85%] object-cover object-left opacity-90"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "welcome-fade absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex justify-center px-5 pt-[calc(env(safe-area-inset-top)+2.5rem)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-auto px-6 pb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-center text-[2rem] leading-tight font-normal",
							children: ["Vitajte vo svete ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "font-extrabold",
								children: "inovatívneho bankovníctva"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col gap-4",
							children: session ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "bank",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/domov",
									children: "Pokračovať do aplikácie"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "bank",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/auth",
									search: { mode: "register" },
									children: "Som tu prvýkrát"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-center text-sm text-muted-foreground",
							children: [BANK_NAME.toUpperCase(), " 3.27.7"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-center text-sm text-muted-foreground",
							children: ["Aktuálny bankový deň: ", formatShortDate(/* @__PURE__ */ new Date())]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Rýchle odkazy",
					className: "relative grid grid-cols-3 border-t border-border bg-canvas safe-bottom",
					children: QUICK_LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						search: item.search,
						className: "flex flex-col items-center gap-1 py-3 text-center text-[0.8rem] leading-tight text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "h-7 w-7 text-primary",
							strokeWidth: 1.4
						}), item.label]
					}, item.label))
				})
			]
		})
	});
}
//#endregion
export { Welcome as component };
