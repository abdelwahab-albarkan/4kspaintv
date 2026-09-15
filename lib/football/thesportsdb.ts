import 'server-only';

/**
 * Server-only TheSportsDB client. Used for clean league badges. The key is a
 * public test key by default ('3'); override with THESPORTSDB_API_KEY. Returns
 * parsed JSON or null on failure.
 */
const BASE_URL = 'https://www.thesportsdb.com/api/v1/json';

export async function theSportsDb<T>(path: string, revalidate: number): Promise<T | null> {
  const key = process.env.THESPORTSDB_API_KEY || '3';
  try {
    const res = await fetch(`${BASE_URL}/${key}${path}`, { next: { revalidate } });
    if (!res.ok) {
      console.error(`[sportsdb] ${path} → HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error('[sportsdb] request failed:', err instanceof Error ? err.message : 'unknown error');
    return null;
  }
}
