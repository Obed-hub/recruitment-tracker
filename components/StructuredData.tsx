import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RecruitmentUpdate } from '../types';

interface StructuredDataProps {
    type: string;
    data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': type,
                    ...data,
                })}
            </script>
        </Helmet>
    );
};

// Safe date parser to avoid runtime exceptions on bad dates
const safeISODate = (dateStr?: string) => {
    if (!dateStr) return new Date().toISOString();
    try {
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) {
            return new Date().toISOString();
        }
        return d.toISOString();
    } catch {
        return new Date().toISOString();
    }
};

// Generates fallback description for incomplete recruitment data
const getSafeDescription = (recruitment: RecruitmentUpdate) => {
    if (recruitment.description && recruitment.description.length > 20) {
        return recruitment.description;
    }
    return `Apply for ${recruitment.title} (${recruitment.branch} recruitment). Check eligibility criteria, required documents, application process, and screening exam details. Official application portal is at ${recruitment.portal_url}.`;
};

export const RecruitmentSchema: React.FC<{ recruitment: RecruitmentUpdate }> = ({ recruitment }) => {
    const showJobPosting = recruitment.status === 'Open';

    const jobData = {
        title: recruitment.title,
        description: getSafeDescription(recruitment),
        datePosted: safeISODate(recruitment.updated_at),
        validThrough: safeISODate(recruitment.deadline_date),
        employmentType: 'FULL_TIME',
        directApply: true,
        identifier: {
            '@type': 'PropertyValue',
            name: 'RecruitmentTracker',
            value: recruitment.id
        },
        hiringOrganization: {
            '@type': 'Organization',
            name: `Nigerian ${recruitment.branch}`,
            sameAs: recruitment.portal_url,
            logo: 'https://recruitmenttracker.com.ng/assets/logo.png'
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
            },
        },
    };

    const faqData = recruitment.requirements && recruitment.requirements.length > 0 ? {
        mainEntity: [
            {
                '@type': 'Question',
                name: `What are the requirements for ${recruitment.title}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: recruitment.requirements.join(' '),
                },
            },
            {
                '@type': 'Question',
                name: `When is the deadline for ${recruitment.title}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `The deadline for application is ${new Date(recruitment.deadline_date).toLocaleDateString()}.`,
                },
            },
        ],
    } : null;

    return (
        <>
            {showJobPosting && <StructuredData type="JobPosting" data={jobData} />}
            {faqData && <StructuredData type="FAQPage" data={faqData} />}
        </>
    );
};

export const WebSiteSchema: React.FC = () => {
    const data = {
        name: 'Nigeria Recruitment Tracker',
        url: 'https://recruitmenttracker.com.ng',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://recruitmenttracker.com.ng/recruitments?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
        }
    };
    return <StructuredData type="WebSite" data={data} />;
};

export const OrganizationSchema: React.FC = () => {
    const data = {
        name: 'Nigeria Recruitment Tracker',
        url: 'https://recruitmenttracker.com.ng',
        logo: 'https://recruitmenttracker.com.ng/assets/logo.png',
        sameAs: [
            'https://github.com/Obed-hub/recruitment-tracker'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'support@recruitmenttracker.com.ng'
        }
    };
    return <StructuredData type="Organization" data={data} />;
};

interface FAQItem {
    question: string;
    answer: string;
}

interface JobPostingSchemaProps {
    title: string;
    description: string;
    organization: string;
    location?: string;
    datePosted: string;
    validThrough?: string;
    employmentType?: string;
    directApply?: boolean;
    url?: string;
}

export const JobPostingSchema: React.FC<JobPostingSchemaProps> = ({
    title,
    description,
    organization,
    location = 'Nigeria',
    datePosted,
    validThrough,
    employmentType = 'FULL_TIME',
    directApply = true,
    url,
}) => {
    const jobData: Record<string, any> = {
        title,
        description,
        datePosted: safeISODate(datePosted),
        employmentType,
        directApply,
        hiringOrganization: {
            '@type': 'Organization',
            name: organization,
            logo: 'https://recruitmenttracker.com.ng/assets/logo.png',
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
                addressLocality: location,
            },
        },
    };

    if (validThrough) {
        jobData.validThrough = safeISODate(validThrough);
    }
    if (url) {
        jobData.url = url;
    }

    return <StructuredData type="JobPosting" data={jobData} />;
};

export const FAQPageSchema: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
    if (!faqs || faqs.length === 0) return null;
    const data = {
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };
    return <StructuredData type="FAQPage" data={data} />;
};

interface QuizQuestion {
    question: string;
    options: string[];
    correctOptionIndex: number;
    explanation?: string;
}

