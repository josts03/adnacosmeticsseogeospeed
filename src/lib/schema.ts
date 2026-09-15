import type { FaqItem, PriceItem, Service } from '../data/services';
import { BUSINESS_ID, SITE_URL, WEBSITE_ID } from '../data/site';

const AREA_SERVED = ['Vrhnika', 'Ljubljana', 'Logatec', 'Borovnica', 'Brezovica'].map((name) => ({
  '@type': 'City',
  name,
}));

/** FAQPage JSON-LD iz seznama vprašanj (isti seznam, kot ga vidi uporabnik). */
export function buildFaqSchema(items: FaqItem[]) {
  return { '@context': 'https://schema.org', ...buildFaqNode(items) };
}

function buildFaqNode(items: FaqItem[], id?: string) {
  return {
    '@type': 'FAQPage',
    ...(id ? { '@id': id } : {}),
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface CrumbSchema {
  name: string;
  url: string;
}

export function buildBreadcrumbList(items: CrumbSchema[], id: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** "25 €" → fiksna cena; "4-8 €" / "0,50–2 €" → razpon. */
function offerFor(item: PriceItem) {
  const nums = (item.price.match(/\d+(?:[.,]\d+)?/g) ?? []).map((n) => Number(n.replace(',', '.')));
  const base = { '@type': 'Offer', name: item.name, priceCurrency: 'EUR' };
  if (nums.length >= 2) {
    return {
      ...base,
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: nums[0],
        maxPrice: nums[1],
        priceCurrency: 'EUR',
      },
    };
  }
  return { ...base, price: String(nums[0] ?? '') };
}

/**
 * Graf za podstran storitve: Service (povezan z BeautySalon #business iz index.html),
 * WebPage, ImageObject, BreadcrumbList in FAQPage (če so vprašanja).
 */
export function buildServiceGraph(service: Service) {
  const url = `${SITE_URL}${service.path}`;
  const image = service.hero.image;
  const imageUrl = `${SITE_URL}${image.src}`;
  const ids = {
    service: `${url}#service`,
    page: `${url}#webpage`,
    image: `${url}#primaryimage`,
    breadcrumb: `${url}#breadcrumb`,
    faq: `${url}#faq`,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': ids.service,
        name: service.name,
        serviceType: service.serviceType,
        description: service.hero.intro,
        url,
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED,
        image: { '@id': ids.image },
        offers: service.prices.map(offerFor),
      },
      {
        '@type': 'WebPage',
        '@id': ids.page,
        url,
        name: service.seo.title,
        description: service.seo.description,
        inLanguage: 'sl-SI',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ids.service },
        breadcrumb: { '@id': ids.breadcrumb },
        primaryImageOfPage: { '@id': ids.image },
      },
      {
        '@type': 'ImageObject',
        '@id': ids.image,
        url: imageUrl,
        contentUrl: imageUrl,
        width: image.width,
        height: image.height,
        caption: image.alt,
      },
      buildBreadcrumbList(
        [
          { name: 'Domov', url: `${SITE_URL}/` },
          { name: 'Storitve', url: `${SITE_URL}/storitve` },
          { name: service.name, url },
        ],
        ids.breadcrumb,
      ),
      ...(service.faq.length ? [buildFaqNode(service.faq, ids.faq)] : []),
    ],
  };
}
