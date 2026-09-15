import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-fire-tv-stick'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvFireTvStickPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="Amazon Fire OS (Firestick)"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Amazon Fire TV Stick (Modelos 4K, 4K Max, Lite, HD o Fire TV Cube)',
        'Conexión a internet estable de 25 Mbps para HD / 50 Mbps para 4K 60fps',
        'App "Downloader" instalada desde la Amazon Appstore oficial',
        'Permisos de instalación de orígenes desconocidos activados en Fire OS',
      ]}
      recommendedApps={[
        {
          name: 'IPTV Smarters Pro',
          description: 'La aplicación más versátil y fácil de configurar en Firestick con interfaz optimizada.',
          store: 'Descarga con Downloader',
        },
        {
          name: 'TiviMate IPTV Player',
          description: 'El mejor reproductor profesional para Fire TV con diseño idéntico a un decodificador por cable.',
          store: 'Descarga con Downloader',
        },
        {
          name: 'XCIPTV Player',
          description: 'Excelente rendimiento fluido y reproductor EXO player integrado.',
          store: 'Descarga con Downloader',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Instala la aplicación Downloader',
          detail: 'En tu Firestick, ve a Buscar -> Busca "Downloader" e instala la aplicación oficial de Amazon Appstore.',
        },
        {
          stepNumber: 2,
          title: 'Habilita aplicaciones de orígenes desconocidos',
          detail: 'Ve a Configuración de Firestick -> Mi Fire TV -> Opciones para desarrolladores -> Activa "Instalar apps desconocidas" para Downloader.',
        },
        {
          stepNumber: 3,
          title: 'Introduce el código de descarga e instala IPTV Smarters',
          detail: 'Abre Downloader e introduce el código de descarga del reproductor para instalar el APK en tu Firestick.',
        },
        {
          stepNumber: 4,
          title: 'Inicia sesión con Xtream Codes API',
          detail: 'Abre la app e introduce los datos de acceso (Usuario, Contraseña y URL) suministrados al comprar tu suscripción en 4K Spain TV.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Por qué no aparece "Opciones para desarrolladores" en mi Firestick?',
          answer: 'En Fire OS 7+, ve a Ajustes -> Mi Fire TV -> Acerca de -> Pulsa 7 veces seguidas el nombre de tu Firestick hasta activar el modo desarrollador.',
        },
        {
          question: '¿Cómo puedo evitar el almacenamiento lleno en mi Firestick?',
          answer: 'Desinstala aplicaciones secundarias que no utilices y borra la memoria caché de Downloader desde Ajustes -> Aplicaciones.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía para Android TV y Google TV', href: '/iptv-android-tv' },
        { label: 'Guía para Smart TV Samsung', href: '/iptv-samsung' },
        { label: 'Guía para Smart TV LG', href: '/iptv-lg' },
        { label: 'Guía específica IPTV Smarters Pro', href: '/iptv-smarters-pro' },
      ]}
    />
  );
}