export const QuizSchema: React.FC<{
    quizName: string;
    description: string;
    questions: QuizQuestion[];
}> = ({ quizName, description, questions }) => {
    if (!questions || questions.length === 0) return null;

    const data = {
        name: quizName,
        description: description,
        learningResourceType: 'Practice problem',
        hasPart: questions.map((q, idx) => {
            const correctText = q.options[q.correctOptionIndex];
            const incorrectAnswers = q.options.filter((_, oIdx) => oIdx !== q.correctOptionIndex);

            return {
                '@type': 'Question',
                name: `Question ${idx + 1}`,
                text: q.question,
                eduQuestionType: 'Multiple choice',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: correctText,
                    comment: q.explanation ? {
                        '@type': 'Comment',
                        text: q.explanation
                    } : undefined
                },
                suggestedAnswer: incorrectAnswers.map(ans => ({
                    '@type': 'Answer',
                    text: ans
                }))
            };
        })
    };
    return <StructuredData type="Quiz" data={data} />;
};

interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    image?: string;
    datePublished?: string;
    publishedAt?: string;
    dateModified?: string;
    updatedAt?: string;
    authorName?: string;
    publisherName?: string;
    publisherLogo?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
    title,
    description,
    url,
    image = 'https://recruitmenttracker.com.ng/assets/logo.png',
    datePublished,
    publishedAt,
    dateModified,
    updatedAt,
    authorName = 'Nigeria Recruitment Tracker Editorial Team',
    publisherName = 'Nigeria Recruitment Tracker',
    publisherLogo = 'https://recruitmenttracker.com.ng/assets/logo.png',
}) => {
    const siteUrl = 'https://recruitmenttracker.com.ng';
    const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url.startsWith('/') ? url : '/' + url}`;
    const pubDate = safeISODate(publishedAt || datePublished);
    const modDate = safeISODate(updatedAt || dateModified || pubDate);

    const data = {
        headline: title,
        description: description,
        image: image,
        datePublished: pubDate,
        dateModified: modDate,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: publisherName,
            logo: {
                '@type': 'ImageObject',
                url: publisherLogo,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': fullUrl,
        },
    };
    return <StructuredData type="NewsArticle" data={data} />;
};

export const HowToSchema: React.FC<{
    name: string;
    description: string;
    steps: { name: string; text: string }[];
    totalTime?: string;
}> = ({ name, description, steps, totalTime = 'PT5M' }) => {
    const data = {
        name,
        description,
        totalTime,
        step: steps.map((s, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: s.name,
            text: s.text,
        }))
    };
    return <StructuredData type="HowTo" data={data} />;
};

export interface BreadcrumbItem {
    name: string;
    item?: string;
    url?: string;
}

export const BreadcrumbListSchema: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
    if (!items || items.length === 0) return null;
    const data = {
        itemListElement: items.map((crumb, idx) => {
            const rawUrl = crumb.item || crumb.url || '/';
            const fullUrl = rawUrl.startsWith('http') ? rawUrl : `https://recruitmenttracker.com.ng${rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`}`;
            return {
                '@type': 'ListItem',
                position: idx + 1,
                name: crumb.name,
                item: fullUrl,
            };
        }),
    };
    return <StructuredData type="BreadcrumbList" data={data} />;
};

export interface ProductSchemaProps {
    name: string;
    description: string;
    image: string;
    price: string | number;
    priceCurrency?: string;
    sku?: string;
    mpn?: string;
    brandName?: string;
    ratingValue?: number;
    reviewCount?: number;
    availability?: string;
    url?: string;
}

export const ProductSchema: React.FC<ProductSchemaProps> = ({
    name,
    description,
    image,
    price,
    priceCurrency = 'NGN',
    sku = 'MIL-SCREEN-2026',
    mpn = 'NG-MIL-2026',
    brandName = 'Nigeria Recruitment Tracker',
    ratingValue = 4.9,
    reviewCount = 492,
    availability = 'https://schema.org/InStock',
    url = 'https://recruitmenttracker.com.ng/military-screening-guide',
}) => {
    const data = {
        name,
        description,
        image: image.startsWith('http') ? image : `https://recruitmenttracker.com.ng${image.startsWith('/') ? image : '/' + image}`,
        sku,
        mpn,
        brand: {
            '@type': 'Brand',
            name: brandName,
        },
        offers: {
            '@type': 'Offer',
            url: url.startsWith('http') ? url : `https://recruitmenttracker.com.ng${url.startsWith('/') ? url : '/' + url}`,
            priceCurrency,
            price: String(price),
            priceValidUntil: '2026-12-31',
            availability,
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
                '@type': 'Organization',
                name: brandName,
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: String(ratingValue),
            reviewCount: String(reviewCount),
            bestRating: '5',
            worstRating: '1',
        },
    };
    return <StructuredData type="Product" data={data} />;
};


