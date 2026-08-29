# Boquete Taxi Cab — Next.js site

Next.js (App Router, TypeScript) port of the HTML template in the parent folder.
The original design is preserved: `src/app/globals.css` is the template's
`assets/site.css`, so any CSS tweak still lands the same way.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

| Path | What it is |
| --- | --- |
| `src/app/layout.tsx` | `<html>`/`<body>`, header, sticky contact bar, language bootstrap |
| `src/app/page.tsx` | Home (`/`) |
| `src/app/airport-transfers/page.tsx` | `/airport-transfers` |
| `src/app/boquete-taxi/page.tsx` | `/boquete-taxi` |
| `src/app/tours/page.tsx` | `/tours` |
| `src/app/rates/page.tsx` | `/rates` — prices live in the `RATES` array |
| `src/app/book-now/page.tsx` | `/book-now` |
| `src/app/about/page.tsx` | `/about` |
| `src/components/` | Header, footer, sticky bar, hero canvas, booking form, `<T>` |
| `src/lib/site.ts` | Phone, WhatsApp, email, nav links — edit contact details here |

Bilingual copy uses `<T en="..." es="..." />`, which renders both strings and
lets CSS (`body[data-lang]`) show the active one, same as the template.

## Deploy to Vercel

The Next.js app lives in the `app/` subfolder of the repository, so:

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Set **Root Directory** to `app`.
3. Framework preset: Next.js (detected). Build command and output are default.

Or from this folder: `npx vercel` (first deploy) and `npx vercel --prod`.

## Before going live

- Replace the placeholder phone/WhatsApp/email in `src/lib/site.ts`.
- Replace `$XX` placeholder prices in `src/app/rates/page.tsx`.
- Set `SITE_URL` in `src/lib/site.ts` to the real domain.
- Swap the Google review placeholders on the home page for verified reviews.
- The booking form currently prepares a WhatsApp message; wire it to email/CRM
  when that is decided (`src/components/BookingForm.tsx`).
