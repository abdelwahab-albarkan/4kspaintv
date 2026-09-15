import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '@/lib/content';

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'fill-current text-cyan' : 'text-gray-600'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="border-t border-border-subtle py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan">
            Opiniones
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Una experiencia pensada para durar: calidad, estabilidad y soporte cercano en español.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface-card/80 p-6 backdrop-blur-sm transition-colors hover:border-cyan/30"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />
                  <Quote size={22} className="text-primary-500/40" aria-hidden="true" />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-gray-200">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border-subtle/60 pt-4">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border-subtle">
                  <Image
                    src={review.avatar}
                    alt={review.avatarAlt}
                    fill
                    loading="lazy"
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{review.name}</span>
                  <span className="block text-xs text-gray-400">{review.location}, España</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Opiniones de carácter ilustrativo. Las imágenes son demostrativas y no corresponden a
          clientes identificados.
        </p>
      </div>
    </section>
  );
}
