import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, LineChart, MessageCircle, Sparkles, LayoutGrid, PlayCircle } from "lucide-react";
import art from "@/assets/welcome-art.webp.asset.json";
import { Button } from "@/components/ui/button";
import { BANK_NAME } from "@/components/bank/Logo";
import { useSession } from "@/hooks/use-session";
import { formatShortDate } from "@/lib/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tatra banka – vitajte v mobilnom bankovníctve" },
      {
        name: "description",
        content:
          "Prihláste sa do mobilného bankovníctva Tatra banka: účty, karty, platby a prehľad výdavkov.",
      },
      { property: "og:title", content: "Tatra banka – vitajte v mobilnom bankovníctve" },
      {
        property: "og:description",
        content: "Moderné mobilné bankovníctvo: účty, karty, platby a prehľad výdavkov.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Welcome,
});

/** Brand mark used on the welcome screen: registered sign above the wordmark. */
function BrandMark() {
  return (
    <div className="flex flex-col items-center gap-1 text-foreground">
      <span className="text-lg leading-none">®</span>
      <span className="text-[1.6rem] leading-none font-extrabold tracking-[0.14em] uppercase">
        {BANK_NAME}
      </span>
    </div>
  );
}

const QUICK_LINKS = [
  { to: "/auth", label: "Vyskúšať demo", icon: PlayCircle, search: { mode: "register" } },
  { to: "/kontakty", label: "Pobočky", icon: Building2, search: {} },
  { to: "/kurzy", label: "Kurzový lístok", icon: LineChart, search: {} },
  { to: "/kontakty", label: "Chatbot", icon: MessageCircle, search: {} },
  { to: "/kontakty", label: "Adam", icon: Sparkles, search: {} },
  { to: "/auth", label: "možnosti", icon: LayoutGrid, search: { mode: "login" } },
] as const;

function Welcome() {
  const { session } = useSession();
  return (
    <div className="dark">
      <main className="relative mx-auto flex min-h-dvh max-w-md flex-col overflow-hidden bg-canvas text-foreground">
        <img
          src={art.url}
          alt=""
          className="absolute inset-y-0 right-0 h-full w-[85%] object-cover object-left opacity-90"
        />
        <div className="welcome-fade absolute inset-0" />

        <div className="relative flex justify-center px-5 pt-[calc(env(safe-area-inset-top)+2.5rem)]">
          <BrandMark />
        </div>

        <div className="relative mt-auto px-6 pb-6">
          <h1 className="text-center text-[2rem] leading-tight font-normal">
            Vitajte vo svete <strong className="font-extrabold">inovatívneho bankovníctva</strong>
          </h1>
          <div className="mt-8 flex flex-col gap-4">
            {session ? (
              <Button asChild variant="bank" size="xl">
                <Link to="/domov">Pokračovať do aplikácie</Link>
              </Button>
            ) : (
              <Button asChild variant="bank" size="xl">
                <Link to="/auth" search={{ mode: "register" }}>
                  Som tu prvýkrát
                </Link>
              </Button>
            )}
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">
            {BANK_NAME.toUpperCase()} 3.27.7
          </p>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            Aktuálny bankový deň: {formatShortDate(new Date())}
          </p>
        </div>

        <nav
          aria-label="Rýchle odkazy"
          className="relative grid grid-cols-3 border-t border-border bg-canvas safe-bottom"
        >
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              search={item.search}
              className="flex flex-col items-center gap-1 py-3 text-center text-[0.8rem] leading-tight text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
