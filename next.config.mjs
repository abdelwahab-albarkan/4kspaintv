/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

// Content Security Policy — pragmatic, hardening-focused, compatible with
// Next.js inline bootstrap scripts + Tailwind/Framer inline styles + next/image.
// `unsafe-eval` and websockets are dev-only (Turbopack HMR); production is stricter.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? ' ws: wss:' : ''}`,
  "media-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
];

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  images: {
    // Serve modern formats first; Next negotiates by Accept header.
    formats: ['image/avif', 'image/webp'],
    // Cache each optimized image for 30 days. Source URLs (local hashed assets,
    // TMDB poster paths, football logos) are content-stable — a given URL never
    // changes its bytes — so a long TTL is safe and sharply cuts billable Vercel
    // Image Optimization transformations (mitigates the HTTP 402 quota risk).
    minimumCacheTTL: 2592000,
    // TMDB posters/backdrops are fetched + optimized server-side by next/image,
    // then served same-origin (/_next/image), so the CSP img-src 'self' still holds.
    remotePatterns: [
      { protocol: 'https', hostname: 'image.tmdb.org', pathname: '/t/p/**' },
      // Football logos/badges, fetched + optimized server-side by next/image.
      { protocol: 'https', hostname: 'media.api-sports.io', pathname: '/**' },
      { protocol: 'https', hostname: 'r2.thesportsdb.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.thesportsdb.com', pathname: '/images/**' },
    ],
  },

  async redirects() {
    return [
      // Consolidate the thin /apps page into the SEO hub (avoids cannibalization).
      { source: '/apps', destination: '/aplicaciones-iptv', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        // Apply security headers to every route.
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        // Cache local images aggressively (filenames are stable).
        source: '/:all*(png|jpg|jpeg|webp|avif|svg|ico|gif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }],
      },
    ];
  },
};

export default nextConfig;
