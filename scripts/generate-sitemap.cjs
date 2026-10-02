/**
 * Automated SEO Sitemap Generator
 * 
 * Prioritizes high-traffic, high-intent recruitment pages (40-80 core pages)
 * to maximize Google Search Console crawl budget and indexation speed.
 * 
 * Generates:
 *  1. public/sitemap.xml (Comprehensive, deduplicated, tiered XML sitemap)
 *  2. public/sitemap-high-priority.xml (Fast-track indexation sitemap for the top 50-70 pages)
 *  3. public/robots.txt (Automatically synced with both sitemaps)
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://recruitmenttracker.com.ng';
const TODAY = new Date().toISOString().split('T')[0];

// TIER 1: CRITICAL MONEY & HIGH-TRAFFIC PAGES (Priority: 1.0 - 0.95 | Changefreq: daily)
// These are the viral hubs, breaking recruitments, and high-frequency candidate portals.
const TIER_1_HIGH_TRAFFIC = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/nigerian-navy-recruitment-2026', priority: '1.0', changefreq: 'daily' },
  { url: '/which-recruitment-form-is-out-now', priority: '1.0', changefreq: 'daily' },
  { url: '/shortlist-hub', priority: '0.95', changefreq: 'daily' },
  { url: '/recruitments', priority: '0.95', changefreq: 'daily' },
  { url: '/past-questions', priority: '0.90', changefreq: 'daily' },
  { url: '/eligibility', priority: '0.90', changefreq: 'daily' },
  { url: '/faqs', priority: '0.90', changefreq: 'daily' },
];

// TIER 2: HIGH-INTENT ACTION & PORTAL LOGIN HUBS (Priority: 0.90 - 0.85 | Changefreq: daily)
// Candidates searching for "portal login", "print slip", "guarantor form", and "is form out".
const TIER_2_PORTAL_ACTIONS_AND_STATUS = [
  // High-Intent "Is Form Out" Searches
  { url: '/is-nigerian-navy-batch-39-form-out', priority: '0.90', changefreq: 'daily' },
  { url: '/is-nigerian-army-form-out', priority: '0.90', changefreq: 'daily' },
  { url: '/is-nigerian-air-force-form-out', priority: '0.90', changefreq: 'daily' },
  { url: '/is-police-recruitment-form-out', priority: '0.90', changefreq: 'daily' },
  { url: '/is-cdcfib-recruitment-form-out', priority: '0.90', changefreq: 'daily' },

  // How-to-Apply High Search Volume Hubs
  { url: '/npf-recruitment-portal', priority: '0.95', changefreq: 'daily' },
  { url: '/nigerian-army-88-rri-recruitment', priority: '0.94', changefreq: 'daily' },
  { url: '/nigerian-navy-dssc-recruitment', priority: '0.93', changefreq: 'daily' },
  { url: '/nis-recruitment-portal', priority: '0.93', changefreq: 'daily' },
  { url: '/ndlea-recruitment-portal', priority: '0.93', changefreq: 'daily' },
  { url: '/frsc-recruitment-portal', priority: '0.92', changefreq: 'daily' },
  { url: '/fcsc-recruitment-portal', priority: '0.92', changefreq: 'daily' },
  { url: '/teachers-recruitment-subeb', priority: '0.91', changefreq: 'daily' },
  { url: '/nuc-recruitment-portal', priority: '0.92', changefreq: 'daily' },
  { url: '/how-to-apply-nigerian-navy-batch', priority: '0.90', changefreq: 'daily' },
  { url: '/how-to-apply-nigerian-air-force', priority: '0.90', changefreq: 'daily' },
  { url: '/how-to-apply-police-constable', priority: '0.88', changefreq: 'daily' },
  { url: '/how-to-apply-cdcfib-portal', priority: '0.88', changefreq: 'daily' },

  // Portal Login Verification Hubs (Top Google Query)
  { url: '/recruitment-army-mil-ng-portal-login', priority: '0.92', changefreq: 'daily' },
  { url: '/army-recruitment-portal-login', priority: '0.90', changefreq: 'daily' },
  { url: '/navy-recruitment-portal-login', priority: '0.90', changefreq: 'daily' },
  { url: '/police-recruitment-portal-login', priority: '0.88', changefreq: 'daily' },
  { url: '/cdcfib-portal-login', priority: '0.88', changefreq: 'daily' },
  { url: '/immigration-portal-login', priority: '0.85', changefreq: 'daily' },
  { url: '/customs-portal-login', priority: '0.85', changefreq: 'daily' },

  // Confirmation Slip Reprinting Hubs
  { url: '/navy-print-confirmation-slip', priority: '0.88', changefreq: 'daily' },
  { url: '/print-army-screening-slip', priority: '0.88', changefreq: 'daily' },
  { url: '/police-print-confirmation-slip', priority: '0.88', changefreq: 'daily' },
  { url: '/cdcfib-print-confirmation-slip', priority: '0.88', changefreq: 'daily' },
  { url: '/immigration-print-confirmation-slip', priority: '0.85', changefreq: 'daily' },
  { url: '/customs-print-confirmation-slip', priority: '0.85', changefreq: 'daily' },

  // Guarantor & Parent Consent Forms
  { url: '/navy-guarantor-form', priority: '0.85', changefreq: 'daily' },
  { url: '/police-guarantor-form', priority: '0.85', changefreq: 'daily' },
  { url: '/army-guarantor-form', priority: '0.85', changefreq: 'daily' },
  { url: '/cdcfib-guarantor-form', priority: '0.85', changefreq: 'daily' },
  { url: '/immigration-guarantor-form', priority: '0.85', changefreq: 'daily' },
  { url: '/customs-guarantor-form', priority: '0.85', changefreq: 'daily' },

  // Shortlisted Candidates & CBT Dates
  { url: '/nigerian-army-shortlisted-candidates-pdf', priority: '0.88', changefreq: 'daily' },
  { url: '/police-shortlisted-candidates-cbt-date', priority: '0.88', changefreq: 'daily' },
  { url: '/cdcfib-cbt-past-questions-free-practice', priority: '0.88', changefreq: 'daily' },
  { url: '/nigerian-navy-past-questions-bmtc-exam', priority: '0.90', changefreq: 'daily' },
  { url: '/police-recruitment-cbt-past-questions', priority: '0.88', changefreq: 'daily' },
];

// TIER 3: SALARY COMPARISON & HIGH-CPC SALARY STRUCTURES (Priority: 0.85 - 0.80 | Changefreq: weekly)
const TIER_3_SALARY_HUBS = [
  { url: '/salary-comparison', priority: '0.88', changefreq: 'weekly' },
  { url: '/navy-salary', priority: '0.85', changefreq: 'weekly' },
  { url: '/army-salary', priority: '0.85', changefreq: 'weekly' },
  { url: '/police-salary', priority: '0.85', changefreq: 'weekly' },
  { url: '/customs-salary', priority: '0.85', changefreq: 'weekly' },
  { url: '/airforce-salary', priority: '0.82', changefreq: 'weekly' },
  { url: '/civil-defence-salary', priority: '0.82', changefreq: 'weekly' },
  { url: '/immigration-salary', priority: '0.82', changefreq: 'weekly' },
  { url: '/nnpc-salary', priority: '0.80', changefreq: 'weekly' },
  { url: '/cbn-salary', priority: '0.80', changefreq: 'weekly' },
];

// TIER 4: HIGH-CONVERTING IN-DEPTH BLOG & EDITORIAL GUIDES (Priority: 0.82 - 0.78 | Changefreq: weekly)
const TIER_4_GUIDES_AND_BLOGS = [
  { url: '/guides', priority: '0.85', changefreq: 'daily' },
  { url: '/blog', priority: '0.85', changefreq: 'daily' },
  { url: '/guides/is-nigerian-navy-batch-39-form-out', priority: '0.85', changefreq: 'weekly' },
  { url: '/guides/how-to-apply-nigerian-navy-batch', priority: '0.85', changefreq: 'weekly' },
  { url: '/guides/nigerian-navy-past-questions-bmtc-exam', priority: '0.85', changefreq: 'weekly' },
  { url: '/guides/print-army-screening-slip', priority: '0.85', changefreq: 'weekly' },
  { url: '/guides/police-constable-cbt-exam-date-screening-centers', priority: '0.82', changefreq: 'weekly' },
  { url: '/guides/cdcfib-cbt-past-questions-free-practice', priority: '0.82', changefreq: 'weekly' },
  { url: '/guides/military-physical-standards-height-requirements', priority: '0.80', changefreq: 'weekly' },
  { url: '/guides/police-recruitment-requirements-age-limit', priority: '0.80', changefreq: 'weekly' },
  { url: '/guides/ndlea-recruitment-requirements-qualifications', priority: '0.80', changefreq: 'weekly' },
  { url: '/guides/navy-dssc-vs-bmtc', priority: '0.80', changefreq: 'weekly' },
  { url: '/guides/military-medical-screening-test-requirements', priority: '0.80', changefreq: 'weekly' },
  { url: '/guides/correct-cdcfib-portal-errors', priority: '0.78', changefreq: 'weekly' },
  { url: '/guides/efcc-recruitment-screening-qualifications', priority: '0.78', changefreq: 'weekly' },
  { url: '/blog/nigerian-navy-batch-39-recruitment-guide-portal', priority: '0.85', changefreq: 'weekly' },
  { url: '/blog/top-10-high-paying-agencies-nigeria', priority: '0.82', changefreq: 'weekly' },
  { url: '/blog/how-to-prepare-pass-military-aptitude-tests', priority: '0.80', changefreq: 'weekly' },
  { url: '/blog/common-reasons-disqualification-military-physical-screening', priority: '0.80', changefreq: 'weekly' },
  { url: '/blog/paramilitary-vs-military-ranks-salaries-nigeria', priority: '0.80', changefreq: 'weekly' },
  { url: '/blog/nigeria-police-force-ranks-salary-structure', priority: '0.80', changefreq: 'weekly' },
  { url: '/blog/nigerian-army-shortlisted-candidates-pdf-checker', priority: '0.82', changefreq: 'weekly' },
  { url: '/blog/cdcfib-reprint-application-slip-guarantor-form', priority: '0.80', changefreq: 'weekly' },
  { url: '/blog/military-medical-screening-test-disqualifications', priority: '0.78', changefreq: 'weekly' },
];

// TIER 5: DEDICATED AGENCY PORTAL HUBS (Priority: 0.75 - 0.70 | Changefreq: weekly)
const TIER_5_AGENCY_HUBS = [
  { url: '/navy-recruitment', priority: '0.80', changefreq: 'weekly' },
  { url: '/army-recruitment', priority: '0.80', changefreq: 'weekly' },
  { url: '/police-recruitment', priority: '0.80', changefreq: 'weekly' },
  { url: '/airforce-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/customs-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/civil-defence-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/immigration-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/ndlea-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/frsc-recruitment', priority: '0.72', changefreq: 'weekly' },
  { url: '/fire-service-recruitment', priority: '0.72', changefreq: 'weekly' },
  { url: '/efcc-recruitment', priority: '0.72', changefreq: 'weekly' },
  { url: '/nda-recruitment', priority: '0.72', changefreq: 'weekly' },
  { url: '/navy-dssc-recruitment', priority: '0.75', changefreq: 'weekly' },
  { url: '/nnpc-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/cbn-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/nimc-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/nitda-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/faan-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/nimasa-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/nafdac-recruitment', priority: '0.70', changefreq: 'weekly' },
  { url: '/fcsc-recruitment', priority: '0.70', changefreq: 'weekly' },
];

// TIER 6: CBT PAST QUESTION CATEGORY PAGES (Priority: 0.70 | Changefreq: weekly)
const CBT_BRANCHES = [
  'navy', 'army', 'police', 'air-force', 'civil-defence',
  'customs', 'immigration', 'ndlea', 'frsc', 'fire-service', 'nda', 'general'
];

const TIER_6_CBT_PAGES = CBT_BRANCHES.map(branch => ({
  url: `/past-questions/${branch}`,
  priority: '0.70',
  changefreq: 'weekly'
}));

// TIER 7: RECRUITMENT DETAIL PAGES (Priority: 0.70 | Changefreq: weekly)
const RECRUITMENT_SLUGS = [
  'navy-batch', 'army-dssc', 'naf-bmtc', 'police-constable', 'nscdc-general',
  'frsc-recruitment', 'fire-inspector', 'immigration-inspector', 'customs-supplementary',
  'efcc-investigator', 'fcsc-entry-level', 'nnpc-graduate', 'cbn-entry-level',
  'nimc-staff', 'ncc-entry-level', 'nitda-it-officer', 'faan-entry-level',
  'nimasa-marine', 'nafdac-regulatory'
];

const TIER_7_RECRUITMENT_DETAILS = RECRUITMENT_SLUGS.map(slug => ({
  url: `/recruitments/${slug}`,
  priority: '0.70',
  changefreq: 'weekly'
}));

// TIER 8: INSTITUTIONAL & TRUST PAGES (Priority: 0.40 - 0.30 | Changefreq: monthly)
const TIER_8_STATIC_LEGAL = [
  { url: '/about', priority: '0.40', changefreq: 'monthly' },
  { url: '/contact', priority: '0.40', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.30', changefreq: 'monthly' },
  { url: '/terms', priority: '0.30', changefreq: 'monthly' },
  { url: '/disclaimer', priority: '0.30', changefreq: 'monthly' },
];

/**
 * Builds standard XML sitemap string
 */
