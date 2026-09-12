const fs = require('fs');
const path = require('path');

const DATABASE_URL = 'https://recruitment-be456-default-rtdb.firebaseio.com/portal_monitor.json';
const SITE_URL = 'https://recruitmenttracker.com.ng';
const TODAY = new Date().toISOString().split('T')[0];

async function generateSitemap() {
    let data = null;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        const response = await fetch(DATABASE_URL, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (response.ok) {
            data = await response.json();
        }
    } catch (fetchErr) {
        console.warn('Could not fetch portal_monitor live data; using fallback static list:', fetchErr.message);
    }

    try {
        const ids = data ? Object.keys(data) : [];

        // Static routes
        const staticRoutes = [
            '',
            '/recruitments',
            '/eligibility',
            '/past-questions',
            '/guides',
            '/blog',
            '/army-salary',
            '/police-salary',
            '/customs-salary',
            '/salary-comparison',
            '/shortlist-hub',
            '/which-recruitment-form-is-out-now',
            // High-Value 2026 Content Expansion Package
            '/is-nigerian-army-form-out',
            '/is-nigerian-navy-batch-39-form-out',
            '/is-police-recruitment-form-out',
            '/is-cdcfib-recruitment-form-out',
            '/how-to-apply-nigerian-navy-batch',
            '/how-to-apply-cdcfib-portal',
            '/how-to-apply-police-constable',
            '/print-army-screening-slip',
            '/nigerian-army-shortlisted-candidates-pdf',
            '/police-shortlisted-candidates-cbt-date',
            '/military-physical-standards-height-requirements',
            '/police-recruitment-requirements-age-limit',
            '/ndlea-recruitment-requirements-qualifications',
            '/cdcfib-cbt-past-questions-free-practice',
            '/nigerian-navy-past-questions-bmtc-exam',
            '/police-recruitment-cbt-past-questions',
            '/about',
            '/contact',
            '/privacy',
            '/terms',
            '/ncc-recruitment',
            '/army-recruitment',
            '/navy-recruitment',
            '/airforce-recruitment',
            '/air-force-recruitment',
            '/customs-recruitment',
            '/frsc-recruitment',
            '/ndlea-recruitment',
            '/nis-recruitment',
            '/nda-recruitment',
            '/police-recruitment',
            '/civil-defence-recruitment',
            '/civildefence-recruitment',
            '/nscdc-recruitment',
            '/fire-service-recruitment',
            '/fireservice-recruitment',
            '/fire-recruitment',
            '/immigration-recruitment',
            '/efcc-recruitment',
            '/fcsc-recruitment',
            '/nnpc-recruitment',
            '/cbn-recruitment',
            '/nimc-recruitment',
            '/nitda-recruitment',
            '/faan-recruitment',
            '/nimasa-recruitment',
            '/nafdac-recruitment',
            '/navy-batch-recruitment',
            '/navy-dssc-recruitment',
        ];

        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Add static routes
        staticRoutes.forEach(route => {
            const loc = route === '' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
            xml += `  <url>\n`;
            xml += `    <loc>${loc}</loc>\n`;
            xml += `    <lastmod>${TODAY}</lastmod>\n`;
            xml += `    <changefreq>daily</changefreq>\n`;
            xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
            xml += `  </url>\n`;
        });

        // Branches for Past Questions
        const branches = [
            'Army', 'Navy', 'Air Force', 'NDA', 'Police',
            'Civil Defence', 'Immigration', 'Customs', 'FRSC',
            'Fire Service', 'NDLEA', 'General'
        ];

        const branchSlugs = {
            'Army': 'army',
            'Navy': 'navy',
            'Air Force': 'air-force',
            'NDA': 'nda',
            'Police': 'police',
            'Civil Defence': 'civil-defence',
            'Immigration': 'immigration',
            'Customs': 'customs',
            'FRSC': 'frsc',
            'Fire Service': 'fire-service',
            'NDLEA': 'ndlea',
            'General': 'general'
        };

        branches.forEach(branch => {
            const slug = branchSlugs[branch] || branch;
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/past-questions/${slug}</loc>\n`;
            xml += `    <lastmod>${TODAY}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.7</priority>\n`;
            xml += `  </url>\n`;
        });

        // Dynamic guide routes
        const guideSlugs = [
            'is-nigerian-army-form-out',
            'is-nigerian-navy-batch-39-form-out',
            'is-police-recruitment-form-out',
            'is-cdcfib-recruitment-form-out',
            'how-to-apply-nigerian-navy-batch',
            'how-to-apply-cdcfib-portal',
            'how-to-apply-police-constable',
            'print-army-screening-slip',
            'nigerian-army-shortlisted-candidates-pdf',
            'police-shortlisted-candidates-cbt-date',
            'military-physical-standards-height-requirements',
            'police-recruitment-requirements-age-limit',
            'ndlea-recruitment-requirements-qualifications',
            'cdcfib-cbt-past-questions-free-practice',
            'nigerian-navy-past-questions-bmtc-exam',
            'police-recruitment-cbt-past-questions',
            'nigerian-army-recruit-salary',
            'nscdc-physical-screening-centers',
            'navy-dssc-vs-bmtc',
            'police-constable-subject-combinations',
            'correct-cdcfib-portal-errors'
        ];

        guideSlugs.forEach(slug => {
            const priority = slug === 'print-army-screening-slip' ? '0.9' : '0.8';
            const changefreq = slug === 'print-army-screening-slip' ? 'daily' : 'weekly';
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/guides/${slug}</loc>\n`;
            xml += `    <lastmod>${TODAY}</lastmod>\n`;
            xml += `    <changefreq>${changefreq}</changefreq>\n`;
            xml += `    <priority>${priority}</priority>\n`;
            xml += `  </url>\n`;
        });

        // Dynamic blog routes
        const blogSlugs = [
            'top-10-high-paying-agencies-nigeria',
            'how-to-prepare-pass-military-aptitude-tests',
            'common-reasons-disqualification-military-physical-screening',
            'paramilitary-vs-military-ranks-salaries-nigeria',
            'nigeria-police-force-ranks-salary-structure',
            'nigerian-army-shortlisted-candidates-pdf-checker',
            'nigerian-navy-batch-39-recruitment-guide-portal',
            'police-constable-cbt-exam-date-screening-centers',
            'cdcfib-reprint-application-slip-guarantor-form',
            'military-medical-screening-test-disqualifications'
        ];

        blogSlugs.forEach(slug => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/blog/${slug}</loc>\n`;
            xml += `    <lastmod>${TODAY}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;
        });

        // Mappings for recruitment slugs
        const slugMapping = {
            '1': 'army-dssc',
            '2': 'navy-batch',
            '3': 'naf-bmtc',
            '5': 'police-constable',
            '6': 'nscdc-general',
            '7': 'frsc-recruitment',
            '8': 'fire-inspector',
            '9': 'immigration-inspector',
            '10': 'customs-supplementary',
            '11': 'efcc-investigator',
            '12': 'fcsc-entry-level',
            '13': 'nnpc-graduate',
            '14': 'cbn-entry-level',
            '15': 'nimc-staff',
            '16': 'ncc-entry-level',
            '17': 'nitda-it-officer',
            '18': 'faan-entry-level',
            '19': 'nimasa-marine',
            '20': 'nafdac-regulatory'
        };

        // Add dynamic recruitment routes
        const recruitmentSlugsToInclude = ids.length > 0
            ? ids.filter(id => data[id]).map(id => slugMapping[id] || id)
            : Object.values(slugMapping);

        recruitmentSlugsToInclude.forEach(slug => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/recruitments/${slug}</loc>\n`;
            xml += `    <lastmod>${TODAY}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.7</priority>\n`;
            xml += `  </url>\n`;
        });

        xml += `</urlset>`;

        const publicDir = path.join(__dirname, '..', 'public');
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }

        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml);
        console.log('Sitemap generated successfully in public/sitemap.xml');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
