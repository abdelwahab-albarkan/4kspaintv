/**
 * TMDB image URL builders. Pure functions (no secrets) — safe anywhere, but
 * only consumed by server components in this project.
 */

const IMAGE_BASE = 'https://image.tmdb.org/t/p';

export type PosterSize = 'w185' | 'w342' | 'w500' | 'w780';
export type BackdropSize = 'w780' | 'w1280';

/** Build a poster URL, or null when the path is missing. */
export function tmdbPoster(path: string | null | undefined, size: PosterSize = 'w500'): string | null {
  return path ? `${IMAGE_BASE}/${size}${path}` : null;
}

/** Build a backdrop URL, or null when the path is missing. */
export function tmdbBackdrop(path: string | null | undefined, size: BackdropSize = 'w1280'): string | null {
  return path ? `${IMAGE_BASE}/${size}${path}` : null;
}
