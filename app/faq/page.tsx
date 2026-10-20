import type { Metadata } from 'next';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes | Todo sobre IPTV',
  description:
    'Resolvemos las dudas más habituales sobre IPTV: qué es, dispositivos compatibles, activación, velocidad de internet recomendada y más.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Preguntas Frecuentes', item: '/faq' }]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Preguntas Frecuentes', href: '/faq' }]} />
      </div>
      <div className="mx-auto max-w-3xl px-6 pt-10 text-center">
        <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
          Preguntas frecuentes
        </h1>
      </div>
      <Faq />
      <Cta />
    </>
  );
}
