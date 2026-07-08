import { Link } from 'react-router-dom';
import { ChevronDown, AlertCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicePages } from '../data/servicePages';
import { NotFound } from './NotFound';

const SITE_URL = 'https://www.adnacosmetics.si';

interface ServicePageProps {
  serviceId: string;
}

// srcset iz obstoječih variant: -800 za mobilne, -1200 (če obstaja) in polna širina
function srcSetFor(src: string, width: number) {
  const base = src.replace('.webp', '');
  const parts = [`${base}-800.webp 800w`];
  if (width > 1300) parts.push(`${base}-1200.webp 1200w`);
  parts.push(`${src} ${width}w`);
  return parts.join(', ');
}

export function ServicePage({ serviceId }: ServicePageProps) {
  const data = servicePages[serviceId];
  if (!data) return <NotFound />;

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.serviceName,
      description: data.serviceDescription,
      url: `${SITE_URL}${data.path}`,
      serviceType: data.serviceName,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: [
        { '@type': 'City', name: 'Vrhnika' },
        { '@type': 'City', name: 'Ljubljana' },
        { '@type': 'City', name: 'Logatec' },
        { '@type': 'City', name: 'Borovnica' },
        { '@type': 'City', name: 'Brezovica' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: data.minPrice,
        highPrice: data.maxPrice,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Domov', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Storitve', item: `${SITE_URL}/storitve` },
        { '@type': 'ListItem', position: 3, name: data.serviceName, item: `${SITE_URL}${data.path}` },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        path={data.path}
        schema={schema}
      />

      {/* Header */}
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">{data.display}</p>
          <h1 className="font-sans font-normal max-w-3xl mx-auto text-brand-dark/70 text-lg">
            {data.h1}
          </h1>
        </div>
      </div>

      {/* Intro + slika */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 aspect-[4/3] bg-brand-nude/30 relative group overflow-hidden">
              <img
                src={data.image}
                srcSet={srcSetFor(data.image, data.imageWidth)}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={data.imageAlt}
                width={data.imageWidth}
                height={data.imageHeight}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${data.imagePosition || 'object-center'}`}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-0.5 bg-brand-taupe mb-6"></div>
              {data.intro.map((p, i) => (
                <p key={i} className="text-brand-dark/70 text-lg leading-relaxed mb-6 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cenik */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">
            {data.pricesTitle}
          </h2>
          <div className="space-y-4">
            {data.prices.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center group">
                <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">
                  {item.name}
                </span>
                <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                <span className="text-lg font-medium text-brand-dark whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          {data.priceNote && (
            <p className="text-sm text-brand-taupe italic mt-8 flex items-start">
              <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
              <span>{data.priceNote}</span>
            </p>
          )}
          <div className="mt-10 text-center">
            <Link
              to="/kontakt"
              className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors"
            >
              Rezerviraj termin →
            </Link>
            <p className="mt-4 text-sm text-brand-dark/60">
              Celoten cenik vseh storitev najdeš na strani{' '}
              <Link to="/cenik" className="underline hover:text-brand-taupe transition-colors">
                Cenik
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif mb-10 text-brand-dark text-center">
            Pogosta vprašanja
          </h2>
          <div className="divide-y divide-brand-nude">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex justify-between items-center gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-xl font-serif text-brand-dark">{faq.q}</h3>
                  <ChevronDown className="faq-chevron w-5 h-5 text-brand-taupe shrink-0 transition-transform duration-300" />
                </summary>
                <p className="text-brand-dark/80 leading-relaxed pb-5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Druge storitve */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-8 text-brand-dark">Druge storitve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.values(servicePages)
              .filter((s) => s.id !== data.id)
              .map((s) => (
                <Link
                  key={s.id}
                  to={s.path}
                  className="inline-flex items-center px-6 py-3 border border-brand-dark/20 text-brand-dark text-sm uppercase tracking-widest hover:border-brand-taupe hover:text-brand-taupe transition-colors"
                >
                  {s.serviceName} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-brand-light mb-6">Pripravljena za spremembo?</h2>
          <p className="text-brand-nude text-lg mb-10">
            Piši mi in rezerviraj svoj termin — delam po dogovoru, od ponedeljka do petka.
          </p>
          <Link
            to="/kontakt"
            className="inline-block px-10 py-5 bg-brand-light text-brand-dark uppercase tracking-widest text-sm font-semibold hover:bg-brand-nude transition-colors"
          >
            Rezerviraj svoj termin →
          </Link>
        </div>
      </section>
    </>
  );
}
