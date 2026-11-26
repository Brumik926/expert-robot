import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/rodicovska-zama")({
  head: () => ({ meta: [{ title: "Rodičovská záma – Tatra banka" }] }),
  component: () => (
    <ComingSoon title="Rodičovská záma" description="Zľavy a výhody pre rodiny s deťmi." />
  ),
});
