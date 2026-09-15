import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuickFacts } from '../components/QuickFacts';
import { SubServiceBlock } from '../components/SubServiceBlock';
import { WhyMe } from '../components/WhyMe';
import { Gallery } from '../components/Gallery';
import { PriceTable } from '../components/PriceTable';
import { TipsGrid } from '../components/TipsGrid';
import { FaqSection } from '../components/FaqAccordion';
import { OtherServices } from '../components/OtherServices';
import { CtaSection } from '../components/CtaSection';
import type { Service } from '../data/services';
import { buildServiceGraph } from '../lib/schema';
import { useScrollToHash } from '../lib/useScrollToHash';

/**
 * Template podstrani storitve. Vsa vsebina pride iz src/data/services/<storitev>.ts;
 * sekcije brez vsebine (proces, galerija, nasveti, FAQ) se ne izrišejo.
 */
export function ServicePage({ service }: { service: Service }) {
  useScrollToHash();
  const { hero, labels } = service;
  const bookingHref = `/kontakt?storitev=${service.formValue}`;

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        path={service.path}
        image={hero.image.src}
        schema={buildServiceGraph(service)}
      />

      {/* Glava: drobtinice + centriran naslov */}
      <div className="bg-white pt-6">
        <Breadcrumbs items={[{ name: 'Domov', href: '/' }, { name: 'Storitve', href: '/storitve' }, { name: service.name }]} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-16 pb-6 md:pb-10">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">{service.h1}</h1>
          <p className="text-brand-dark/70 text-lg leading-relaxed">{hero.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={bookingHref}
              className="px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
            >
              Rezerviraj termin →
            </Link>
            <a
              href="#cenik"
              className="px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
            >
              Cenik
            </a>
          </div>
        </div>

        {/* Na kratko: ključna dejstva (cena, obstojnost, plačilo, kraj, naročanje) */}
        <QuickFacts service={service} />
      </div>

      {/* Podstoritve: izmenični bloki, ločeni s tankimi črtami */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-brand-nude border-t border-brand-nude">
            {service.subservices.length > 0 ? (
              service.subservices.map((sub, i) => (
                <SubServiceBlock key={sub.id} sub={sub} reverse={i % 2 === 1} priority={i === 0} />
              ))
            ) : (
              <div className="py-14 md:py-20 max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-5">{labels.overview}</h2>
                {service.overview.map((paragraph, i) => (
                  <p key={i} className="text-brand-dark/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Kako poteka termin */}
      {service.process.length > 0 && (
        <section className="py-24 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-serif mb-4">Kako poteka termin</h2>
              <p className="text-brand-dark/70">Korak za korakom, da veš, kaj te čaka.</p>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <li key={i} className="bg-white p-8 border border-brand-nude/50">
                  <span className="font-serif text-4xl text-brand-taupe/60 block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-xl mb-3 text-brand-dark">{step.title}</h3>
                  <p className="text-brand-dark/70 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Zakaj k meni: izkušnje, izobraževanja, šola (E-E-A-T) */}
      <WhyMe />

      {/* Galerija */}
      {service.gallery.length > 0 && (
        <section className="py-24 bg-white border-t border-brand-nude">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-serif mb-4">Moje delo</h2>
              <p className="text-brand-dark/70">Nekaj utrinkov iz salona.</p>
            </div>
            <Gallery images={service.gallery} />
          </div>
        </section>
      )}

      {/* Cenik */}
      <section id="cenik" className="py-24 bg-brand-light scroll-mt-28 md:scroll-mt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceTable title={labels.prices} items={service.prices} note={service.priceNote} ctaHref={bookingHref} />
          <p className="mt-10 text-center text-sm text-brand-dark/70">
            Celoten cenik vseh storitev najdeš na strani{' '}
            <Link to={`/cenik#${service.id}`} className="underline text-brand-taupe hover:text-brand-dark transition-colors">
              Cenik
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Nega doma in dobro je vedeti */}
      {service.tips.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-serif mb-4">Nega doma in dobro je vedeti</h2>
              <p className="text-brand-dark/70">Da rezultat zdrži čim dlje.</p>
            </div>
            <TipsGrid items={service.tips} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq.length > 0 && <FaqSection items={service.faq} title={labels.faq} background="bg-brand-light" />}

      <OtherServices current={service} />

      <CtaSection href={bookingHref} />
    </>
  );
}
