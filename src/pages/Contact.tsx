import { SEO } from '../components/SEO';
import { PageHeader } from '../components/PageHeader';
import { services } from '../data/services';
import { Mail, MapPin, Instagram, Clock, CheckCircle } from 'lucide-react';
import { useState, useRef, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { normalizeField } from '../utils/formText';

// Storitve iz skupnih podatkov + dve splošni možnosti; value se pošlje na Formspree.
const SERVICE_OPTIONS = [
  ...services.map((s) => ({ value: s.formValue, label: s.name })),
  { value: 'vec_storitev', label: 'Več storitev' },
  { value: 'posvetovanje', label: 'Posvetovanje' },
];

// Katera polja popravimo iz ALL-CAPS (ključ = name atribut polja).
const CASE_RULES = {
  Ime: 'title',
  Sporocilo: 'sentence',
} as const;

// Človek obrazca ne izpolni v manj kot toliko sekundah, bot pa ga.
const MIN_FILL_SECONDS = 3;

export function Contact() {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const openedAt = useRef(Date.now());
  const [searchParams] = useSearchParams();
  const [service, setService] = useState('');

  // Predizbira storitve iz URL-ja (/kontakt?storitev=manikura), npr. s CTA gumbov
  // na podstraneh storitev. Šele po mountu, da se prerenderan HTML in hidracija ujemata.
  useEffect(() => {
    const wanted = searchParams.get('storitev');
    if (wanted && SERVICE_OPTIONS.some((o) => o.value === wanted)) {
      setService(wanted);
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;

    // Popravimo vrednosti kar v poljih, da uporabnik vidi, kaj bo poslano.
    for (const [fieldName, style] of Object.entries(CASE_RULES)) {
      const field = form.elements.namedItem(fieldName);
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.value = normalizeField(field.value, style);
      }
    }

    const data = new FormData(form);

    // Zaščita 1: skrito polje (honeypot) izpolnijo samo boti – tiho jih odslovimo.
    if (data.get('_gotcha')) {
      setSucceeded(true);
      return;
    }

    // Zaščita 2: obrazec, oddan v hipu, je skoraj zagotovo avtomatiziran.
    if ((Date.now() - openedAt.current) / 1000 < MIN_FILL_SECONDS) {
      setError('Obrazec je bil oddan prehitro. Počakaj trenutek in poskusi znova.');
      return;
    }

    // Zaščita 3: povezave v sporočilu so tipičen znak neželene pošte.
    const links = (data.get('Sporocilo')?.toString().match(/https?:\/\/|www\./gi) || []).length;
    if (links > 1) {
      setError('Sporočilo vsebuje preveč povezav. Prosim, piši mi brez njih ali na e-pošto.');
      return;
    }

    const params = new URLSearchParams();
    for (const [key, value] of data.entries()) {
      params.append(key, value.toString());
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mjgzkgnz", {
        method: "POST",
        body: params.toString(),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.ok) {
        setSucceeded(true);
      } else {
        setError('Pri pošiljanju je prišlo do napake. Poskusi znova ali me kontaktiraj po e-pošti.');
      }
    } catch (err) {
      setError('Sporočila ni bilo mogoče poslati. Preveri internetno povezavo in poskusi znova.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Naroči se | Adna Cosmetics Vrhnika"
        description="Rezerviraj termin v salonu Adna Cosmetics na Vrhniki. Piši mi ali se naroči prek obrazca."
        path="/kontakt"
      />
      <PageHeader
        title="Kontakt"
        subtitle="Stopi v stik ali rezerviraj svoj termin v kozmetičnem salonu na Vrhniki."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="bg-brand-nude/10 p-8 md:p-12 border border-brand-nude">
            <h2 className="text-3xl font-serif mb-8 text-brand-dark">Informacije</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Lokacija</h3>
                  <p className="text-brand-dark/70">Vrhnika<br/>Natančen naslov posredujem ob rezervaciji termina.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Email</h3>
                  <a href="mailto:adnaacosmetics@gmail.com" className="text-brand-dark/70 hover:text-brand-taupe transition-colors">
                    adnaacosmetics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Instagram className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Družbena omrežja</h3>
                  <a href="https://www.instagram.com/adnaa_cosmetics/" target="_blank" rel="noopener noreferrer" className="text-brand-dark/70 hover:text-brand-taupe transition-colors block mb-1">
                    Instagram: @adnaa_cosmetics
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-taupe mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-brand-dark mb-1">Delovni čas</h3>
                  <div className="text-brand-dark/70 space-y-1">
                    <p className="flex gap-2">
                      <span>Pon - Pet:</span> <span className="text-brand-taupe">Po dogovoru</span>
                    </p>
                    <p className="flex gap-2">
                      <span>Sob, Ned, prazniki:</span> <span className="text-brand-taupe">Zaprto</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark">Pošlji povpraševanje</h2>
            {succeeded ? (
              <div className="bg-brand-nude/20 p-8 border border-brand-nude text-center">
                <CheckCircle className="w-12 h-12 text-brand-taupe mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-brand-dark mb-2">Hvala za povpraševanje!</h3>
                <p className="text-brand-dark/80">Tvoje sporočilo je bilo uspešno poslano, kmalu te kontaktiram.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark/80 mb-2">Ime in priimek</label>
                  <input
                    type="text"
                    id="name"
                    name="Ime"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="Si že lepa, samo vpiši ime 🎀!"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark/80 mb-2">Telefonska številka</label>
                  <input
                    type="tel"
                    id="phone"
                    name="Telefon"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="[0-9+\s\(\)\/\-]{6,20}"
                    title="Vnesi veljavno telefonsko številko (npr. 041 123 456)."
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="041 123 456"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-brand-dark/80 mb-2">Želena storitev</label>
                  <select
                    id="service"
                    name="Storitev"
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                  >
                    <option value="">Izberi storitev</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark/80 mb-2">Sporočilo</label>
                  <textarea
                    id="message"
                    name="Sporocilo"
                    rows={4}
                    className="w-full px-4 py-3 border border-brand-nude bg-brand-light/50 focus:outline-none focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe transition-colors"
                    placeholder="Želeni datum in ura, ali druga vprašanja..."
                  ></textarea>
                </div>

                {/* Honeypot polje za zaščito pred neželeno pošto – skrito pred uporabniki */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {error && (
                  <p role="alert" className="text-sm text-red-800 bg-red-50 border border-red-200 px-4 py-3">
                    {error}
                  </p>
                )}

                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-8 py-4 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Pošiljanje...' : 'Pošlji povpraševanje'}
                  </button>
                  <a
                    href="https://www.instagram.com/adnaa_cosmetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-8 py-4 border border-brand-dark text-brand-dark uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" /> NAROČI SE NA IG
                  </a>
                </div>
                <p className="text-xs text-brand-dark/50 text-center mt-4">
                  To je samo informativno povpraševanje. Za potrditev in rezervacijo termina te kontaktiram! :)
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
