import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const detailPages: Record<string, string> = {
  manikura: '/manikura-vrhnika',
  pedikura: '/pedikura-vrhnika',
  'lash-lift-in-obrvi': '/lash-lift-laminacija-obrvi-vrhnika',
  depilacija: '/depilacija-vrhnika',
  masaza: '/masaza-vrhnika',
};

const servicesList = [
  {
    id: 'manikura',
    title: 'Manikura',
    description: 'Pri storitvi manikure poskrbim za urejeno obnohtno kožico, nato odvisno od želje stranke in nohtne plošče, naraven noht pokrijem z izbranim materialom. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Pri svojem delu uporabljam kvalitetne materijale in ponujam široko paleto barv. Stranka pride na ponovni obisk v roku 3 - 4 tednov, nega doma pa sloni na uporabi olja in čuvanju nohtov pred mehanskimi poškodbami. Za dobro obstojnost nohtov dam 50% jaz, drugih 50% pa stranka.',
    image: '/storitve-manikura.webp',
    width: 1200,
    height: 1600,
    imagePosition: 'object-[center_80%]'
  },
  {
    id: 'pedikura',
    title: 'Pedikura',
    description: 'Pedikura je izraz, ki označuje urejanje stopal. Stranke, ki se na pedikuro naročijo, si večinoma želijo imeti bolj obstojen lak in bolj natančno nanesen. Jaz z urejanjem obnohtne kožice, krajšanjem in oblikovanjem nohtov poskrbim za bolj lahkoten korak in estetski videz.',
    image: '/storitev-pedikura.webp',
    width: 1067,
    height: 1600
  },
  {
    id: 'lash-lift-in-obrvi',
    title: 'Lash lift in laminacija obrvi',
    description: 'Vihanje trepalnic (lash lift) je tehnika s katero privzdignem naravne trepalnice, po želji lahko trepalnice tudi pobarvam. Oči bodo videti bolj odprte, trepalnice pa zavihane, bolj goste in daljše. Pri laminaciji obrvi pa prav tako lahko vključim barvanje; laminacija pomaga obvladovati dlačice in ustvariti lepo obliko brez gelov. Za najboljše rezultate se prvih 24h po tretmaju izogibaj savnam in močenju.',
    image: '/storitev-vihanje-trepalnic.webp',
    width: 1600,
    height: 1600,
    imagePosition: 'object-[center_30%]'
  },
  {
    id: 'depilacija',
    title: 'Depilacija',
    description: 'S pomočjo vročega voska izpulim dlačico z mešičkom. Depilacija omogoča mehko kožo nekaj tednov, pri redni depilaciji se dlačice stanjšajo, posvetlijo in razredčijo. Po depilaciji se prvih 24-48h izogibaj direktnemu soncu.',
    image: '/storitev-depilacija.webp',
    width: 1067,
    height: 1600,
    imagePosition: 'object-top'
  },
  {
    id: 'masaza',
    title: 'Masaža',
    description: 'Klasična masaža telesa vključuje masažo hrbta, rok in nog spredaj in zadaj. 1 ura sprostitve v današnjem hitrem življenju bo vsakemu prav prišla. Za tiste, ki nimajo toliko časa pa obstaja masaža zgornjega hrbta in vratu, ta je krajša in traja 30 min, je kot nalašč za hitro sprostitev.',
    image: '/storitev-masaza.webp',
    width: 1600,
    height: 1067,
    imagePosition: 'object-[center_80%]'
  }
];

// srcset iz obstoječih variant: -800 za mobilne, -1200 (če obstaja) in polna širina
function srcSetFor(src: string, width: number) {
  const base = src.replace('.webp', '');
  const parts = [`${base}-800.webp 800w`];
  if (width > 1300) parts.push(`${base}-1200.webp 1200w`);
  parts.push(`${src} ${width}w`);
  return parts.join(', ');
}

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    // počakaj, da se page transition animacija umiri, nato se pomakni na storitev
    const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Manikura, pedikura, lash lift Vrhnika | Adna Cosmetics"
        description="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v salonu Adna Cosmetics na Vrhniki. Profesionalna nega."
        path="/storitve"
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Kozmetične storitve</p>
          <h1 className="font-sans font-normal max-w-2xl mx-auto text-brand-dark/70 text-lg">
            Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža v kozmetičnem salonu Adna Cosmetics na Vrhniki.
          </h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col-reverse lg:flex-row gap-12 items-center scroll-mt-28 md:scroll-mt-36 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 aspect-[4/3] bg-brand-nude/30 relative group overflow-hidden">
                   {service.image ? (
                     <img
                       src={service.image}
                       srcSet={srcSetFor(service.image, service.width)}
                       sizes="(min-width: 1024px) 50vw, 100vw"
                       alt={`${service.title} v kozmetičnem salonu Adna Cosmetics Vrhnika`}
                       width={service.width}
                       height={service.height}
                       loading="lazy"
                       decoding="async"
                       className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${service.imagePosition || 'object-center'}`}
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-brand-dark/20 font-serif italic text-xl transition-transform duration-700 group-hover:scale-105">
                       Slika: {service.title}
                     </div>
                   )}
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-serif mb-4 text-brand-dark">
                    {(service.id === 'manikura' || service.id === 'pedikura') ? `${service.title} na Vrhniki` : service.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-brand-taupe mb-6"></div>
                  <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  {detailPages[service.id] && (
                    <Link
                      to={detailPages[service.id]}
                      className="inline-flex items-center text-sm font-semibold text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest"
                    >
                      Cene in pogosta vprašanja <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
