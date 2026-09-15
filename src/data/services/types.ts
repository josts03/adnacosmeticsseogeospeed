export type ServiceId = 'manikura' | 'pedikura' | 'lash-lift-in-obrvi' | 'depilacija' | 'masaza';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Tailwind object-position razred (npr. 'object-top'), če motiv ni na sredini. */
  position?: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Step {
  title: string;
  text: string;
}

/**
 * Podstoritev znotraj storitve (npr. "Permanentno lakiranje" pri manikuri) – en blok
 * na podstrani: naslov, kratek opis, "Preberi več" z dodatnimi odstavki in slikami.
 */
export interface SubService {
  /** Sidro na podstrani, npr. 'permanentno-lakiranje'. */
  id: string;
  title: string;
  /** Vedno viden odstavek. */
  summary: string;
  /** Odstavki pod "Preberi več". */
  details: string[];
  /** Slika ob bloku (izmenično levo/desno). */
  image?: ImageAsset;
  /** Dodatne slike v razširjenem delu. */
  extraImages?: ImageAsset[];
}

/**
 * Ena storitev = en objekt. Iz njega se generirajo: kartica na domači strani in hubu,
 * sekcija na domači strani, podstran storitve, sekcija v ceniku, možnost v kontaktnem
 * obrazcu, Service/FAQ/Breadcrumb schema in vnos v sitemap.
 */
export interface Service {
  /** Stabilen ID; je tudi sidro (#manikura), ki ga uporabljajo obstoječe povezave. */
  id: ServiceId;
  /** Del URL-ja podstrani, npr. 'manikura-vrhnika'. */
  slug: string;
  /** Pot podstrani, npr. '/manikura-vrhnika'. */
  path: string;
  /** Ime storitve, kot ga vidi stranka (kartice, cenik, obrazec). */
  name: string;
  /** H1 podstrani, npr. 'Manikura na Vrhniki'. */
  h1: string;
  /** Kratka oblika za navigacijo in footer. */
  navLabel: string;
  /** Vrednost v kontaktnem obrazcu (pošlje se na Formspree). */
  formValue: string;
  /** Ikona za kartice (public/). */
  icon: string;
  /** Odstopajoča velikost ikone, če je ikona vizualno drugačna. */
  iconClassName?: string;
  /** Tip storitve za Service schemo. */
  serviceType: string;
  seo: {
    title: string;
    description: string;
  };
  /** Napisi v pravilnem sklonu (slovenščina se ne da zanesljivo generirati). */
  labels: {
    /** Gumb/povezava na podstran, npr. 'Več o manikuri'. */
    more: string;
    /** H2 sekcije "Kaj vključuje", npr. 'Kaj vključuje manikura?'. */
    overview: string;
    /** H2 cenika na podstrani, npr. 'Cenik manikure'. */
    prices: string;
    /** H2 FAQ na podstrani, npr. 'Pogosta vprašanja o manikuri'. */
    faq: string;
  };
  hero: {
    intro: string;
    image: ImageAsset;
  };
  /** Kratek opis za kartice. */
  cardText: string;
  /** Kratek opis za hub in domačo stran – odstavki. */
  overview: string[];
  /** Bloki podstoritev na podstrani (vrstni red = vrstni red prikaza). */
  subservices: SubService[];
  /** "Kako poteka termin" – koraki. */
  process: Step[];
  /** "Nega doma in dobro je vedeti". */
  tips: Step[];
  prices: PriceItem[];
  priceNote?: string;
  /** Razpon cen za schemo (EUR). */
  priceRange: { min: number; max: number };
  gallery: ImageAsset[];
  faq: FaqItem[];
}
