import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fonpnuvubuslfqyhwpnj.supabase.co';
const supabaseAnonKey = Process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
