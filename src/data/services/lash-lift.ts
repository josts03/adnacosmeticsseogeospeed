import type { ImageAsset, Service } from './types';

const HERO: ImageAsset = {
      src: '/storitev-vihanje-trepalnic.webp',
      width: 1600,
      height: 1600,
      alt: 'Lash lift in laminacija obrvi v kozmetičnem salonu Adna Cosmetics Vrhnika',
      position: 'object-[center_30%]',
};

export const lashLift: Service = {
  id: 'lash-lift-in-obrvi',
  slug: 'lash-lift-vrhnika',
  path: '/lash-lift-vrhnika',
  name: 'Lash lift in laminacija obrvi',
  h1: 'Lash lift in laminacija obrvi na Vrhniki',
  navLabel: 'Lash lift in obrvi',
  formValue: 'lash-lift-obrvi',
  icon: '/lash-lift.webp',
  serviceType: 'Lash lift in laminacija obrvi',
  seo: {
    title: 'Lash lift in laminacija obrvi Vrhnika | Adna Cosmetics',
    description:
      'Lash lift in laminacija obrvi na Vrhniki. Privzdignjene naravne trepalnice in urejene obrvi za več tednov, po želji z barvanjem. Od 35 €, duo 60 €.',
  },
  published: '2026-09-15',
  modified: '2026-09-15',
  labels: {
    more: 'Več o lash liftu in obrveh',
    overview: 'Kaj vključujeta lash lift in laminacija obrvi?',
    prices: 'Cenik lash lifta in laminacije obrvi',
    faq: 'Pogosta vprašanja o lash liftu in laminaciji obrvi',
  },
  hero: {
    intro:
      'Lash lift in laminacija obrvi na Vrhniki za urejen pogled brez vsakodnevnega ličenja. V salonu Adna Cosmetics privzdignem tvoje naravne trepalnice in oblikujem obrvi brez umetnih dodatkov, po želji z barvanjem. Učinek zdrži več tednov, na termin pa se naročiš po dogovoru, tudi če prihajaš iz Ljubljane, Logatca ali Borovnice.',
    image: HERO,
  },
  cardText: 'Oblikovanje, laminacija in lash lift, ki traja tedne. Zbudi se urejena.',
  overview: [
    'Vihanje trepalnic (lash lift) je tehnika s katero privzdignem naravne trepalnice, po želji lahko trepalnice tudi pobarvam. Oči bodo videti bolj odprte, trepalnice pa zavihane, bolj goste in daljše. Pri laminaciji obrvi pa prav tako lahko vključim barvanje; laminacija pomaga obvladovati dlačice in ustvariti lepo obliko brez gelov. Za najboljše rezultate se prvih 24h po tretmaju izogibaj savnam in močenju.',
  ],
  quickFacts: [
    { label: 'Cena', value: 'lash lift 35 €, laminacija obrvi 35 €, duo 60 €; z barvanjem 40 € oziroma duo 70 €' },
    { label: 'Obstojnost', value: 'lash lift 6–8 tednov, laminacija obrvi 4–6 tednov' },
    { label: 'Nega po tretmaju', value: 'prvih 24 ur brez vode, savne, maskare in mastnih krem' },
    { label: 'Primerno za', value: 'naravne trepalnice brez umetnih šopov; neukrotljive, redke ali navzdol rastoče obrvi' },
  ],
  subservices: [
    {
      id: 'lash-lift',
      title: 'Lash lift (vihanje trepalnic)',
      summary:
        'Vihanje trepalnic (lash lift) je tehnika, s katero privzdignem tvoje naravne trepalnice, po želji jih tudi pobarvam. Oči so videti bolj odprte, trepalnice pa zavihane, gostejše in daljše, brez umetnih trepalnic in lepila.',
      details: [
        'Med tretmajem počivaš z zaprtimi očmi. Trepalnice oblikujem na silikonskem nastavku in nanesem sredstva, ki jim dajo obstojen zavoj, po želji pa jih še pobarvam, da je učinek izrazitejši tudi brez maskare.',
        'Na termin pridi brez maskare in ličil na območju oči. Prvih 24 ur po tretmaju se izogibaj močenju trepalnic, savni in pari. Lash lift stane 35 €, z barvanjem 40 €.',
      ],
      image: HERO,
    },
    {
      id: 'laminacija-obrvi',
      title: 'Laminacija obrvi',
      summary:
        'Laminacija obrvi pomaga obvladovati dlačice in ustvari lepo, polno obliko brez gelov. Dlačice usmerim v želeno smer in jih fiksiram, po želji jih tudi pobarvam.',
      details: [
        'Laminacija je primerna za neukrotljive, redke ali navzdol rastoče dlačice. Obrvi po tretmaju delujejo urejene in polnejše, zjutraj pa jih le počešeš.',
        'Prvih 24 ur se izogibaj močenju obrvi, savni in kremam na tem območju. Laminacija obrvi stane 35 €, z barvanjem 40 €.',
      ],
    },
    {
      id: 'duo',
      title: 'Duo: lash lift in laminacija obrvi',
      summary:
        'Če želiš urejen pogled v enem obisku, združi oboje: lash lift in laminacijo obrvi. Duo je tudi cenovno ugodnejši kot vsaka storitev posebej.',
      details: [
        'Oba tretmaja opravim na istem terminu, tako da prihraniš čas in dobiš usklajen rezultat.',
        'Duo stane 60 €, duo z barvanjem trepalnic in obrvi pa 70 €.',
      ],
    },
  ],
  process: [
    {
      title: 'Posvet in pregled',
      text:
        'Pogledava naravne trepalnice in obrvi, se dogovoriva o želenem zavoju in obliki ter o barvanju. Sporoči mi alergije in občutljivost oči.',
    },
    {
      title: 'Priprava',
      text:
        'Trepalnice ali obrvi očistim in razmastim, pri lash liftu trepalnice oblikujem na silikonskem nastavku, obrvi pa usmerim v želeno obliko.',
    },
    {
      title: 'Tretma',
      text:
        'Nanesem sredstva, ki dlačicam dajo obstojen zavoj ali obliko, in jih pustim delovati. Med tretmajem počivaš z zaprtimi očmi. Po želji sledi barvanje.',
    },
    {
      title: 'Zaključek in nega',
      text:
        'Nanesem negovalno sredstvo, počešem trepalnice ali obrvi in ti razložim nego v prvih 24 urah. Rezultat vidiš takoj.',
    },
  ],
  tips: [
    {
      title: 'Pred terminom',
      text:
        'Pridi brez maskare in ličil na območju oči in obrvi. Če nosiš kontaktne leče, jih boš med lash liftom morda želela odstraniti, zato vzemi s seboj škatlico.',
    },
    {
      title: 'Prvih 24 ur',
      text:
        'Trepalnic in obrvi ne moči, izogibaj se savni, pari in intenzivni vadbi. Ne uporabljaj maskare, olj in mastnih krem na tem območju, trepalnic ne drgni in ne spi na obrazu.',
    },
    {
      title: 'Nega doma',
      text:
        'Trepalnice vsak dan počeši s čisto krtačko, obrvi pa zjutraj počeši v obliko. Negovalni serum ali olje lahko uporabljaš po prvih 24 urah. Vodoodporne maskare se raje izogibaj, ker jo je težko odstraniti brez drgnjenja.',
    },
    {
      title: 'Kdaj ponoviti',
      text:
        'Lash lift praviloma zdrži 6–8 tednov, kolikor traja naravni cikel trepalnic, laminacija obrvi pa 4–6 tednov. Tretma ponoviš, ko naravne dlačice zrastejo in zavoj popusti; prej ga ne ponavljaj, da dlačic ne obremeniš.',
    },
  ],
  prices: [
    { name: 'Laminacija obrvi', price: '35 €' },
    { name: 'Laminacija obrvi z barvanjem', price: '40 €' },
    { name: 'Lash lift', price: '35 €' },
    { name: 'Lash lift z barvanjem', price: '40 €' },
    { name: 'Duo', price: '60 €' },
    { name: 'Duo z barvanjem', price: '70 €' },
  ],
  priceNote: 'Opomba: Na termin prosim pridi brez maskare.',
  priceRange: { min: 35, max: 70 },
  gallery: [],
  faq: [
    {
      q: 'Kaj je lash lift in kako se razlikuje od podaljševanja trepalnic?',
      a: 'Lash lift privzdigne in zavije tvoje lastne trepalnice, brez umetnih trepalnic in lepila. Oči so videti bolj odprte, trepalnice daljše in gostejše, nega pa je preprosta. Pri podaljševanju se na trepalnice lepijo umetni šopi, ki potrebujejo redno polnjenje.',
    },
    {
      q: 'Kaj je laminacija obrvi?',
      a: 'Laminacija obrvi je tretma, pri katerem dlačice usmerim v želeno smer in jih fiksiram, tako da obrvi delujejo urejene, polnejše in oblikovane brez gela. Primerna je za neukrotljive, redke ali navzdol rastoče dlačice.',
    },
    {
      q: 'Koliko časa zdrži lash lift in laminacija obrvi?',
      a: 'Lash lift zdrži približno 6–8 tednov, laminacija obrvi pa 4–6 tednov, odvisno od naravnega cikla rasti dlačic in nege. Barvanje lepo dopolni rezultat, ker so dlačice temnejše in bolj vidne.',
    },
    {
      q: 'Ali lash lift boli ali je nevaren za oči?',
      a: 'Tretma ni boleč. Oči imaš ves čas zaprte, sredstva pa nanašam na trepalnice, ne na kožo ali oko. Pred prvim tretmajem mi povej za alergije ali občutljivost, da se dogovoriva o previdnostnih ukrepih.',
    },
    {
      q: 'Kako se pripravim na termin?',
      a: 'Pridi brez maskare in ličil na območju oči in obrvi. Trepalnice naj bodo čiste in brez ostankov olja ali kreme. Če nosiš leče, jih boš med tretmajem lahko odstranila.',
    },
    {
      q: 'Kakšna je nega po tretmaju?',
      a: 'Prvih 24 ur trepalnic in obrvi ne moči, izogibaj se savni, pari, maskari in mastnim kremam ter ne spi na obrazu. Potem lahko živiš popolnoma normalno, tudi plavaš in uporabljaš maskaro.',
    },
    {
      q: 'Koliko stane lash lift in laminacija obrvi na Vrhniki?',
      a: 'Lash lift stane 35 €, z barvanjem 40 €. Laminacija obrvi stane 35 €, z barvanjem 40 €. Duo, torej oboje na istem terminu, stane 60 €, z barvanjem pa 70 €. Plačilo je z gotovino.',
    },
    {
      q: 'Ali lahko lash lift in laminacijo obrvi naredim na istem terminu?',
      a: 'Da, to je duo paket, ki je tudi cenovno ugodnejši (60 € ali 70 € z barvanjem). Oba tretmaja opravim v enem obisku, tako da prihraniš čas in dobiš usklajen rezultat.',
    },
  ],
};
