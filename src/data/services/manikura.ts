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
      'Manikura na Vrhniki: gel na naravne nohte, podaljševanje (S/M/L), trajni lak, francoska in poslikave. Cene od 25 €, termini po dogovoru. Adna Cosmetics.',
  },
  labels: {
    more: 'Več o manikuri',
    overview: 'Kaj vključuje manikura?',
    prices: 'Cenik manikure',
    faq: 'Pogosta vprašanja o manikuri',
  },
  hero: {
    intro:
      'Iščeš manikuro na Vrhniki, ki zdrži? V salonu Adna Cosmetics uredim naravne nohte, nanesem permanentni (trajni) lak ali jih podaljšam z gelom, po želji dodam francosko ali poslikavo. Delam po naročilu, z materiali, ki jim zaupam, in s široko paleto barv. K meni prihajajo stranke z Vrhnike, iz Ljubljane, Logatca, Borovnice in Brezovice.',
    image: HERO,
  },
  cardText: 'Brezhibno urejene roke, ki naredijo vtis. Gel, trajni lak in podaljševanje za nohte, ki trajajo.',
  overview: [
    'Pri storitvi manikure poskrbim za urejeno obnohtno kožico, nato odvisno od želje stranke in nohtne plošče, naraven noht pokrijem z izbranim materialom. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Pri svojem delu uporabljam kvalitetne materijale in ponujam široko paleto barv. Stranka pride na ponovni obisk v roku 3 - 4 tednov, nega doma pa sloni na uporabi olja in čuvanju nohtov pred mehanskimi poškodbami. Za dobro obstojnost nohtov dam 50% jaz, drugih 50% pa stranka.',
  ],
  subservices: [
    {
      id: 'osnovna-manikura',
      title: 'Osnovna manikura',
      summary:
        'Osnovna manikura je temelj negovanih rok: uredim obnohtno kožico, nohte skrajšam in oblikujem v želeno obliko ter jih po želji nalakiram z navadnim lakom ali pustim naravne. Primerna je za vse, ki želiš urejene nohte brez gela in umetnih materialov.',
      details: [
        'Termin začnem s pregledom nohtov in kožice, nato kožico nežno potisnem nazaj in odstranim odvečne delce. Nohte spilim v obliko, ki ti ustreza in pristaja tvoji nohtni plošči, ter jih na koncu spoliram, da dobijo naraven sijaj.',
        'Osnovna manikura je odlična izbira tudi pred pomembnim dogodkom ali kot redna nega med dvema terminoma permanentnega lakiranja. Cena osnovne manikure je 25 €.',
      ],
      image: HERO,
    },
    {
      id: 'permanentno-lakiranje',
      title: 'Permanentno lakiranje nohtov',
      summary:
        'Permanentno lakiranje je prava izbira, če si želiš dolgotrajno bleščeče nohte brez krušenja. Lak se strdi pod UV/LED lučko, zato je takoj suh in obstojen. Nohte ti uredim in oblikujem, nato pa nanesem barvo iz široke palete odtenkov.',
      details: [
        'Pred nanosom uredim obnohtno kožico in nohtno ploščo pripravim tako, da se lak dobro oprime. Sledijo podlaga, izbrana barva v več tankih plasteh in zaključni sijaj, vsaka plast pa se strdi pod lučko. Nohti so ob odhodu iz salona popolnoma suhi.',
        'Na ponovni obisk prideš čez 3–4 tedne. Za dobro obstojnost poskrbiva skupaj: jaz s kakovostnim materialom in natančnim nanosom, ti z oljem za obnohtno kožico in varovanjem nohtov pred mehanskimi poškodbami. Permanentno lakiranje stane 30 €, odstranjevanje 15 €.',
      ],
    },
    {
      id: 'podaljsevanje-nohtov',
      title: 'Podaljševanje nohtov z gelom',
      summary:
        'Če so tvoji naravni nohti krhki, kratki ali se radi lomijo, jih z gelom podaljšam in okrepim. Dolžino izbereš sama: S, M ali L. Nohti dobijo lepo obliko, trdnost in barvo po tvojih željah.',
      details: [
        'Gel nanesem na pripravljeno nohtno ploščo in ga oblikujem v želeno dolžino in obliko, nato ga strdim pod lučko in spilim do popolnosti. Delam z materiali, ki jim zaupam, in ponujam široko paleto barv, od nežnih nude odtenkov do izrazitih barv.',
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
        'Pogledava stanje nohtov in kožice, izbereš obliko, dolžino in barvo. Če prideš prvič, mi poveš tudi za morebitne alergije ali občutljivost.',
    },
    {
      title: 'Priprava nohtne plošče',
      text:
        'Odstranim star nanos (če ni tuje delo), uredim obnohtno kožico, nohte skrajšam in oblikujem ter površino pripravim, da se material dobro oprime.',
    },
    {
      title: 'Nanos in oblikovanje',
      text:
        'Sledi izbrana storitev: permanentni lak, gel na naravne nohte ali podaljševanje. Vsaka plast se strdi pod lučko, nohte spilim v končno obliko.',
    },
    {
      title: 'Zaključek in nasveti',
      text:
        'Nohte spoliram, nanesem olje za obnohtno kožico in ti povem, kako jih negovati doma. Nohti so ob odhodu popolnoma suhi.',
    },
  ],
  tips: [
    {
      title: 'Pred terminom',
      text:
        'Na termin pridi brez laka ali drugega materiala na nohtih; odstranjevanje neposredno pred terminom upočasni delo. Dan pred manikuro in na dan termina ne nanašaj kreme ali olja na roke, ker vplivata na obstojnost.',
    },
    {
      title: 'Nega doma',
      text:
        'Vsak dan vmasiraj olje za obnohtno kožico. Pri gospodinjskih opravilih in čiščenju uporabljaj rokavice. Nohti niso orodje: ne odpiraj z njimi pločevink in ne praskaj nalepk.',
    },
    {
      title: 'Kdaj na naslednji termin',
      text:
        'Na ponovni obisk ali korekcijo prideš čez 3–4 tedne, ko noht zraste in se nanos oddalji od kožice. Če počakaš dlje, se poveča tveganje za zlom in poškodbo naravnega nohta.',
    },
    {
      title: 'Če se kaj zgodi',
      text:
        'Če se noht zlomi ali odstopi, ga ne odstranjuj sama in ne trgaj. Naroči se na popravilo (4–8 €). Reklamacije sprejemam v 48 urah po terminu.',
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
      a: 'Osnovna manikura stane 25 €, permanentno lakiranje 30 €, podaljševanje nohtov z gelom 35 € (S), 40 € (M) ali 45 € (L). Grajena francoska je 10–15 €, poslikava 5–10 €, odstranjevanje 15 €. Cena korekcije je enaka ceni podaljševanja. Plačilo je z gotovino.',
    },
    {
      q: 'Kakšna je razlika med permanentnim lakiranjem, gelom in podaljševanjem?',
      a: 'Permanentno lakiranje je barvni lak, ki se strdi pod lučko in zdrži 3–4 tedne na naravnih nohtih; primeren je za zdrave nohte, ki jih želiš samo obarvati. Gel na naravne nohte jih dodatno ojača, podaljševanje pa z gelom zgradi novo dolžino in obliko, zato je prava izbira za kratke ali krhke nohte.',
    },
    {
      q: 'Koliko časa zdržijo gel nohti in trajni lak?',
      a: 'Praviloma 3–4 tedne, do naslednje korekcije. Obstojnost je odvisna od nege: jaz poskrbim za kakovosten material in natančen nanos, ti pa z oljem za obnohtno kožico in rokavicami pri delu. Za dobro obstojnost dam 50 % jaz, drugih 50 % pa ti.',
    },
    {
      q: 'Ali gel poškoduje naravne nohte?',
      a: 'Ne, če ga nanaša in odstranjuje strokovnjak. Škodo naredi predvsem trganje in lupljenje nanosa doma, zato odstranjevanje (15 €) vedno prepusti meni. Med termini uporabljaj olje za obnohtno kožico, da nohti ostanejo prožni.',
    },
    {
      q: 'Kako se pripravim na termin manikure?',
      a: 'Pridi z nohti brez laka ali materiala, dan prej in na dan termina ne uporabljaj kreme ali olja na rokah. Na termin pridi 5 minut prej in brez spremstva. Če boš zamudila, mi sporoči; pri zamudi nad 10–15 minut naredim skrajšan termin.',
    },
    {
      q: 'Ali delaš korekcije nohtov, narejenih v drugem salonu?',
      a: 'Ne, korekcij tujega dela ne izvajam. Tuj nanos najprej odstranim (15 €) in nato nohte na novo zgradim ali nalakiram, tako da za rezultat lahko odgovarjam.',
    },
    {
      q: 'Kaj pomenijo dolžine S, M in L pri podaljševanju?',
      a: 'Oznake pomenijo dolžino podaljšanega nohta: S je kratek, naraven videz, M srednja dolžina, L pa daljši noht. Dolžino izbereva skupaj glede na tvoj življenjski slog in stanje naravnih nohtov; cena je 35, 40 oziroma 45 €.',
    },
    {
      q: 'Delaš francosko manikuro in poslikave?',
      a: 'Da, francoska manikura je moja najljubša. Grajeno francosko naredim kot del strukture nohta, tako da zdrži enako dolgo kot preostali nanos (10–15 €). Delam tudi enostavne poslikave (5–10 €) in manjše dodatke (0,50–2 €).',
    },
  ],
};
