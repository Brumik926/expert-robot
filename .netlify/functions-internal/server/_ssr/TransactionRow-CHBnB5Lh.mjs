import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Cloud, Y as CircleX, q as Clock } from "../_libs/lucide-react.mjs";
import { a as txTypeLabel } from "./categories-D0TWo3O-.mjs";
import { t as Money } from "./Money-DPz904-G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TransactionRow-CHBnB5Lh.js
var import_jsx_runtime = require_jsx_runtime();
/** One movement in the history list: +/− marker, counterparty, type and coloured amount. */
function TransactionRow({ tx }) {
	const incoming = tx.direction === "in";
	const pending = tx.status === "scheduled";
	const failed = tx.status === "failed" || tx.status === "cancelled";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/transakcia/$id",
		params: { id: tx.id },
		className: "grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 border-t border-border py-5 pr-5 transition-colors hover:bg-card/60 active:bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: cn("text-3xl leading-none font-light", incoming ? "text-positive" : "text-negative", (pending || failed) && "text-muted-foreground"),
				children: incoming ? "+" : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-[1.05rem]",
					children: tx.counterparty_name || "Bez názvu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 flex items-center gap-1.5 text-[0.95rem] text-muted-foreground",
					children: [pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-warning" }) : failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-negative" }) : null, pending ? "Naplánovaná" : tx.status === "failed" ? "Zlyhala" : tx.status === "cancelled" ? "Zrušená" : txTypeLabel(tx.tx_type, tx.direction)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, {
					value: tx.amount,
					className: cn("text-[1.2rem] font-medium", incoming ? "text-positive" : "text-negative", (pending || failed) && "text-muted-foreground", failed && "line-through")
				}), tx.co2_kg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-1 flex items-center justify-end gap-1.5 text-[0.9rem] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4" }),
						String(tx.co2_kg).replace(".", ","),
						" kg CO",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "2" }),
						"e"
					]
				}) : null]
			})
		]
	});
}
//#endregion
export { TransactionRow as t };
