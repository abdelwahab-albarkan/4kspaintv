import type { Metadata } from 'next';
import Link from 'next/link';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Canales y contenido | +50.000 canales en directo',
  description:
    'Deportes, cine, series, noticias e infantil de España y del mundo. Descubre cómo se organiza el catálogo de canales y VOD de 4K Spain TV.',
  alternates: { canonical: '/canales' },
};

const CATEGORIES: { name: string; items: string; note?: { label: string; href: string } }[] = [
  {
    name: 'Deportes',
    items: 'LaLiga, Champions League, Fórmula 1, MotoGP, tenis y más',
    note: { label: 'Ver IPTV deporte', href: '/iptv-deporte' },
  },
  { name: 'Cine y series', items: 'Amplio catálogo bajo demanda, estrenos y clásicos' },
  { name: 'Nacionales', items: 'La 1, Antena 3, Telecinco, La Sexta, Cuatro y autonómicas' },
  { name: 'Internacionales', items: 'Canales de Europa, América y otros países en varios idiomas' },
  { name: 'Noticias', items: 'Informativos nacionales e internacionales 24 horas' },
  { name: 'Infantil', items: 'Dibujos y contenido familiar para los más pequeños' },
];

export default function CanalesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Canales', item: '/canales' }]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Canales', href: '/canales' }]} />

        <section className="py-10 md:py-14">
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
            Canales y contenido
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            El catálogo reúne canales en directo y contenido bajo demanda (VOD) organizados por
            categorías, para que encuentres con facilidad lo que buscas desde la propia aplicación.
          </p>
        </section>

        <section className="pb-4 text-gray-300">
          <h2 className="font-display text-2xl font-bold text-white">Cómo se organiza el catálogo</h2>
          <p className="mt-3 max-w-3xl leading-relaxed">
            Al iniciar sesión en tu aplicación, el reproductor carga las categorías y la guía de
            programación (EPG). Los canales en directo se agrupan por temática y el contenido a la
            carta (películas y series) aparece en su propia sección, con opción de pausar, avanzar o
            retomar. La disponibilidad concreta puede variar y la calidad de imagen depende del
            contenido y de tu conexión. Puedes comprobar cómo funciona todo esto en la guía{' '}
            <Link href="/iptv" className="text-cyan hover:underline">¿qué es la IPTV?</Link>.
          </p>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="flex flex-col rounded-xl border border-border-subtle bg-surface-card p-6"
            >
              <h2 className="text-lg font-semibold text-white">{category.name}</h2>
              <p className="mt-2 flex-1 text-sm text-gray-400">{category.items}</p>
              {category.note && (
                <Link href={category.note.href} className="mt-3 text-sm font-medium text-cyan hover:underline">
                  {category.note.label} →
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-gray-300">
          ¿Listo para empezar? Consulta los planes y{' '}
          <Link href="/comprar-iptv" className="text-cyan hover:underline">contrata tu suscripción IPTV</Link>{' '}
          o revisa los{' '}
          <Link href="/dispositivos" className="text-cyan hover:underline">dispositivos compatibles</Link>.
        </p>
      </main>
      <Cta />
    </>
  );
}
