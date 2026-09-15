import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { HOME_DEVICE_CARDS } from '@/lib/assets';

export default function DeviceCompatibility() {
  return (
    <section className="border-t border-border-subtle bg-surface/50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-cyan">
            Multi-Dispositivo
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-white md:text-4xl">
            Compatible con todos tus dispositivos
          </h2>
          <p className="mt-4 text-gray-300">
            Disfruta de IPTV España en tu televisor, móvil o tablet sin necesidad de antenas ni
            cables adicionales. Una sola cuenta para todas tus pantallas.
          </p>
        </div>

        {/* Cards — 6-col grid on desktop: each card spans 2 (→ 3 per row); the
            4th card starts at column 2 so the last two are centered (no empty gap). */}
        <div className="mx-auto mt-14 grid max-w-[1160px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {HOME_DEVICE_CARDS.map((device, i) => (
            <article
              key={device.title}
              className={`group overflow-hidden rounded-2xl border border-border-subtle bg-surface-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_0_34px_-10px_rgba(0,217,255,0.4)] lg:col-span-2 ${
                i === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background/40">
                <Image
                  src={device.src}
                  alt={device.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-surface-card/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  {device.title}
                  <CheckCircle2 size={16} className="shrink-0 text-cyan" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{device.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/dispositivos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-cyan-bright"
          >
            Ver guías detalladas de instalación para cada dispositivo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
