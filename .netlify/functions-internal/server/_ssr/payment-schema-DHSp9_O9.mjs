import { a as numberType, i as literalType, o as objectType, r as enumType, s as stringType } from "../_libs/zod.mjs";
import { r as PAYMENT_CATEGORIES } from "./categories-D0TWo3O-.mjs";
import { i as normalizeIban, r as isValidIban } from "./iban-XZadvt3S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-schema-DHSp9_O9.js
var MAX_PAYMENT_AMOUNT = 1e5;
/** Parses "1 234,56" or "1234.56" into a number; returns NaN when malformed. */
function parseAmount(input) {
	const cleaned = input.replace(/\s/g, "").replace(",", ".");
	if (!/^\d+(\.\d{1,2})?$/.test(cleaned)) return NaN;
	return Number(cleaned);
}
var optionalDigits = (max, label) => stringType().trim().max(max, `${label} môže mať najviac ${max} číslic`).regex(/^\d*$/, `${label} môže obsahovať iba číslice`).optional().transform((v) => v ? v : void 0);
var paymentFormSchema = objectType({
	accountId: stringType().uuid("Vyberte účet platiteľa"),
	recipientName: stringType().trim().min(1, "Zadajte názov príjemcu").max(70, "Názov príjemcu môže mať najviac 70 znakov"),
	iban: stringType().transform(normalizeIban).refine((v) => v.length > 0, "Zadajte IBAN príjemcu").refine((v) => v.length === 0 || isValidIban(v), "IBAN nie je platný"),
	amount: numberType({ invalid_type_error: "Zadajte platnú sumu" }).refine((v) => Number.isFinite(v), "Zadajte platnú sumu").refine((v) => v > 0, "Suma musí byť väčšia ako 0").refine((v) => v <= MAX_PAYMENT_AMOUNT, "Maximálna suma jednej platby je 100 000 EUR").refine((v) => Math.round(v * 100) / 100 === v, "Suma môže mať najviac 2 desatinné miesta"),
	currency: literalType("EUR"),
	executionDate: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, "Zadajte dátum splatnosti"),
	variableSymbol: optionalDigits(10, "Variabilný symbol"),
	constantSymbol: optionalDigits(4, "Konštantný symbol"),
	specificSymbol: optionalDigits(10, "Špecifický symbol"),
	message: stringType().trim().max(140, "Správa pre príjemcu môže mať najviac 140 znakov").optional().transform((v) => v ? v : void 0),
	payerReference: stringType().trim().max(35, "Referencia platiteľa môže mať najviac 35 znakov").optional().transform((v) => v ? v : void 0),
	category: enumType(PAYMENT_CATEGORIES).default("prevody")
});
/** Payload sent to the server: the validated form plus an idempotency key. */
var executePaymentSchema = paymentFormSchema.extend({ idempotencyKey: stringType().uuid() });
/** A payment can be executed now only when the date is today and funds cover it. */
function checkSufficientFunds(balance, amount, executionDate, today) {
	if (executionDate > today) return true;
	return balance >= amount;
}
//#endregion
export { paymentFormSchema as i, executePaymentSchema as n, parseAmount as r, checkSufficientFunds as t };
