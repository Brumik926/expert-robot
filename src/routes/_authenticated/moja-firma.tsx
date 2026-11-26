import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/bank/ComingSoon";

export const Route = createFileRoute("/_authenticated/moja-firma")({
  head: () => ({ meta: [{ title: "Moja firma – Tatra banka" }] }),
  component: () => (
    <ComingSoon
      title="Moja firma"
      description="Firemné financie, podnikovateľské účty a služby pre vašu firmu."
    />
  ),
});
