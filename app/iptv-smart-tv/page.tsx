import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-smart-tv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvSmartTvPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="Smart TV (Samsung, LG, Sony, Philips)"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Conexión a internet estable de al menos 25 Mbps para HD / 50 Mbps para 4K',
        'Acceso a la tienda de aplicaciones oficial (Samsung App Store, LG Content Store, Google Play)',
        'Al menos 100 MB de espacio libre en la memoria del televisor',
        'Mando a distancia para navegación e introducción de datos',
      ]}
      recommendedApps={[
        {
          name: 'IBO Player',
          description: 'Excelente rendimiento en televisores Samsung Tizen y LG webOS con carga rápida.',
          store: 'Samsung Store / LG Content Store',
        },
        {
          name: 'IPTV Smarters Pro',
          description: 'La opción más completa con soporte para guía EPG, cine VOD y múltiples perfiles.',
          store: 'Google Play / LG Store',
        },
        {
          name: 'Smart ONE IPTV',
          description: 'Aplicación rápida con interfaz intuitiva y activación por dirección MAC.',
          store: 'Smart TV Stores',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Conecta tu Smart TV a internet',
          detail: 'Asegúrate de que tu televisor esté conectado vía cable Ethernet o Wi-Fi de 5 GHz para evitar problemas de buffering.',
        },
        {
          stepNumber: 2,
          title: 'Instala una app compatible desde la tienda oficial',
          detail: 'Busca IBO Player, IPTV Smarters o Smart ONE en la tienda de aplicaciones integrada de tu Smart TV e instálala.',
        },
        {
          stepNumber: 3,
          title: 'Introduce tus credenciales de suscripción',
          detail: 'Abre la app e introduce la URL M3U o los datos Xtream Codes (Usuario, Contraseña y URL) recibidos tras la compra.',
        },
        {
          stepNumber: 4,
          title: 'Carga el contenido y empieza a disfrutar',
          detail: 'Guarda los datos. Los canales, eventos deportivos en directo y películas en 4K se cargarán automáticamente.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Por qué la app se cierra o no carga la lista en mi Smart TV?',
          answer: 'Verifica la memoria disponible de la TV. Si es escasa, reinicia el televisor manteniendo pulsado el botón de encendido 5 segundos.',
        },
        {
          question: '¿Cómo soluciono el buffering en eventos deportivos?',
          answer: 'Conecta tu televisor mediante cable de red RJ45 en lugar de Wi-Fi y asegúrate de no tener descargas pesadas en la red doméstica.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía específica para Samsung Tizen', href: '/iptv-samsung' },
        { label: 'Guía específica para LG webOS', href: '/iptv-lg' },
        { label: 'Guía para Amazon Firestick', href: '/iptv-fire-tv-stick' },
        { label: 'Guía para Android TV', href: '/iptv-android-tv' },
      ]}
    />
  );
}
