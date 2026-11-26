import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as transactionsQuery, s as recipientsQuery, t as accountsQuery, u as templatesQuery } from "./use-bank-BzaercXi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/platba-DEf8Ewzj.js
var $$splitComponentImporter = () => import("./platba-dYJ0y4lz.mjs");
var Route = createFileRoute("/_authenticated/platba")({
	validateSearch: (s) => {
		const out = {};
		for (const k of [
			"recipientId",
			"templateId",
			"repeat",
			"accountId"
		]) {
			const v = s[k];
			if (typeof v === "string" && v) out[k] = v;
		}
		return out;
	},
	head: () => ({ meta: [
		{ title: "Nová platba – Tatra banka" },
		{
			name: "description",
			content: "Zadajte SEPA platbu s IBAN, sumou a symbolmi."
		},
		{
			property: "og:title",
			content: "Nová platba – Tatra banka"
		},
		{
			property: "og:description",
			content: "Platba v Tatra banke."
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
		queryClient.ensureQueryData(recipientsQuery),
		queryClient.ensureQueryData(templatesQuery),
		queryClient.ensureQueryData(transactionsQuery)
	]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
