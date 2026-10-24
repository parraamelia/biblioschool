
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Falta PUBLIC_SUPABASE_URL. Revisa las variables de GitHub Actions."
  );
}

if (!supabaseKey) {
  throw new Error(
    "Falta PUBLIC_SUPABASE_PUBLISHABLE_KEY. Revisa las variables de GitHub Actions."
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