function buildXmlSitemap(entries) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  entries.forEach(entry => {
    const loc = entry.url === '/' ? `${SITE_URL}/` : `${SITE_URL}${entry.url}`;
    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;
  return xml;
}

/**
 * Main execution function
 */
function generateSitemaps() {
  console.log(`[Sitemap Generator] Running automated generation for date: ${TODAY}`);

  // Deduplicate entries by clean URL path
  const seenUrls = new Set();
  const allEntries = [];

  const addUnique = (list) => {
    list.forEach(item => {
      // Normalize URL (strip trailing slash unless root)
      const cleanUrl = item.url === '/' ? '/' : item.url.replace(/\/+$/, '');
      if (!seenUrls.has(cleanUrl)) {
        seenUrls.add(cleanUrl);
        allEntries.push({ ...item, url: cleanUrl });
      }
    });
  };

  // Add in strict priority order
  addUnique(TIER_1_HIGH_TRAFFIC);
  addUnique(TIER_2_PORTAL_ACTIONS_AND_STATUS);
  addUnique(TIER_3_SALARY_HUBS);
  addUnique(TIER_4_GUIDES_AND_BLOGS);
  addUnique(TIER_5_AGENCY_HUBS);
  addUnique(TIER_6_CBT_PAGES);
  addUnique(TIER_7_RECRUITMENT_DETAILS);
  addUnique(TIER_8_STATIC_LEGAL);

  console.log(`[Sitemap Generator] Total unique URLs indexed: ${allEntries.length}`);

  // Filter out the High-Priority Top Cluster (Tier 1 to 4 ~55-70 highest traffic pages)
  const highPriorityEntries = allEntries.filter(e => parseFloat(e.priority) >= 0.80);
  console.log(`[Sitemap Generator] High-Priority Cluster URLs (>=0.80 priority): ${highPriorityEntries.length}`);

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write Comprehensive Master Sitemap (sitemap.xml)
  const masterXml = buildXmlSitemap(allEntries);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), masterXml, 'utf-8');
  console.log(`[Sitemap Generator] ✓ Wrote master sitemap: public/sitemap.xml (${allEntries.length} URLs)`);

  // 2. Write Focused Fast-Track High-Priority Sitemap (sitemap-high-priority.xml)
  const highPriorityXml = buildXmlSitemap(highPriorityEntries);
  fs.writeFileSync(path.join(publicDir, 'sitemap-high-priority.xml'), highPriorityXml, 'utf-8');
  console.log(`[Sitemap Generator] ✓ Wrote high-priority sitemap: public/sitemap-high-priority.xml (${highPriorityEntries.length} URLs)`);

  // 3. Update public/robots.txt to reference both sitemaps
  const robotsTxtContent = `User-agent: *
Allow: /
Disallow: /admin

User-agent: Googlebot
Allow: /
Disallow: /admin

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-News
Allow: /

User-agent: bingbot
Allow: /
Disallow: /admin

User-agent: Mediapartners-Google
Allow: /

# Canonical Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-high-priority.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxtContent, 'utf-8');
  console.log(`[Sitemap Generator] ✓ Synced public/robots.txt with both sitemap locations`);
}

generateSitemaps();
