import { createClient, QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServerKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


const supabase = createClient<Database>(supabaseUrl, supabaseServerKey)

export { supabase };

type apiProps = {
  table: string;
  id?: number;
  created_at?: string;
  content?: string | null;
  name?: string | null;
}

export async function fetchData({ table }: apiProps) {
  const { data, error } = await supabase
    .from(table)
    .select();
  if (error) throw error;
  return data;
}

export async function insertData({ table, name, content }: apiProps) {
  const { error } = await supabase
    .from(table)
    .insert({ name, content })
  if (error) throw error;
}
