import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { APP_SHOTS } from '@/lib/assets';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/aplicaciones-iptv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const APPS_HUB_LIST = [
  {
    name: 'IPTV Smarters Pro',
    slug: '/iptv-smarters-pro',
    description: 'La aplicación más popular para Firestick, Android, iOS y Smart TV. Interfaz fluida con soporte Xtream Codes API.',
    featured: true,
    platforms: ['Firestick', 'Android TV', 'iOS', 'Windows', 'Mac'],
  },
  {
    name: 'TiviMate IPTV Player',
    slug: '/instalar-iptv',
    description: 'Diseñada específicamente para Android TV y Firestick. Destaca por su EPG avanzado y reproducción multi-pantalla.',
    featured: false,
    platforms: ['Android TV', 'Firestick', 'Google TV'],
  },
  {
    name: 'IBO Player',
    slug: '/instalar-iptv',
    description: 'Excelente opción optimizada para Smart TV Samsung (Tizen) y LG (webOS) con carga rápida de listas.',
    featured: false,
    platforms: ['Samsung Tizen', 'LG webOS'],
  },
  {
    name: 'XCIPTV Player',
    slug: '/instalar-iptv',
    description: 'Reproductor ligero y potente compatible con Android y Fire TV, con reproductor multimedia integrado.',
    featured: false,
    platforms: ['Android', 'Firestick'],
  },
  {
    name: 'Smart ONE IPTV',
    slug: '/instalar-iptv',
    description: 'Aplicación moderna para Smart TV y Android con soporte multi-lenguaje y organización automática de categorías.',
    featured: false,
    platforms: ['Smart TV', 'Android'],
  },
  {
    name: 'GSE Smart IPTV',
    slug: '/instalar-iptv',
    description: 'Solución completa e intuitiva para dispositivos iOS, iPhone, iPad y Apple TV.',
    featured: false,
    platforms: ['iOS', 'Apple TV'],
  },
];

export default function AplicacionesIptvPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Aplicaciones IPTV', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Aplicaciones IPTV', href: pageData.route }]} />
        
        {/* Overview Header (Single H1) */}
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

        {/* Hub App Cards Grid */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Catálogo de reproductores recomendados</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {APPS_HUB_LIST.map((app) => (
              <div
                key={app.name}
                className={`flex flex-col justify-between rounded-xl border p-6 bg-surface-card ${
                  app.featured ? 'border-emerald-500/60 shadow-glow' : 'border-border-subtle'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{app.name}</h3>
                    {app.featured && (
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                        Destacado
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-300">{app.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {app.platforms.map((p) => (
                      <span key={p} className="rounded bg-surface px-2 py-0.5 text-xs text-gray-400">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50">
                  <Link
                    href={app.slug}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Ver guía de instalación <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* App interface screenshots */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="mb-8 text-2xl font-bold text-white">Así se ven las aplicaciones IPTV por dentro</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {APP_SHOTS.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-video overflow-hidden rounded-xl border border-border-subtle bg-surface-card"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Hub Link Block to Device Pages & General Installation Guide */}
        <section className="my-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center">
          <h2 className="text-2xl font-bold text-white">¿Necesitas ayuda para instalar tu app?</h2>
          <p className="mt-2 text-gray-300 max-w-xl mx-auto">
            Consulta nuestras guías paso a paso clasificadas por tipo de dispositivo o lee el tutorial general de configuración.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/instalar-iptv"
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-bold text-black hover:bg-emerald-400 transition-colors"
            >
              Guía de Instalación General
            </Link>
            <Link
              href="/dispositivos"
              className="rounded-full border border-border-subtle bg-surface px-6 py-2.5 text-sm font-semibold text-white hover:bg-surface-hover transition-colors"
            >
              Ver Dispositivos Compatibles
            </Link>
          </div>
        </section>
      </main>

      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
