import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-apple-tv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvAppleTvPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="Apple tvOS & iOS"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Apple TV 4K / HD (tvOS) o iPhone / iPad (iOS 14+)',
        'Conexión a internet estable de 25 Mbps para HD / 50 Mbps para 4K 60fps',
        'ID de Apple activo para descargar aplicaciones desde la App Store',
        'Soporte AirPlay para compartir contenido si se prefiere desde iPhone/iPad',
      ]}
      recommendedApps={[
        {
          name: 'Smarters Player Lite',
          description: 'La app oficial oficial optimizada para iOS y tvOS en la Apple App Store.',
          store: 'Apple App Store',
        },
        {
          name: 'GSE Smart IPTV',
          description: 'Popular aplicación con potente soporte para listas M3U y API Xtream Codes.',
          store: 'Apple App Store',
        },
        {
          name: 'IPTVX',
          description: 'Diseño ultra-moderno similar a Netflix pensado para la mejor experiencia en Apple TV 4K.',
          store: 'Apple App Store',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Abre la App Store en tu Apple TV o iPhone',
          detail: 'Selecciona la App Store de Apple e inicia la búsqueda de aplicaciones.',
        },
        {
          stepNumber: 2,
          title: 'Descarga Smarters Player Lite o GSE Smart IPTV',
          detail: 'Instala "Smarters Player Lite" directamente de la tienda de Apple.',
        },
        {
          stepNumber: 3,
          title: 'Añade tu usuario con la API Xtream Codes',
          detail: 'Abre la app e introduce las credenciales de tu suscripción de 4K Spain TV (Usuario, Contraseña y URL).',
        },
        {
          stepNumber: 4,
          title: 'Carga el contenido y empieza a disfrutar',
          detail: 'Guarda la configuración. Todos los canales y cine bajo demanda estarán listos en tu ecosistema Apple.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Por qué la app Smarters Player Lite no sincroniza la guía EPG en Apple TV?',
          answer: 'En Ajustes de la app, selecciona "Update EPG" manualmente para refrescar los datos de programación de la guía.',
        },
        {
          question: '¿Puedo usar AirPlay para enviar canales desde iPhone a Apple TV?',
          answer: 'Sí, abre el reproductor en tu iPhone, toca el icono de AirPlay y selecciona tu Apple TV o Smart TV compatible con AirPlay 2.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía para Android TV', href: '/iptv-android-tv' },
        { label: 'Guía para Amazon Firestick', href: '/iptv-fire-tv-stick' },
        { label: 'Guía para Smart TV Samsung', href: '/iptv-samsung' },
        { label: 'Guía para Smart TV LG', href: '/iptv-lg' },
      ]}
    />
  );
}
