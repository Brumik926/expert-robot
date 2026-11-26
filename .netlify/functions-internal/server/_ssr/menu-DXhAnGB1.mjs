import { i as __toESM } from "../_runtime.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { F as LogOut, G as CreditCard, I as Lock, M as MapPin, T as Phone, at as ChartPie, dt as Building, g as ShieldAlert, ht as Bell, n as Users, nt as ChevronDown, ot as ChartLine, pt as Briefcase, r as User, st as ChartColumn, v as Settings, w as PiggyBank } from "../_libs/lucide-react.mjs";
import { r as NavRow } from "./rows-Cen7mRph.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as profileQuery, i as notificationsQuery } from "./use-bank-BzaercXi.mjs";
import { t as useSignOut } from "./use-sign-out-B_4Hu2lz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-DXhAnGB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Group({ icon, label, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
			icon,
			label,
			onClick: () => setOpen(!open),
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-6 w-6 text-primary transition-transform ${open ? "rotate-180" : ""}` })
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pb-2 pl-14",
			children
		}) : null]
	});
}
function MenuPage() {
	const { data: profile } = useQuery(profileQuery);
	const { data: notifications } = useQuery(notificationsQuery);
	const unread = notifications?.filter((n) => !n.is_read).length ?? 0;
	const signOut = useSignOut();
	const ic = "h-7 w-7";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background animate-page-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-30 grid grid-cols-3 items-center bg-background px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-center text-[1.6rem] font-extrabold",
					children: "Menu"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: signOut,
					className: "justify-self-end font-medium text-link",
					children: "Odhlásiť sa"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: profile?.full_name || "Profil",
					description: "Profil",
					to: "/profil",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: unread ? `Notifikácie (${unread})` : "Notifikácie",
					to: "/notifikacie",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Kontakty",
					to: "/kontakty",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Účty a platby",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Pohyby",
							to: "/pohyby"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Nová platba",
							to: "/platba"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Príjemcovia",
							to: "/prijemcovia"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Šablóny",
							to: "/sablony"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Trvalé príkazy",
							to: "/trvale-prikazy"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Karty",
					to: "/karty",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPie, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "MaFin",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
						label: "Prehľad príjmov a výdavkov",
						to: "/mafin"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Kurzový lístok",
					to: "/kurzy",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Nastavenia",
					to: "/nastavenia",
					className: "border-b border-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Ponuky",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Osobné financie",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Firemné financie",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Podnikateľské účty",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Parovanie platieb",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Termínované vklady",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Financovanie",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Kreditné karty",
							to: "/karty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Poistenia",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Platobné nástroje",
							to: "/kurzy"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Moja firma",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Osobné účty",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Úvery",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Šetrenia a vklady",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Kreditné karty",
							to: "/karty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Poistenia",
							to: "/kurzy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
							label: "Investície",
							to: "/kurzy"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Úvery",
					to: "/kurzy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Služby pre podnikateľov",
					to: "/kurzy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PiggyBank, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "DDS dôchodok",
					to: "/kurzy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Rodičovská záma",
					to: "/kurzy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Poistné produkty",
					to: "/kurzy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavRow, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
						className: ic,
						strokeWidth: 1.4
					}),
					label: "Odhlásiť sa",
					onClick: signOut
				})
			]
		})]
	});
}
//#endregion
export { MenuPage as component };
