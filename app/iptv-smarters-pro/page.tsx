import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { SMARTERS_SHOTS } from '@/lib/assets';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/iptv-smarters-pro'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const SETUP_STEPS = [
  {
    step: 'Paso 1',
    title: 'Descarga e instala IPTV Smarters Pro',
    desc: 'Descárgalo desde la Google Play Store, Apple App Store o mediante la app Downloader en tu Firestick introduciendo el código oficial de descarga.',
  },
  {
    step: 'Paso 2',
    title: 'Selecciona la opción de acceso',
    desc: 'Abre la app y selecciona "Añadir usuario" -> Selecciona "Iniciar sesión con la API de Xtream Codes" (la opción recomendada por su estabilidad).',
  },
  {
    step: 'Paso 3',
    title: 'Introduce tus datos de suscripción',
    desc: 'Introduce el Nombre de usuario, Contraseña y URL del Servidor que recibiste tras comprar tu suscripción en 4K Spain TV.',
  },
  {
    step: 'Paso 4',
    title: 'Carga el contenido y disfruta',
    desc: 'Haz clic en "Add User". La app descargará los canales en directo, la guía EPG y la biblioteca de películas en 4K. ¡Listo para ver!',
  },
];

export default function IptvSmartersProPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'IPTV Smarters Pro', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'IPTV Smarters Pro', href: pageData.route }]} />
        
        {/* Setup Intent Header (Single H1) */}
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
          <div className="relative mx-auto mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-border-subtle bg-surface-card shadow-2xl glow-purple">
            <Image
              src={SMARTERS_SHOTS[0].src}
              alt={SMARTERS_SHOTS[0].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        </section>

        {/* Step-by-Step Setup Guide Section */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Pasos para configurar IPTV Smarters Pro con Xtream Codes
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SETUP_STEPS.map((s) => (
              <div key={s.step} className="rounded-xl border border-border-subtle bg-surface-card p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block rounded bg-emerald-950/80 px-2.5 py-1 text-xs font-bold text-emerald-400">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/comprar-iptv"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-bold text-black hover:bg-emerald-400 transition-colors"
            >
              Comprar suscripción para IPTV Smarters <ArrowRight size={18} />
            </Link>
            <Link
              href="/instalar-iptv"
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-7 py-3 font-semibold text-white hover:bg-surface-hover transition-colors"
            >
              Ver guía de instalación en otros dispositivos
            </Link>
          </div>
        </section>
        {/* Smarters screenshots */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="mb-8 text-2xl font-bold text-white">Capturas de IPTV Smarters Pro</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SMARTERS_SHOTS.map((shot) => (
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
      </main>

      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
