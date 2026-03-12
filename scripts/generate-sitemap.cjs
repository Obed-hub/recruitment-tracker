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
            '/about',
            '/contact',
            '/privacy',
            '/terms',
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

        branches.forEach(branch => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/past-questions/${branch}</loc>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.7</priority>\n`;
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
