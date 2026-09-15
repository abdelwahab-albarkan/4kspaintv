import { ListChecks, MessageCircle, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Steps reflect only the real, email-based flow already documented in the
// project (lib/content.ts FAQ_ITEMS: "Elige la duración del plan… completa el
// pago y recibirás tus datos de acceso por correo electrónico. Con ese usuario
// y contraseña, o la URL del servidor, podrás configurar la aplicación").
// No response-time, uptime or payment-gateway claims are made.

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: ListChecks,
    title: 'Eliges tu plan',
    description: 'Seleccionas la duración que prefieras. Todos los planes incluyen las mismas prestaciones.',
  },
  {
    icon: MessageCircle,
    title: 'Contactas para continuar',
    description: 'Nos escribes con el plan elegido y te indicamos los pasos para completar la contratación.',
  },
  {
    icon: Mail,
    title: 'Recibes tus datos de acceso',
    description: 'Te enviamos por correo tus credenciales (usuario y contraseña o datos Xtream/M3U) para configurar tu dispositivo.',
  },
];

interface HowItWorksProps {
  /** Wrap in its own <section> with a top border. Set false when embedding. */
  standalone?: boolean;
}

export default function HowItWorks({ standalone = true }: HowItWorksProps) {
  const content = (
    <div className="mx-auto max-w-5xl px-6">
      <h2 className="text-center font-display text-2xl font-extrabold text-white md:text-3xl">
        ¿Qué ocurre después?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-300 md:text-base">
        Un proceso sencillo, sin instalaciones complicadas ni contratos de permanencia.
      </p>

      <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="flex flex-col rounded-2xl border border-border-subtle bg-surface-card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-900/40 text-sm font-bold text-cyan">
                {i + 1}
              </span>
              <step.icon size={20} className="shrink-0 text-cyan" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );

  if (!standalone) return content;

  return (
    <section aria-label="Qué ocurre después de contratar" className="border-t border-border-subtle bg-background py-16 md:py-20">
      {content}
    </section>
  );
}
