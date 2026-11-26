import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { D as Pencil, I as Lock, L as LockOpen } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as ToggleRow, n as EmptyState, t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { D as updateCardLimits, E as updateCard } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { f as transactionsQuery, n as cardLimitsQuery, o as qk, p as useBankMutation, r as cardsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as CardVisual } from "./CardVisual-CwPp7jOw.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { t as Route } from "./karty._id-BhTbpASk.mjs";
import { t as TransactionRow } from "./TransactionRow-CHBnB5Lh.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-Dsp9oAtd.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/radix-ui__react-slider.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karty._id-Ca0mY3Vh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none select-none items-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })]
}));
Slider.displayName = Slider$1.displayName;
/** Allowed daily card limits; mirrors the CHECK constraints on public.card_limits. */
var CARD_LIMIT_RANGES = {
	atm_daily: {
		label: "Výber z bankomatu",
		max: 5e3,
		step: 50
	},
	pos_daily: {
		label: "Platby u obchodníka",
		max: 1e4,
		step: 100
	},
	internet_daily: {
		label: "Platby na internete",
		max: 1e4,
		step: 100
	}
};
function clampLimit(key, value) {
	const { max } = CARD_LIMIT_RANGES[key];
	if (!Number.isFinite(value)) return 0;
	return Math.min(max, Math.max(0, Math.round(value)));
}
function CardDetail() {
	const { id } = Route.useParams();
	const { data: cards } = useSuspenseQuery(cardsQuery);
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const { data: limits } = useSuspenseQuery(cardLimitsQuery(id));
	const { data: transactions } = useSuspenseQuery(transactionsQuery);
	const card = cards.find((c) => c.id === id);
	const [draft, setDraft] = (0, import_react.useState)({
		atm_daily: Number(limits.atm_daily),
		pos_daily: Number(limits.pos_daily),
		internet_daily: Number(limits.internet_daily)
	});
	const [confirmBlock, setConfirmBlock] = (0, import_react.useState)(false);
	const [renameOpen, setRenameOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)(card?.name ?? "");
	(0, import_react.useEffect)(() => {
		setDraft({
			atm_daily: Number(limits.atm_daily),
			pos_daily: Number(limits.pos_daily),
			internet_daily: Number(limits.internet_daily)
		});
	}, [limits]);
	const patchCard = useBankMutation((p) => updateCard(id, p), [qk.cards, qk.notifications]);
	const saveLimits = useBankMutation((p) => updateCardLimits(id, p), [qk.cardLimits(id), qk.notifications]);
	const cardTx = (0, import_react.useMemo)(() => transactions.filter((t) => t.card_id === id).slice(0, 5), [transactions, id]);
	if (!card) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Detail karty",
		back: "/karty"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "bank-section text-muted-foreground",
		children: "Karta nie je dostupná. Skúste to znova."
	})] });
	const account = accounts.find((a) => a.id === card.account_id);
	const blocked = card.status === "blocked";
	const credit = card.card_type === "credit";
	const dirty = draft.atm_daily !== Number(limits.atm_daily) || draft.pos_daily !== Number(limits.pos_daily) || draft.internet_daily !== Number(limits.internet_daily);
	const patch = (p, ok) => patchCard.mutate(p, {
		onSuccess: () => toast.success(ok),
		onError: (e) => toast.error(bankErrorMessage(e))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Detail karty",
				back: true,
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Premenovať kartu",
					onClick: () => {
						setName(card.name);
						setRenameOpen(true);
					},
					className: "text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
						className: "h-6 w-6",
						strokeWidth: 1.5
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-[20rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardVisual, {
							design: card.design,
							brand: card.brand,
							cardType: card.card_type,
							holder: card.holder_name,
							number: card.masked_number,
							blocked
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: card.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground tabular-nums",
								children: card.masked_number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: credit ? card.credit_available ?? 0 : account?.balance ?? 0,
								sensitive: true,
								className: "mt-3 block text-[1.8rem] font-bold"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: credit ? `Disponibilný zostatok z rámca ${formatAmount(card.credit_limit ?? 0)} EUR` : "Disponibilný zostatok na účte"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: blocked ? "bank" : "bankDanger",
						size: "xl",
						className: "mt-6",
						disabled: patchCard.isPending,
						onClick: () => blocked ? patch({ status: "active" }, "Karta odblokovaná") : setConfirmBlock(true),
						children: [
							blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {}),
							" ",
							blocked ? "Odblokovať kartu" : "Dočasne zablokovať kartu"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Nastavenia karty",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					id: "internet",
					label: "Internetové platby",
					description: "Platby kartou na internete",
					checked: card.internet_payments,
					disabled: blocked || patchCard.isPending,
					onCheckedChange: (v) => patch({ internet_payments: v }, v ? "Internetové platby zapnuté" : "Internetové platby vypnuté")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					id: "contactless",
					label: "Bezkontaktné platby",
					description: "Platby priložením karty",
					checked: card.contactless,
					disabled: blocked || patchCard.isPending,
					onCheckedChange: (v) => patch({ contactless: v }, v ? "Bezkontaktné platby zapnuté" : "Bezkontaktné platby vypnuté")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Denné limity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-7",
					children: [Object.keys(CARD_LIMIT_RANGES).map((k) => {
						const r = CARD_LIMIT_RANGES[k];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: `lim-${k}`,
									className: "text-[1.05rem]",
									children: r.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: draft[k],
									className: "text-lg font-bold"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
								id: `lim-${k}`,
								min: 0,
								max: r.max,
								step: r.step,
								value: [draft[k]],
								disabled: blocked,
								onValueChange: ([v]) => setDraft((d) => ({
									...d,
									[k]: clampLimit(k, v ?? 0)
								})),
								"aria-label": r.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0 EUR" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatAmount(r.max), " EUR"] })]
							})
						] }, k);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bank",
						size: "xl",
						disabled: !dirty || saveLimits.isPending || blocked,
						onClick: () => saveLimits.mutate(draft, {
							onSuccess: () => toast.success("Limity boli uložené"),
							onError: (e) => toast.error(bankErrorMessage(e))
						}),
						children: saveLimits.isPending ? "Ukladám…" : "Uložiť limity"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Informácie",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						className: "border-t-0",
						label: "Typ karty",
						value: `${card.brand} ${credit ? "kreditná" : "debetná"}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Držiteľ",
						value: card.holder_name || "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Platnosť do",
						value: card.expiry
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Účet",
						value: account?.name ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Stav",
						value: blocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-negative",
							children: "Zablokovaná"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-positive",
							children: "Aktívna"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section pr-0 pb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-[1.45rem] font-extrabold",
					children: "Posledné platby kartou"
				}), cardTx.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Kartou ste zatiaľ neplatili." }) : cardTx.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionRow, { tx: t }, t.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: confirmBlock,
				onOpenChange: setConfirmBlock,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Zablokovať kartu?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Kým kartu neodblokujete, nebude možné ňou platiť ani vyberať hotovosť." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Zrušiť" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
						onClick: () => patch({ status: "blocked" }, "Karta zablokovaná"),
						children: "Zablokovať"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: renameOpen,
				onOpenChange: setRenameOpen,
				title: "Premenovať kartu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const n = name.trim();
						if (n.length < 1 || n.length > 40) return void toast.error("Názov musí mať 1 až 40 znakov");
						patchCard.mutate({ name: n }, {
							onSuccess: () => {
								toast.success("Karta premenovaná");
								setRenameOpen(false);
							},
							onError: (err) => toast.error(bankErrorMessage(err))
						});
					},
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "card-name",
						label: "Názov karty",
						maxLength: 40,
						value: name,
						onChange: (e) => setName(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "bank",
						size: "xl",
						disabled: patchCard.isPending,
						children: "Uložiť"
					})]
				})
			})
		]
	});
}
//#endregion
export { CardDetail as component };
