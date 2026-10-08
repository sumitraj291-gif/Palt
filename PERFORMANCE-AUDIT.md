# Phase 6 Performance Audit — Before Changes

Audit date: 2026-10-08

This records the repository state before Phase 6 implementation changes.

## Stack and assets

- Next.js `^16.4.0`, React and React DOM `^19.3.0`, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.
- Local raster images under `public/images/`:
  - `hero/chardham-hero2.png`: 3,837,906 bytes, 1802×872.
  - `hero/chardham-hero.png`: 3,537,084 bytes, 1671×941.
  - `hero/taxi-service-hero.png`: 2,485,515 bytes, 1672×941.
  - `logo-light.png`: 21,012 bytes, 405×213.
  - Remaining image subdirectories contain only `.gitkeep` files.
- The homepage hero uses the three large PNGs as CSS background images in a client-side Framer Motion slider. The Chardham homepage and detail sections use local images. Most destination, fleet, and package-card imagery is loaded from Unsplash.
- `next/image` is already used by route, tour-detail, and Chardham landing components; `next.config.mjs` permits `images.unsplash.com`.
- Raw `<img>` usage before changes: `Destinations.tsx`, `Fleet.tsx`, `TourPackages.tsx`, plus the site header/footer logos. External Unsplash images are currently loaded natively in the first three components.

## Fonts, CSS, and runtime

- `app/layout.tsx` loads Inter and Manrope through `next/font/google`, while `app/globals.css` separately imports DM Sans and Manrope from Google Fonts.
- Global CSS uses DM Sans for body text and Manrope for headings. Inter is configured on the body but its variable is not referenced in CSS. This creates duplicate/unneeded font loading.
- `app/globals.css` is approximately 50.8 KB and 6,463 lines. A single Google Fonts `@import` is at its beginning. It contains substantial legacy/section styling; no broad CSS deletion is justified without class-usage analysis.
- Client components found: `Hero` (state, timer, Framer Motion slider), `Header` (mobile menu/dropdown state), `BookingForm` (submission state and WhatsApp window flow), and `BookingLink` (pathname-aware target). Their interactivity is currently required.
- External resources include Google Fonts CSS, Unsplash images, Google Maps embeds, and WhatsApp links. No standalone third-party script was found in the inspected application code.

## SEO and routing

- `metadataBase` and structured business URLs use `https://paltravel.co.in`; the shared SEO helper sets canonical, Open Graph, and Twitter metadata for pages using it.
- Robots allows the site, disallows `/api/`, and points to `https://paltravel.co.in/sitemap.xml`.
- Sitemap enumerates the implemented base pages, taxi services, ten route pages, six tour detail pages, destinations, and five Chardham pages.
- Structured data includes a `TravelAgency` in the root layout and `BreadcrumbList` on route/Chardham landing pages. FAQ content is visible; FAQPage JSON-LD is not currently emitted.
- No old-domain reference was found in the inspected application paths. A repository-wide source check is part of final validation.
- No baseline production/Lighthouse/Core Web Vitals measurements have yet been collected; performance effects must not be represented as measured vitals.
