import { i as __toESM } from "../_runtime.mjs";
import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as PhoneIncoming, N as Mail, T as Phone, lt as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { t as DetailRow } from "./rows-Cen7mRph.mjs";
import { a as TextField, r as SelectField, t as FieldShell } from "./fields-BZ6j3Yt0.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as createSupportRequest } from "./bank-CoEeU7CF.mjs";
import { t as BottomSheet } from "./BottomSheet-B5y4qRWp.mjs";
import { t as useSession } from "./use-session-BfbEnxdT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakty-B1Q9tegJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PHONE = "0800 123 456";
function Contacts() {
	const { session } = useSession();
	const [kind, setKind] = (0, import_react.useState)(null);
	const [phone, setPhone] = (0, import_react.useState)("");
	const [when, setWhen] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("ine");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		if (!kind) return;
		if (!/^\+?[0-9 ]{6,20}$/.test(phone.trim())) return void toast.error("Zadajte platné telefónne číslo");
		const at = new Date(when);
		if (!when || Number.isNaN(at.getTime()) || at < /* @__PURE__ */ new Date()) return void toast.error("Zvoľte budúci termín");
		setBusy(true);
		try {
			await createSupportRequest({
				kind,
				phone: phone.trim(),
				preferred_at: at.toISOString(),
				topic
			});
			toast.success(kind === "callback" ? "Zavoláme vám v zvolenom čase" : "Stretnutie sme zaznamenali");
			setKind(null);
		} catch (err) {
			toast.error(bankErrorMessage(err));
		} finally {
			setBusy(false);
		}
	}
	const tile = "flex flex-col items-center gap-2 text-center text-sm";
	const box = "grid aspect-square w-full place-items-center rounded-2xl bg-background text-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-md flex-col bg-canvas",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Kontakt",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid grid-cols-4 gap-3 px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE.replace(/\s/g, "")}`,
						className: tile,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: box,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-8 w-8",
								strokeWidth: 1.4
							})
						}), "Zavolať"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: tile,
						onClick: () => setKind("callback"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: box,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIncoming, {
								className: "h-8 w-8",
								strokeWidth: 1.4
							})
						}), "Zavolajte mi"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: tile,
						onClick: () => setKind("meeting"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: box,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
								className: "h-8 w-8",
								strokeWidth: 1.4
							})
						}), "Dohodnúť stretnutie"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:podpora@tatrabanka.example",
						className: tile,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: box,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "h-8 w-8",
								strokeWidth: 1.4
							})
						}), "Napísať e-mail"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bank-section",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-[1.45rem] font-extrabold",
						children: "Kontakt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Infolinka",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE.replace(/\s/g, "")}`,
							children: PHONE
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "Zo zahraničia",
						value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+421200000000",
							children: "+421 2 0000 0000"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, {
						label: "E-mail",
						value: "podpora@tatrabanka.example"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "Všetky kontakty sú k dispozícii 24/7. V prípade otázok nás neváhajte kontaktovať."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomSheet, {
				open: kind !== null,
				onOpenChange: (v) => !v && setKind(null),
				title: kind === "meeting" ? "Dohodnúť stretnutie" : "Zavolajte mi",
				children: session ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							id: "sr-phone",
							label: "Telefón",
							type: "tel",
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: "+421 900 000 000"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldShell, {
							label: "Termín",
							htmlFor: "sr-when",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "sr-when",
								type: "datetime-local",
								value: when,
								onChange: (e) => setWhen(e.target.value),
								className: "relative w-full bg-transparent text-[1.05rem] outline-none"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "sr-topic",
							label: "Téma",
							value: topic,
							onChange: (e) => setTopic(e.target.value),
							options: [
								{
									value: "ucty",
									label: "Účty"
								},
								{
									value: "karty",
									label: "Karty"
								},
								{
									value: "platby",
									label: "Platby"
								},
								{
									value: "uvery",
									label: "Úvery"
								},
								{
									value: "ine",
									label: "Iné"
								}
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							variant: "bank",
							size: "xl",
							disabled: busy,
							children: busy ? "Odosielam…" : "Odoslať žiadosť"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Na odoslanie žiadosti sa prihláste."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "bank",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							search: {
								mode: "login",
								redirect: "/kontakty"
							},
							children: "Prihlásiť sa"
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { Contacts as component };
