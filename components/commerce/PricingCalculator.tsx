'use client';

import { useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { PLANS, planSlug, formatEUR } from '@/lib/content';

// Monthly reference = the real 1-month plan price. All savings are derived from
// PLANS — nothing is hardcoded. If no 1-month plan exists, savings are hidden.
const MONTHLY_REFERENCE = PLANS.find((p) => p.months === 1)?.price;

interface PlanMetrics {
  months: number;
  name: string;
  tagline: string;
  popular: boolean;
  total: number;
  perMonth: number;
  savings: number; // vs paying month-to-month at MONTHLY_REFERENCE
}

const METRICS: PlanMetrics[] = PLANS.map((plan) => {
  const perMonth = plan.price / plan.months;
  const baseline = MONTHLY_REFERENCE !== undefined ? MONTHLY_REFERENCE * plan.months : plan.price;
  const savings = Math.max(0, baseline - plan.price);
  return {
    months: plan.months,
    name: plan.name,
    tagline: plan.tagline,
    popular: plan.popular,
    total: plan.price,
    perMonth,
    savings,
  };
});

export default function PricingCalculator() {
  // Default to the popular plan if defined, otherwise the first plan.
  const defaultMonths = (METRICS.find((m) => m.popular) ?? METRICS[0]).months;
  const [selectedMonths, setSelectedMonths] = useState<number>(defaultMonths);

  const active = METRICS.find((m) => m.months === selectedMonths) ?? METRICS[0];

  // Roving-tabindex keyboard navigation for the WAI-ARIA tabs pattern.
  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const idx = METRICS.findIndex((m) => m.months === selectedMonths);
    let next = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (idx + 1) % METRICS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (idx - 1 + METRICS.length) % METRICS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = METRICS.length - 1;
    else return;
    e.preventDefault();
    const months = METRICS[next].months;
    setSelectedMonths(months);
    document.getElementById(`plan-tab-${months}`)?.focus();
  }

  return (
    <section className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
            Calcula tu ahorro por plan
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300 md:text-base">
            Elige la duración y comprueba al instante el coste por mes y cuánto ahorras.
          </p>
        </div>

        {/* Duration selector */}
        <div
          role="tablist"
          aria-label="Duración del plan"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {METRICS.map((m) => {
            const isActive = m.months === selectedMonths;
            return (
              <button
                key={m.months}
                type="button"
                role="tab"
                id={`plan-tab-${m.months}`}
                aria-selected={isActive}
                aria-controls="plan-calculator-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setSelectedMonths(m.months)}
                onKeyDown={onTabKeyDown}
                className={`relative rounded-xl border px-3 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? 'border-primary-500 bg-surface-card text-white shadow-glow'
                    : 'border-border-subtle text-gray-300 hover:bg-surface-hover'
                }`}
              >
                {m.name}
                {m.popular && (
                  <span className="ml-1 align-middle text-[10px] font-bold text-cyan">★</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Result card */}
        <div
          id="plan-calculator-panel"
          role="tabpanel"
          aria-labelledby={`plan-tab-${selectedMonths}`}
          tabIndex={0}
          className="mx-auto mt-8 max-w-xl rounded-2xl border border-primary-500 bg-surface-card p-6 shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-gray-400">Plan de {active.name.toLowerCase()}</p>
              <p className="mt-1 text-sm text-gray-300">{active.tagline}</p>
            </div>
            {active.popular && (
              <span className="btn-cta shrink-0 rounded-full px-3 py-1 text-xs font-bold">
                Más popular
              </span>
            )}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Total */}
            <div className="rounded-xl border border-border-subtle bg-surface p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Precio total</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-white">{formatEUR(active.total)}</p>
            </div>
            {/* Per month */}
            <div className="rounded-xl border border-border-subtle bg-surface p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Coste por mes</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-cyan">≈ {formatEUR(active.perMonth)}</p>
            </div>
            {/* Savings */}
            <div className="rounded-xl border border-border-subtle bg-surface p-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">Ahorras</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-white">
                {active.savings > 0 ? formatEUR(active.savings) : formatEUR(0)}
              </p>
            </div>
          </div>

          <Link
            href={`/contacto?plan=${planSlug(active)}`}
            className="btn-cta mt-6 flex h-12 w-full items-center justify-center rounded-full text-base font-bold active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Solicitar este plan
          </Link>

          <p className="mt-3 text-center text-sm text-gray-300">
            Te indicamos los siguientes pasos para completar la contratación.
          </p>

          <p className="mt-4 text-center text-xs leading-relaxed text-gray-400">
            El ahorro se calcula comparando el precio del plan seleccionado con el coste equivalente
            pagando mes a mes.
          </p>
        </div>
      </div>
    </section>
  );
}
