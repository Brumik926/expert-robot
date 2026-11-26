import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as transactionQuery, s as recipientsQuery, t as accountsQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transakcia._id-Dy5yMoW9.js
var $$splitComponentImporter = () => import("./transakcia._id-BtJTMYfp.mjs");
var $$splitErrorComponentImporter = () => import("./transakcia._id-kgdQnLac.mjs");
var Route = createFileRoute("/_authenticated/transakcia/$id")({
	head: () => ({ meta: [
		{ title: "Detail pohybu – Tatra banka" },
		{
			name: "description",
			content: "Podrobnosti transakcie: suma, protistrana, symboly a správa."
		},
		{
			property: "og:title",
			content: "Detail pohybu – Tatra banka"
		},
		{
			property: "og:description",
			content: "Podrobnosti transakcie vo Tatra banke."
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
		queryClient.ensureQueryData(transactionQuery(params.id)),
		queryClient.ensureQueryData(accountsQuery),
		queryClient.ensureQueryData(recipientsQuery)
	]),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
