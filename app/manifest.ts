import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.brand} — IPTV Premium`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#070707',
    theme_color: SITE.themeColor,
    lang: SITE.locale,
    categories: ['entertainment', 'lifestyle'],
    // Icons intentionally omitted until a real square brand icon (192/512) is
    // provided — referencing non-existent files would return 404s.
  };
}
