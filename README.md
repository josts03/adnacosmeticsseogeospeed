# Adna Cosmetics

Spletna stran kozmetičnega salona **Adna Cosmetics** z Vrhnike — predstavitev storitev
(manikura, pedikura, lash lift in obrvi, depilacija, masaža), cenik in kontaktni obrazec.

Zgrajeno z React, Vite, TypeScript in Tailwind CSS.

## Zagon lokalno

**Zahteve:** Node.js 18+

1. Namesti odvisnosti:
   ```bash
   npm install
   ```
2. Zaženi razvojni strežnik:
   ```bash
   npm run dev
   ```
   Stran je dostopna na `http://localhost:3000`.

## Gradnja za produkcijo

```bash
npm run build      # ustvari produkcijsko različico v mapi dist/ (vključno s prerenderjem)
npm run preview    # lokalni predogled produkcijske različice
```

`npm run build` naredi tri korake: `vite build` (klient), `vite build --ssr` (strežniški
bundle v `.ssr/`) in `node scripts/prerender.mjs`, ki vsako ruto iz `src/routes.ts`
izrenderira v statičen `dist/<pot>.html` z unikatnim `<title>`, meta opisom, canonicalom in
JSON-LD v `<head>`, zapiše `dist/404.html` ter generira `dist/sitemap.xml` in `dist/llms.txt`
(povzetek storitev, cen in FAQ za AI iskalnike). Build pade, če kateri strani manjka
title/description ali če se podvajajo.

**Nova stran** = nov vnos v `src/routes.ts` (ruta, prerender in sitemap so s tem pokriti) +
`<SEO>` komponenta na strani. Na Vercelu `cleanUrls` servira `/cenik` iz `cenik.html`,
neobstoječe poti pa dobijo pravi 404.

**Nova storitev** = nova datoteka v `src/data/services/` + vnos v `index.ts`; iz nje nastanejo
kartica, blok na hubu `/storitve`, podstran (z blokom »Na kratko«), cenik, sitemap, schema in llms.txt.
Ob spremembi besedila ali cen posodobi `modified` (gre v sitemap in schemo).

## Podatki o salonu, schema in pisave

- `src/data/site.ts` – en vir za ime, e-pošto, Instagram, kraje, ustanoviteljico in @id entitet.
  Telefon, naslov in delovni čas z urami niso objavljeni; ob dodajanju jih vpiši sem in v
  site-wide JSON-LD v `index.html` (BeautySalon `#business`, Person `#founder`).
- `src/lib/schema.ts` – grafi za hub (CollectionPage + ItemList), podstrani (Service, WebPage z
  datumi, FAQ), domačo stran (FAQ + ocene) in navadne strani (AboutPage, ContactPage).
- Pisavi Inter in Playfair Display sta gostovani lokalno (`public/fonts/`, OFL licenca, variabilni
  woff2 z Google Fonts); `@font-face` je v `src/index.css`, prednalaganje v `index.html`.
- Preloader zavesa se prikaže samo ob prvem obisku v seji in samo na domači strani.

## Kontaktni obrazec

Obrazec pošilja povpraševanja prek storitve [Formspree](https://formspree.io/).
Endpoint je nastavljen v `src/pages/Contact.tsx`.
