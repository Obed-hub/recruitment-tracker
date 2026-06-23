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
