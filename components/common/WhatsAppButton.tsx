import { SITE, DEFAULT_WHATSAPP_CONTACT_MESSAGE, getWhatsAppUrl } from '@/lib/site';
import WhatsAppIcon from './WhatsAppIcon';

/**
 * Floating WhatsApp button (bottom-right). Renders when WhatsApp is configured.
 */
export default function WhatsAppButton() {
  const whatsapp = SITE.whatsapp.trim();
  if (!whatsapp) return null;

  return (
    <a
      href={getWhatsAppUrl(DEFAULT_WHATSAPP_CONTACT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

