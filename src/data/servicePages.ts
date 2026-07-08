/**
 * Vsebina lokalno optimiziranih storitvenih podstrani (SEO + GEO).
 * Cene in dejstva so usklajeni s cenikom (/cenik) in opisi storitev (/storitve).
 */

export interface ServicePageFaq {
  q: string;
  a: string;
}

export interface ServicePageData {
  id: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  display: string; // veliki serif naslov
  h1: string;
  intro: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: string;
  imageAlt: string;
  pricesTitle: string;
  prices: { name: string; price: string }[];
  priceNote?: string;
  faqs: ServicePageFaq[];
  serviceName: string;
  serviceDescription: string;
  minPrice: number;
  maxPrice: number;
}

export const servicePages: Record<string, ServicePageData> = {
  manikura: {
    id: 'manikura',
    path: '/manikura-vrhnika',
    metaTitle: 'Manikura Vrhnika – gel nohti in permanentno lakiranje | Adna Cosmetics',
    metaDescription:
      'Manikura na Vrhniki: osnovna manikura 25 €, permanentno lakiranje 30 €, podaljševanje nohtov z gelom 35–45 €. Kvalitetni materiali, termin po dogovoru.',
    display: 'Manikura na Vrhniki',
    h1: 'Manikura Vrhnika – gel nohti, permanentno lakiranje in podaljševanje nohtov',
    intro: [
      'V salonu Adna Cosmetics na Vrhniki izvajam osnovno manikuro (25 €), permanentno lakiranje (30 €) in podaljševanje nohtov z gelom (35–45 €, odvisno od dolžine). Termin je po dogovoru, naročiš se prek obrazca, e-pošte ali Instagrama.',
      'Pri vsaki manikuri najprej uredim obnohtno kožico, nato naraven noht pokrijem z izbranim materialom — glede na tvoje želje in stanje nohtne plošče. Zelo rada naredim francosko manikuro, delam pa tudi enostavne poslikave. Uporabljam kvalitetne materiale in ponujam široko paleto barv.',
      'Nohti ob pravilni negi zdržijo do ponovnega obiska čez 3–4 tedne. Doma jih neguj z oljem za obnohtno kožico in jih čuvaj pred mehanskimi poškodbami — za dobro obstojnost dam 50 % jaz, drugih 50 % pa stranka.',
    ],
    image: '/storitve-manikura.webp',
    imageWidth: 1200,
    imageHeight: 1600,
    imagePosition: 'object-[center_80%]',
    imageAlt: 'Gel manikura in urejeni nohti v kozmetičnem salonu Adna Cosmetics na Vrhniki',
    pricesTitle: 'Cenik manikure',
    prices: [
      { name: 'Osnovna manikura', price: '25 €' },
      { name: 'Permanentno lakiranje', price: '30 €' },
      { name: 'Podaljševanje S / M / L', price: '35 / 40 / 45 €' },
      { name: 'Grajena francoska', price: '10–15 €' },
      { name: 'Poslikava', price: '5–10 €' },
      { name: 'Popravilo nohta', price: '4–8 €' },
      { name: 'Odstranjevanje', price: '15 €' },
    ],
    priceNote:
      'Cena korekcije je enaka ceni podaljševanja. Korekcij tujega dela ne izvajam. Reklamacije so možne 48 ur po tretmaju.',
    faqs: [
      {
        q: 'Koliko stane manikura na Vrhniki?',
        a: 'V salonu Adna Cosmetics stane osnovna manikura 25 €, permanentno lakiranje 30 €, podaljševanje nohtov z gelom pa 35–45 € glede na dolžino.',
      },
      {
        q: 'Kakšna je razlika med permanentnim lakiranjem in gel nohti?',
        a: 'Pri permanentnem lakiranju naraven noht pokrijem s trajnim lakom, ki drži bistveno dlje od navadnega. Pri podaljševanju z gelom pa noht tudi podaljšam in zgradim, zato je primerno, če želiš daljše ali močnejše nohte.',
      },
      {
        q: 'Kako dolgo držijo gel nohti?',
        a: 'Ob pravilni negi nohti zdržijo do ponovnega obiska čez 3–4 tedne. Doma priporočam nego z oljem za obnohtno kožico in previdnost pri mehanskih obremenitvah.',
      },
      {
        q: 'Ali delaš tudi francosko manikuro in poslikave?',
        a: 'Da. Grajena francoska stane 10–15 €, enostavne poslikave pa 5–10 € kot dodatek k izbrani storitvi.',
      },
      {
        q: 'Kako se naročim na manikuro?',
        a: 'Termin rezerviraš prek obrazca na strani Kontakt, po e-pošti adnaacosmetics@gmail.com ali prek Instagrama @adnaa_cosmetics. Delam po dogovoru, od ponedeljka do petka.',
      },
    ],
    serviceName: 'Manikura',
    serviceDescription:
      'Osnovna manikura, permanentno lakiranje in podaljševanje nohtov z gelom v kozmetičnem salonu na Vrhniki.',
    minPrice: 25,
    maxPrice: 45,
  },

  pedikura: {
    id: 'pedikura',
    path: '/pedikura-vrhnika',
    metaTitle: 'Pedikura Vrhnika – estetska pedikura in trajno lakiranje | Adna Cosmetics',
    metaDescription:
      'Estetska pedikura na Vrhniki od 35 €, pedikura s trajnim lakiranjem 40 €, s francosko poslikavo 45 €. Urejena stopala in obstojen lak, termin po dogovoru.',
    display: 'Pedikura na Vrhniki',
    h1: 'Pedikura Vrhnika – estetska pedikura s trajnim lakiranjem',
    intro: [
      'V salonu Adna Cosmetics na Vrhniki izvajam estetsko pedikuro (35 €), pedikuro s trajnim lakiranjem (40 €) in pedikuro s francosko poslikavo (45 €). Termin je po dogovoru.',
      'Pedikura pomeni celovito urejanje stopal: uredim obnohtno kožico ter skrajšam in oblikujem nohte — za lahkoten korak in estetski videz. Stranke se najpogosteje odločijo za trajno lakiranje, ker je lak bolj obstojen in bolj natančno nanesen kot pri navadnem lakiranju.',
      'Na pedikuro k meni prihajajo stranke z Vrhnike pa tudi iz Logatca, Borovnice, Brezovice in Ljubljane.',
    ],
    image: '/storitev-pedikura.webp',
    imageWidth: 1067,
    imageHeight: 1600,
    imageAlt: 'Estetska pedikura s trajnim lakiranjem v salonu Adna Cosmetics na Vrhniki',
    pricesTitle: 'Cenik pedikure',
    prices: [
      { name: 'Estetska pedikura', price: '35 €' },
      { name: 'Pedikura s trajnim lakiranjem', price: '40 €' },
      { name: 'Pedikura s francosko poslikavo', price: '45 €' },
      { name: 'Odstranjevanje trajnega laka s pedikuro', price: '20 €' },
    ],
    faqs: [
      {
        q: 'Koliko stane pedikura na Vrhniki?',
        a: 'Estetska pedikura v salonu Adna Cosmetics stane 35 €, pedikura s trajnim lakiranjem 40 €, s francosko poslikavo pa 45 €.',
      },
      {
        q: 'Kaj vključuje estetska pedikura?',
        a: 'Estetska pedikura vključuje urejanje obnohtne kožice ter krajšanje in oblikovanje nohtov na nogah. Po želji dodam trajno lakiranje ali francosko poslikavo.',
      },
      {
        q: 'Zakaj trajno lakiranje namesto navadnega laka?',
        a: 'Trajni lak je bistveno bolj obstojen in natančneje nanesen — na nogah običajno zdrži več tednov brez krušenja.',
      },
      {
        q: 'Kako se naročim na pedikuro?',
        a: 'Termin rezerviraš prek obrazca na strani Kontakt, po e-pošti adnaacosmetics@gmail.com ali prek Instagrama @adnaa_cosmetics. Delam po dogovoru, od ponedeljka do petka.',
      },
    ],
    serviceName: 'Pedikura',
    serviceDescription:
      'Estetska pedikura, pedikura s trajnim lakiranjem in francosko poslikavo v kozmetičnem salonu na Vrhniki.',
    minPrice: 35,
    maxPrice: 45,
  },

  'lash-lift': {
    id: 'lash-lift',
    path: '/lash-lift-laminacija-obrvi-vrhnika',
    metaTitle: 'Lash lift in laminacija obrvi Vrhnika – cena od 35 € | Adna Cosmetics',
    metaDescription:
      'Lash lift (vihanje trepalnic) in laminacija obrvi na Vrhniki: 35 €, z barvanjem 40 €, duo paket 60–70 €. Učinek traja več tednov. Termin po dogovoru.',
    display: 'Lash lift in laminacija obrvi',
    h1: 'Lash lift in laminacija obrvi Vrhnika – privzdignjene trepalnice in urejene obrvi',
    intro: [
      'V salonu Adna Cosmetics na Vrhniki izvajam lash lift (35 €, z barvanjem 40 €) in laminacijo obrvi (35 €, z barvanjem 40 €). Če izbereš oboje skupaj, stane duo 60 €, z barvanjem pa 70 €.',
      'Lash lift ali vihanje trepalnic je tehnika, s katero privzdignem tvoje naravne trepalnice — oči so videti bolj odprte, trepalnice pa zavihane, bolj goste in daljše. Po želji jih tudi pobarvam. Pri laminaciji obrvi dlačice oblikujem in zgladim v lepo obliko brez gelov, po želji z barvanjem.',
      'Učinek traja več tednov, zato se zbudiš urejena — brez vsakodnevnega navijanja trepalnic ali urejanja obrvi. Prvih 24 ur po tretmaju se izogibaj savnam in močenju.',
    ],
    image: '/storitev-vihanje-trepalnic.webp',
    imageWidth: 1600,
    imageHeight: 1600,
    imagePosition: 'object-[center_30%]',
    imageAlt: 'Lash lift – vihanje trepalnic v kozmetičnem salonu Adna Cosmetics na Vrhniki',
    pricesTitle: 'Cenik lash lifta in laminacije obrvi',
    prices: [
      { name: 'Lash lift', price: '35 €' },
      { name: 'Lash lift z barvanjem', price: '40 €' },
      { name: 'Laminacija obrvi', price: '35 €' },
      { name: 'Laminacija obrvi z barvanjem', price: '40 €' },
      { name: 'Duo (lash lift + laminacija)', price: '60 €' },
      { name: 'Duo z barvanjem', price: '70 €' },
    ],
    priceNote: 'Na termin prosim pridi brez maskare.',
    faqs: [
      {
        q: 'Koliko stane lash lift na Vrhniki?',
        a: 'Lash lift v salonu Adna Cosmetics stane 35 €, z barvanjem trepalnic 40 €. V kombinaciji z laminacijo obrvi (duo) plačaš 60 €, z barvanjem 70 €.',
      },
      {
        q: 'Kako dolgo traja učinek lash lifta in laminacije obrvi?',
        a: 'Učinek traja več tednov — odvisno od naravnega cikla rasti dlačic. Prvih 24 ur po tretmaju se izogibaj savnam in močenju, da se rezultat lepo utrdi.',
      },
      {
        q: 'Ali je lash lift škodljiv za trepalnice?',
        a: 'Lash lift oblikuje tvoje lastne naravne trepalnice — nič se ne lepi in ne podaljšuje, zato ob strokovni izvedbi in ustreznih razmikih med termini trepalnice ostanejo zdrave.',
      },
      {
        q: 'Kako se pripravim na termin?',
        a: 'Na termin pridi brez maskare in ličil na predelu oči. Naročiš se prek obrazca na strani Kontakt, po e-pošti ali prek Instagrama @adnaa_cosmetics.',
      },
    ],
    serviceName: 'Lash lift in laminacija obrvi',
    serviceDescription:
      'Vihanje trepalnic (lash lift) in laminacija obrvi, po želji z barvanjem, v kozmetičnem salonu na Vrhniki.',
    minPrice: 35,
    maxPrice: 70,
  },

  depilacija: {
    id: 'depilacija',
    path: '/depilacija-vrhnika',
    metaTitle: 'Depilacija z voskom Vrhnika – cena od 10 € | Adna Cosmetics',
    metaDescription:
      'Depilacija z vročim voskom na Vrhniki: cele noge 30 €, pazduhe 12 €, obraz 10 €. Gladka koža do 4 tedne, primerno za vse tipe kože. Termin po dogovoru.',
    display: 'Depilacija na Vrhniki',
    h1: 'Depilacija z voskom Vrhnika – gladka koža do 4 tedne',
    intro: [
      'V salonu Adna Cosmetics na Vrhniki izvajam depilacijo z vročim voskom: cele noge 30 €, noge od/do kolen 20 €, roke 20 €, pazduhe 12 € in obraz 10 €.',
      'Z vročim voskom dlačico izpulim skupaj z mešičkom, zato koža ostane gladka več tednov — brez vsakodnevnega britja. Pri redni depilaciji se dlačice postopoma stanjšajo, posvetlijo in razredčijo, zato je vsak naslednji termin prijetnejši.',
      'Po depilaciji se prvih 24–48 ur izogibaj direktnemu soncu. Voskanje je primerno za vse tipe kože.',
    ],
    image: '/storitev-depilacija.webp',
    imageWidth: 1067,
    imageHeight: 1600,
    imagePosition: 'object-top',
    imageAlt: 'Depilacija z vročim voskom v kozmetičnem salonu Adna Cosmetics na Vrhniki',
    pricesTitle: 'Cenik depilacije',
    prices: [
      { name: 'Cele noge', price: '30 €' },
      { name: 'Noge od/do kolen', price: '20 €' },
      { name: 'Roke', price: '20 €' },
      { name: 'Pazduhe', price: '12 €' },
      { name: 'Obraz', price: '10 €' },
    ],
    faqs: [
      {
        q: 'Koliko stane depilacija na Vrhniki?',
        a: 'V salonu Adna Cosmetics stane depilacija celih nog 30 €, nog od/do kolen 20 €, rok 20 €, pazduh 12 € in obraza 10 €.',
      },
      {
        q: 'Kako dolgo koža po depilaciji ostane gladka?',
        a: 'Koža ostane gladka do 4 tedne, ker vosek dlačico odstrani skupaj z mešičkom. Pri redni depilaciji dlačice postanejo tanjše, svetlejše in redkejše.',
      },
      {
        q: 'Ali depilacija z voskom boli?',
        a: 'Prvi termin je lahko rahlo neprijeten, a občutek z vsako naslednjo depilacijo popušča, ker dlačice postajajo tanjše in redkejše. Vroči vosek je pri tem nežnejši od hladnih trakov.',
      },
      {
        q: 'Kakšna naj bo dolžina dlačic pred depilacijo?',
        a: 'Idealno je, da so dlačice dolge vsaj okoli pol centimetra, da jih vosek dobro zagrabi. Če si negotova, mi piši in se dogovoriva glede termina.',
      },
      {
        q: 'Kaj naj upoštevam po depilaciji?',
        a: 'Prvih 24–48 ur po depilaciji se izogibaj direktnemu soncu, savni in intenzivnemu potenju, da se koža umiri.',
      },
    ],
    serviceName: 'Depilacija z voskom',
    serviceDescription:
      'Depilacija z vročim voskom za noge, roke, pazduhe in obraz v kozmetičnem salonu na Vrhniki.',
    minPrice: 10,
    maxPrice: 30,
  },

  masaza: {
    id: 'masaza',
    path: '/masaza-vrhnika',
    metaTitle: 'Masaža Vrhnika – klasična masaža telesa 60 min | Adna Cosmetics',
    metaDescription:
      'Klasična masaža telesa na Vrhniki: 60 minut za 40 € ali masaža zgornjega hrbta z vratom 30 minut za 20 €. Sprostitev in odprava napetosti, termin po dogovoru.',
    display: 'Masaža na Vrhniki',
    h1: 'Masaža Vrhnika – klasična masaža telesa in masaža hrbta z vratom',
    intro: [
      'V salonu Adna Cosmetics na Vrhniki izvajam klasično masažo telesa (60 minut, 40 €) in masažo zgornjega hrbta z vratom (30 minut, 20 €).',
      'Klasična masaža telesa vključuje masažo hrbta ter rok in nog spredaj in zadaj — ura sprostitve, ki v današnjem hitrem tempu vsakemu pride prav. Če nimaš toliko časa, je masaža zgornjega hrbta in vratu kot nalašč za hitro sprostitev in odpravo napetosti v ramenih.',
      'Masaža je odlična kombinacija z drugimi storitvami — marsikatera stranka jo doda k terminu za manikuro ali pedikuro.',
    ],
    image: '/storitev-masaza.webp',
    imageWidth: 1600,
    imageHeight: 1067,
    imagePosition: 'object-[center_80%]',
    imageAlt: 'Klasična masaža telesa v kozmetičnem salonu Adna Cosmetics na Vrhniki',
    pricesTitle: 'Cenik masaže',
    prices: [
      { name: 'Klasična masaža telesa (60 min)', price: '40 €' },
      { name: 'Masaža zgornjega hrbta z vratom (30 min)', price: '20 €' },
    ],
    faqs: [
      {
        q: 'Koliko stane masaža na Vrhniki?',
        a: 'Klasična masaža telesa (60 minut) v salonu Adna Cosmetics stane 40 €, masaža zgornjega hrbta z vratom (30 minut) pa 20 €.',
      },
      {
        q: 'Kaj vključuje klasična masaža telesa?',
        a: 'Klasična masaža telesa traja 60 minut in vključuje masažo hrbta ter rok in nog spredaj in zadaj.',
      },
      {
        q: 'Katero masažo naj izberem, če me bolita vrat in ramena?',
        a: 'Za napetost v vratu in ramenih je najprimernejša masaža zgornjega hrbta z vratom — traja 30 minut in stane 20 €.',
      },
      {
        q: 'Kako se naročim na masažo?',
        a: 'Termin rezerviraš prek obrazca na strani Kontakt, po e-pošti adnaacosmetics@gmail.com ali prek Instagrama @adnaa_cosmetics. Delam po dogovoru, od ponedeljka do petka.',
      },
    ],
    serviceName: 'Masaža',
    serviceDescription:
      'Klasična masaža telesa (60 min) in masaža zgornjega hrbta z vratom (30 min) v kozmetičnem salonu na Vrhniki.',
    minPrice: 20,
    maxPrice: 40,
  },
};
