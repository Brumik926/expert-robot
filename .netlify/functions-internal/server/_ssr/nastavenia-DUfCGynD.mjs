import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as LogOut, O as Moon, c as Sun, d as Smartphone, r as User } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { a as ToggleRow, r as NavRow } from "./rows-Cen7mRph.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as updateSettings } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { c as settingsQuery, o as qk, p as useBankMutation } from "./use-bank-BzaercXi.mjs";
import { t as Section } from "./Section-DbgEJg-W.mjs";
import { n as NAV_CHOICES } from "./BottomNav-BZkLyty9.mjs";
import { t as useSignOut } from "./use-sign-out-B_4Hu2lz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nastavenia-DUfCGynD.js
var import_jsx_runtime = require_jsx_runtime();
var THEMES = [
	{
		value: "dark",
		label: "Tmavý",
		icon: Moon
	},
	{
		value: "light",
		label: "Svetlý",
		icon: Sun
	},
	{
		value: "system",
		label: "Podľa systému",
		icon: Smartphone
	}
];
function SettingsPage() {
	const { data: s } = useSuspenseQuery(settingsQuery);
	const signOut = useSignOut();
	const save = useBankMutation((p) => updateSettings(p), [qk.settings]);
	const apply = (p, msg) => save.mutate(p, {
		onSuccess: () => msg && toast.success(msg),
		onError: (e) => toast.error(bankErrorMessage(e))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 animate-page-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Nastavenia",
				back: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Vzhľad",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "radiogroup",
					"aria-label": "Téma",
					className: "grid grid-cols-3 gap-3",
					children: THEMES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "radio",
						"aria-checked": s.theme === t.value,
						onClick: () => apply({ theme: t.value }),
						className: cn("bank-field flex flex-col items-center gap-2 px-2 py-4 text-sm font-semibold transition-colors", s.theme === t.value ? "ring-2 ring-primary" : "hover:bg-muted"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, {
							className: "h-7 w-7 text-primary",
							strokeWidth: 1.5
						}), t.label]
					}, t.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Súkromie",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
					id: "hide",
					label: "Skryť zostatky",
					description: "Sumy na účtoch a kartách sa zobrazia ako •••",
					checked: s.hide_balances,
					onCheckedChange: (v) => apply({ hide_balances: v })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Notifikácie",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "n-pay",
						label: "Platby a trvalé príkazy",
						checked: s.notify_payments,
						onCheckedChange: (v) => apply({ notify_payments: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "n-card",
						label: "Karty a limity",
						checked: s.notify_cards,
						onCheckedChange: (v) => apply({ notify_cards: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "n-mkt",
						label: "Marketingové ponuky",
						checked: s.notify_marketing,
						onCheckedChange: (v) => apply({ notify_marketing: v })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Domovská obrazovka",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "h-cards",
						label: "Karty",
						checked: s.show_cards,
						onCheckedChange: (v) => apply({ show_cards: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "h-sav",
						label: "Sporenia",
						checked: s.show_savings,
						onCheckedChange: (v) => apply({ show_savings: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "h-quick",
						label: "Rýchla platba",
						checked: s.show_quick_payment,
						onCheckedChange: (v) => apply({ show_quick_payment: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "h-spend",
						label: "Prehľad výdavkov",
						checked: s.show_spending,
						onCheckedChange: (v) => apply({ show_spending: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						id: "h-rates",
						label: "Kurzový lístok",
						checked: s.show_rates,
						onCheckedChange: (v) => apply({ show_rates: v })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Položka v spodnom menu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "radiogroup",
					className: "grid grid-cols-2 gap-3",
					children: Object.keys(NAV_CHOICES).map((k) => {
						const c = NAV_CHOICES[k];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "radio",
							"aria-checked": s.nav_item === k,
							onClick: () => apply({ nav_item: k }, `V spodnom menu: ${c.label}`),
							className: cn("bank-field flex items-center gap-3 px-4 py-4 text-left font-semibold", s.nav_item === k ? "ring-2 ring-primary" : "hover:bg-muted"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
									className: "h-6 w-6 text-primary",
									strokeWidth: 1.5
								}),
								" ",
								c.label
							]
						}, k);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Účet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
							className: "h-6 w-6",
							strokeWidth: 1.5
						}),
						label: "Profil a zmena hesla",
						to: "/profil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "bankDanger",
						size: "xl",
						className: "mt-4",
						onClick: signOut,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {}), " Odhlásiť sa"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-xs text-muted-foreground",
						children: [
							"Tatra banka 1.0.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kontakty",
								className: "text-link",
								children: "Podpora"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { SettingsPage as component };
