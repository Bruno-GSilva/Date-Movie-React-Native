import 'react-native-url-polyfill/auto'
import { createClient } from "@supabase/supabase-js";
import { Database } from './database.types';

const supabaseUrl = "https://fesbijsyucpghxhexzdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlc2JpanN5dWNwZ2h4aGV4emRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDUyNjYxMCwiZXhwIjoyMDEwMTAyNjEwfQ.IqXpFryR7Uk06h61vMjYeVDuB-VTkE7fxPjeaCi0-Go";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth:{
    persistSession:false
  }
});