import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { SITE, DEFAULT_WHATSAPP_CONTACT_MESSAGE, getWhatsAppUrl } from '@/lib/site';
import { getPlanBySlug, formatEUR, getPlanWhatsAppUrl } from '@/lib/content';
import HowItWorks from '@/components/commerce/HowItWorks';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Contacto y soporte | Atención 24/7',
  description:
    'Contacta con el equipo de 4K Spain TV. Soporte 24/7 en español para ayudarte con la configuración, el pago y cualquier duda.',
  alternates: { canonical: '/contacto' },
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planParam } = await searchParams;
  // Validate the untrusted query param against real PLANS. Unknown → no plan.
  const plan = getPlanBySlug(planParam);

  const whatsappHref = plan
    ? getPlanWhatsAppUrl(plan)
    : getWhatsAppUrl(DEFAULT_WHATSAPP_CONTACT_MESSAGE);

  // Build a pre-filled mailto only when a real plan was selected.
  const mailtoHref = plan
    ? `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
        `Solicitud de plan IPTV — ${plan.name}`,
      )}&body=${encodeURIComponent(
        `Hola,\n\nQuiero contratar el plan de ${plan.name} por ${formatEUR(plan.price)}.\n\nQuedo atento a los pasos para continuar.\n\nGracias.`,
      )}`
    : `mailto:${SITE.contactEmail}`;

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="font-display text-4xl font-extrabold text-white md:text-5xl">Contacto</h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-400">
        ¿Tienes dudas antes de contratar o necesitas ayuda con la configuración? Nuestro equipo de
        soporte está disponible las 24 horas, los 7 días de la semana.
      </p>

      {/* Selected plan summary (only when a valid plan was passed) */}
      {plan && (
        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-primary-500 bg-surface-card p-6 text-left shadow-glow">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Plan seleccionado</p>
          <div className="mt-2 flex items-baseline justify-between gap-4">
            <span className="font-display text-xl font-extrabold text-white">{plan.name}</span>
            <span className="font-display text-xl font-extrabold text-cyan">{formatEUR(plan.price)}</span>
          </div>
          <p className="mt-1 text-sm text-gray-300">
            Duración: {plan.months} {plan.months === 1 ? 'mes' : 'meses'}
          </p>
        </div>
      )}

      {/* Primary WhatsApp Card */}
      <div className="mx-auto mt-10 max-w-md rounded-2xl border border-primary-500 bg-surface-card p-8 shadow-glow">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
          <WhatsAppIcon className="h-8 w-8" />
        </div>

        <h2 className="mt-4 font-display text-xl font-bold text-white">
          {plan ? 'Solicitar suscripción por WhatsApp' : 'Atención directa por WhatsApp'}
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          {plan
            ? `Escríbenos para activar tu plan de ${plan.name.toLowerCase()} (${formatEUR(plan.price)}) de forma inmediata.`
            : 'Respondemos tus dudas en minutos. Soporte 24/7 en español.'}
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={plan ? `Solicitar por WhatsApp el plan de ${plan.name}` : 'Contactar por WhatsApp'}
          className="btn-cta mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full text-base font-bold shadow-[0_0_24px_-6px_rgba(196,91,255,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Solicitar por WhatsApp
        </a>

        <div className="mt-6 border-t border-border-subtle/60 pt-6">
          <p className="text-xs text-gray-400">¿Prefieres contactar por correo electrónico?</p>
          <a
            href={mailtoHref}
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
          >
            <Mail size={16} />
            {SITE.contactEmail}
          </a>
        </div>
      </div>

      {/* Reminder of the real, email-based process */}
      <div className="mt-16 text-left">
        <HowItWorks standalone={false} />
      </div>
    </section>
  );
}

