import React, { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalPath?: string;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonicalPath,
    schema
}) => {
    const baseTitle = "recruitmenttracker";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

    useEffect(() => {
        // Update Document Title
        document.title = fullTitle;

        // Update Meta Description
        if (description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', description);
            }

            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) {
                ogDesc.setAttribute('content', description);
            }

            let twitterDesc = document.querySelector('meta[property="twitter:description"]');
            if (twitterDesc) {
                twitterDesc.setAttribute('content', description);
            }
        }

        // Update Meta Keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', keywords);
            }
        }

        // Update Canonical URL
        if (canonicalPath) {
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            const fullUrl = `https://nigeria-military-recruitment-tracker.web.app${canonicalPath}`;
            if (canonicalLink) {
                canonicalLink.setAttribute('href', fullUrl);
            }
        }

        // Handle Structured Data (JSON-LD)
        if (schema) {
            const scriptId = 'seo-structured-data';
            let script = document.getElementById(scriptId) as HTMLScriptElement;

            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }

            script.text = JSON.stringify(schema);
        }

        // Cleanup if title changes (though title is handled by variable)
        return () => {
            // Optional: Reset to defaults on unmount if needed
        };
    }, [fullTitle, description, keywords, canonicalPath, schema]);

    return null; // This component doesn't render anything to the DOM
};

export default SEO;
