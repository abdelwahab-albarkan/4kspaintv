import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-android-tv'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvAndroidTvPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="Android TV & Google TV"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Dispositivo Android TV o Google TV (Chromecast, Xiaomi Mi Box, Nvidia Shield, Sony BRAVIA)',
        'Conexión a internet estable de 25 Mbps para HD / 50 Mbps para 4K 60fps',
        'Cuenta de Google vinculada para acceder a la Google Play Store',
        'Mando Android TV o app de control en smartphone',
      ]}
      recommendedApps={[
        {
          name: 'TiviMate IPTV Player',
          description: 'Considerado el mejor reproductor para Android TV con guía EPG avanzada y soporte multi-pantalla.',
          store: 'Google Play Store',
        },
        {
          name: 'IPTV Smarters Pro',
          description: 'Descarga directa desde Google Play Store con soporte completo para canales 4K y VOD.',
          store: 'Google Play Store',
        },
        {
          name: 'XCIPTV',
          description: 'Excelente reproductor multimedia con interfaz limpia y ágil para decodificadores Android.',
          store: 'Google Play Store',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Abre la Google Play Store en tu Android TV',
          detail: 'Selecciona la app Play Store desde la pantalla de inicio de tu Android TV o Google TV.',
        },
        {
          stepNumber: 2,
          title: 'Busca TiviMate o IPTV Smarters Pro',
          detail: 'Usa el micrófono del mando o el teclado en pantalla para buscar e instalar "TiviMate" o "IPTV Smarters Pro".',
        },
        {
          stepNumber: 3,
          title: 'Selecciona Iniciar sesión con Xtream Codes',
          detail: 'Abre la app e introduce tus datos de suscripción: Usuario, Contraseña y URL del Servidor.',
        },
        {
          stepNumber: 4,
          title: 'Carga el contenido y empieza a ver',
          detail: 'El reproductor sincronizará los canales de televisión, los deportes en directo y el catálogo VOD.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Por qué TiviMate muestra un error de conexión al servidor?',
          answer: 'Revisa si introdujiste correctamente la URL del servidor respetando los dos puntos (:) y el puerto. Desactiva la VPN si estuviera mal configurada.',
        },
        {
          question: '¿Cómo optimizo el rendimiento en un dispositivo Xiaomi Mi Box?',
          answer: 'En Ajustes de Android TV -> Aplicaciones -> Borrar caché regularmente para liberar memoria RAM.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía para Amazon Firestick', href: '/iptv-fire-tv-stick' },
        { label: 'Guía para Apple TV y tvOS', href: '/iptv-apple-tv' },
        { label: 'Guía para Smart TV Samsung', href: '/iptv-samsung' },
        { label: 'Guía para Smart TV LG', href: '/iptv-lg' },
      ]}
    />
  );
}
