import type { FaqItem } from './services';

/**
 * Splošna vprašanja za domačo stran (storitve, naročanje, delovni čas, lokacija, komu je salon namenjen).
 * Vprašanja o cenah posameznih storitev so na podstraneh storitev (brez podvajanja FAQ med stranmi).
 */
export const homeFaqs: FaqItem[] = [
  {
    q: 'Katere storitve ponuja Adna Cosmetics?',
    a: 'Adna Cosmetics je kozmetični salon na Vrhniki, ki ponuja manikuro, pedikuro, lash lift in laminacijo obrvi, depilacijo z voskom ter masažo.',
  },
  {
    q: 'Kako se naročim v salon Adna Cosmetics?',
    a: 'Naročiš se prek obrazca na strani Kontakt, po e-pošti (adnaacosmetics@gmail.com) ali prek Instagrama @adnaa_cosmetics. Termin ti nato potrdim osebno.',
  },
  {
    q: 'Kakšen je delovni čas salona?',
    a: 'Salon deluje po dogovoru od ponedeljka do petka. Ob sobotah, nedeljah in praznikih je zaprto.',
  },
  {
    q: 'Kje se salon nahaja?',
    a: 'Salon je na Vrhniki. Točen naslov ti posredujem ob potrditvi rezervacije termina.',
  },
  {
    q: 'Ali je za obisk potrebna rezervacija?',
    a: 'Da, delam izključno po naročilu. Ob odpovedi manj kot 24 ur pred terminom se zaračuna 100 % vrednosti storitve, pri odpovedi 24–48 ur prej pa 50 %.',
  },
  {
    q: 'Komu je salon namenjen?',
    a: 'Salon je namenjen izključno ženskam. Dobrodošla je vsaka, ki si želi malo razvajanja.',
  },
];
