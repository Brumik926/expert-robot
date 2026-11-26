import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as CircleCheck, W as FileText, Y as CircleX, _ as Share2, a as UserPlus, q as Clock, x as Repeat } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField, r as SelectField } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as txTypeLabel, i as categoryOf, n as CATEGORY_KEYS, t as CATEGORIES } from "./categories-D0TWo3O-.mjs";
import { N as updateTransactionCategory, a as createTemplate, n as createRecipient, t as cancelScheduledPayment } from "./bank-CoEeU7CF.mjs";
import { o as useQueryClient, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { d as transactionQuery, m as useInvalidateMoney, o as qk, p as useBankMutation, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { a as formatShortDate, i as formatMoney, o as formatTime, r as formatLongDate } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { t as formatIban } from "./iban-XZadvt3S.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { t as Route } from "./transakcia._id-Dy5yMoW9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transakcia._id-BtJTMYfp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS = {
	completed: {
		label: "Zaúčtovaná",
		icon: CircleCheck,
		cls: "text-positive"
	},
	scheduled: {
		label: "Naplánovaná",
		icon: Clock,
		cls: "text-warning"
	},
	failed: {
		label: "Zlyhala – nedostatok prostriedkov",
		icon: CircleX,
		cls: "text-negative"
	},
	cancelled: {
		label: "Zrušená",
		icon: CircleX,
		cls: "text-muted-foreground"
	}
};
function TransactionDetail() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const invalidateMoney = useInvalidateMoney();
	const { data: tx } = useSuspenseQuery(transactionQuery(id));
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const { data: recipients } = useSuspenseQuery(recipientsQuery);
	const [templateOpen, setTemplateOpen] = (0, import_react.useState)(false);
	const [templateName, setTemplateName] = (0, import_react.useState)(tx.counterparty_name);
	const [cancelling, setCancelling] = (0, import_react.useState)(false);
	const account = accounts.find((a) => a.id === tx.account_id);
	const incoming = tx.direction === "in";
	const status = STATUS[tx.status] ?? STATUS["completed"];
	const StatusIcon = status.icon;
	const cat = categoryOf(tx.category);
	const CatIcon = cat.icon;
	const canSaveRecipient = !!tx.counterparty_iban && tx.tx_type !== "card" && tx.tx_type !== "internal" && !recipients.some((r) => r.iban === tx.counterparty_iban);
	const canRepeat = !incoming && !!tx.counterparty_iban && tx.tx_type !== "card";
	const setCategory = useBankMutation((c) => updateTransactionCategory(tx.id, c), [qk.transactions]);
	const saveRecipient = useBankMutation(() => createRecipient({
		name: tx.counterparty_name,
		iban: tx.counterparty_iban ?? ""
	}), [qk.recipients]);
	const saveTemplate = useBankMutation((name) => createTemplate({
		name,
		recipient_name: tx.counterparty_name,
		iban: tx.counterparty_iban ?? "",
		amount: Number(tx.amount),
		variable_symbol: tx.variable_symbol,
		constant_symbol: tx.constant_symbol,
		specific_symbol: tx.specific_symbol,
		message: tx.message
	}), [qk.templates]);
	async function share() {
		const text = [
			`${incoming ? "Prijatá" : "Odoslaná"} platba – Tatra banka `,
			`Suma: ${formatMoney(tx.amount)}`,
			`${incoming ? "Od" : "Príjemca"}: ${tx.counterparty_name}`,
			tx.counterparty_iban ? `IBAN: ${formatIban(tx.counterparty_iban)}` : "",
			`Dátum: ${formatShortDate(tx.booked_at)}`,
			tx.variable_symbol ? `VS: ${tx.variable_symbol}` : "",
			tx.message ? `Správa: ${tx.message}` : ""
		].filter(Boolean).join("\n");
		try {
			if (navigator.share) await navigator.share({
				title: "Potvrdenie o platbe",
				text
			});
			else {
				await navigator.clipboard.writeText(text);
				toast.success("Potvrdenie skopírované do schránky");
			}
		} catch {}
	}
	async function cancel() {
		setCancelling(true);
		try {
			if (await cancelScheduledPayment(tx.id)) toast.success("Naplánovaná platba bola zrušená");
			else toast.error("Platbu už nie je možné zrušiť");
			await Promise.all([invalidateMoney(), qc.invalidateQueries({ queryKey: qk.transaction(tx.id) })]);
		} catch (e) {
			toast.error(bankErrorMessage(e));
		} finally {
			setCancelling(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Detail pohybu",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[1.05rem] text-muted-foreground",
						children: txTypeLabel(tx.tx_type, tx.direction)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value: tx.amount,
						signed: incoming ? "in" : "out",
						className: cn("mt-2 block text-[2.4rem] font-extrabold", incoming ? "text-positive" : "text-negative", tx.status !== "completed" && "text-muted-foreground")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-xl font-bold",
						children: tx.counterparty_name || "Bez názvu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: cn("mt-3 inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-semibold", status.cls),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIcon, { className: "h-4 w-4" }),
							" ",
							status.label
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						className: "border-t-0",
						label: "Dátum",
						value: `${formatLongDate(tx.booked_at)}, ${formatTime(tx.booked_at)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Dátum splatnosti",
						value: formatShortDate(tx.execution_date)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Účet",
						value: account?.name ?? "—"
					}),
					tx.counterparty_iban ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: incoming ? "IBAN platiteľa" : "IBAN príjemcu",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, { value: tx.counterparty_iban })
					}) : null,
					tx.variable_symbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Variabilný symbol",
						value: tx.variable_symbol
					}) : null,
					tx.specific_symbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Špecifický symbol",
						value: tx.specific_symbol
					}) : null,
					tx.constant_symbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Konštantný symbol",
						value: tx.constant_symbol
					}) : null,
					tx.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Informácia pre príjemcu",
						value: tx.message
					}) : null,
					tx.payer_reference ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Referencia platiteľa",
						value: tx.payer_reference
					}) : null,
					tx.balance_after !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Zostatok po pohybe",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: tx.balance_after,
							sensitive: true
						})
					}) : null,
					tx.co2_kg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Uhlíková stopa",
						value: `${String(tx.co2_kg).replace(".", ",")} kg CO₂e`
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Číslo transakcie",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: tx.id.slice(0, 8).toUpperCase()
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-card",
						style: { color: cat.color },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatIcon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold",
						children: "Kategória"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					id: "tx-category",
					label: "Kategória pre MaFin",
					value: tx.category,
					disabled: setCategory.isPending,
					onChange: (e) => setCategory.mutate(e.target.value, {
						onSuccess: () => {
							toast.success("Kategória uložená");
							qc.invalidateQueries({ queryKey: qk.transaction(tx.id) });
						},
						onError: (err) => toast.error(bankErrorMessage(err))
					}),
					options: CATEGORY_KEYS.map((k) => ({
						value: k,
						label: CATEGORIES[k].label
					}))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section flex flex-col gap-3",
				children: [
					tx.status === "scheduled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bankDanger",
						size: "xl",
						disabled: cancelling,
						onClick: cancel,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {}),
							" ",
							cancelling ? "Ruším…" : "Zrušiť naplánovanú platbu"
						]
					}) : null,
					canRepeat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "bank",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/platba",
							search: { repeat: tx.id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, {}), " Zopakovať platbu"]
						})
					}) : null,
					canSaveRecipient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bankOutline",
						size: "xl",
						disabled: saveRecipient.isPending,
						onClick: () => saveRecipient.mutate(void 0, {
							onSuccess: () => toast.success("Príjemca uložený"),
							onError: (e) => toast.error(bankErrorMessage(e))
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, {}), " Uložiť príjemcu"]
					}) : null,
					canRepeat ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bankOutline",
						size: "xl",
						onClick: () => setTemplateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {}), " Vytvoriť šablónu"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bankGhost",
						size: "xl",
						onClick: share,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {}), " Zdieľať potvrdenie"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: templateOpen,
				onOpenChange: setTemplateOpen,
				title: "Nová šablóna",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						const name = templateName.trim();
						if (!name) return void toast.error("Zadajte názov šablóny");
						saveTemplate.mutate(name.slice(0, 60), {
							onSuccess: () => {
								toast.success("Šablóna uložená");
								setTemplateOpen(false);
								navigate({
									to: "/prijemcovia",
									search: { tab: "sablony" }
								});
							},
							onError: (err) => toast.error(bankErrorMessage(err))
						});
					},
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "tpl-name",
						label: "Názov šablóny",
						maxLength: 60,
						value: templateName,
						onChange: (e) => setTemplateName(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "bank",
						size: "xl",
						disabled: saveTemplate.isPending,
						children: "Uložiť šablónu"
					})]
				})
			})
		]
	});
}
//#endregion
export { TransactionDetail as component };
