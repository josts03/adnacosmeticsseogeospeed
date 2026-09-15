import { SEO } from '../components/SEO';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="py-20 animate-fade-in">
      <SEO
        title="Politika zasebnosti - Adna Cosmetics"
        description="Preberite si kako ravnam z vašimi osebnimi podatki v kozmetičnem salonu Adna Cosmetics na Vrhniki."
        path="/politika-zasebnosti"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="w-12 h-12 text-brand-nude mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Politika zasebnosti</h1>
          <p className="text-brand-taupe text-lg">Kako ravnam z vašimi osebnimi podatki</p>
        </div>

        <div className="prose prose-brand max-w-none text-brand-dark/80 whitespace-pre-line leading-relaxed">
          <p className="mb-6">
            Vaša zasebnost mi je zelo pomembna. V kozmetičnem salonu Adna Cosmetics se zavezujem, da bom vaše osebne podatke varovala v skladu z veljavno zakonodajo o varstvu osebnih podatkov (Splošna uredba o varstvu podatkov – GDPR in Zakon o varstvu osebnih podatkov – ZVOP-2).
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">1. Katere osebne podatke zbiram?</h2>
          <p className="mb-6">
            Zbiram samo tiste osebne podatke, ki mi jih neposredno in prostovoljno posredujete prek kontaktnega obrazca ali ob naročanju:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Ime in priimek</li>
            <li>Telefonska številka</li>
            <li>Elektronski naslov (če me kontaktirate po e-pošti ali prek obrazca)</li>
            <li>Druge informacije, ki jih vključite v svoje sporočilo (npr. želene storitve ali posebne potrebe)</li>
          </ul>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">2. Namen in pravna podlaga obdelave</h2>
          <p className="mb-6">
            Vaše osebne podatke uporabljam <strong>izključno</strong> za naslednje namene:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Potrditev vašega termina za storitve.</li>
            <li>Obveščanje in komuniciranje v zvezi z vašim obiskom v salonu (npr. opomniki, morebitne spremembe terminov).</li>
            <li>Odgovarjanje na vaša povpraševanja in vprašanja.</li>
          </ul>
          <p className="mb-6">
            Vaše podatke obdelujem na naslednjih pravnih podlagah (6. člen GDPR):
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Privolitev</strong> (točka (a)): ko mi prek obrazca, e-pošte ali družbenih omrežij prostovoljno posredujete svoje podatke za namen povpraševanja.</li>
            <li><strong>Izvajanje pogodbe oz. predpogodbeni ukrepi</strong> (točka (b)): za dogovor, rezervacijo in izvedbo termina ter komunikacijo v zvezi z njim.</li>
          </ul>
          <p className="mb-6">
            Vaših podatkov v nobenem primeru ne uporabljam za pošiljanje neželene oglasne pošte in jih ne obdelujem za namene neposrednega trženja brez vaše izrecne privolitve.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">3. Obdelovalci in deljenje podatkov</h2>
          <p className="mb-6">
            Vaših osebnih podatkov ne prodajam in ne oddajam v najem tretjim osebam. Za delovanje kontaktnega obrazca pa uporabljam zunanjega ponudnika storitve (obdelovalca):
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Formspree</strong> (Formspree, Inc., ZDA) – posreduje sporočila, oddana prek kontaktnega obrazca, na moj elektronski naslov. Prenos podatkov poteka v skladu z ustreznimi zaščitnimi ukrepi (standardne pogodbene klavzule).</li>
          </ul>
          <p className="mb-6">
            Razen navedenega obdelovalca vaših podatkov ne delim z nikomer. Izjemoma jih lahko razkrijem pristojnim državnim organom, če to od mene zahteva zakon.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">4. Hramba podatkov</h2>
          <p className="mb-6">
            Vaše osebne podatke hranim le toliko časa, kolikor je to potrebno za izpolnitev namena, za katerega so bili zbrani (tj. za izvedbo storitve in morebitno poznejšo komunikacijo glede termina). Po preteku tega obdobja podatke varno in trajno izbrišem.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">5. Piškotki in lokalna shramba</h2>
          <p className="mb-6">
            Ta spletna stran <strong>ne uporablja analitičnih ali oglaševalskih piškotkov</strong> in ne sledi vašemu vedenju. Za osnovno delovanje uporabljam le nujno potrebno lokalno shrambo v vašem brskalniku:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>cookie_consent</strong> (localStorage) – shrani vašo odločitev glede tega obvestila, da se ne prikazuje ob vsakem obisku. Ostane shranjeno, dokler ga ne izbrišete.</li>
            <li><strong>adna_visited</strong> (sessionStorage) – zabeleži, da ste stran v tej seji že obiskali (za uvodno animacijo). Samodejno se izbriše, ko zaprete zavihek.</li>
          </ul>
          <p className="mb-6">
            Ti zapisi so nujni za delovanje strani in ne zahtevajo posebne privolitve. Kadar koli jih lahko izbrišete v nastavitvah svojega brskalnika.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">6. Vaše pravice</h2>
          <p className="mb-6">
            V zvezi z vašimi osebnimi podatki imate naslednje pravice:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Pravica do dostopa do informacij o tem, katere podatke zbiram.</li>
            <li>Pravica do popravka netočnih podatkov.</li>
            <li>Pravica do izbrisa (»pravica do pozabe«).</li>
            <li>Pravica do omejitve obdelave in ugovora zoper obdelavo.</li>
            <li>Pravica do prenosljivosti podatkov.</li>
            <li>Pravica do preklica privolitve, kadar obdelava temelji na privolitvi (preklic ne vpliva na zakonitost obdelave pred preklicem).</li>
          </ul>
          <p className="mb-6">
            Prav tako imate pravico do pritožbe pri nadzornem organu – Informacijskem pooblaščencu Republike Slovenije (<strong>www.ip-rs.si</strong>).
          </p>
          <p className="mb-6">
            Če želite uveljavljati katero od teh pravic ali imate kakršnokoli vprašanje glede politike zasebnosti, me prosim kontaktirajte na elektronski naslov: <strong>adnaacosmetics@gmail.com</strong>.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">7. Omejitev odgovornosti</h2>
          <p>
            Vsebina te spletne strani je informativne narave in se lahko kadar koli spremeni brez predhodnega obvestila. Trudim se za točnost in ažurnost objavljenih informacij (vključno s cenami in opisi storitev), vendar ne prevzemam odgovornosti za morebitne napake ali za škodo, ki bi nastala zaradi uporabe teh informacij. Cene in razpoložljivost storitev se dokončno potrdijo ob rezervaciji termina. Stran lahko vsebuje povezave do zunanjih spletnih mest (npr. Instagram), za katerih vsebino in politike zasebnosti ne odgovarjam.
          </p>
        </div>
      </div>
    </div>
  );
}
