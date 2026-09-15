const LOCALE = 'sl-SI';

const up = (s: string) => s.toLocaleUpperCase(LOCALE);
const low = (s: string) => s.toLocaleLowerCase(LOCALE);

/**
 * Besedilo velja za "kričeče" (ALL-CAPS) le, če ima vsaj tri črke
 * in med njimi ni nobene male. Kratice kot "OK" ali "SMS" pustimo pri miru.
 */
export function isShouting(value: string): boolean {
  const letters = value.match(/\p{L}/gu);
  return !!letters && letters.length >= 3 && !/\p{Ll}/u.test(value);
}

/** "JANEZ NOVAK-KOVAČ" -> "Janez Novak-Kovač" */
export function toTitleCase(value: string): string {
  return low(value).replace(
    /\p{L}[\p{L}\p{M}']*/gu,
    (word) => up(word[0]) + word.slice(1)
  );
}

/** "RADA BI TERMIN. LAHKO V PETEK?" -> "Rada bi termin. Lahko v petek?" */
export function toSentenceCase(value: string): string {
  return low(value).replace(
    /(^|[.!?]\s+|\n\s*)(\p{Ll})/gu,
    (_, prefix: string, letter: string) => prefix + up(letter)
  );
}

/**
 * Počisti vnos: odveč presledke vedno, ALL-CAPS pa samo kadar je res ALL-CAPS.
 * Formspree (Formshield) sicer takšna sporočila označi kot spam.
 */
export function normalizeField(value: string, style: 'title' | 'sentence'): string {
  const trimmed = value.trim().replace(/[ \t]{2,}/g, ' ');
  if (!isShouting(trimmed)) return trimmed;
  return style === 'title' ? toTitleCase(trimmed) : toSentenceCase(trimmed);
}
