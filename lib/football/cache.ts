/**
 * Revalidation windows (seconds) for API-Football requests. The free plan is
 * capped at 100 requests/day, so these are deliberately conservative — one
 * shared cached request per window, never a per-visitor call.
 */
export const REVALIDATE = {
  /** Today's fixtures (also the source for "live" + "upcoming"). */
  fixturesToday: 900, // 15 min
  /** Season standings — change slowly. */
  standings: 3600, // 1 h
  /** Finished-match data — effectively immutable. */
  finished: 86400, // 24 h
  /** League/team metadata — rarely changes. */
  metadata: 604800, // 7 days
} as const;
