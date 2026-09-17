import type { ImageAsset, Service } from './types';

const HERO: ImageAsset = {
      src: '/storitev-pedikura.webp',
      width: 1067,
      height: 1600,
      alt: 'Pedikura v kozmetičnem salonu Adna Cosmetics Vrhnika',
};

export const pedikura: Service = {
  id: 'pedikura',
  slug: 'pedikura-vrhnika',
  path: '/pedikura-vrhnika',
  name: 'Pedikura',
  h1: 'Pedikura na Vrhniki',
  navLabel: 'Pedikura',
  formValue: 'pedikura',
  icon: '/pedikura.webp',
  iconClassName: 'w-[54px] h-[54px]',
  serviceType: 'Pedikura',
  seo: {
    title: 'Pedikura Vrhnika – cenik, estetska pedikura | Adna Cosmetics',
    description:
      'Estetska pedikura na Vrhniki: urejena kožica, oblikovani nohti, trajni lak ali francoska. Cenik: pedikura 35 €, s trajnim lakom 40 €. Adna Cosmetics.',
  },
  published: '2026-09-15',
  modified: '2026-09-17',
  labels: {
    more: 'Več o pedikuri',
    overview: 'Kaj vključuje pedikura?',
    prices: 'Cenik pedikure',
    faq: 'Pogosta vprašanja o pedikuri',
  },
  hero: {
    intro:
      'Estetska pedikura na Vrhniki za urejena stopala in lahkoten korak. V salonu Adna Cosmetics uredim obnohtno kožico, nohte skrajšam in oblikujem ter jih po želji nalakiram s trajnim lakom ali francosko poslikavo, ki zdrži več tednov. Delam po naročilu, tudi za stranke iz Ljubljane, Logatca, Borovnice in Brezovice.',
    image: HERO,
  },
  cardText: 'Mehke, negovane noge vse leto. Profesionalna pedikura za popolno urejena stopala.',
  overview: [
    'Pedikura je izraz, ki označuje urejanje stopal. Stranke, ki se na pedikuro naročijo, si večinoma želijo imeti bolj obstojen lak in bolj natančno nanesen. Jaz z urejanjem obnohtne kožice, krajšanjem in oblikovanjem nohtov poskrbim za bolj lahkoten korak in estetski videz.',
  ],
  quickFacts: [
    { label: 'Cena', value: 'od 35 € (estetska pedikura); s trajnim lakiranjem 40 €, s francosko poslikavo 45 €' },
    { label: 'Obstojnost', value: 'trajni lak na nogah zdrži več tednov' },
    { label: 'Priporočen razmik', value: '4–6 tednov' },
    { label: 'Primerno za', value: 'nego zdravih stopal; pri vraščenih nohtih, glivicah ali sladkorni bolezni svetujem medicinsko pedikuro' },
  ],
  subservices: [
    {
      id: 'estetska-pedikura',
      title: 'Estetska pedikura',
      summary:
        'Estetska pedikura je urejanje stopal za lep videz in lahkoten korak: uredim obnohtno kožico, nohte skrajšam in oblikujem ter poskrbim za negovan videz stopal. Primerna je za redno nego in pred sezono odprtih čevljev. Pomaga pri zgodnjem odkrivanju morebitne problematike stopal.',
      details: [
        'Pedikura je izraz, ki označuje urejanje stopal. Z urejanjem obnohtne kožice ter natančnim krajšanjem in oblikovanjem nohtov poskrbim, da so stopala urejena in nohti lepo oblikovani.',
        'Estetska pedikura stane 35 €. Ni nadomestilo za medicinsko pedikuro: pri zdravstvenih težavah stopal ti svetujem obisk pedikerja.',
      ],
      image: HERO,
    },
    {
      id: 'pedikura-s-trajnim-lakiranjem',
      title: 'Pedikura s trajnim lakiranjem',
      summary:
        'Stranke, ki se naročijo na pedikuro, si večinoma želijo bolj obstojen in natančno nanesen lak. Trajni lak na nogah se strdi pod lučko, je takoj suh in ohrani sijaj več tednov.',
      details: [
        'Po urejeni pedikuri nohte pripravim za nanos, nanesem podlago, barvo v tankih plasteh in zaključni sijaj. Izbiraš lahko med številnimi odtenki. Pedikura s trajnim lakiranjem stane 40 €.',
      ],
    },
    {
      id: 'pedikura-s-francosko-poslikavo',
      title: 'Pedikura s francosko poslikavo',
      summary:
        'Klasika, ki nikoli ne gre iz mode: naravna podlaga in čista bela konica za eleganten videz stopal v sandalih.',
      details: [
        'Francosko poslikavo naredim s trajnim lakom, tako da je enako obstojna kot enobarvni nanos. Konico prilagodim obliki tvojih nohtov, da deluje naravno.',
        'Pedikura s francosko poslikavo stane 45 €.',
      ],
    },
  ],
  process: [
    {
      title: 'Pregled in posvet',
      text:
        'Pogledava stanje stopal in nohtov, govoriva o željah in možnostih. Pogovoriva se tudi o morebitnih boleznih ali zdravilih, ki jih stranka lahko jemlje.',
    },
    {
      title: 'Urejanje nohtov in kožice',
      text:
        'Obnohtno kožico nežno uredim, nohte skrajšam na primerno dolžino in jih oblikujem tako, da se ne vraščajo v kožo.',
    },
    {
      title: 'Lakiranje',
      text:
        'Po želji nanesem trajni lak v izbranem odtenku ali francosko poslikavo. Nanos se strdi pod lučko, zato so nohti ob odhodu suhi.',
    },
    {
      title: 'Zaključek',
      text:
        'Stopala negujem in ti svetujem, kako ohraniti rezultat doma. Star trajni lak odstranim na začetku termina in je všteto v ceno.',
    },
  ],
  tips: [
    {
      title: 'Pred terminom',
      text:
        'Na pedikuro pridi brez laka na nohtih in brez kreme na stopalih na dan termina, saj krema vpliva na obstojnost laka. Če imaš trajni lak od prej, ga odstranim jaz.',
    },
    {
      title: 'Nega doma',
      text:
        'Stopala vsak dan namaži z negovalno kremo, nohte pili v ravno obliko in ne reži kožice. Udobna obutev prepreči pritisk na nohte in vraščanje. Poskrbi, da so tvoji čevlji prave velikosti in da stopala ostajajo suha.',
    },
    {
      title: 'Kako pogosto na pedikuro',
      text:
        'Za urejena stopala priporočam pedikuro na 4–6 tednov, pred sezono sandalov pa vsaj enkrat temeljito. Trajni lak na nogah zdrži več tednov, ker nohti na nogah rastejo počasneje kot na rokah.',
    },
    {
      title: 'Estetska ali medicinska pedikura',
      text:
        'Estetska pedikura je namenjena negi in lepemu videzu zdravih stopal. Pri vraščenih nohtih, glivicah, kurjih očesih ali sladkorni bolezni ti svetujem obisk medicinskega pedikerja.',
    },
  ],
  prices: [
    { name: 'Estetska pedikura', price: '35 €' },
    { name: 'Pedikura s trajnim lakiranjem', price: '40 €' },
    { name: 'Pedikura s francosko poslikavo', price: '45 €' },
    { name: 'Odstranjevanje trajnega laka s pedikuro', price: '20 €' },
  ],
  priceRange: { min: 35, max: 45 },
  gallery: [],
  faq: [
    {
      q: 'Koliko stane pedikura na Vrhniki?',
      a: 'Estetska pedikura stane 35 €, pedikura s trajnim lakiranjem 40 €, pedikura s francosko poslikavo 45 €. Odstranjevanje trajnega laka s pedikuro je 20 €. Plačilo je z gotovino.',
    },
    {
      q: 'Kaj vključuje estetska pedikura?',
      a: 'Urejanje obnohtne kožice, krajšanje in oblikovanje nohtov ter nego stopal za lep videz in lahkoten korak. Po želji dodam trajni lak ali francosko poslikavo. Estetska pedikura ne rešuje zdravstvenih težav stopal.',
    },
  ],
};
