import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbStep {
  name: string;
  url: string;
}

const SITE_URL = 'https://recruitmenttracker.com.ng';

// Known static and hub mappings for high-precision SEO titles
const KNOWN_LABELS: Record<string, string> = {
  // Main Hubs
  'recruitments': 'All Recruitments',
  'past-questions': 'Past Questions & CBT',
  'guides': 'Guides & Tutorials',
  'blog': 'Blog & Analysis',
  'salary-comparison': 'Salary Comparison (2026)',
  'shortlist-hub': 'Shortlists & Venues',
  'which-recruitment-form-is-out-now': 'Which Form is Out Now?',
  'eligibility': 'Eligibility Checker',
  'faqs': 'Recruitment FAQs',

  // High-Priority Dedicated Pages
  'nigerian-navy-recruitment-2026': 'Nigerian Navy Recruitment 2026 (Batch 39)',
  'navy-salary': 'Nigerian Navy Salary Structure',
  'army-salary': 'Nigerian Army Salary Structure',
  'police-salary': 'Nigeria Police Salary Structure',
  'customs-salary': 'Nigeria Customs Salary Structure',
  'airforce-salary': 'Nigerian Air Force Salary Structure',
  'civil-defence-salary': 'Civil Defence (NSCDC) Salary',
  'immigration-salary': 'Nigeria Immigration (NIS) Salary',
  'nnpc-salary': 'NNPC Salary Scale',
  'cbn-salary': 'CBN Salary Scale',

  // Status & Topic Hubs
  'is-nigerian-navy-batch-39-form-out': 'Is Nigerian Navy Batch 39 Form Out?',
  'is-nigerian-army-form-out': 'Is Nigerian Army Form Out 2026?',
  'is-nigerian-air-force-form-out': 'Is Nigerian Air Force Form Out 2026?',
  'is-police-recruitment-form-out': 'Is Police Recruitment Form Out 2026?',
  'is-cdcfib-recruitment-form-out': 'Is CDCFIB Recruitment Form Out 2026?',
  'how-to-apply-nigerian-navy-batch': 'How to Apply Nigerian Navy Batch 39',
  'how-to-apply-nigerian-air-force': 'How to Apply Nigerian Air Force BMTC',
  'how-to-apply-police-constable': 'How to Apply Police Constable',
  'how-to-apply-cdcfib-portal': 'How to Apply CDCFIB Portal',
  'npf-recruitment-portal': 'Nigeria Police Recruitment Portal',
  'nigerian-army-88-rri-recruitment': 'Nigerian Army 88 RRI Portal',
  'nigerian-navy-dssc-recruitment': 'Nigerian Navy DSSC Portal',
  'nis-recruitment-portal': 'Nigeria Immigration Service Portal',
  'ndlea-recruitment-portal': 'NDLEA Recruitment Portal',
  'frsc-recruitment-portal': 'FRSC Recruitment Portal',
  'fcsc-recruitment-portal': 'Federal Civil Service (FCSC) Portal',
  'teachers-recruitment-subeb': 'SUBEB Teachers Recruitment Portal',
  'nuc-recruitment-portal': 'National Universities Commission (NUC) Portal',
  'print-army-screening-slip': 'Print Army Screening Slip',
  'nigerian-army-shortlisted-candidates-pdf': 'Nigerian Army Shortlisted Candidates PDF',
  'police-shortlisted-candidates-cbt-date': 'Police Shortlist & CBT Exam Date',
  'cdcfib-cbt-past-questions-free-practice': 'CDCFIB CBT Questions Practice',
  'nigerian-navy-past-questions-bmtc-exam': 'Navy CBT Past Questions (BMTC)',
  'police-recruitment-cbt-past-questions': 'Police Recruitment CBT Past Questions',
  'military-physical-standards-height-requirements': 'Military Physical & Height Standards',
  'police-recruitment-requirements-age-limit': 'Police Recruitment Age Limit & Requirements',
  'ndlea-recruitment-requirements-qualifications': 'NDLEA Qualifications & Requirements',
  'navy-dssc-vs-bmtc': 'Navy DSSC vs BMTC Enlistment Comparison',
  'military-medical-screening-test-requirements': 'Military Medical Screening Standards',
  'correct-cdcfib-portal-errors': 'Correct CDCFIB Portal Errors',
  'efcc-recruitment-screening-qualifications': 'EFCC Screening & Qualifications',

  // Portal Actions
  'navy-recruitment-portal-login': 'Navy Recruitment Portal Login',
  'navy-print-confirmation-slip': 'Reprint Navy Confirmation Slip',
  'navy-guarantor-form': 'Download Navy Guarantor Form',
  'navy-update-documents': 'Navy Document Re-upload',

  'army-recruitment-portal-login': 'Army Portal Login',
  'recruitment-army-mil-ng-portal-login': 'recruitment.army.mil.ng Portal Login',
  'army-guarantor-form': 'Download Army Guarantor Form',
  'army-update-documents': 'Army Document Re-upload',

  'police-recruitment-portal-login': 'Police Portal Login',
  'police-print-confirmation-slip': 'Reprint Police Slip',
  'police-guarantor-form': 'Download Police Guarantor Form',
  'police-update-documents': 'Police Document Update',

  'cdcfib-portal-login': 'CDCFIB Portal Login',
  'cdcfib-print-confirmation-slip': 'Reprint CDCFIB Slip',
  'cdcfib-guarantor-form': 'CDCFIB Guarantor Form',
  'cdcfib-update-documents': 'CDCFIB Document Correction',

  'immigration-portal-login': 'Immigration Portal Login',
  'immigration-print-confirmation-slip': 'Reprint NIS Confirmation Slip',
  'immigration-guarantor-form': 'Download NIS Guarantor Form',
  'immigration-update-documents': 'NIS Document Update',

  'customs-portal-login': 'Customs Portal Login',
  'customs-print-confirmation-slip': 'Reprint Customs Slip',
  'customs-guarantor-form': 'Download Customs Guarantor Form',
  'customs-update-documents': 'Customs Document Update',

  // Agency Hubs
  'navy-recruitment': 'Nigerian Navy Portal Hub',
  'army-recruitment': 'Nigerian Army Portal Hub',
  'police-recruitment': 'Nigeria Police Portal Hub',
  'airforce-recruitment': 'Nigerian Air Force Portal Hub',
  'customs-recruitment': 'Nigeria Customs Portal Hub',
  'civil-defence-recruitment': 'Civil Defence (NSCDC) Hub',
  'immigration-recruitment': 'Nigeria Immigration (NIS) Hub',
  'ndlea-recruitment': 'NDLEA Recruitment Hub',
  'frsc-recruitment': 'FRSC Portal Hub',
  'fire-service-recruitment': 'Federal Fire Service Hub',
  'efcc-recruitment': 'EFCC Portal Hub',
  'nda-recruitment': 'NDA Regular Combatant Hub',
  'navy-dssc-recruitment': 'Nigerian Navy DSSC Hub',

  // Institutional Pages
  'about': 'About Us',
  'contact': 'Contact & Support',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'disclaimer': 'Official Disclaimer'
};

