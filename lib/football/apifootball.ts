import 'server-only';

/**
 * Server-only API-Football client. Auth via the x-apisports-key header from
 * process.env.FOOTBALL_API_KEY (never NEXT_PUBLIC_). Returns the `response`
 * payload, or null on any failure/quota/plan error so callers fall back.
 */
const BASE_URL = 'https://v3.football.api-sports.io';

export async function apiFootball<T>(path: string, revalidate: number): Promise<T | null> {
  const key = process.env.FOOTBALL_API_KEY;
  if (!key) {
    console.warn('[football] FOOTBALL_API_KEY not set — falling back to static UI');
    return null;
  }

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { 'x-apisports-key': key, accept: 'application/json' },
      next: { revalidate },
    });

    if (!res.ok) {
      console.error(`[football] ${path} → HTTP ${res.status}`);
      return null;
    }

    const json = await res.json();

    // API-Football reports quota/plan/parameter problems in `errors`.
    const errors = json?.errors;
    const hasErrors = Array.isArray(errors)
      ? errors.length > 0
      : errors && typeof errors === 'object' && Object.keys(errors).length > 0;
    if (hasErrors) {
      console.error('[football] API error:', JSON.stringify(errors).slice(0, 200));
      return null;
    }

    return (json?.response ?? null) as T | null;
  } catch (err) {
    console.error('[football] request failed:', err instanceof Error ? err.message : 'unknown error');
    return null;
  }
}
