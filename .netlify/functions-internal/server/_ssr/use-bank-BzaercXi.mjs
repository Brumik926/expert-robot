import { _ as fetchStandingOrders, b as fetchTransaction, d as fetchCardLimits, f as fetchCards, g as fetchSettings, h as fetchRecipients, m as fetchProfile, p as fetchNotifications, u as fetchAccounts, v as fetchSupportRequests, x as fetchTransactions, y as fetchTemplates } from "./bank-CoEeU7CF.mjs";
import { n as queryOptions, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-bank-BzaercXi.js
var qk = {
	accounts: ["accounts"],
	transactions: ["transactions"],
	transaction: (id) => ["transactions", id],
	recipients: ["recipients"],
	templates: ["templates"],
	standingOrders: ["standing-orders"],
	cards: ["cards"],
	cardLimits: (id) => ["card-limits", id],
	notifications: ["notifications"],
	settings: ["settings"],
	profile: ["profile"],
	support: ["support-requests"]
};
var accountsQuery = queryOptions({
	queryKey: qk.accounts,
	queryFn: fetchAccounts
});
var transactionsQuery = queryOptions({
	queryKey: qk.transactions,
	queryFn: fetchTransactions
});
var transactionQuery = (id) => queryOptions({
	queryKey: qk.transaction(id),
	queryFn: () => fetchTransaction(id)
});
var recipientsQuery = queryOptions({
	queryKey: qk.recipients,
	queryFn: fetchRecipients
});
var templatesQuery = queryOptions({
	queryKey: qk.templates,
	queryFn: fetchTemplates
});
var standingOrdersQuery = queryOptions({
	queryKey: qk.standingOrders,
	queryFn: fetchStandingOrders
});
var cardsQuery = queryOptions({
	queryKey: qk.cards,
	queryFn: fetchCards
});
var cardLimitsQuery = (id) => queryOptions({
	queryKey: qk.cardLimits(id),
	queryFn: () => fetchCardLimits(id)
});
var notificationsQuery = queryOptions({
	queryKey: qk.notifications,
	queryFn: fetchNotifications
});
var settingsQuery = queryOptions({
	queryKey: qk.settings,
	queryFn: fetchSettings
});
queryOptions({
	queryKey: qk.support,
	queryFn: fetchSupportRequests
});
var profileQuery = queryOptions({
	queryKey: qk.profile,
	queryFn: fetchProfile
});
/** Refreshes everything a money movement can touch: balances, history, MaFin, notifications. */
function useInvalidateMoney() {
	const qc = useQueryClient();
	return () => Promise.all([
		qc.invalidateQueries({ queryKey: qk.accounts }),
		qc.invalidateQueries({ queryKey: qk.transactions }),
		qc.invalidateQueries({ queryKey: qk.notifications }),
		qc.invalidateQueries({ queryKey: qk.standingOrders }),
		qc.invalidateQueries({ queryKey: qk.cards })
	]);
}
/** Generic mutation helper that invalidates the given keys on success. */
function useBankMutation(fn, invalidate) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: fn,
		onSuccess: async () => {
			await Promise.all(invalidate.map((key) => qc.invalidateQueries({ queryKey: key })));
		}
	});
}
//#endregion
export { profileQuery as a, settingsQuery as c, transactionQuery as d, transactionsQuery as f, notificationsQuery as i, standingOrdersQuery as l, useInvalidateMoney as m, cardLimitsQuery as n, qk as o, useBankMutation as p, cardsQuery as r, recipientsQuery as s, accountsQuery as t, templatesQuery as u };
