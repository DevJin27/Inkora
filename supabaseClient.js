import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ndmodtrutsknrijzsrvt.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kbW9kdHJ1dHNrbnJpanpzcnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTUyNDEsImV4cCI6MjA2ODU5MTI0MX0.i3mXTW9_y2T0BBWaKj2_g6AjexZ4Qd8uyNIysgA05L4"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;