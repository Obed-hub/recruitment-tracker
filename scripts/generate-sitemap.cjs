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
            '/shortlists',
            '/practice',
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

        // Add dynamic recruitment routes
        ids.forEach(id => {
            xml += `  <url>\n`;
            xml += `    <loc>${SITE_URL}/recruitments/${id}</loc>\n`;
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
