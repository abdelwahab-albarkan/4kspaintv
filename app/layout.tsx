import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';

// Self-hosted via next/font at build time — Latin subset only keeps the payload
// small (no external Google Fonts request, better privacy + LCP).
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const DEFAULT_TITLE = `${SITE.brand} | Suscripción IPTV Premium en España`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: DEFAULT_TITLE,
  description: SITE.description,
  applicationName: SITE.brand,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.brand }],
  creator: SITE.brand,
  publisher: SITE.brand,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.ogLocale,
    url: SITE.url,
    siteName: SITE.brand,
    title: DEFAULT_TITLE,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" dir="ltr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-background text-gray-100 font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
