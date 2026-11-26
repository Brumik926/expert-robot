import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Pencil, H as HandCoins, W as FileText, _ as Share2, _t as ArrowLeftRight, et as ChevronRight, ut as CalendarClock, y as Send } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as TatraMark } from "./Logo-Cb0FUsJR.mjs";
import { t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { T as renameAccount } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { f as transactionsQuery, l as standingOrdersQuery, o as qk, p as useBankMutation, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { a as formatShortDate, i as formatMoney, n as formatAmount, o as formatTime } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as formatIban } from "./iban-XZadvt3S.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as RecipientAvatar } from "./Avatar-BnlpHRpY.mjs";
import { a as XAxis, d as ResponsiveContainer, f as Tooltip, i as YAxis, o as Area, s as CartesianGrid, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { t as balanceHistory } from "./stats-CpSpEAbn.mjs";
import { r as parseAmount } from "./payment-schema-DHSp9_O9.mjs";
import { t as Route } from "./ucet._id-Dr36bxLF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ucet._id-C90L9jqT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** "Vývoj zostatkov": daily balance chart with axes. */
function BalanceChart({ data }) {
	const fmtDay = (d) => {
		const [, m, day] = d.split("-");
		return `${Number(day)}.${Number(m)}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		role: "img",
		"aria-label": "Vývoj zostatku za posledných 30 dní",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 4,
					bottom: 0,
					left: -12
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "bal-fill",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--positive)",
							stopOpacity: .6
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--positive)",
							stopOpacity: .03
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						stroke: "var(--border)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "day",
						tickFormatter: fmtDay,
						tick: {
							fill: "var(--muted-foreground)",
							fontSize: 12
						},
						axisLine: false,
						tickLine: false,
						interval: 4
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [(min) => Math.floor(min * .9 / 50) * 50, (max) => Math.ceil(max * 1.05 / 50) * 50],
						tick: {
							fill: "var(--muted-foreground)",
							fontSize: 12
						},
						axisLine: false,
						tickLine: false,
						width: 52
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: {
							background: "var(--popover)",
							border: "1px solid var(--border)",
							borderRadius: 10,
							color: "var(--popover-foreground)"
						},
						labelFormatter: (d) => fmtDay(d),
						formatter: (v) => [formatMoney(v), "Zostatok"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "linear",
						dataKey: "balance",
						stroke: "var(--positive)",
						strokeWidth: 2.5,
						fill: "url(#bal-fill)",
						isAnimationActive: false
					})
				]
			})
		})
	});
}
async function shareText(title, text, copied) {
	try {
		if (navigator.share) await navigator.share({
			title,
			text
		});
		else {
			await navigator.clipboard.writeText(text);
			toast.success(copied);
		}
	} catch {}
}
function ActionTile({ icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "grid aspect-square w-full place-items-center rounded-2xl bg-background text-primary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "h-8 w-8",
			strokeWidth: 1.4
		})
	});
}
function AccountDetail() {
	const { id } = Route.useParams();
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const { data: transactions } = useSuspenseQuery(transactionsQuery);
	const { data: recipients } = useSuspenseQuery(recipientsQuery);
	const { data: orders } = useSuspenseQuery(standingOrdersQuery);
	const account = accounts.find((a) => a.id === id);
	const [renameOpen, setRenameOpen] = (0, import_react.useState)(false);
	const [requestOpen, setRequestOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(account?.name ?? "");
	const [reqAmount, setReqAmount] = (0, import_react.useState)("");
	const [reqMessage, setReqMessage] = (0, import_react.useState)("");
	const rename = useBankMutation((n) => renameAccount(id, n), [qk.accounts]);
	const history = (0, import_react.useMemo)(() => account ? balanceHistory(Number(account.balance), transactions, account.id, 30) : [], [account, transactions]);
	if (!account) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Detail účtu",
		back: "/domov"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bank-section text-muted-foreground",
		children: "Účet sa nenašiel."
	})] });
	const savings = accounts.filter((a) => a.account_type === "savings" && a.id !== account.id);
	const savingsTotal = savings.reduce((s, a) => s + Number(a.balance), 0);
	const held = transactions.filter((t) => t.account_id === account.id && t.status === "scheduled").reduce((s, t) => s + Number(t.amount), 0);
	const favorites = recipients.filter((r) => r.is_favorite);
	const accountNumber = account.iban.slice(-10).replace(/^0+/, "");
	const now = /* @__PURE__ */ new Date();
	const ordersCount = orders.filter((o) => o.account_id === account.id && o.is_active).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Detail účtu",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bank-tile relative overflow-hidden px-6 py-7 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TatraMark, { className: "pointer-events-none absolute -right-6 -bottom-8 h-44 w-44 text-foreground/5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Premenovať účet",
								onClick: () => setRenameOpen(true),
								className: "absolute top-5 right-5 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
									className: "h-6 w-6",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: account.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
								value: account.iban,
								className: "mt-2 block text-[1.05rem] text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "Aktuálny zostatok"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: account.balance,
								sensitive: true,
								className: "mt-1 block text-[2.4rem] font-medium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: [
									"Zostatok platný k ",
									formatShortDate(now),
									" ",
									formatTime(now)
								]
							})
						]
					}),
					savings.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ucet/$id",
						params: { id: savings[0].id },
						className: "mt-4 flex items-center justify-between gap-3 border-b border-border py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[1.05rem] text-muted-foreground",
							children: "Sporenia k účtu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: savingsTotal,
								sensitive: true,
								className: "text-[1.2rem] font-bold"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6 text-primary" })]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 grid grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => shareText("Môj IBAN", `${account.name}\nIBAN: ${formatIban(account.iban)}\nBIC: TATRAKBX`, "IBAN skopírovaný do schránky"),
							className: "flex items-center justify-center gap-3 py-4 text-[1.05rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
								className: "h-6 w-6 text-primary",
								strokeWidth: 1.5
							}), " Zdieľať IBAN"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setRequestOpen(true),
							className: "flex items-center justify-center gap-3 py-4 text-[1.05rem]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandCoins, {
								className: "h-6 w-6 text-primary",
								strokeWidth: 1.5
							}), " Vyžiadať platbu"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Rýchla platba",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/prijemcovia",
					children: "Zoznam príjemcov"
				}),
				children: favorites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-6 text-center text-muted-foreground",
					children: "Nemáte žiadnych príjemcov pre rýchlu platbu."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar -mx-5 flex gap-5 overflow-x-auto px-5",
					children: favorites.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/platba",
						search: {
							recipientId: r.id,
							accountId: account.id
						},
						className: "flex w-20 shrink-0 flex-col items-center gap-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "line-clamp-2 text-sm",
							children: r.name
						})]
					}, r.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-canvas px-5 py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-4 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pohyby",
							search: { account: account.id },
							className: "flex flex-col items-center gap-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionTile, { icon: ArrowLeftRight }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Pohyby"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/platba",
							search: { accountId: account.id },
							className: "flex flex-col items-center gap-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionTile, { icon: Send }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Platba"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/trvale-prikazy",
							className: "flex flex-col items-center gap-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionTile, { icon: CalendarClock }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm",
								children: ["Trvalé príkazy", ordersCount ? ` (${ordersCount})` : ""]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/prijemcovia",
							search: { tab: "sablony" },
							className: "flex flex-col items-center gap-2 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionTile, { icon: FileText }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Šablóny"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Vývoj zostatkov",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted-foreground",
					children: [
						history[0] ? formatShortDate(history[0].day) : "",
						" – ",
						formatShortDate(now)
					]
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BalanceChart, { data: history })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Viac informácií",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Účtovný zostatok",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: account.balance,
							sensitive: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Disponibilný zostatok",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: Math.max(0, Number(account.balance) - held),
							sensitive: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Naplánované platby",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { value: held })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Číslo účtu",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: accountNumber })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Mena",
						value: account.currency
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Typ účtu",
						value: account.account_type === "savings" ? "Sporiaci účet" : "Bežný účet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "SWIFT kód (BIC)",
						value: "TATRAKBX"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: renameOpen,
				onOpenChange: setRenameOpen,
				title: "Premenovať účet",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const n = name.trim();
						if (n.length < 1 || n.length > 60) return void toast.error("Názov musí mať 1 až 60 znakov");
						rename.mutate(n, {
							onSuccess: () => {
								toast.success("Účet premenovaný");
								setRenameOpen(false);
							},
							onError: (err) => toast.error(bankErrorMessage(err))
						});
					},
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "acc-name",
						label: "Názov účtu",
						maxLength: 60,
						value: name,
						onChange: (e) => setName(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "bank",
						size: "xl",
						disabled: rename.isPending,
						children: "Uložiť"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: requestOpen,
				onOpenChange: setRequestOpen,
				title: "Vyžiadať platbu",
				description: "Pošlite platobné údaje cez správu alebo e-mail.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const amount = reqAmount ? parseAmount(reqAmount) : null;
						if (amount !== null && (!Number.isFinite(amount) || amount <= 0)) return void toast.error("Zadajte platnú sumu");
						shareText("Žiadosť o platbu", [
							"Prosím o platbu:",
							`Príjemca: ${account.name}`,
							`IBAN: ${formatIban(account.iban)}`,
							amount ? `Suma: ${formatAmount(amount)} EUR` : "",
							reqMessage.trim() ? `Správa: ${reqMessage.trim().slice(0, 140)}` : ""
						].filter(Boolean).join("\n"), "Žiadosť skopírovaná do schránky").then(() => setRequestOpen(false));
					},
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "req-amount",
							label: "Suma (EUR)",
							inputMode: "decimal",
							placeholder: "0,00",
							value: reqAmount,
							onChange: (e) => setReqAmount(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "req-msg",
							label: "Správa pre platiteľa",
							maxLength: 140,
							value: reqMessage,
							onChange: (e) => setReqMessage(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							children: "Zdieľať žiadosť"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AccountDetail as component };
