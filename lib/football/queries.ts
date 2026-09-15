import 'server-only';
import { apiFootball } from './apifootball';
import { theSportsDb } from './thesportsdb';
import { REVALIDATE } from './cache';
import {
  FOOTBALL_TIMEZONE,
  LEAGUES,
  TARGET_LEAGUE_IDS,
  PRIMARY_STANDINGS_LEAGUE,
  THESPORTSDB_LEAGUE_ID,
  getDataSeason,
  LIVE_STATUSES,
  FINISHED_STATUSES,
  SCHEDULED_STATUSES,
} from './constants';
import type { ApiFixture, Match, MatchState, StandingRow, LeagueBadge } from './types';

/** Today's date (YYYY-MM-DD) in the Europe/Madrid timezone. */
function madridDate(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: FOOTBALL_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function toState(short: string): MatchState {
  if (short === 'HT') return 'halftime';
  if (LIVE_STATUSES.has(short)) return 'live';
  if (FINISHED_STATUSES.has(short)) return 'finished';
  if (SCHEDULED_STATUSES.has(short)) return 'scheduled';
  return 'other';
}

function normalize(fx: ApiFixture): Match {
  return {
    id: fx.fixture.id,
    kickoff: fx.fixture.date,
    state: toState(fx.fixture.status.short),
    statusShort: fx.fixture.status.short,
    elapsed: fx.fixture.status.elapsed,
    leagueId: fx.league.id,
    leagueName: fx.league.name,
    leagueLogo: fx.league.logo,
    homeName: fx.teams.home.name,
    homeLogo: fx.teams.home.logo,
    awayName: fx.teams.away.name,
    awayLogo: fx.teams.away.logo,
    homeGoals: fx.goals.home,
    awayGoals: fx.goals.away,
  };
}

/**
 * Today's matches for our target competitions (one API call → today + live +
 * upcoming all derive from this). Returns [] on any failure.
 */
export async function getTodayMatches(): Promise<Match[]> {
  const data = await apiFootball<ApiFixture[]>(
    `/fixtures?date=${madridDate()}&timezone=${encodeURIComponent(FOOTBALL_TIMEZONE)}`,
    REVALIDATE.fixturesToday,
  );
  if (!data) return [];
  return data
    .filter((fx) => TARGET_LEAGUE_IDS.has(fx.league.id))
    .map(normalize)
    .sort((a, b) => a.kickoff.localeCompare(b.kickoff));
}

interface ApiStandingsResponse {
  league: { standings: Array<Array<{
    rank: number;
    team: { id: number; name: string; logo: string | null };
    points: number;
    goalsDiff: number;
    all: { played: number; win: number; draw: number; lose: number };
  }>> };
}

/**
 * Full league standings (default LaLiga). Season comes from getDataSeason().
 * Finished seasons are static, so cached for a long window. Returns [] on failure.
 */
export async function getStandings(leagueId: number = PRIMARY_STANDINGS_LEAGUE): Promise<StandingRow[]> {
  const data = await apiFootball<ApiStandingsResponse[]>(
    `/standings?league=${leagueId}&season=${getDataSeason()}`,
    REVALIDATE.finished,
  );
  const table = data?.[0]?.league?.standings?.[0];
  if (!table) return [];
  return table.map((row) => ({
    rank: row.rank,
    teamId: row.team.id,
    teamName: row.team.name,
    teamLogo: row.team.logo,
    played: row.all.played,
    win: row.all.win,
    draw: row.all.draw,
    lose: row.all.lose,
    goalsDiff: row.goalsDiff,
    points: row.points,
  }));
}

interface SdbLeagueResponse {
  leagues?: Array<{ strBadge?: string; strLogo?: string }>;
}

/**
 * League badges from TheSportsDB, keyed by API-Football league id. Cached for a
 * long window (branding rarely changes). Missing badges degrade to text chips.
 */
export async function getLeagueBadges(): Promise<LeagueBadge[]> {
  const results = await Promise.all(
    LEAGUES.map(async (league) => {
      const sdbId = THESPORTSDB_LEAGUE_ID[league.id];
      if (!sdbId) return { leagueId: league.id, badge: null };
      const data = await theSportsDb<SdbLeagueResponse>(
        `/lookupleague.php?id=${sdbId}`,
        REVALIDATE.metadata,
      );
      const l = data?.leagues?.[0];
      return { leagueId: league.id, badge: l?.strBadge || l?.strLogo || null };
    }),
  );
  return results;
}
