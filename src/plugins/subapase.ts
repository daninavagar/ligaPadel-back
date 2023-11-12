import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();


const url = process.env.SUPABASE_URL || '';
const anonkey = process.env.SUPABASE_ANON_KEY || '';

console.log('url ', url);
console.log('anonkey ', anonkey);


const supabase = createClient(
    url,
    anonkey
);

export default supabase;

