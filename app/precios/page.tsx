import type { Metadata } from 'next';
import Pricing from '@/components/sections/Pricing';
import PricingCalculator from '@/components/commerce/PricingCalculator';
import TrustBar from '@/components/commerce/TrustBar';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { KEYWORD_MAP } from '@/lib/keyword-map';
import { getProductSchema, getFaqSchema, getBreadcrumbSchema } from '@/lib/structured-data';

const pageData = KEYWORD_MAP['/precios'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function PreciosPage() {
  const productSchema = getProductSchema();
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Precios', item: pageData.route }]);

  return (
    <>
      <JsonLd data={[productSchema, faqSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Precios', href: pageData.route }]} />
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
      </main>

      <Pricing />
      <PricingCalculator />
      <TrustBar />
      <Faq />
      <Cta />
      <RelatedLinks links={pageData.relatedLinks} />
    </>
  );
}
