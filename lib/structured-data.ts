import { SITE, absoluteUrl } from '@/lib/site';
import { PLANS, FAQ_ITEMS } from '@/lib/content';
import { BRAND_LOGO } from '@/lib/assets';
import type { BlogPost } from '@/lib/blog';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(BRAND_LOGO.src),
    email: SITE.contactEmail,
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.brand,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE.brand} — Suscripción IPTV Premium 4K`,
    description: SITE.description,
    image: [
      absoluteUrl('/home-hero.jpg'),
      absoluteUrl('/logospain.png'),
    ],
    sku: '4KSPAIN-IPTV-PREMIUM',
    brand: {
      '@type': 'Brand',
      name: SITE.name,
    },
    offers: PLANS.map((plan) => ({
      '@type': 'Offer',
      name: `Plan IPTV ${plan.name}`,
      price: plan.price.toFixed(2),
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/precios'),
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'ES',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0.00',
          currency: 'EUR',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
          },
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'ES',
        },
      },
    })),
  };
}

export function getFaqSchema(items?: { question: string; answer: string }[]) {
  const source = items && items.length > 0 ? items : FAQ_ITEMS;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: source.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : absoluteUrl(item.item),
    })),
  };
}

export interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
}

export function getHowToSchema(name: string, description: string, steps: HowToStepItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url.startsWith('http') ? s.url : absoluteUrl(s.url) } : {}),
    })),
  };
}

export function getArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(BRAND_LOGO.src),
        width: BRAND_LOGO.width,
        height: BRAND_LOGO.height,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  };
}
