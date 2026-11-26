import { t as supabase } from "./client-C8GIWg2Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bank-CoEeU7CF.js
/**
* Data access layer. Every read/write goes through the browser client and is
* scoped to the signed-in user by Row Level Security; money movements go
* through the `executePayment` server function only.
*/
function unwrap(res) {
	if (res.error) throw new Error(res.error.message);
	if (res.data === null) throw new Error("NOT_FOUND");
	return res.data;
}
async function requireUserId() {
	const { data } = await supabase.auth.getSession();
	const id = data.session?.user.id;
	if (!id) throw new Error("NOT_AUTHENTICATED");
	return id;
}
async function fetchAccounts() {
	return unwrap(await supabase.from("accounts").select("*").order("is_primary", { ascending: false }).order("created_at"));
}
async function fetchTransactions() {
	return unwrap(await supabase.from("transactions").select("*").order("booked_at", { ascending: false }).order("created_at", { ascending: false }).limit(1e3));
}
async function fetchTransaction(id) {
	return unwrap(await supabase.from("transactions").select("*").eq("id", id).maybeSingle());
}
async function fetchRecipients() {
	return unwrap(await supabase.from("recipients").select("*").order("name"));
}
async function fetchTemplates() {
	return unwrap(await supabase.from("payment_templates").select("*").order("name"));
}
async function fetchStandingOrders() {
	return unwrap(await supabase.from("standing_orders").select("*").order("next_date"));
}
async function fetchCards() {
	return unwrap(await supabase.from("cards").select("*").order("created_at"));
}
var DEFAULT_CARD_LIMITS = {
	card_id: "",
	user_id: "",
	atm_daily: 0,
	pos_daily: 0,
	internet_daily: 0,
	updated_at: ""
};
async function fetchCardLimits(cardId) {
	const res = await supabase.from("card_limits").select("*").eq("card_id", cardId).maybeSingle();
	if (res.error) throw new Error(res.error.message);
	return res.data ?? {
		...DEFAULT_CARD_LIMITS,
		card_id: cardId
	};
}
async function fetchNotifications() {
	return unwrap(await supabase.from("notifications").select("*").order("created_at", { ascending: false }).limit(200));
}
var DEFAULT_SETTINGS = {
	user_id: "",
	theme: "dark",
	language: "sk",
	nav_item: "karty",
	hide_balances: false,
	show_cards: true,
	show_quick_payment: true,
	show_savings: true,
	show_spending: true,
	show_rates: true,
	notify_payments: true,
	notify_cards: true,
	notify_marketing: false,
	updated_at: ""
};
async function fetchSettings() {
	const res = await supabase.from("user_settings").select("*").maybeSingle();
	if (res.error) throw new Error(res.error.message);
	return res.data ?? DEFAULT_SETTINGS;
}
var DEFAULT_PROFILE = {
	id: "",
	full_name: "",
	client_number: "",
	email: null,
	phone: null,
	street: null,
	city: null,
	zip: null,
	birth_date: null,
	created_at: "",
	updated_at: ""
};
async function fetchProfile() {
	const res = await supabase.from("profiles").select("*").maybeSingle();
	if (res.error) throw new Error(res.error.message);
	return res.data ?? DEFAULT_PROFILE;
}
async function processDueItems() {
	const { data, error } = await supabase.rpc("process_due_items");
	if (error) throw new Error(error.message);
	return data ?? 0;
}
async function cancelScheduledPayment(id) {
	const { data, error } = await supabase.rpc("cancel_scheduled_payment", { p_tx_id: id });
	if (error) throw new Error(error.message);
	return Boolean(data);
}
async function updateTransactionCategory(id, category) {
	const { error } = await supabase.from("transactions").update({ category }).eq("id", id);
	if (error) throw new Error(error.message);
}
async function createRecipient(input) {
	const user_id = await requireUserId();
	return unwrap(await supabase.from("recipients").insert({
		...input,
		user_id
	}).select("*").single());
}
async function updateRecipient(id, patch) {
	const { error } = await supabase.from("recipients").update(patch).eq("id", id);
	if (error) throw new Error(error.message);
}
async function deleteRecipient(id) {
	const { error } = await supabase.from("recipients").delete().eq("id", id);
	if (error) throw new Error(error.message);
}
async function createTemplate(input) {
	const user_id = await requireUserId();
	return unwrap(await supabase.from("payment_templates").insert({
		...input,
		user_id
	}).select("*").single());
}
async function updateTemplate(id, patch) {
	const { error } = await supabase.from("payment_templates").update(patch).eq("id", id);
	if (error) throw new Error(error.message);
}
async function deleteTemplate(id) {
	const { error } = await supabase.from("payment_templates").delete().eq("id", id);
	if (error) throw new Error(error.message);
}
async function createStandingOrder(input) {
	const user_id = await requireUserId();
	return unwrap(await supabase.from("standing_orders").insert({
		...input,
		user_id
	}).select("*").single());
}
async function updateStandingOrder(id, patch) {
	const { error } = await supabase.from("standing_orders").update(patch).eq("id", id);
	if (error) throw new Error(error.message);
}
async function deleteStandingOrder(id) {
	const { error } = await supabase.from("standing_orders").delete().eq("id", id);
	if (error) throw new Error(error.message);
}
async function updateCard(id, patch) {
	const { error } = await supabase.from("cards").update(patch).eq("id", id);
	if (error) throw new Error(error.message);
}
async function updateCardLimits(cardId, patch) {
	const user_id = await requireUserId();
	const { error } = await supabase.from("card_limits").upsert({
		...patch,
		card_id: cardId,
		user_id
	}, { onConflict: "card_id" });
	if (error) throw new Error(error.message);
}
async function markNotificationRead(id, isRead = true) {
	const { error } = await supabase.from("notifications").update({ is_read: isRead }).eq("id", id);
	if (error) throw new Error(error.message);
}
async function markAllNotificationsRead() {
	const { error } = await supabase.from("notifications").update({ is_read: true }).eq("is_read", false);
	if (error) throw new Error(error.message);
}
async function deleteNotification(id) {
	const { error } = await supabase.from("notifications").delete().eq("id", id);
	if (error) throw new Error(error.message);
}
async function updateSettings(patch) {
	const user_id = await requireUserId();
	const { error } = await supabase.from("user_settings").upsert({
		...patch,
		user_id
	}, { onConflict: "user_id" });
	if (error) throw new Error(error.message);
}
async function updateProfile(patch) {
	const id = await requireUserId();
	const { error } = await supabase.from("profiles").upsert({
		...patch,
		id
	}, { onConflict: "id" });
	if (error) throw new Error(error.message);
}
async function fetchSupportRequests() {
	return unwrap(await supabase.from("support_requests").select("*").order("created_at", { ascending: false }));
}
async function createSupportRequest(input) {
	const user_id = await requireUserId();
	const { error } = await supabase.from("support_requests").insert({
		...input,
		user_id
	});
	if (error) throw new Error(error.message);
}
async function renameAccount(id, name) {
	const { error } = await supabase.from("accounts").update({ name }).eq("id", id);
	if (error) throw new Error(error.message);
}
//#endregion
export { updateSettings as A, markNotificationRead as C, updateCardLimits as D, updateCard as E, updateTemplate as M, updateTransactionCategory as N, updateProfile as O, markAllNotificationsRead as S, renameAccount as T, fetchStandingOrders as _, createTemplate as a, fetchTransaction as b, deleteStandingOrder as c, fetchCardLimits as d, fetchCards as f, fetchSettings as g, fetchRecipients as h, createSupportRequest as i, updateStandingOrder as j, updateRecipient as k, deleteTemplate as l, fetchProfile as m, createRecipient as n, deleteNotification as o, fetchNotifications as p, createStandingOrder as r, deleteRecipient as s, cancelScheduledPayment as t, fetchAccounts as u, fetchSupportRequests as v, processDueItems as w, fetchTransactions as x, fetchTemplates as y };
