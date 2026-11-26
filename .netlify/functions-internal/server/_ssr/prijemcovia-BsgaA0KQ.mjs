import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as recipientsQuery, u as templatesQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prijemcovia-BsgaA0KQ.js
var $$splitComponentImporter = () => import("./prijemcovia-C2go5bl2.mjs");
var Route = createFileRoute("/_authenticated/prijemcovia")({
	validateSearch: (s) => s["tab"] === "vsetky" || s["tab"] === "prijemcovia" || s["tab"] === "sablony" ? { tab: s["tab"] } : {},
	head: () => ({ meta: [
		{ title: "Príjemcovia a šablóny – Tatra banka" },
		{
			name: "description",
			content: "Uložení príjemcovia platieb a platobné šablóny."
		},
		{
			property: "og:title",
			content: "Príjemcovia a šablóny – Tatra banka"
		},
		{
			property: "og:description",
			content: "Správa príjemcov a šablón platieb vo Tatra banke."
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
	loader: ({ context: { queryClient } }) => Promise.all([queryClient.ensureQueryData(recipientsQuery), queryClient.ensureQueryData(templatesQuery)]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
