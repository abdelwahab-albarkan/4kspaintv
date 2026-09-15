import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Tv, Cpu, Smartphone, Monitor, ArrowRight } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import Faq from '@/components/sections/Faq';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { DEVICE_IMAGES, DEVICE_GALLERY } from '@/lib/assets';
import { getProductSchema, getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/dispositivos'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

const DEVICE_CATEGORIES = [
  {
    name: 'Smart TV (Samsung & LG)',
    slug: '/iptv-smart-tv',
    icon: Tv,
    desc: 'Compatibilidad directa en televisores Samsung Tizen OS y LG webOS sin decodificador externo.',
  },
  {
    name: 'Amazon Firestick / Fire TV',
    slug: '/iptv-fire-tv-stick',
    icon: Cpu,
    desc: 'Guía paso a paso para instalar en Fire TV Stick 4K, Lite y Cube usando Downloader.',
  },
  {
    name: 'Samsung Smart TV',
    slug: '/iptv-samsung',
    icon: Tv,
    desc: 'Guía específica para televisores Samsung Tizen OS con IBO Player y Smart ONE.',
  },
  {
    name: 'LG Smart TV',
    slug: '/iptv-lg',
    icon: Tv,
    desc: 'Guía detallada para televisores LG webOS desde la LG Content Store oficial.',
  },
  {
    name: 'Android TV / Google TV',
    slug: '/iptv-android-tv',
    icon: Smartphone,
    desc: 'Instalación en Xiaomi Box, Nvidia Shield y televisores Sony/Philips con Google Play Store.',
  },
  {
    name: 'Apple TV / iOS',
    slug: '/iptv-apple-tv',
    icon: Monitor,
    desc: 'Tutorial para Apple TV 4K, iPhone y iPad usando Smarters Player Lite.',
  },
];

export default function DispositivosHubPage() {
  const productSchema = getProductSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Dispositivos', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Dispositivos', href: pageData.route }]} />

        {/* Hub Header (Single H1) */}
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

        {/* Device Categories Cards */}
        <section className="pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEVICE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-border-subtle bg-surface-card transition-all hover:border-emerald-500/50"
                >
                  {DEVICE_IMAGES[cat.slug] && (
                    <div className="relative aspect-video w-full overflow-hidden bg-background/40">
                      <Image
                        src={DEVICE_IMAGES[cat.slug].src}
                        alt={DEVICE_IMAGES[cat.slug].alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-950/60 text-emerald-400">
                      <Icon size={22} />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-white">{cat.name}</h2>
                    <p className="mt-2 text-sm text-gray-400">{cat.desc}</p>
                  </div>

                  <div className="mx-6 mb-6 border-t border-border-subtle/50 pt-4">
                    <Link
                      href={cat.slug}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Ver guía completa de este dispositivo <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* More compatible devices — gallery */}
        <section className="border-t border-border-subtle pb-20 pt-12">
          <h2 className="text-2xl font-bold text-white">Más dispositivos compatibles</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400">
            Nuestro servicio IPTV funciona en móviles, ordenadores, consolas y reproductores
            multimedia. Estos son algunos de los dispositivos donde puedes ver todos tus canales.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {DEVICE_GALLERY.map((device) => (
              <div
                key={device.label}
                className="overflow-hidden rounded-xl border border-border-subtle bg-surface-card"
              >
                <div className="relative aspect-square w-full bg-background/40">
                  <Image
                    src={device.src}
                    alt={device.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                    className="object-contain p-3"
                  />
                </div>
                <p className="border-t border-border-subtle/50 px-3 py-2.5 text-center text-xs font-medium text-gray-200">
                  {device.label}
                </p>
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
