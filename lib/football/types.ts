// ─── API-Football shapes (subset the UI needs) ──────────────────────
export interface ApiTeam {
  id: number;
  name: string;
  logo: string | null;
}

export interface ApiFixture {
  fixture: {
    id: number;
    date: string; // ISO, already localized by the timezone param
    status: { short: string; elapsed: number | null };
  };
  league: { id: number; name: string; logo: string | null; round?: string };
  teams: { home: ApiTeam; away: ApiTeam };
  goals: { home: number | null; away: number | null };
}

// ─── Normalized shapes passed to components (small payloads) ─────────
export type MatchState = 'scheduled' | 'live' | 'halftime' | 'finished' | 'other';

export interface Match {
  id: number;
  kickoff: string; // ISO
  state: MatchState;
  statusShort: string;
  elapsed: number | null;
  leagueId: number;
  leagueName: string;
  leagueLogo: string | null;
  homeName: string;
  homeLogo: string | null;
  awayName: string;
  awayLogo: string | null;
  homeGoals: number | null;
  awayGoals: number | null;
}

export interface StandingRow {
  rank: number;
  teamId: number;
  teamName: string;
  teamLogo: string | null;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goalsDiff: number;
  points: number;
}

export interface LeagueBadge {
  leagueId: number; // API-Football id
  badge: string | null; // TheSportsDB badge URL
}
