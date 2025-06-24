import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl) throw new Error("Supabase URL is not set");
if (!supabaseKey) throw new Error("Supabase Server Key is not set");

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
