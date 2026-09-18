/** Osnovni podatki o salonu – en vir za SEO, schemo, footer in kontakt. */
export const SITE_URL = 'https://www.adnacosmetics.si';
export const SITE_NAME = 'Adna Cosmetics';
export const CITY = 'Vrhnika';
export const EMAIL = 'adnaacosmetics@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/adnaa_cosmetics/';
export const INSTAGRAM_HANDLE = '@adnaa_cosmetics';

/** Kraji, od koder prihajajo stranke (schema areaServed, uvodi, llms.txt). Prvi je sedež salona. */
export const AREA_SERVED = ['Vrhnika', 'Ljubljana', 'Logatec', 'Borovnica', 'Brezovica'];

/** Salon posluje samo z gotovino (pogoji poslovanja) – »Na kratko« (imenovalnik); schema ima paymentAccepted. */
export const PAYMENT_LABEL = 'gotovina';
/** Isto v orodniku za stavke: »plačilo je z gotovino« (hub, llms.txt). */
export const PAYMENT_WITH = 'z gotovino';

/**
 * Naročanje: izključno po dogovoru. Telefon, naslov in delovni čas z urami niso objavljeni,
 * dokler ne pridejo papirji (glej načrt) – takrat jih dodaj sem in v index.html (schema).
 */
export const BOOKING_LABEL = `po dogovoru (pon–pet), prek obrazca na strani Kontakt ali Instagrama ${INSTAGRAM_HANDLE}`;

/** @id entitet v site-wide JSON-LD grafu (index.html). */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/#founder`;
export const OFFERS_ID = `${SITE_URL}/#offers`;

/**
 * Ustanoviteljica – en vir za stran O meni, bloke »Zakaj k meni« in llms.txt.
 * Person schema z istimi vrednostmi je statično v index.html (#founder); ob spremembi posodobi oboje.
 * Priimek je odobren za objavo (15. 9. 2026).
 */
export const FOUNDER = {
  name: 'Adna Hadžalić',
  givenName: 'Adna',
  familyName: 'Hadžalić',
  jobTitle: 'Kozmetičarka',
  /** Leta izkušenj, kot na strani O meni (»pet let izkušenj«). */
  yearsExperience: 5,
  /** Število strokovnih izobraževanj, kot na strani O meni (»več kot 20 izobraževanj«). */
  trainings: 20,
  /** Uradno ime šole (VSŠKV). */
  school: 'Višja strokovna šola za kozmetiko in velnes Ljubljana',
  image: '/profilna-slika.webp',
  path: '/o-meni',
} as const;

/**
 * Enoten napis za glavni poziv k naročanju (navigacija, hero, podstrani, cenik, 404, CTA sekcija).
 * Oddaja obrazca ima svoj napis (»Pošlji povpraševanje«), ker je druga akcija.
 */
export const CTA_LABEL = 'Naroči se';
