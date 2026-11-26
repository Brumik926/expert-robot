import { i as __toESM } from "../_runtime.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { et as ChevronRight, tt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as EmptyState } from "./rows-Cen7mRph.mjs";
import { i as categoryOf } from "./categories-D0TWo3O-.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { f as transactionsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { i as formatMoney } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, r as BarChart } from "../_libs/recharts+[...].mjs";
import { t as CategoryDonut } from "./CategoryDonut-C3-Lgs4P.mjs";
import { a as shiftMonth, i as monthLabel, n as countsForStats, o as summarizeMonth, r as monthKeyOf } from "./stats-CpSpEAbn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mafin-DwS0BI4s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MaFin() {
	const { data: transactions } = useSuspenseQuery(transactionsQuery);
	const thisMonth = monthKeyOf(/* @__PURE__ */ new Date());
	const [month, setMonth] = (0, import_react.useState)(thisMonth);
	const summary = (0, import_react.useMemo)(() => summarizeMonth(transactions, month), [transactions, month]);
	const trend = (0, import_react.useMemo)(() => Array.from({ length: 6 }, (_, i) => {
		const m = shiftMonth(month, i - 5);
		const s = summarizeMonth(transactions, m);
		const [, mm] = m.split("-");
		return {
			month: `${Number(mm)}/${m.slice(2, 4)}`,
			Príjmy: s.income,
			Výdavky: s.expense
		};
	}), [transactions, month]);
	const merchants = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const t of transactions) {
			if (!countsForStats(t) || t.direction !== "out" || monthKeyOf(t.booked_at) !== month) continue;
			map.set(t.counterparty_name, (map.get(t.counterparty_name) ?? 0) + Number(t.amount));
		}
		return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
	}, [transactions, month]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "MaFin",
				back: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Predchádzajúci mesiac",
							onClick: () => setMonth(shiftMonth(month, -1)),
							className: "p-2 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg font-bold",
							children: monthLabel(month)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Nasledujúci mesiac",
							disabled: month >= thisMonth,
							onClick: () => setMonth(shiftMonth(month, 1)),
							className: "p-2 text-primary disabled:opacity-30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-7 w-7" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Rozdiel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value: Math.abs(summary.difference),
						signed: summary.difference < 0 ? "out" : "in",
						sensitive: true,
						className: "mt-1 block text-[2rem] font-bold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Výdavky"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: summary.expense,
									sensitive: true,
									className: "text-[1.5rem] font-bold text-negative"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-12 w-px bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Príjmy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: summary.income,
									sensitive: true,
									className: "text-[1.5rem] font-bold text-positive"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Výdavky podľa kategórií",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDonut, {
						data: summary.byCategory,
						size: 210
					})
				}), summary.byCategory.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "V tomto mesiaci nemáte žiadne výdavky." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6",
					children: summary.byCategory.map((c) => {
						const cat = categoryOf(c.key);
						const Icon = cat.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pohyby",
							search: {
								category: c.key,
								direction: "out"
							},
							className: "flex items-center gap-4 border-t border-border py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card",
								style: { color: cat.color },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 1.7
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: cat.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: c.amount,
										sensitive: true,
										className: "font-semibold"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block h-full rounded-full",
											style: {
												width: `${c.share * 100}%`,
												background: cat.color
											}
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "w-10 text-right text-sm text-muted-foreground",
										children: [Math.round(c.share * 100), " %"]
									})]
								})]
							})]
						}) }, c.key);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Posledných 6 mesiacov",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-52",
					role: "img",
					"aria-label": "Príjmy a výdavky za posledných 6 mesiacov",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: trend,
							margin: {
								top: 4,
								right: 0,
								bottom: 0,
								left: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									tick: {
										fill: "var(--muted-foreground)",
										fontSize: 12
									},
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
									cursor: {
										fill: "var(--muted)",
										opacity: .4
									},
									contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 10,
										color: "var(--popover-foreground)"
									},
									formatter: (v) => formatMoney(v)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Príjmy",
									fill: "var(--positive)",
									radius: [
										4,
										4,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "Výdavky",
									fill: "var(--negative)",
									radius: [
										4,
										4,
										0,
										0
									]
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex justify-center gap-6 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-sm bg-positive" }), " Príjmy"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-sm bg-negative" }), " Výdavky"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Najväčšie výdavky",
				children: merchants.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Žiadne výdavky." }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: merchants.map(([name, amount], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-4 border-t border-border py-4 first:border-t-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-6 text-muted-foreground",
							children: [i + 1, "."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: amount,
							sensitive: true,
							className: "font-semibold text-negative"
						})
					]
				}, name)) })
			})
		]
	});
}
//#endregion
export { MaFin as component };
