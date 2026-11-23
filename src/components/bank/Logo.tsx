import { cn } from "@/lib/utils";

export const BANK_NAME = "Vega banka";

/** Vega banka mark: a four-point star above a chevron — the app's own identity. */
export function VegaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={cn("h-10 w-10", className)}>
      <path d="M7 14 L24 42 L41 14" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M24 3 C25 8.5 26.5 10 32 11 C26.5 12 25 13.5 24 19 C23 13.5 21.5 12 16 11 C21.5 10 23 8.5 24 3 Z"
        fill="var(--primary)"
      />
    </svg>
  );
}

export function VegaWordmark({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-3 text-foreground", className)}>
      <div className="grid h-28 w-28 place-items-center rounded-3xl border-[5px] border-current">
        <VegaMark className="h-16 w-16" />
      </div>
      <span className="text-2xl font-extrabold tracking-[0.18em] uppercase">{BANK_NAME}</span>
    </div>
  );
}
