# Phase 6.5 — Lighthouse & Core Web Vitals Audit

Audit date: 2026-10-08  
Production URL tested: `https://paltravel.co.in/`  
Final canonical host observed: `https://www.paltravel.co.in/`

## 1. Executive Summary

The production homepage was audited with Lighthouse 13.5.0 against the live site. Mobile and desktop runs were performed sequentially to reduce contention between browser audits. No application files, routes, content, booking behavior, or business information were changed during this audit.

The sequential results show a strong desktop Lighthouse performance score and a weaker mobile result. Mobile LCP is above the 2.5-second “good” threshold used for Core Web Vitals assessment; lab CLS is zero in both runs. Lighthouse did not provide INP, and no CrUX field-data result was available in this audit.

The measured LCP candidate is the homepage hero heading, “Explore More. Travel Better.” The mobile LCP breakdown attributes most of its time to element render delay. The heading is inside an initially animated Framer Motion element, making first-render timing a high-priority investigation. Lighthouse also identifies a missing `/favicon.ico` request and image-byte savings. These findings are recommendations only; no unmeasured improvement is claimed.

## 2. Lighthouse Mobile Results

Lighthouse mobile emulation: Android 11 / Moto G Power (2022), Chrome 155.

| Category / metric | Result |
|---|---:|
| Performance | 77 |
| Accessibility | 96 |
| Best Practices | 96 |
| SEO | 100 |
| First Contentful Paint (FCP) | 2.4 s |
| Largest Contentful Paint (LCP) | 2.9 s |
| Speed Index | 5.0 s |
| Total Blocking Time (TBT) | 451 ms |
| Cumulative Layout Shift (CLS) | 0.000 |
| Interaction to Next Paint (INP) | Not reported |
| Time to Interactive | 3.0 s |
| Lighthouse network request entries | 21 |
| Resource-summary requests / transferred bytes | 19 / 381,610 bytes (~373 KiB) |

## 3. Lighthouse Desktop Results

Lighthouse desktop preset, Chrome 155.

| Category / metric | Result |
|---|---:|
| Performance | 98 |
| Accessibility | 92 |
| Best Practices | 96 |
| SEO | 100 |
| First Contentful Paint (FCP) | 0.5 s |
| Largest Contentful Paint (LCP) | 0.9 s |
| Speed Index | 1.4 s |
| Total Blocking Time (TBT) | 59 ms |
| Cumulative Layout Shift (CLS) | 0.000 |
| Interaction to Next Paint (INP) | Not reported |
| Time to Interactive | 0.9 s |
| Lighthouse network request entries | 64 |
| Resource-summary requests / transferred bytes | 62 / 834,072 bytes (~815 KiB) |

The Lighthouse network-request audit includes two more entries than the grouped resource summary in each run. The request counts and byte totals above identify which Lighthouse view they came from.

## 4. Core Web Vitals

| Vital | Mobile lab result | Desktop lab result | Assessment |
|---|---:|---:|---|
| LCP | 2.9 s | 0.9 s | Mobile is above the 2.5 s “good” threshold; desktop is within it. |
| CLS | 0.000 | 0.000 | Both runs are within the 0.1 “good” threshold. |
| INP | Not reported | Not reported | Lighthouse lab runs do not provide field INP here; no CrUX field data was available. |

TBT is a lab diagnostic, not a Core Web Vital. It measured 451 ms on mobile and 59 ms on desktop.

## 5. LCP Analysis

- Lighthouse identified `div.hero-content > h1` (“Explore More. Travel Better.”) as the LCP candidate.
- The mobile LCP breakdown reported approximately 2.65 s of element render delay, compared with approximately 0.17 s to first byte. The render delay dominates this mobile breakdown.
- The hero heading is mounted in a Framer Motion element with an initial opacity/vertical entrance animation. This is a specific candidate for delaying when the LCP text is visibly painted.
- Mobile LCP was 2.9 s. The desktop LCP was 0.9 s, but the desktop diagnostic breakdown reported subparts that do not reconcile with its total LCP; the total LCP metric is retained, while that breakdown is not used to draw a timing conclusion.
- The image-delivery audit estimated 35 KiB of mobile savings and 203 KiB of desktop savings. Desktop savings involved the local hero images that were downloaded during the audit; the hero carousel changes slides during longer audit sessions.

## 6. CLS Analysis

- Lighthouse measured CLS of 0.000 in both final sequential runs.
- An earlier concurrent desktop run reported a very small 0.00051 shift in the desktop navigation; that result did not reproduce in the final sequential run and is not treated as the baseline.
- The tested page keeps the hero section and content structure in place; no material layout shift was observed during the browser checks.

## 7. INP Analysis

- INP was not present in either Lighthouse report.
- No field-data source was available to measure real-user INP.
- TBT is reported above as a lab proxy for main-thread blocking only; it is not presented as INP.
- A manual click of the mobile navigation toggle opened the navigation at a 320 CSS-pixel viewport. No quantitative interaction latency was captured.

## 8. Image Analysis

- Lighthouse loaded the local WebP hero through Next Image optimization. The mobile hero response was approximately 44.8 KiB, with 35 KiB estimated potential savings.
- On desktop, the two hero images identified by Lighthouse were approximately 204 KiB and 163 KiB; the audit estimated about 203 KiB total image savings.
- The hero image is marked `priority` only for the initial slide. The logo is also rendered with `next/image`.
- Homepage sections use remote Unsplash image URLs. Browser validation decoded all 24 homepage images successfully; no image request failures were captured. Images have meaningful alternative text except the decorative hero background, which has empty alt text.
- Below-the-fold image requests are lazy by default through `next/image`; they were deliberately made eager only in the browser test to verify decoding.
- The browser reported a warning that the initial taxi hero image had been preloaded but was not used within a few seconds. The observed carousel transition may make that preload stale in longer sessions.

