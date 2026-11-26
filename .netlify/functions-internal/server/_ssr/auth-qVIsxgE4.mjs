import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-qVIsxgE4.js
var $$splitComponentImporter = () => import("./auth-0tZFQUb1.mjs");
var Route = createFileRoute("/auth")({
	validateSearch: (s) => {
		const out = {};
		if (s["mode"] === "login" || s["mode"] === "register" || s["mode"] === "forgot") out.mode = s["mode"];
		if (typeof s["redirect"] === "string" && s["redirect"].startsWith("/") && !s["redirect"].startsWith("//")) out.redirect = s["redirect"];
		return out;
	},
	head: () => ({ meta: [
		{ title: "Prihlásenie – Tatra banka" },
		{
			name: "description",
			content: "Prihláste sa alebo si vytvorte účet v Tatra banke."
		},
		{
			property: "og:title",
			content: "Prihlásenie – Tatra banka"
		},
		{
			property: "og:description",
			content: "Prihlásenie a registrácia do internet bankingu Tatra banka."
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
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
