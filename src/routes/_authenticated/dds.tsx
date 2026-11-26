import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/dds")({
  head: () => ({ meta: [{ title: "DDS dôchodok – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="DDS dôchodok"
      description="Dôchodkové dôchodkové sporenie a prehľad vašich príspevkov."
    />
  ),
});
