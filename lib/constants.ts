// ────────────────────────────────────────────────────────────
// Navigation & footer configuration (single source of truth).
// Domain/URL identity lives in lib/site.ts — never hardcode it here.
// ────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

/** Primary header navigation. Points at the SEO hub pages (not thin routes). */
export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'IPTV', href: '/iptv' },
  { label: 'Deportes', href: '/iptv-deporte' },
  { label: 'Dispositivos', href: '/dispositivos' },
  { label: 'Aplicaciones', href: '/aplicaciones-iptv' },
  { label: 'Precios', href: '/precios' },
  { label: 'Blog', href: '/blog' },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

/**
 * Footer link columns. Every href points at a route that exists in /app —
 * no broken links. Items without a dedicated page map to the closest hub.
 */
export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Producto',
    links: [
      { label: 'IPTV España', href: '/iptv' },
      { label: 'Precios', href: '/precios' },
      { label: 'Comprar IPTV', href: '/comprar-iptv' },
      { label: 'Comparativa IPTV', href: '/comparativa-iptv' },
      { label: 'Opiniones', href: '/opiniones-iptv' },
      { label: 'Aplicaciones IPTV', href: '/aplicaciones-iptv' },
    ],
  },
  {
    title: 'Dispositivos',
    links: [
      { label: 'Amazon Fire TV Stick', href: '/iptv-fire-tv-stick' },
      { label: 'Smart TV', href: '/iptv-smart-tv' },
      { label: 'Samsung TV', href: '/iptv-samsung' },
      { label: 'LG Smart TV', href: '/iptv-lg' },
      { label: 'Android TV', href: '/iptv-android-tv' },
      { label: 'Apple TV', href: '/iptv-apple-tv' },
      { label: 'Todos los dispositivos', href: '/dispositivos' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Guía de instalación', href: '/instalar-iptv' },
      { label: 'IPTV en Smart TV', href: '/iptv-smart-tv' },
      { label: 'IPTV en Fire TV', href: '/iptv-fire-tv-stick' },
      { label: 'IPTV en Android TV', href: '/iptv-android-tv' },
      { label: 'Preguntas frecuentes', href: '/faq' },
      { label: 'Blog y guías', href: '/blog' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
  {
    title: 'Información',
    links: [
      { label: 'Canales', href: '/canales' },
      { label: 'IPTV legal en España', href: '/iptv-legal-espana' },
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Términos y condiciones', href: '/terminos' },
      { label: 'Política de reembolso', href: '/reembolso' },
      { label: 'Uso aceptable', href: '/uso-aceptable' },
      { label: 'Aviso legal', href: '/aviso-legal' },
    ],
  },
];

/** Compact legal links for the bottom bar. */
export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Términos', href: '/terminos' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Reembolso', href: '/reembolso' },
];

/**
 * "Consultas populares" — SEO topic links for the footer. Each maps to a real
 * indexable route; kept curated (not keyword-stuffed).
 */
export const POPULAR_SEARCHES: NavLink[] = [
  { label: 'IPTV España', href: '/iptv' },
  { label: 'Mejor IPTV', href: '/mejor-iptv' },
  { label: 'Comprar IPTV', href: '/comprar-iptv' },
  { label: 'Precios IPTV', href: '/precios' },
  { label: 'Aplicaciones IPTV', href: '/aplicaciones-iptv' },
  { label: 'IPTV Smarters Pro', href: '/iptv-smarters-pro' },
  { label: 'IPTV Smart TV', href: '/iptv-smart-tv' },
  { label: 'IPTV Samsung', href: '/iptv-samsung' },
  { label: 'IPTV LG', href: '/iptv-lg' },
  { label: 'IPTV Fire TV', href: '/iptv-fire-tv-stick' },
  { label: 'IPTV Android TV', href: '/iptv-android-tv' },
  { label: 'IPTV Apple TV', href: '/iptv-apple-tv' },
  { label: 'IPTV deportes', href: '/iptv-deporte' },
  { label: 'Comparativa IPTV', href: '/comparativa-iptv' },
  { label: 'Opiniones IPTV', href: '/opiniones-iptv' },
  { label: 'Listas M3U', href: '/iptv-m3u' },
  { label: 'Cómo instalar IPTV', href: '/instalar-iptv' },
  { label: 'Qué es IPTV', href: '/iptv' },
];

// ────────────────────────────────────────────────────────────
// Social profiles — empty by default so nothing renders until a
// real URL is configured. Fill a value to make that icon appear.
// ────────────────────────────────────────────────────────────

export type SocialKey = 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'telegram';

export const SOCIAL_LINKS: Record<SocialKey, string> = {
  instagram: '',
  facebook: '',
  youtube: '',
  tiktok: '',
  x: '',
  telegram: '',
};
