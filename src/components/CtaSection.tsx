import { Link } from 'react-router-dom';
import { EMAIL } from '../data/site';

interface CtaSectionProps {
  title?: string;
  text?: string;
  href?: string;
  label?: string;
}

/** Temna CTA sekcija – stil "Pripravljena za spremembo?" z domače strani. */
export function CtaSection({
  title = 'Pripravljena za spremembo?',
  text = 'Tvoj termin čaka.',
  href = '/kontakt',
  label = 'Rezerviraj svoj termin →',
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-brand-dark text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-light mb-6">
          {title}
        </h2>
        <p className="text-brand-nude text-lg md:text-xl mb-10">
          {text}
        </p>
        <Link
          to={href}
          className="inline-block px-10 py-5 bg-brand-light text-brand-dark uppercase tracking-widest text-sm font-semibold hover:bg-brand-nude transition-colors mb-6"
        >
          {label}
        </Link>
        <p className="text-brand-light/60 text-sm">
          Ali me kontaktiraj: <a href={`mailto:${EMAIL}`} className="underline hover:text-brand-light">{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}
