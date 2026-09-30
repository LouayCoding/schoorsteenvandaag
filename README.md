# Schoorsteenservice — directschoorsteenvegen.nl

Marketingsite voor een landelijk netwerk van schoorsteenvegers. Gebouwd met
Next.js (App Router), Tailwind CSS 4 en TypeScript.

## Starten

```bash
npm install
cp .env.example .env.local   # vul SMTP_PASS in
npm run dev
```

## Structuur

| Map | Inhoud |
|---|---|
| `app/` | Routes: home, diensten (+detail), tarieven, werkgebied (+383 stadspagina's), reviews, afspraak, contact, over-ons, privacy, voorwaarden |
| `components/` | Header, Footer, AppointmentForm (zod-validatie, honeypot, POST naar `/api/afspraak`), Reveal (scroll-animatie), secties |
| `lib/` | Data (diensten, steden, reviews), zod-schema, UI-tokens |
| `scripts/optimize-images.mjs` | Zet bron-PNG's om naar WebP |

## Belangrijk

- **Thema**: dark/light via `data-theme` op `<html>`, initieel gezet door inline script (geen flash). Kleuren staan als tokens in `app/globals.css`.
- **Analytics**: GA/GTM laden pas na toestemming via `CookieConsent`.
- **Stadspagina's**: `lib/steden.ts` genereert per stad unieke tekstblokken, lokale FAQ en buurgemeenten.
- **Afbeeldingen**: gebruik `.webp`-varianten in `public/`; draai `node scripts/optimize-images.mjs` na het toevoegen van nieuwe bron-PNG's.

## Deploy

Gemaakt voor Vercel: `npm run build`. Zet de SMTP-variabelen uit `.env.example` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM`) in de Vercel-projectinstellingen. Het afspraakformulier stuurt server-side mail via SSL/TLS SMTP naar `info@directschoorsteenvegen.nl`.
