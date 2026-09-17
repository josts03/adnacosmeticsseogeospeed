import type { ImageAsset, Service } from './types';

const HERO: ImageAsset = {
      src: '/storitev-masaza.webp',
      width: 1600,
      height: 1067,
      alt: 'Masaža v kozmetičnem salonu Adna Cosmetics Vrhnika',
      position: 'object-[center_80%]',
};

export const masaza: Service = {
  id: 'masaza',
  slug: 'masaza-vrhnika',
  path: '/masaza-vrhnika',
  name: 'Masaža',
  h1: 'Masaža na Vrhniki',
  navLabel: 'Masaža',
  formValue: 'masaza',
  icon: '/masaza.webp',
  serviceType: 'Klasična masaža telesa',
  seo: {
    title: 'Masaža Vrhnika – klasična masaža telesa | Adna Cosmetics',
    description:
      'Klasična masaža telesa (60 min, 40 €) in masaža zgornjega hrbta z vratom (30 min, 20 €) na Vrhniki. Sprostitev po dogovoru v salonu Adna Cosmetics.',
  },
  published: '2026-09-15',
  modified: '2026-09-17',
  labels: {
    more: 'Več o masaži',
    overview: 'Kaj vključuje masaža?',
    prices: 'Cenik masaže',
    faq: 'Pogosta vprašanja o masaži',
  },
  hero: {
    intro:
      'Masaža na Vrhniki, ki ti vrne energijo: klasična masaža telesa (60 min) sprosti hrbet, roke in noge, krajša masaža zgornjega hrbta z vratom (30 min) pa je kot nalašč za hitro sprostitev po dolgem dnevu. V salonu Adna Cosmetics pritisk prilagodim tebi. Naročiš se po dogovoru, tudi iz Ljubljane, Logatca in okolice.',
    image: HERO,
  },
  cardText: '60-minutna masaža, ki odpravi napetost v hrbtu in ramenih.',
  overview: [
    'Klasična masaža telesa vključuje masažo hrbta, rok in nog spredaj in zadaj. 1 ura sprostitve v današnjem hitrem življenju bo vsakemu prav prišla. Za tiste, ki nimajo toliko časa pa obstaja masaža zgornjega hrbta in vratu, ta je krajša in traja 30 min, je kot nalašč za hitro sprostitev.',
  ],
  quickFacts: [
    { label: 'Cena', value: '40 € klasična masaža telesa (60 min), 20 € masaža zgornjega hrbta z vratom (30 min)' },
    { label: 'Trajanje', value: '60 ali 30 minut' },
    { label: 'Priporočeno', value: '1–2× na mesec za sprostitev in preprečevanje napetosti' },
    { label: 'Primerno za', value: 'napetost v hrbtu, ramenih in vratu; pritisk prilagodim tvojemu odzivu' },
  ],
  subservices: [
    {
      id: 'klasicna-masaza-telesa',
      title: 'Klasična masaža telesa (60 min)',
      summary:
        'Klasična masaža telesa vključuje masažo hrbta, rok in nog spredaj in zadaj. Ura sprostitve v današnjem hitrem življenju bo vsakemu prav prišla.',
      details: [
        'Pritisk prilagodim tebi: od nežne, sproščujoče masaže do nekoliko čvrstejših potez, ki razrahljajo napete mišice. Delam v prijetnem, umirjenem ambientu.',
        'Klasična masaža telesa traja 60 minut in stane 40 €.',
      ],
      image: HERO,
    },
    {
      id: 'masaza-zgornjega-hrbta',
      title: 'Masaža zgornjega hrbta z vratom (30 min)',
      summary:
        'Za tiste, ki nimajo toliko časa: krajša masaža zgornjega hrbta in vratu, kot nalašč za hitro sprostitev po delovnem dnevu za računalnikom.',
      details: [
        'Osredotočim se na ramena, vrat in zgornji del hrbta, kjer se najpogosteje nabira napetost.',
        'Masaža zgornjega hrbta z vratom traja 30 minut in stane 20 €.',
      ],
    },
  ],
  process: [
    {
      title: 'Posvet',
      text:
        'Poveš mi, kje čutiš napetost, kakšen pritisk ti ustreza in ali imaš zdravstvene težave ali poškodbe, ki jih moram upoštevati.',
    },
    {
      title: 'Priprava',
      text:
        'Slečeš se do spodnjega perila in se udobno namestiš na masažno mizo; predele, ki jih ne masiram, pokrijem z brisačo. Prostor je ogret in umirjen.',
    },
    {
      title: 'Masaža',
      text:
        'Klasična masaža zajame hrbet, roke in noge spredaj in zadaj, krajša različica pa zgornji hrbet, ramena in vrat. Pritisk med masažo sproti prilagajam.',
    },
    {
      title: 'Po masaži',
      text:
        'Vzemi si nekaj minut, da počasi vstaneš. Popij kozarec vode in si preostanek dneva privošči umirjen tempo.',
    },
  ],
  tips: [
    {
      title: 'Pred masažo',
      text:
        'Ne jej težkega obroka 1–2 uri pred terminom in na dan masaže ne nanašaj kreme ali olja na kožo. Pridi 5 minut prej, da se umiriš.',
    },
    {
      title: 'Kaj obleči',
      text:
        'Karkoli udobnega. Med masažo si v spodnjem perilu, pokrita z brisačo, zato posebna oblačila niso potrebna.',
    },
    {
      title: 'Po masaži',
      text:
        'Pij dovolj vode, izogibaj se intenzivni vadbi in alkoholu ter si privošči počitek. Rahla občutljivost mišic naslednji dan je normalna.',
    },
    {
      title: 'Kdaj masaža ni primerna',
      text:
        'Pri vročini, akutnih vnetjih, svežih poškodbah, kožnih boleznih na predelu masaže in v prvih mesecih nosečnosti. Če nisi prepričana, se prej posvetuj z zdravnikom.',
    },
  ],
  prices: [
    { name: 'Klasična masaža telesa (60 min)', price: '40 €' },
    { name: 'Masaža zgornjega hrbta z vratom (30 min)', price: '20 €' },
  ],
  priceRange: { min: 20, max: 40 },
  gallery: [],
  faq: [
    {
      q: 'Kakšna je razlika med 60- in 30-minutno masažo?',
      a: 'Klasična masaža (60 min, 40 €) zajame celo telo, masaža zgornjega hrbta z vratom (30 min, 20 €) pa se osredotoči na ramena, vrat in zgornji del hrbta, kjer se najpogosteje nabira napetost od sedenja in dela za računalnikom.',
    },
    {
      q: 'Koliko stane masaža na Vrhniki?',
      a: 'Klasična masaža telesa (60 min) stane 40 €, masaža zgornjega hrbta z vratom (30 min) pa 20 €. Plačilo je z gotovino, naročiš se po dogovoru.',
    },
    {
      q: 'Ali lahko masažo združim z drugo storitvijo?',
      a: 'Da, masažo rade združite z manikuro ali pedikuro v istem obisku. Ob naročilu navedi, katere storitve želiš, da rezerviram dovolj časa.',
    },
  ],
};
