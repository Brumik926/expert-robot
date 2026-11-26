import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/poistne-produkty")({
  head: () => ({ meta: [{ title: "Poistné produkty – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="Poistné produkty"
      description="Životné, úrazové, cestovné a majetkové poistenie."
    />
  ),
});
