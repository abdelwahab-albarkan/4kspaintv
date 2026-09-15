import Link from 'next/link';
import Image from 'next/image';
import { Trophy, Zap, ShieldAlert, ArrowRight } from 'lucide-react';
import { SPORTS_LOGOS } from '@/lib/assets';
import { getTodayMatches } from '@/lib/football/queries';

function kickoffTime(iso: string): string {
  try {
    return new Date(iso).toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
  } catch {
    return '--:--';
  }
}

const SPORTS_ITEMS = [
  { name: 'LaLiga EA Sports & Hypermotion', detail: 'Todos los partidos en directo en FHD / 4K' },
  { name: 'UEFA Champions League', detail: 'Toda la competición europea en directo' },
  { name: 'Fórmula 1 & MotoGP', detail: 'Cámaras multi-ángulo a 60 FPS sin retraso' },
  { name: 'Premier League, Serie A & Ligue 1', detail: 'Fútbol internacional completo' },
  { name: 'NBA, EuroLiga & Tenis ATP', detail: 'Baloncesto y grandes torneos de tenis' },
  { name: 'UFC & Boxeo PPV', detail: 'Eventos de lucha estelares incluidos' },
];

export default async function SportsTeaser({ preview = true }: { preview?: boolean }) {
  // Optional "Partidos de hoy" preview — uses the same cached fetch as the hub
  // (no extra API cost) and fails safe: an empty list simply hides the block.
  const todayMatches = preview ? await getTodayMatches() : [];
  const featured = todayMatches.filter((m) => m.state !== 'finished').slice(0, 2);

  return (
    <section className="relative overflow-hidden border-t border-border-subtle bg-gradient-to-b from-surface to-black py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1 text-xs font-semibold text-emerald-400">
              <Trophy size={14} /> Deportes en Directo 4K
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Siente la emoción del deporte en 4K a 60 FPS
            </h2>
            <p className="mt-4 text-gray-400">
              Servidores dedicados de alta velocidad optimizados para emisiones deportivas multitudinarias en España. Tecnología anti-congelación para disfrutar de tus partidos favoritos a 60 FPS reales.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1.5">
                <Zap size={16} className="text-emerald-400" /> Sin buffering en hora punta
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldAlert size={16} className="text-emerald-400" /> Emisión ultra estable
              </span>
            </div>
            <div className="mt-8">
              <Link
                href="/iptv-deporte"
                className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold"
              >
                Ver deportes en directo <ArrowRight size={18} />
              </Link>
            </div>

            {featured.length > 0 && (
              <div className="mt-8 rounded-xl border border-border-subtle bg-surface-card/70 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-cyan">⚽ Partidos de hoy</p>
                <ul className="mt-3 space-y-2">
                  {featured.map((m) => (
                    <li key={m.id} className="flex items-center justify-between gap-3 text-sm">
                      <span className="truncate text-white">
                        {m.homeName} <span className="text-gray-500">vs</span> {m.awayName}
                      </span>
                      <span className="shrink-0 text-xs font-semibold">
                        {m.state === 'live' ? (
                          <span className="text-cyan">En directo</span>
                        ) : (
                          <span className="text-gray-300">{kickoffTime(m.kickoff)}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iptv-deporte"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline"
                >
                  Ver todos los partidos <ArrowRight size={13} />
                </Link>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid gap-3 sm:grid-cols-2">
              {SPORTS_ITEMS.map((sport) => (
                <div
                  key={sport.name}
                  className="rounded-xl border border-border-subtle bg-surface-card/80 p-4 backdrop-blur-sm"
                >
                  <h3 className="font-semibold text-white text-base">{sport.name}</h3>
                  <p className="mt-1 text-xs text-gray-400">{sport.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competition logos */}
        <div className="mt-12 border-t border-border-subtle pt-8">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400">
            Competiciones incluidas
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {SPORTS_LOGOS.map((logo) => (
              <div
                key={logo.src}
                className="group flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-white/[0.10] hover:shadow-[0_0_26px_-8px_rgba(0,217,255,0.4)]"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 140px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
