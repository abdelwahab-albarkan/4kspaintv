export interface PageKeywordTarget {
  route: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  h1: string;
  title: string;
  description: string;
  introBadge: string;
  introText: string;
  relatedLinks: { label: string; href: string }[];
}

export const KEYWORD_MAP: Record<string, PageKeywordTarget> = {
  '/comprar-iptv': {
    route: '/comprar-iptv',
    primaryKeyword: 'comprar iptv',
    secondaryKeywords: ['comprar iptv españa', 'suscripcion iptv premium', 'comprar lista iptv 4k'],
    title: 'Comprar IPTV España | Suscripción IPTV Premium 4K sin Cortes',
    h1: 'Comprar IPTV en España con activación inmediata',
    description:
      'Compra tu suscripción IPTV premium en España. Accede a +50.000 canales en directo, todos los deportes en 4K y +180.000 películas. Activación rápida en minutos.',
    introBadge: 'Compra Segura · Activación Inmediata',
    introText:
      'Si quieres comprar IPTV en España con total tranquilidad, en 4K Spain TV te ofrecemos un servicio premium de alta velocidad sin cortes ni congelaciones. Elige la duración de tu plan y recibe tus credenciales de acceso al instante por correo.',
    relatedLinks: [
      { label: 'Ver precios y planes', href: '/precios' },
      { label: 'El mejor IPTV de España', href: '/mejor-iptv' },
      { label: 'Comparativa de servicios IPTV', href: '/comparativa-iptv' },
      { label: 'Opiniones de nuestros clientes', href: '/opiniones-iptv' },
      { label: 'Dispositivos compatibles', href: '/dispositivos' },
    ],
  },
  '/mejor-iptv': {
    route: '/mejor-iptv',
    primaryKeyword: 'mejor iptv',
    secondaryKeywords: ['el mejor iptv españa', 'mejor proveedor iptv 4k', 'iptv mas estable'],
    title: 'El Mejor IPTV en España 2026 | Calidad 4K y Estabilidad Real',
    h1: 'Descubre por qué somos el mejor servicio de IPTV en España',
    description:
      '¿Buscas el mejor IPTV en España? Servidores dedicados anti-congelación, calidad 4K Ultra HD real, soporte 24/7 en español y compatibilidad con Smart TV y Firestick.',
    introBadge: 'Servicio IPTV Premium · Soporte en Español',
    introText:
      'No todas las suscripciones IPTV son iguales. Analizamos las necesidades de los usuarios en España para ofrecer la plataforma más estable, rápida y completa del mercado, con servidores de baja latencia diseñados para transmisiones deportivas multitudinarias.',
    relatedLinks: [
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
      { label: 'Consultar lista de precios', href: '/precios' },
      { label: 'Comparativa de proveedores IPTV', href: '/comparativa-iptv' },
      { label: 'Opiniones y reseñas reales', href: '/opiniones-iptv' },
      { label: 'Aplicaciones recomendadas', href: '/aplicaciones-iptv' },
    ],
  },
  '/precios': {
    route: '/precios',
    primaryKeyword: 'iptv precios',
    secondaryKeywords: ['precios iptv españa', 'tarifas iptv premium', 'cuanto cuesta iptv'],
    title: 'Precios IPTV España | Planes y Tarifas de Suscripción sin Permanencia',
    h1: 'Precios y planes de suscripción IPTV transparentes',
    description:
      'Consulta los precios de nuestro servicio IPTV en España. Planes flexibles de 1, 3, 12 y 24 meses en EUR. Sin permanencia, sin contratos y con todo incluido.',
    introBadge: 'Tarifas Transparentes · Sin Permanencia',
    introText:
      'Ofrecemos tarifas claras y adaptadas a todas las necesidades. Todos nuestros paquetes incluyen acceso completo en 4K Ultra HD a más de 50.000 canales y 180.000 contenidos en vídeo bajo demanda, con soporte técnico prioritario en español.',
    relatedLinks: [
      { label: 'Comprar IPTV al instante', href: '/comprar-iptv' },
      { label: '¿Por qué somos el mejor IPTV?', href: '/mejor-iptv' },
      { label: 'Valoraciones de clientes', href: '/opiniones-iptv' },
      { label: 'Lista completa de canales', href: '/canales' },
    ],
  },
  '/opiniones-iptv': {
    route: '/opiniones-iptv',
    primaryKeyword: 'opiniones iptv',
    secondaryKeywords: ['opiniones iptv españa', 'reseñas clientes iptv', 'valoraciones 4k spain tv'],
    title: 'Opiniones IPTV España | Reseñas y Valoraciones de Clientes Reales',
    h1: 'Opiniones y valoraciones sobre nuestro servicio de IPTV',
    description:
      'Descubre las opiniones y experiencias reales de miles de clientes satisfechos con nuestra suscripción IPTV en España. Más de 99,9% de disponibilidad y atención 24/7.',
    introBadge: '99,9% Satisfacción de Clientes',
    introText:
      'La satisfacción de nuestros usuarios es nuestra mejor garantía. Explora los comentarios y opiniones de clientes que ya disfrutan de fútbol, deportes y cine en 4K sin cortes desde sus Smart TV, Firestick y dispositivos móviles en toda España.',
    relatedLinks: [
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
      { label: 'Ver planes y precios', href: '/precios' },
      { label: 'Comparativa el mejor IPTV', href: '/mejor-iptv' },
      { label: 'Preguntas frecuentes', href: '/faq' },
    ],
  },
  '/comparativa-iptv': {
    route: '/comparativa-iptv',
    primaryKeyword: 'comparativa iptv',
    secondaryKeywords: ['comparar servicios iptv', 'comparativa proveedores iptv españa', 'criterios seleccion iptv'],
    title: 'Comparativa IPTV España | Guía de Criterios y Análisis de Proveedores',
    h1: 'Comparativa de servicios IPTV en España: Criterios de evaluación',
    description:
      'Análisis comparativo de servicios IPTV en España. Compara criterios clave como estabilidad sin cortes, calidad 4K 60fps, catálogo VOD, soporte 24/7 y dispositivos.',
    introBadge: 'Análisis Técnico · Guía Comparativa',
    introText:
      'Para elegir el servicio de IPTV adecuado en España es fundamental comparar los aspectos técnicos y de servicio que garantizan una experiencia de streaming sin cortes. Analizamos los criterios clave que diferencian un proveedor IPTV de alta calidad.',
    relatedLinks: [
      { label: 'El mejor IPTV de España', href: '/mejor-iptv' },
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
      { label: 'Opiniones de nuestros clientes', href: '/opiniones-iptv' },
      { label: 'Ver precios y planes', href: '/precios' },
    ],
  },
  '/aplicaciones-iptv': {
    route: '/aplicaciones-iptv',
    primaryKeyword: 'aplicaciones iptv',
    secondaryKeywords: ['mejores apps iptv', 'reproductores iptv gratis', 'aplicaciones para ver iptv'],
    title: 'Mejores Aplicaciones IPTV 2026 | Catálogo y Reproductores Compatibles',
    h1: 'Las mejores aplicaciones y reproductores de IPTV en 2026',
    description:
      'Descubre las mejores aplicaciones IPTV para Smart TV, Firestick, Android e iOS. Análisis completo de IPTV Smarters Pro, TiviMate, IBO Player y más.',
    introBadge: 'Centro de Aplicaciones IPTV',
    introText:
      'Descubre el catálogo completo de aplicaciones y reproductores IPTV compatibles con nuestro servicio. Compara sus funciones, interfaz y compatibilidad para elegir la mejor opción en tu dispositivo.',
    relatedLinks: [
      { label: 'Guía IPTV Smarters Pro', href: '/iptv-smarters-pro' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'Dispositivos compatibles', href: '/dispositivos' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
  '/iptv-smarters-pro': {
    route: '/iptv-smarters-pro',
    primaryKeyword: 'iptv smarters pro',
    secondaryKeywords: ['configurar iptv smarters pro', 'descargar iptv smarters pro', 'iptv smarters pro xtream codes'],
    title: 'IPTV Smarters Pro | Guía de Configuración e Instalación Paso a Paso',
    h1: 'Cómo descargar y configurar IPTV Smarters Pro',
    description:
      'Guía paso a paso para instalar y configurar IPTV Smarters Pro en Smart TV, Firestick, Android y iPhone con datos Xtream Codes o lista M3U.',
    introBadge: 'Tutorial IPTV Smarters Pro',
    introText:
      'IPTV Smarters Pro es uno de los reproductores IPTV más populares y estables del mercado. Te explicamos cómo descargarlo, instalarlo e introducir tus datos de acceso en pocos minutos.',
    relatedLinks: [
      { label: 'Guía de instalación paso a paso', href: '/instalar-iptv' },
      { label: 'Formatos M3U y Xtream Codes', href: '/iptv-m3u' },
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
      { label: 'Todas las aplicaciones IPTV', href: '/aplicaciones-iptv' },
      { label: 'Preguntas frecuentes', href: '/faq' },
    ],
  },
  '/instalar-iptv': {
    route: '/instalar-iptv',
    primaryKeyword: 'instalar iptv',
    secondaryKeywords: ['como instalar iptv', 'tutorial instalacion iptv firestick', 'configurar iptv smart tv'],
    title: 'Cómo Instalar IPTV | Guía Completa de Configuración en Dispositivos',
    h1: 'Guía paso a paso para instalar IPTV en cualquier dispositivo',
    description:
      'Aprende cómo instalar IPTV en Amazon Firestick, Smart TV Samsung o LG, Android, iPhone y PC. Tutorial sencillo con activación inmediata.',
    introBadge: 'Guía de Instalación Rápida',
    introText:
      'Configurar tu suscripción IPTV es un proceso rápido que solo toma 2 minutos. Sigue nuestras instrucciones paso a paso para instalar tu aplicación preferida y empezar a disfrutar de la mejor televisión en 4K.',
    relatedLinks: [
      { label: 'Guía IPTV Smart TV', href: '/iptv-smart-tv' },
      { label: 'Guía IPTV Samsung Tizen', href: '/iptv-samsung' },
      { label: 'Guía IPTV LG webOS', href: '/iptv-lg' },
      { label: 'Guía IPTV Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'Guía IPTV Android TV', href: '/iptv-android-tv' },
      { label: 'Guía Técnica M3U y Xtream', href: '/iptv-m3u' },
    ],
  },
  '/iptv-m3u': {
    route: '/iptv-m3u',
    primaryKeyword: 'iptv m3u',
    secondaryKeywords: ['lista m3u iptv', 'xtream codes api iptv', 'm3u vs xtream codes', 'url m3u 4k'],
    title: 'IPTV M3U y Xtream Codes | Guía Técnica de Formatos y Configuración',
    h1: 'Formatos IPTV M3U y Xtream Codes API: Configuración técnica',
    description:
      'Explicación técnica detallada de listas M3U vs API Xtream Codes. Cómo configurar tu reproductor IPTV con usuario, contraseña, servidor y guía EPG XML.',
    introBadge: 'Guía Técnica M3U / Xtream',
    introText:
      'Descubre las diferencias técnicas entre los enlaces de listas de reproducción M3U y las credenciales de la API Xtream Codes. Aprende a configurar la mejor conexión en tu dispositivo para evitar cortes.',
    relatedLinks: [
      { label: 'Guía IPTV Smarters Pro', href: '/iptv-smarters-pro' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'IPTV en Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'IPTV en Smart TV', href: '/iptv-smart-tv' },
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
    ],
  },
  '/iptv-deporte': {
    route: '/iptv-deporte',
    primaryKeyword: 'iptv deporte',
    secondaryKeywords: ['ver deporte por internet', 'deportes en directo 4k', 'iptv futbol 60fps', 'ver deportes online espana'],
    title: 'IPTV Deporte España | Ver Deporte por Internet en 4K y 60 FPS',
    h1: 'El mejor servicio para ver deporte por internet en 4K y 60 FPS',
    description:
      'Disfruta de todos los eventos deportivos por internet en 4K real a 60 FPS sin cortes. LaLiga, Champions, F1, MotoGP, NBA y tenis con activación inmediata.',
    introBadge: 'Deportes en Directo 4K · 60 FPS',
    introText:
      'Experimenta la máxima fluidez en tus retransmisiones deportivas por internet. Servidores de baja latencia con tecnología anti-congelación para ver fútbol, motor, baloncesto y tenis en calidad 4K Ultra HD sin cortes durante grandes eventos.',
    relatedLinks: [
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
      { label: 'Ver planes y precios', href: '/precios' },
      { label: 'Dispositivos compatibles', href: '/dispositivos' },
      { label: 'Guía de instalación', href: '/instalar-iptv' },
    ],
  },
  '/dispositivos': {
    route: '/dispositivos',
    primaryKeyword: 'iptv dispositivos',
    secondaryKeywords: ['dispositivos compatibles iptv', 'donde ver iptv', 'equipos iptv 4k'],
    title: 'Dispositivos Compatibles con IPTV | Smart TV, Firestick, Android, iOS',
    h1: 'Dispositivos compatibles con nuestro servicio IPTV',
    description:
      'Descubre todos los dispositivos compatibles con 4K Spain TV: Smart TV (Samsung, LG), Amazon Firestick, Android TV, Apple TV, PC y móviles.',
    introBadge: 'Centro de Dispositivos IPTV',
    introText:
      'Nuestro servicio es totalmente compatible con la mayoría de pantallas y reproductores del mercado. Elige tu dispositivo y consulta la guía específica para disfrutar de IPTV en 4K sin complicaciones.',
    relatedLinks: [
      { label: 'IPTV en Smart TV', href: '/iptv-smart-tv' },
      { label: 'IPTV en Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'IPTV en Samsung Smart TV', href: '/iptv-samsung' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
    ],
  },
  '/iptv-smart-tv': {
    route: '/iptv-smart-tv',
    primaryKeyword: 'iptv smart tv',
    secondaryKeywords: ['ver iptv en smart tv', 'apps iptv smart tv', 'configurar iptv televisor'],
    title: 'IPTV en Smart TV | Guía de Instalación y Apps para Televisores',
    h1: 'Cómo ver IPTV en Smart TV Samsung, LG, Sony y Philips',
    description:
      'Aprende a configurar IPTV en tu Smart TV. Las mejores aplicaciones como IBO Player, IPTV Smarters y Smart ONE para televisores Samsung, LG y Android TV.',
    introBadge: 'Guía Smart TV',
    introText:
      'Disfruta de más de 50.000 canales en directo directamente en tu pantalla de televisión sin cables ni antenas adicionales. Te enseñamos a instalar la app adecuada para tu marca de Smart TV.',
    relatedLinks: [
      { label: 'Guía IPTV Samsung', href: '/iptv-samsung' },
      { label: 'Guía IPTV LG webOS', href: '/iptv-lg' },
      { label: 'Guía IPTV Android TV', href: '/iptv-android-tv' },
      { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
    ],
  },
  '/iptv-samsung': {
    route: '/iptv-samsung',
    primaryKeyword: 'iptv samsung',
    secondaryKeywords: ['iptv smart tv samsung', 'instalar iptv samsung tizen', 'ibo player samsung'],
    title: 'IPTV para Smart TV Samsung | Configuración en Tizen OS',
    h1: 'Guía para instalar y ver IPTV en Smart TV Samsung',
    description:
      'Tutorial de instalación IPTV para televisores Samsung con Tizen OS. Configuración de IBO Player y Smart ONE en 3 sencillos pasos.',
    introBadge: 'Tizen OS · Samsung Smart TV',
    introText:
      'Los televisores Samsung con sistema operativo Tizen OS permiten instalar reproductores IPTV rápidos y estables desde la Samsung App Store oficial. Sigue este tutorial especializado.',
    relatedLinks: [
      { label: 'Guía IPTV LG webOS', href: '/iptv-lg' },
      { label: 'Guía IPTV Smart TV general', href: '/iptv-smart-tv' },
      { label: 'Tutorial de instalación paso a paso', href: '/instalar-iptv' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
  '/iptv-lg': {
    route: '/iptv-lg',
    primaryKeyword: 'iptv lg',
    secondaryKeywords: ['iptv smart tv lg', 'instalar iptv lg webos', 'ibo player lg content store'],
    title: 'IPTV para Smart TV LG | Configuración en webOS',
    h1: 'Guía para instalar y configurar IPTV en Smart TV LG',
    description:
      'Configura tu suscripción IPTV en televisores LG con webOS. Guía paso a paso para IBO Player, IPTV Smarters y SS IPTV.',
    introBadge: 'webOS · LG Smart TV',
    introText:
      'La LG Content Store cuenta con los mejores reproductores IPTV optimizados para el control Magic Remote y resoluciones 4K HDR. Configura tu TV LG en minutos.',
    relatedLinks: [
      { label: 'Guía IPTV Samsung', href: '/iptv-samsung' },
      { label: 'Guía IPTV Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
  '/iptv-fire-tv-stick': {
    route: '/iptv-fire-tv-stick',
    primaryKeyword: 'iptv fire tv stick',
    secondaryKeywords: ['iptv firestick 4k', 'instalar iptv downloader firestick', 'tivimate fire tv'],
    title: 'IPTV en Amazon Firestick | Instalación con Downloader 2026',
    h1: 'Cómo instalar IPTV en Amazon Fire TV Stick en 2 minutos',
    description:
      'Tutorial completo para instalar IPTV en Amazon Firestick 4K, Lite y Cube usando Downloader e IPTV Smarters Pro o TiviMate.',
    introBadge: 'Fire OS · Amazon Firestick',
    introText:
      'El Amazon Fire TV Stick es uno de los mejores dispositivos para streaming IPTV gracias a su procesador y compatibilidad con reproductores como TiviMate y IPTV Smarters Pro.',
    relatedLinks: [
      { label: 'Guía IPTV Android TV', href: '/iptv-android-tv' },
      { label: 'Tutorial IPTV Smarters Pro', href: '/iptv-smarters-pro' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
  '/iptv-android-tv': {
    route: '/iptv-android-tv',
    primaryKeyword: 'iptv android tv',
    secondaryKeywords: ['iptv google tv', 'iptv xiaomi mi box', 'tivimate android tv'],
    title: 'IPTV en Android TV y Google TV | Instalación y Mejores Apps',
    h1: 'Guía de IPTV para Android TV, Google TV y Xiaomi Box',
    description:
      'Instala IPTV en Android TV, Google TV y Xiaomi Mi Box. Tutorial con TiviMate, IPTV Smarters y XCIPTV desde Play Store.',
    introBadge: 'Android TV · Google TV',
    introText:
      'Android TV ofrece la máxima libertad para instalar aplicaciones de IPTV directamente desde la Google Play Store con soporte nativo para 4K a 60 FPS.',
    relatedLinks: [
      { label: 'Guía IPTV Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'Guía IPTV Apple TV', href: '/iptv-apple-tv' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
  '/iptv-apple-tv': {
    route: '/iptv-apple-tv',
    primaryKeyword: 'iptv apple tv',
    secondaryKeywords: ['iptv iphone ipad', 'smarters player lite apple tv', 'gse smart iptv ios'],
    title: 'IPTV en Apple TV y iPhone | Configuración en iOS y tvOS',
    h1: 'Cómo ver IPTV en Apple TV, iPhone e iPad',
    description:
      'Guía de configuración IPTV para dispositivos Apple. Instala Smarters Player Lite y GSE Smart IPTV en Apple TV 4K e iOS.',
    introBadge: 'tvOS · iOS Apple',
    introText:
      'Los dispositivos Apple (Apple TV 4K, iPhone e iPad) ofrecen una experiencia fluida de reproducción IPTV en alta definición con aplicaciones optimizadas.',
    relatedLinks: [
      { label: 'Guía IPTV Smart TV', href: '/iptv-smart-tv' },
      { label: 'Guía IPTV Firestick', href: '/iptv-fire-tv-stick' },
      { label: 'Guía de instalación general', href: '/instalar-iptv' },
      { label: 'Comprar IPTV España', href: '/comprar-iptv' },
    ],
  },
};
