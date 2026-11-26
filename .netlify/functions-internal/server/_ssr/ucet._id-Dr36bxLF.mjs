import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as transactionsQuery, l as standingOrdersQuery, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ucet._id-Dr36bxLF.js
var $$splitComponentImporter = () => import("./ucet._id-C90L9jqT.mjs");
var Route = createFileRoute("/_authenticated/ucet/$id")({
	head: () => ({ meta: [
		{ title: "Detail účtu – Tatra banka" },
		{
			name: "description",
			content: "Zostatok, IBAN, vývoj zostatkov a informácie o účte."
		},
		{
			property: "og:title",
			content: "Detail účtu – Tatra banka"
		},
		{
			property: "og:description",
			content: "Detail účtu vo Tatra banke."
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
	loader: ({ context: { queryClient } }) => Promise.all([
		queryClient.ensureQueryData(accountsQuery),
		queryClient.ensureQueryData(transactionsQuery),
		queryClient.ensureQueryData(recipientsQuery),
		queryClient.ensureQueryData(standingOrdersQuery)
	]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
