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
JSON-LD v `<head>`, zapiše `dist/404.html` in generira `dist/sitemap.xml`. Build pade, če kateri
strani manjka title/description ali če se podvajajo.

**Nova stran** = nov vnos v `src/routes.ts` (ruta, prerender in sitemap so s tem pokriti) +
`<SEO>` komponenta na strani. Na Vercelu `cleanUrls` servira `/cenik` iz `cenik.html`,
neobstoječe poti pa dobijo pravi 404.

## Kontaktni obrazec

Obrazec pošilja povpraševanja prek storitve [Formspree](https://formspree.io/).
Endpoint je nastavljen v `src/pages/Contact.tsx`.
