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
npm run build      # ustvari produkcijsko različico v mapi dist/
npm run preview    # lokalni predogled produkcijske različice
```

## Kontaktni obrazec

Obrazec pošilja povpraševanja prek storitve [Formspree](https://formspree.io/).
Endpoint je nastavljen v `src/pages/Contact.tsx`.
