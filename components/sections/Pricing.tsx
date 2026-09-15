import Link from 'next/link';
import Image from 'next/image';
import { Check, ShieldCheck } from 'lucide-react';
import { PLANS, planSlug } from '@/lib/content';
import { PAYMENT_METHODS } from '@/lib/assets';

const INCLUDED = [
  '+50.000 canales en directo',
  '+180.000 películas y series',
  'Calidad 4K, FHD y HD',
  'Todos los dispositivos',
  'Activación inmediata',
  'Soporte 24/7',
];

export default function Pricing() {
  return (
    <section className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            Planes sencillos, sin permanencia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Elige la duración que prefieras. Todos los planes incluyen las mismas prestaciones.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border bg-surface-card p-6 ${
                plan.popular ? 'border-primary-500 shadow-glow' : 'border-border-subtle'
              }`}
            >
              {plan.popular && (
                <span className="btn-cta absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{plan.tagline}</p>
              <p className="mt-6">
                <span className="font-display text-4xl font-extrabold text-white">
                  {plan.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                </span>
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contacto?plan=${planSlug(plan)}`}
                className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-bold ${
                  plan.popular
                    ? 'btn-cta'
                    : 'border border-border-subtle text-white hover:bg-surface-hover'
                }`}
              >
                Solicitar este plan
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-300">
          Al pulsar te llevamos al contacto con el plan ya seleccionado.
        </p>

        {/* Payment methods row */}
        <div className="mt-14 flex flex-col items-center gap-5 border-t border-border-subtle pt-10">
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <ShieldCheck size={18} className="text-cyan" /> Métodos de pago aceptados · Los pasos de pago se coordinan con soporte tras el contacto
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PAYMENT_METHODS.map((method) => (
              <div
                key={method.src}
                className="flex h-10 w-16 items-center justify-center rounded-md bg-white p-1.5 shadow-sm"
                title={method.alt}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={method.src}
                    alt={`Pago con ${method.alt}`}
                    fill
                    loading="lazy"
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
