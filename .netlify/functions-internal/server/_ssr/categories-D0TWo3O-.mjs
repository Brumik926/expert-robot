import { B as House, C as Plane, J as Clapperboard, Q as CircleEllipsis, V as HeartPulse, _t as ArrowLeftRight, ct as Car, m as ShoppingBag, p as ShoppingBasket, vt as ArrowDownLeft, w as PiggyBank } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-D0TWo3O-.js
var CATEGORY_KEYS = [
	"potraviny",
	"nakupy",
	"cestovanie",
	"byvanie",
	"doprava",
	"zabava",
	"zdravie",
	"prijem",
	"prevody",
	"sporenie",
	"ine"
];
/** Categories a user may pick for an outgoing payment (income is assigned by the bank). */
var PAYMENT_CATEGORIES = CATEGORY_KEYS.filter((k) => k !== "prijem");
var CATEGORIES = {
	potraviny: {
		label: "Potraviny",
		icon: ShoppingBasket,
		color: "var(--chart-4)"
	},
	nakupy: {
		label: "Nákupy",
		icon: ShoppingBag,
		color: "var(--chart-2)"
	},
	cestovanie: {
		label: "Cestovanie",
		icon: Plane,
		color: "var(--chart-1)"
	},
	byvanie: {
		label: "Bývanie",
		icon: House,
		color: "var(--chart-3)"
	},
	doprava: {
		label: "Doprava",
		icon: Car,
		color: "var(--chart-6)"
	},
	zabava: {
		label: "Zábava",
		icon: Clapperboard,
		color: "var(--chart-5)"
	},
	zdravie: {
		label: "Zdravie",
		icon: HeartPulse,
		color: "var(--positive)"
	},
	prijem: {
		label: "Príjem",
		icon: ArrowDownLeft,
		color: "var(--positive)"
	},
	prevody: {
		label: "Prevody",
		icon: ArrowLeftRight,
		color: "var(--primary)"
	},
	sporenie: {
		label: "Sporenie",
		icon: PiggyBank,
		color: "var(--savings)"
	},
	ine: {
		label: "Iné",
		icon: CircleEllipsis,
		color: "var(--muted-foreground)"
	}
};
function categoryOf(key) {
	return CATEGORIES[CATEGORY_KEYS.includes(key) ? key : "ine"];
}
var TX_TYPE_LABELS = {
	transfer_in: {
		in: "Prijatá platba",
		out: "Prijatá platba"
	},
	transfer_out: {
		in: "Odoslaná platba",
		out: "Odoslaná platba"
	},
	card: {
		in: "Vrátenie na kartu",
		out: "VE POS nákup"
	},
	standing_order: {
		in: "Trvalý príkaz",
		out: "Trvalý príkaz"
	},
	internal: {
		in: "Prevod medzi účtami",
		out: "Prevod medzi účtami"
	}
};
function txTypeLabel(txType, direction) {
	const entry = TX_TYPE_LABELS[txType];
	if (!entry) return direction === "in" ? "Prijatá platba" : "Odoslaná platba";
	return direction === "in" ? entry.in : entry.out;
}
//#endregion
export { txTypeLabel as a, categoryOf as i, CATEGORY_KEYS as n, PAYMENT_CATEGORIES as r, CATEGORIES as t };
