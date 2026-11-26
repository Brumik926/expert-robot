import { t as bankErrorMessage } from "./errors-9tQAJs5t.mjs";
import { n as executePaymentSchema } from "./payment-schema-DHSp9_O9.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-ChNsXfvL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-D1_iSxmd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payments.functions-SrL64kOl.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var executePayment_createServerFn_handler = createServerRpc({
	id: "22413bd6660cf3f31a34e2057e3f89309a1bb9fa6281d92b476c8d9dbd08d31a",
	name: "executePayment",
	filename: "src/lib/payments.functions.ts"
}, (opts) => executePayment.__executeServer(opts));
var executePayment = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => executePaymentSchema.parse(data)).handler(executePayment_createServerFn_handler, async ({ data, context }) => {
	const args = {
		p_account_id: data.accountId,
		p_recipient_name: data.recipientName,
		p_iban: data.iban,
		p_amount: data.amount,
		p_execution_date: data.executionDate,
		p_idempotency_key: data.idempotencyKey,
		p_category: data.category
	};
	if (data.variableSymbol) args.p_variable_symbol = data.variableSymbol;
	if (data.constantSymbol) args.p_constant_symbol = data.constantSymbol;
	if (data.specificSymbol) args.p_specific_symbol = data.specificSymbol;
	if (data.message) args.p_message = data.message;
	if (data.payerReference) args.p_payer_reference = data.payerReference;
	const { data: result, error } = await context.supabase.rpc("execute_payment", args);
	if (error) {
		console.error("execute_payment failed", error.code, error.message);
		return {
			ok: false,
			error: bankErrorMessage(error)
		};
	}
	const r = result ?? {};
	if (!r.transaction_id) return {
		ok: false,
		error: "Platbu sa nepodarilo vykonať."
	};
	return {
		ok: true,
		transactionId: r.transaction_id,
		status: r.status ?? "completed",
		duplicate: Boolean(r.duplicate),
		balance: r.balance ?? null
	};
});
//#endregion
export { executePayment_createServerFn_handler };
