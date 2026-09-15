import 'server-only';

/**
 * Server-only TMDB fetch wrapper.
 *
 * - Authenticates with the v4 Read Access Token (Bearer) from
 *   process.env.TMDB_ACCESS_TOKEN — never a NEXT_PUBLIC_ variable.
 * - Requests Spanish metadata (es-ES) for the Spain market.
 * - Never throws to the UI: on any failure it logs (without the token) and
 *   returns null so callers can fall back gracefully.
 */

const BASE_URL = 'https://api.themoviedb.org/3';

interface TmdbFetchOptions {
  /** ISR revalidation window in seconds. */
  revalidate?: number;
  /** Extra query parameters (page, etc.). */
  params?: Record<string, string>;
}

export async function tmdbFetch<T>(
  path: string,
  { revalidate = 3600, params = {} }: TmdbFetchOptions = {},
): Promise<T | null> {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) {
    console.error('[tmdb] TMDB_ACCESS_TOKEN is not set — skipping request');
    return null;
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set('language', 'es-ES');
  url.searchParams.set('region', 'ES');
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
      },
      next: { revalidate },
    });

    if (!res.ok) {
      // Log status only — never the token or full auth headers.
      console.error(`[tmdb] request to ${path} failed with status ${res.status}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error('[tmdb] request error:', err instanceof Error ? err.message : 'unknown error');
    return null;
  }
}
