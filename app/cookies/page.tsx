import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de cookies',
  description: 'Cómo utilizamos las cookies y tecnologías similares en este sitio web.',
  alternates: { canonical: '/cookies' },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Política de cookies"
      intro="Cómo utilizamos las cookies y tecnologías similares en este sitio web."
    >
      <h2>Uso de cookies en este sitio</h2>
      <p>
        Este sitio web está diseñado para funcionar sin cookies de seguimiento. En su estado actual
        <strong> no utiliza cookies con fines analíticos, publicitarios, de perfilado ni de
        seguimiento</strong>, y tampoco emplea almacenamiento local del navegador (localStorage o
        sessionStorage) para esas finalidades.
      </p>

      <h2>Tecnologías de terceros</h2>
      <p>
        No integramos herramientas de analítica (como Google Analytics), píxeles de redes sociales
        ni scripts de terceros de seguimiento. Las tipografías se sirven desde el propio sitio, por
        lo que su carga no genera peticiones a servicios externos. Los contenidos y las imágenes
        externas (por ejemplo, carátulas de cine y series o escudos deportivos) se procesan en el
        servidor y se sirven desde este mismo dominio.
      </p>

      <h2>Cookies técnicas</h2>
      <p>
        El proveedor de alojamiento o la red de distribución de contenidos (CDN) podrían utilizar
        cookies o cabeceras estrictamente técnicas necesarias para servir el sitio de forma segura.
        Estas no se utilizan para identificarte ni para elaborar perfiles.
      </p>

      <h2>Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento desde
        sus ajustes de privacidad. Dado que el sitio no depende de cookies de seguimiento, hacerlo no
        afecta a la navegación.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre esta política, escríbenos a{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
      </p>
    </LegalPage>
  );
}
