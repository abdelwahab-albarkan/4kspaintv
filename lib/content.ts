import type { LucideIcon } from 'lucide-react';
import { Tv, Zap, Globe, ShieldCheck, Headphones, MonitorSmartphone } from 'lucide-react';
import { SITE, getWhatsAppUrl } from './site';

export const STATS: { value: string; label: string }[] = [
  { value: '+50.000', label: 'Canales en directo' },
  { value: '+180.000', label: 'Películas y series' },
  { value: '4K', label: 'Calidad Ultra HD' },
  { value: '99,9%', label: 'Tiempo activo' },
];

export const FEATURES: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: '4K Ultra HD real',
    description: 'Imagen nítida en 4K con HDR10+, además de FHD y HD en todos los canales y contenidos.',
    icon: Tv,
  },
  {
    title: 'Reproducción optimizada',
    description: 'Servidores optimizados para una reproducción fluida, también en las horas de mayor demanda.',
    icon: Zap,
  },
  {
    title: 'Catálogo global',
    description: 'Canales de España, Europa, América y todo el mundo, con deportes, cine, noticias e infantil.',
    icon: Globe,
  },
  {
    title: 'Conexión segura',
    description: 'Compatible con VPN y sin bloqueo por IP. Disfruta desde donde quieras sin restricciones.',
    icon: ShieldCheck,
  },
  {
    title: 'Soporte 24/7',
    description: 'Nuestro equipo te ayuda a cualquier hora por chat y correo, en español.',
    icon: Headphones,
  },
  {
    title: 'Todos los dispositivos',
    description: 'Firestick, Smart TV, Android, iOS, MAG, Windows y Mac. Configúralo en minutos.',
    icon: MonitorSmartphone,
  },
];

export interface Plan {
  name: string;
  tagline: string;
  months: number;
  price: number;
  popular: boolean;
}

// Prices in EUR — Spanish market.
export const PLANS: Plan[] = [
  { name: '1 Mes', tagline: 'Para probar el servicio', months: 1, price: 12.99, popular: false },
  { name: '3 Meses', tagline: 'El equilibrio perfecto', months: 3, price: 24.99, popular: false },
  { name: '12 Meses', tagline: 'Mejor relación calidad-precio', months: 12, price: 59.99, popular: true },
  { name: '24 Meses', tagline: 'Máximo ahorro a largo plazo', months: 24, price: 89.99, popular: false },
];

// ── Plan helpers (single source of truth for slugs, lookup and EUR format) ──

/** URL-safe slug for a plan, e.g. "1-mes", "12-meses". Used only as a query param. */
export function planSlug(plan: Pick<Plan, 'months'>): string {
  return plan.months === 1 ? '1-mes' : `${plan.months}-meses`;
}

/** Resolve a plan from an untrusted slug. Returns undefined if it matches no real plan. */
export function getPlanBySlug(slug: string | undefined | null): Plan | undefined {
  if (!slug) return undefined;
  return PLANS.find((p) => planSlug(p) === slug);
}

/** Format a number as EUR in Spanish locale (e.g. 59,99 €). */
export function formatEUR(value: number): string {
  return value
    .toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })
    .replace(/\u00a0/g, ' ');
}

/**
 * Builds the standard Spanish prefilled WhatsApp message for a specific plan.
 * e.g. "Hola, estoy interesado en el plan de 12 meses por 59,99 € de 4K SPAIN TV. Quisiera recibir más información."
 */
export function getPlanWhatsAppMessage(plan: Pick<Plan, 'months' | 'price'>): string {
  const planName = plan.months === 1 ? '1 mes' : `${plan.months} meses`;
  const formattedPrice = formatEUR(plan.price);
  return `Hola, estoy interesado en el plan de ${planName} por ${formattedPrice} de ${SITE.brand}. Quisiera recibir más información.`;
}

/**
 * Returns the WhatsApp link with prefilled message for a specific plan.
 */
export function getPlanWhatsAppUrl(plan: Pick<Plan, 'months' | 'price'>): string {
  return getWhatsAppUrl(getPlanWhatsAppMessage(plan));
}


