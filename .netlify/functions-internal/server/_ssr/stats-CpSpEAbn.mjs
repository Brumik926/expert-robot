import { n as CATEGORY_KEYS } from "./categories-D0TWo3O-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stats-CpSpEAbn.js
function monthKeyOf(date) {
	const d = typeof date === "string" ? new Date(date) : date;
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function shiftMonth(key, delta) {
	const [y, m] = key.split("-").map(Number);
	return monthKeyOf(new Date(y ?? 2026, (m ?? 1) - 1 + delta, 1));
}
function monthLabel(key) {
	const [y, m] = key.split("-").map(Number);
	const label = new Intl.DateTimeFormat("sk-SK", {
		month: "long",
		year: "numeric"
	}).format(new Date(y ?? 2026, (m ?? 1) - 1, 1));
	return label.charAt(0).toUpperCase() + label.slice(1);
}
/** Only settled movements count; transfers between the user's own accounts are neither income nor spending. */
function countsForStats(tx) {
	return tx.status === "completed" && tx.tx_type !== "internal";
}
function summarizeMonth(transactions, month) {
	let income = 0;
	let expense = 0;
	const cats = /* @__PURE__ */ new Map();
	for (const tx of transactions) {
		if (!countsForStats(tx) || monthKeyOf(tx.booked_at) !== month) continue;
		const amount = Number(tx.amount);
		if (tx.direction === "in") income += amount;
		else {
			expense += amount;
			const key = CATEGORY_KEYS.includes(tx.category) ? tx.category : "ine";
			cats.set(key, (cats.get(key) ?? 0) + amount);
		}
	}
	const round = (n) => Math.round(n * 100) / 100;
	const byCategory = [...cats.entries()].map(([key, amount]) => ({
		key,
		amount: round(amount),
		share: expense > 0 ? amount / expense : 0
	})).sort((a, b) => b.amount - a.amount);
	return {
		income: round(income),
		expense: round(expense),
		difference: round(income - expense),
		byCategory
	};
}
/** Reconstructs daily end-of-day balances for the last `days` days from the current balance. */
function balanceHistory(currentBalance, transactions, accountId, days = 30, now = /* @__PURE__ */ new Date()) {
	const settled = transactions.filter((t) => t.account_id === accountId && t.status === "completed").map((t) => ({
		at: new Date(t.booked_at).getTime(),
		delta: (t.direction === "in" ? 1 : -1) * Number(t.amount)
	}));
	const points = [];
	for (let i = 0; i < days; i++) {
		const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i, 23, 59, 59, 999).getTime();
		const after = settled.filter((t) => t.at > end).reduce((s, t) => s + t.delta, 0);
		points.push({
			day: new Date(end).toISOString().slice(0, 10),
			balance: Math.round((currentBalance - after) * 100) / 100
		});
	}
	return points.reverse();
}
//#endregion
export { shiftMonth as a, monthLabel as i, countsForStats as n, summarizeMonth as o, monthKeyOf as r, balanceHistory as t };
