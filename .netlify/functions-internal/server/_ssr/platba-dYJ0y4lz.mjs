import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { S as useRouter, Vt as isRedirect, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as CircleCheck, X as CircleQuestionMark, et as ChevronRight, h as ShieldCheck, i as UserRound, lt as CalendarDays, mt as BookOpen, nt as ChevronDown, q as Clock, rt as Check } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as EmptyState, o as UnderlineTabs, t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField, i as TextAreaField, n as SearchField, r as SelectField, t as FieldShell } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as PAYMENT_CATEGORIES, t as CATEGORIES } from "./categories-D0TWo3O-.mjs";
import { a as createTemplate, n as createRecipient } from "./bank-CoEeU7CF.mjs";
import { o as useQueryClient, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { f as transactionsQuery, m as useInvalidateMoney, o as qk, s as recipientsQuery, t as accountsQuery, u as templatesQuery } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { a as formatShortDate, c as todayIso, n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { i as normalizeIban, t as formatIban } from "./iban-XZadvt3S.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as RecipientAvatar } from "./Avatar-BnlpHRpY.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { i as paymentFormSchema, n as executePaymentSchema, r as parseAmount, t as checkSufficientFunds } from "./payment-schema-DHSp9_O9.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-ChNsXfvL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-D1_iSxmd.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D_o4FWpC.mjs";
import { t as Route } from "./platba-DEf8Ewzj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platba-dYJ0y4lz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
/** Sheet for "Vyberte príjemcu": pick a saved recipient or a payment template. */
function RecipientPicker({ open, onOpenChange, recipients, templates, onPickRecipient, onPickTemplate }) {
	const [tab, setTab] = (0, import_react.useState)("prijemcovia");
	const [q, setQ] = (0, import_react.useState)("");
	const match = (name, iban) => {
		const s = q.trim().toLowerCase();
		return !s || name.toLowerCase().includes(s) || iban.includes(normalizeIban(q));
	};
	const rs = (0, import_react.useMemo)(() => recipients.filter((r) => match(r.name, r.iban)), [recipients, q]);
	const ts = (0, import_react.useMemo)(() => templates.filter((t) => match(t.name + " " + t.recipient_name, t.iban)), [templates, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BottomSheet, {
		open,
		onOpenChange,
		title: "Vyberte príjemcu",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
				value: q,
				onChange: setQ
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-5 mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineTabs, {
					tabs: [{
						value: "prijemcovia",
						label: `Príjemcovia (${rs.length})`
					}, {
						value: "sablony",
						label: `Šablóny (${ts.length})`
					}],
					value: tab,
					onChange: setTab
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-col gap-3",
				children: tab === "prijemcovia" ? rs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Žiadni príjemcovia." }) : rs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPickRecipient(r),
					className: "bank-tile flex items-center gap-4 px-5 py-4 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-lg font-bold",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
							value: r.iban,
							className: "block truncate text-sm text-muted-foreground"
						})]
					})]
				}, r.id)) : ts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Žiadne šablóny." }) : ts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPickTemplate(t),
					className: "bank-tile flex items-center gap-4 px-5 py-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: t.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-lg font-bold",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm text-muted-foreground",
								children: t.recipient_name
							})]
						}),
						t.amount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: t.amount,
							className: "shrink-0 font-semibold"
						}) : null
					]
				}, t.id))
			})
		]
	});
}
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Executes a transfer. Validation runs here and again inside the
* `execute_payment` database function, which locks the payer account, checks
* funds and writes the balance + transaction atomically. The idempotency key
* makes a repeated submit return the original transaction instead of paying twice.
*/
var executePayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => executePaymentSchema.parse(data)).handler(createSsrRpc("22413bd6660cf3f31a34e2057e3f89309a1bb9fa6281d92b476c8d9dbd08d31a"));
var CONSTANT_SYMBOLS = [
	{
		code: "0308",
		label: "Platba za služby"
	},
	{
		code: "0558",
		label: "Finančné platby – ostatné"
	},
	{
		code: "1148",
		label: "Zálohová platba"
	},
	{
		code: "3558",
		label: "Platba poistného"
	},
	{
		code: "0138",
		label: "Mzdy a platy"
	}
];
function PaymentPage() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const qc = useQueryClient();
	const invalidateMoney = useInvalidateMoney();
	const runPayment = useServerFn(executePayment);
	const { data: accounts } = useSuspenseQuery(accountsQuery);
	const { data: recipients } = useSuspenseQuery(recipientsQuery);
	const { data: templates } = useSuspenseQuery(templatesQuery);
	const { data: transactions } = useSuspenseQuery(transactionsQuery);
	const initial = (0, import_react.useMemo)(() => {
		const today = todayIso();
		const base = {
			accountId: (accounts.find((a) => a.id === search.accountId) ?? accounts[0])?.id ?? "",
			recipientName: "",
			iban: "",
			amount: "",
			executionDate: today,
			message: "",
			variableSymbol: "",
			specificSymbol: "",
			constantSymbol: "",
			payerReference: "",
			category: "prevody"
		};
		const r = recipients.find((x) => x.id === search.recipientId);
		if (r) return {
			...base,
			recipientName: r.name,
			iban: formatIban(r.iban)
		};
		const t = templates.find((x) => x.id === search.templateId);
		if (t) return {
			...base,
			recipientName: t.recipient_name,
			iban: formatIban(t.iban),
			amount: t.amount ? formatAmount(t.amount).replace(/\s/g, "") : "",
			message: t.message ?? "",
			variableSymbol: t.variable_symbol ?? "",
			specificSymbol: t.specific_symbol ?? "",
			constantSymbol: t.constant_symbol ?? ""
		};
		const tx = transactions.find((x) => x.id === search.repeat);
		if (tx && tx.counterparty_iban) return {
			...base,
			accountId: tx.account_id,
			recipientName: tx.counterparty_name,
			iban: formatIban(tx.counterparty_iban),
			amount: formatAmount(tx.amount).replace(/\s/g, ""),
			message: tx.message ?? "",
			variableSymbol: tx.variable_symbol ?? "",
			specificSymbol: tx.specific_symbol ?? "",
			constantSymbol: tx.constant_symbol ?? "",
			category: tx.category === "prijem" ? "prevody" : tx.category
		};
		return base;
	}, [
		search.recipientId,
		search.templateId,
		search.repeat,
		search.accountId
	]);
	const [draft, setDraft] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [step, setStep] = (0, import_react.useState)("form");
	const [validated, setValidated] = (0, import_react.useState)(null);
	const [pickerOpen, setPickerOpen] = (0, import_react.useState)(false);
	const [payerOpen, setPayerOpen] = (0, import_react.useState)(false);
	const [ksOpen, setKsOpen] = (0, import_react.useState)(false);
	const [saveRecipient, setSaveRecipient] = (0, import_react.useState)(false);
	const [saveTemplate, setSaveTemplate] = (0, import_react.useState)(false);
	const [templateName, setTemplateName] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(null);
	const idempotencyKey = (0, import_react.useRef)(null);
	const inFlight = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setDraft(initial);
		setStep("form");
		setErrors({});
	}, [initial]);
	const account = accounts.find((a) => a.id === draft.accountId) ?? accounts[0];
	const set = (k, v) => {
		setDraft((d) => ({
			...d,
			[k]: v
		}));
		if (errors[k]) setErrors((e) => ({
			...e,
			[k]: void 0
		}));
	};
	const isKnownRecipient = recipients.some((r) => r.iban === normalizeIban(draft.iban));
	const today = todayIso();
	function review(e) {
		e.preventDefault();
		const parsed = paymentFormSchema.safeParse({
			accountId: draft.accountId,
			recipientName: draft.recipientName,
			iban: draft.iban,
			amount: draft.amount ? parseAmount(draft.amount) : NaN,
			currency: "EUR",
			executionDate: draft.executionDate,
			variableSymbol: draft.variableSymbol,
			constantSymbol: draft.constantSymbol,
			specificSymbol: draft.specificSymbol,
			message: draft.message,
			payerReference: draft.payerReference,
			category: draft.category
		});
		if (!parsed.success) {
			const errs = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (!errs[key]) errs[key] = issue.message;
			}
			setErrors(errs);
			toast.error("Skontrolujte zvýraznené polia");
			return;
		}
		if (parsed.data.executionDate < today) {
			setErrors({ executionDate: "Dátum splatnosti nemôže byť v minulosti" });
			return;
		}
		if (account && normalizeIban(account.iban) === parsed.data.iban) {
			setErrors({ iban: "Nemôžete posielať peniaze na ten istý účet" });
			return;
		}
		if (account && !checkSufficientFunds(Number(account.balance), parsed.data.amount, parsed.data.executionDate, today)) {
			setErrors({ amount: `Na účte nie je dostatok prostriedkov (zostatok ${formatAmount(account.balance)} EUR)` });
			return;
		}
		setValidated(parsed.data);
		setTemplateName(parsed.data.recipientName.slice(0, 60));
		idempotencyKey.current = crypto.randomUUID();
		setStep("review");
		window.scrollTo({ top: 0 });
	}
	async function confirm() {
		if (!validated || !idempotencyKey.current || inFlight.current) return;
		inFlight.current = true;
		setSubmitting(true);
		try {
			const result = await runPayment({ data: {
				...validated,
				idempotencyKey: idempotencyKey.current
			} });
			if (!result.ok) {
				toast.error(result.error);
				if (result.error.includes("prostriedkov")) setStep("form");
				return;
			}
			const extras = [];
			if (saveRecipient && !isKnownRecipient) extras.push(createRecipient({
				name: validated.recipientName,
				iban: validated.iban
			}).catch(() => toast.error("Príjemcu sa nepodarilo uložiť")));
			if (saveTemplate && templateName.trim()) extras.push(createTemplate({
				name: templateName.trim().slice(0, 60),
				recipient_name: validated.recipientName,
				iban: validated.iban,
				amount: validated.amount,
				variable_symbol: validated.variableSymbol ?? null,
				constant_symbol: validated.constantSymbol ?? null,
				specific_symbol: validated.specificSymbol ?? null,
				message: validated.message ?? null
			}).catch(() => toast.error("Šablónu sa nepodarilo uložiť")));
			await Promise.all(extras);
			await Promise.all([
				invalidateMoney(),
				qc.invalidateQueries({ queryKey: qk.recipients }),
				qc.invalidateQueries({ queryKey: qk.templates })
			]);
			setDone({
				transactionId: result.transactionId,
				status: result.status,
				balance: result.balance,
				form: validated
			});
			setStep("done");
			window.scrollTo({ top: 0 });
		} catch (err) {
			toast.error(bankErrorMessage(err, "Platbu sa nepodarilo odoslať. Skúste to znova."));
		} finally {
			inFlight.current = false;
			setSubmitting(false);
		}
	}
	function newPayment() {
		setDraft({
			...initial,
			recipientName: "",
			iban: "",
			amount: "",
			message: "",
			variableSymbol: "",
			specificSymbol: "",
			constantSymbol: "",
			payerReference: ""
		});
		setDone(null);
		setValidated(null);
		setSaveRecipient(false);
		setSaveTemplate(false);
		idempotencyKey.current = null;
		setStep("form");
		navigate({
			to: "/platba",
			search: {},
			replace: true
		});
	}
	if (step === "done" && done) {
		const scheduled = done.status === "scheduled";
		const failed = done.status === "failed";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[calc(100dvh-6.5rem)] flex-col animate-page-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, { title: "Platba" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section flex flex-1 flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `mt-6 grid h-24 w-24 place-items-center rounded-full animate-pop-in ${failed ? "bg-negative/15 text-negative" : scheduled ? "bg-warning/15 text-warning" : "bg-positive/15 text-positive"}`,
						children: scheduled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
							className: "h-14 w-14",
							strokeWidth: 1.5
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-14 w-14",
							strokeWidth: 1.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 text-2xl font-extrabold",
						children: failed ? "Platba nebola vykonaná" : scheduled ? "Platba je naplánovaná" : "Platba bola odoslaná"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value: done.form.amount,
						className: "mt-3 block text-[2.2rem] font-bold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-muted-foreground",
						children: ["pre ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: done.form.recipientName
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
						value: done.form.iban,
						className: "mt-1 text-sm text-muted-foreground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 rounded-xl bg-card px-4 py-3 text-sm text-muted-foreground",
						children: scheduled ? `Platbu vykonáme ${formatShortDate(done.form.executionDate)}, ak bude na účte dostatok prostriedkov.` : done.balance !== null ? `Nový zostatok na účte: ${formatAmount(done.balance)} EUR` : "Platba bola spracovaná."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Platba bola úspešne vykonaná."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex w-full flex-col gap-3 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "bank",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/transakcia/$id",
									params: { id: done.transactionId },
									children: "Detail platby"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "bankOutline",
								size: "xl",
								onClick: newPayment,
								children: "Nová platba"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "bankGhost",
								size: "xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/domov",
									children: "Domov"
								})
							})
						]
					})
				]
			})]
		});
	}
	if (step === "review" && validated && account) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Kontrola platby",
				back: false,
				right: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep("form"),
					className: "mt-2 text-[0.95rem] font-medium text-link",
					children: "← Upraviť údaje"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Suma na odoslanie"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
						value: validated.amount,
						className: "mt-1 block text-[2.4rem] font-extrabold"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: validated.executionDate === today ? "Splatnosť: čo najskôr" : `Splatnosť: ${formatShortDate(validated.executionDate)}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Platiteľ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						className: "border-t-0",
						label: "Účet",
						value: account.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "IBAN",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, { value: account.iban })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Zostatok po platbe",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
							value: validated.executionDate === today ? Number(account.balance) - validated.amount : Number(account.balance),
							sensitive: true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Príjemca",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						className: "border-t-0",
						label: "Názov",
						value: validated.recipientName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "IBAN",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, { value: validated.iban })
					}),
					validated.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Informácia pre príjemcu",
						value: validated.message
					}) : null,
					validated.variableSymbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Variabilný symbol",
						value: validated.variableSymbol
					}) : null,
					validated.specificSymbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Špecifický symbol",
						value: validated.specificSymbol
					}) : null,
					validated.constantSymbol ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Konštantný symbol",
						value: validated.constantSymbol
					}) : null,
					validated.payerReference ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Referencia platiteľa",
						value: validated.payerReference
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Kategória",
						value: CATEGORIES[validated.category]?.label ?? "Prevody"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section flex flex-col gap-4",
				children: [
					!isKnownRecipient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-[1.05rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: saveRecipient,
								onCheckedChange: (v) => setSaveRecipient(v === true)
							}),
							" ",
							"Uložiť príjemcu"
						]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-[1.05rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								checked: saveTemplate,
								onCheckedChange: (v) => setSaveTemplate(v === true)
							}),
							" ",
							"Uložiť ako šablónu"
						]
					}),
					saveTemplate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "tpl",
						label: "Názov šablóny",
						maxLength: 60,
						value: templateName,
						onChange: (e) => setTemplateName(e.target.value)
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bank",
						size: "xl",
						onClick: confirm,
						disabled: submitting,
						className: "mt-2",
						children: submitting ? "Odosielam…" : "Potvrdiť a odoslať"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bankOutline",
						size: "xl",
						onClick: () => setStep("form"),
						disabled: submitting,
						children: "Späť na úpravu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center justify-center gap-2 text-center text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 shrink-0" }), " Peniaze sa presunú v rámci Tatra banky."]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: review,
		noValidate: true,
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Platba",
				back: true,
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontakty",
					"aria-label": "Pomoc",
					className: "text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, {
						className: "h-9 w-9",
						strokeWidth: 1.3
					})
				})
			}),
			account ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section pb-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Platiteľ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[1.15rem]",
								children: account.name
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "IBAN"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
								value: account.iban,
								className: "truncate text-right text-[1.05rem]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Aktuálny zostatok"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: account.balance,
								sensitive: true,
								className: "text-[1.15rem]"
							})]
						})
					]
				}), accounts.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPayerOpen(true),
					className: "mt-5 flex w-full items-center justify-center gap-3 border-t border-border py-5 text-[1.1rem]",
					children: ["Zmeniť platiteľa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6 text-primary" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6" })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Príjemca",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPickerOpen(true),
					children: "Zoznam príjemcov"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPickerOpen(true),
							className: "bank-field flex h-[4.25rem] items-center justify-between px-5 text-left text-[1.05rem] text-muted-foreground",
							children: ["Vyberte príjemcu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
								className: "h-7 w-7 text-primary",
								strokeWidth: 1.4
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "iban",
							label: "IBAN",
							required: true,
							autoComplete: "off",
							autoCapitalize: "characters",
							spellCheck: false,
							value: draft.iban,
							onChange: (e) => set("iban", e.target.value.toUpperCase()),
							onBlur: () => draft.iban && set("iban", formatIban(draft.iban)),
							error: errors.iban,
							placeholder: "SK00 0000 0000 0000 0000 0000"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "recipientName",
							label: "Názov príjemcu",
							required: true,
							maxLength: 70,
							value: draft.recipientName,
							onChange: (e) => set("recipientName", e.target.value),
							error: errors.recipientName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1 h-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_7.5rem] gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "amount",
								label: "Suma",
								required: true,
								inline: true,
								inputMode: "decimal",
								placeholder: "0,00",
								value: draft.amount,
								onChange: (e) => set("amount", e.target.value.replace(/[^\d.,\s]/g, "")),
								error: errors.amount
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FieldShell, {
								label: "",
								htmlFor: "currency",
								inline: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "currency",
									"aria-label": "Mena",
									value: "EUR",
									onChange: () => void 0,
									className: "w-full cursor-pointer appearance-none bg-transparent text-[1.05rem] outline-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "EUR",
										children: "EUR"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none h-6 w-6 shrink-0 text-primary" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
							label: "Dátum splatnosti",
							required: true,
							htmlFor: "executionDate",
							inline: true,
							error: errors.executionDate,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[1.05rem]",
										children: draft.executionDate === today ? "Čo najskôr" : formatShortDate(draft.executionDate)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										className: "h-7 w-7 text-primary",
										strokeWidth: 1.4
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "executionDate",
										type: "date",
										min: today,
										value: draft.executionDate,
										onChange: (e) => set("executionDate", e.target.value || today),
										className: "absolute inset-0 opacity-0",
										"aria-label": "Dátum splatnosti"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextAreaField, {
							id: "message",
							label: "Informácia pre príjemcu",
							maxLength: 140,
							value: draft.message,
							onChange: (e) => set("message", e.target.value),
							error: errors.message
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Ostatné údaje",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "vs",
							label: "Variabilný symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: draft.variableSymbol,
							onChange: (e) => set("variableSymbol", e.target.value.replace(/\D/g, "")),
							error: errors.variableSymbol
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "ss",
							label: "Špecifický symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: draft.specificSymbol,
							onChange: (e) => set("specificSymbol", e.target.value.replace(/\D/g, "")),
							error: errors.specificSymbol
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "ks",
								label: "Konštantný symbol",
								inputMode: "numeric",
								maxLength: 4,
								value: draft.constantSymbol,
								onChange: (e) => set("constantSymbol", e.target.value.replace(/\D/g, "")),
								error: errors.constantSymbol,
								className: "pr-10"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Číselník konštantných symbolov",
								onClick: () => setKsOpen(true),
								className: "absolute top-[2.1rem] right-5 -translate-y-1/2 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
									className: "h-7 w-7",
									strokeWidth: 1.4
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "ref",
							label: "Referencia platiteľa",
							maxLength: 35,
							value: draft.payerReference,
							onChange: (e) => set("payerReference", e.target.value),
							error: errors.payerReference
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "category",
							label: "Kategória (MaFin)",
							value: draft.category,
							onChange: (e) => set("category", e.target.value),
							options: PAYMENT_CATEGORIES.map((k) => ({
								value: k,
								label: CATEGORIES[k].label
							}))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-canvas px-5 py-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "bank",
					size: "xl",
					children: "Skontrolovať"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientPicker, {
				open: pickerOpen,
				onOpenChange: setPickerOpen,
				recipients,
				templates,
				onPickRecipient: (r) => {
					setDraft((d) => ({
						...d,
						recipientName: r.name,
						iban: formatIban(r.iban)
					}));
					setErrors({});
					setPickerOpen(false);
				},
				onPickTemplate: (t) => {
					setDraft((d) => ({
						...d,
						recipientName: t.recipient_name,
						iban: formatIban(t.iban),
						amount: t.amount ? formatAmount(t.amount).replace(/\s/g, "") : d.amount,
						message: t.message ?? "",
						variableSymbol: t.variable_symbol ?? "",
						specificSymbol: t.specific_symbol ?? "",
						constantSymbol: t.constant_symbol ?? ""
					}));
					setErrors({});
					setPickerOpen(false);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: payerOpen,
				onOpenChange: setPayerOpen,
				title: "Zmeniť platiteľa",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: accounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							set("accountId", a.id);
							setPayerOpen(false);
						},
						className: `bank-field px-5 py-4 text-left ${a.id === draft.accountId ? "ring-2 ring-primary" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex justify-between gap-3 font-bold",
							children: [
								a.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
									value: a.balance,
									sensitive: true
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
							value: a.iban,
							className: "text-sm text-muted-foreground"
						})]
					}, a.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: ksOpen,
				onOpenChange: setKsOpen,
				title: "Konštantný symbol",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col",
					children: CONSTANT_SYMBOLS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							set("constantSymbol", k.code);
							setKsOpen(false);
						},
						className: "flex items-center justify-between gap-4 border-t border-border py-4 text-left first:border-t-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold tabular-nums",
							children: k.code
						})]
					}, k.code))
				})
			})
		]
	});
}
//#endregion
export { PaymentPage as component };
