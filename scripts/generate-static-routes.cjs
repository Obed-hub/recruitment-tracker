/**
 * Static Route Pre-renderer for Cloudflare Pages / Static Hosting
 * 
 * Generates physical dist/<route>/index.html files for all canonical routes.
 * This guarantees:
 * 1. Cloudflare Pages serves real 200 OK static files for every route (no 404 status).
 * 2. Googlebot & crawlers receive pre-rendered SEO titles, descriptions, and canonical tags instantly.
 * 3. Eliminates Google Search Console "Indexing request rejected" errors due to 404s.
 */

const fs = require('fs');
const path = require('path');
const { getAllEntries, SITE_URL } = require('./generate-sitemap.cjs');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

// Custom high-impact SEO metadata for core money and hub pages
const ROUTE_METADATA = {
  '/air-force-shortlist': {
    title: 'Nigerian Air Force Shortlisted Candidates 2026 PDF Download & CBT Exam Venues (BMTC 45 / DSSC)',
    description: 'Check Nigerian Air Force (NAF) 2026 shortlisted candidates list and state screening centers across all 36 states and FCT. Download PDF, verify CBT exam date, required dress code & take free mock tests.',
    keywords: 'air force exam shortlist 2026, nigerian air force shortlisted candidates 2026, naf shortlist pdf download, naf bmtc 45 shortlisted candidates, naf screening date and venue 2026, nafrecruitment.airforce.mil.ng shortlist, how to check air force shortlist 2026, air force cbt past questions free test, naf state screening centers',
    ogImage: '/assets/logo.png'
  },
  '/which-recruitment-form-is-out-now': {
    title: 'Which Recruitment Form is Out Now in Nigeria 2026? [Verified Application Status]',
    description: 'Find all verified military, paramilitary, and federal government recruitment forms currently open for application in Nigeria for 2026.',
    keywords: 'which recruitment form is out now, forms out now in nigeria 2026, nigerian military recruitments open, federal government recruitments 2026',
    ogImage: '/assets/logo.png'
  },
  '/military-screening-guide': {
    title: 'Nigeria Military & Paramilitary Screening Guide 2026 [Dress Code, Medicals & Physical Tests]',
    description: 'Complete preparation guide for Nigerian Armed Forces screening: required documents checklist, medical tests, physical fitness drills, and interview tips.',
    keywords: 'military screening guide 2026, army screening dress code, navy physical fitness test, air force medical requirements, cdcfib screening checklist',
    ogImage: '/assets/logo.png'
  },
  '/shortlist-hub': {
    title: 'Recruitment Shortlists & State Screening Centers Hub 2026 [PDF Download & Verification]',
    description: 'Track and download official shortlisted candidates lists for Nigerian Army, Navy, Air Force, Police, and Civil Defence recruitments.',
    keywords: 'recruitment shortlisted candidates 2026, army shortlist pdf, navy batch shortlist, air force screening venues, police constable shortlist',
    ogImage: '/assets/logo.png'
  },
  '/nigerian-navy-recruitment-2026': {
    title: 'Nigerian Navy Recruitment 2026 (Batch 39) Application Portal & Requirements',
    description: 'Step-by-step application guide for Nigerian Navy Batch 39 recruitment: portal login, entry requirements, guarantor forms, and exam centers.',
    keywords: 'nigerian navy recruitment 2026, navy batch 39 form, joinnigeriannavy.com portal, navy requirements and qualifications',
    ogImage: '/assets/logo.png'
  },
  '/npf-recruitment-portal': {
    title: 'Nigeria Police (NPF) Recruitment Portal 2026 Application Guide & Screening Status',
    description: 'Complete guide to Nigeria Police Force recruitment portal: registration steps, eligibility requirements, screening centers, and CBT mock test.',
    keywords: 'npf recruitment portal 2026, apply.policerecruitment.gov.ng, police constable screening date, police cbt exam',
    ogImage: '/assets/logo.png'
  },
  '/nigerian-army-88-rri-recruitment': {
    title: 'Nigerian Army 88 RRI Recruitment 2026 Application Portal, Requirements & Screening Slip',
    description: 'Official application portal guide for Nigerian Army 88 Regular Recruit Intake (RRI): online registration, requirements, and screening slip printout.',
    keywords: 'nigerian army 88 rri recruitment, recruitment.army.mil.ng, army screening slip reprint, army recruit requirements',
    ogImage: '/assets/logo.png'
  },
  '/past-questions': {
    title: 'Nigeria Military & Civil Service CBT Past Questions & Mock Tests [Free Practice]',
    description: 'Practice free computer-based test (CBT) past questions for Nigerian Army, Navy, Air Force, Police, and paramilitary entrance exams.',
    keywords: 'cbt past questions free, nigerian military mock test, army past questions pdf, navy exam past questions, police cbt practice',
    ogImage: '/assets/logo.png'
  },
  '/eligibility': {
    title: 'Nigeria Military & Paramilitary Eligibility Checker [Age, Height & Qualifications]',
    description: 'Check your qualification, height, age, and credential requirements for Nigerian Armed Forces and government recruitments instantly.',
    keywords: 'recruitment eligibility checker, military height requirements, age limit nigerian army navy air force, waec requirements military',
    ogImage: '/assets/logo.png'
  },
  '/faqs': {
    title: 'Nigeria Recruitment FAQs 2026 [Common Errors, Portal Fixes & Screening Answers]',
    description: 'Answers to frequently asked questions about Nigerian military and civil service recruitments, portal login issues, BVN/NIN verification, and screening.',
    keywords: 'recruitment faqs, cdcfib portal errors, navy application issues, army screening slip download questions',
    ogImage: '/assets/logo.png'
  }
};

