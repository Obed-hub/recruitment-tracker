import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    canonicalUrl?: string;
    ogType?: 'website' | 'article';
    type?: 'website' | 'article';
    ogImage?: string;
    keywords?: string[];
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    canonicalUrl,
    ogType,
    type = 'website',
    ogImage = '/assets/og-image.png',
    keywords = [],
    noindex = false,
}) => {
    const siteName = 'Nigeria Recruitment Tracker';
    const effectiveOgType = ogType || type;
    const effectiveCanonical = canonicalUrl || canonical;
    let fullTitle: string;
    if (!title) {
        fullTitle = `Nigeria Recruitment Tracker 2026/2027 [Live Portal Status & Past Questions]`;
    } else if (
        title.includes(siteName) ||
        title.includes('Recruitment Tracker') ||
        title.length >= 45 ||
        title.includes(':') ||
        title.includes('|') ||
        title.includes('[')
    ) {
        // Keep high-intent and full-length titles intact to prevent Google SERP title truncation
        fullTitle = title;
    } else {
        fullTitle = `${title} | ${siteName}`;
    }
    const siteUrl = 'https://recruitmenttracker.com.ng';

    let fullCanonical: string;
    if (effectiveCanonical) {
        fullCanonical = effectiveCanonical.startsWith('http')
            ? effectiveCanonical
            : `${siteUrl}${effectiveCanonical.startsWith('/') ? effectiveCanonical : `/${effectiveCanonical}`}`;
    } else {
        const cleanPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') : '';
        fullCanonical = `${siteUrl}${cleanPath}`;
    }

    const defaultDescription = 'Track latest Nigeria recruitment updates, check portal opening status, eligibility, and prepare for exams.';
    const finalDescription = description || defaultDescription;

    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            <link rel="canonical" href={fullCanonical} />

            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:type" content={effectiveOgType} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={absoluteOgImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={absoluteOgImage} />
        </Helmet>
    );
};

export default SEO;
