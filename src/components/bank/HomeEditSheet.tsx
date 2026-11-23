import { toast } from "sonner";
import { BottomSheet } from "./BottomSheet";
import { ToggleRow } from "./rows";
import { NAV_CHOICES, type NavItemKey } from "./BottomNav";
import { qk, useBankMutation } from "@/hooks/use-bank";
import { updateSettings, type SettingsPatch, type UserSettings } from "@/services/bank";
import { bankErrorMessage } from "@/lib/errors";
import { cn } from "@/lib/utils";

const SECTIONS: { key: keyof Pick<UserSettings, "show_cards" | "show_savings" | "show_quick_payment" | "show_spending" | "show_rates">; label: string }[] = [
  { key: "show_cards", label: "Karty" },
  { key: "show_savings", label: "Sporenia" },
  { key: "show_quick_payment", label: "Rýchla platba" },
  { key: "show_spending", label: "Prehľad výdavkov" },
  { key: "show_rates", label: "Kurzový lístok" },
];

/** "Upraviť zobrazenie": choose home widgets and the fourth bottom-menu item. */
export function HomeEditSheet({
  open,
  onOpenChange,
  settings,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  settings: UserSettings;
}) {
  const save = useBankMutation((patch: SettingsPatch) => updateSettings(patch), [qk.settings]);
  const apply = (patch: SettingsPatch) =>
    save.mutate(patch, { onError: (e) => toast.error(bankErrorMessage(e)) });

  return (
    <BottomSheet open={open} onOpenChange={onOpenChange} title="Upraviť zobrazenie">
      <h3 className="text-lg font-extrabold">Domovská obrazovka</h3>
      <p className="mb-2 text-sm text-muted-foreground">Vyberte, ktoré časti sa zobrazia na domovskej obrazovke.</p>
      <div>
        {SECTIONS.map((s) => (
          <ToggleRow
            key={s.key}
            id={`home-${s.key}`}
            label={s.label}
            checked={settings[s.key]}
            onCheckedChange={(v) => apply({ [s.key]: v })}
          />
        ))}
      </div>
      <h3 className="mt-6 text-lg font-extrabold">Položka v spodnom menu</h3>
      <p className="mb-3 text-sm text-muted-foreground">Vyberte štvrtú položku spodnej navigácie.</p>
      <div role="radiogroup" className="grid grid-cols-2 gap-3">
        {(Object.keys(NAV_CHOICES) as NavItemKey[]).map((key) => {
          const choice = NAV_CHOICES[key];
          const Icon = choice.icon;
          const active = settings.nav_item === key;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => apply({ nav_item: key })}
              className={cn(
                "bank-field flex items-center gap-3 px-4 py-4 text-left transition-colors",
                active ? "ring-2 ring-primary" : "hover:bg-muted",
              )}
            >
              <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <span className="font-semibold">{choice.label}</span>
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}
