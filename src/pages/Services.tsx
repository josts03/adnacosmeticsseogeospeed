import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { ServiceFeature } from '../components/ServiceFeature';
import { services } from '../data/services';
import { useScrollToHash } from '../lib/useScrollToHash';

export function Services() {
  useScrollToHash();

  return (
    <>
      <SEO
        title="Manikura, pedikura, lash lift Vrhnika | Adna Cosmetics"
        description="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v salonu Adna Cosmetics na Vrhniki. Profesionalna nega."
        path="/storitve"
      />
      <PageHeader
        title="Kozmetične storitve"
        subtitle="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v kozmetičnem salonu Adna Cosmetics na Vrhniki."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <ServiceFeature
                key={service.id}
                service={service}
                index={index}
                heading={service.id === 'manikura' || service.id === 'pedikura' ? `${service.name} na Vrhniki` : service.name}
              >
                <div>
                  <Link
                    to={service.path}
                    className="inline-block px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors"
                  >
                    {service.labels.more} →
                  </Link>
                </div>
              </ServiceFeature>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