export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: '¿Qué es IPTV y cómo funciona?',
    answer:
      'IPTV (Televisión por Protocolo de Internet) emite contenido de televisión a través de internet en lugar de cable o satélite. Solo necesitas conectar tu dispositivo a internet, instalar una app compatible e introducir tus datos de acceso para empezar a ver miles de canales al instante.',
  },
  {
    question: '¿En qué dispositivos funciona?',
    answer:
      'Funciona en prácticamente todos: Amazon Firestick, Android TV, Smart TV (Samsung, LG, Sony), móviles y tablets iOS y Android, ordenadores Windows y Mac, y receptores MAG.',
  },
  {
    question: '¿Cuánto tarda la activación?',
    answer:
      'La activación es inmediata. En cuanto se confirma el pago recibes tus datos de acceso por correo en pocos minutos y puedes empezar a ver de inmediato.',
  },
  {
    question: '¿Necesito un contrato de permanencia?',
    answer:
      'No hay contratos ni permanencia. Todos los planes son de pago único por el periodo elegido, sin cargos ocultos.',
  },
  {
    question: '¿Qué velocidad de internet recomiendan?',
    answer:
      'Recomendamos un mínimo de 25 Mbps para HD y 50 Mbps para 4K Ultra HD. Una conexión por cable ofrece la mejor experiencia.',
  },
  {
    question: '¿Qué diferencia hay entre la IPTV y la televisión por cable o satélite?',
    answer:
      'La diferencia principal está en cómo llega la señal. La televisión tradicional usa cable coaxial o una antena parabólica, mientras que la IPTV transmite los canales y el contenido a través de tu conexión a internet. Esto permite acceder a una oferta más amplia, disfrutar de contenido bajo demanda y utilizar el servicio en varios dispositivos sin instalaciones adicionales. Solo necesitas una conexión estable y una aplicación compatible para empezar a ver.',
  },
  {
    question: '¿Qué es la guía EPG y la lista de canales en IPTV?',
    answer:
      'La guía EPG es la programación electrónica que muestra qué se emite en cada canal y a qué hora, igual que la guía de tu televisor. La lista de canales es el conjunto de canales y contenidos que carga el reproductor al iniciar sesión. Ambas se actualizan de forma automática, así que puedes consultar los horarios de deportes, cine o series y moverte entre canales cómodamente desde la propia aplicación.',
  },
  {
    question: '¿Puedo ver contenido en 4K y películas bajo demanda?',
    answer:
      'Sí. Además de los canales en directo, la IPTV incluye vídeo bajo demanda: un catálogo de películas y series que reproduces cuando quieras, con opción de pausar, avanzar o retomar. La calidad depende del contenido y de tu conexión, e incluye emisiones en 4K Ultra HD, además de Full HD y HD. Para disfrutar del 4K sin cortes conviene una conexión rápida y, a ser posible, por cable en lugar de wifi.',
  },
  {
    question: '¿Cómo puedo comprar o contratar IPTV en España?',
    answer:
      'El proceso es sencillo. Elige la duración del plan que mejor se adapte a ti en la página de precios, completa el pago y recibirás tus datos de acceso por correo electrónico. Con ese usuario y contraseña, o la URL del servidor, podrás configurar la aplicación en tu dispositivo y empezar a ver el contenido. No necesitas instalar equipos adicionales ni firmar ningún contrato de permanencia.',
  },
  {
    question: '¿Cuánto cuesta una suscripción de IPTV?',
    answer:
      'El precio depende de la duración que elijas: cuanto más largo es el periodo, mejor resulta la relación calidad-precio. Puedes consultar todas las opciones y tarifas actualizadas en la página de precios. Todos los planes incluyen las mismas prestaciones y son de pago único por el periodo contratado, sin cuotas ocultas ni renovaciones automáticas inesperadas. Así sabes exactamente lo que pagas desde el principio.',
  },
  {
    question: '¿Cómo comparo distintos proveedores de IPTV?',
    answer:
      'Para comparar servicios conviene fijarse en factores objetivos: la estabilidad de la emisión, la variedad de canales y de contenido a demanda, la calidad de imagen, la compatibilidad con tus dispositivos, la rapidez de la activación y la calidad del soporte. También ayuda comprobar si ofrecen una prueba y leer valoraciones reales. En nuestras secciones de comparativa y opiniones encontrarás información pensada para decidir según lo que más valores.',
  },
  {
    question: '¿Puedo probar el servicio antes de contratar?',
    answer:
      'Sí, disponemos de una prueba para que compruebes por ti mismo la estabilidad, la calidad de imagen y la compatibilidad con tu equipo antes de decidirte. Es la mejor forma de asegurarte de que todo funciona bien en tu televisor o móvil y con tu conexión a internet. Si te surge cualquier duda durante la prueba, nuestro equipo de soporte en español puede ayudarte a configurarla y a resolver incidencias.',
  },
  {
    question: '¿Cómo sé si un servicio de IPTV es fiable y estable?',
    answer:
      'Un servicio fiable se nota en el día a día: canales que cargan rápido, sin cortes ni congelaciones incluso en horas punta, y una imagen constante. Antes de contratar, aprovecha la prueba para verificarlo en tus propios dispositivos y con tu conexión. También puedes revisar las opiniones de otros usuarios y valorar la rapidez del soporte. Ten en cuenta que la estabilidad depende tanto del servicio como de tu conexión doméstica.',
  },
  {
    question: '¿En qué debo fijarme para elegir el mejor IPTV para mí?',
    answer:
      'No existe una única opción válida para todos: depende de tus necesidades. Piensa en qué contenido quieres ver (deportes, cine, series o canales internacionales), en qué dispositivos lo usarás y qué duración de plan te interesa. Valora también la calidad de imagen, la estabilidad y el soporte en español. Nuestra recomendación es empezar por la prueba y revisar la sección de comparativa para decidir con criterio, sin guiarte solo por el precio.',
  },
  {
    question: '¿Qué aplicaciones IPTV puedo utilizar?',
    answer:
      'Puedes usar los reproductores más habituales del mercado, como IPTV Smarters Pro, TiviMate, IBO Player o Smart ONE, entre otros. La aplicación recomendada depende de tu dispositivo: algunas rinden mejor en Smart TV y otras en Android TV o Fire TV Stick. Una vez instalada, solo tienes que introducir tus datos de acceso o la URL del servidor. En la sección de aplicaciones te explicamos cuál elegir según tu equipo.',
  },
  {
    question: '¿Cómo veo IPTV en un Smart TV Samsung?',
    answer:
      'En los televisores Samsung con sistema Tizen puedes instalar una aplicación compatible, como IBO Player o Smart ONE, desde la tienda de aplicaciones del propio televisor. Después abres la app, introduces tus datos de acceso o vinculas la dirección MAC del dispositivo, y la lista de canales y el contenido bajo demanda quedarán listos para reproducir. En nuestra guía específica para Samsung encontrarás el proceso detallado paso a paso.',
  },
  {
    question: '¿Es compatible con los Smart TV LG (webOS)?',
    answer:
      'Sí. Los televisores LG con webOS son totalmente compatibles. Puedes instalar una aplicación IPTV desde la LG Content Store, iniciar sesión con tu usuario y contraseña o con los datos Xtream Codes, y ver el contenido directamente en el televisor, sin decodificadores externos. El rendimiento es muy bueno en los modelos recientes. En la guía dedicada a LG te explicamos qué aplicación instalar y cómo cargar tu lista correctamente.',
  },
  {
    question: '¿Funciona en Fire TV Stick, Android TV y otros dispositivos de streaming?',
    answer:
      'Sí. Es compatible con Amazon Fire TV Stick (4K, Lite o Cube), con dispositivos Android TV y Google TV, y con otros reproductores multimedia. En el Fire TV Stick suele instalarse a través de la aplicación Downloader, mientras que en Android TV puedes descargar el reproductor desde Google Play. Tras instalar la app e introducir tus credenciales, tendrás acceso a los canales y al contenido a demanda. Cada guía de dispositivo detalla el método más cómodo.',
  },
  {
    question: '¿Cómo instalo IPTV paso a paso?',
    answer:
      'La instalación tiene tres pasos: descarga una aplicación IPTV compatible con tu dispositivo, ábrela e introduce los datos de acceso que recibiste por correo (usuario, contraseña y URL del servidor, o los datos Xtream Codes). En unos segundos la app cargará la lista de canales y el catálogo a demanda. El proceso es muy parecido en cualquier equipo. Tienes guías detalladas por dispositivo en la sección de instalación si necesitas ayuda.',
  },
  {
    question: '¿Cómo configuro IPTV con Xtream Codes o con usuario y contraseña?',
    answer:
      'La mayoría de reproductores permiten dos métodos. Con Xtream Codes introduces el usuario, la contraseña y la URL del servidor, y la aplicación organiza automáticamente los canales, la guía EPG y el contenido a demanda por categorías; es la opción más cómoda y estable. La alternativa es cargar una lista M3U. En ambos casos utilizas los datos que te enviamos al contratar. Si algo falla, revisa que has copiado los datos sin espacios de más.',
  },
  {
    question: '¿Qué hago si la imagen se ve entrecortada o con cortes?',
    answer:
      'Los cortes suelen deberse a la conexión a internet más que al servicio. Prueba a acercar el dispositivo al router o, mejor aún, conéctalo por cable; reinicia el router y la aplicación; y cierra otras descargas o dispositivos que consuman ancho de banda. Comprueba que tu velocidad es suficiente (al menos 25 Mbps para HD y 50 Mbps para 4K). Si el problema continúa, nuestro soporte en español puede ayudarte a revisar la configuración.',
  },
  {
    question: '¿Qué es una lista M3U y cómo se utiliza?',
    answer:
      'Una lista M3U es un archivo que contiene los enlaces de los canales y del contenido, y que los reproductores IPTV usan para mostrarlos. Para utilizarla, abres tu aplicación, eliges la opción de cargar lista M3U e introduces la URL que te facilitamos. La app descargará automáticamente los canales y la guía. Como alternativa, muchos reproductores permiten conectarse mediante Xtream Codes, un método equivalente que suele resultar más ordenado y estable.',
  },
  {
    question: '¿Es compatible con iPhone, iPad y Apple TV?',
    answer:
      'Sí. En dispositivos de Apple puedes usar reproductores compatibles con iOS y iPadOS para el iPhone y el iPad, y aplicaciones específicas para el Apple TV 4K. El funcionamiento es el mismo: instalas la app desde la App Store, introduces tus datos de acceso y empiezas a ver el contenido. Como la cuenta funciona en varias plataformas, puedes alternar entre el televisor y tus dispositivos móviles según lo que necesites en cada momento.',
  },
  {
    question: '¿Es legal usar IPTV en España?',
    answer:
      'La tecnología IPTV es legal en sí misma: no es más que televisión transmitida por internet. Cuestión distinta son los derechos del contenido que se emite, que corresponden a cada emisora y titular. Por eso recomendamos siempre un uso responsable y respetar la legislación vigente y los derechos de autor. Si tienes dudas sobre la situación de un contenido concreto, lo prudente es informarte antes. Puedes consultar también nuestra política de uso aceptable.',
  },
  {
    question: '¿Qué uso responsable debo hacer del servicio?',
    answer:
      'Te pedimos un uso personal y responsable: no compartir tus datos de acceso con terceros, utilizar el servicio dentro de las condiciones contratadas y respetar la legislación aplicable y los derechos de autor. Un uso adecuado ayuda a mantener la calidad y la estabilidad de la emisión para todos los usuarios. Puedes revisar los detalles en nuestra política de uso aceptable y en los términos y condiciones, disponibles en el pie de página del sitio.',
  },
];

