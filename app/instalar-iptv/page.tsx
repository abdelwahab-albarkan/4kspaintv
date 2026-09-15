import type { Metadata } from 'next';
import Link from 'next/link';
import { Tv, Cpu, Smartphone, Laptop, ArrowRight } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getFaqSchema, getBreadcrumbSchema, getHowToSchema, type HowToStepItem } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/instalar-iptv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const HOWTO_STEPS: HowToStepItem[] = [
  {
    name: 'Paso 1: Elige e instala tu app IPTV',
    text: 'Descarga un reproductor compatible como IPTV Smarters Pro, IBO Player o TiviMate desde la tienda oficial de tu dispositivo o usando la app Downloader en Firestick.',
    url: pageData.route,
  },
  {
    name: 'Paso 2: Abre la app y añade un nuevo usuario',
    text: 'Inicia el reproductor en tu pantalla y selecciona "Añadir Usuario" o "Login con Xtream Codes API".',
    url: pageData.route,
  },
  {
    name: 'Paso 3: Introduce tus datos de suscripción',
    text: 'Introduce el Nombre de usuario, Contraseña y URL del Servidor que recibes por correo tras contratar tu plan en 4K Spain TV.',
    url: pageData.route,
  },
  {
    name: 'Paso 4: Guarda y carga tus contenidos en 4K',
    text: 'Haz clic en Guardar o Iniciar Sesión. Tu lista de canales de TV en directo, deportes y películas VOD se cargará automáticamente.',
    url: pageData.route,
  },
];

const DEVICE_QUICK_LINKS = [
  { label: 'Guía para Smart TV (General)', href: '/iptv-smart-tv', icon: Tv },
  { label: 'Guía para Samsung Smart TV (Tizen)', href: '/iptv-samsung', icon: Tv },
  { label: 'Guía para LG Smart TV (webOS)', href: '/iptv-lg', icon: Tv },
  { label: 'Guía para Amazon Fire TV Stick', href: '/iptv-fire-tv-stick', icon: Cpu },
  { label: 'Guía para Android TV y Google TV', href: '/iptv-android-tv', icon: Smartphone },
  { label: 'Guía para Apple TV y tvOS / iOS', href: '/iptv-apple-tv', icon: Laptop },
];

export default function InstalarIptvPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Instalar IPTV', item: pageData.route }]);
  const howToSchema = getHowToSchema(
    'Cómo instalar IPTV en cualquier dispositivo',
    pageData.description,
    HOWTO_STEPS
  );

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema, howToSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Instalar IPTV', href: pageData.route }]} />

        {/* Universal Installation Header (Single H1) */}
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

        {/* General On-Page Step-by-Step Walkthrough (Validates HowTo Schema) */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Pasos universales de configuración IPTV
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOWTO_STEPS.map((st, idx) => (
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

        {/* Device Specific Quick Links Section */}
        <section className="border-t border-border-subtle py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Guías de instalación específicas por dispositivo
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DEVICE_QUICK_LINKS.map((dev) => {
              const Icon = dev.icon;
              return (
                <Link
                  key={dev.href}
                  href={dev.href}
                  className="group flex items-center justify-between rounded-xl border border-border-subtle bg-surface-card p-5 transition-all hover:border-emerald-500/50 hover:bg-surface-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-950/60 text-emerald-400">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {dev.label}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
