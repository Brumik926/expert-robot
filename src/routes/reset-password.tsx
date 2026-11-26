import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/bank/fields";
import { PageHeader } from "@/components/bank/PageHeader";
import { bankErrorMessage } from "@/lib/errors";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Nové heslo – Tatra banka" },
      { name: "description", content: "Nastavte si nové heslo do Tatra banky." },
      { property: "og:title", content: "Nové heslo – Tatra banka" },
      { property: "og:description", content: "Nastavte si nové heslo do Tatra banky." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);
  const [recovery, setRecovery] = useState(false);
  const [linkError, setLinkError] = useState(false);

  useEffect(() => {
    // Supabase sends the recovery token either in the hash (implicit flow) or
    // as a ?code= query parameter (PKCE, the default). The client exchanges it
    // automatically; we only have to notice that a recovery session exists.
    const params = new URLSearchParams(window.location.search);
    const hasRecoveryToken = window.location.hash.includes("type=recovery") || params.has("code");
    if (hasRecoveryToken) setRecovery(true);

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
    });

    // The token exchange can finish before the event fires; a session that
    // exists while a recovery token was present means the link was accepted.
    if (hasRecoveryToken) {
      supabase.auth.getSession().then(({ data: sessionData }) => {
        if (sessionData.session) setRecovery(true);
        else setLinkError(true);
      });
    }

    return () => data.subscription.unsubscribe();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) return setError("Heslo musí mať aspoň 6 znakov");
    if (password !== confirm) return setError("Heslá sa nezhodujú");
    setError(undefined);
    setBusy(true);
    const { error: err } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (err) return toast.error(bankErrorMessage(err));
    toast.success("Heslo bolo zmenené");
    navigate({ to: "/domov", replace: true });
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col bg-background">
      <PageHeader title="Nové heslo" back="/auth" />
      <form onSubmit={submit} className="flex flex-col gap-4 px-5 pt-6">
        {!recovery ? (
          <p className="text-sm text-muted-foreground">
            {linkError
              ? "Odkaz na obnovu hesla je neplatný alebo expiroval. Požiadajte si nový cez „Zabudli ste heslo?“."
              : "Otvorte túto stránku cez odkaz z e-mailu na obnovu hesla."}
          </p>
        ) : null}
        <TextField
          id="pw"
          label="Nové heslo"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="pw2"
          label="Zopakujte heslo"
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={error}
        />
        <Button
          type="submit"
          variant="bank"
          size="xl"
          disabled={busy || !recovery}
          className="mt-4"
        >
          {busy ? "Ukladám…" : "Uložiť heslo"}
        </Button>
      </form>
    </main>
  );
}
