import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as TextField } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-B8lzuBqE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPassword() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)();
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [recovery, setRecovery] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.location.hash.includes("type=recovery")) setRecovery(true);
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event === "PASSWORD_RECOVERY") setRecovery(true);
		});
		return () => data.subscription.unsubscribe();
	}, []);
	async function submit(e) {
		e.preventDefault();
		if (password.length < 6) return setError("Heslo musí mať aspoň 6 znakov");
		if (password !== confirm) return setError("Heslá sa nezhodujú");
		setError(void 0);
		setBusy(true);
		const { error: err } = await supabase.auth.updateUser({ password });
		setBusy(false);
		if (err) return toast.error(bankErrorMessage(err));
		toast.success("Heslo bolo zmenené");
		navigate({
			to: "/domov",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Nové heslo",
			back: "/auth"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "flex flex-col gap-4 px-5 pt-6",
			children: [
				!recovery ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Otvorte túto stránku cez odkaz z e-mailu na obnovu hesla."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "pw",
					label: "Nové heslo",
					type: "password",
					autoComplete: "new-password",
					value: password,
					onChange: (e) => setPassword(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
					id: "pw2",
					label: "Zopakujte heslo",
					type: "password",
					autoComplete: "new-password",
					value: confirm,
					onChange: (e) => setConfirm(e.target.value),
					error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "bank",
					size: "xl",
					disabled: busy || !recovery,
					className: "mt-4",
					children: busy ? "Ukladám…" : "Uložiť heslo"
				})
			]
		})]
	});
}
//#endregion
export { ResetPassword as component };
