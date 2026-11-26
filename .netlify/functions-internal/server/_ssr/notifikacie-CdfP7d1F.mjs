import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { S as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as CreditCard, h as ShieldCheck, ht as Bell, it as CheckCheck, t as X, ut as CalendarClock, y as Send } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./PageHeader-Bs733ZyZ.mjs";
import { n as EmptyState } from "./rows-Cen7mRph.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as markNotificationRead, S as markAllNotificationsRead, o as deleteNotification } from "./bank-CoEeU7CF.mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { i as notificationsQuery, o as qk, p as useBankMutation } from "./use-bank-BzaercXi.mjs";
import { a as formatShortDate, o as formatTime } from "./format-TV6Q3ifl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifikacie-CdfP7d1F.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	payment: Send,
	card: CreditCard,
	security: ShieldCheck,
	standing_order: CalendarClock,
	info: Bell
};
function Notifications() {
	const router = useRouter();
	const { data: items } = useSuspenseQuery(notificationsQuery);
	const markAll = useBankMutation(() => markAllNotificationsRead(), [qk.notifications]);
	const markOne = useBankMutation((n) => markNotificationRead(n.id, true), [qk.notifications]);
	const remove = useBankMutation((id) => deleteNotification(id), [qk.notifications]);
	const unread = items.filter((n) => !n.is_read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col animate-page-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notifikácie",
			back: true,
			right: unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => markAll.mutate(void 0, {
					onSuccess: () => toast.success("Všetko označené ako prečítané"),
					onError: (e) => toast.error(bankErrorMessage(e))
				}),
				className: "flex items-center gap-1.5 text-[0.95rem] font-medium text-link",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-5 w-5" }), " Prečítať všetko"]
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "bank-section flex-1 px-0 pt-0",
			children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { title: "Nemáte žiadne notifikácie." }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map((n) => {
				const Icon = ICONS[n.kind] ?? Bell;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative border-t border-border first:border-t-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (!n.is_read) markOne.mutate(n);
							if (n.link && n.link.startsWith("/")) router.history.push(n.link);
						},
						className: cn("flex w-full items-start gap-4 px-5 py-4 pr-14 text-left transition-colors hover:bg-card/50", !n.is_read && "bg-accent/40"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-card text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5",
								strokeWidth: 1.6
							}), !n.is_read ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background bg-primary",
								"aria-label": "Neprečítané"
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("block", !n.is_read && "font-bold"),
									children: n.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[0.95rem] text-muted-foreground",
									children: n.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: [
										formatShortDate(n.created_at),
										" ",
										formatTime(n.created_at)
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Odstrániť notifikáciu",
						onClick: () => remove.mutate(n.id, { onError: (e) => toast.error(bankErrorMessage(e)) }),
						className: "absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}, n.id);
			}) })]
		})]
	});
}
//#endregion
export { Notifications as component };
