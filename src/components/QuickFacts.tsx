import type { QuickFact, Service } from '../data/services';
import { AREA_SERVED, BOOKING_LABEL, CITY, PAYMENT_LABEL, SITE_NAME } from '../data/site';

/** Splošna dejstva, enaka za vse storitve – dopolnijo quickFacts iz podatkov storitve. */
function commonQuickFacts(): QuickFact[] {
  const nearby = AREA_SERVED.filter((place) => place !== CITY);
  return [
    { label: 'Plačilo', value: PAYMENT_LABEL },
    { label: 'Kje', value: `${SITE_NAME}, ${CITY}; stranke tudi iz krajev ${nearby.join(', ')}` },
    { label: 'Naročanje', value: BOOKING_LABEL },
  ];
}

/**
 * »Na kratko«: ključna dejstva storitve kot <dl> – hiter pregled za stranko in samostojen,
 * citabilen odlomek za AI iskalnike (cena, obstojnost, plačilo, kraj, naročanje).
 */
export function QuickFacts({ service }: { service: Service }) {
  const facts = [...service.quickFacts, ...commonQuickFacts()];

  return (
    <section aria-labelledby="na-kratko" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
      <div className="border border-brand-nude bg-brand-light/60 p-6 md:p-8">
        {/* Ena predloga niza namesto več besedilnih vozlov: brez SSR komentarjev sredi naslova. */}
        <h2 id="na-kratko" className="font-serif text-2xl text-brand-dark mb-6">
          {`${service.name} na kratko`}
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-4">
          {facts.map((fact) => (
            <div key={fact.label} className="contents">
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-taupe sm:pt-1">{fact.label}</dt>
              <dd className="m-0 text-brand-dark/80 leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
