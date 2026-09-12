import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    keywords?: string[];
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/assets/og-image.png',
    keywords = [],
    noindex = false,
}) => {
    const siteName = 'Nigeria Recruitment Tracker';
    let fullTitle: string;
    if (!title) {
        fullTitle = `Nigeria Recruitment Tracker 2026/2027 [Live Portal Status & Past Questions]`;
    } else if (title.includes(siteName) || title.includes('Recruitment Tracker')) {
        fullTitle = title;
    } else if (title.length > 52) {
        // Keep high-impact bracket titles intact so Google displays the full hook without truncation
        fullTitle = title;
    } else {
        fullTitle = `${title} | ${siteName}`;
    }
    const siteUrl = 'https://recruitmenttracker.com.ng';

    let fullCanonical: string;
    if (canonical) {
        if (canonical.startsWith('http://') || canonical.startsWith('https://')) {
            fullCanonical = canonical;
        } else if (canonical === '/') {
            fullCanonical = `${siteUrl}/`;
        } else {
            const formatted = canonical.startsWith('/') ? canonical : `/${canonical}`;
            fullCanonical = `${siteUrl}${formatted.replace(/\/$/, '')}`;
        }
    } else {
        const path = typeof window !== 'undefined' ? window.location.pathname : '/';
        if (path === '/' || path === '') {
            fullCanonical = `${siteUrl}/`;
        } else {
            fullCanonical = `${siteUrl}${path.replace(/\/$/, '')}`;
        }
    }

    const defaultDescription = 'Track latest Nigeria recruitment updates, check eligibility, and prepare for exams.';
    const robotsContent = noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

            {/* Indexing & Search Engine Directives */}
            <meta name="robots" content={robotsContent} />
            <meta name="googlebot" content={robotsContent} />
            <meta name="bingbot" content={robotsContent} />

            <link rel="canonical" href={fullCanonical} />

            {/* Author and Publisher Info */}
            <meta name="author" content="Nigeria Recruitment Tracker" />
            <meta name="publisher" content="Nigeria Recruitment Tracker" />
            <meta name="application-name" content="Nigeria Recruitment Tracker" />

            {/* OpenGraph & Social Sharing */}
            <meta property="og:site_name" content="Nigeria Recruitment Tracker" />
            <meta property="og:locale" content="en_NG" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
        </Helmet>
    );
};

export default SEO;
