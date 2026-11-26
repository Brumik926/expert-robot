//#region node_modules/.nitro/vite/services/ssr/assets/errors-9tQAJs5t.js
/** Maps backend error codes to readable Slovak messages without leaking internals. */
var MESSAGES = {
	NOT_AUTHENTICATED: "Vaše prihlásenie vypršalo. Prihláste sa znova.",
	MISSING_IDEMPOTENCY_KEY: "Platbu sa nepodarilo pripraviť. Skúste to znova.",
	ACCOUNT_NOT_FOUND: "Účet platiteľa sa nenašiel.",
	INVALID_AMOUNT: "Suma nie je platná.",
	INVALID_IBAN: "IBAN príjemcu nie je platný.",
	SAME_ACCOUNT: "Nemôžete posielať peniaze na ten istý účet.",
	INVALID_RECIPIENT: "Názov príjemcu nie je platný.",
	INVALID_VS: "Variabilný symbol nie je platný.",
	INVALID_KS: "Konštantný symbol nie je platný.",
	INVALID_SS: "Špecifický symbol nie je platný.",
	INVALID_MESSAGE: "Správa pre príjemcu je príliš dlhá.",
	INVALID_REFERENCE: "Referencia platiteľa je príliš dlhá.",
	INVALID_CATEGORY: "Kategória nie je platná.",
	INVALID_DATE: "Dátum splatnosti nemôže byť v minulosti ani viac ako rok dopredu.",
	INVALID_END_DATE: "Dátum ukončenia musí byť po dátume prvej platby.",
	INSUFFICIENT_FUNDS: "Na účte nie je dostatok prostriedkov."
};
function bankErrorMessage(error, fallback = "Niečo sa pokazilo. Skúste to znova.") {
	const raw = typeof error === "string" ? error : error && typeof error === "object" && "message" in error ? String(error.message) : "";
	for (const code of Object.keys(MESSAGES)) if (raw.includes(code)) return MESSAGES[code] ?? fallback;
	if (raw.includes("is_valid_iban") || raw.includes("iban_check")) return MESSAGES["INVALID_IBAN"] ?? fallback;
	if (raw.includes("check constraint")) return "Zadané údaje nie sú platné.";
	if (raw.includes("Invalid login credentials")) return "Nesprávny e-mail alebo heslo.";
	if (raw.includes("Email not confirmed")) return "E-mail ešte nie je potvrdený. Skontrolujte svoju schránku.";
	if (raw.includes("User already registered")) return "Používateľ s týmto e-mailom už existuje.";
	if (raw.includes("Password should be")) return "Heslo musí mať aspoň 6 znakov.";
	return fallback;
}
//#endregion
export { bankErrorMessage as t };
