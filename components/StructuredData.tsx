import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RecruitmentUpdate } from '../types';

interface StructuredDataProps {
    type: 'JobPosting' | 'FAQPage' | 'WebPage';
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

export const RecruitmentSchema: React.FC<{ recruitment: RecruitmentUpdate }> = ({ recruitment }) => {
    const jobData = {
        title: recruitment.title,
        description: recruitment.description,
        datePosted: new Date().toISOString(), // Fallback if no post date
        validThrough: new Date(recruitment.deadline_date).toISOString(),
        employmentType: 'FULL_TIME',
        hiringOrganization: {
            '@type': 'Organization',
            name: `Nigerian ${recruitment.branch}`,
            sameAs: recruitment.portal_url,
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
            <StructuredData type="JobPosting" data={jobData} />
            {faqData && <StructuredData type="FAQPage" data={faqData} />}
        </>
    );
};
