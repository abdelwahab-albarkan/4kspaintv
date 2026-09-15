import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Scale, FileCheck, Info, ArrowRight } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import RelatedLinks from '@/components/common/RelatedLinks';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: '¿Es legal la IPTV en España? Guía clara y uso responsable',
  description:
    'Resolvemos si la IPTV es legal en España: qué dice la ley, los derechos del contenido y cómo hacer un uso responsable. Información clara, sin afirmaciones engañosas.',
  alternates: { canonical: '/iptv-legal-espana' },
  robots: { index: true, follow: true },
};

const POINTS: { icon: typeof Scale; title: string; body: string }[] = [
  {
    icon: Scale,
    title: 'La tecnología IPTV es legal',
    body: 'La IPTV (televisión por protocolo de internet) es, en sí misma, una tecnología legal: no es más que emitir vídeo a través de internet en lugar de por cable o satélite. Empresas, operadores y plataformas la utilizan de forma habitual y perfectamente legal.',
  },
  {
    icon: FileCheck,
    title: 'La clave está en los derechos del contenido',
    body: 'Lo que determina la legalidad de una emisión concreta no es la tecnología, sino si el contenido cuenta con los derechos de distribución correspondientes. Esos derechos pertenecen a cada emisora, competición o titular, y varían según el país y el acuerdo.',
  },
  {
    icon: ShieldCheck,
    title: 'Uso responsable',
    body: 'Recomendamos siempre un uso personal y responsable: respetar la legislación vigente y los derechos de autor, no compartir tus credenciales y utilizar el servicio dentro de las condiciones contratadas. Ante la duda sobre un contenido concreto, lo prudente es informarse antes.',
  },
  {
    icon: Info,
    title: 'Cómo elegir con criterio',
    body: 'Antes de contratar cualquier servicio conviene valorar la estabilidad, la transparencia en las condiciones, el soporte y la posibilidad de una prueba. Puedes revisar nuestra comparativa y opiniones para decidir con información, y consultar nuestras condiciones de uso.',
  },
];

export default function IptvLegalEspanaPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'IPTV legal en España', item: '/iptv-legal-espana' }]);

  const related = [
    { label: 'Qué es IPTV y cómo funciona', href: '/iptv' },
    { label: 'Comparativa de proveedores IPTV', href: '/comparativa-iptv' },
    { label: 'Opiniones de usuarios', href: '/opiniones-iptv' },
    { label: 'Política de uso aceptable', href: '/uso-aceptable' },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema]} />
      <main className="mx-auto max-w-4xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'IPTV legal en España', href: '/iptv-legal-espana' }]} />

        <section className="py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-cyan">
            <Scale size={14} /> Información y uso responsable
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
            ¿Es legal la IPTV en España?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Es una de las dudas más frecuentes. La respuesta corta: la IPTV como tecnología es legal;
            lo que marca la diferencia son los derechos del contenido que se emite. Aquí lo explicamos
            de forma clara, sin afirmaciones engañosas.
          </p>
        </section>

        <section className="grid gap-6 pb-4 sm:grid-cols-2">
          {POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="rounded-2xl border border-border-subtle bg-surface-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-950/60 text-cyan">
                  <Icon size={22} />
                </div>
                <h2 className="mt-4 text-lg font-bold text-white">{point.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{point.body}</p>
              </div>
            );
          })}
        </section>

        <section className="border-t border-border-subtle py-10">
          <p className="text-sm leading-relaxed text-gray-400">
            En 4K Spain TV apostamos por la transparencia. No hacemos afirmaciones de legalidad
            absolutas sobre contenidos de terceros, y te recomendamos revisar nuestras{' '}
            <Link href="/terminos" className="font-semibold text-cyan hover:underline">condiciones</Link>{' '}
            y la{' '}
            <Link href="/uso-aceptable" className="font-semibold text-cyan hover:underline">política de uso aceptable</Link>{' '}
            antes de contratar. Si quieres empezar, consulta los{' '}
            <Link href="/precios" className="font-semibold text-cyan hover:underline">planes</Link>{' '}
            o cómo{' '}
            <Link href="/comprar-iptv" className="font-semibold text-cyan hover:underline">contratar tu suscripción</Link>.
          </p>
          <Link
            href="/comprar-iptv"
            className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold"
          >
            Contratar con transparencia <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Cta />
      <RelatedLinks links={related} title="Sigue informándote" />
    </>
  );
}
