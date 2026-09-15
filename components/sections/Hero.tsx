import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, PlayCircle, ShieldCheck, Zap } from 'lucide-react';
import { HOME_HERO } from '@/lib/assets';

const HERO_STATS = [
  { value: '+50.000', label: 'Canales y VOD' },
  { value: '4K', label: 'Calidad Ultra HD' },
  { value: '99,9%', label: 'Tiempo activo' },
];

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      {/* Cinematic ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[840px] max-w-full -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(124,44,255,0.35), transparent)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* ─── Left: copy ─────────────────────────────────────── */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
            TV • Deportes • Películas • Series
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            IPTV España: TV en directo,{' '}
            <span className="text-gradient">fútbol, películas y series</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Todo tu entretenimiento en un solo lugar. Más de 50.000 canales en directo, toda LaLiga y
            la Champions, y 180.000 películas y series bajo demanda en 4K real. Compatible con Smart
            TV, Android, Fire TV Stick y móvil.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/precios"
              className="btn-cta inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold shadow-[0_0_30px_-6px_rgba(196,91,255,0.6)]"
            >
              Ver planes <ArrowRight size={18} />
            </Link>
            <Link
              href="/instalar-iptv"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-cyan/40 hover:bg-surface"
            >
              <PlayCircle size={18} /> Cómo funciona
            </Link>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
            <span className="flex items-center gap-1.5 text-cyan"><Zap size={15} /> Prueba disponible</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-cyan" /> Pago seguro</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-cyan" /> Soporte en español</span>
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border-subtle pt-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</span>
                  <span className="mt-1 block text-xs text-gray-400">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ─── Right: cinematic hero image ────────────────────── */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border-subtle shadow-2xl sm:aspect-video lg:aspect-[4/3]">
            <Image
              src={HOME_HERO.src}
              alt={HOME_HERO.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
            {/* Cinematic overlays */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-[#0c0518]/70 via-transparent to-cyan/10" />
            <div aria-hidden="true" className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

            {/* Floating quality chip */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" /> Streaming 4K en directo
            </div>
          </div>

          {/* Glow behind the image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full opacity-70 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(0,217,255,0.35), transparent)' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-8 -z-10 h-48 w-48 rounded-full opacity-60 blur-3xl"
            style={{ background: 'radial-gradient(closest-side, rgba(196,91,255,0.35), transparent)' }}
          />
        </div>
      </div>
    </section>
  );
}