// CBT Branch Name Mappings
const CBT_BRANCH_NAMES: Record<string, string> = {
  'navy': 'Navy CBT Exam Practice',
  'army': 'Army CBT Exam Practice',
  'police': 'Police CBT Exam Practice',
  'air-force': 'Air Force CBT Practice',
  'civil-defence': 'Civil Defence CBT Practice',
  'customs': 'Customs CBT Practice',
  'immigration': 'Immigration CBT Practice',
  'ndlea': 'NDLEA CBT Practice',
  'frsc': 'FRSC CBT Practice',
  'fire-service': 'Fire Service CBT Practice',
  'nda': 'NDA Exam Practice',
  'general': 'General Military & Paramilitary Test'
};

// Recruitment Slugs to Clean Titles
const RECRUITMENT_SLUG_NAMES: Record<string, string> = {
  'navy-batch': 'Nigerian Navy Batch 39 Ratings',
  'army-dssc': 'Nigerian Army DSSC Enlistment',
  'naf-bmtc': 'Nigerian Air Force BMTC',
  'police-constable': 'Nigeria Police Constable Intake',
  'nscdc-general': 'Civil Defence (NSCDC) Cadres',
  'frsc-recruitment': 'Federal Road Safety (FRSC)',
  'fire-inspector': 'Federal Fire Service Inspectors',
  'immigration-inspector': 'Nigeria Immigration Service (NIS)',
  'customs-supplementary': 'Nigeria Customs Service Cadres',
  'efcc-investigator': 'EFCC Detective Superintendent',
  'fcsc-entry-level': 'Federal Civil Service Commission (FCSC)',
  'nnpc-graduate': 'NNPC Graduate Trainee',
  'cbn-entry-level': 'Central Bank of Nigeria (CBN)',
  'nimc-staff': 'NIMC Enrolment Officers',
  'ncc-entry-level': 'NCC Graduate Scheme',
  'nitda-it-officer': 'NITDA IT Officers',
  'faan-entry-level': 'FAAN Aviation Security',
  'nimasa-marine': 'NIMASA Maritime Cadets',
  'nafdac-regulatory': 'NAFDAC Regulatory Officers'
};

/**
 * Transforms a slug (e.g. "is-nigerian-navy-form-out") into readable title
 */
