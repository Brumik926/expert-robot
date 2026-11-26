import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { F as LogOut } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as ToggleRow, r as NavRow, t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField, t as FieldShell } from "./fields-BZ6j3Yt0.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as updateSettings, O as updateProfile } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { a as profileQuery, c as settingsQuery, o as qk, p as useBankMutation } from "./use-bank-BzaercXi.mjs";
import { a as formatShortDate } from "./format-TV6Q3ifl.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { t as useSignOut } from "./use-sign-out-B_4Hu2lz.mjs";
import { a as zodErrors } from "./forms-BrqDGFra.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profil-BYTNmN1O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var personalSchema = objectType({
	full_name: stringType().trim().min(2, "Zadajte meno a priezvisko").max(100),
	birth_date: stringType().transform((v) => v ? v : null).refine((v) => v === null || /^\d{4}-\d{2}-\d{2}$/.test(v) && v < (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "Neplatný dátum narodenia")
});
var contactSchema = objectType({ phone: stringType().trim().transform((v) => v ? v : null).refine((v) => v === null || /^\+?[0-9 ]{6,20}$/.test(v), "Zadajte platné telefónne číslo") });
var addressSchema = objectType({
	street: stringType().trim().max(120).transform((v) => v ? v : null),
	city: stringType().trim().max(80).transform((v) => v ? v : null),
	zip: stringType().trim().transform((v) => v ? v : null).refine((v) => v === null || /^\d{3}\s?\d{2}$/.test(v), "PSČ má tvar 040 01")
});
function ProfilePage() {
	const { data: profile } = useSuspenseQuery(profileQuery);
	const { data: settings } = useSuspenseQuery(settingsQuery);
	const signOut = useSignOut();
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const save = useBankMutation((p) => updateProfile(p), [qk.profile]);
	const marketing = useBankMutation((v) => updateSettings({ notify_marketing: v }), [qk.settings]);
	function open(s) {
		setErrors({});
		setForm({
			full_name: profile.full_name,
			birth_date: profile.birth_date ?? "",
			phone: profile.phone ?? "",
			street: profile.street ?? "",
			city: profile.city ?? "",
			zip: profile.zip ?? "",
			current: "",
			next: "",
			confirm: ""
		});
		setSheet(s);
	}
	function submit(e) {
		e.preventDefault();
		const parsed = (sheet === "personal" ? personalSchema : sheet === "contact" ? contactSchema : addressSchema).safeParse(form);
		if (!parsed.success) return setErrors(zodErrors(parsed.error));
		save.mutate(parsed.data, {
			onSuccess: () => {
				toast.success("Údaje boli uložené");
				setSheet(null);
			},
			onError: (err) => toast.error(bankErrorMessage(err))
		});
	}
	async function changePassword(e) {
		e.preventDefault();
		const next = form["next"] ?? "";
		if ((form["current"] ?? "").length < 1) return setErrors({ current: "Zadajte súčasné heslo" });
		if (next.length < 6) return setErrors({ next: "Nové heslo musí mať aspoň 6 znakov" });
		if (next !== form["confirm"]) return setErrors({ confirm: "Heslá sa nezhodujú" });
		setBusy(true);
		try {
			const email = profile.email ?? "";
			const { error: verifyErr } = await supabase.auth.signInWithPassword({
				email,
				password: form["current"] ?? ""
			});
			if (verifyErr) {
				setErrors({ current: "Súčasné heslo nie je správne" });
				return;
			}
			const { error } = await supabase.auth.updateUser({ password: next });
			if (error) throw error;
			toast.success("Heslo bolo zmenené");
			setSheet(null);
		} catch (err) {
			toast.error(bankErrorMessage(err));
		} finally {
			setBusy(false);
		}
	}
	const f = (k) => ({
		value: form[k] ?? "",
		onChange: (e) => setForm({
			...form,
			[k]: e.target.value
		}),
		error: errors[k]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 px-5 pb-6 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Profil",
				back: true,
				className: "-mx-5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-background px-5 shadow-tile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "border-b border-border py-5 text-xl font-bold",
						children: profile.full_name || "Klient"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						className: "border-t-0",
						label: "Klientske číslo (PID)",
						value: profile.client_number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "E-mail",
						value: profile.email ?? "—"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-background px-5 shadow-tile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "border-b border-border py-5 text-xl font-bold",
						children: "Osobné a klientske údaje"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						label: "Osobné údaje",
						description: profile.birth_date ? `Narodený/á ${formatShortDate(profile.birth_date)}` : "Meno a dátum narodenia",
						onClick: () => open("personal"),
						className: "border-b border-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						label: "Kontaktné údaje",
						description: profile.phone ?? "Telefónne číslo",
						onClick: () => open("contact"),
						className: "border-b border-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						label: "Adresa",
						description: [
							profile.street,
							profile.zip,
							profile.city
						].filter(Boolean).join(", ") || "Trvalý pobyt",
						onClick: () => open("address"),
						className: "border-b border-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						label: "Zmena hesla",
						onClick: () => open("password")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-background px-5 shadow-tile",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "border-b border-border py-5 text-xl font-bold",
					children: "Povolenia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					id: "marketing",
					label: "Marketingové notifikácie",
					description: "Ponuky a novinky Tatra banky",
					checked: settings.notify_marketing,
					disabled: marketing.isPending,
					onCheckedChange: (v) => marketing.mutate(v, {
						onSuccess: () => toast.success("Uložené"),
						onError: (e) => toast.error(bankErrorMessage(e))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "bankDanger",
				size: "xl",
				className: "mt-3",
				onClick: signOut,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), " Odhlásiť sa"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: sheet !== null && sheet !== "password",
				onOpenChange: (v) => !v && setSheet(null),
				title: sheet === "personal" ? "Osobné údaje" : sheet === "contact" ? "Kontaktné údaje" : "Adresa",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						sheet === "personal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "p-name",
							label: "Meno a priezvisko",
							maxLength: 100,
							...f("full_name")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
							label: "Dátum narodenia",
							htmlFor: "p-birth",
							error: errors["birth_date"],
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "p-birth",
								type: "date",
								value: form["birth_date"] ?? "",
								onChange: (e) => setForm({
									...form,
									birth_date: e.target.value
								}),
								className: "relative w-full bg-transparent text-[1.05rem] outline-none"
							})
						})] }) : null,
						sheet === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "p-phone",
							label: "Telefón",
							type: "tel",
							autoComplete: "tel",
							placeholder: "+421 900 000 000",
							...f("phone")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								"E-mail ",
								profile.email,
								" slúži na prihlásenie a nedá sa tu zmeniť."
							]
						})] }) : null,
						sheet === "address" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "p-street",
								label: "Ulica a číslo",
								maxLength: 120,
								autoComplete: "street-address",
								...f("street")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "p-city",
								label: "Mesto",
								maxLength: 80,
								autoComplete: "address-level2",
								...f("city")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
								id: "p-zip",
								label: "PSČ",
								maxLength: 6,
								inputMode: "numeric",
								autoComplete: "postal-code",
								...f("zip")
							})
						] }) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: save.isPending,
							children: save.isPending ? "Ukladám…" : "Uložiť"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: sheet === "password",
				onOpenChange: (v) => !v && setSheet(null),
				title: "Zmena hesla",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: changePassword,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "pw-cur",
							label: "Súčasné heslo",
							type: "password",
							autoComplete: "current-password",
							...f("current")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "pw-new",
							label: "Nové heslo",
							type: "password",
							autoComplete: "new-password",
							...f("next")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "pw-conf",
							label: "Zopakujte nové heslo",
							type: "password",
							autoComplete: "new-password",
							...f("confirm")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: busy,
							children: busy ? "Mením…" : "Zmeniť heslo"
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ProfilePage as component };
