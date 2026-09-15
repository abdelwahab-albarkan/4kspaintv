import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Condiciones que regulan la contratación y el uso del servicio.',
  alternates: { canonical: '/terminos' },
  robots: { index: false, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      intro="Condiciones que regulan la contratación y el uso del servicio."
    >
      <h2>Descripción del servicio</h2>
      <p>
        Ofrecemos un servicio de suscripción IPTV para el mercado español, con acceso a canales en
        directo y contenido bajo demanda a través de internet. El servicio requiere una conexión a
        internet estable y una aplicación compatible en tu dispositivo.
      </p>

      <h2>Planes y contratación</h2>
      <p>
        Los planes se contratan por el periodo elegido, mediante pago único y sin permanencia ni
        renovación automática. Puedes consultar las duraciones y los precios vigentes en la página de{' '}
        <a href="/precios">precios</a>. La contratación se inicia poniéndote en contacto con nosotros;
        te indicamos los pasos para completar el pago.
      </p>

      <h2>Activación y entrega</h2>
      <p>
        Una vez confirmado el pago, recibirás tus datos de acceso por correo electrónico para
        configurar la aplicación en tu dispositivo. No es necesario instalar equipos adicionales ni
        firmar un contrato de permanencia.
      </p>

      <h2>Requisitos técnicos</h2>
      <p>
        La calidad de la reproducción depende de tu conexión y de tu equipo. Se recomienda una
        velocidad mínima aproximada de 25 Mbps para HD y 50 Mbps para 4K, preferiblemente por cable.
      </p>

      <h2>Soporte</h2>
      <p>
        Ofrecemos soporte en español por correo electrónico en{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> para ayudarte con la
        configuración y resolver incidencias.
      </p>

      <h2>Uso del servicio</h2>
      <p>
        El uso del servicio se rige por la <a href="/uso-aceptable">política de uso aceptable</a>. Las
        condiciones de reembolso se detallan en la <a href="/reembolso">política de reembolso</a>.
      </p>

      <h2>Condiciones legales</h2>
      <p>
        Los aspectos legales formales (identidad del titular, derecho de desistimiento, garantías
        legales, responsabilidad, ley aplicable y jurisdicción) deben completarse con la información
        legal real del titular.
      </p>
    </LegalPage>
  );
}
