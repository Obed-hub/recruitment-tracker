const fs = require('fs');
const path = require('path');

const DATABASE_URL = 'https://recruitment-be456-default-rtdb.firebaseio.com/portal_monitor.json';
const SITE_URL = 'https://recruitmenttracker.com.ng';

async function generateSitemap() {
    try {
        const response = await fetch(DATABASE_URL);
        const data = await response.json();

        const ids = data ? Object.keys(data) : [];

        // Static routes
        const staticRoutes = [
            '',
            '/recruitments',
            '/eligibility',
            '/past-questions',
            '/guides',
            '/blog',
            '/about',
            '/contact',
            '/privacy',
            '/terms',
            '/ncc-recruitment',
            '/army-recruitment',
            '/navy-recruitment',
            '/airforce-recruitment',
            '/customs-recruitment',
            '/frsc-recruitment',
            '/ndlea-recruitment',
            '/nis-recruitment',
            '/nda-recruitment',
            '/police-recruitment',
            '/civil-defence-recruitment',
            '/nscdc-recruitment',
            '/fire-service-recruitment',
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
        ];

        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

        // Add static routes
        staticRoutes.forEach(route => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}${route}</loc>\n`;
            xml += `    <changefreq>daily</changefreq>\n`;
            xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
            xml += `  </url>\n`;
        });

        // Branches for Past Questions
        const branches = [
            'Army', 'Navy', 'Air Force', 'NDA', 'Police',
            'Civil Defence', 'Immigration', 'Customs', 'FRSC',
            'Fire Service', 'General'
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
            'General': 'general'
        };

        branches.forEach(branch => {
            const slug = branchSlugs[branch] || branch;
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/past-questions/${slug}</loc>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.7</priority>\n`;
            xml += `  </url>\n`;
        });

        // Dynamic guide routes
        const guideSlugs = [
            'nigerian-army-recruit-salary',
            'nscdc-physical-screening-centers',
            'print-army-screening-slip',
            'navy-dssc-vs-bmtc',
            'police-constable-subject-combinations',
            'correct-cdcfib-portal-errors'
        ];

        guideSlugs.forEach(slug => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/guides/${slug}</loc>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.8</priority>\n`;
            xml += `  </url>\n`;
        });

        // Dynamic blog routes
        const blogSlugs = [
            'top-10-high-paying-agencies-nigeria',
            'how-to-prepare-pass-military-aptitude-tests',
            'common-reasons-disqualification-military-physical-screening',
            'paramilitary-vs-military-ranks-salaries-nigeria',
            'nigeria-police-force-ranks-salary-structure'
        ];

        blogSlugs.forEach(slug => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/blog/${slug}</loc>\n`;
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
        ids.forEach(id => {
            // Skip if no data for this index (e.g. null in array)
            if (!data[id]) return;
            
            const slug = slugMapping[id] || id;
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/recruitments/${slug}</loc>\n`;
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
