import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/sluzby")({
  head: () => ({ meta: [{ title: "Služby pre podnikateľov – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="Služby pre podnikateľov"
      description="Podnikovateľské účty, parovanie platieb, termínované vklady a financovanie."
    />
  ),
});
