import { E as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as categoryOf } from "./categories-D0TWo3O-.mjs";
import { d as ResponsiveContainer, l as Pie, n as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CategoryDonut-C3-Lgs4P.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryDonut({ data, size = 180 }) {
	if (data.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: size,
			height: size
		},
		className: "grid place-items-center rounded-full border-[18px] border-muted text-xs text-muted-foreground",
		children: "Bez výdavkov"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			width: size,
			height: size
		},
		role: "img",
		"aria-label": "Rozdelenie výdavkov podľa kategórií",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
				data,
				dataKey: "amount",
				nameKey: "key",
				innerRadius: "55%",
				outerRadius: "100%",
				stroke: "none",
				isAnimationActive: false,
				children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: categoryOf(d.key).color }, d.key))
			}) })
		})
	});
}
//#endregion
export { CategoryDonut as t };
