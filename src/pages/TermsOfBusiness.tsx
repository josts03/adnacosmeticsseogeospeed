import { SEO } from '../components/SEO';
import { FileText } from 'lucide-react';

export function TermsOfBusiness() {
  return (
    <div className="py-20 animate-fade-in">
      <SEO
        title="Pogoji poslovanja - Adna Cosmetics"
        description="Pravila in pogoji poslovanja kozmetičnega salona Adna Cosmetics na Vrhniki – naročanje, termini, odpovedi in reklamacije."
        path="/pogoji-poslovanja"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FileText className="w-12 h-12 text-brand-nude mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Pogoji poslovanja</h1>
          <p className="text-brand-taupe text-lg">Pravila za prijetno in urejeno sodelovanje</p>
        </div>

        <div className="prose prose-brand max-w-none text-brand-dark/80 leading-relaxed">
          <p className="mb-6">
            Ker si želim, da so naša srečanja in druženja čim bolj prijetna tako za vas, kot tudi zame, je ključno, da vas seznanim s pravili poslovanja.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Naročanje</h2>
          <p className="mb-6">
            Prosim, da se naročate pravočasno, le tako vam lahko ugodim in se vam prilagodim. V zadnjem trenutku zelo težko zagotovim termin in se vam ne morem prilagajati. Termini se hitro polnijo, zato je to zares pomembno.
          </p>
          <p className="mb-6">
            Pri naročanju vas prosim za ime in priimek, telefonsko številko in pa e-mail. Po rezervaciji termina pa dobite samodejno obvestilo, tako, da na termin ne pozabite. Tako zavarujem sebe in vas. V obvestilu prejmete tudi mojo telefonsko številko, kjer me lahko kontaktirate in pa naslov. Točna navodila, kje me najdete pa prejmete na dan prvega obiska. Vsi osebni podatki, ki jih zbiram so namenjeni izključno naročanju in vodenju evidence.
          </p>
          <p className="mb-6">
            Poleg zgoraj navedenih podatkov, mora stranka podati tudi nekatere zdravstvene podatke (alergije in podobno). V primeru, ko stranka izvajalca ne obvesti o alergijah in drugih zdravstvenih stanjih, ki vplivajo na storitev ali njen potek, posledice nosi stranka.
          </p>
          <p className="mb-6">
            V primeru, da se želite naročiti preko obrazca na spletni strani, je pomembno, da veste, da izpolnjen obrazec ne pomeni rezerviranega termina. Po izpolnitvi vas bom kontaktirala v najkrajšem možnem času, da se dogovoriva za termin.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Termin</h2>
          <p className="mb-6">
            Na termine prosim hodite brez laka ali drugih materialov na nohtih, odstranjevanje le - teh neposredno pred terminom otežuje in upočasnjuje sam proces (se ne nanaša na termine namenjene korekciji mojega dela). Na dan in dan pred prihodom na manikuro ali pedikuro ne nanašamo kreme in olja, saj lahko močno vpliva na obstojnost. V primeru storitve vihanja trepalnic ali laminacije obrvi pridi brez ličil na tem področju.
          </p>
          <p className="mb-6">
            Na termin pridi 5 minut prej, tako se izogneš neprijetnem čakanju in jaz delu pod pritiskom. Včasih je teh 5 minut moj edini odmor, ki pa je res potreben. Na termin pridi pravočasno, v primeru zamude, mi jo sporoči. Toleranca za zamudo je 10 - 15 minut, v tem primeru delava skrajšan termin, kar v primeru, da je stranka naročena na manikuro pomeni, da bo iz salona odšla z enobarvnimi nohti ali pa le nanosom gela na naravne nohte. Tako se izognem zamiku celotnega urnika.
          </p>
          <p className="mb-6">
            Na termin pridi sama, brez spremstva. V primerih, ko gre za situacije, kjer mamice ne dobijo varstva in podobno, mi to predhodno sporočite, da lahko prostor in termin temu primerno prilagodim.
          </p>
          <p className="mb-6">
            Poslujem samo z gotovino, zato prosim, da pridete temu primerno pripravljene.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Odpoved termina</h2>
          <p className="mb-6">
            Termin je možno odpovedati. V primeru, ko se stranka na termin ne pojavi in tega predhodno ne sporoči, mora na novem terminu poravnati strošek zapadlega termina. Termine, ki so odpovedani manj kot 24h prej prav tako poravnavamo pri naslednjem obisku v vrednosti 100%. Termini, ki so odpovedani 24-48h pred obiskom pa v znesku od 50% storitve. Vse ostale odpovedi in prestavljanja terminov so brez stroškov.
          </p>

          <h2 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Reklamacije</h2>
          <p>
            Reklamacijo je možno uveljavljati v roku 48h po opravljenem tretmaju, v tem primeru strošek reklamacije krijem jaz. Potrebno je, da mi stranka omogoči pregled stanja, bodisi v salonu, bodisi preko fotografije. Reklamacije dizajna in izbire barve ni mogoča, v primeru, da stranka z izbiro ni zadovoljna, je dolžna to skomunicirati tekom termina.
          </p>
          <p className="mt-6">
            Salon Adna Cosmetics si pridržuje pravico do spremembe splošnih pogojev poslovanja. Vse spremembe bodo objavljene na spletni strani in bodo začele veljati z dnevom objave.
          </p>
        </div>
      </div>
    </div>
  );
}
