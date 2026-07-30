# ManHair Online

Marketing site for **ManHair Online** — premium non-surgical men's hair replacement, relocated to **Orange County, California**.

- **Studio:** 20 Heron, Lake Forest, CA 92630 (by appointment only)
- **Phone:** (904) 673-7587
- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript
- **Deploy:** Vercel

## Highlights

- **Programmatic local SEO** — 4 services × 38 Orange County cities = 152 auto-generated city landing pages under `/{service}-{city}-ca/`, wired into the sitemap with unique copy, FAQ schema, and internal linking.
- **Central business config** in `app/lib/site.ts` (single source of truth for NAP, navigation, services).
- **Schema.org JSON-LD** — `HairSalon`/`LocalBusiness`, `Service`, `BreadcrumbList`, and `FAQPage`.
- File-based `sitemap.ts`, `robots.ts`, and dynamic OpenGraph image.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (prerenders all pSEO pages)
```

## Editing content

| What | Where |
| --- | --- |
| Business name / address / phone / hours | `app/lib/site.ts` |
| Navigation & core services | `app/lib/site.ts` |
| Orange County cities | `app/lib/pseo/locations.ts` |
| Programmatic services + city-page copy | `app/lib/pseo/services.ts` |
| Brand colors / fonts | `app/globals.css` |

## Notes for launch

- Brand colors (red `#B71C1C` / `#DB2020`, deep red `#660000`) and Roboto / Roboto Slab fonts mirror the original ManHair brand.
- The logo is rendered as a typographic lockup + `MH` monogram (`public/brand/logo-mark.svg`). Drop in a final logo asset when available.
- `app/components/ContactForm.tsx` captures leads client-side only — wire it to your CRM / GoHighLevel / email endpoint before launch.
- Replace the placeholder Before & After cards with real client photos.
- Confirm the production domain in `app/lib/site.ts` (`SITE_URL`).
