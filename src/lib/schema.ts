import type { FaqItem, PriceItem, Service } from '../data/services';
import { services } from '../data/services';
import type { Review } from '../data/reviews';
import { AREA_SERVED, BUSINESS_ID, FOUNDER_ID, SITE_URL, WEBSITE_ID } from '../data/site';

const CONTEXT = 'https://schema.org';
const AREA_SERVED_NODES = AREA_SERVED.map((name) => ({ '@type': 'City', name }));

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

export interface PageGraphOptions {
  /** Tip strani; privzeto WebPage. */
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  path: string;
  title: string;
  description: string;
  /** Drobtinice brez »Domov« (doda se sama); zadnja je trenutna stran. */
  crumbs: CrumbSchema[];
  /** Dodatne lastnosti vozla strani (mainEntity, datePublished …). */
  extra?: Record<string, unknown>;
  /** Dodatni vozli v grafu (ItemList, FAQPage …). */
  nodes?: object[];
}

/**
 * Graf za navadno stran: vozel strani (WebPage ali podtip), povezan z WebSite (#website)
 * in salonom (#business) iz index.html, + BreadcrumbList.
 */
export function buildPageGraph({ type = 'WebPage', path, title, description, crumbs, extra = {}, nodes = [] }: PageGraphOptions) {
  const url = `${SITE_URL}${path}`;
  const breadcrumbId = `${url}#breadcrumb`;
  return {
    '@context': CONTEXT,
    '@graph': [
      {
        '@type': type,
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'sl-SI',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': BUSINESS_ID },
        breadcrumb: { '@id': breadcrumbId },
        ...extra,
      },
      buildBreadcrumbList([{ name: 'Domov', url: `${SITE_URL}/` }, ...crumbs], breadcrumbId),
      ...nodes,
    ],
  };
}

/**
 * Hub /storitve: CollectionPage + ItemList vseh storitev. Vsak element ima isti @id kot
 * Service na svoji podstrani (in v OfferCatalog v index.html), zato se vozli združijo.
 */
export function buildServicesHubGraph(opts: { title: string; description: string }) {
  const url = `${SITE_URL}/storitve`;
  const listId = `${url}#list`;
  return buildPageGraph({
    type: 'CollectionPage',
    path: '/storitve',
    ...opts,
    crumbs: [{ name: 'Storitve', url }],
    extra: { mainEntity: { '@id': listId } },
    nodes: [
      {
        '@type': 'ItemList',
        '@id': listId,
        name: 'Storitve salona Adna Cosmetics',
        numberOfItems: services.length,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: services.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}${s.path}#service`,
            name: s.name,
            serviceType: s.serviceType,
            description: s.cardText,
            url: `${SITE_URL}${s.path}`,
            provider: { '@id': BUSINESS_ID },
          },
        })),
      },
    ],
  });
}

/**
 * Domača stran: FAQPage + ocene na poslovni entiteti (#business iz index.html).
 * Ocene so v schemi samo tu, kjer so tudi vidne. Google za lastne ocene ne prikazuje zvezdic,
 * AI iskalniki pa AggregateRating/Review berejo.
 */
export function buildHomeGraph(faqs: FaqItem[], reviews: Review[], stats: { count: number; average: number }) {
  return {
    '@context': CONTEXT,
    '@graph': [
      buildFaqNode(faqs, `${SITE_URL}/#faq`),
      {
        '@type': 'BeautySalon',
        '@id': BUSINESS_ID,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: stats.average,
          bestRating: 5,
          worstRating: 1,
          ratingCount: stats.count,
          reviewCount: stats.count,
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5, worstRating: 1 },
          reviewBody: r.text,
          inLanguage: 'sl',
        })),
      },
    ],
  };
}

/**
 * Graf za podstran storitve: Service (povezan z BeautySalon #business iz index.html),
 * WebPage (z datumi in avtorico #founder), ImageObject, BreadcrumbList in FAQPage (če so vprašanja).
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
    '@context': CONTEXT,
    '@graph': [
      {
        '@type': 'Service',
        '@id': ids.service,
        name: service.name,
        serviceType: service.serviceType,
        description: service.hero.intro,
        url,
        provider: { '@id': BUSINESS_ID },
        areaServed: AREA_SERVED_NODES,
        image: { '@id': ids.image },
        offers: service.prices.map(offerFor),
        termsOfService: `${SITE_URL}/pogoji-poslovanja`,
      },
      {
        '@type': 'WebPage',
        '@id': ids.page,
        url,
        name: service.seo.title,
        description: service.seo.description,
        inLanguage: 'sl-SI',
        datePublished: service.published,
        dateModified: service.modified,
        author: { '@id': FOUNDER_ID },
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
