// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jwyqnukjyiciaeyhovvk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eXFudWtqeWljaWFleWhvdnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyNjAyOTksImV4cCI6MjA1OTgzNjI5OX0.ZWA3jNq8ZOIR8GFPiRdt2DXUWa4-zPwVNGNN5uSWmzQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
