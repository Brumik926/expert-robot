import { c as ZodIssueCode, n as booleanType, o as objectType, r as enumType, s as stringType, t as NEVER } from "../_libs/zod.mjs";
import { i as normalizeIban, r as isValidIban } from "./iban-XZadvt3S.mjs";
import { r as parseAmount } from "./payment-schema-DHSp9_O9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-BrqDGFra.js
var ibanField = stringType().transform(normalizeIban).refine((v) => v.length > 0, "Zadajte IBAN").refine((v) => v.length === 0 || isValidIban(v), "IBAN nie je platný");
var digits = (max, label) => stringType().trim().regex(/^\d*$/, `${label} môže obsahovať iba číslice`).max(max, `${label} môže mať najviac ${max} číslic`).transform((v) => v ? v : null);
var recipientSchema = objectType({
	name: stringType().trim().min(1, "Zadajte názov príjemcu").max(70, "Najviac 70 znakov"),
	iban: ibanField,
	note: stringType().trim().max(140, "Najviac 140 znakov").transform((v) => v ? v : null),
	is_favorite: booleanType()
});
var optionalAmount = stringType().trim().transform((v, ctx) => {
	if (!v) return null;
	const n = parseAmount(v);
	if (!Number.isFinite(n) || n <= 0 || n > 1e5) {
		ctx.addIssue({
			code: ZodIssueCode.custom,
			message: "Zadajte platnú sumu (0,01 – 100 000)"
		});
		return NEVER;
	}
	return n;
});
var requiredAmount = stringType().trim().transform((v, ctx) => {
	const n = parseAmount(v);
	if (!v || !Number.isFinite(n) || n <= 0 || n > 1e5) {
		ctx.addIssue({
			code: ZodIssueCode.custom,
			message: "Zadajte platnú sumu (0,01 – 100 000)"
		});
		return NEVER;
	}
	return n;
});
var templateSchema = objectType({
	name: stringType().trim().min(1, "Zadajte názov šablóny").max(60, "Najviac 60 znakov"),
	recipient_name: stringType().trim().min(1, "Zadajte názov príjemcu").max(70, "Najviac 70 znakov"),
	iban: ibanField,
	amount: optionalAmount,
	variable_symbol: digits(10, "VS"),
	specific_symbol: digits(10, "ŠS"),
	constant_symbol: digits(4, "KS"),
	message: stringType().trim().max(140, "Najviac 140 znakov").transform((v) => v ? v : null)
});
var FREQUENCIES = [
	{
		value: "weekly",
		label: "Týždenne"
	},
	{
		value: "monthly",
		label: "Mesačne"
	},
	{
		value: "quarterly",
		label: "Štvrťročne"
	},
	{
		value: "yearly",
		label: "Ročne"
	}
];
var standingOrderSchema = objectType({
	account_id: stringType().uuid("Vyberte účet"),
	name: stringType().trim().min(1, "Zadajte názov príkazu").max(60, "Najviac 60 znakov"),
	recipient_name: stringType().trim().min(1, "Zadajte názov príjemcu").max(70, "Najviac 70 znakov"),
	iban: ibanField,
	amount: requiredAmount,
	frequency: enumType([
		"weekly",
		"monthly",
		"quarterly",
		"yearly"
	]),
	next_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, "Zadajte dátum prvej platby"),
	end_date: stringType().transform((v) => v ? v : null).refine((v) => v === null || /^\d{4}-\d{2}-\d{2}$/.test(v), "Neplatný dátum"),
	variable_symbol: digits(10, "VS"),
	specific_symbol: digits(10, "ŠS"),
	constant_symbol: digits(4, "KS"),
	message: stringType().trim().max(140, "Najviac 140 znakov").transform((v) => v ? v : null)
}).refine((v) => v.end_date === null || v.end_date >= v.next_date, {
	message: "Dátum ukončenia musí byť po prvej platbe",
	path: ["end_date"]
});
function zodErrors(error) {
	const out = {};
	for (const issue of error.issues) {
		const key = String(issue.path[0] ?? "form");
		if (!out[key]) out[key] = issue.message;
	}
	return out;
}
//#endregion
export { zodErrors as a, templateSchema as i, recipientSchema as n, standingOrderSchema as r, FREQUENCIES as t };
