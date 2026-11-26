//#region node_modules/.nitro/vite/services/ssr/assets/iban-XZadvt3S.js
/** IBAN helpers shared by forms, display and tests. Server re-validates in SQL. */
function normalizeIban(value) {
	return value.replace(/\s+/g, "").toUpperCase();
}
var COUNTRY_LENGTHS = {
	SK: 24,
	CZ: 24,
	AT: 20,
	DE: 22,
	HU: 28,
	PL: 28,
	GB: 22,
	FR: 27,
	IT: 27,
	ES: 24,
	NL: 18,
	BE: 16
};
function isValidIban(value) {
	const iban = normalizeIban(value);
	if (iban.length < 15 || iban.length > 34) return false;
	if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(iban)) return false;
	const expected = COUNTRY_LENGTHS[iban.slice(0, 2)];
	if (expected !== void 0 && iban.length !== expected) return false;
	const rearranged = iban.slice(4) + iban.slice(0, 4);
	let remainder = 0;
	for (const ch of rearranged) {
		const digits = /[0-9]/.test(ch) ? ch : String(ch.charCodeAt(0) - 55);
		for (const d of digits) remainder = (remainder * 10 + Number(d)) % 97;
	}
	return remainder === 1;
}
/** Groups an IBAN into blocks of four: "SK98 1100 0000 ...". */
function formatIban(value) {
	if (!value) return "";
	return normalizeIban(value).replace(/(.{4})/g, "$1 ").trim();
}
function ibanGroups(value) {
	return formatIban(value).split(" ").filter(Boolean);
}
//#endregion
export { normalizeIban as i, ibanGroups as n, isValidIban as r, formatIban as t };
