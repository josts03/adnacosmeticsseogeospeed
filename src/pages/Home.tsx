import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Star } from 'lucide-react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';

const initialReviews = [
  { text: 'Samozavestna punca k ve kaj dela, tvoja sproscenost se pa cuti ze ko vstopis v salon in zato je sama storitev bolj prijetna😙.', name: 'Nika P.', city: 'Vrhnika', initial: 'N', stars: 5 },
  { text: 'Meni je ambient super☺️bi mogoče dodala še kakšno ambientno svetlobo😅 Drugače sem pa vedno zelo sproščena in vedno se prilagodiš mojim željam😊', name: 'Brina I.', city: 'Ljubljana', initial: 'B', stars: 4 },
  { text: 'Top izkusnja vsakic! Na nohte in depilacijo hodim samo se sem, punca je res prijazna, natancna in vsakic naredi res super vzdusje. Vedno se dobro pocutim, rezultat je pa tocno tak, kot si ga zelim. Priporocam vsem, ki iscejo kakovostne storitve in dober in prijeten odnos❤️', name: 'Nina S.', city: 'Ljubljana', initial: 'N', stars: 5 },
  { text: 'Super si, ful dobre nohtke delas in res se vidi da se izobrazujes redno! 💖💅🏼', name: 'Ula L.', city: 'Ljubljana', initial: 'U', stars: 5 },
  { text: 'Top of the top, ocena 5', name: 'Ema V.', city: 'Brezovica', initial: 'E', stars: 5 },
  { text: 'Vedno vesela, nasmejana in družabna, izpolnjuješ želje brez vprašanj. Čista 5 ❤️', name: 'Lejla R.', city: 'Idrija', initial: 'L', stars: 5 },
  { text: 'Tvoji nohti so mi zmeraj drzali, noben ni nikoli odstopil, tudi ce sem jih imela dlje casa gor se noben ni zlomil, toptoptop', name: 'Zoja B.', city: 'Logatec', initial: 'Z', stars: 5 },
  { text: 'Vzdusje na terminu je zelo prijetno, za smeh je vedno poskrbljeno. Sami nohti so narejeni hitro, za ugodno ceno in zelo lepo, vedno po mojih zeljah. Sam salon pa je zelo lepo urejen s prijetno temperaturo in ozracjem.', name: 'Eva D.', city: 'Ljubljana', initial: 'E', stars: 5 }
];

