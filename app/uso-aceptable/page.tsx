import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de uso aceptable',
  description: 'Normas de uso responsable del servicio y de esta plataforma.',
  alternates: { canonical: '/uso-aceptable' },
  robots: { index: false, follow: true },
};

export default function UsoAceptablePage() {
  return (
    <LegalPage
      title="Política de uso aceptable"
      intro="Normas de uso responsable del servicio y de esta plataforma."
    >
      <h2>Uso personal y responsable</h2>
      <p>
        El servicio está pensado para un uso personal y privado. Te pedimos que lo utilices de forma
        responsable y dentro de las condiciones contratadas.
      </p>

      <h2>Credenciales de acceso</h2>
      <p>
        Las credenciales de acceso que recibes al contratar son personales. No las compartas con
        terceros ni las publiques. Un uso adecuado ayuda a mantener la calidad y la estabilidad del
        servicio para todos los usuarios.
      </p>

      <h2>Respeto a la legislación y a los derechos de autor</h2>
      <p>
        La tecnología IPTV consiste en transmitir televisión a través de internet. Los derechos del
        contenido corresponden a cada emisora y titular. Recomendamos siempre un uso responsable y
        respetar la legislación vigente y los derechos de autor aplicables. Si tienes dudas sobre la
        situación de un contenido concreto, lo prudente es informarte antes.
      </p>

      <h2>Conductas no permitidas</h2>
      <ul>
        <li>Compartir, revender o redistribuir las credenciales o el acceso a terceros.</li>
        <li>Utilizar el servicio de forma que perjudique su estabilidad o a otros usuarios.</li>
        <li>Emplear el servicio para fines contrarios a la legislación aplicable.</li>
      </ul>

      <h2>Contacto</h2>
      <p>
        Para cualquier consulta sobre el uso del servicio, escríbenos a{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. Puedes consultar también los
        términos y condiciones y la política de privacidad enlazadas en el pie de página.
      </p>
    </LegalPage>
  );
}
