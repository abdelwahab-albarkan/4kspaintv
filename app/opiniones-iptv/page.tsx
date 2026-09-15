import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getProductSchema, getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/opiniones-iptv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const REVIEWS = [
  {
    name: 'Carlos M. (Madrid)',
    rating: 5,
    date: 'Febrero 2026',
    comment:
      'Llevo 6 meses con la suscripción de 12 meses y la estabilidad en los partidos de Champions es impresionante. Ni un solo corte en 4K.',
  },
  {
    name: 'Alejandro R. (Barcelona)',
    rating: 5,
    date: 'Enero 2026',
    comment:
      'Instalación rapidísima en mi Firestick. El soporte técnico por WhatsApp respondió en menos de 5 minutos cuando tenía dudas.',
  },
  {
    name: 'María T. (Valencia)',
    rating: 5,
    date: 'Febrero 2026',
    comment:
      'La mejor calidad de imagen que he probado. Los canales de deportes van fluido a 60fps y el catálogo de series bajo demanda es gigantesco.',
  },
];

export default function OpinionesIptvPage() {
  const productSchema = getProductSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Opiniones IPTV', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Opiniones IPTV', href: pageData.route }]} />
        <section className="py-12 text-center md:py-16">
          <span className="inline-block rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-emerald-400">
            {pageData.introBadge}
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-white md:text-5xl">
            {pageData.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            {pageData.introText}
          </p>
        </section>

        {/* Customer Reviews Section */}
        <section className="pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((rev) => (
              <div
                key={rev.name}
                className="rounded-xl border border-border-subtle bg-surface-card p-6"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-gray-300">&ldquo;{rev.comment}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-border-subtle/40 pt-4 text-xs">
                  <span className="font-semibold text-white">{rev.name}</span>
                  <span className="text-gray-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Pricing />
      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
