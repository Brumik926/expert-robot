import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ArrowLeftRight, CreditCard, Menu, Send, PieChart, Users, CalendarClock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavItemKey = "karty" | "mafin" | "prijemcovia" | "trvale-prikazy";

/** Choices for the user-configurable fourth tab ("Položka v spodnom menu"). */
export const NAV_CHOICES: Record<NavItemKey, { to: string; label: string; icon: LucideIcon }> = {
  karty: { to: "/karty", label: "Karty", icon: CreditCard },
  mafin: { to: "/mafin", label: "MaFin", icon: PieChart },
  prijemcovia: { to: "/prijemcovia", label: "Príjemcovia", icon: Users },
  "trvale-prikazy": { to: "/trvale-prikazy", label: "Príkazy", icon: CalendarClock },
};

type Item = { to: string; label: string; icon: LucideIcon; match: string[]; center?: boolean };

/** Fixed mobile tab bar; the active tab is tinted with the primary blue. */
export function BottomNav({ navItem = "karty" }: { navItem?: NavItemKey }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const fourth = NAV_CHOICES[navItem] ?? NAV_CHOICES.karty;
  const items: Item[] = [
    { to: "/domov", label: "Domov", icon: Home, match: ["/domov"] },
    { to: "/pohyby", label: "Pohyby", icon: ArrowLeftRight, match: ["/pohyby", "/transakcia"] },
    { to: "/platba", label: "Platba", icon: Send, match: ["/platba"], center: true },
    { to: fourth.to, label: fourth.label, icon: fourth.icon, match: [fourth.to] },
    { to: "/menu", label: "Viac", icon: Menu, match: ["/menu"] },
  ];
  const activeIndex = items.findIndex((it) => it.match.some((m) => pathname === m || pathname.startsWith(m + "/")));
  return (
    <nav
      aria-label="Hlavná navigácia"
      className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-border bg-nav safe-bottom"
    >
      <ul className="grid h-[5.25rem] grid-cols-5 items-end">
        {items.map((item, i) => {
          const active = i === activeIndex;
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex h-full justify-center">
              <Link
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex w-full flex-col items-center justify-end gap-1 pb-3 text-[0.8rem] font-medium transition-colors",
                  active ? "text-primary" : "text-foreground/90 hover:text-foreground",
                )}
              >
                {item.center ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-5 left-1/2 h-[5.4rem] w-[5.4rem] -translate-x-1/2 rounded-full border-2 border-b-transparent bg-nav transition-colors",
                      active ? "border-primary" : "border-primary/70",
                    )}
                  />
                ) : null}
                <Icon className="relative h-7 w-7" strokeWidth={1.5} />
                <span className="relative max-w-full truncate px-1">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
