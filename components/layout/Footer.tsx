import type { ReactNode } from 'react';
import Link from 'next/link';
import { Mail, ShieldCheck, Zap, Headphones } from 'lucide-react';
import Logo from './Logo';
import { SITE } from '@/lib/site';
import {
  FOOTER_COLUMNS,
  LEGAL_LINKS,
  POPULAR_SEARCHES,
  SOCIAL_LINKS,
  type SocialKey,
} from '@/lib/constants';

const iconClass = 'h-4 w-4';

const WhatsAppGlyph = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26C2.16 6.9 6.6 2.47 12.05 2.47c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0012.05.6C5.5.6.16 5.94.16 12.5c0 2.1.55 4.14 1.59 5.94L.06 24.6l6.3-1.65a11.88 11.88 0 005.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.49-8.42z" />
  </svg>
);

// Monochrome brand glyphs for configured social profiles.
const SOCIAL_ICONS: Record<SocialKey, { label: string; icon: ReactNode }> = {
  instagram: { label: 'Instagram', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>) },
  facebook: { label: 'Facebook', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.52c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07z" /></svg>) },
  youtube: { label: 'YouTube', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" /></svg>) },
  tiktok: { label: 'TikTok', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>) },
  x: { label: 'X', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24H16.17l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25H8.08l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z" /></svg>) },
  telegram: { label: 'Telegram', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}><path d="M11.94 0C5.35 0 0 5.35 0 11.94c0 6.6 5.35 11.94 11.94 11.94 6.6 0 11.94-5.35 11.94-11.94C23.88 5.35 18.54 0 11.94 0zm5.55 8.16l-1.86 8.76c-.14.62-.5.77-1.02.48l-2.82-2.08-1.36 1.31c-.15.15-.28.28-.57.28l.2-2.88 5.24-4.73c.23-.2-.05-.32-.35-.12L8.32 13.4l-2.79-.87c-.61-.19-.62-.61.13-.9l10.9-4.2c.5-.19.95.12.79.83z" /></svg>) },
};

const SOCIAL_ORDER: SocialKey[] = ['instagram', 'facebook', 'youtube', 'tiktok', 'x', 'telegram'];

const TRUST = [
  { icon: Zap, label: 'Activación inmediata' },
  { icon: ShieldCheck, label: 'Pago seguro' },
  { icon: Headphones, label: 'Soporte en español' },
];

const contactBtn =
  'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan hover:shadow-[0_0_20px_-6px_rgba(0,217,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-surface';

export default function Footer() {
  const year = new Date().getFullYear();
  const configuredSocials = SOCIAL_ORDER.filter((key) => SOCIAL_LINKS[key].trim() !== '');
  const whatsapp = SITE.whatsapp.trim();

  return (
    <footer className="relative border-t border-border-subtle bg-surface">
      {/* Subtle top glow line */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 lg:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Logo variant="mark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-400">
              Entretenimiento en streaming para disfrutar de TV en directo, deportes, películas y
              series en 4K en todos tus dispositivos.
            </p>

            {/* Contact buttons */}
            <div className="mt-6 flex items-center gap-3">
              <a href={`mailto:${SITE.contactEmail}`} aria-label="Enviar correo" className={contactBtn}>
                <Mail className={iconClass} />
              </a>
              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className={contactBtn}
                >
                  {WhatsAppGlyph}
                </a>
              )}
              {configuredSocials.map((key) => (
                <a
                  key={key}
                  href={SOCIAL_LINKS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SOCIAL_ICONS[key].label}
                  className={contactBtn}
                >
                  {SOCIAL_ICONS[key].icon}
                </a>
              ))}
            </div>

            {/* Neutral trust chips (no fabricated review numbers) */}
            <ul className="mt-6 flex flex-col gap-2">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-xs text-gray-400">
                  <Icon size={14} className="text-cyan" /> {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-cyan">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular searches — SEO topics */}
        <div className="mt-14 border-t border-border-subtle pt-8">
          <p className="text-sm leading-relaxed text-gray-500">
            <span className="font-semibold text-gray-300">Consultas populares: </span>
            {POPULAR_SEARCHES.map((item, i) => (
              <span key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-cyan">
                  {item.label}
                </Link>
                {i < POPULAR_SEARCHES.length - 1 && <span className="text-gray-700">, </span>}
              </span>
            ))}
          </p>
          <p className="mt-6 text-xs text-gray-600">
            Datos de películas y series proporcionados por{' '}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-cyan">TMDB</a>{' '}
            y datos deportivos por API-Football / TheSportsDB. Este producto no está avalado ni certificado por dichos proveedores.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500 sm:flex-row">
          <p>© {year} {SITE.brand}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-gray-600">Entretenimiento para todos tus dispositivos.</p>
        </div>
      </div>
    </footer>
  );
}
