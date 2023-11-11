import { createClient } from "@supabase/supabase-js";


// const url = process.env.SUPABASE_URL
// const anonkey = process.env.SUPABASE_ANON_KEY

const SUPABASE_URL = 'https://cswthhgqgqtashimoimz.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzd3RoaGdxZ3F0YXNoaW1vaW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODA3MDUsImV4cCI6MjAxMjk1NjcwNX0.b7fZEHONC4da-PqigmDkVZ4fO_lew9HStlkz833y3SE'
const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
)

export default supabase;

