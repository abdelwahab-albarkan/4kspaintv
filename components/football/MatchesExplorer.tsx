'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import MatchCard from './MatchCard';
import type { Match, LeagueBadge } from '@/lib/football/types';
import { LEAGUES } from '@/lib/football/constants';

interface MatchesExplorerProps {
  matches: Match[];
  badges: LeagueBadge[];
}

function Group({ title, matches }: { title: string; matches: Match[] }) {
  if (matches.length === 0) return null;
  return (
    <div className="mt-8 first:mt-0">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-300">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </div>
  );
}

export default function MatchesExplorer({ matches, badges }: MatchesExplorerProps) {
  const [active, setActive] = useState<number | 'all'>('all');

  const badgeById = useMemo(
    () => new Map(badges.map((b) => [b.leagueId, b.badge])),
    [badges],
  );

  // Only offer filter chips for leagues that actually have matches today.
  const availableLeagues = useMemo(() => {
    const ids = new Set(matches.map((m) => m.leagueId));
    return LEAGUES.filter((l) => ids.has(l.id));
  }, [matches]);

  const filtered = useMemo(
    () => (active === 'all' ? matches : matches.filter((m) => m.leagueId === active)),
    [matches, active],
  );

  const live = filtered.filter((m) => m.state === 'live' || m.state === 'halftime');
  const upcoming = filtered.filter((m) => m.state === 'scheduled' || m.state === 'other');
  const finished = filtered.filter((m) => m.state === 'finished');

  const chipBase =
    'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  return (
    <div>
      {/* Competition filter */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por competición">
        <button
          type="button"
          role="tab"
          aria-selected={active === 'all'}
          onClick={() => setActive('all')}
          className={`${chipBase} ${active === 'all' ? 'bg-cyan text-black' : 'border border-border-subtle bg-surface text-gray-300 hover:text-white'}`}
        >
          Todos
        </button>
        {availableLeagues.map((league) => {
          const badge = badgeById.get(league.id);
          const isActive = active === league.id;
          return (
            <button
              key={league.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(league.id)}
              className={`${chipBase} ${isActive ? 'bg-cyan text-black' : 'border border-border-subtle bg-surface text-gray-300 hover:text-white'}`}
            >
              {badge && (
                <span className="relative h-4 w-4 shrink-0">
                  <Image src={badge} alt="" fill loading="lazy" sizes="16px" className="object-contain" />
                </span>
              )}
              {league.short}
            </button>
          );
        })}
      </div>

      {/* Grouped matches */}
      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-border-subtle bg-surface-card/60 p-6 text-center text-sm text-gray-400">
            No hay partidos de esta competición para hoy. Vuelve a consultarlo más tarde.
          </p>
        ) : (
          <>
            <Group title="En directo" matches={live} />
            <Group title="Próximos hoy" matches={upcoming} />
            <Group title="Finalizados hoy" matches={finished} />
          </>
        )}
      </div>
    </div>
  );
}
