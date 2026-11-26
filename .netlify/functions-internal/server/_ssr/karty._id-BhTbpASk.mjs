import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as transactionsQuery, n as cardLimitsQuery, r as cardsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karty._id-BhTbpASk.js
var $$splitComponentImporter = () => import("./karty._id-Ca0mY3Vh.mjs");
var $$splitErrorComponentImporter = () => import("./karty2._id-C8lFI6ow.mjs");
var Route = createFileRoute("/_authenticated/karty/$id")({
	head: () => ({ meta: [
		{ title: "Detail karty – Tatra banka" },
		{
			name: "description",
			content: "Blokovanie karty, internetové platby a denné limity."
		},
		{
			property: "og:title",
			content: "Detail karty – Tatra banka"
		},
		{
			property: "og:description",
			content: "Nastavenia platobnej karty vo Tatra banke."
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
	loader: ({ context: { queryClient }, params }) => Promise.all([
		queryClient.ensureQueryData(cardsQuery),
		queryClient.ensureQueryData(accountsQuery),
		queryClient.ensureQueryData(cardLimitsQuery(params.id)),
		queryClient.ensureQueryData(transactionsQuery)
	]),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
