import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Menu, B as House, G as CreditCard, _t as ArrowLeftRight, at as ChartPie, b as Rocket, ft as Building2, k as MessageCircle, n as Users, ot as ChartLine, r as User, ut as CalendarClock, y as Send } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BottomNav-BZkLyty9.js
var import_jsx_runtime = require_jsx_runtime();
/** Choices for the user-configurable fourth tab ("Položka v spodnom menu"). */
var NAV_CHOICES = {
	karty: {
		to: "/karty",
		label: "Karty",
		icon: CreditCard
	},
	mafin: {
		to: "/mafin",
		label: "MaFin",
		icon: ChartPie
	},
	prijemcovia: {
		to: "/prijemcovia",
		label: "Príjemcovia",
		icon: Users
	},
	"trvale-prikazy": {
		to: "/trvale-prikazy",
		label: "Príkazy",
		icon: CalendarClock
	},
	"som_tu_prvykrat": {
		to: "/domov",
		label: "Som tu prvýkrát",
		icon: House
	},
	"vyskusat_demo": {
		to: "/demo",
		label: "Vyskúšať demo",
		icon: Rocket
	},
	"pobocky": {
		to: "/pobocky",
		label: "Pobočky",
		icon: Building2
	},
	"kurzy": {
		to: "/kurzy",
		label: "Kurzový lístok",
		icon: ChartLine
	},
	"chatbot": {
		to: "/chat",
		label: "Chatbot",
		icon: MessageCircle
	},
	"admin": {
		to: "/admin",
		label: "Adam",
		icon: User
	}
};
/** Fixed mobile tab bar; the active tab is tinted with the primary blue. */
function BottomNav({ navItem = "karty" }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const items = [
		{
			to: "/domov",
			label: "Domov",
			icon: House,
			match: ["/domov"]
		},
		{
			to: "/pohyby",
			label: "Pohyby",
			icon: ArrowLeftRight,
			match: ["/pohyby", "/transakcia"]
		},
		{
			to: "/platba",
			label: "Platba",
			icon: Send,
			match: ["/platba"],
			center: true
		},
		{
			to: "/som_tu_prvykrat",
			label: "Som tu prvýkrát",
			icon: House,
			match: ["/domov"]
		},
		{
			to: "/vyskusat_demo",
			label: "Vyskúšať demo",
			icon: Rocket,
			match: ["/demo"]
		},
		{
			to: "/pobocky",
			label: "Pobočky",
			icon: Building2,
			match: ["/pobocky"]
		},
		{
			to: "/kurzy",
			label: "Kurzový lístok",
			icon: ChartLine,
			match: ["/kurzy"]
		},
		{
			to: "/chat",
			label: "Chatbot",
			icon: MessageCircle,
			match: ["/chat"]
		},
		{
			to: "/admin",
			label: "Adam",
			icon: User,
			match: ["/admin"]
		},
		{
			to: "/menu",
			label: "Viac",
			icon: Menu,
			match: ["/menu"]
		}
	];
	const activeIndex = items.findIndex((it) => it.match.some((m) => pathname === m || pathname.startsWith(m + "/")));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Hlavná navigácia",
		className: "fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-border bg-nav safe-bottom",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid h-[5.25rem] grid-cols-6 items-end",
			children: items.map((item, i) => {
				const active = i === activeIndex;
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "flex h-full justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						"aria-current": active ? "page" : void 0,
						className: cn("relative flex w-full flex-col items-center justify-end gap-1 pb-3 text-[0.8rem] font-medium transition-colors", active ? "text-primary" : "text-foreground/90 hover:text-foreground"),
						children: [
							item.center ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								className: cn("absolute -top-5 left-1/2 h-[5.4rem] w-[5.4rem] -translate-x-1/2 rounded-full border-2 border-b-transparent bg-nav transition-colors", active ? "border-primary" : "border-primary/70")
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "relative h-7 w-7",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative max-w-full truncate px-1",
								children: item.label
							})
						]
					})
				}, item.label);
			})
		})
	});
}
//#endregion
export { NAV_CHOICES as n, BottomNav as t };
