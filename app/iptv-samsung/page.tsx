import type { Metadata } from 'next';
import DeviceGuide from '@/components/sections/DeviceGuide';
import { KEYWORD_MAP } from '@/lib/keyword-map';

const pageData = KEYWORD_MAP['/iptv-samsung'];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: pageData.route },
  robots: { index: true, follow: true },
};

export default function IptvSamsungPage() {
  return (
    <DeviceGuide
      route={pageData.route}
      pageTitle={pageData.title}
      metaDescription={pageData.description}
      osName="Samsung Tizen OS"
      introBadge={pageData.introBadge}
      h1={pageData.h1}
      introText={pageData.introText}
      requirements={[
        'Televisor Samsung Smart TV con Tizen OS (modelos de 2016 a 2026)',
        'Conexión a internet recomendada de 50 Mbps para contenido 4K HDR',
        'Cuenta de Samsung activa para descargar aplicaciones de la Samsung App Store',
        'Mando a distancia Samsung One Remote',
      ]}
      recommendedApps={[
        {
          name: 'IBO Player',
          description: 'Un reproductor muy popular en Tizen OS, con carga rápida y reproducción en 4K.',
          store: 'Samsung App Store',
        },
        {
          name: 'Smart ONE IPTV',
          description: 'Excelente reproductor optimizado para Smart TV Samsung con cambio rápido de canales.',
          store: 'Samsung App Store',
        },
        {
          name: 'SS IPTV',
          description: 'Aplicación clásica gratuita compatible con listas M3U para televisores Samsung.',
          store: 'Samsung App Store',
        },
      ]}
      steps={[
        {
          stepNumber: 1,
          title: 'Accede a la Samsung App Store',
          detail: 'En el menú principal de tu Smart TV Samsung, selecciona la app "Apps" (tienda oficial de Tizen OS).',
        },
        {
          stepNumber: 2,
          title: 'Busca IBO Player o Smart ONE',
          detail: 'Usa el icono de búsqueda para encontrar "IBO Player" e instálala en tu televisor.',
        },
        {
          stepNumber: 3,
          title: 'Carga la lista con tu dirección MAC o Xtream API',
          detail: 'Abre la app instalada. Copia la dirección MAC que aparece en pantalla y vincúlala con tus credenciales de 4K Spain TV.',
        },
        {
          stepNumber: 4,
          title: 'Disfruta de la televisión en 4K',
          detail: 'Reinicia la app. La lista de canales de España, fútbol en directo y películas VOD aparecerá lista para ver.',
        },
      ]}
      troubleshooting={[
        {
          question: '¿Por qué no aparece IBO Player en mi tienda de Samsung?',
          answer: 'Verifica la región configurada en tu cuenta de Samsung. Asegúrate de tener seleccionada la región de España.',
        },
        {
          question: '¿Cómo borro la memoria caché en mi Smart TV Samsung?',
          answer: 'Mantén presionado el botón de encendido del mando a distancia durante 5 segundos hasta que el televisor se reinicie por completo.',
        },
      ]}
      siblingLinks={[
        { label: 'Guía para Smart TV LG (webOS)', href: '/iptv-lg' },
        { label: 'Guía para Amazon Firestick', href: '/iptv-fire-tv-stick' },
        { label: 'Guía para Android TV', href: '/iptv-android-tv' },
        { label: 'Hub general de Smart TV', href: '/iptv-smart-tv' },
      ]}
    />
  );
}
