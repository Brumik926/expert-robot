import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/uvery")({
  head: () => ({ meta: [{ title: "Úvery – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="Úvery"
      description="Prehľad vašich úverov, žiadostí a zmluvnej dokumentácie."
    />
  ),
});
