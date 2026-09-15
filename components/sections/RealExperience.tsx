import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, MonitorPlay } from 'lucide-react';
import { PROOF_MAIN, PROOF_GRID } from '@/lib/assets';

const TRUST_POINTS = [
  'Se instala en minutos con una app y tus datos de acceso.',
  'La misma cuenta funciona en el televisor, el móvil y la tablet.',
  'Interfaz fluida con canales en directo, películas y series bajo demanda.',
];

export default function RealExperience() {
  return (
    <section className="border-t border-border-subtle bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan">
              <MonitorPlay size={14} /> Experiencia real
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Así funciona en tus dispositivos
            </h2>
            <p className="mt-4 max-w-xl text-gray-300">
              No es un montaje: es el servicio funcionando en pantallas reales. Configúralo una vez y
              disfruta de todo tu contenido en cualquier dispositivo. Descubre{' '}
              <Link href="/mejor-iptv" className="text-cyan hover:underline">qué hace bueno a un servicio de IPTV</Link>{' '}
              o pasa directamente a{' '}
              <Link href="/comprar-iptv" className="text-cyan hover:underline">contratar tu suscripción</Link>.
            </p>
            <ul className="mt-8 space-y-4">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyan" />
                  <span className="text-sm text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: main device mockup */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-[#160a29] to-[#0c0518] p-4 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src={PROOF_MAIN.src}
                  alt={PROOF_MAIN.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain"
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full opacity-70 blur-3xl"
              style={{ background: 'radial-gradient(closest-side, rgba(0,217,255,0.30), transparent)' }}
            />
          </div>
        </div>

        {/* Below: supporting screenshots grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {PROOF_GRID.map((shot) => (
            <div
              key={shot.src}
              className="group relative aspect-video overflow-hidden rounded-2xl border border-border-subtle bg-surface-card"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div aria-hidden="true" className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
