import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();


const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anonkey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('url ', url);
console.log('anonkey ', anonkey);


const supabase = createClient(
    url,
    anonkey
);

export default supabase;

