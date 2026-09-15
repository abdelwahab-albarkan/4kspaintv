import Link from 'next/link';
import { Wallet, Zap, Headphones, Scale, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Every signal below is backed by real project content:
//  - "Sin permanencia · pago único"    → lib/content.ts FAQ_ITEMS
//  - "Activación inmediata por email"   → lib/content.ts FAQ_ITEMS
//  - "Soporte 24/7 en español"          → lib/content.ts FEATURES
//  - "Uso legal y responsable"          → /iptv-legal-espana (real pillar page)
//  - "Opiniones de clientes"            → /opiniones-iptv (existing page)
// Deliberately excluded: refund/guarantee (/reembolso is an unfilled legal
// placeholder), uptime %, "sin cortes", ratings/stars (reviews are illustrative).

interface TrustSignal {
  icon: LucideIcon;
  label: string;
  href?: string;
}

const SIGNALS: TrustSignal[] = [
  { icon: Wallet, label: 'Sin permanencia · Pago único' },
  { icon: Zap, label: 'Activación inmediata por email' },
  { icon: Headphones, label: 'Soporte 24/7 en español', href: '/contacto' },
  { icon: Scale, label: 'Uso legal y responsable', href: '/iptv-legal-espana' },
  { icon: MessageSquare, label: 'Opiniones de clientes', href: '/opiniones-iptv' },
];

export default function TrustBar() {
  return (
    <section aria-label="Garantías y confianza" className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SIGNALS.map(({ icon: Icon, label, href }) => {
            const inner = (
              <>
                <Icon size={20} className="shrink-0 text-cyan" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-300">{label}</span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <Link
                    href={href}
                    className="flex h-full items-center gap-3 rounded-xl border border-border-subtle bg-surface-card p-4 transition-colors hover:bg-surface-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="flex h-full items-center gap-3 rounded-xl border border-border-subtle bg-surface-card p-4">
                    {inner}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
