import type { ImageAsset, Service } from './types';

const HERO: ImageAsset = {
      src: '/storitve-manikura.webp',
      width: 1200,
      height: 1600,
      alt: 'Manikura v kozmetičnem salonu Adna Cosmetics Vrhnika',
      position: 'object-[center_80%]',
};

export const manikura: Service = {
  id: 'manikura',
  slug: 'manikura-vrhnika',
  path: '/manikura-vrhnika',
  name: 'Manikura',
  h1: 'Manikura na Vrhniki',
  navLabel: 'Manikura',
  formValue: 'manikura',
  icon: '/manikura.webp',
  serviceType: 'Manikura',
  seo: {
    title: 'Manikura Vrhnika – gel nohti in trajni lak | Adna Cosmetics',
    description:
      'Manikura in gel nohti na Vrhniki: podaljševanje (S/M/L), trajni lak, francoska in poslikave. Cene od 25 €, termini po dogovoru. Adna Cosmetics.',
  },
  published: '2026-09-15',
  modified: '2026-09-17',
  labels: {
    more: 'Več o manikuri',
    overview: 'Kaj vključuje manikura?',
    prices: 'Cenik manikure',
    faq: 'Pogosta vprašanja o manikuri',
  },
  hero: {
    intro:
      'Iščeš manikuro na Vrhniki, ki zdrži? V salonu Adna Cosmetics uredim naravne nohte, nanesem permanentni/trajni lak ali jih podaljšam z gelom, po želji naredim francosko manikuro ali poslikavo. Delam po naročilu, z materiali, ki jim zaupam, in s široko paleto barv. K meni prihajajo stranke z Vrhnike, iz Ljubljane, Logatca, Borovnice, Brezovice in tudi drugih delov Slovenije.',
    image: HERO,
  },
  cardText: 'Brezhibno urejene roke, ki naredijo vtis. Gel, trajni lak in podaljševanje za nohte, ki trajajo.',
  overview: [
    'Pri storitvi manikure poskrbim za urejeno obnohtno kožico, nato odvisno od želje stranke in nohtne plošče, naraven noht pokrijem z izbranim materialom. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Pri svojem delu uporabljam kvalitetne materijale in ponujam široko paleto barv. Stranka pride na ponovni obisk v roku 3 - 4 tednov, nega doma pa sloni na uporabi olja in čuvanju nohtov pred mehanskimi poškodbami. Za dobro obstojnost nohtov dam 50% jaz, drugih 50% pa stranka.',
  ],
  quickFacts: [
    { label: 'Cena', value: 'od 25 € (osnovna manikura); permanentno lakiranje 30 €, podaljševanje z gelom 35–45 €' },
    { label: 'Obstojnost', value: 'permanentni lak 2–3 tedne, gel in podaljševanje 3–4 tedne' },
    { label: 'Naslednji obisk', value: 'korekcija čez 3–4 tedne; cena korekcije je enaka ceni podaljševanja' },
    { label: 'Primerno za', value: 'naravne, krhke ali kratke nohte; francoska manikura in poslikave po želji' },
  ],
  subservices: [
    {
      id: 'osnovna-manikura',
      title: 'Osnovna manikura',
      summary:
        'Osnovna manikura je temelj negovanih rok: uredim obnohtno kožico, nohte skrajšam in oblikujem v želeno obliko. Primerna je za vse, ki si želijo urejenih nohtov brez gela in umetnih materialov.',
      details: [
        'Termin začnem s pregledom nohtov in posvetom s stranko. Pri osnovni manikuri najprej nohte pokrajšam in oblikujem, nato pa se lotim urejanja obnohtne kožice. Obnohtno kožico urejam z brusilnikom za najbolj optimalne rezultate in nato odmrlo kožo odstranim. Na koncu nanesem negovalno olje in vlažilno kremo.',
        'Osnovna manikura je odlična izbira tudi pred pomembnim dogodkom ali kot redna nega. Cena osnovne manikure je 25 €.',
      ],
      image: HERO,
    },
    {
      id: 'permanentno-lakiranje',
      title: 'Permanentno lakiranje nohtov',
      summary:
        'Permanentno lakiranje je prava izbira, če si želiš dolgotrajno bleščeče nohte brez krušenja. Lak se strdi pod UV/LED lučko, zato je takoj suh in obstojen. Nohte ti uredim in oblikujem, nato pa nanesem barvo iz široke palete odtenkov.',
      details: [
        'Pred nanosom uredim obnohtno kožico in nohtno ploščo pripravim tako, da se lak dobro oprime. Sledijo podlaga, izbrana barva in zaključni sijaj, vsaka plast pa se strdi pod lučko. Nohti so ob odhodu iz salona popolnoma suhi.',
        'Na ponovni obisk prideš čez 3–4 tedne. Za dobro obstojnost poskrbiva skupaj: jaz s kakovostnim materialom in natančnim nanosom, ti z oljem za obnohtno kožico in varovanjem nohtov pred mehanskimi poškodbami. Permanentno lakiranje stane 30 €, odstranjevanje 15 €.',
      ],
    },
    {
      id: 'podaljsevanje-nohtov',
      title: 'Podaljševanje nohtov z gelom',
      summary:
        'Če so tvoji naravni nohti krhki, kratki ali se radi lomijo, jih z gelom podaljšam in okrepim. Dolžino izbereš sama: S, M ali L. Nohti dobijo lepo obliko, trdnost in barvo ali dizajn po tvojih željah.',
      details: [
        'Noht najprej primerno oblikujem, uredim obnohtno kožico in popilim ploščo nohta. Nanesem pripravne tekočine in tanek sloj baze za boljši oprijem in obstojnost kasnejšega nanosa gela.',
        'Pod noht postavim papirnato šablono in z gelom izrišem obliko in dolžino. Ko se prvi sloj gela strdi, nanesemo drugega, s katerim gradimo arhitekturo nohta, za boljšo stabilnost. Ko se tudi drugi sloj gela strdi, ga po potrebi popilimo in oblikujemo, sledi nanos barve ali ustvarjanje dizajna. Na koncu nanesemo še zaključni sijaj in tretma zaključimo z nego.',
        'Delam z materiali, ki jim zaupam, in ponujam široko paleto barv, od nežnih nude odtenkov do izrazitih barv.',
        'Korekcijo opraviš na 3–4 tedne; cena korekcije je enaka ceni podaljševanja. Korekcij tujega dela ne izvajam. Podaljševanje S stane 35 €, M 40 € in L 45 €, popravilo posameznega nohta pa 4–8 €.',
      ],
    },
    {
      id: 'francoska-in-poslikave',
      title: 'Francoska manikura in poslikave',
      summary:
        'Francosko manikuro naredim še posebej rada: klasična bela konica ali barvna različica, ki poudari naravno lepoto nohtov. Za piko na i dodam enostavne poslikave ali manjše dodatke.',
      details: [
        'Grajeno francosko naredim med podaljševanjem ali permanentnim lakiranjem, tako da je konica del strukture nohta in ne le naslikana. Zdrži enako dolgo kot preostali nanos.',
        'Grajena francoska stane 10–15 €, poslikava 5–10 €, manjši dodatki pa od 0,50 do 2 €. Rekonstrukcija ali laminacija poškodovanega nohta stane 5 €.',
      ],
    },
  ],
  process: [
    {
      title: 'Posvet in pregled nohtov',
      text:
        'Pred pričetkom termina govoriva o morebitnih alergijah, boleznih ipd. Stranka izrazi želje, jaz pa povem možne opcije.',
    },
    {
      title: 'Priprava nohtne plošče',
      text:
        'Če stranka pride na termin prvič, to pomeni, da naraven noht oblikujemo in popilimo površinsko, sledi urejanje in odstranjevanje odmrle obnohtne kožice. V primeru, ko delamo korekcijo, pred opisanim postopkom najprej odstranim star material. Ko je noht mehansko pripravljen, naredimo še kemično pripravo nohta.',
    },
    {
      title: 'Nanos in oblikovanje',
      text:
        'Sledi izbrana storitev: permanentni lak, gel na naravne nohte ali podaljševanje. Ko imamo podlago, nanesemo barvo ali ustvarimo dizajn. Vsaka plast se strdi pod lučko, nohte spilim v končno obliko.',
    },
    {
      title: 'Zaključek in nasveti',
      text:
        'Nohte z zaključnim sijajem zaščitim pred mehanskimi poškodbami. Pogovoriva se o negi doma, medtem ko ti nanesem negovalno kremo, olje ali peno. Na koncu rezervirava nov termin za korekcijo.',
    },
  ],
  tips: [
    {
      title: 'Pred terminom',
      text:
        'Preden prideš na termin, prosim odstrani star lak. Na nohte in roke na dan tretmaja in dan prej ne nanašaj kreme in olja, prav tako pri odstranjevalcu laka pazi, da je le-ta brez olj, oziroma odstrani lak prej. Vse od naštetega lahko vpliva na obstojnost nohtov oziroma umetnih materialov.',
    },
    {
      title: 'Nega doma',
      text:
        'Vsak dan vmasiraj olje za obnohtno kožico in nanesi vlažilno kremo. Pri gospodinjskih opravilih in čiščenju uporabljaj rokavice. Nohti niso orodje: ne odpiraj z njimi pločevink in ne praskaj nalepk.',
    },
    {
      title: 'Kdaj na naslednji termin',
      text:
        'Na ponovni obisk ali korekcijo prideš čez 3–4 tedne, ko noht zraste in vidimo narastek. Če počakaš dlje, se težišče nohta spremeni in premakne, kar poveča tveganje za zlom in poškodbo naravnega nohta. Nohti torej niso namenjeni nošenju 4+ tedne.',
    },
    {
      title: 'Če se kaj zgodi',
      text:
        'Če se noht zlomi ali odstopi, ga ne odstranjuj sama in ne trgaj. Javi se mi in skupaj rešiva nastalo situacijo. Naroči se na popravilo (4–8 €). Reklamacije sprejemam v 48 urah po terminu.',
    },
  ],
  prices: [
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
  priceNote:
    'Opomba: Cena korekcije je enaka ceni podaljševanja. Korekcij tujega dela ne izvajam. Reklamacije so možne 48h po tretmaju.',
  priceRange: { min: 25, max: 45 },
  gallery: [],
  faq: [
    {
      q: 'Koliko stane manikura na Vrhniki?',
      a: 'Osnovna manikura stane 25 €, permanentno lakiranje 30 €, podaljševanje nohtov z gelom 35 € (S), 40 € (M) ali 45 € (L). Grajena francoska je 10–15 €, poslikava 5–10 €, odstranjevanje 15 €. Cena korekcije je enaka ceni podaljševanja. Plačilo je z gotovino.',
    },
    {
      q: 'Kakšna je razlika med trajnim lakom, gelom in podaljševanjem?',
      a: 'Permanentno lakiranje je barvni lak, ki se strdi pod lučko in zdrži 2–3 tedne na naravnih nohtih; primeren je za zdrave nohte, ki jih želiš samo obarvati. Gel na naravne nohte jih dodatno ojača, podaljševanje pa z gelom zgradi novo dolžino in obliko, zato je prava izbira za kratke ali krhke nohte. Obstojnost gel tehnik je med 3 in 4 tedne.',
    },
    {
      q: 'Ali gel poškoduje naravne nohte?',
      a: 'Ne, če ga nanaša in odstranjuje strokovnjak. Škodo naredi predvsem trganje in lupljenje nanosa doma, zato odstranjevanje (15 €) vedno prepusti meni. Med termini uporabljaj olje za obnohtno kožico, da nohti ostanejo prožni.',
    },
  ],
};
