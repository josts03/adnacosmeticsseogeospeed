import { SEO } from '../components/SEO';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const prices = {
  manikura: [
    { name: 'Osnovna manikura', price: '25 €' },
    { name: 'Podaljševanje S', price: '35 €' },
    { name: 'Podaljševanje M', price: '40 €' },
    { name: 'Podaljševanje L', price: '45 €' },
    { name: 'Permanentno lakiranje', price: '30 €' },
    { name: 'Odstranjevanje', price: '15 €' },
    { name: 'Popravilo nohta', price: '4-8 €' },
    { name: 'Grajena francoska', price: '10-15 €' },
    { name: 'Poslikava', price: '5-10 €' },
    { name: 'Dodatki', price: '0,50–2 €' },
    { name: 'Rekonstrukcija / laminacija nohtov', price: '5 €' },
  ],
  pedikura: [
    { name: 'Estetska pedikura', price: '35 €' },
    { name: 'Pedikura s trajnim lakiranjem', price: '40 €' },
    { name: 'Pedikura s francosko poslikavo', price: '45 €' },
    { name: 'Odstranjevanje trajnega laka s pedikuro', price: '20 €' },
  ],
  lashLiftObrvi: [
    { name: 'Laminacija obrvi', price: '35 €' },
    { name: 'Laminacija obrvi z barvanjem', price: '40 €' },
    { name: 'Lash lift', price: '35 €' },
    { name: 'Lash lift z barvanjem', price: '40 €' },
    { name: 'Duo', price: '60 €' },
    { name: 'Duo z barvanjem', price: '70 €' },
  ],
  depilacija: [
    { name: 'Cele noge', price: '30 €' },
    { name: 'Noge od/do kolen', price: '20 €' },
    { name: 'Pazduhe', price: '12 €' },
    { name: 'Roke', price: '20 €' },
    { name: 'Obraz', price: '10 €' },
  ],
  masaza: [
    { name: 'Klasična masaža telesa (60 min)', price: '40 €' },
    { name: 'Masaža zgornjega hrbta z vratom (30 min)', price: '20 €' },
  ]
};

export function Pricelist() {
  return (
    <>
      <SEO
        title="Cenik: manikura, pedikura, lash lift Vrhnika | Adna Cosmetics"
        description="Cenik kozmetičnih storitev na Vrhniki – manikura od 25 €, pedikura, lash lift in laminacija obrvi, depilacija in masaža v salonu Adna Cosmetics."
        path="/cenik"
      />
      <div className="pt-24 pb-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-dark mb-6">Cenik storitev</h1>
          <p className="text-brand-dark/70 text-lg">
            Transparenten cenik manikure, pedikure, lash lifta, depilacije in masaže v salonu Adna Cosmetics na Vrhniki.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Manikura */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">1. Manikura</h2>
            <div className="space-y-4 mb-4">
              {prices.manikura.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/kontakt" className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
            </div>
            <p className="text-sm text-brand-taupe italic mt-8 flex items-start">
              <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" /> 
              <span>Opomba: Cena korekcije je enaka ceni podaljševanja. Korekcij tujega dela ne izvajam. Reklamacije so možne 48h po tretmaju.</span>
            </p>
          </div>

          {/* Pedikura */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">2. Pedikura</h2>
            <div className="space-y-4">
              {prices.pedikura.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/kontakt" className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
            </div>
          </div>

          {/* Lash lift in laminacija obrvi */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">3. Lash lift in laminacija obrvi</h2>
            <div className="space-y-4 mb-4">
              {prices.lashLiftObrvi.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/kontakt" className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
            </div>
            <p className="text-sm text-brand-taupe italic mt-8 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" /> Opomba: Na termin prosim pridi brez maskare.
            </p>
          </div>

          {/* Depilacija */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">4. Depilacija</h2>
            <div className="space-y-4">
              {prices.depilacija.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/kontakt" className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
            </div>
          </div>

          {/* Masaža */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-brand-dark border-b border-brand-nude pb-4">5. Masaža</h2>
            <div className="space-y-4">
              {prices.masaza.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg text-brand-dark/80 group-hover:text-brand-taupe transition-colors">{item.name}</span>
                  <div className="flex-grow border-b border-dotted border-brand-taupe/30 mx-4"></div>
                  <span className="text-lg font-medium text-brand-dark whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/kontakt" className="inline-block px-8 py-3 bg-brand-dark text-brand-light uppercase tracking-widest text-sm hover:bg-brand-nude transition-colors">Naroči se</Link>
            </div>
          </div>
          
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
