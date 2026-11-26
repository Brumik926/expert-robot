import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { S as Plus, s as Trash2, ut as CalendarClock } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { i as Switch, n as EmptyState } from "./rows-Cen7mRph.mjs";
import { a as TextField, r as SelectField, t as FieldShell } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as deleteStandingOrder, j as updateStandingOrder, r as createStandingOrder } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { l as standingOrdersQuery, o as qk, p as useBankMutation, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { a as formatShortDate, c as todayIso, n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as formatIban } from "./iban-XZadvt3S.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-Dsp9oAtd.mjs";
import { a as zodErrors, r as standingOrderSchema, t as FREQUENCIES } from "./forms-BrqDGFra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trvale-prikazy-DEx4hW9G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var freqLabel = (f) => FREQUENCIES.find((x) => x.value === f)?.label ?? f;
function StandingOrdersPage() {
	const { data: orders } = useSuspenseQuery(standingOrdersQuery);
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const [draft, setDraft] = (0, import_react.useState)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [toDelete, setToDelete] = (0, import_react.useState)(null);
	const save = useBankMutation(async (d) => {
		const p = standingOrderSchema.parse(d);
		if (d.id) await updateStandingOrder(d.id, p);
		else await createStandingOrder(p);
	}, [qk.standingOrders]);
	const toggle = useBankMutation((o) => updateStandingOrder(o.id, { is_active: !o.is_active }), [qk.standingOrders]);
	const remove = useBankMutation((id) => deleteStandingOrder(id), [qk.standingOrders]);
	const blank = () => ({
		account_id: accounts.find((a) => a.is_primary)?.id ?? accounts[0]?.id ?? "",
		name: "",
		recipient_name: "",
		iban: "",
		amount: "",
		frequency: "monthly",
		next_date: todayIso(),
		end_date: "",
		variable_symbol: "",
		specific_symbol: "",
		constant_symbol: "",
		message: ""
	});
	function edit(o) {
		setErrors({});
		setDraft({
			id: o.id,
			account_id: o.account_id,
			name: o.name,
			recipient_name: o.recipient_name,
			iban: formatIban(o.iban),
			amount: formatAmount(o.amount).replace(/\s/g, ""),
			frequency: o.frequency,
			next_date: o.next_date,
			end_date: o.end_date ?? "",
			variable_symbol: o.variable_symbol ?? "",
			specific_symbol: o.specific_symbol ?? "",
			constant_symbol: o.constant_symbol ?? "",
			message: o.message ?? ""
		});
	}
	function submit(e) {
		e.preventDefault();
		if (!draft) return;
		const parsed = standingOrderSchema.safeParse(draft);
		if (!parsed.success) return setErrors(zodErrors(parsed.error));
		if (!draft.id && parsed.data.next_date < todayIso()) return setErrors({ next_date: "Dátum nemôže byť v minulosti" });
		save.mutate(draft, {
			onSuccess: () => {
				toast.success(draft.id ? "Trvalý príkaz upravený" : "Trvalý príkaz vytvorený");
				setDraft(null);
			},
			onError: (err) => toast.error(bankErrorMessage(err))
		});
	}
	const set = (k, v) => draft && setDraft({
		...draft,
		[k]: v
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Trvalé príkazy",
				back: true,
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Nový trvalý príkaz",
					onClick: () => {
						setErrors({});
						setDraft(blank());
					},
					className: "text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-8 w-8",
						strokeWidth: 1.6
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-3 px-5",
				children: [
					orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bank-section rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							title: "Nemáte žiadne trvalé príkazy.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bank",
								onClick: () => setDraft(blank()),
								children: "Vytvoriť trvalý príkaz"
							})
						})
					}) : null,
					orders.map((o) => {
						const acc = accounts.find((a) => a.id === o.account_id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "overflow-hidden rounded-xl bg-background shadow-tile",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => edit(o),
								className: "flex w-full items-start gap-4 px-5 pt-5 pb-4 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
											className: "h-6 w-6",
											strokeWidth: 1.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-lg font-bold",
												children: o.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block truncate text-[0.95rem] text-muted-foreground",
												children: o.recipient_name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
												value: o.iban,
												className: "block truncate text-sm text-muted-foreground"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
										value: o.amount,
										className: "shrink-0 text-lg font-bold"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-t border-border px-5 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										freqLabel(o.frequency),
										" ·",
										" ",
										o.is_active ? `ďalšia ${formatShortDate(o.next_date)}` : "pozastavený",
										o.end_date ? ` · do ${formatShortDate(o.end_date)}` : "",
										" · z účtu",
										" ",
										acc?.name ?? "—"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: o.is_active,
										"aria-label": o.is_active ? "Pozastaviť" : "Aktivovať",
										disabled: toggle.isPending,
										onCheckedChange: () => toggle.mutate(o, {
											onSuccess: () => toast.success(o.is_active ? "Príkaz pozastavený" : "Príkaz aktivovaný"),
											onError: (err) => toast.error(bankErrorMessage(err))
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Zrušiť trvalý príkaz",
										onClick: () => setToDelete(o),
										className: "text-negative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-5 w-5" })
									})]
								})]
							})]
						}, o.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 pb-4 text-center text-xs text-muted-foreground",
						children: "Trvalé príkazy sa vykonajú automaticky pri otvorení aplikácie v deň splatnosti alebo neskôr."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: !!draft,
				onOpenChange: (v) => !v && setDraft(null),
				title: draft?.id ? "Upraviť trvalý príkaz" : "Nový trvalý príkaz",
				children: draft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "so-acc",
							label: "Z účtu",
							value: draft.account_id,
							onChange: (e) => set("account_id", e.target.value),
							options: accounts.map((a) => ({
								value: a.id,
								label: a.name
							})),
							error: errors["account_id"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-name",
							label: "Názov príkazu",
							required: true,
							maxLength: 60,
							value: draft.name,
							onChange: (e) => set("name", e.target.value),
							error: errors["name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-rname",
							label: "Názov príjemcu",
							required: true,
							maxLength: 70,
							value: draft.recipient_name,
							onChange: (e) => set("recipient_name", e.target.value),
							error: errors["recipient_name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-iban",
							label: "IBAN",
							required: true,
							autoCapitalize: "characters",
							value: draft.iban,
							onChange: (e) => set("iban", e.target.value.toUpperCase()),
							onBlur: () => set("iban", formatIban(draft.iban)),
							error: errors["iban"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-amount",
							label: "Suma (EUR)",
							required: true,
							inputMode: "decimal",
							placeholder: "0,00",
							value: draft.amount,
							onChange: (e) => set("amount", e.target.value),
							error: errors["amount"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "so-freq",
							label: "Frekvencia",
							value: draft.frequency,
							onChange: (e) => set("frequency", e.target.value),
							options: FREQUENCIES.map((f) => ({
								value: f.value,
								label: f.label
							}))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
							label: "Prvá / ďalšia platba",
							required: true,
							htmlFor: "so-next",
							error: errors["next_date"],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "so-next",
								type: "date",
								min: todayIso(),
								value: draft.next_date,
								onChange: (e) => set("next_date", e.target.value),
								className: "relative w-full bg-transparent text-[1.05rem] outline-none"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
							label: "Platí do (nepovinné)",
							htmlFor: "so-end",
							error: errors["end_date"],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "so-end",
								type: "date",
								min: draft.next_date,
								value: draft.end_date,
								onChange: (e) => set("end_date", e.target.value),
								className: "relative w-full bg-transparent text-[1.05rem] outline-none"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-vs",
							label: "Variabilný symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: draft.variable_symbol,
							onChange: (e) => set("variable_symbol", e.target.value.replace(/\D/g, "")),
							error: errors["variable_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-ss",
							label: "Špecifický symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: draft.specific_symbol,
							onChange: (e) => set("specific_symbol", e.target.value.replace(/\D/g, "")),
							error: errors["specific_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-ks",
							label: "Konštantný symbol",
							inputMode: "numeric",
							maxLength: 4,
							value: draft.constant_symbol,
							onChange: (e) => set("constant_symbol", e.target.value.replace(/\D/g, "")),
							error: errors["constant_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "so-msg",
							label: "Informácia pre príjemcu",
							maxLength: 140,
							value: draft.message,
							onChange: (e) => set("message", e.target.value),
							error: errors["message"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: save.isPending,
							children: save.isPending ? "Ukladám…" : "Uložiť trvalý príkaz"
						})
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: !!toDelete,
				onOpenChange: (v) => !v && setToDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
						"Zrušiť trvalý príkaz „",
						toDelete?.name,
						"“?"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Budúce platby sa už nevykonajú. Doterajšie pohyby zostanú v histórii." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Ponechať" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
						onClick: () => {
							if (!toDelete) return;
							remove.mutate(toDelete.id, {
								onSuccess: () => toast.success("Trvalý príkaz zrušený"),
								onError: (err) => toast.error(bankErrorMessage(err))
							});
							setToDelete(null);
						},
						children: "Zrušiť príkaz"
					})] })]
				})
			})
		]
	});
}
//#endregion
export { StandingOrdersPage as component };
