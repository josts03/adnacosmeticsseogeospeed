/**
 * Prerender vseh rut v statične HTML datoteke + generiranje sitemap.xml.
 *
 * Teče po `vite build` (klient → dist/) in `vite build --ssr` (strežnik → .ssr/):
 *   1. prebere dist/index.html kot šablono,
 *   2. za vsako ruto iz src/routes.ts izrenderira aplikacijo (StaticRouter),
 *      v šablono vstavi <head> značke iz Helmeta in HTML vsebine v #root,
 *      ter zapiše dist/<pot>.html (koren → dist/index.html; Vercel cleanUrls),
 *   3. izrenderira stran 404 v dist/404.html (Vercel jo servira s statusom 404),
 *   4. zapiše dist/sitemap.xml iz istih rut in dist/llms.txt iz podatkov storitev (GEO),
 *   5. preveri: vsaka stran ima <title>, description in canonical; naslovi so unikatni.
 *
 * Če karkoli manjka, build pade – bolje glasna napaka kot deploy s praznim HTML-jem.
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SSR_DIR = join(ROOT, '.ssr');
const SITE_URL = 'https://www.adnacosmetics.si';
const HEAD_MARK = '<!--app-head-->';
const ROOT_MARK = '<div id="root"></div>';
const TITLE_MAX = 60;

const templatePath = join(DIST, 'index.html');
const entryPath = join(SSR_DIR, 'entry-server.js');

if (!existsSync(templatePath)) fail(`Manjka ${templatePath} – najprej zaženi "vite build".`);
if (!existsSync(entryPath)) fail(`Manjka ${entryPath} – najprej zaženi "vite build --ssr src/entry-server.tsx --outDir .ssr".`);

const template = readFileSync(templatePath, 'utf8');
if (!template.includes(HEAD_MARK)) fail(`index.html nima označbe ${HEAD_MARK}.`);
if (!template.includes(ROOT_MARK)) fail(`index.html nima ${ROOT_MARK}.`);

const { render, routes, services, homeFaqs, site } = await import(pathToFileURL(entryPath).href);

const pages = [];

async function writePage(url, outFile) {
  const { html, head } = await render(url);

  if (!html.trim()) fail(`Prazen render za ${url}.`);
  const title = decodeEntities(match(head, /<title[^>]*>([^<]*)<\/title>/));
  const description = decodeEntities(match(head, /<meta[^>]*name="description"[^>]*content="([^"]*)"/));
  const canonical = match(head, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/);
  if (!title) fail(`Manjka <title> za ${url}.`);
  if (!description) fail(`Manjka meta description za ${url}.`);
  if (!canonical) fail(`Manjka canonical za ${url}.`);
  if (title.length > TITLE_MAX) console.warn(`  ⚠ ${url}: title ima ${title.length} znakov (> ${TITLE_MAX}): "${title}"`);

  const page = template.replace(HEAD_MARK, head).replace(ROOT_MARK, `<div id="root">${html}</div>`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, page);
  pages.push({ url, title, description, canonical, bytes: page.length });
}

// 1. Vse rute iz src/routes.ts → dist/<pot>.html (Vercel "cleanUrls": /cenik servira cenik.html,
//    /cenik.html preusmeri na /cenik; enako najde tudi `vite preview`).
for (const route of routes) {
  const outFile = route.path === '/' ? templatePath : join(DIST, `${route.path.replace(/^\//, '')}.html`);
  await writePage(route.path, outFile);
}

// 2. Stran 404 (ruta "*"); URL mora biti tak, da ne zadene nobene prave rute.
await writePage('/404', join(DIST, '404.html'));

// 3. Unikatni naslovi in opisi (razen 404, ki je noindex)
const indexable = pages.filter((p) => p.url !== '/404');
for (const key of ['title', 'description']) {
  const seen = new Map();
  for (const p of indexable) {
    if (seen.has(p[key])) fail(`Podvojen ${key} na ${seen.get(p[key])} in ${p.url}: "${p[key]}"`);
    seen.set(p[key], p.url);
  }
}
for (const p of indexable) {
  const expected = `${SITE_URL}${p.url === '/' ? '/' : p.url}`;
  if (p.canonical !== expected) fail(`Canonical na ${p.url} je "${p.canonical}", pričakovano "${expected}".`);
}

// 4. sitemap.xml iz istih rut
const sitemapEntries = routes
  .filter((r) => r.sitemap)
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.sitemap.lastmod}</lastmod>
    <changefreq>${r.sitemap.changefreq}</changefreq>
    <priority>${r.sitemap.priority.toFixed(1)}</priority>
  </url>`,
  );
writeFileSync(
  join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`,
);

// 4b. llms.txt – strnjen, strojno berljiv povzetek strani za AI iskalnike (GEO).
//     Nastane iz istih podatkov kot strani (storitve, cene, FAQ), zato nikoli ne zastara.
const nearby = site.AREA_SERVED.filter((place) => place !== site.CITY);
const llms = [
  `# ${site.SITE_NAME}`,
  '',
  `> Kozmetični salon na Vrhniki (Slovenija), ki ga vodi ${site.FOUNDER.jobTitle.toLowerCase()} ${site.FOUNDER.name}. Manikura, pedikura, lash lift in laminacija obrvi, depilacija z voskom in masaža. Delo izključno po naročilu, plačilo ${site.PAYMENT_WITH}.`,
  '',
  `Stranke prihajajo z Vrhnike in iz krajev ${nearby.join(', ')}. Naročanje: ${site.BOOKING_LABEL}. E-pošta: ${site.EMAIL}. Instagram: ${site.INSTAGRAM_URL}`,
  '',
  '## Storitve',
  '',
  ...services.map(
    (s) => `- [${s.h1}](${SITE_URL}${s.path}): ${s.hero.intro} Cenik: ${s.prices.map((p) => `${p.name} ${p.price}`).join(', ')}.`,
  ),
  '',
  '## Ostale strani',
  '',
  `- [Vse storitve](${SITE_URL}/storitve): pregled vseh storitev s povezavami na podstrani.`,
  `- [Cenik](${SITE_URL}/cenik): celoten cenik in pogoji odpovedi termina.`,
  `- [O meni](${SITE_URL}${site.FOUNDER.path}): ${site.FOUNDER.name}, ${site.FOUNDER.jobTitle.toLowerCase()}, ${site.FOUNDER.yearsExperience}+ let izkušenj, ${site.FOUNDER.trainings}+ strokovnih izobraževanj, ${site.FOUNDER.school}.`,
  `- [Kontakt in naročanje](${SITE_URL}/kontakt)`,
  `- [Pogoji poslovanja](${SITE_URL}/pogoji-poslovanja)`,
  '',
  '## Pogosta vprašanja',
  '',
  ...homeFaqs.map((f) => `- **${f.q}** ${f.a}`),
].join('\n');
writeFileSync(join(DIST, 'llms.txt'), `${llms}\n`);

// 5. Strežniški bundle ne sme v deploy
rmSync(SSR_DIR, { recursive: true, force: true });

console.log('\nPrerender končan:');
for (const p of pages) {
  console.log(`  ${p.url.padEnd(22)} ${String(p.bytes).padStart(7)} B  ${p.title}`);
}
console.log(`  sitemap.xml: ${sitemapEntries.length} URL-jev, llms.txt: ${services.length} storitev\n`);

function match(text, re) {
  const m = re.exec(text);
  return m ? m[1] : '';
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function fail(message) {
  console.error(`\n✖ prerender: ${message}\n`);
  process.exit(1);
}
