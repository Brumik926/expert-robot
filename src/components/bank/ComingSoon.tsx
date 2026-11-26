import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

/** Placeholder screen for routes that are not yet implemented. */
export function ComingSoon({ title, description, children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
        <AlertTriangle className="h-8 w-8 text-warning" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      {description ? <p className="mt-2 text-muted-foreground">{description}</p> : null}
      {children ? (
        <div className="mt-6">{children}</div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Táto časť aplikácie sa pripravuje. Skúste to znova neskôr.
        </p>
      )}
    </div>
  );
}

ComingSoon.displayName = "ComingSoon";
