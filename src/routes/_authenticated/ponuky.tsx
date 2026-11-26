import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/ponuky")({
  head: () => ({ meta: [{ title: "Ponuky – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="Ponuky"
      description="Osobné a firemné financie: podnikovateľské účty, termínované vklady, financovanie, kreditné karty, poistenia a platobné nástroje."
    />
  ),
});
