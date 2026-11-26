import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-C8GIWg2Z.mjs";
import { D as require_react, E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as Button } from "./button-BhQxT9FF.mjs";
import { S as useRouter, Ut as redirect, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$22 } from "./auth-qVIsxgE4.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as profileQuery, c as settingsQuery, f as transactionsQuery, i as notificationsQuery, l as standingOrdersQuery, r as cardsQuery, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
import { t as Route$23 } from "./karty._id-BhTbpASk.mjs";
import { t as Route$24 } from "./platba-DEf8Ewzj.mjs";
import { t as Route$25 } from "./pohyby-LH2gSVGY.mjs";
import { t as Route$26 } from "./prijemcovia-BsgaA0KQ.mjs";
import { t as Route$27 } from "./transakcia._id-Dy5yMoW9.mjs";
import { t as Route$28 } from "./ucet._id-Dr36bxLF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BjUQIt-5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BosZWQ7m.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-canvas px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-extrabold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-bold text-foreground",
					children: "Stránka neexistuje"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Stránku, ktorú hľadáte, sme nenašli."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "bank",
					size: "xl",
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Späť na úvod"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-canvas px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold text-foreground",
					children: "Stránku sa nepodarilo načítať"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Niečo sa pokazilo. Skúste to znova."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "bank",
						size: "xl",
						onClick: () => {
							router.invalidate();
							reset();
						},
						children: "Skúsiť znova"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "bankOutline",
						size: "xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/",
							children: "Späť na úvod"
						})
					})]
				})
			]
		})
	});
}
var themeInit = `(function(){try{var t=localStorage.getItem('tatra-theme')||'dark';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
var Route$21 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#1c1e24"
			},
			{ title: "Tatra banka – mobilné bankovníctvo" },
			{
				name: "description",
				content: "Moderné mobilné bankovníctvo: účty, karty, platby a prehľad výdavkov."
			},
			{
				name: "author",
				content: "Tatra banka"
			},
			{
				property: "og:title",
				content: "Tatra banka – mobilné bankovníctvo"
			},
			{
				property: "og:description",
				content: "Moderné mobilné bankovníctvo: účty, karty, platby a prehľad výdavkov."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		],
		scripts: [{ children: themeInit }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "sk",
		className: "dark",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$21.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			closeButton: true
		})]
	});
}
var $$splitComponentImporter$19 = () => import("./routes-CIwo7_sE.mjs");
var Route$20 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Tatra banka – vitajte v mobilnom bankovníctve" },
		{
			name: "description",
			content: "Prihláste sa do mobilného bankovníctva Tatra banka: účty, karty, platby a prehľad výdavkov."
		},
		{
			property: "og:title",
			content: "Tatra banka – vitajte v mobilnom bankovníctve"
		},
		{
			property: "og:description",
			content: "Moderné mobilné bankovníctvo: účty, karty, platby a prehľad výdavkov."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
/** Brand mark used on the welcome screen: registered sign above the wordmark. */
var $$splitComponentImporter$18 = () => import("./route-BR-18plw.mjs");
var Route$19 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async ({ location }) => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({
			to: "/auth",
			search: {
				mode: "login",
				redirect: location.href
			}
		});
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./kontakty-B1Q9tegJ.mjs");
var Route$18 = createFileRoute("/kontakty")({
	head: () => ({ meta: [
		{ title: "Kontakty a podpora – Tatra banka" },
		{
			name: "description",
			content: "Zavolajte nám, požiadajte o spätné zavolanie alebo si dohodnite stretnutie."
		},
		{
			property: "og:title",
			content: "Kontakty a podpora – Tatra banka"
		},
		{
			property: "og:description",
			content: "Kontakty a podpora Tatra bankyy."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./kurzy-4N6SDK14.mjs");
var Route$17 = createFileRoute("/kurzy")({
	head: () => ({ meta: [
		{ title: "Kurzový lístok – Tatra banka" },
		{
			name: "description",
			content: "Kurzy mien a prepočet z EUR."
		},
		{
			property: "og:title",
			content: "Kurzový lístok – Tatra banka"
		},
		{
			property: "og:description",
			content: "Kurzy mien v Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./reset-password-B8lzuBqE.mjs");
var Route$16 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Nové heslo – Tatra banka" },
		{
			name: "description",
			content: "Nastavte si nové heslo do Tatra banky."
		},
		{
			property: "og:title",
			content: "Nové heslo – Tatra banka"
		},
		{
			property: "og:description",
			content: "Nastavte si nové heslo do Tatra banky."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./dds-74Eh4UOL.mjs");
var Route$15 = createFileRoute("/_authenticated/dds")({
	head: () => ({ meta: [{ title: "DDS dôchodok – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./domov-B2aeQPI2.mjs");
var Route$14 = createFileRoute("/_authenticated/domov")({
	head: () => ({ meta: [
		{ title: "Domov – Tatra banka" },
		{
			name: "description",
			content: "Prehľad účtov, kariet, sporení a výdavkov."
		},
		{
			property: "og:title",
			content: "Domov – Tatra banka"
		},
		{
			property: "og:description",
			content: "Prehľad účtov, kariet, sporení a výdavkov vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => Promise.all([
		queryClient.ensureQueryData(accountsQuery),
		queryClient.ensureQueryData(transactionsQuery),
		queryClient.ensureQueryData(cardsQuery),
		queryClient.ensureQueryData(recipientsQuery),
		queryClient.ensureQueryData(settingsQuery),
		queryClient.ensureQueryData(notificationsQuery),
		queryClient.ensureQueryData(standingOrdersQuery)
	]),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./mafin-DwS0BI4s.mjs");
var Route$13 = createFileRoute("/_authenticated/mafin")({
	head: () => ({ meta: [
		{ title: "MaFin – prehľad príjmov a výdavkov – Tatra banka" },
		{
			name: "description",
			content: "Mesačný prehľad príjmov, výdavkov a kategórií."
		},
		{
			property: "og:title",
			content: "MaFin – Tatra banka"
		},
		{
			property: "og:description",
			content: "Prehľad príjmov a výdavkov vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(transactionsQuery),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./menu-DXhAnGB1.mjs");
var Route$12 = createFileRoute("/_authenticated/menu")({
	head: () => ({ meta: [
		{ title: "Menu – Tatra banka" },
		{
			name: "description",
			content: "Hlavné menu Tatra banky."
		},
		{
			property: "og:title",
			content: "Menu – Tatra banka"
		},
		{
			property: "og:description",
			content: "Hlavné menu Tatra banky."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./moja-firma-KlAGjtG3.mjs");
var Route$11 = createFileRoute("/_authenticated/moja-firma")({
	head: () => ({ meta: [{ title: "Moja firma – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./nastavenia-DUfCGynD.mjs");
var Route$10 = createFileRoute("/_authenticated/nastavenia")({
	head: () => ({ meta: [
		{ title: "Nastavenia – Tatra banka" },
		{
			name: "description",
			content: "Vzhľad aplikácie, súkromie, notifikácie a domovská obrazovka."
		},
		{
			property: "og:title",
			content: "Nastavenia – Tatra banka"
		},
		{
			property: "og:description",
			content: "Nastavenia aplikácie Tatra banka."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(settingsQuery),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./notifikacie-CdfP7d1F.mjs");
var Route$9 = createFileRoute("/_authenticated/notifikacie")({
	head: () => ({ meta: [
		{ title: "Notifikácie – Tatra banka" },
		{
			name: "description",
			content: "Správy o platbách, kartách a bezpečnosti."
		},
		{
			property: "og:title",
			content: "Notifikácie – Tatra banka"
		},
		{
			property: "og:description",
			content: "Správy a upozornenia vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(notificationsQuery),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./poistne-produkty-ynky76pq.mjs");
var Route$8 = createFileRoute("/_authenticated/poistne-produkty")({
	head: () => ({ meta: [{ title: "Poistné produkty – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./ponuky-H4XS4-hW.mjs");
var Route$7 = createFileRoute("/_authenticated/ponuky")({
	head: () => ({ meta: [{ title: "Ponuky – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./profil-BYTNmN1O.mjs");
var Route$6 = createFileRoute("/_authenticated/profil")({
	head: () => ({ meta: [
		{ title: "Profil – Tatra banka" },
		{
			name: "description",
			content: "Osobné a kontaktné údaje, adresa a zmena hesla."
		},
		{
			property: "og:title",
			content: "Profil – Tatra banka"
		},
		{
			property: "og:description",
			content: "Osobný profil klienta Tatra banky."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => Promise.all([queryClient.ensureQueryData(profileQuery), queryClient.ensureQueryData(settingsQuery)]),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./rodicovska-zama-BtQpz917.mjs");
var Route$5 = createFileRoute("/_authenticated/rodicovska-zama")({
	head: () => ({ meta: [{ title: "Rodičovská záma – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var Route$4 = createFileRoute("/_authenticated/sablony")({ beforeLoad: () => {
	throw redirect({
		to: "/prijemcovia",
		search: { tab: "sablony" }
	});
} });
var $$splitComponentImporter$3 = () => import("./sluzby-DiQNiFmF.mjs");
var Route$3 = createFileRoute("/_authenticated/sluzby")({
	head: () => ({ meta: [{ title: "Služby pre podnikateľov – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./trvale-prikazy-DEx4hW9G.mjs");
var Route$2 = createFileRoute("/_authenticated/trvale-prikazy")({
	head: () => ({ meta: [
		{ title: "Trvalé príkazy – Tatra banka" },
		{
			name: "description",
			content: "Pravidelné platby: nájomné, sporenie a ďalšie trvalé príkazy."
		},
		{
			property: "og:title",
			content: "Trvalé príkazy – Tatra banka"
		},
		{
			property: "og:description",
			content: "Správa trvalých príkazov vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => Promise.all([queryClient.ensureQueryData(standingOrdersQuery), queryClient.ensureQueryData(accountsQuery)]),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./uvery-Dgs5IgnO.mjs");
var Route$1 = createFileRoute("/_authenticated/uvery")({
	head: () => ({ meta: [{ title: "Úvery – Tatra banka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./karty.index-BsnwPvVk.mjs");
var Route = createFileRoute("/_authenticated/karty/")({
	head: () => ({ meta: [
		{ title: "Zoznam kariet – Tatra banka" },
		{
			name: "description",
			content: "Debetné a kreditné karty, disponibilné zostatky a nastavenia."
		},
		{
			property: "og:title",
			content: "Zoznam kariet – Tatra banka"
		},
		{
			property: "og:description",
			content: "Platobné karty vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => Promise.all([queryClient.ensureQueryData(cardsQuery), queryClient.ensureQueryData(accountsQuery)]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$21
});
var AuthenticatedRouteRoute = Route$19.update({
	id: "/_authenticated",
	getParentRoute: () => Route$21
});
var AuthRoute = Route$22.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$21
});
var KontaktyRoute = Route$18.update({
	id: "/kontakty",
	path: "/kontakty",
	getParentRoute: () => Route$21
});
var KurzyRoute = Route$17.update({
	id: "/kurzy",
	path: "/kurzy",
	getParentRoute: () => Route$21
});
var ResetPasswordRoute = Route$16.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$21
});
var AuthenticatedDdsRoute = Route$15.update({
	id: "/dds",
	path: "/dds",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedDomovRoute = Route$14.update({
	id: "/domov",
	path: "/domov",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedMafinRoute = Route$13.update({
	id: "/mafin",
	path: "/mafin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedMenuRoute = Route$12.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedMojaFirmaRoute = Route$11.update({
	id: "/moja-firma",
	path: "/moja-firma",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedNastaveniaRoute = Route$10.update({
	id: "/nastavenia",
	path: "/nastavenia",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedNotifikacieRoute = Route$9.update({
	id: "/notifikacie",
	path: "/notifikacie",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPlatbaRoute = Route$24.update({
	id: "/platba",
	path: "/platba",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPohybyRoute = Route$25.update({
	id: "/pohyby",
	path: "/pohyby",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPoistneProduktyRoute = Route$8.update({
	id: "/poistne-produkty",
	path: "/poistne-produkty",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPonukyRoute = Route$7.update({
	id: "/ponuky",
	path: "/ponuky",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPrijemcoviaRoute = Route$26.update({
	id: "/prijemcovia",
	path: "/prijemcovia",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedProfilRoute = Route$6.update({
	id: "/profil",
	path: "/profil",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRodicovskaZamaRoute = Route$5.update({
	id: "/rodicovska-zama",
	path: "/rodicovska-zama",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSablonyRoute = Route$4.update({
	id: "/sablony",
	path: "/sablony",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedSluzbyRoute = Route$3.update({
	id: "/sluzby",
	path: "/sluzby",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedTrvalePrikazyRoute = Route$2.update({
	id: "/trvale-prikazy",
	path: "/trvale-prikazy",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedUveryRoute = Route$1.update({
	id: "/uvery",
	path: "/uvery",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedKartyIndexRoute = Route.update({
	id: "/karty/",
	path: "/karty/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedDdsRoute,
	AuthenticatedDomovRoute,
	AuthenticatedMafinRoute,
	AuthenticatedMenuRoute,
	AuthenticatedMojaFirmaRoute,
	AuthenticatedNastaveniaRoute,
	AuthenticatedNotifikacieRoute,
	AuthenticatedPlatbaRoute,
	AuthenticatedPohybyRoute,
	AuthenticatedPoistneProduktyRoute,
	AuthenticatedPonukyRoute,
	AuthenticatedPrijemcoviaRoute,
	AuthenticatedProfilRoute,
	AuthenticatedRodicovskaZamaRoute,
	AuthenticatedSablonyRoute,
	AuthenticatedSluzbyRoute,
	AuthenticatedTrvalePrikazyRoute,
	AuthenticatedUveryRoute,
	AuthenticatedKartyIdRoute: Route$23.update({
		id: "/karty/$id",
		path: "/karty/$id",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedTransakciaIdRoute: Route$27.update({
		id: "/transakcia/$id",
		path: "/transakcia/$id",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedUcetIdRoute: Route$28.update({
		id: "/ucet/$id",
		path: "/ucet/$id",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedKartyIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	KontaktyRoute,
	KurzyRoute,
	ResetPasswordRoute
};
var routeTree = Route$21._addFileChildren(rootRouteChildren)._addFileTypes();
function PageSpinner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[60dvh] place-items-center",
		role: "status",
		"aria-label": "Načítavam",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-10 animate-spin rounded-full border-[3px] border-primary/25 border-t-primary" })
	});
}
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient({ defaultOptions: { queries: {
			staleTime: 15e3,
			retry: 1,
			refetchOnWindowFocus: false
		} } }) },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultPendingComponent: PageSpinner,
		defaultPendingMs: 150
	});
};
//#endregion
export { getRouter };
