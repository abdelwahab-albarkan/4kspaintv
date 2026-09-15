import Image from 'next/image';
import type { Match } from '@/lib/football/types';

const TZ = 'Europe/Madrid';

function kickoffTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString('es-ES', {
      timeZone: TZ,
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '--:--';
  }
}

function kickoffDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('es-ES', {
      timeZone: TZ,
      day: '2-digit',
      month: 'short',
    });
  } catch {
    return '';
  }
}

function StatusBadge({ match }: { match: Match }) {
  if (match.state === 'live') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-0.5 text-[11px] font-bold text-cyan">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
        En directo{match.elapsed != null ? ` · ${match.elapsed}'` : ''}
      </span>
    );
  }
  if (match.state === 'halftime') {
    return <span className="rounded-full bg-orange/15 px-2.5 py-0.5 text-[11px] font-bold text-orange">Descanso</span>;
  }
  if (match.state === 'finished') {
    return <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-bold text-gray-300">Finalizado</span>;
  }
  return (
    <span className="rounded-full bg-primary-500/15 px-2.5 py-0.5 text-[11px] font-bold text-primary-200">
      Próximo · {kickoffTime(match.kickoff)}
    </span>
  );
}

function TeamRow({ name, logo, goals, showGoals }: { name: string; logo: string | null; goals: number | null; showGoals: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="relative h-6 w-6 shrink-0">
          {logo ? (
            <Image src={logo} alt="" fill loading="lazy" sizes="24px" className="object-contain" />
          ) : null}
        </span>
        <span className="truncate text-sm font-medium text-white">{name}</span>
      </div>
      {showGoals && (
        <span className="shrink-0 text-base font-extrabold tabular-nums text-white">{goals ?? 0}</span>
      )}
    </div>
  );
}

export default function MatchCard({ match }: { match: Match }) {
  const showGoals = match.state === 'live' || match.state === 'halftime' || match.state === 'finished';

  return (
    <article
      className="rounded-xl border border-border-subtle bg-surface-card/80 p-4 backdrop-blur-sm transition-colors hover:border-cyan/30"
      aria-label={`${match.homeName} contra ${match.awayName}, ${match.leagueName}`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="relative h-4 w-4 shrink-0">
            {match.leagueLogo ? (
              <Image src={match.leagueLogo} alt="" fill loading="lazy" sizes="16px" className="object-contain" />
            ) : null}
          </span>
          <span className="truncate text-xs text-gray-400">{match.leagueName}</span>
        </div>
        <StatusBadge match={match} />
      </div>

      <div className="space-y-2">
        <TeamRow name={match.homeName} logo={match.homeLogo} goals={match.homeGoals} showGoals={showGoals} />
        <TeamRow name={match.awayName} logo={match.awayLogo} goals={match.awayGoals} showGoals={showGoals} />
      </div>

      {!showGoals && (
        <p className="mt-3 border-t border-border-subtle/60 pt-2 text-[11px] text-gray-500">
          {kickoffDate(match.kickoff)} · {kickoffTime(match.kickoff)} h · Hora peninsular
        </p>
      )}
    </article>
  );
}
