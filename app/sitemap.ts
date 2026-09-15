import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { getBlogPosts } from '@/lib/blog';

// Stable lastmod reference for static routes
const STATIC_LAST_MODIFIED = '2026-03-01T00:00:00.000Z';

interface StaticRouteDef {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  lastModified?: string;
}

// Explicit static marketing routes. Excludes legal noindex pages (/aviso-legal, /privacidad, /terminos).
const STATIC_ROUTES: StaticRouteDef[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/comprar-iptv', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/mejor-iptv', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/comparativa-iptv', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/precios', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/opiniones-iptv', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/iptv-deporte', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/aplicaciones-iptv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-smarters-pro', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/instalar-iptv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-m3u', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/dispositivos', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-smart-tv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-samsung', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-lg', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-fire-tv-stick', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-android-tv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-apple-tv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/iptv-legal-espana', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/canales', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contacto', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapMap = new Map<string, MetadataRoute.Sitemap[number]>();

  // 1. Process static routes
  for (const route of STATIC_ROUTES) {
    const url = absoluteUrl(route.path);
    sitemapMap.set(url, {
      url,
      lastModified: new Date(route.lastModified || STATIC_LAST_MODIFIED),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  // 2. Process dynamic blog posts
  const posts = getBlogPosts();
  for (const post of posts) {
    const url = absoluteUrl(`/blog/${post.slug}`);
    sitemapMap.set(url, {
      url,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Map guarantees 0 duplicate <loc> entries
  return Array.from(sitemapMap.values());
}
