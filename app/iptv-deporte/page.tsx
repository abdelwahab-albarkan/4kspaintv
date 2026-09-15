import type { Metadata } from 'next';
import Link from 'next/link';
import { Trophy, CheckCircle2, ArrowRight } from 'lucide-react';
import SportsTeaser from '@/components/sections/SportsTeaser';
import FootballHub from '@/components/football/FootballHub';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getProductSchema, getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/iptv-deporte'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const SPORTS_CATEGORIES = [
  {
    category: 'Fútbol Nacional e Internacional',
    details: 'Todos los partidos de LaLiga EA Sports, LaLiga Hypermotion, UEFA Champions League, UEFA Europa League, Premier League y Serie A en 4K y FHD.',
  },
  {
    category: 'Deportes de Motor (F1 & MotoGP)',
    details: 'Grandes Premios de Fórmula 1 y carreras de MotoGP en directo con cámaras de a bordo y tasa de refresco a 60 FPS sin retraso.',
  },
  {
    category: 'Baloncesto Profesional',
    details: 'Toda la temporada regular y Playoffs de la NBA, EuroLiga de Baloncesto y Liga Endesa ACB con sonido ambiente.',
  },
  {
    category: 'Tenis & Grandes Torneos',
    details: 'Roland Garros, Wimbledon, US Open, Australian Open y todos los torneos ATP Masters 1000 y WTA.',
  },
  {
    category: 'Artes Marciales & Combate PPV',
    details: 'Veladas completas de UFC, boxeo estelar, WWE y eventos de combate en directo sin cortes.',
  },
  {
    category: 'Deportes de EE.UU. & Motor Global',
    details: 'NFL Super Bowl, MLB Béisbol, NHL Hockey, NASCAR e IndyCar con múltiples opciones de locución.',
  },
];

export default function IptvDeportePage() {
  const productSchema = getProductSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'IPTV Deporte', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'IPTV Deporte', href: pageData.route }]} />

        {/* Sports Hub Header (Single H1) */}
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
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/precios"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 font-bold text-black hover:bg-emerald-400 transition-colors shadow-lg"
            >
              Ver planes de suscripción para deportes <ArrowRight size={18} />
            </Link>
            <Link
              href="/dispositivos"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-7 py-3.5 font-semibold text-white hover:bg-surface-hover transition-colors"
            >
              Ver dispositivos compatibles
            </Link>
          </div>
        </section>

        {/* Live football data (API-Football + TheSportsDB), with graceful fallback */}
        <FootballHub />

        {/* Sports Coverage Grid */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Cobertura deportiva completa en alta definición 4K
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SPORTS_CATEGORIES.map((sp) => (
              <div
                key={sp.category}
                className="rounded-xl border border-border-subtle bg-surface-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-emerald-400 shrink-0" />
                    <h3 className="text-lg font-bold text-white">{sp.category}</h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{sp.details}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 size={16} /> Emisión fluida a 60 FPS
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Sports Teaser Section (matches preview off — FootballHub above shows them) */}
        <SportsTeaser preview={false} />
      </main>

      <Pricing />
      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
