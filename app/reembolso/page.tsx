import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de reembolso',
  description: 'Condiciones y plazos para solicitar la devolución de tu suscripción.',
  alternates: { canonical: '/reembolso' },
  robots: { index: false, follow: true },
};

export default function ReembolsoPage() {
  return (
    <LegalPage
      title="Política de reembolso"
      intro="Condiciones y plazos para solicitar la devolución de tu suscripción."
    >
      <h2>Modelo de contratación</h2>
      <p>
        Los planes se contratan por el periodo elegido mediante pago único, sin permanencia y sin
        renovación automática. No se generan cargos recurrentes: solo pagas por el periodo que
        contratas.
      </p>

      <h2>Solicitudes de reembolso</h2>
      <p>
        Si deseas solicitar un reembolso, escríbenos a{' '}
        <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a> indicando tu pedido y el motivo,
        y estudiaremos tu caso.
      </p>

      <h2>Condiciones concretas</h2>
      <p>
        Las condiciones específicas de reembolso (supuestos en los que procede, plazos y forma de
        devolución) deben definirse con la política real del titular y, cuando proceda, ajustarse al
        derecho de desistimiento y a la normativa de consumo aplicable. Hasta que se publiquen esas
        condiciones definitivas, cualquier solicitud se gestiona de forma individual a través del
        contacto de soporte.
      </p>
    </LegalPage>
  );
}
