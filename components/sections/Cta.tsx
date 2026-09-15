import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-64 w-[720px] max-w-full rounded-full opacity-50 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(124,44,255,0.35), transparent)' }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
          Empieza a ver hoy mismo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Activación en minutos y soporte en español cuando lo necesites. Sin permanencia.
        </p>
        <Link
          href="/precios"
          className="btn-cta mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-bold shadow-[0_0_30px_-6px_rgba(196,91,255,0.6)]"
        >
          Ver planes y precios <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
