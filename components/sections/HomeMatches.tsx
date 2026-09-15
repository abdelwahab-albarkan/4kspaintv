import Link from 'next/link';
import { CalendarClock, ArrowRight } from 'lucide-react';
import MatchCard from '@/components/football/MatchCard';
import { getTodayMatches } from '@/lib/football/queries';
import type { Match } from '@/lib/football/types';

// Show live/half-time first, then upcoming, then finished.
const STATE_ORDER: Record<Match['state'], number> = {
  live: 0,
  halftime: 0,
  scheduled: 1,
  other: 2,
  finished: 3,
};

export default async function HomeMatches() {
  const matches = await getTodayMatches();

  // Graceful fallback: if the API returns nothing, render nothing — the rest of
  // the homepage is never affected by the football data source.
  if (matches.length === 0) return null;

  const featured = [...matches]
    .sort((a, b) => STATE_ORDER[a.state] - STATE_ORDER[b.state] || a.kickoff.localeCompare(b.kickoff))
    .slice(0, 6);

  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
              <CalendarClock size={14} /> Fútbol en directo
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Partidos de hoy
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-gray-400">
              LaLiga, Champions, Premier y las grandes ligas europeas, con horarios en hora
              peninsular. Míralos en 4K con tu suscripción.
            </p>
          </div>
          <Link
            href="/iptv-deporte"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan hover:text-cyan-bright"
          >
            Ver todos los partidos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
}
