# Implementation Plan: Fix "Crawled - currently not indexed" in Google Search Console

## Problem Diagnosis
Google Search Console reports **"Crawled - currently not indexed"** for URLs on `recruitmenttracker.com.ng`. 

Our forensic audit revealed four primary root causes:
1. **Static HTML Canonical Conflict in SPA Entry Point**: `index.html` contained a hardcoded `<link rel="canonical" href="https://recruitmenttracker.com.ng/" />`. When Googlebot crawls any subpage URL (e.g., `/nigerian-navy-recruitment-2026` or `/salary-comparison`), the server returns `index.html` via the SPA rewrite rule (`/* /index.html 200`). The initial crawl parser sees the canonical tag pointing back to the homepage (`/`), signaling to Google that the crawled subpage is duplicate content of the root domain.
2. **Sitemap Redirect Leaks**: `scripts/generate-sitemap.cjs` and `public/sitemap.xml` include URLs that are client-side redirects (e.g., `/screening-guide-2026` redirecting to `/military-screening-guide`, and `/navy-dssc-recruitment` redirecting to `/nigerian-navy-dssc-recruitment`). Submitting redirecting URLs in XML sitemaps wastes Googlebot crawl budget and triggers non-indexation.
3. **Hardcoded Priority Bug in Sitemap Generator**: `buildXmlSitemap()` in `scripts/generate-sitemap.cjs` had `<priority>1.0</priority>` hardcoded, ignoring the tiering strategy and signaling inaccurate priority weights to search engines.
4. **Trailing Slash Inconsistencies**: `SEO.tsx` formatted the homepage canonical without a trailing slash (`https://recruitmenttracker.com.ng`), whereas `index.html` and sitemaps declared it with a trailing slash (`https://recruitmenttracker.com.ng/`), causing conflicting canonical signals.

---

## Proposed Remediation Strategy

### 1. Fix SPA Static Canonical Tag in `index.html`
- Remove the hardcoded `<link rel="canonical" href="https://recruitmenttracker.com.ng/" />` from static `index.html`.
- Let `react-helmet-async` dynamically manage canonical tags on a per-route basis via `SEO.tsx`. This ensures Googlebot never receives a premature homepage canonical tag on subpage URLs during HTTP fetching.

### 2. Standardize Canonical Resolution in `components/SEO.tsx`
- Ensure strict trailing slash normalization:
  - Homepage is always strictly canonicalized to `https://recruitmenttracker.com.ng/`.
  - All inner routes are strictly canonicalized to `https://recruitmenttracker.com.ng/clean-path` (without trailing slashes and stripping any tracking query strings).
- Ensure canonical `<link>` tags always replace default elements reliably.

### 3. Audit & Clean XML Sitemaps (`scripts/generate-sitemap.cjs`)
- Remove all redirecting aliases from `TIER_1` and `TIER_2` (e.g. `/screening-guide-2026`, `/navy-dssc-recruitment`, and deprecated shortlinks).
- Fix the XML generator so it outputs the exact computed `<priority>${entry.priority}</priority>` instead of the hardcoded `1.0`.
- Regenerate both `public/sitemap.xml` and `public/sitemap-high-priority.xml` with deduplicated, 200-OK canonical URLs only.

### 4. Optimize Robots.txt & Server-Level Redirects (`public/_redirects`)
- Add explicit 301 permanent redirect rules in `public/_redirects` for aliases and legacy paths so search engines receive instantaneous HTTP 301 status codes instead of executing SPA client-side redirects.
- Keep `robots.txt` clean with direct references to the canonical sitemaps.

---

## Verification & Validation
1. Run `npm run generate-sitemap` to verify zero redirects or duplicate entries in sitemaps.
2. Run `npm run build` and `compile_applet` to ensure pristine compilation.
3. Run `npm run lint` (`tsc --noEmit`) to verify zero type regressions.
4. Verify HTTP and client-side canonical tags across homepage, hubs, and guides.
