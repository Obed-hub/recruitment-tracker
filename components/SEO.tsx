import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = '/assets/og-image.png',
    keywords = [],
}) => {
    const siteName = 'Nigeria Recruitment Tracker';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const siteUrl = 'https://recruitmenttracker.com.ng';
    const cleanPath = window.location.pathname.replace(/\/$/, '');
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${cleanPath}`;

    const defaultDescription = 'Track latest Nigeria recruitment updates, check eligibility, and prepare for exams.';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

            <link rel="canonical" href={fullCanonical} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
        </Helmet>
    );
};

export default SEO;
