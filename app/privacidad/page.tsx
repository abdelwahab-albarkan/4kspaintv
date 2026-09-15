import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo recogemos, usamos y protegemos tus datos personales.',
  alternates: { canonical: '/privacidad' },
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Cómo recogemos, usamos y protegemos tus datos personales."
    >
      <h2>Datos que tratamos</h2>
      <p>
        Este sitio web no incluye formularios de registro, suscripción ni recogida de datos, y no
        utiliza cookies de seguimiento, herramientas de analítica ni sistemas de perfilado. En su
        funcionamiento actual, el único tratamiento de datos personales se produce cuando nos escribes
        de forma voluntaria por correo electrónico: en ese caso tratamos tu dirección de correo y el
        contenido de tu mensaje con la única finalidad de atender tu consulta o gestionar la
        contratación que solicites.
      </p>

      <h2>Finalidad</h2>
      <ul>
        <li>Responder a las consultas que nos envíes por correo.</li>
        <li>Gestionar la contratación del servicio y enviarte tus datos de acceso.</li>
        <li>Prestar soporte técnico relacionado con el servicio.</li>
      </ul>

      <h2>Servicios de terceros</h2>
      <p>
        Para mostrar información de catálogo (por ejemplo, carátulas de cine y series) y datos
        deportivos, el sitio consulta desde el servidor servicios externos como TMDB, API-Football y
        TheSportsDB. Estas consultas las realiza el servidor para generar el contenido; las imágenes
        se optimizan y se sirven desde este mismo dominio, por lo que tu navegador no contacta
        directamente con esos servicios. El sitio se aloja y se distribuye a través de un proveedor de
        alojamiento y CDN.
      </p>

      <h2>Comunicaciones por correo</h2>
      <p>
        Cuando contactas con{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>, tu mensaje se gestiona a
        través del proveedor de correo correspondiente. No utilizamos tu dirección para enviar
        comunicaciones comerciales no solicitadas.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes solicitar el acceso, la rectificación o la supresión de los datos que nos hayas
        facilitado por correo escribiéndonos a{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. La identidad del responsable
        del tratamiento, la base jurídica formal, los plazos de conservación y el procedimiento
        completo para el ejercicio de derechos deben completarse con la información legal del titular.
      </p>
    </LegalPage>
  );
}
