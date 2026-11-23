import forest from "@/assets/card-forest.webp.asset.json";
import mono from "@/assets/card-mono.webp.asset.json";
import { cn } from "@/lib/utils";
import { VegaMark } from "./Logo";
import { Lock } from "lucide-react";

const DESIGNS: Record<string, string> = { forest: forest.url, mono: mono.url };

type Props = {
  design: string;
  brand: string;
  cardType: string;
  holder?: string;
  number?: string;
  blocked?: boolean;
  size?: "lg" | "sm";
  className?: string;
};

/** Payment card artwork with chip, mark and network label. */
export function CardVisual({ design, brand, cardType, holder, number, blocked, size = "lg", className }: Props) {
  const dark = design !== "mono";
  return (
    <div
      className={cn(
        "relative aspect-[1.586] overflow-hidden rounded-xl shadow-tile",
        size === "sm" ? "w-28 rounded-md" : "w-full",
        className,
      )}
      role="img"
      aria-label={`${brand} ${cardType === "credit" ? "kreditná" : "debetná"} karta${number ? " " + number : ""}`}
    >
      <img src={DESIGNS[design] ?? forest.url} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className={cn("absolute inset-0", dark ? "text-paper" : "text-ink")}>
        <VegaMark className={cn("absolute", size === "sm" ? "top-1.5 left-1.5 h-4 w-4" : "top-4 left-4 h-9 w-9")} />
        {size === "lg" ? (
          <>
            <div className="absolute top-[38%] left-[9%] h-[17%] w-[13%] rounded-md bg-gradient-to-br from-chart-6/90 to-chart-1/70 ring-1 ring-black/20" />
            {number ? (
              <div className="absolute bottom-[22%] left-[9%] text-sm font-semibold tracking-[0.18em] drop-shadow">{number}</div>
            ) : null}
            {holder ? (
              <div className="absolute bottom-[9%] left-[9%] max-w-[55%] truncate text-[0.7rem] font-semibold tracking-wider uppercase drop-shadow">
                {holder}
              </div>
            ) : null}
          </>
        ) : null}
        <div
          className={cn(
            "absolute right-[6%] bottom-[7%] text-right font-black italic drop-shadow",
            size === "sm" ? "text-[0.6rem]" : "text-2xl",
          )}
        >
          {brand === "VISA" ? "VISA" : "mastercard"}
          {size === "lg" ? (
            <div className="text-[0.6rem] font-medium not-italic">{cardType === "credit" ? "Credit" : "Debit"}</div>
          ) : null}
        </div>
      </div>
      {blocked ? (
        <div className="absolute inset-0 grid place-items-center bg-canvas/70 backdrop-blur-[2px]">
          <span className="flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-negative">
            <Lock className="h-3.5 w-3.5" /> Zablokovaná
          </span>
        </div>
      ) : null}
    </div>
  );
}
