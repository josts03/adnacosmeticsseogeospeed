import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import type { PriceItem } from '../data/services';

interface PriceTableProps {
  title: string;
  items: PriceItem[];
  note?: string;
  ctaHref?: string;
  /** Povezava na podstran storitve (samo na strani Cenik). */
  more?: { href: string; label: string };
  /** Sidro sekcije (npr. 'manikura' → /cenik#manikura). */
  id?: string;
}

/** Sekcija cenika s pikčastim leaderjem – stil s strani Cenik. */
export function PriceTable({ title, items, note, ctaHref = '/kontakt', more, id }: PriceTableProps) {
  return (
    <div id={id} className={id ? 'scroll-mt-28 md:scroll-mt-36' : undefined}>
      <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">{title}</h2>
      {more && (
        <Link to={more.href} className="inline-flex items-center -mt-4 mb-6 text-sm font-semibold text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest">
          {more.label} <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      )}
      <div className={note ? 'space-y-4 mb-4' : 'space-y-4'}>
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center group">
            <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
            <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
            <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to={ctaHref} className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
      </div>
      {note && (
        <p className="text-sm text-brand-taupe italic mt-8 flex items-start">
          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
          <span>{note}</span>
        </p>
      )}
    </div>
  );
}
