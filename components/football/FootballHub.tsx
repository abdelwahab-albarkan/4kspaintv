import Link from 'next/link';
import { CalendarClock, ArrowRight } from 'lucide-react';
import MatchesExplorer from './MatchesExplorer';
import StandingsTable from './StandingsTable';
import { getTodayMatches, getStandings, getLeagueBadges } from '@/lib/football/queries';
import { getDataSeason } from '@/lib/football/constants';

export default async function FootballHub() {
  const [matches, standings, badges] = await Promise.all([
    getTodayMatches(),
    getStandings(),
    getLeagueBadges(),
  ]);

  // Graceful fallback: if the API layer returns nothing, render nothing — the
  // page keeps its static sports content and never crashes.
  if (matches.length === 0 && standings.length === 0) return null;

  const season = getDataSeason();
  const seasonLabel = `${season}/${String((season + 1) % 100).padStart(2, '0')}`;

  return (
    <section className="border-t border-border-subtle py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            <CalendarClock size={14} /> Datos en tiempo real
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
            Partidos de hoy, en directo y clasificación
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-400">
            Horarios en hora peninsular (Europe/Madrid). Sigue toda la jornada y prepárate para verla
            en 4K con tu suscripción.
          </p>
        </div>
        <Link
          href="/precios"
          className="btn-cta inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold"
        >
          Ver planes IPTV <ArrowRight size={16} />
        </Link>
      </div>

      {matches.length > 0 && (
        <div className="mt-10">
          <MatchesExplorer matches={matches} badges={badges} />
        </div>
      )}

      {standings.length > 0 && (
        <div className="mt-14">
          <div className="mb-5 flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-bold text-white">
              Clasificación de LaLiga <span className="text-sm font-medium text-gray-400">· Temporada {seasonLabel}</span>
            </h3>
            <Link href="/iptv" className="text-xs font-semibold text-cyan hover:underline">
              ¿Qué es IPTV? →
            </Link>
          </div>
          <StandingsTable rows={standings} caption={`Clasificación de LaLiga temporada ${seasonLabel}`} />
        </div>
      )}

      {/* Contextual internal links (not spammy) */}
      <p className="mt-10 text-sm text-gray-400">
        ¿Listo para no perderte ni un partido?{' '}
        <Link href="/comprar-iptv" className="font-semibold text-cyan hover:underline">Contrata tu IPTV</Link>,
        elige entre nuestros{' '}
        <Link href="/precios" className="font-semibold text-cyan hover:underline">planes</Link>{' '}
        y configúralo en tus{' '}
        <Link href="/dispositivos" className="font-semibold text-cyan hover:underline">dispositivos</Link>{' '}
        con la{' '}
        <Link href="/instalar-iptv" className="font-semibold text-cyan hover:underline">guía de instalación</Link>.
      </p>

      {/* Data attribution */}
      <p className="mt-6 text-xs text-gray-500">
        Datos deportivos proporcionados por API-Football y TheSportsDB. Los horarios pueden variar
        según la programación oficial de cada competición.
      </p>
    </section>
  );
}
