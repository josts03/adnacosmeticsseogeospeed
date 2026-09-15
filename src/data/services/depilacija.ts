import type { ImageAsset, Service } from './types';

const HERO: ImageAsset = {
      src: '/storitev-depilacija.webp',
      width: 1067,
      height: 1600,
      alt: 'Depilacija v kozmetičnem salonu Adna Cosmetics Vrhnika',
      position: 'object-top',
};

export const depilacija: Service = {
  id: 'depilacija',
  slug: 'depilacija-vrhnika',
  path: '/depilacija-vrhnika',
  name: 'Depilacija',
  h1: 'Depilacija na Vrhniki',
  navLabel: 'Depilacija',
  formValue: 'depilacija',
  icon: '/depilacija.webp',
  serviceType: 'Depilacija z voskom',
  seo: {
    title: 'Depilacija Vrhnika – depilacija z voskom | Adna Cosmetics',
    description:
      'Depilacija z vročim voskom na Vrhniki: noge, roke, pazduhe in obraz. Gladka koža več tednov, dlačice se s časom razredčijo. Cene od 10 €.',
  },
  published: '2026-09-15',
  modified: '2026-09-15',
  labels: {
    more: 'Več o depilaciji',
    overview: 'Kaj vključuje depilacija z voskom?',
    prices: 'Cenik depilacije',
    faq: 'Pogosta vprašanja o depilaciji',
  },
  hero: {
    intro:
      'Depilacija z vročim voskom na Vrhniki za gladko kožo brez vsakodnevnega britja. V salonu Adna Cosmetics depiliram noge, roke, pazduhe in obraz; vroči vosek izpuli dlačico skupaj z mešičkom, zato koža ostane gladka več tednov, dlačice pa se z redno depilacijo stanjšajo in razredčijo. Naročiš se po dogovoru, tudi iz Ljubljane, Logatca in okolice.',
    image: HERO,
  },
  cardText: 'Do 4 tedne gladke kože brez britja. Učinkovito voskanje za vse tipe kože.',
  overview: [
    'S pomočjo vročega voska izpulim dlačico z mešičkom. Depilacija omogoča mehko kožo nekaj tednov, pri redni depilaciji se dlačice stanjšajo, posvetlijo in razredčijo. Po depilaciji se prvih 24-48h izogibaj direktnemu soncu.',
  ],
  quickFacts: [
    { label: 'Cena', value: 'od 10 € (obraz) do 30 € (cele noge); pazduhe 12 €, roke 20 €, noge do kolen 20 €' },
    { label: 'Gladka koža', value: '3–4 tedne; z redno depilacijo dlačice rastejo tanjše in redkejše' },
    { label: 'Priporočen razmik', value: '4–6 tednov, ko so dlačice dolge vsaj 4–5 mm' },
    { label: 'Način', value: 'vroči vosek, ki se oprime dlačic in ne kože; primeren tudi za občutljive predele' },
  ],
  subservices: [
    {
      id: 'depilacija-nog',
      title: 'Depilacija nog z voskom',
      summary:
        'S pomočjo vročega voska izpulim dlačico z mešičkom, zato je koža gladka več tednov. Izbiraš med depilacijo celih nog ali le do kolen.',
      details: [
        'Vroči vosek se oprime dlačic in ne kože, zato je prijaznejši do občutljive kože. Pri redni depilaciji se dlačice stanjšajo, posvetlijo in razredčijo.',
        'Po depilaciji se prvih 24–48 ur izogibaj neposrednemu soncu, savni in tesnim oblačilom. Cele noge stanejo 30 €, noge do kolen 20 €.',
      ],
      image: HERO,
    },
    {
      id: 'depilacija-rok-in-pazduh',
      title: 'Depilacija rok in pazduh',
      summary:
        'Hitra in učinkovita depilacija za gladke roke in pazduhe brez vsakodnevnega britja in razdražene kože.',
      details: [
        'Pazduhe so občutljivo območje, zato tu še posebej pride do izraza vroči vosek, ki dlačice odstrani z mešičkom in koži pusti gladkost več tednov.',
        'Depilacija rok stane 20 €, pazduh 12 €.',
      ],
    },
    {
      id: 'depilacija-obraza',
      title: 'Depilacija obraza',
      summary:
        'Nežna depilacija obraza z vročim voskom za urejeno zgornjo ustnico, brado ali lica.',
      details: [
        'Uporabljam vosek, primeren za občutljivo kožo obraza, in delam natančno po manjših območjih.',
        'Po depilaciji obraza se vsaj 24 ur izogibaj soncu in močnim kremam. Depilacija obraza stane 10 €.',
      ],
    },
  ],
  process: [
    {
      title: 'Priprava kože',
      text:
        'Kožo očistim in razmastim, da se vosek dobro oprime dlačic. Preveriva, da je koža brez opeklin, ran ali draženja.',
    },
    {
      title: 'Nanos vročega voska',
      text:
        'Vosek, ogret na primerno temperaturo, nanesem po manjših območjih v smeri rasti dlačic. Vroči vosek se oprime dlačic in ne kože, zato je primeren tudi za občutljive predele.',
    },
    {
      title: 'Odstranitev',
      text:
        'Vosek odstranim s hitrim potegom v nasprotni smeri rasti, tako da dlačice izpulim z mešičkom. Delam hitro in natančno, da je občutek čim manj neprijeten.',
    },
    {
      title: 'Pomiritev kože',
      text:
        'Kožo očistim ostankov voska in nanesem pomirjajoče sredstvo. Dobiš navodila za nego v naslednjih 24–48 urah.',
    },
  ],
  tips: [
    {
      title: 'Dolžina dlačic',
      text:
        'Dlačice naj bodo dolge vsaj 4–5 mm, kar je približno 2–3 tedne po zadnjem britju. Prekratkih dlačic vosek ne zagrabi, predolge pa lahko pred terminom skrajšaš.',
    },
    {
      title: 'Pred terminom',
      text:
        'Dan pred depilacijo naredi nežen piling, na dan termina pa ne nanašaj kreme, olja ali dezodoranta na predel depilacije. Pred terminom se ne sonči in ne obiskuj solarija.',
    },
    {
      title: 'Po depilaciji',
      text:
        'Prvih 24–48 ur se izogibaj neposrednemu soncu, solariju, savni, bazenu in tesnim oblačilom. Po 2–3 dneh začni z rednim pilingom, da preprečiš vraščanje dlačic, in kožo vsak dan negovalno namaži.',
    },
    {
      title: 'Kdaj depilacija ni priporočljiva',
      text:
        'Na opečeni, poškodovani ali vneti koži, pri uporabi retinoidov ali drugih sredstev, ki tanjšajo kožo, in tik po sončenju. Med menstruacijo je koža občutljivejša. V nosečnosti se prej posvetuj z zdravnikom.',
    },
  ],
  prices: [
    { name: 'Cele noge', price: '30 €' },
    { name: 'Noge od/do kolen', price: '20 €' },
    { name: 'Pazduhe', price: '12 €' },
    { name: 'Roke', price: '20 €' },
    { name: 'Obraz', price: '10 €' },
  ],
  priceRange: { min: 10, max: 30 },
  gallery: [],
  faq: [
    {
      q: 'Kako dolge morajo biti dlačice za depilacijo z voskom?',
      a: 'Vsaj 4–5 mm, kar je približno 2–3 tedne rasti po britju. Tako jih vosek zanesljivo zagrabi in izpuli z mešičkom. Če so daljše, jih lahko pred terminom skrajšaš s škarjami.',
    },
    {
      q: 'Ali depilacija z voskom boli?',
      a: 'Iskreno: prvič lahko malo peče, predvsem na občutljivih predelih, kot so pazduhe. Z vsako naslednjo depilacijo je manj neprijetno, ker se dlačice stanjšajo in redčijo. Vroči vosek je do kože prijaznejši od trakov, ker se oprime samo dlačic.',
    },
    {
      q: 'Koliko časa je koža gladka po depilaciji?',
      a: 'Ker dlačico izpulim z mešičkom, je koža gladka več tednov, praviloma 3–4. Z redno depilacijo na 4–6 tednov dlačice postanejo tanjše, svetlejše in redkejše.',
    },
    {
      q: 'Kako pogosto naj hodim na depilacijo?',
      a: 'Priporočam vsakih 4–6 tednov, ko dlačice spet zrastejo na 4–5 mm. Redni termini so ključni, da dlačice rastejo enakomerno in da je vsaka naslednja depilacija hitrejša in manj neprijetna.',
    },
    {
      q: 'Kako se pripravim na depilacijo?',
      a: 'Dan prej naredi piling, na dan termina ne uporabljaj kreme, olja ali dezodoranta na predelu depilacije. Ne sonči se in ne obiskuj solarija vsaj dan prej. Pridi v udobnih, ohlapnih oblačilih.',
    },
    {
      q: 'Kaj naj naredim po depilaciji?',
      a: 'Prvih 24–48 ur brez sonca, solarija, savne, bazena in tesnih oblačil. Kožo negovalno mažeš vsak dan, po 2–3 dneh pa dodaj nežen piling dva- do trikrat na teden, da preprečiš vraščanje dlačic.',
    },
    {
      q: 'Koliko stane depilacija na Vrhniki?',
      a: 'Depilacija celih nog stane 30 €, nog do kolen 20 €, rok 20 €, pazduh 12 € in obraza 10 €. Predele lahko združiš na enem terminu. Plačilo je z gotovino.',
    },
    {
      q: 'Depilacija z voskom ali britje, kaj je bolje?',
      a: 'Britje odstrani dlačico na površini, zato se pojavijo že po dnevu ali dveh, pogosto s strniščem in razdraženo kožo. Vosek dlačico izpuli z mešičkom, koža je gladka več tednov, dlačice pa s časom rastejo tanjše in redkejše.',
    },
  ],
};
