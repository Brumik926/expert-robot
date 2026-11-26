import { i as __toESM } from "../_runtime.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as TextField, r as SelectField } from "./fields-BZ6j3Yt0.mjs";
import { n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { n as convertFromEur, t as EXCHANGE_RATES } from "./rates-DHUI3NYM.mjs";
import { r as parseAmount } from "./payment-schema-DHSp9_O9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kurzy-4N6SDK14.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Rates() {
	const [amount, setAmount] = (0, import_react.useState)("100");
	const [code, setCode] = (0, import_react.useState)("CZK");
	const rate = EXCHANGE_RATES.find((r) => r.code === code) ?? EXCHANGE_RATES[0];
	const n = parseAmount(amount || "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col gap-3 bg-canvas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Kurzový lístok",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-extrabold",
						children: "Prepočet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "conv-amount",
						label: "Suma v EUR",
						inputMode: "decimal",
						value: amount,
						onChange: (e) => setAmount(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
						id: "conv-code",
						label: "Mena",
						value: code,
						onChange: (e) => setCode(e.target.value),
						options: EXCHANGE_RATES.map((r) => ({
							value: r.code,
							label: `${r.code} – ${r.country}`
						}))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-center text-2xl font-bold",
						children: [
							Number.isFinite(n) ? formatAmount(convertFromEur(n, rate.buy)) : "—",
							" ",
							rate.code
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section px-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-5 grid grid-cols-[2rem_minmax(0,1fr)_auto_auto] gap-4 pb-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Krajina" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nákup" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Predaj" })
						]
					}),
					EXCHANGE_RATES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-5 grid grid-cols-[2rem_minmax(0,1fr)_auto_auto] items-center gap-4 border-t border-border py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl",
								"aria-hidden": "true",
								children: r.flag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate",
								children: [
									r.country,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: r.code
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: String(r.buy).replace(".", ",")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: String(r.sell).replace(".", ",")
							})
						]
					}, r.code)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-5 pt-4 text-xs text-muted-foreground",
						children: "Kurzy sú informatívne a môžu sa líšiť od aktuálnych kurzov na pobočkách."
					})
				]
			})
		]
	});
}
//#endregion
export { Rates as component };
