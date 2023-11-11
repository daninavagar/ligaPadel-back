import { createClient } from "@supabase/supabase-js";


// const url = process.env.SUPABASE_URL
// const anonkey = process.env.SUPABASE_ANON_KEY

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'default_url';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'default_key';

console.log(SUPABASE_URL);
console.log(SUPABASE_ANON_KEY);

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

export default supabase;

