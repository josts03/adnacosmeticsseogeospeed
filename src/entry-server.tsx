/**
 * Strežniški vstop za prerender ob buildu (scripts/prerender.mjs).
 *
 * Za vsak URL vrne HTML vsebine (#root) in značke za <head>. Uporablja
 * react-dom/static `prerender`, ki počaka, da se razrešijo vse lazy() rute
 * (Suspense), preden vrne HTML.
 *
 * Kako pridejo značke v <head>: pod Reactom 19 react-helmet-async ne polni
 * strežniškega konteksta, ampak <title>, <meta> in <link> renderira kot navadne
 * elemente, React 19 pa jih obravnava kot "hoistable" in jih v SSR izhodu izpiše
 * na začetku, pred vsebino. Tu ta prefiks ločimo od vsebine; ob hidraciji jih
 * React 19 poišče v <head> dokumenta, zato morajo tam tudi biti.
 */
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppShell } from './App';

export { routes } from './routes';

export interface RenderResult {
  /** Vsebina, ki gre v <div id="root">. */
  html: string;
  /** Značke za <head> (nadomestijo <!--app-head--> v index.html). */
  head: string;
}

// Zaporedje <title>, <meta> in <link> značk na samem začetku izhoda.
const HOISTED_PREFIX = /^(?:\s*(?:<title[^>]*>[^<]*<\/title>|<meta\s[^>]*\/?>|<link\s[^>]*\/?>))+/;

export async function render(url: string): Promise<RenderResult> {
  const { prelude } = await prerender(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
    {
      // Fizz sicer Suspense meje, večje od ~12,8 KB, izpiše kot skrit segment
      // (<div hidden id="S:0"> + inline skripta, ki ga prikaže). Za statični HTML
      // hočemo vso vsebino inline in vidno tudi brez JS-a.
      progressiveChunkSize: 1 << 30,
    },
  );

  const output = await new Response(prelude).text();
  const prefix = HOISTED_PREFIX.exec(output)?.[0] ?? '';
  const html = output.slice(prefix.length);

  if (html.includes('<title')) {
    throw new Error(
      `render(${url}): <title> ni na začetku izhoda, ampak sredi vsebine – React je spremenil način dvigovanja značk; prilagodi entry-server.tsx.`,
    );
  }
  if (/<div hidden id="S:|<template id="B:|<script>\$R/.test(html)) {
    throw new Error(
      `render(${url}): vsebina je v skritem Suspense segmentu (streaming oblika) – preveri progressiveChunkSize v entry-server.tsx.`,
    );
  }

  // Ena značka na vrstico, da je prerenderan <head> berljiv.
  const head = prefix.trim().replace(/></g, '>\n    <');
  return { html, head };
}
