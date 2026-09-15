import 'server-only';
import { tmdbFetch } from './client';
import type { TmdbListResponse, TmdbMedia } from './types';

/**
 * Popular movies (Spanish metadata). Revalidated daily — the homepage showcase
 * doesn't need sub-day freshness, and a longer window means the poster set
 * rotates less often, introducing fewer new unique image URLs to Vercel's image
 * optimizer over time (fewer billable transformations). Returns [] on failure.
 */
export async function getPopularMovies(limit = 12): Promise<TmdbMedia[]> {
  const data = await tmdbFetch<TmdbListResponse>('/movie/popular', {
    revalidate: 86400,
    params: { page: '1' },
  });
  if (!data?.results) return [];
  return data.results.filter((m) => m.poster_path).slice(0, limit);
}
