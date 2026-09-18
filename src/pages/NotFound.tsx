import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { services } from '../data/services';
import { CTA_LABEL } from '../data/site';

export function NotFound() {
  return (
    <>
      <SEO
        title="404 – Stran ni najdena | Adna Cosmetics"
        description="Ta stran ne obstaja. Vrni se na začetno stran Adna Cosmetics."
        path="/404"
        noindex
      />

      <div className="min-h-[80vh] flex items-center justify-center bg-brand-light px-4 py-24">
        <div className="max-w-xl w-full text-center">

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-brand-taupe/40"></div>
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em]">Adna Cosmetics</span>
            <div className="h-px w-16 bg-brand-taupe/40"></div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-6 leading-snug">
            Ups! Ta stran je šla<br className="hidden sm:block" /> na lepotni počitek.
          </h1>

          {/* Subtitle */}
          <p className="text-brand-dark/70 text-base sm:text-lg leading-relaxed mb-12 max-w-md mx-auto">
            Izgleda, da povezava, ki jo iščeš, ne obstaja več ali pa se je preselila na lepše.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
            >
              Nazaj na prvo stran
            </Link>
            <Link
              to="/storitve"
              className="w-full sm:w-auto px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
            >
              Preglej ponudbo storitev
            </Link>
          </div>

          {/* Storitve: obiskovalec z napačne povezave pride na pravo podstran v enem kliku */}
          <nav aria-label="Storitve" className="mt-12 pt-10 border-t border-brand-nude">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-dark/70 font-semibold mb-5">
              Morda si iskala
            </p>
            <ul className="flex flex-wrap justify-center gap-x-3 gap-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="inline-block px-4 py-2.5 border border-brand-nude text-sm text-brand-dark hover:border-brand-taupe hover:text-brand-taupe transition-colors"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/cenik"
                  className="inline-block px-4 py-2.5 border border-brand-nude text-sm text-brand-dark hover:border-brand-taupe hover:text-brand-taupe transition-colors"
                >
                  Cenik
                </Link>
              </li>
            </ul>
          </nav>

          {/* Tertiary link */}
          <div className="mt-10">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 text-sm text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest font-semibold"
            >
              {CTA_LABEL} →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