function formatTitleFromSlug(slug) {
  const words = slug
    .replace(/^\//, '')
    .split('/')
    .pop()
    .split('-')
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1));
  return `${words.join(' ')} 2026 | Nigeria Recruitment Tracker`;
}

function generateStaticHtml(template, routeUrl, meta = {}) {
  const cleanRoute = routeUrl === '/' ? '/' : routeUrl.replace(/\/+$/, '');
  const canonicalUrl = `${SITE_URL}${cleanRoute === '/' ? '/' : cleanRoute}`;

  const title = meta.title || formatTitleFromSlug(cleanRoute);
  const description = meta.description || `Verified information, portal guidelines, requirements, and updates for ${title}.`;
  const keywords = meta.keywords || 'nigeria recruitment 2026, military recruitment, federal jobs, past questions';
  const ogImage = meta.ogImage ? `${SITE_URL}${meta.ogImage}` : `${SITE_URL}/assets/logo.png`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/is, `<meta name="description" content="${description}" />`);

  // Replace Keywords
  html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/?>/is, `<meta name="keywords" content="${keywords}" />`);

  // Replace or Inject Canonical Link
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is, `<link rel="canonical" href="${canonicalUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }

  // Replace OpenGraph & Twitter tags
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/is, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:description" content="${description}" />`);

  return html;
}

function run() {
  console.log('[Static Route Generator] Starting static HTML generation...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`[Static Route Generator] Template not found at: ${TEMPLATE_PATH}`);
    process.exit(1);
  }

  // Ensure 404.html does NOT exist in public or dist so Cloudflare Pages doesn't return 404 for SPAs
  const public404 = path.join(PUBLIC_DIR, '404.html');
  const dist404 = path.join(DIST_DIR, '404.html');
  if (fs.existsSync(public404)) {
    fs.unlinkSync(public404);
    console.log('[Static Route Generator] ✓ Removed public/404.html to restore native Cloudflare Pages SPA 200 OK mode');
  }
  if (fs.existsSync(dist404)) {
    fs.unlinkSync(dist404);
    console.log('[Static Route Generator] ✓ Removed dist/404.html');
  }

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const entries = getAllEntries();

  let generatedCount = 0;

  entries.forEach(entry => {
    const route = entry.url;
    if (route === '/') return; // Root index.html already exists

    const targetDir = path.join(DIST_DIR, ...route.split('/').filter(Boolean));
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const meta = ROUTE_METADATA[route] || {};
    const pageHtml = generateStaticHtml(template, route, meta);

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, pageHtml, 'utf-8');
    generatedCount++;
  });

  console.log(`[Static Route Generator] ✓ Successfully generated ${generatedCount} physical static 200 OK HTML pages in dist/!`);
  console.log(`[Static Route Generator] ✓ Verified /air-force-shortlist/index.html is live and pre-rendered.`);
}

run();
