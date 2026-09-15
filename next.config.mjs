/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

// Content Security Policy — pragmatic, hardening-focused, compatible with
// Next.js inline bootstrap scripts + Tailwind/Framer inline styles + next/image.
// `unsafe-eval` and websockets are dev-only (Turbopack HMR); production is stricter.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  // Images are served WITHOUT the Vercel optimizer (images.unoptimized), so
  // remote images load directly from their CDN and must be allow-listed here.
  "img-src 'self' data: blob: https://image.tmdb.org https://media.api-sports.io https://r2.thesportsdb.com https://www.thesportsdb.com",
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
    // Serve images WITHOUT Vercel Image Optimization. The optimizer is a metered
    // service whose quota, once exhausted, makes /_next/image return HTTP 402 for
    // EVERY image (local and remote), breaking the whole site — which is exactly
    // what happened in production. With unoptimized, local /public assets are
    // served directly (they are already small WebP/JPEG after the earlier cleanup,
    // so no payload regression) and remote images load straight from their CDN.
    // remotePatterns is still required: next/image validates remote src hosts even
    // when unoptimized. formats/minimumCacheTTL are inert while unoptimized.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
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
