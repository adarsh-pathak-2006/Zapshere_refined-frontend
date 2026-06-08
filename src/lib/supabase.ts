import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.NEXT_PUBLIC_SB_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SB_KEY || '').trim();

// This is the real, live client connecting to the Supabase project
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
