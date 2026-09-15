import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { PriceTable } from '../components/PriceTable';
import { services } from '../data/services';

export function Pricelist() {
  return (
    <>
      <SEO
        title="Cenik: manikura, pedikura, lash lift Vrhnika | Adna Cosmetics"
        description="Cenik kozmetičnih storitev na Vrhniki – manikura od 25 €, pedikura, lash lift in laminacija obrvi, depilacija in masaža v salonu Adna Cosmetics."
        path="/cenik"
      />
      <PageHeader
        title="Cenik storitev"
        subtitle="Transparenten cenik manikure, pedikure, lash lifta, depilacije in masaže v salonu Adna Cosmetics na Vrhniki."
        width="max-w-4xl"
        constrainSubtitle={false}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <PriceTable
              key={service.id}
              title={`${index + 1}. ${service.name}`}
              items={service.prices}
              note={service.priceNote}
              more={{ href: service.path, label: service.labels.more }}
            />
          ))}
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-brand-nude/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 border border-brand-rose/20 text-center">
            <h3 className="text-2xl font-serif mb-6 text-brand-dark">Strošek odpovedi rezervacije</h3>
            <div className="space-y-4 text-brand-dark/80">
              <p>
                <strong>Manj kot 24 ur</strong> pred rezervacijo – <span className="text-red-800 font-semibold">100%</span> vrednosti rezervirane storitve.
              </p>
              <p>
                <strong>24 – 48 ur</strong> pred rezervacijo – <span className="text-red-800 font-semibold">50%</span> vrednosti rezervirane storitve.
              </p>
              <div className="w-16 h-px bg-brand-taupe mx-auto my-6"></div>
              <p className="italic text-sm">Strošek zaračunam ob naslednjem obisku.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
