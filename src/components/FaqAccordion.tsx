import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/services';

/** Harmonika z nativnim <details> – stil FAQ z domače strani. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-brand-nude">
      {items.map((faq, i) => (
        <details key={i} className="group">
          <summary className="flex justify-between items-center gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <h3 className="text-xl font-serif text-brand-dark">{faq.q}</h3>
            <ChevronDown className="faq-chevron w-5 h-5 text-brand-taupe shrink-0 transition-transform duration-300" />
          </summary>
          <p className="text-brand-dark/80 leading-relaxed pb-5">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  intro?: string;
  /** Barva ozadja sekcije (izmenjava z okoliškimi sekcijami). */
  background?: 'bg-brand-light' | 'bg-white';
}

/** Cela FAQ sekcija z naslovom. */
export function FaqSection({ items, title = 'Pogosta vprašanja', intro, background = 'bg-brand-light' }: FaqSectionProps) {
  return (
    <section className={`py-24 ${background}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif mb-4">{title}</h2>
          {intro && (
            <p className="text-brand-dark/70">
              {intro}
            </p>
          )}
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
