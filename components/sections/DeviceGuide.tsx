import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import {
  getProductSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from '@/lib/structured-data';
import { DEVICE_IMAGES } from '@/lib/assets';

export interface RecommendedApp {
  name: string;
  description: string;
  store: string;
}

export interface SetupStep {
  stepNumber: number;
  title: string;
  detail: string;
}

export interface TroubleshootingItem {
  question: string;
  answer: string;
}

export interface DeviceGuideProps {
  route: string;
  pageTitle: string;
  metaDescription: string;
  osName: string;
  introBadge: string;
  h1: string;
  introText: string;
  requirements: string[];
  recommendedApps: RecommendedApp[];
  steps: SetupStep[];
  troubleshooting: TroubleshootingItem[];
  heroImage?: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  siblingLinks: { label: string; href: string }[];
}

export default function DeviceGuide({
  route,
  h1,
  introBadge,
  introText,
  requirements,
  recommendedApps,
  steps,
  troubleshooting,
  heroImage,
  siblingLinks,
}: DeviceGuideProps) {
  const productSchema = getProductSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: h1, item: route }]);
  // Fall back to the central asset map so every device route gets its own image.
  const img = heroImage ?? DEVICE_IMAGES[route];

  return (
    <>
      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />

      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: h1, href: route }]} />

        {/* Hero Section with Single H1 */}
        <section className="py-12 md:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-emerald-400">
                {introBadge}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold text-white md:text-5xl leading-tight">
                {h1}
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                {introText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/comprar-iptv"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold text-black hover:bg-emerald-400 transition-colors shadow-lg"
                >
                  Comprar suscripción IPTV <ArrowRight size={18} />
                </Link>
                <Link
                  href="/instalar-iptv"
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-6 py-3 font-semibold text-white hover:bg-surface-hover transition-colors"
                >
                  Guía general de instalación
                </Link>
              </div>
            </div>

            {/* Above-fold hero image (from prop or central asset map) */}
            {img && (
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-card shadow-2xl glow-purple">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={heroImage?.priority ?? true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* System Requirements */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Requisitos de sistema e internet</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {requirements.map((req) => (
              <div
                key={req}
                className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface-card p-4"
              >
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Apps */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Aplicaciones IPTV recomendadas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {recommendedApps.map((app) => (
              <div
                key={app.name}
                className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-card p-6"
              >
                <div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded">
                    {app.store}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white">{app.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{app.description}</p>
                </div>
                <Link
                  href="/iptv-smarters-pro"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Ver tutorial de la app <ExternalLink size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Installation Guide */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="text-2xl font-bold text-white mb-8">Paso a paso de instalación</h2>
          <div className="space-y-4">
            {steps.map((st) => (
              <div
                key={st.stepNumber}
                className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border border-border-subtle bg-surface-card p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black font-extrabold text-sm">
                  {st.stepNumber}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{st.title}</h3>
                  <p className="mt-1 text-sm text-gray-300 leading-relaxed">{st.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OS Specific Troubleshooting */}
        <section className="border-t border-border-subtle py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Solución de problemas frecuentes</h2>
          <div className="space-y-4">
            {troubleshooting.map((tb) => (
              <div key={tb.question} className="rounded-xl border border-border-subtle bg-surface-card p-5">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <HelpCircle size={18} className="text-emerald-400 shrink-0" />
                  {tb.question}
                </h3>
                <p className="mt-2 text-sm text-gray-300 pl-6 leading-relaxed">{tb.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Faq />
      <Cta />
      <RelatedLinks links={siblingLinks} title="Otras guías de dispositivos e instalación" />
    </>
  );
}
