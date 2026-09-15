import 'server-only';
import { tmdbFetch } from './client';
import type { TmdbListResponse, TmdbMedia } from './types';

/**
 * Popular TV series (Spanish metadata). Revalidated daily — same rationale as
 * popular movies: a longer window means the poster set rotates less often, so
 * fewer new unique image URLs reach Vercel's image optimizer over time. Returns
 * [] on failure so the UI can hide itself gracefully.
 */
export async function getPopularSeries(limit = 12): Promise<TmdbMedia[]> {
  const data = await tmdbFetch<TmdbListResponse>('/tv/popular', {
    revalidate: 86400,
    params: { page: '1' },
  });
  if (!data?.results) return [];
  return data.results.filter((s) => s.poster_path).slice(0, limit);
}