const faqs = [
  {
    q: 'Katere storitve ponuja Adna Cosmetics?',
    a: 'Adna Cosmetics je kozmetični salon na Vrhniki, ki ponuja manikuro, pedikuro, lash lift in laminacijo obrvi, depilacijo z voskom ter masažo.',
  },
  {
    q: 'Koliko stane manikura na Vrhniki?',
    a: 'Osnovna manikura v salonu Adna Cosmetics stane 25 €, podaljševanje nohtov od 35 do 45 €, permanentno (trajno) lakiranje pa 30 €.',
  },
  {
    q: 'Kje lahko na Vrhniki naredim lash lift ali laminacijo obrvi?',
    a: 'Lash lift in laminacijo obrvi izvajam v salonu Adna Cosmetics na Vrhniki. Lash lift stane 35 €, laminacija obrvi 35 €, kombinacija obojega (duo) pa 60 €.',
  },
  {
    q: 'Kako se naročim v salon Adna Cosmetics?',
    a: 'Naročiš se prek obrazca na strani Kontakt, po e-pošti (adnaacosmetics@gmail.com) ali prek Instagrama @adnaa_cosmetics. Termin ti nato potrdim osebno.',
  },
  {
    q: 'Kakšen je delovni čas salona?',
    a: 'Salon deluje po dogovoru od ponedeljka do petka. Ob sobotah, nedeljah in praznikih je zaprto.',
  },
  {
    q: 'Kje se salon nahaja?',
    a: 'Salon je na Vrhniki. Točen naslov ti posredujem ob potrditvi rezervacije termina.',
  },
  {
    q: 'Ali v salon prihajajo stranke iz okolice Vrhnike?',
    a: 'Da, poleg strank z Vrhnike me redno obiskujejo tudi iz Ljubljane, Logatca, Borovnice, Brezovice in drugih okoliških krajev.',
  },
  {
    q: 'Ali je za obisk potrebna rezervacija?',
    a: 'Da, delam izključno po naročilu. Ob odpovedi manj kot 24 ur pred terminom se zaračuna 100 % vrednosti storitve, pri odpovedi 24–48 ur prej pa 50 %.',
  },
  {
    q: 'Koliko traja in stane masaža?',
    a: 'Klasična masaža telesa traja 60 minut in stane 40 €. Krajša masaža zgornjega hrbta z vratom traja 30 minut in stane 20 €.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export function Home() {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeMobileReview, setActiveMobileReview] = useState(0);

  useEffect(() => {
    // Randomize initial array
    const shuffled = [...initialReviews].sort(() => Math.random() - 0.5);
    setReviews(shuffled);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMobileReview((prev) => (prev + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [reviews.length, activeMobileReview]);

  const nextReview = () => {
    setActiveMobileReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveMobileReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <SEO
        title="Adna Cosmetics – Kozmetični salon Vrhnika"
        description="Manikura, pedikura, lash lift in laminacija obrvi, depilacija ter masaža na Vrhniki. Rezerviraj termin v salonu Adna Cosmetics!"
        path="/"
        schema={faqSchema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-brand-nude overflow-hidden h-[80vh] flex items-center md:bg-[url('/backgroundimage.webp')] md:bg-cover md:bg-[center_25%] md:bg-no-repeat">
        {/* Placeholder background image pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('/cream-paper.png')] mix-blend-multiply md:hidden"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand-rose opacity-20 blur-3xl transform translate-x-1/4 -skew-x-12 md:hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-brand-dark/70 text-sm font-semibold mb-4 block">
              Dobrodošla
            </span>
            <p className="text-5xl md:text-7xl font-serif text-brand-dark leading-tight mb-6">
              Bodi vse, kar si <br/>
              <span className="italic text-brand-taupe">v Adna Cosmetics</span>
            </p>
            <h1 className="font-sans font-normal text-lg md:text-xl text-brand-dark/80 mb-10 max-w-lg leading-relaxed">
              Manikura, pedikura, lash lift in laminacija obrvi, depilacija in masaža. Vse na enem mestu na Vrhniki.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors text-center"
              >
                Rezerviraj termin →
              </Link>
              <Link
                to="/storitve"
                className="px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center"
              >
                Moje storitve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-nude">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-brand-dark/70 text-sm font-semibold mb-4 block">
              Zakaj Adna Cosmetics?
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Kaj me odlikuje?
            </h2>
            <div className="space-y-6">
              {[
                'Strokovna in prijazna obravnava',
                'Individualen pristop k vsaki stranki',
                'Uporaba visokokakovostnih produktov',
                'Sproščujoč in čist ambient'
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-taupe mr-4 flex-shrink-0 mt-1" />
                  <p className="text-lg text-brand-dark/80">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/o-meni" className="px-8 py-4 bg-transparent border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors">
                Spoznaj me
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-brand-rose/20 rounded-t-full transform rotate-3"></div>
            <div className="absolute inset-0 bg-brand-dark/5 rounded-t-full overflow-hidden group">
              <img
                src="/salon-osebje.webp"
                alt="Adna, ustanoviteljica salona Adna Cosmetics na Vrhniki"
                width={1067}
                height={1600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="absolute -bottom-6 left-1/2 min-w-[280px] sm:min-w-[320px] -translate-x-1/2 bg-white px-6 sm:px-8 py-5 sm:py-6 shadow-xl text-center rounded-sm">
              <p className="font-serif text-lg sm:text-xl text-brand-dark mb-2">Adna, ustanoviteljica z 5+ let izkušenj.</p>
              <p className="text-brand-dark/70 italic text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">"Moje poslanstvo je, da vsaka stranka zapusti salon bolj samozavestna, kot je prišla."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-4">Kaj ponujam?</h2>
            <p className="text-brand-dark/70">
              Skrbim za tvoj videz od nog do glave — vse na enem mestu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Manikura',
                desc: 'Brezhibno urejene roke, ki naredijo vtis. Gel, trajni lak in podaljševanje za nohte, ki trajajo.',
                icon: '/manikura.webp',
                link: '/storitve#manikura'
              },
              {
                title: 'Pedikura',
                desc: 'Mehke, negovane noge vse leto. Profesionalna pedikura za popolno urejena stopala.',
                icon: '/pedikura.webp',
                link: '/storitve#pedikura'
              },
              {
                title: 'Lash lift in laminacija obrvi',
                desc: 'Oblikovanje, laminacija in lash lift, ki traja tedne. Zbudi se urejena.',
                icon: '/lash-lift.webp',
                link: '/storitve#lash-lift-in-obrvi'
              },
              {
                title: 'Depilacija',
                desc: 'Do 4 tedne gladke kože brez britja. Učinkovito voskanje za vse tipe kože.',
                icon: '/depilacija.webp',
                link: '/storitve#depilacija'
              },
              {
                title: 'Masaža',
                desc: '60-minutna masaža, ki odpravi napetost v hrbtu in ramenih.',
                icon: '/masaza.webp',
                link: '/storitve#masaza'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 group border border-brand-nude/50 hover:border-brand-taupe transition-colors">
                <div className={`mb-6 ${service.title === 'Pedikura' ? 'w-[54px] h-[54px]' : 'w-16 h-16'}`}>
                  <img src={service.icon} alt={service.title} width={160} height={160} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-brand-dark/70 text-sm mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link to={service.link} className="inline-flex items-center text-sm font-semibold text-brand-taupe hover:text-brand-dark transition-colors uppercase tracking-widest">
                  Več <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-4">Mnenja strank</h2>
            <p className="text-brand-dark/70">
              Kar pravijo moje stranke.
            </p>
          </div>

          {/* Mobile Reviews */}
          <div className="block lg:hidden relative max-w-[100vw] sm:max-w-md md:max-w-lg mx-auto px-6 mt-8">
            <div className="relative">
              <AnimatePresence mode="wait">
                {reviews.map((review, idx) => {
                  if (idx !== activeMobileReview) return null;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset }) => {
                        if (offset.x < -50) {
                          nextReview();
                        } else if (offset.x > 50) {
                          prevReview();
                        }
                      }}
                      className="w-full shrink-0 p-6 sm:p-8 border border-brand-nude/50 flex flex-col items-start bg-brand-light/30 rounded-sm cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex space-x-1 mb-6" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, j) => (
                           <Star key={j} className={`w-[18px] h-[18px] ${j < review.stars ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300 fill-gray-300'}`} />
                        ))}
                      </div>
                      <p className="sr-only">Ocena: {review.stars} od 5 zvezdic</p>
                      <p className="text-brand-dark/80 italic mb-8 flex-grow leading-relaxed min-h-[160px] text-sm sm:text-base">
                        "{review.text}"
                      </p>
                      <div className="flex items-center space-x-4 mt-auto">
                        <div className="w-10 h-10 rounded-full bg-brand-nude/40 flex items-center justify-center font-serif text-brand-taupe font-semibold text-lg shrink-0">
                          {review.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-brand-dark">{review.name}</p>
                          <p className="text-xs text-brand-dark/60">{review.city}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              <button
                onClick={prevReview}
                className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md border border-brand-nude/50 text-brand-dark hover:bg-brand-nude transition-colors z-10"
                aria-label="Prejšnje mnenje"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md border border-brand-nude/50 text-brand-dark hover:bg-brand-nude transition-colors z-10"
                aria-label="Naslednje mnenje"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileReview(idx)}
                  className="w-6 h-6 flex items-center justify-center"
                  aria-label={`Mnenje ${idx + 1}`}
                >
                  <span className={`w-2 h-2 rounded-full transition-colors ${idx === activeMobileReview ? 'bg-brand-taupe' : 'bg-brand-nude'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Reviews */}
          <div className="hidden lg:block overflow-hidden py-4 -mx-4 px-4 md:mx-0 md:px-0">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 60, repeat: Infinity }}
              style={{ willChange: "transform" }}
              className="flex gap-4 md:gap-6 w-max"
            >
              {[...reviews, ...reviews].map((review, i) => (
                <div
                  key={`${review.name}-${i}`}
                  className="w-[300px] md:w-[400px] shrink-0 p-8 border border-brand-nude/50 flex flex-col items-start bg-brand-light/30 rounded-sm"
                >
                  <div className="flex space-x-1 mb-6" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, j) => (
                       <Star key={j} className={`w-[18px] h-[18px] ${j < review.stars ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-300 fill-gray-300'}`} />
                    ))}
                  </div>
                  <p className="sr-only">Ocena: {review.stars} od 5 zvezdic</p>
                  <p className="text-brand-dark/80 italic mb-8 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-brand-nude/40 flex items-center justify-center font-serif text-brand-taupe font-semibold text-lg shrink-0">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">{review.name}</p>
                      <p className="text-xs text-brand-dark/60">{review.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif mb-4">Pogosta vprašanja</h2>
            <p className="text-brand-dark/70">
              Kar stranke najpogosteje vprašajo pred prvim obiskom.
            </p>
          </div>
          <div className="divide-y divide-brand-nude">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex justify-between items-center gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-xl font-serif text-brand-dark">{faq.q}</h3>
                  <ChevronDown className="faq-chevron w-5 h-5 text-brand-taupe shrink-0 transition-transform duration-300" />
                </summary>
                <p className="text-brand-dark/80 leading-relaxed pb-5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-light mb-6">
            Pripravljena za spremembo?
          </h2>
          <p className="text-brand-nude text-lg md:text-xl mb-10">
            Tvoj termin čaka.
          </p>
          <Link
            to="/kontakt"
            className="inline-block px-10 py-5 bg-brand-light text-brand-dark uppercase tracking-widest text-sm font-semibold hover:bg-brand-nude transition-colors mb-6"
          >
            Rezerviraj svoj termin →
          </Link>
          <p className="text-brand-light/60 text-sm">
            Ali me kontaktiraj: <a href="mailto:adnaacosmetics@gmail.com" className="underline hover:text-brand-light">adnaacosmetics@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
