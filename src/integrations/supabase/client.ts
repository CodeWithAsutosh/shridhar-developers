import { createClient } from "@supabase/supabase-js";

// Auto-generated client for browser usage
// IMPORTANT: Mirrors Lovable's default client, with a safe fallback when env vars are missing.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

let client: any;

if (url && key) {
  client = createClient(url, key);
} else {
  // Safe no-op client to avoid runtime crashes when Supabase isn't configured yet
  client = {
    functions: {
      invoke: async () => {
        throw new Error(
          "Supabase not configured. Connect Supabase to this project to enable backend features."
        );
      },
    },
  } as const;
  // Dev hint only
  if (import.meta.env.DEV) {
    console.warn(
      "Supabase env vars missing (VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_KEY). Backend features are disabled."
    );
  }
}

export const supabase = client;