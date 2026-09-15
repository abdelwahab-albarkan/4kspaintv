import type { Metadata } from 'next';
import Link from 'next/link';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: '¿Qué es IPTV? Guía completa | Televisión por internet',
  description:
    'Descubre qué es la IPTV, cómo funciona la televisión por internet y qué necesitas para usarla en España. Guía sencilla y honesta de 4K Spain TV.',
  alternates: { canonical: '/iptv' },
};

export default function IptvPage() {
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'IPTV', item: '/iptv' }]);

  return (
    <>
      <JsonLd data={[breadcrumbSchema]} />
      <main className="mx-auto max-w-3xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'IPTV', href: '/iptv' }]} />

        <section className="py-10 md:py-14">
          <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">
            ¿Qué es la <span className="text-gradient">IPTV</span>?
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            La IPTV (Televisión por Protocolo de Internet) es una forma de ver televisión en la que
            los canales y el contenido llegan a tu dispositivo a través de tu conexión a internet, en
            lugar de hacerlo por cable coaxial o por antena parabólica. En esta guía te explicamos, de
            forma sencilla, cómo funciona y qué necesitas para utilizarla.
          </p>
        </section>

        <article className="space-y-10 pb-8 text-gray-300">
          <section>
            <h2 className="font-display text-2xl font-bold text-white">Cómo funciona la IPTV</h2>
            <p className="mt-3 leading-relaxed">
              En lugar de recibir una señal única y cerrada, la IPTV transmite el vídeo por internet
              hasta una aplicación instalada en tu dispositivo. Al abrir la app e introducir tus datos
              de acceso, esta descarga la lista de canales y el catálogo bajo demanda y los reproduce
              al momento. Puedes cambiar de canal, pausar el contenido a la carta o consultar la guía
              de programación (EPG) directamente desde la propia aplicación.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white">Qué necesitas para usar IPTV</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
              <li>Una conexión a internet estable (se recomienda un mínimo aproximado de 25 Mbps para HD y 50 Mbps para 4K).</li>
              <li>Un dispositivo compatible: Smart TV, Amazon Fire TV Stick, Android TV, Apple TV, móvil, tablet u ordenador.</li>
              <li>Una aplicación reproductora de IPTV instalada en ese dispositivo.</li>
              <li>Tus datos de acceso (usuario y contraseña o los datos Xtream Codes / una lista M3U).</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Puedes consultar los pasos concretos en nuestra{' '}
              <Link href="/instalar-iptv" className="text-cyan hover:underline">guía de instalación</Link>{' '}
              y ver todos los{' '}
              <Link href="/dispositivos" className="text-cyan hover:underline">dispositivos compatibles</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white">
              Diferencia entre IPTV y televisión tradicional
            </h2>
            <p className="mt-3 leading-relaxed">
              La televisión por cable o satélite depende de una infraestructura física (cable coaxial
              o antena) y de una programación fija. La IPTV, en cambio, viaja por tu conexión a
              internet, lo que permite una oferta más amplia, contenido bajo demanda y el uso en
              varios dispositivos sin instalaciones adicionales. A cambio, su funcionamiento depende de
              la calidad de tu conexión: sin internet, no hay reproducción.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white">Ventajas y limitaciones</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-subtle bg-surface-card p-5">
                <h3 className="font-semibold text-white">Ventajas</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Amplio catálogo de canales y contenido a la carta.</li>
                  <li>Compatible con la mayoría de dispositivos actuales.</li>
                  <li>Contratación por periodos, sin permanencia.</li>
                  <li>Calidad hasta 4K cuando la conexión lo permite.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border-subtle bg-surface-card p-5">
                <h3 className="font-semibold text-white">Limitaciones</h3>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm">
                  <li>La estabilidad y la calidad dependen de tu conexión a internet.</li>
                  <li>Una red wifi saturada puede provocar cortes; el cable ofrece mejor experiencia.</li>
                  <li>Requiere instalar y configurar una aplicación la primera vez.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white">Compatibilidad y dispositivos</h2>
            <p className="mt-3 leading-relaxed">
              La IPTV funciona en prácticamente cualquier pantalla moderna. Tenemos guías específicas
              para los equipos más habituales:{' '}
              <Link href="/iptv-smart-tv" className="text-cyan hover:underline">Smart TV</Link>,{' '}
              <Link href="/iptv-fire-tv-stick" className="text-cyan hover:underline">Amazon Fire TV Stick</Link>,{' '}
              <Link href="/iptv-android-tv" className="text-cyan hover:underline">Android TV</Link> y{' '}
              <Link href="/iptv-apple-tv" className="text-cyan hover:underline">Apple TV</Link>. También
              puedes revisar las{' '}
              <Link href="/canales" className="text-cyan hover:underline">categorías de canales y contenido</Link>{' '}
              disponibles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-white">Empezar con IPTV</h2>
            <p className="mt-3 leading-relaxed">
              Si ya tienes claro qué es la IPTV y quieres probarla, puedes consultar los planes y{' '}
              <Link href="/comprar-iptv" className="text-cyan hover:underline">contratar tu suscripción IPTV</Link>.
              Recibirás tus datos de acceso por correo para configurarla en tu dispositivo.
            </p>
          </section>
        </article>
      </main>
      <Cta />
    </>
  );
}
