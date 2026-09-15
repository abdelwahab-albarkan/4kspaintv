/**
 * Central asset map — the /public library is authoritative.
 * Every image used on the site is declared here with meaningful Spanish alt
 * text, so pages/components never hardcode paths and the usage is auditable.
 */

export interface Asset {
  src: string;
  alt: string;
}

/** Official brand logo (transparent PNG, 2172×724) — used everywhere. */
export const BRAND_LOGO: Asset & { width: number; height: number } = {
  src: '/logospain.png',
  alt: '4K SPAIN TV — IPTV en ultra alta definición',
  width: 2172,
  height: 724,
};

/** Cinematic homepage hero image. */
export const HOME_HERO: Asset = {
  src: '/home-hero.jpg',
  alt: 'Familia disfrutando de IPTV en un Smart TV 4K en el salón',
};

/** Hero image per device route (consumed by DeviceGuide via `route`). */
export const DEVICE_IMAGES: Record<string, Asset> = {
  '/iptv-samsung': { src: '/device-samsung.jpg', alt: 'Smart TV Samsung con Tizen OS compatible con IPTV en 4K' },
  '/iptv-lg': { src: '/device-lg.jpg', alt: 'Smart TV LG con webOS ejecutando una aplicación IPTV' },
  '/iptv-fire-tv-stick': { src: '/device-firestick.jpg', alt: 'Amazon Fire TV Stick configurado para ver IPTV' },
  '/iptv-android-tv': { src: '/device-android-tv.jpg', alt: 'Android TV con aplicación IPTV instalada' },
  '/iptv-apple-tv': { src: '/device-apple-tv.png', alt: 'Apple TV 4K reproduciendo canales IPTV' },
  '/iptv-smart-tv': { src: '/iptv-google-tv-dashboard.jpg', alt: 'Panel de IPTV en un Smart TV con Google TV' },
};

/** Home "compatible devices" cards. */
export const HOME_DEVICE_CARDS: (Asset & { title: string; description: string })[] = [
  { title: 'Amazon Firestick', description: 'Compatible con Fire TV Stick 4K, Lite y Cube. Instalación en 2 minutos.', src: '/device-firestick.jpg', alt: 'Amazon Fire TV Stick para ver IPTV' },
  { title: 'Smart TV', description: 'Samsung (Tizen), LG (webOS), Sony, Philips y Xiaomi con Google TV.', src: '/device-samsung.jpg', alt: 'Smart TV Samsung compatible con IPTV' },
  { title: 'Móviles y Tablets', description: 'Disfruta en cualquier lugar desde Android e iOS (iPhone / iPad).', src: '/device-iphone-ipad.webp', alt: 'iPhone y iPad con aplicación IPTV' },
  { title: 'Ordenadores', description: 'Windows, macOS y Linux mediante VLC, IPTV Smarters o navegador.', src: '/device-windows.jpg', alt: 'Ordenador con Windows y reproductor IPTV' },
  { title: 'Decodificadores MAG', description: 'Soporte nativo para MAG 250/254/322, Formuler y Enigma2.', src: '/devices/device-mag.png', alt: 'Decodificador MAG para IPTV' },
];

