import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: 'Información legal relativa a la titularidad y las condiciones de uso de este sitio web.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      intro="Información legal relativa a la titularidad y las condiciones de uso de este sitio web."
    >
      <h2>Identificación del sitio</h2>
      <p>
        Este aviso legal regula el uso del sitio web <strong>{SITE.host}</strong>, operado bajo la
        marca <strong>{SITE.brand}</strong>. Para cualquier comunicación puedes dirigirte a{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
      <p>
        Los datos identificativos completos del titular (razón social, domicilio y NIF/CIF) y, en su
        caso, los datos de inscripción registral, deben incorporarse aquí con la información real del
        titular.
      </p>

      <h2>Objeto</h2>
      <p>
        El sitio ofrece información sobre un servicio de suscripción IPTV para el mercado español y
        permite ponerse en contacto para contratarlo. El uso del sitio implica la aceptación de las
        condiciones recogidas en este aviso y en los documentos legales enlazados en el pie de página.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y los elementos gráficos propios de este sitio pertenecen a su titular.
        Las marcas, logotipos e imágenes de terceros (marcas de dispositivos, competiciones
        deportivas o catálogos de cine y series) pertenecen a sus respectivos propietarios y se
        muestran únicamente con fines informativos.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada, pero puede contener
        imprecisiones o estar sujeta a cambios. La disponibilidad del servicio y la calidad de la
        reproducción dependen también de la conexión a internet del usuario.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        La legislación aplicable y la jurisdicción competente deben concretarse en función del
        domicilio legal del titular.
      </p>
    </LegalPage>
  );
}
