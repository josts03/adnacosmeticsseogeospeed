/**
 * srcSet iz obstoječih variant slike: -800 za mobilne, -1200 (če je izvorna širina > 1300)
 * in polna širina. Variante generiramo vnaprej in commitamo v public/.
 */
export function srcSetFor(src: string, width: number): string {
  const base = src.replace('.webp', '');
  const parts = [`${base}-800.webp 800w`];
  if (width > 1300) parts.push(`${base}-1200.webp 1200w`);
  parts.push(`${src} ${width}w`);
  return parts.join(', ');
}
