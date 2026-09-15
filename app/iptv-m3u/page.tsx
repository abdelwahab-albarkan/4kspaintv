import type { Metadata } from 'next';
import Link from 'next/link';
import { Database, Code, CheckCircle2, ArrowRight } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getFaqSchema, getBreadcrumbSchema, getHowToSchema, type HowToStepItem } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/iptv-m3u'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const TECHNICAL_STEPS: HowToStepItem[] = [
  {
    name: 'Paso 1: Selecciona el formato de conexión (Xtream Codes API recomendable)',
    text: 'Abre tu reproductor IPTV preferido (ej. IPTV Smarters, TiviMate, IBO Player) y selecciona "Añadir Usuario" mediante Xtream Codes API.',
    url: pageData.route,
  },
  {
    name: 'Paso 2: Introduce el Servidor / Host URL',
    text: 'Escribe la URL del servidor facilitada (ej. http://servidor-iptv.com:8080) respetando exactamente el puerto y protocolo.',
    url: pageData.route,
  },
  {
    name: 'Paso 3: Introduce tus credenciales de usuario y contraseña',
    text: 'Copia y pega con precisión tu Nombre de usuario y Contraseña asignados.',
    url: pageData.route,
  },
  {
    name: 'Paso 4: Sincroniza la lista M3U y la guía EPG XML',
    text: 'Guarda la conexión. La aplicación procesará la lista de reproducción M3U8 y descargará la programación EPG.',
    url: pageData.route,
  },
];

const DEVICE_LINKS = [
  { label: 'Configurar en Smart TV Samsung', href: '/iptv-samsung' },
  { label: 'Configurar en Smart TV LG', href: '/iptv-lg' },
  { label: 'Configurar en Amazon Firestick', href: '/iptv-fire-tv-stick' },
  { label: 'Configurar en Android TV', href: '/iptv-android-tv' },
  { label: 'Configurar en Apple TV', href: '/iptv-apple-tv' },
  { label: 'Ver todos los dispositivos', href: '/dispositivos' },
];

export default function IptvM3uPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'IPTV M3U & Xtream', item: pageData.route }]);
  const howToSchema = getHowToSchema(
    'Cómo configurar una lista IPTV M3U y Xtream Codes API',
    pageData.description,
    TECHNICAL_STEPS
  );

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema, howToSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'IPTV M3U & Xtream', href: pageData.route }]} />

        {/* Technical Header (Single H1) */}
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

        {/* M3U vs Xtream Codes Comparison Block */}
        <section className="pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/40 bg-surface-card p-6">
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-bold text-white">Xtream Codes API (Recomendado)</h2>
              </div>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Es el método de conexión más estable y rápido. Organiza automáticamente los canales en categorías de directo, deportes y VOD, sincronizando la guía EPG en tiempo real.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Conexión protegida con credenciales
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Cambio de canal ultrarrápido a 60 FPS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Carga automática de carátulas e información VOD
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface-card p-6">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-emerald-400" />
                <h2 className="text-xl font-bold text-white">Listas de reproducción M3U / M3U8</h2>
              </div>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                Consiste en una URL directa que descarga un archivo de texto con todas las transmisiones HTTP/HLS. Ideal para reproductores antiguos o receptores tipo VLC.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Compatibilidad universal con cualquier reproductor
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Soporte para formatos TS y M3U8
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" /> Requiere URL de EPG XML separada en algunas apps
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* On-Page Step-by-Step Technical Setup */}
        <section className="border-t border-border-subtle py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Paso a paso técnico para añadir tus credenciales M3U / Xtream
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TECHNICAL_STEPS.map((st, idx) => (
              <div key={st.name} className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-card p-6">
                <div>
                  <span className="inline-block rounded bg-emerald-950/80 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    Paso {idx + 1}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{st.name}</h3>
                  <p className="mt-2 text-xs text-gray-300 leading-relaxed">{st.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links to Device Guides */}
        <section className="border-t border-border-subtle py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Configura M3U / Xtream en tu dispositivo
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVICE_LINKS.map((dev) => (
              <Link
                key={dev.href}
                href={dev.href}
                className="group flex items-center justify-between rounded-xl border border-border-subtle bg-surface-card p-4 transition-all hover:border-emerald-500/50 hover:bg-surface-hover"
              >
                <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {dev.label}
                </span>
                <ArrowRight size={16} className="text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
