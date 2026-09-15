/**
 * Single source of truth for site identity.
 *
 * The production URL is read from NEXT_PUBLIC_SITE_URL so the domain is never
 * hardcoded across the codebase — every canonical/sitemap/robots/OG value
 * derives from SITE.url. Change the domain in one place (the env var) and the
 * whole site follows.
 */

const DEFAULT_URL = 'https://4kspaintv.com';

/** Normalize: ensure a protocol and strip any trailing slash. */
function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  return url.replace(/\/+$/, '');
}

const URL_VALUE = normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL);
/** Bare host without protocol, e.g. 4kspaintv.com. */
const HOST_VALUE = URL_VALUE.replace(/^https?:\/\//i, '');

export const SITE = {
  /** Absolute origin, e.g. https://4kspaintv.com — no trailing slash. */
  url: URL_VALUE,
  /** Bare host, derived from url — never hardcode the domain elsewhere. */
  host: HOST_VALUE,
  /** Support inbox, derived from the host so the domain lives in one place. */
  contactEmail: `soporte@${HOST_VALUE}`,
  /**
   * WhatsApp number in international format WITHOUT '+' or spaces.
   * e.g. 212625218443
   */
  whatsapp: '212625218443',
  name: '4K SPAIN TV',
  /** Brand as shown to users. */
  brand: '4K SPAIN TV',
  /** BCP-47 locale for <html lang> derivation and metadata. */
  locale: 'es-ES',
  /** Open Graph locale form. */
  ogLocale: 'es_ES',
  description:
    'Disfruta de más de 50.000 canales de TV en directo, 1.800+ canales de deportes y 180.000+ películas y series en 4K real sin cortes. Configuración sencilla en Firestick, Smart TV, Apple TV y más.',
  keywords: [
    'IPTV',
    'IPTV España',
    'suscripción IPTV',
    'comprar IPTV',
    'IPTV premium',
    'televisión en directo',
    'IPTV 4K',
    'IPTV Firestick',
    'IPTV Smart TV',
    'ver deportes online',
  ],
  themeColor: '#7C2CFF',
} as const;

/** Central WhatsApp configuration */
export const WHATSAPP_NUMBER = '212625218443';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Default generic message when no specific plan is chosen */
export const DEFAULT_WHATSAPP_CONTACT_MESSAGE = `Hola, me gustaría recibir información sobre los planes de ${SITE.brand}.`;

/** Build a WhatsApp URL with optional pre-filled message text */
export function getWhatsAppUrl(message?: string): string {
  if (!message || !message.trim()) {
    return WHATSAPP_BASE_URL;
  }
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message.trim())}`;
}

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

