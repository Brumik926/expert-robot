import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Pencil, l as Star, s as Trash2, y as Send } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as ToggleRow, n as EmptyState, o as UnderlineTabs } from "./rows-Cen7mRph.mjs";
import { a as TextField, n as SearchField } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { M as updateTemplate, a as createTemplate, k as updateRecipient, l as deleteTemplate, n as createRecipient, s as deleteRecipient } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { o as qk, p as useBankMutation, s as recipientsQuery, u as templatesQuery } from "./use-bank-BzaercXi.mjs";
import { n as formatAmount } from "./format-TV6Q3ifl.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
import { i as normalizeIban, t as formatIban } from "./iban-XZadvt3S.mjs";
import { t as Iban } from "./Iban-BgJVlcae.mjs";
import { t as RecipientAvatar } from "./Avatar-BnlpHRpY.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogFooter, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog } from "./alert-dialog-Dsp9oAtd.mjs";
import { t as Route } from "./prijemcovia-BsgaA0KQ.mjs";
import { a as zodErrors, i as templateSchema, n as recipientSchema } from "./forms-BrqDGFra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prijemcovia-C2go5bl2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyRecipient = {
	name: "",
	iban: "",
	note: "",
	is_favorite: false
};
var emptyTemplate = {
	name: "",
	recipient_name: "",
	iban: "",
	amount: "",
	variable_symbol: "",
	specific_symbol: "",
	constant_symbol: "",
	message: ""
};
function RecipientsPage() {
	const search = Route.useSearch();
	const navigate = useNavigate({ from: "/prijemcovia" });
	const tab = search.tab ?? "vsetky";
	const { data: recipients } = useSuspenseQuery(recipientsQuery);
	const { data: templates } = useSuspenseQuery(templatesQuery);
	const [q, setQ] = (0, import_react.useState)("");
	const [actionsFor, setActionsFor] = (0, import_react.useState)(null);
	const [rDraft, setRDraft] = (0, import_react.useState)(null);
	const [tDraft, setTDraft] = (0, import_react.useState)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(null);
	const saveR = useBankMutation(async (d) => {
		const parsed = recipientSchema.parse(d);
		if (d.id) await updateRecipient(d.id, parsed);
		else await createRecipient(parsed);
	}, [qk.recipients]);
	const saveT = useBankMutation(async (d) => {
		const parsed = templateSchema.parse(d);
		if (d.id) await updateTemplate(d.id, parsed);
		else await createTemplate(parsed);
	}, [qk.templates]);
	const removeR = useBankMutation((id) => deleteRecipient(id), [qk.recipients]);
	const removeT = useBankMutation((id) => deleteTemplate(id), [qk.templates]);
	const toggleFav = useBankMutation((r) => updateRecipient(r.id, { is_favorite: !r.is_favorite }), [qk.recipients]);
	const s = q.trim().toLowerCase();
	const qIban = normalizeIban(q);
	const rs = (0, import_react.useMemo)(() => recipients.filter((r) => !s || r.name.toLowerCase().includes(s) || qIban.length > 2 && r.iban.includes(qIban)), [
		recipients,
		s,
		qIban
	]);
	const ts = (0, import_react.useMemo)(() => templates.filter((t) => !s || t.name.toLowerCase().includes(s) || t.recipient_name.toLowerCase().includes(s) || qIban.length > 2 && t.iban.includes(qIban)), [
		templates,
		s,
		qIban
	]);
	function submitRecipient(e) {
		e.preventDefault();
		if (!rDraft) return;
		const parsed = recipientSchema.safeParse(rDraft);
		if (!parsed.success) return setErrors(zodErrors(parsed.error));
		saveR.mutate(rDraft, {
			onSuccess: () => {
				toast.success(rDraft.id ? "Príjemca upravený" : "Príjemca pridaný");
				setRDraft(null);
			},
			onError: (err) => toast.error(bankErrorMessage(err))
		});
	}
	function submitTemplate(e) {
		e.preventDefault();
		if (!tDraft) return;
		const parsed = templateSchema.safeParse(tDraft);
		if (!parsed.success) return setErrors(zodErrors(parsed.error));
		saveT.mutate(tDraft, {
			onSuccess: () => {
				toast.success(tDraft.id ? "Šablóna upravená" : "Šablóna uložená");
				setTDraft(null);
			},
			onError: (err) => toast.error(bankErrorMessage(err))
		});
	}
	const showR = tab !== "sablony";
	const showT = tab !== "prijemcovia";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-canvas animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Príjemcovia",
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
							value: "vsetky",
							label: "Všetky"
						},
						{
							value: "prijemcovia",
							label: "Príjemcovia"
						},
						{
							value: "sablony",
							label: "Šablóny"
						}
					],
					value: tab,
					onChange: (v) => navigate({
						search: { tab: v },
						replace: true
					})
				})
			}),
			showR ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-sm tracking-wide text-muted-foreground uppercase",
						children: [
							"Príjemcovia (",
							rs.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-link",
						onClick: () => {
							setErrors({});
							setRDraft({ ...emptyRecipient });
						},
						children: "Pridať príjemcu"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [rs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: q ? "Žiadny príjemca nezodpovedá hľadaniu." : "Zatiaľ nemáte uložených príjemcov." }) : null, rs.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActionsFor({
							kind: "r",
							item: r
						}),
						className: "bank-tile flex items-center gap-4 px-5 py-4 text-left transition-transform active:scale-[0.99]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-lg font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: r.name
								}), r.is_favorite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 shrink-0 fill-warning text-warning" }) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, {
								value: r.iban,
								className: "block truncate text-[0.95rem] text-muted-foreground"
							})]
						})]
					}, r.id))]
				})]
			}) : null,
			showT ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 pt-6 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-sm tracking-wide text-muted-foreground uppercase",
						children: [
							"Šablóny (",
							ts.length,
							")"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "font-medium text-link",
						onClick: () => {
							setErrors({});
							setTDraft({ ...emptyTemplate });
						},
						children: "Pridať šablónu"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [ts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: q ? "Žiadna šablóna nezodpovedá hľadaniu." : "Zatiaľ nemáte žiadne šablóny." }) : null, ts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActionsFor({
							kind: "t",
							item: t
						}),
						className: "bank-tile flex items-center gap-4 px-5 py-4 text-left transition-transform active:scale-[0.99]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipientAvatar, { name: t.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-lg font-bold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block truncate text-[0.95rem] text-muted-foreground",
									children: [
										t.recipient_name,
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iban, { value: t.iban })
									]
								})]
							}),
							t.amount ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
								value: t.amount,
								className: "shrink-0 font-semibold"
							}) : null
						]
					}, t.id))]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: !!actionsFor,
				onOpenChange: (v) => !v && setActionsFor(null),
				title: actionsFor?.item.name ?? "",
				children: actionsFor ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "bank",
							size: "xl",
							onClick: () => {
								const a = actionsFor;
								setActionsFor(null);
								navigate({
									to: "/platba",
									search: a.kind === "r" ? { recipientId: a.item.id } : { templateId: a.item.id }
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {}), " Zaplatiť"]
						}),
						actionsFor.kind === "r" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "bankOutline",
							size: "xl",
							disabled: toggleFav.isPending,
							onClick: () => {
								const r = actionsFor.item;
								toggleFav.mutate(r, {
									onSuccess: () => {
										toast.success(r.is_favorite ? "Odstránené z rýchlej platby" : "Pridané do rýchlej platby");
										setActionsFor(null);
									},
									onError: (err) => toast.error(bankErrorMessage(err))
								});
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {}),
								" ",
								actionsFor.item.is_favorite ? "Odobrať z rýchlej platby" : "Pridať do rýchlej platby"
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "bankGhost",
							size: "xl",
							onClick: () => {
								setErrors({});
								if (actionsFor.kind === "r") {
									const r = actionsFor.item;
									setRDraft({
										id: r.id,
										name: r.name,
										iban: formatIban(r.iban),
										note: r.note ?? "",
										is_favorite: r.is_favorite
									});
								} else {
									const t = actionsFor.item;
									setTDraft({
										id: t.id,
										name: t.name,
										recipient_name: t.recipient_name,
										iban: formatIban(t.iban),
										amount: t.amount ? formatAmount(t.amount).replace(/\s/g, "") : "",
										variable_symbol: t.variable_symbol ?? "",
										specific_symbol: t.specific_symbol ?? "",
										constant_symbol: t.constant_symbol ?? "",
										message: t.message ?? ""
									});
								}
								setActionsFor(null);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {}), " Upraviť"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "bankDanger",
							size: "xl",
							onClick: () => {
								setConfirmDelete({
									kind: actionsFor.kind,
									id: actionsFor.item.id,
									name: actionsFor.item.name
								});
								setActionsFor(null);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), " Odstrániť"]
						})
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: !!rDraft,
				onOpenChange: (v) => !v && setRDraft(null),
				title: rDraft?.id ? "Upraviť príjemcu" : "Pridať príjemcu",
				children: rDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submitRecipient,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "r-name",
							label: "Názov príjemcu",
							required: true,
							maxLength: 70,
							value: rDraft.name,
							onChange: (e) => setRDraft({
								...rDraft,
								name: e.target.value
							}),
							error: errors["name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "r-iban",
							label: "IBAN",
							required: true,
							autoCapitalize: "characters",
							value: rDraft.iban,
							onChange: (e) => setRDraft({
								...rDraft,
								iban: e.target.value.toUpperCase()
							}),
							onBlur: () => setRDraft({
								...rDraft,
								iban: formatIban(rDraft.iban)
							}),
							error: errors["iban"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "r-note",
							label: "Poznámka",
							maxLength: 140,
							value: rDraft.note,
							onChange: (e) => setRDraft({
								...rDraft,
								note: e.target.value
							}),
							error: errors["note"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
							id: "r-fav",
							label: "Rýchla platba",
							description: "Zobraziť na domovskej obrazovke",
							checked: rDraft.is_favorite,
							onCheckedChange: (v) => setRDraft({
								...rDraft,
								is_favorite: v
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: saveR.isPending,
							children: saveR.isPending ? "Ukladám…" : "Uložiť príjemcu"
						})
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: !!tDraft,
				onOpenChange: (v) => !v && setTDraft(null),
				title: tDraft?.id ? "Upraviť šablónu" : "Nová šablóna",
				children: tDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submitTemplate,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-name",
							label: "Názov šablóny",
							required: true,
							maxLength: 60,
							value: tDraft.name,
							onChange: (e) => setTDraft({
								...tDraft,
								name: e.target.value
							}),
							error: errors["name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-rname",
							label: "Názov príjemcu",
							required: true,
							maxLength: 70,
							value: tDraft.recipient_name,
							onChange: (e) => setTDraft({
								...tDraft,
								recipient_name: e.target.value
							}),
							error: errors["recipient_name"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-iban",
							label: "IBAN",
							required: true,
							autoCapitalize: "characters",
							value: tDraft.iban,
							onChange: (e) => setTDraft({
								...tDraft,
								iban: e.target.value.toUpperCase()
							}),
							onBlur: () => setTDraft({
								...tDraft,
								iban: formatIban(tDraft.iban)
							}),
							error: errors["iban"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-amount",
							label: "Suma (EUR)",
							inputMode: "decimal",
							placeholder: "0,00",
							value: tDraft.amount,
							onChange: (e) => setTDraft({
								...tDraft,
								amount: e.target.value
							}),
							error: errors["amount"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-vs",
							label: "Variabilný symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: tDraft.variable_symbol,
							onChange: (e) => setTDraft({
								...tDraft,
								variable_symbol: e.target.value.replace(/\D/g, "")
							}),
							error: errors["variable_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-ss",
							label: "Špecifický symbol",
							inputMode: "numeric",
							maxLength: 10,
							value: tDraft.specific_symbol,
							onChange: (e) => setTDraft({
								...tDraft,
								specific_symbol: e.target.value.replace(/\D/g, "")
							}),
							error: errors["specific_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-ks",
							label: "Konštantný symbol",
							inputMode: "numeric",
							maxLength: 4,
							value: tDraft.constant_symbol,
							onChange: (e) => setTDraft({
								...tDraft,
								constant_symbol: e.target.value.replace(/\D/g, "")
							}),
							error: errors["constant_symbol"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "t-msg",
							label: "Informácia pre príjemcu",
							maxLength: 140,
							value: tDraft.message,
							onChange: (e) => setTDraft({
								...tDraft,
								message: e.target.value
							}),
							error: errors["message"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: saveT.isPending,
							children: saveT.isPending ? "Ukladám…" : "Uložiť šablónu"
						})
					]
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
				open: !!confirmDelete,
				onOpenChange: (v) => !v && setConfirmDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
					className: "bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogTitle, { children: [
						"Odstrániť „",
						confirmDelete?.name,
						"“?"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "Táto akcia sa nedá vrátiť späť." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Zrušiť" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
						onClick: () => {
							if (!confirmDelete) return;
							(confirmDelete.kind === "r" ? removeR : removeT).mutate(confirmDelete.id, {
								onSuccess: () => toast.success("Odstránené"),
								onError: (err) => toast.error(bankErrorMessage(err))
							});
							setConfirmDelete(null);
						},
						children: "Odstrániť"
					})] })]
				})
			})
		]
	});
}
//#endregion
export { RecipientsPage as component };
