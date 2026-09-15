import { Link } from 'react-router-dom';
import { CITY, FOUNDER, SITE_NAME } from '../data/site';

/** Razlogi iz strani O meni (leta, izobraževanja, šola) – številke so v src/data/site.ts. */
const REASONS = [
  {
    title: `${FOUNDER.yearsExperience}+ let izkušenj`,
    text: `${FOUNDER.name}, ${FOUNDER.jobTitle.toLowerCase()}, vsako storitev opravi sama: od posveta na začetku do nasvetov za nego doma.`,
  },
  {
    title: `${FOUNDER.trainings}+ izobraževanj`,
    text: 'Redno se izobražujem v Sloveniji in tujini, da delam po sodobnih tehnikah in z materiali, ki jim zaupam.',
  },
  {
    title: 'Šolanje v stroki',
    text: `${FOUNDER.school} in delo v več salonih pred odprtjem lastnega.`,
  },
  {
    title: 'Samo po naročilu',
    text: 'Termin je samo tvoj: brez čakalnice, z individualnim pristopom in prilagoditvijo tvojim željam.',
  },
];

/** Blok zaupanja »Zakaj k meni?« na podstraneh storitev (E-E-A-T signali + povezava na O meni). */
export function WhyMe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-4">Zakaj k meni?</h2>
          <p className="text-brand-dark/70">{`Kar dobiš v salonu ${SITE_NAME} na ${CITY === 'Vrhnika' ? 'Vrhniki' : CITY}.`}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-brand-nude/30 p-6">
              <h3 className="font-serif text-xl mb-3 text-brand-dark">{reason.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to={FOUNDER.path}
            className="inline-block px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors"
          >
            Spoznaj me →
          </Link>
        </div>
      </div>
    </section>
  );
}
