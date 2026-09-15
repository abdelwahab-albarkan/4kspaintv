import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-lg'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvLgPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="LG webOS"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Televisor LG Smart TV con webOS (modelos 3.0 a webOS 24)',
        'Conexión a internet estable de 25 Mbps para HD / 50 Mbps para 4K UHD',
        'Cuenta de LG Services activa para descargar apps desde la LG Content Store',
        'Mando a distancia LG Magic Remote',
      ]}
      recommendedApps={[
        {
          name: 'IBO Player',
          description: 'Optimizada al 100% para el mando Magic Remote de LG con navegación ultrarrápida.',
          store: 'LG Content Store',
        },
        {
          name: 'IPTV Smarters Lite',
          description: 'Versión adaptada para LG webOS con diseño elegante y guía EPG en directo.',
          store: 'LG Content Store',
        },
        {
          name: 'Smart ONE IPTV',
          description: 'Excelente rendimiento en paneles OLED y NanoCell con soporte 4K HDR.',
          store: 'LG Content Store',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Abre la LG Content Store',
          detail: 'Presiona el botón Home de tu Magic Remote y pulsa en la aplicación "LG Content Store" o "Apps".',
        },
        {
          stepNumber: 2,
          title: 'Busca IBO Player o IPTV Smarters',
          detail: 'Usa la barra de búsqueda superior e introduce "IBO Player". Haz clic en Instalar.',
        },
        {
          stepNumber: 3,
          title: 'Ingresa los datos de tu suscripción',
          detail: 'Inicia la app. Introduce los datos Xtream Codes (Usuario, Contraseña y Servidor) de 4K Spain TV.',
        },
        {
          stepNumber: 4,
          title: 'Disfruta del fútbol y canales en 4K',
          detail: 'Guarda la configuración y accede inmediatamente a todo el catálogo de canales sin cortes.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Qué hago si la pantalla se queda negra al cargar un canal en LG?',
          answer: 'En los ajustes de la app IPTV en webOS, cambia la opción de reproductor de "Hardware" a "Software" o "NCPlayer".',
        },
        {
          question: '¿Cómo actualizo las aplicaciones en mi Smart TV LG?',
          answer: 'Entra a LG Content Store -> Mis aplicaciones -> Actualizar todas para asegurar el máximo rendimiento.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía para Smart TV Samsung', href: '/iptv-samsung' },
        { label: 'Guía para Amazon Firestick', href: '/iptv-fire-tv-stick' },
        { label: 'Guía para Android TV', href: '/iptv-android-tv' },
        { label: 'Hub general de Smart TV', href: '/iptv-smart-tv' },
      ]}
    />
  );
}
