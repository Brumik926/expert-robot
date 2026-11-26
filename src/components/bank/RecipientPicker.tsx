import { useCallback, useMemo, useState } from "react";
import { BottomSheet } from "./BottomSheet";
import { SearchField } from "./fields";
import { UnderlineTabs, EmptyState } from "./rows";
import { RecipientAvatar } from "./Avatar";
import { Iban } from "./Iban";
import { Money } from "./Money";
import type { PaymentTemplate, Recipient } from "@/services/bank";
import { normalizeIban } from "@/lib/iban";

type Tab = "prijemcovia" | "sablony";

/** Sheet for "Vyberte príjemcu": pick a saved recipient or a payment template. */
export function RecipientPicker({
  open,
  onOpenChange,
  recipients,
  templates,
  onPickRecipient,
  onPickTemplate,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  recipients: Recipient[];
  templates: PaymentTemplate[];
  onPickRecipient: (r: Recipient) => void;
  onPickTemplate: (t: PaymentTemplate) => void;
}) {
  const [tab, setTab] = useState<Tab>("prijemcovia");
  const [q, setQ] = useState("");
  const match = useCallback(
    (name: string, iban: string) => {
      const s = q.trim().toLowerCase();
      return !s || name.toLowerCase().includes(s) || iban.includes(normalizeIban(q));
    },
    [q],
  );
  const rs = useMemo(() => recipients.filter((r) => match(r.name, r.iban)), [recipients, match]);
  const ts = useMemo(
    () => templates.filter((t) => match(t.name + " " + t.recipient_name, t.iban)),
    [templates, match],
  );

  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} title="Vyberte príjemcu">
      <SearchField value={q} onChange={setQ} />
      <div className="-mx-5 mt-3">
        <UnderlineTabs
          tabs={[
            { value: "prijemcovia", label: `Príjemcovia (${rs.length})` },
            { value: "sablony", label: `Šablóny (${ts.length})` },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {tab === "prijemcovia" ? (
          rs.length === 0 ? (
            <EmptyState title="Žiadni príjemcovia." />
          ) : (
            rs.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onPickRecipient(r)}
                className="bank-tile flex items-center gap-4 px-5 py-4 text-left"
              >
                <RecipientAvatar name={r.name} />
                <span className="min-w-0">
                  <span className="block truncate text-lg font-bold">{r.name}</span>
                  <Iban value={r.iban} className="block truncate text-sm text-muted-foreground" />
                </span>
              </button>
            ))
          )
        ) : ts.length === 0 ? (
          <EmptyState title="Žiadne šablóny." />
        ) : (
          ts.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onPickTemplate(t)}
              className="bank-tile flex items-center gap-4 px-5 py-4 text-left"
            >
              <RecipientAvatar name={t.name} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-lg font-bold">{t.name}</span>
                <span className="block truncate text-sm text-muted-foreground">
                  {t.recipient_name}
                </span>
              </span>
              {t.amount ? <Money value={t.amount} className="shrink-0 font-semibold" /> : null}
            </button>
          ))
        )}
      </div>
    </BottomSheet>
  );
}
