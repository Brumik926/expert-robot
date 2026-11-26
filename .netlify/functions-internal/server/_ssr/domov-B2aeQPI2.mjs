import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Pencil, N as Mail, T as Phone, U as Globe, f as SlidersHorizontal, j as Map, z as Info } from "../_libs/lucide-react.mjs";
import { t as HeaderIconButton } from "./PageHeader-Bs733ZyZ.mjs";
import { n as TatraMark } from "./Logo-Cb0FUsJR.mjs";
import { a as ToggleRow, i as Switch } from "./rows-Cen7mRph.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as categoryOf } from "./categories-D0TWo3O-.mjs";
import { A as updateSettings, E as updateCard } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { c as settingsQuery, f as transactionsQuery, i as notificationsQuery, l as standingOrdersQuery, o as qk, p as useBankMutation, r as cardsQuery, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as CardVisual } from "./CardVisual-CwPp7jOw.mjs";
import { t as RecipientAvatar } from "./Avatar-BnlpHRpY.mjs";
import { d as ResponsiveContainer, i as YAxis, o as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as CategoryDonut } from "./CategoryDonut-C3-Lgs4P.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { n as NAV_CHOICES } from "./BottomNav-BZkLyty9.mjs";
import { o as summarizeMonth, r as monthKeyOf, t as balanceHistory } from "./stats-CpSpEAbn.mjs";
import { t as EXCHANGE_RATES } from "./rates-DHUI3NYM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/domov-B2aeQPI2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Small balance trend chart shown on the account tile. */
function Sparkline({ data, id }) {
	const gid = `spark-${id}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-20 w-full",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 4,
					right: 0,
					bottom: 0,
					left: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: gid,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--positive)",
							stopOpacity: .55
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--positive)",
							stopOpacity: .02
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						hide: true,
						domain: ["dataMin", "dataMax"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "linear",
						dataKey: "balance",
						stroke: "var(--positive)",
						strokeWidth: 2.5,
						fill: `url(#${gid})`,
						isAnimationActive: false
					})
				]
			})
		})
	});
}
var SECTIONS = [
	{
		key: "show_cards",
		label: "Karty"
	},
	{
		key: "show_savings",
		label: "Sporenia"
	},
	{
		key: "show_quick_payment",
		label: "Rýchla platba"
	},
	{
		key: "show_spending",
		label: "Prehľad výdavkov"
	},
	{
		key: "show_rates",
		label: "Kurzový lístok"
	}
];
/** "Upraviť zobrazenie": choose home widgets and the fourth bottom-menu item. */
function HomeEditSheet({ open, onOpenChange, settings }) {
	const save = useBankMutation((patch) => updateSettings(patch), [qk.settings]);
	const apply = (patch) => save.mutate(patch, { onError: (e) => toast.error(bankErrorMessage(e)) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BottomSheet, {
		open,
		onOpenChange,
		title: "Upraviť zobrazenie",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-extrabold",
				children: "Domovská obrazovka"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-sm text-muted-foreground",
				children: "Vyberte, ktoré časti sa zobrazia na domovskej obrazovke."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
				id: `home-${s.key}`,
				label: s.label,
				checked: settings[s.key],
				onCheckedChange: (v) => apply({ [s.key]: v })
			}, s.key)) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-6 text-lg font-extrabold",
				children: "Položka v spodnom menu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-muted-foreground",
				children: "Vyberte štvrtú položku spodnej navigácie."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "radiogroup",
				className: "grid grid-cols-2 gap-3",
				children: Object.keys(NAV_CHOICES).map((key) => {
					const choice = NAV_CHOICES[key];
					const Icon = choice.icon;
					const active = settings.nav_item === key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "radio",
						"aria-checked": active,
						onClick: () => apply({ nav_item: key }),
						className: cn("bank-field flex items-center gap-3 px-4 py-4 text-left transition-colors", active ? "ring-2 ring-primary" : "hover:bg-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-6 w-6 text-primary",
							strokeWidth: 1.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: choice.label
						})]
					}, key);
				})
			})
		]
	});
}
function Home() {
	const navigate = useNavigate();
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const { data: transactions } = useSuspenseQuery(transactionsQuery);
	const { data: cards } = useSuspenseQuery(cardsQuery);
	const { data: recipients } = useSuspenseQuery(recipientsQuery);
	const { data: settings } = useSuspenseQuery(settingsQuery);
	const { data: notifications } = useSuspenseQuery(notificationsQuery);
	const { data: orders } = useSuspenseQuery(standingOrdersQuery);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const unread = notifications.filter((n) => !n.is_read).length;
	const current = accounts.filter((a) => a.account_type === "current");
	const savings = accounts.filter((a) => a.account_type === "savings");
	const favorites = recipients.filter((r) => r.is_favorite);
	const month = monthKeyOf(/* @__PURE__ */ new Date());
	const summary = (0, import_react.useMemo)(() => summarizeMonth(transactions, month), [transactions, month]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 grid grid-cols-3 items-center bg-background/95 px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-4 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIconButton, {
							label: "Notifikácie",
							badge: unread,
							onClick: () => navigate({ to: "/notifikacie" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "h-8 w-8",
								strokeWidth: 1.5
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TatraMark, { className: "h-11 w-11 text-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIconButton, {
							label: "Kontakty",
							onClick: () => navigate({ to: "/kontakty" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-7 w-7",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIconButton, {
							label: "Upraviť zobrazenie",
							onClick: () => setEditOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
								className: "h-7 w-7",
								strokeWidth: 1.5
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Účty",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pohyby",
					children: "Pohyby"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4",
					children: current.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ucet/$id",
						params: { id: a.id },
						className: "bank-tile block p-6 transition-transform active:scale-[0.99]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: a.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
								value: a.iban,
								className: "mt-2 block text-[0.95rem] text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-end gap-4 border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.95rem] text-muted-foreground",
										children: "Aktuálny zostatok"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: a.balance,
										sensitive: true,
										className: "mt-2 block text-[1.6rem] font-bold"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
									id: a.id,
									data: balanceHistory(Number(a.balance), transactions, a.id, 30)
								})]
							})
						]
					}, a.id))
				})
			}),
			settings.show_cards && cards.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardsSection, {
				cards,
				accounts
			}) : null,
			settings.show_savings && savings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Sporenia",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trvale-prikazy",
					children: "Pravidelné sporenie"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5",
					children: savings.map((s) => {
						const plan = orders.find((o) => o.iban === s.iban && o.is_active);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/ucet/$id",
							params: { id: s.id },
							className: "bank-tile relative w-[86%] shrink-0 snap-start overflow-hidden border-l-[6px] border-savings",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-[0.95rem] text-muted-foreground",
										children: [
											"k účtu:",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-foreground/90",
												children: current[0]?.name ?? "—"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: s.balance,
										sensitive: true,
										className: "mt-5 block text-[1.5rem] font-bold"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3 border-t border-border px-6 py-4 text-[0.95rem] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
									className: "mt-0.5 h-5 w-5 shrink-0",
									strokeWidth: 1.6
								}), plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Pravidelné sporenie ",
									formatAmount(plan.amount),
									" EUR, ďalšie",
									" ",
									new Date(plan.next_date).toLocaleDateString("sk-SK"),
									"."
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nastavte si pravidelné sporenie v sekcii Trvalé príkazy." })]
							})]
						}, s.id);
					})
				})
			}) : null,
			settings.show_quick_payment ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Rýchla platba",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/prijemcovia",
					children: "Zoznam príjemcov"
				}),
				children: favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-center text-[1.05rem] text-muted-foreground",
					children: "Nemáte žiadnych príjemcov pre rýchlu platbu."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5 pb-1",
					children: favorites.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/platba",
						search: { recipientId: r.id },
						className: "flex w-20 shrink-0 flex-col items-center gap-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-clamp-2 text-sm",
							children: r.name
						})]
					}, r.id))
				})
			}) : null,
			settings.show_spending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Prehľad výdavkov",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/mafin",
					children: "Detail"
				}),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[1.05rem] text-muted-foreground",
							children: "Rozdiel tento mesiac"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: Math.abs(summary.difference),
							signed: summary.difference < 0 ? "out" : "in",
							sensitive: true,
							className: "mt-1 block text-[1.8rem] font-bold"
						})]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Príjmy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: summary.income,
								sensitive: true,
								className: "text-[1.5rem] font-bold text-positive"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/mafin",
						className: "mt-6 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryDonut, {
							data: summary.byCategory,
							size: 150
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex min-w-0 flex-col gap-3",
							children: [summary.byCategory.slice(0, 4).map((c) => {
								const cat = categoryOf(c.key);
								const Icon = cat.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex min-w-0 items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-card",
											style: { color: cat.color },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-5 w-5",
												strokeWidth: 1.7
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: cat.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "ml-auto shrink-0 text-sm text-muted-foreground",
											children: [Math.round(c.share * 100), " %"]
										})
									]
								}, c.key);
							}), summary.byCategory.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-muted-foreground",
								children: "Tento mesiac zatiaľ žiadne výdavky."
							}) : null]
						})]
					})
				]
			}) : null,
			settings.show_rates ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Kurzový lístok",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kurzy",
					children: "Detail"
				}),
				flush: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: EXCHANGE_RATES.slice(0, 3).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "mx-5 grid grid-cols-[2rem_minmax(0,1fr)_3.5rem_auto] items-center gap-4 border-t border-border py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl",
							"aria-hidden": "true",
							children: r.flag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-[1.05rem]",
							children: r.country
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[1.05rem] text-muted-foreground",
							children: r.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right text-[1.05rem] tabular-nums",
							children: r.buy.toFixed(4).replace(".", ",")
						})
					]
				}, r.code)) })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setEditOpen(true),
					className: "flex items-center gap-2 text-[0.95rem] font-medium text-link",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-5 w-5" }), " Upraviť domovskú obrazovku"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeEditSheet, {
				open: editOpen,
				onOpenChange: setEditOpen,
				settings
			})
		]
	});
}
function CardsSection({ cards, accounts }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const scroller = (0, import_react.useRef)(null);
	const card = cards[Math.min(index, cards.length - 1)];
	const toggle = useBankMutation((v) => updateCard(v.id, { internet_payments: v.internet_payments }), [qk.cards, qk.notifications]);
	if (!card) return null;
	const account = accounts.find((a) => a.id === card.account_id);
	const isCredit = card.card_type === "credit";
	const available = isCredit ? Number(card.credit_available ?? 0) : Number(account?.balance ?? 0);
	const limit = Number(card.credit_limit ?? 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		title: "Karty",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/karty",
			children: "Zoznam kariet"
		}),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				onScroll: (e) => {
					const el = e.currentTarget;
					const i = Math.round(el.scrollLeft / (el.clientWidth * .72));
					if (i !== index) setIndex(Math.max(0, Math.min(cards.length - 1, i)));
				},
				className: "no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[14%]",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/karty/$id",
					params: { id: c.id },
					className: "w-[72%] shrink-0 snap-center first:ml-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardVisual, {
						design: c.design,
						brand: c.brand,
						cardType: c.card_type,
						blocked: c.status === "blocked"
					})
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex justify-center gap-2",
				"aria-hidden": "true",
				children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === index ? "h-2.5 w-2.5 rounded-full bg-primary" : "h-2 w-2 rounded-full bg-muted-foreground/50" }, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate text-[1.2rem] font-bold",
						children: card.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground tabular-nums",
						children: card.masked_number
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value: available,
						sensitive: true,
						className: "text-[1.3rem] font-bold"
					}), isCredit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 w-40 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary",
							style: { width: `${limit ? available / limit * 100 : 0}%` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-sm text-muted-foreground",
						children: [
							"Z úver. rámca ",
							formatAmount(limit),
							" EUR"
						]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Disponibilný zostatok"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-center gap-3 text-[1.05rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
							className: "h-6 w-6 text-primary",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Internet" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: card.internet_payments,
							disabled: toggle.isPending || card.status === "blocked",
							onCheckedChange: (v) => toggle.mutate({
								id: card.id,
								internet_payments: v
							}, {
								onSuccess: () => toast.success(v ? "Internetové platby zapnuté" : "Internetové platby vypnuté"),
								onError: (e) => toast.error(bankErrorMessage(e))
							}),
							"aria-label": "Internetové platby"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/karty/$id",
					params: { id: card.id },
					className: "flex items-center justify-center gap-3 text-[1.05rem]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {
						className: "h-6 w-6 text-primary",
						strokeWidth: 1.5
					}), "Limity karty"]
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		title: "Moje produkty",
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/uvery",
			className: "text-link",
			children: "Úvery"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/uvery",
				className: "flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full h-24 rounded-xl bg-primary overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-0 w-full h-full fill-current opacity-10",
							viewBox: "0 0 100 100",
							preserveAspectRatio: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 100 Q50 0 100 100 T0 100" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TatraMark, { className: "h-8 w-8 text-white" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white font-bold text-lg",
								children: "Úvery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/90 text-sm",
								children: "Prehľad vašich úverov"
							})]
						})
					]
				})
			}, "uvery-1"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/kontakty",
				className: "flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full h-24 rounded-xl border-2 border-border bg-white overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute inset-0 w-full h-full text-border opacity-30",
							viewBox: "0 0 100 100",
							preserveAspectRatio: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 0 H100 V100 H0 V0 Z M20 20 H80 V80 H20 V20 Z M40 40 H60 V60 H40 V40 Z" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 left-4 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {
								className: "h-8 w-8",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-4 left-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-foreground font-bold text-lg",
								children: "Pobočky a bankomaty"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm",
								children: "Najbližšie pobočky a bankomaty"
							})]
						})
					]
				})
			}, "pobocky-1")]
		})
	})] });
}
//#endregion
export { Home as component };
