import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as transactionsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pohyby-LH2gSVGY.js
var $$splitComponentImporter = () => import("./pohyby-CSCIhHGw.mjs");
var Route = createFileRoute("/_authenticated/pohyby")({
	validateSearch: (s) => {
		const out = {};
		if (typeof s["account"] === "string") out.account = s["account"];
		if (typeof s["category"] === "string") out.category = s["category"];
		if (s["direction"] === "in" || s["direction"] === "out" || s["direction"] === "all") out.direction = s["direction"];
		return out;
	},
	head: () => ({ meta: [
		{ title: "Pohyby na účte – Tatra banka" },
		{
			name: "description",
			content: "História prijatých a odoslaných platieb a nákupov kartou."
		},
		{
			property: "og:title",
			content: "Pohyby na účte – Tatra banka"
		},
		{
			property: "og:description",
			content: "História transakcií vo Tatra banke."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	loader: ({ context: { queryClient } }) => Promise.all([queryClient.ensureQueryData(accountsQuery), queryClient.ensureQueryData(transactionsQuery)]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
