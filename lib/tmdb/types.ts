/** Shared TMDB response shapes (only the fields the UI needs). */

export interface TmdbMedia {
  id: number;
  /** Present on movies. */
  title?: string;
  /** Present on TV shows. */
  name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

export interface TmdbListResponse {
  page: number;
  results: TmdbMedia[];
  total_pages: number;
  total_results: number;
}
