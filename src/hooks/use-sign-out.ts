import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export function useSignOut() {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  return async () => {
    if (pending) return;
    setPending(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        toast.error("Odhlásenie zlyhalo: " + error.message);
        return;
      }
      qc.clear();
      navigate({ to: "/auth", search: { mode: "login" }, replace: true });
    } catch {
      toast.error("Odhlásenie zlyhalo. Skúste to znova.");
    } finally {
      setPending(false);
    }
  };
}
