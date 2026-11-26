//#region node_modules/.nitro/vite/services/ssr/assets/format-TV6Q3ifl.js
var moneyFormatter = new Intl.NumberFormat("sk-SK", {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});
/** "1 140,00" — Slovak grouping with a regular space so tests and UI agree. */
function formatAmount(value) {
	const n = typeof value === "string" ? Number(value) : value ?? 0;
	return moneyFormatter.format(Number.isFinite(n) ? n : 0).replace(/\u00a0|\u202f/g, " ");
}
function formatMoney(value, currency = "EUR") {
	return `${formatAmount(value)} ${currency}`;
}
var longDate = new Intl.DateTimeFormat("sk-SK", {
	day: "numeric",
	month: "long",
	year: "numeric"
});
var shortDate = new Intl.DateTimeFormat("sk-SK", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric"
});
var timeFmt = new Intl.DateTimeFormat("sk-SK", {
	hour: "2-digit",
	minute: "2-digit"
});
function toDate(value) {
	if (value instanceof Date) return value;
	if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		const [y, m, d] = value.split("-").map(Number);
		return new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
	}
	return new Date(value);
}
function formatLongDate(value) {
	return longDate.format(toDate(value));
}
function formatShortDate(value) {
	return shortDate.format(toDate(value)).replace(/\s/g, "");
}
function formatTime(value) {
	return timeFmt.format(toDate(value));
}
/** Local calendar date as YYYY-MM-DD. */
function todayIso(now = /* @__PURE__ */ new Date()) {
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}
function initials(name) {
	const parts = name.replace(/[^\p{L}\s]/gu, " ").trim().split(/\s+/).filter(Boolean);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return (parts[0] ?? "").slice(0, 2).toUpperCase();
	return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}
var AVATAR_TONES = [
	"chart-1",
	"chart-2",
	"chart-3",
	"chart-4",
	"chart-5",
	"chart-6"
];
function avatarTone(name) {
	let h = 0;
	for (const ch of name) h = h * 31 + ch.charCodeAt(0) >>> 0;
	return AVATAR_TONES[h % AVATAR_TONES.length] ?? "chart-3";
}
//#endregion
export { formatShortDate as a, todayIso as c, formatMoney as i, formatAmount as n, formatTime as o, formatLongDate as r, initials as s, avatarTone as t };
