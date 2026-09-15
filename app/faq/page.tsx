import type { Metadata } from 'next';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes | Todo sobre IPTV',
  description:
    'Resolvemos las dudas más habituales sobre IPTV: qué es, dispositivos compatibles, activación, velocidad de internet recomendada y más.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pt-16 text-center">
        <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
          Preguntas frecuentes
        </h1>
      </div>
      <Faq />
      <Cta />
    </>
  );
}