// ────────────────────────────────────────────
// Reseñas (ilustrativas)
// Retratos de carácter demostrativo; sin identidades ni datos reales.
// ────────────────────────────────────────────
export interface Review {
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'Carlos M.',
    location: 'Madrid',
    rating: 5,
    quote:
      'La instalación fue rapidísima y no he tenido cortes ni en los partidos de máxima audiencia. La calidad 4K se nota muchísimo.',
    avatar: '/devices/pexels-kelly-3812011.webp',
    avatarAlt: 'Retrato de usuario',
  },
  {
    name: 'Lucía R.',
    location: 'Valencia',
    rating: 5,
    quote:
      'Lo uso en el Smart TV y en el móvil, y funciona igual de bien en los dos. El catálogo de películas y series es enorme.',
    avatar: '/devices/pexels-helenalopes-27086758.webp',
    avatarAlt: 'Retrato de usuaria',
  },
  {
    name: 'Javier P.',
    location: 'Sevilla',
    rating: 5,
    quote:
      'Lo que más valoro es el soporte en español: me ayudaron a configurarlo en el Fire TV Stick en cuestión de minutos.',
    avatar: '/devices/pexels-hao-peng-2148478861-30976004.webp',
    avatarAlt: 'Retrato de usuario',
  },
  {
    name: 'Marta G.',
    location: 'Bilbao',
    rating: 4,
    quote:
      'Muy buena relación calidad-precio. El fútbol se ve fluido y sin retardo, y la configuración fue sencilla.',
    avatar: '/devices/pexels-andreas-suwardy-2152085739-39131498.webp',
    avatarAlt: 'Retrato de usuaria',
  },
];
