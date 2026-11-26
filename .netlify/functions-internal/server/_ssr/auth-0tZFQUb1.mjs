import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./auth-qVIsxgE4.mjs";
import { P as MailCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as TatraMark } from "./Logo-Cb0FUsJR.mjs";
import { o as UnderlineTabs } from "./rows-Cen7mRph.mjs";
import { a as TextField } from "./fields-BZ6j3Yt0.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-0tZFQUb1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var loginSchema = objectType({
	email: stringType().trim().email("Zadajte platný e-mail").max(255),
	password: stringType().min(6, "Heslo musí mať aspoň 6 znakov").max(72)
});
var registerSchema = loginSchema.extend({ fullName: stringType().trim().min(2, "Zadajte meno a priezvisko").max(100) });
function AuthPage() {
	const search = Route.useSearch();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)(search.mode ?? "login");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sentTo, setSentTo] = (0, import_react.useState)(null);
	async function submit(e) {
		e.preventDefault();
		if (busy) return;
		setErrors({});
		if (mode === "forgot") {
			const parsed = stringType().trim().email("Zadajte platný e-mail").safeParse(email);
			if (!parsed.success) return setErrors({ email: parsed.error.issues[0]?.message ?? "" });
			setBusy(true);
			try {
				const { error } = await supabase.auth.resetPasswordForEmail(parsed.data, { redirectTo: `${window.location.origin}/reset-password` });
				if (error) return toast.error(bankErrorMessage(error));
				setSentTo({
					email: parsed.data,
					kind: "reset"
				});
			} catch (err) {
				toast.error(bankErrorMessage(err));
			} finally {
				setBusy(false);
			}
			return;
		}
		const parsed = (mode === "register" ? registerSchema : loginSchema).safeParse({
			email,
			password,
			fullName
		});
		if (!parsed.success) {
			const errs = {};
			for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
			return setErrors(errs);
		}
		setBusy(true);
		try {
			if (mode === "register") {
				const { data, error } = await supabase.auth.signUp({
					email: parsed.data.email,
					password: parsed.data.password,
					options: {
						emailRedirectTo: `${window.location.origin}/auth?mode=login`,
						data: { full_name: fullName.trim() }
					}
				});
				if (error) return toast.error(bankErrorMessage(error));
				if (data.user && data.user.identities?.length === 0) return toast.error("Používateľ s týmto e-mailom už existuje.");
				if (data.session) return navigate({
					to: "/domov",
					replace: true
				});
				setSentTo({
					email: parsed.data.email,
					kind: "confirm"
				});
				return;
			}
			const { error } = await supabase.auth.signInWithPassword({
				email: parsed.data.email,
				password: parsed.data.password
			});
			if (error) return toast.error(bankErrorMessage(error));
			navigate({
				to: search.redirect ?? "/domov",
				replace: true
			});
		} catch (err) {
			toast.error(bankErrorMessage(err));
		} finally {
			setBusy(false);
		}
	}
	if (sentTo) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: sentTo.kind === "confirm" ? "Potvrďte e-mail" : "Obnova hesla",
			back: "/"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center px-6 pt-12 text-center animate-page-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-20 w-20 place-items-center rounded-full bg-accent text-primary animate-pop-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MailCheck, {
						className: "h-10 w-10",
						strokeWidth: 1.5
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 text-2xl font-extrabold",
					children: "Skontrolujte svoju schránku"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						sentTo.kind === "confirm" ? "Na adresu " : "Odkaz na nastavenie nového hesla sme poslali na ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: sentTo.email
						}),
						sentTo.kind === "confirm" ? " sme poslali odkaz na potvrdenie registrácie. Po potvrdení sa môžete prihlásiť." : "."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "bank",
					size: "xl",
					className: "mt-10",
					onClick: () => {
						setSentTo(null);
						setMode("login");
					},
					children: "Späť na prihlásenie"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: mode === "forgot" ? "Zabudnuté heslo" : mode === "register" ? "Registrácia" : "Prihlásenie",
				back: "/"
			}),
			mode !== "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderlineTabs, {
				tabs: [{
					value: "login",
					label: "Prihlásiť sa"
				}, {
					value: "register",
					label: "Nový klient"
				}],
				value: mode,
				onChange: (v) => {
					setMode(v);
					setErrors({});
				}
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				noValidate: true,
				className: "flex flex-1 flex-col gap-4 px-5 pt-8 pb-8 animate-page-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TatraMark, { className: "h-8 w-8 text-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: mode === "register" ? "Vytvorte si účet." : mode === "forgot" ? "Pošleme vám odkaz na nastavenie nového hesla." : "Prihláste sa svojím e-mailom a heslom."
						})]
					}),
					mode === "register" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "fullName",
						label: "Meno a priezvisko",
						required: true,
						autoComplete: "name",
						value: fullName,
						onChange: (e) => setFullName(e.target.value),
						error: errors["fullName"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "email",
						label: "E-mail",
						type: "email",
						required: true,
						autoComplete: "email",
						inputMode: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						error: errors["email"]
					}),
					mode !== "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
						id: "password",
						label: "Heslo",
						type: "password",
						required: true,
						autoComplete: mode === "register" ? "new-password" : "current-password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						error: errors["password"]
					}) : null,
					mode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode("forgot"),
						className: "self-end text-[0.95rem] font-medium text-link",
						children: "Zabudli ste heslo?"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto flex flex-col gap-3 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "bank",
								size: "xl",
								disabled: busy,
								children: busy ? "Prosím čakajte…" : mode === "register" ? "Vytvoriť účet" : mode === "forgot" ? "Poslať odkaz" : "Prihlásiť sa"
							}),
							mode === "forgot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "bankOutline",
								size: "xl",
								onClick: () => setMode("login"),
								children: "Späť na prihlásenie"
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/kontakty",
									className: "text-link",
									children: "Pomoc"
								})
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { AuthPage as component };
