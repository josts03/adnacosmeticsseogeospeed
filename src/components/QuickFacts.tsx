import { ChevronDown } from 'lucide-react';
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
 * »Na kratko«: ključna dejstva storitve kot <dl> v zaprtem <details> nad cenikom.
 * Besedilo je v prerenderanem HTML-ju (Google in AI iskalniki ga berejo kot samostojen,
 * citabilen odlomek: cena, obstojnost, plačilo, kraj, naročanje), stranka pa ga odpre po želji.
 */
export function QuickFacts({ service }: { service: Service }) {
  const facts = [...service.quickFacts, ...commonQuickFacts()];

  return (
    <details id="na-kratko" className="mb-12 border border-brand-nude bg-white">
      <summary className="flex justify-between items-center gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        {/* Ena predloga niza namesto več besedilnih vozlov: brez SSR komentarjev sredi naslova. */}
        <h2 className="font-serif text-2xl text-brand-dark">{`${service.name} na kratko`}</h2>
        <ChevronDown className="faq-chevron w-5 h-5 text-brand-taupe shrink-0 transition-transform duration-300" aria-hidden="true" />
      </summary>
      <dl className="grid grid-cols-1 sm:grid-cols-[max-content_1fr] gap-x-8 gap-y-4 px-6 pb-6 pt-5 border-t border-brand-nude">
        {facts.map((fact) => (
          <div key={fact.label} className="contents">
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-taupe sm:pt-1">{fact.label}</dt>
            <dd className="m-0 text-brand-dark/80 leading-relaxed">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}
