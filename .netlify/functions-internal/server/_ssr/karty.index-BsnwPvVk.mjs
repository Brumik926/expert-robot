import { i as __toESM } from "../_runtime.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as ChevronRight, z as Info } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as EmptyState, o as UnderlineTabs } from "./rows-Cen7mRph.mjs";
import { n as SearchField } from "./fields-BZ6j3Yt0.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { r as cardsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as CardVisual } from "./CardVisual-CwPp7jOw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karty.index-BsnwPvVk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CardsPage() {
	const { data: cards } = useSuspenseQuery(cardsQuery);
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const [tab, setTab] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => cards.filter((c) => (tab === "all" || c.card_type === tab) && (!q.trim() || c.name.toLowerCase().includes(q.trim().toLowerCase()) || c.masked_number.includes(q.trim()))), [
		cards,
		tab,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Zoznam kariet",
				back: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
					value: q,
					onChange: setQ,
					className: "mt-5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineTabs, {
					tabs: [
						{
							value: "all",
							label: "Všetky"
						},
						{
							value: "debit",
							label: "Debetné"
						},
						{
							value: "credit",
							label: "Kreditné"
						}
					],
					value: tab,
					onChange: setTab
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 px-5 pt-5",
				children: [
					list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Žiadne karty." }) : null,
					list.map((c) => {
						const acc = accounts.find((a) => a.id === c.account_id);
						const credit = c.card_type === "credit";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/karty/$id",
							params: { id: c.id },
							className: "bank-tile block overflow-hidden bg-background transition-transform active:scale-[0.99]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[7rem_minmax(0,1fr)_auto] items-center gap-4 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardVisual, {
										size: "sm",
										design: c.design,
										brand: c.brand,
										cardType: c.card_type,
										blocked: c.status === "blocked"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-lg font-bold",
												children: c.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[0.95rem] text-muted-foreground tabular-nums",
												children: c.masked_number
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block truncate text-[0.95rem] text-muted-foreground",
												children: [
													c.brand,
													" ",
													credit ? "kreditná" : "debetná",
													c.status === "blocked" ? " · zablokovaná" : ""
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-7 w-7 text-primary" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 border-t border-border px-5 py-4",
								children: [credit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Celkový úverový rámec"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: c.credit_limit ?? 0,
										className: "text-muted-foreground"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 text-muted-foreground",
										children: "Číslo účtu"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
										value: acc?.iban,
										className: "truncate text-sm text-muted-foreground"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Disponibilný zostatok"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: credit ? c.credit_available ?? 0 : acc?.balance ?? 0,
										sensitive: true,
										className: "text-lg font-bold"
									})]
								})]
							})]
						}, c.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-5 w-5 text-primary" }), " Zobrazené sú iba platné karty."]
					})
				]
			})
		]
	});
}
//#endregion
export { CardsPage as component };
