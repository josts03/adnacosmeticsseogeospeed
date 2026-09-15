import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { ServiceFeature } from '../components/ServiceFeature';
import { CtaSection } from '../components/CtaSection';
import { services } from '../data/services';
import { AREA_SERVED, CITY, PAYMENT_WITH, SITE_NAME } from '../data/site';
import { buildServicesHubGraph } from '../lib/schema';
import { useScrollToHash } from '../lib/useScrollToHash';

const TITLE = 'Kozmetika Vrhnika – vse storitve in cene | Adna Cosmetics';
const DESCRIPTION =
  'Kozmetika na Vrhniki: manikura, pedikura, lash lift in laminacija obrvi, depilacija z voskom in masaža v salonu Adna Cosmetics. Cene, potek in naročanje.';

const schema = buildServicesHubGraph({ title: TITLE, description: DESCRIPTION });

/**
 * Hub storitev: glavna stran, s katere stranka klikne na podstran storitve.
 * Uvod v treh stavkih odgovori, kaj/kje/kako; vsak blok vodi na svojo podstran.
 */
export function Services() {
  useScrollToHash();
  const nearby = AREA_SERVED.filter((place) => place !== CITY);

  return (
    <>
      <SEO title={TITLE} description={DESCRIPTION} path="/storitve" schema={schema} />
      <PageHeader
        titleIsH1
        title="Kozmetične storitve na Vrhniki"
        subtitle="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v kozmetičnem salonu Adna Cosmetics na Vrhniki."
      />

      {/* Uvod: neposreden odgovor (kaj, kje, kako) + hitre povezave na podstrani */}
      <section className="bg-white pt-16 pb-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-dark/80 text-lg leading-relaxed">
            V salonu {SITE_NAME} na Vrhniki ponujam pet storitev: <Link to="/manikura-vrhnika" className="underline decoration-brand-taupe/50 underline-offset-4 hover:text-brand-taupe transition-colors">manikuro</Link> (gel, trajni lak,
            podaljševanje), <Link to="/pedikura-vrhnika" className="underline decoration-brand-taupe/50 underline-offset-4 hover:text-brand-taupe transition-colors">pedikuro</Link>,{' '}
            <Link to="/lash-lift-vrhnika" className="underline decoration-brand-taupe/50 underline-offset-4 hover:text-brand-taupe transition-colors">lash lift in laminacijo obrvi</Link>,{' '}
            <Link to="/depilacija-vrhnika" className="underline decoration-brand-taupe/50 underline-offset-4 hover:text-brand-taupe transition-colors">depilacijo z voskom</Link> in{' '}
            <Link to="/masaza-vrhnika" className="underline decoration-brand-taupe/50 underline-offset-4 hover:text-brand-taupe transition-colors">masažo</Link>. {` Delam izključno po naročilu, plačilo je ${PAYMENT_WITH}. Poleg strank z Vrhnike k meni prihajajo tudi iz krajev ${nearby.join(', ')}.`}
          </p>
          <p className="text-brand-dark/70 mt-6 leading-relaxed">
            Vsaka storitev ima svojo stran s podrobnim opisom, potekom termina, cenikom in odgovori na pogosta vprašanja. Izberi storitev ali si oglej{' '}
            <Link to="/cenik" className="underline text-brand-taupe hover:text-brand-dark transition-colors">
              celoten cenik
            </Link>
            .
          </p>
          <nav aria-label="Storitve" className="mt-10 flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="px-5 py-2.5 border border-brand-nude text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark hover:border-brand-taupe hover:text-brand-taupe transition-colors"
              >
                {service.navLabel}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceFeature key={service.id} service={service} index={index} heading={service.h1}>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-taupe font-semibold mb-6">Cene od {service.priceRange.min} €</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={service.path}
                    className="inline-block px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
                  >
                    {service.labels.more} →
                  </Link>
                  <Link
                    to={`/cenik#${service.id}`}
                    className="inline-block px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
                  >
                    {service.labels.prices}
                  </Link>
                </div>
              </ServiceFeature>
            ))}
          </div>
        </div>
      </section>

      <CtaSection text="Izberi storitev in mi piši. Termin ti potrdim osebno." />
    </>
  );
}
