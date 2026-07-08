/**
 * Build-time prerendering (SSG).
 * Po `vite build` (client) in `vite build --ssr` (server bundle) za vsako pot
 * zgenerira statičen HTML z vsebino, title/meta (React 19 native metadata)
 * in JSON-LD strukturiranimi podatki.
 *
 * Rezultat: vsaka pot ima popoln HTML še PREDEN se izvede JavaScript —
 * vidno za Google, SEO checkerje in AI crawlerje (GPTBot, ClaudeBot, PerplexityBot).
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const routes = [
  '/',
  '/o-meni',
  '/storitve',
  '/cenik',
  '/kontakt',
  '/manikura-vrhnika',
  '/pedikura-vrhnika',
  '/lash-lift-laminacija-obrvi-vrhnika',
  '/depilacija-vrhnika',
  '/masaza-vrhnika',
  '/politika-zasebnosti',
  '/pogoji-poslovanja',
];

const { render } = await import(
  new URL(path.join(dist, 'server', 'entry-server.js'), 'file://').href
);

const template = readFileSync(path.join(dist, 'index.html'), 'utf-8');

// SEO komponenta renderira <title>/<meta>/<link> znotraj aplikacije (React 19
// native metadata). Pri prerenderingu jih izluščimo iz body HTML-ja in
// prestavimo v <head>, statična title + description iz template pa odstranimo.
const METADATA_RE =
  /<title[^>]*>[\s\S]*?<\/title>|<meta\s[^>]*?\/?>|<link\s[^>]*?rel="(?:canonical|alternate)"[^>]*?\/?>/g;

for (const route of routes) {
  const { html } = await render(route);

  const headTags = html.match(METADATA_RE) ?? [];
  const body = html.replace(METADATA_RE, '');

  if (!headTags.some((t) => t.startsWith('<title'))) {
    throw new Error(`Route ${route}: rendered HTML has no <title> — is <SEO> missing?`);
  }

  let page = template
    // odstrani statični (fallback) title + description, da nista podvojena
    .replace(/[ \t]*<title>[\s\S]*?<\/title>\n?/, '')
    .replace(/[ \t]*<meta name="description"[^>]*>\n?/, '')
    .replace('</head>', `    ${headTags.join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outDir = route === '/' ? dist : path.join(dist, route.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, 'index.html'), page, 'utf-8');
  console.log(`✓ prerendered ${route} (${(page.length / 1024).toFixed(1)} kB, ${headTags.length} head tags)`);
}

// Server bundle ne sme v produkcijo
rmSync(path.join(dist, 'server'), { recursive: true, force: true });
console.log(`\nPrerendered ${routes.length} routes.`);
