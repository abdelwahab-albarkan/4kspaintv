/**
 * Stable API-Football configuration. League IDs are fixed by the provider, so
 * they live here instead of being discovered via /leagues on every request.
 */

export const FOOTBALL_TIMEZONE = 'Europe/Madrid';

export interface LeagueMeta {
  id: number;
  name: string;
  /** Short label for filter chips. */
  short: string;
}

/** Competitions surfaced on the site, in display order. */
export const LEAGUES: LeagueMeta[] = [
  { id: 140, name: 'LaLiga', short: 'LaLiga' },
  { id: 2, name: 'UEFA Champions League', short: 'Champions' },
  { id: 39, name: 'Premier League', short: 'Premier' },
  { id: 135, name: 'Serie A', short: 'Serie A' },
  { id: 78, name: 'Bundesliga', short: 'Bundesliga' },
  { id: 61, name: 'Ligue 1', short: 'Ligue 1' },
];

/** Copa del Rey — shown only where the API has coverage. */
export const COPA_DEL_REY_ID = 143;

/**
 * TheSportsDB league IDs (different numbering) — used only to fetch clean
 * league badges, keyed by the API-Football league id above.
 */
export const THESPORTSDB_LEAGUE_ID: Record<number, number> = {
  140: 4335, // LaLiga
  2: 4480, // UEFA Champions League
  39: 4328, // Premier League
  135: 4332, // Serie A
  78: 4331, // Bundesliga
  61: 4334, // Ligue 1
};

/** Season as TheSportsDB expects it, e.g. 2024 → "2024-2025". */
export function seasonToRange(season: number): string {
  return `${season}-${season + 1}`;
}

/** Fast lookup of the league IDs we care about. */
export const TARGET_LEAGUE_IDS = new Set([...LEAGUES.map((l) => l.id), COPA_DEL_REY_ID]);

/** Primary league whose standings table we render by default. */
export const PRIMARY_STANDINGS_LEAGUE = 140; // LaLiga

/**
 * European seasons are labelled by their starting year (2025 = 2025/26).
 * From July onward the new season has started.
 */
export function getCurrentSeason(now: Date = new Date()): number {
  const year = now.getUTCFullYear();
  return now.getUTCMonth() >= 6 ? year : year - 1;
}

/**
 * Season used for season-scoped endpoints (standings, league fixtures).
 * Honors FOOTBALL_SEASON so it can be pinned per plan/season without code edits.
 */
export function getDataSeason(): number {
  const override = process.env.FOOTBALL_SEASON;
  if (override && /^\d{4}$/.test(override)) return Number(override);
  return getCurrentSeason();
}

// ─── Fixture status groups (API-Football "short" codes) ──────────────
export const LIVE_STATUSES = new Set(['1H', '2H', 'HT', 'ET', 'BT', 'P', 'LIVE', 'INT']);
export const FINISHED_STATUSES = new Set(['FT', 'AET', 'PEN']);
export const SCHEDULED_STATUSES = new Set(['NS', 'TBD']);
