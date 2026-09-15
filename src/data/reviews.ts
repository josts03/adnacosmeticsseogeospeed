export interface Review {
  text: string;
  name: string;
  city: string;
  initial: string;
  stars: number;
}

export const reviews: Review[] = [
  { text: 'Samozavestna punca k ve kaj dela, tvoja sproscenost se pa cuti ze ko vstopis v salon in zato je sama storitev bolj prijetna😙.', name: 'Nika P.', city: 'Vrhnika', initial: 'N', stars: 5 },
  { text: 'Meni je ambient super☺️bi mogoče dodala še kakšno ambientno svetlobo😅 Drugače sem pa vedno zelo sproščena in vedno se prilagodiš mojim željam😊', name: 'Brina I.', city: 'Ljubljana', initial: 'B', stars: 4 },
  { text: 'Top izkusnja vsakic! Na nohte in depilacijo hodim samo se sem, punca je res prijazna, natancna in vsakic naredi res super vzdusje. Vedno se dobro pocutim, rezultat je pa tocno tak, kot si ga zelim. Priporocam vsem, ki iscejo kakovostne storitve in dober in prijeten odnos❤️', name: 'Nina S.', city: 'Ljubljana', initial: 'N', stars: 5 },
  { text: 'Super si, ful dobre nohtke delas in res se vidi da se izobrazujes redno! 💖💅🏼', name: 'Ula L.', city: 'Ljubljana', initial: 'U', stars: 5 },
  { text: 'Top of the top, ocena 5', name: 'Ema V.', city: 'Brezovica', initial: 'E', stars: 5 },
  { text: 'Vedno vesela, nasmejana in družabna, izpolnjuješ želje brez vprašanj. Čista 5 ❤️', name: 'Lejla R.', city: 'Idrija', initial: 'L', stars: 5 },
  { text: 'Tvoji nohti so mi zmeraj drzali, noben ni nikoli odstopil, tudi ce sem jih imela dlje casa gor se noben ni zlomil, toptoptop', name: 'Zoja B.', city: 'Logatec', initial: 'Z', stars: 5 },
  { text: 'Vzdusje na terminu je zelo prijetno, za smeh je vedno poskrbljeno. Sami nohti so narejeni hitro, za ugodno ceno in zelo lepo, vedno po mojih zeljah. Sam salon pa je zelo lepo urejen s prijetno temperaturo in ozracjem.', name: 'Eva D.', city: 'Ljubljana', initial: 'E', stars: 5 },
];

/** Število mnenj in povprečna ocena (1 decimalka) – za vidni napis in AggregateRating schemo na domači strani. */
export const reviewStats = {
  count: reviews.length,
  average: Number((reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1)),
};
