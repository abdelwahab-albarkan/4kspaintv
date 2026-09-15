import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Star, Clapperboard } from 'lucide-react';
import { getPopularMovies } from '@/lib/tmdb/movies';
import { getPopularSeries } from '@/lib/tmdb/tv';
import { tmdbPoster } from '@/lib/tmdb/images';
import type { TmdbMedia } from '@/lib/tmdb/types';

function PosterCard({ item, kind }: { item: TmdbMedia; kind: 'película' | 'serie' }) {
  const title = item.title || item.name || 'Sin título';
  const src = tmdbPoster(item.poster_path, 'w342');
  if (!src) return null;
  const year = (item.release_date || item.first_air_date || '').slice(0, 4);

  return (
    <div className="group relative aspect-[2/3] w-[130px] shrink-0 overflow-hidden rounded-xl border border-border-subtle bg-surface-card sm:w-[150px]">
      <Image
        src={src}
        alt={`Póster de la ${kind} ${title}`}
        fill
        loading="lazy"
        sizes="150px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-2.5">
        <p className="line-clamp-2 text-xs font-semibold text-white">{title}</p>
        <div className="mt-1 flex items-center gap-2 text-[10px] text-gray-300">
          <span className="flex items-center gap-0.5 text-cyan">
            <Star size={11} className="fill-current" /> {item.vote_average.toFixed(1)}
          </span>
          {year && <span>{year}</span>}
        </div>
      </div>
    </div>
  );
}

/** A single cinematic auto-scrolling row (seamless: the posters are duplicated). */
function MarqueeRow({
  items,
  kind,
  reverse = false,
  duration,
}: {
  items: TmdbMedia[];
  kind: 'película' | 'serie';
  reverse?: boolean;
  duration: string;
}) {
  const group = (ariaHidden: boolean) => (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <PosterCard key={`${ariaHidden ? 'dup-' : ''}${item.id}`} item={item} kind={kind} />
      ))}
    </div>
  );

  return (
    <div className="marquee" style={{ '--marquee-duration': duration } as CSSProperties}>
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

export default async function MediaShowcase() {
  const [movies, series] = await Promise.all([getPopularMovies(12), getPopularSeries(12)]);

  // Graceful fallback: if TMDB is unavailable, render nothing (section hidden).
  if (movies.length === 0 && series.length === 0) return null;

  return (
    <section className="relative overflow-hidden border-t border-border-subtle bg-surface/30 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[720px] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(124,44,255,0.35), transparent)' }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            <Clapperboard size={14} /> Películas y series en 4K
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
            Películas y Series
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Descubre contenido para todos los gustos: más de 180.000 títulos bajo demanda en 4K, con
            estrenos actualizados cada semana. Estos son los más populares del momento.
          </p>
        </div>
      </div>

      {/* Cinematic auto-scrolling rows (full-bleed, masked edges) */}
      {movies.length > 0 && (
        <div className="relative mt-12">
          <h3 className="mx-auto mb-5 max-w-7xl px-6 text-lg font-bold text-white">Películas destacadas</h3>
          <MarqueeRow items={movies} kind="película" duration="55s" />
        </div>
      )}

      {series.length > 0 && (
        <div className="relative mt-10">
          <h3 className="mx-auto mb-5 max-w-7xl px-6 text-lg font-bold text-white">Series destacadas</h3>
          <MarqueeRow items={series} kind="serie" reverse duration="68s" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Required TMDB attribution — no implied endorsement */}
        <p className="mt-12 text-center text-xs text-gray-500">
          Datos y pósters proporcionados por{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-400 underline underline-offset-2 hover:text-cyan"
          >
            TMDB
          </a>
          . Este producto utiliza la API de TMDB pero no está avalado ni certificado por TMDB.
        </p>
      </div>
    </section>
  );
}
