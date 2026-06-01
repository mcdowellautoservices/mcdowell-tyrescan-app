import { env, isSupabaseConfigured } from './env';

async function supabaseRequest(path: string, options: RequestInit = {}) {
  if (!isSupabaseConfigured) {
    console.log('Supabase not configured. Skipping live request:', path, options.body);
    return { ok: true, skipped: true };
  }
  const response = await fetch(`${env.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: env.supabaseAnonKey,
      Authorization: `Bearer ${env.supabaseAnonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Supabase error ${response.status}: ${message}`);
  }
  return response.json();
}

export const supabaseRest = {
  insert: (table: string, row: unknown) => supabaseRequest(table, { method: 'POST', body: JSON.stringify(row) }),
  list: (table: string, limit = 25) => supabaseRequest(`${table}?select=*&order=created_at.desc&limit=${limit}`)
};