## 9. Font Analysis

- Fonts are served locally from the site’s Next.js immutable media paths; no Google Fonts request was observed.
- Lighthouse transferred three WOFF2 font resources totaling approximately 80.6 KiB in both runs.
- DM Sans and Manrope were observed in the browser font set. No font request failures were recorded.
- Font responses used long-lived immutable cache headers.

## 10. JavaScript Analysis

- Lighthouse grouped approximately 197.9 KiB of script transfer in both runs (nine script resources).
- Mobile TBT was 451 ms. Lighthouse estimated 29 KiB of unused JavaScript and 14 KiB of legacy JavaScript savings on mobile.
- The desktop run identified six long tasks in its diagnostic. The concurrent initial run had substantially worse blocking, so only the sequential-run scores are used as the final measurements.
- No third-party JavaScript was identified in the Lighthouse resource summary.
- The homepage’s interactive components include the hero carousel, header navigation, booking form, and pathname-aware booking links. This audit did not remove or change any of them.

## 11. CSS Analysis

- The production CSS file was 52,459 bytes uncompressed; Lighthouse transferred about 12.5 KiB for it.
- Lighthouse identified the stylesheet as a render-blocking resource.
- The unused-CSS audit reported no material unused-CSS savings in the final runs.
- No CSS was changed.

## 12. Network Analysis

- The supplied apex HTTPS URL redirects with HTTP 308 to `https://www.paltravel.co.in/`; the final URL returns HTTP 200.
- The homepage returns HTTP 200 and is served from Vercel’s cache. HTML uses `Cache-Control: public, max-age=0, must-revalidate`; immutable Next.js CSS and font assets use one-year immutable cache headers.
- With `Accept-Encoding: gzip, br`, the homepage response advertised Brotli compression.
- The optimized local hero is served as an image by Next.js. The source hero asset is WebP.
- Lighthouse recorded a 404 for `https://www.paltravel.co.in/favicon.ico`. This was the only failed request in the Lighthouse network-request audit and generated the console error affecting Best Practices.
- The browser captured no failed image requests. No redirect chain beyond the single apex-to-www redirect was observed for the tested HTTPS homepage.
- No duplicate-resource issue was established from the grouped resource summary. A stale hero-image preload warning was observed during browser interaction with the carousel.
- Lighthouse identified no third-party script requests during the audited initial page load. The browser test did load remote Unsplash images when it forced lazy images to decode.

## 13. Critical Issues

No issue was classified as critical based on these measurements.

## 14. Medium Issues

1. **Mobile LCP / hero text rendering:** Mobile LCP is 2.9 s and the mobile LCP breakdown assigns most time to element render delay. The initially animated hero heading is the candidate LCP element.
2. **Mobile JavaScript work:** TBT is 451 ms, with Lighthouse estimating 29 KiB unused JavaScript and 14 KiB legacy JavaScript savings.
3. **Homepage favicon 404:** `/favicon.ico` returns HTTP 404 and creates a Lighthouse console error.
4. **Hero image transfer:** Lighthouse estimates 35 KiB mobile / 203 KiB desktop image savings. A preload warning also indicates the initial hero preload can become unused as the carousel advances.

## 15. Low Priority Issues

1. Accessibility scores are 96 mobile and 92 desktop. Lighthouse reported color contrast concerns in both profiles and undersized touch targets on desktop.
2. The homepage stylesheet blocks rendering, but it is approximately 12.5 KiB transferred and Lighthouse found no material unused-CSS opportunity.
3. The requested apex hostname requires one permanent redirect to the production `www` host.

## 16. Recommended Fixes

1. Test rendering the initial hero heading without its entrance opacity/translation animation, while retaining animation for subsequent user-initiated or carousel slide changes. Re-run Lighthouse before claiming improvement.
2. Review client JavaScript and Framer Motion usage on the homepage; preserve the current slider, header, booking and WhatsApp behavior while reducing only demonstrably unnecessary work.
3. Add or configure the approved site favicon using the existing Next.js metadata/icon convention, deploy it, and verify `/favicon.ico` no longer returns 404.
4. Review hero image output sizes/quality and carousel preload behavior against mobile and desktop captures before changing image settings.
5. Resolve the specific contrast and target-size audit findings without changing approved design/content unnecessarily.
6. Obtain CrUX/field data or real-user monitoring before making INP or field Core Web Vitals claims.

No fixes were applied in this audit. Therefore, no before/after performance improvement is claimed.

## 17. Validation and Remaining Issues

- Production routes checked: homepage, `/taxi-services/haridwar-to-delhi`, `/tour-packages/uttarakhand`, `/chardham-yatra`, `/contact`, `/sitemap.xml`, and `/robots.txt` all returned HTTP 200 on the canonical www host.
- Responsive widths tested: 320, 375, 390, 414, 768, 1024, 1280, and 1440 CSS pixels. No horizontal overflow was detected at any tested width.
- Mobile navigation opened at 320 CSS pixels. The existing page contained one booking form and WhatsApp links for `+91 89799 77705`; no form was submitted and no WhatsApp message was sent.
- Homepage images: 24 decoded, zero failed image requests.
- Lighthouse console/network issue: missing `/favicon.ico` (404).
- Build, type-check, and lint were not run because this was a production audit and no application code was changed.
- Remaining measurement gaps: INP/CrUX field data is unavailable; no real-user field Core Web Vitals or post-fix measurements were collected.