/** Extra device gallery for /dispositivos (assets without a dedicated page). */
export const DEVICE_GALLERY: (Asset & { label: string })[] = [
  { label: 'iPhone', src: '/device-iphone-ipad.webp', alt: 'iPhone con aplicación IPTV' },
  { label: 'iPad', src: '/iPad.png', alt: 'iPad reproduciendo IPTV' },
  { label: 'Mac', src: '/macos.webp', alt: 'Mac con IPTV mediante app o navegador' },
  { label: 'Windows PC', src: '/windowspc.png', alt: 'PC con Windows y reproductor IPTV' },
  { label: 'Nvidia Shield', src: '/nvidiashield.png', alt: 'Nvidia Shield TV para IPTV en 4K' },
  { label: 'Android TV Box / Xiaomi', src: '/devices/androidtvbox.png', alt: 'Android TV Box (Xiaomi) con IPTV' },
  { label: 'Fire TV Cube', src: '/firetvcude.png', alt: 'Amazon Fire TV Cube con IPTV' },
  { label: 'MAG', src: '/mag.png', alt: 'Decodificador MAG para IPTV' },
  { label: 'Roku', src: '/roku.png', alt: 'Roku con aplicación IPTV' },
  { label: 'Chromecast', src: '/chromecast.png', alt: 'Chromecast con Google TV e IPTV' },
  { label: 'PlayStation', src: '/PlayStation.png', alt: 'PlayStation para ver IPTV' },
  { label: 'Xbox', src: '/Xbox.png', alt: 'Xbox para ver IPTV' },
  { label: 'Formuler', src: '/Formuler.png', alt: 'Receptor Formuler para IPTV' },
  { label: 'Móviles Android', src: '/androidphones.webp', alt: 'Móviles Android con IPTV' },
];

/** App / interface screenshots for /aplicaciones-iptv. */
export const APP_SHOTS: Asset[] = [
  { src: '/app-smarters.jpg', alt: 'Aplicación IPTV Smarters Pro en un dispositivo' },
  { src: '/iptv-google-tv-dashboard.jpg', alt: 'Panel de una aplicación IPTV en Google TV' },
  { src: '/gpt-image-2_Collection_of_premium_IPTV_player_interfaces_displayed_on_Google_TV_multiple_str-0.jpg', alt: 'Interfaces de varios reproductores IPTV premium' },
  { src: '/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg', alt: 'Interfaz de aplicación IPTV similar a TiviMate' },
  { src: '/IPTVX-Apple-App-Store.jpg', alt: 'Aplicación IPTV disponible en la App Store de Apple' },
];

/** Smarters Pro specific screenshots for /iptv-smarters-pro. */
export const SMARTERS_SHOTS: Asset[] = [
  { src: '/app-smarters.jpg', alt: 'Interfaz de IPTV Smarters Pro' },
  { src: '/SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg', alt: 'IPTV Smarters Pro con suscripción anual' },
  { src: '/IPTVX-Apple-App-Store.jpg', alt: 'IPTV Smarters en la App Store de Apple' },
];

/** Competition logos for the sports pages. */
export const SPORTS_LOGOS: Asset[] = [
  { src: '/UEFA_Champions_League_logo.png', alt: 'UEFA Champions League' },
  { src: '/Formula_1_Logo_1.png', alt: 'Fórmula 1' },
  { src: '/NBA_Logo.svg.webp', alt: 'NBA' },
  { src: '/Logo_Ligue_1_2024.svg.webp', alt: 'Ligue 1' },
  { src: '/Top_14.svg.webp', alt: 'Top 14 de rugby' },
  { src: '/Roland-Garros_idhlvZUj6c_0.png', alt: 'Roland Garros' },
];

/** "Real experience" proof — the product running on real devices. */
export const PROOF_MAIN: Asset = {
  src: '/devices/5.png',
  alt: 'IPTV reproduciéndose en un Smart TV Android con su interfaz de streaming',
};

export const PROOF_GRID: Asset[] = [
  { src: '/iptv-google-tv-dashboard.jpg', alt: 'Panel de IPTV en un televisor con Google TV' },
  { src: '/device-samsung.jpg', alt: 'IPTV funcionando en un Smart TV Samsung' },
  { src: '/device-firestick.jpg', alt: 'IPTV instalado en un Amazon Fire TV Stick' },
];

/** Accepted payment methods (assets live in /public/payments). */
export const PAYMENT_METHODS: Asset[] = [
  { src: '/payments/visa.webp', alt: 'Visa' },
  { src: '/payments/mastercard.webp', alt: 'Mastercard' },
  { src: '/payments/paypal.png', alt: 'PayPal' },
  { src: '/payments/apple-pay.webp', alt: 'Apple Pay' },
  { src: '/payments/google-pay.png', alt: 'Google Pay' },
  { src: '/payments/bitcoin.jpg', alt: 'Bitcoin' },
];
