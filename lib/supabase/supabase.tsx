import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServerKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

if (!supabaseUrl) {
  throw new Error("Supabase URL is not set");
}
if (!supabaseServerKey) {
  throw new Error("Supabase Server Key is not set");
}

const supabase = createClient(supabaseUrl, supabaseServerKey);

export { supabase };
