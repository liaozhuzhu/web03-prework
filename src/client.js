import { createClient } from '@supabase/supabase-js';

const URL = 'https://megklfbnvlldzwslykbo.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ2tsZmJudmxsZHp3c2x5a2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3Nzg3MTEsImV4cCI6MjAzOTM1NDcxMX0.jYPS825NVkV9lrl83zhnvFlSVNPsPCtVaaFIdVafDkI'

const supabase = createClient(URL, API_KEY);
export default supabase;