const formatSlugToTitle = (slug: string): string => {
  if (KNOWN_LABELS[slug]) return KNOWN_LABELS[slug];

  return slug
    .split('-')
    .map(word => {
      // Keep acronyms uppercase
      if (['cbt', 'pdf', 'dssc', 'nscdc', 'nis', 'ncs', 'ndlea', 'frsc', 'efcc', 'cbn', 'nnpc', 'nimc', 'bmtc', 'rri', 'ssce'].includes(word.toLowerCase())) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

interface BreadcrumbNavProps {
  customItems?: BreadcrumbStep[];
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ customItems }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const steps = useMemo<BreadcrumbStep[]>(() => {
    // Do not generate breadcrumbs on homepage or admin panel
    if (pathname === '/' || pathname === '/admin' || pathname === '') {
      return [];
    }

    if (customItems && customItems.length > 0) {
      return customItems;
    }

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return [];

    const result: BreadcrumbStep[] = [
      { name: 'Home', url: '/' }
    ];

    // Branch 1: Recruitment Detail Pages (/recruitments/:id)
    if (segments[0] === 'recruitments' && segments[1]) {
      result.push({ name: 'Recruitments', url: '/recruitments' });
      const recTitle = RECRUITMENT_SLUG_NAMES[segments[1]] || formatSlugToTitle(segments[1]);
      result.push({ name: recTitle, url: pathname });
      return result;
    }

    // Branch 2: Past Questions CBT Branch Pages (/past-questions/:branch)
    if (segments[0] === 'past-questions' && segments[1]) {
      result.push({ name: 'Past Questions', url: '/past-questions' });
      const branchTitle = CBT_BRANCH_NAMES[segments[1]] || formatSlugToTitle(segments[1]);
      result.push({ name: branchTitle, url: pathname });
      return result;
    }

    // Branch 3: Guides Detail Pages (/guides/:slug)
    if (segments[0] === 'guides' && segments[1]) {
      result.push({ name: 'Guides', url: '/guides' });
      result.push({ name: formatSlugToTitle(segments[1]), url: pathname });
      return result;
    }

    // Branch 4: Blog Detail Pages (/blog/:slug)
    if (segments[0] === 'blog' && segments[1]) {
      result.push({ name: 'Blog', url: '/blog' });
      result.push({ name: formatSlugToTitle(segments[1]), url: pathname });
      return result;
    }

    // Branch 5: Standalone Salary Pages (e.g. /navy-salary, /police-salary, /airforce-salary)
    if (segments[0].endsWith('-salary') && segments[0] !== 'salary-comparison') {
      result.push({ name: 'Salaries', url: '/salary-comparison' });
      result.push({ name: KNOWN_LABELS[segments[0]] || formatSlugToTitle(segments[0]), url: pathname });
      return result;
    }

    // Branch 6: Portal Action Pages (e.g. /navy-recruitment-portal-login, /police-print-confirmation-slip)
    if (
      segments[0].includes('portal-login') ||
      segments[0].includes('confirmation-slip') ||
      segments[0].includes('screening-slip') ||
      segments[0].includes('guarantor-form') ||
      segments[0].includes('update-documents')
    ) {
      result.push({ name: 'Portal Directory', url: '/recruitments' });
      result.push({ name: KNOWN_LABELS[segments[0]] || formatSlugToTitle(segments[0]), url: pathname });
      return result;
    }

    // Branch 7: Dedicated "Is Form Out" Pages
    if (segments[0].startsWith('is-') && segments[0].endsWith('-out')) {
      result.push({ name: 'Live Status', url: '/which-recruitment-form-is-out-now' });
      result.push({ name: KNOWN_LABELS[segments[0]] || formatSlugToTitle(segments[0]), url: pathname });
      return result;
    }

    // Branch 8: Standard Top-Level or Multi-Segment Route
    let accumulatedPath = '';
    segments.forEach((seg, index) => {
      accumulatedPath += `/${seg}`;
      const isLast = index === segments.length - 1;
      const label = KNOWN_LABELS[seg] || formatSlugToTitle(seg);
      result.push({
        name: label,
        url: isLast ? pathname : accumulatedPath
      });
    });

    return result;
  }, [pathname, customItems]);

  if (steps.length <= 1) {
    return null;
  }

  // Schema.org JSON-LD BreadcrumbList structure
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: steps.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: step.name,
      item: step.url === '/' ? `${SITE_URL}/` : `${SITE_URL}${step.url}`
    }))
  };

  return (
    <>
      {/* Schema.org BreadcrumbList JSON-LD for Google & Bing Indexation */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLdData)}
        </script>
      </Helmet>

      {/* Accessible, Semantic HTML Breadcrumbs with Schema Microdata */}
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-slate-100/80 backdrop-blur-xs border border-slate-200/80 rounded-xl px-3.5 py-2 mb-4 text-xs shadow-2xs overflow-x-auto whitespace-nowrap scrollbar-none"
      >
        <ol
          itemScope
          itemType="https://schema.org/BreadcrumbList"
          className="flex items-center gap-1.5 text-slate-500 font-medium"
        >
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={step.url + index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="inline-flex items-center gap-1.5"
              >
                {!isFirst && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 select-none" aria-hidden="true" />
                )}

                {isLast ? (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className="font-bold text-slate-900 truncate max-w-[220px] sm:max-w-md md:max-w-xl"
                  >
                    {step.name}
                  </span>
                ) : (
                  <Link
                    to={step.url}
                    itemProp="item"
                    className="inline-flex items-center gap-1 text-slate-600 hover:text-military-blue transition-colors group"
                  >
                    {isFirst && (
                      <Home className="w-3.5 h-3.5 text-slate-400 group-hover:text-military-blue transition-colors shrink-0" aria-hidden="true" />
                    )}
                    <span itemProp="name" className="group-hover:underline">
                      {step.name}
                    </span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;
