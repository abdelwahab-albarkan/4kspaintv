import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Features from '@/components/sections/Features';
import DeviceCompatibility from '@/components/sections/DeviceCompatibility';
import RealExperience from '@/components/sections/RealExperience';
import Reviews from '@/components/sections/Reviews';
import MediaShowcase from '@/components/sections/MediaShowcase';
import Pricing from '@/components/sections/Pricing';
import SportsTeaser from '@/components/sections/SportsTeaser';
import HomeMatches from '@/components/sections/HomeMatches';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import LatestBlog from '@/components/sections/LatestBlog';
import JsonLd from '@/components/common/JsonLd';
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getProductSchema,
  getFaqSchema,
} from '@/lib/structured-data';

// ISR revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'IPTV España — El Mejor Servicio IPTV Premium en 4K sin Cortes',
  description:
    'Descubre la mejor suscripción IPTV en España. Más de 50.000 canales en directo, fútbol y deportes en 4K real y 180.000+ películas. Compatible con Firestick, Smart TV y Android.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const structuredData = [
    getOrganizationSchema(),
    getWebSiteSchema(),
    getProductSchema(),
    getFaqSchema(),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <main>
        <Hero />
        <StatsBar />
        <MediaShowcase />
        <SportsTeaser preview={false} />
        <HomeMatches />
        <DeviceCompatibility />
        <Features />
        <RealExperience />
        <Reviews />
        <Pricing />
        <Faq />
        <Cta />
        <LatestBlog />
      </main>
    </>
  );
}
