import { Link } from 'react-router-dom';
import { services } from '../data/services';
import type { Service } from '../data/services';

/** "Ostale storitve": ikona, ime storitve in povezave na njene podstoritve. */
export function OtherServices({ current }: { current: Service }) {
  const others = services.filter((s) => s.id !== current.id);

  return (
    <section className="py-24 bg-white border-t border-brand-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-brand-dark text-center mb-16">Ostale storitve</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {others.map((service) => (
            <div key={service.id} className="flex flex-col items-start">
              <Link to={service.path} className="block mb-5 group" aria-label={service.navLabel}>
                <img
                  src={service.icon}
                  alt=""
                  width={160}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <Link
                to={service.path}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark hover:text-brand-taupe transition-colors mb-3"
              >
                {service.navLabel} →
              </Link>
              <ul className="space-y-1.5">
                {service.subservices.map((sub) => (
                  <li key={sub.id}>
                    <Link
                      to={`${service.path}#${sub.id}`}
                      className="text-sm text-brand-dark/70 hover:text-brand-taupe transition-colors"
                    >
                      {sub.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
