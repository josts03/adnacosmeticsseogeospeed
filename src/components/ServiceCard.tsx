import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  /** Kam vodi povezava "Več". */
  href: string;
}

/** Kartica storitve – stil kartic "Kaj ponujam?" z domače strani. */
export function ServiceCard({ service, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 group border border-brand-nude/50 hover:border-brand-taupe transition-colors">
      <div className={`mb-6 ${service.iconClassName ?? 'w-16 h-16'}`}>
        <img src={service.icon} alt="" width={160} height={160} loading="lazy" decoding="async" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-serif mb-3">{service.name}</h3>
      <p className="text-brand-dark/70 text-sm mb-6 leading-relaxed">
        {service.cardText}
      </p>
      <Link to={href} className="inline-flex items-center text-sm font-semibold text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest">
        Več <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  );
}
