import { t as cn } from "./utils-C_uf36nf.mjs";
import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { s as initials, t as avatarTone } from "./format-TV6Q3ifl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Avatar-BnlpHRpY.js
var import_jsx_runtime = require_jsx_runtime();
var toneClass = {
	"chart-1": "bg-chart-1",
	"chart-2": "bg-chart-2",
	"chart-3": "bg-chart-3",
	"chart-4": "bg-chart-4",
	"chart-5": "bg-chart-5",
	"chart-6": "bg-chart-6"
};
function RecipientAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: cn("grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-extrabold text-primary-foreground", toneClass[avatarTone(name)], className),
		children: initials(name)
	});
}
//#endregion
export { RecipientAvatar as t };
