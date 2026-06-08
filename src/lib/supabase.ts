import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.NEXT_PUBLIC_SB_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SB_KEY || '').trim();

// This is the real, live client connecting to the Supabase project
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define the BlogPost type based on the database schema
export interface BlogPost {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  thumbnail_url?: string;
  banner_url?: string;
}
