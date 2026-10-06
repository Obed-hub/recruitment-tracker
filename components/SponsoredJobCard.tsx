import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { subscribeToSponsoredAd, recordAdImpression, recordAdClick, SponsoredAdConfig, DEFAULT_SPONSORED_AD } from '../services/firebase';

export interface SponsoredJobProps {
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  requirements?: string[];
  directUrl?: string; // Direct link e.g. https://wa.link/64qnjm
  whatsappNumber?: string; // Optional phone number, e.g. "2348000000000"
  prefilledMessage?: string;
  className?: string;
  placementContext?: string; // For GA4 tracking (e.g., 'homepage_feed', 'navy_batch_39', 'salary_hub')
}

export const SponsoredJobCard: React.FC<SponsoredJobProps> = ({
  title: propTitle,
  company: propCompany,
  location: propLocation,
  salary: propSalary,
  requirements: propRequirements,
  directUrl: propDirectUrl,
  whatsappNumber: propWhatsappNumber,
  prefilledMessage: propPrefilledMessage,
  className = '',
  placementContext = 'general'
}) => {
  const [adConfig, setAdConfig] = useState<SponsoredAdConfig>(DEFAULT_SPONSORED_AD);
  const cardRef = useRef<HTMLDivElement>(null);
  const impressionTracked = useRef<boolean>(false);

  // Subscribe to live Firebase configuration
  useEffect(() => {
    const unsub = subscribeToSponsoredAd((liveAd) => {
      if (liveAd) {
        setAdConfig(liveAd);
      }
    });
    return () => unsub();
  }, []);

  // Compute final values
  const title = propTitle || adConfig.title || DEFAULT_SPONSORED_AD.title;
  const company = propCompany || adConfig.company || DEFAULT_SPONSORED_AD.company;
  const location = propLocation || adConfig.location || DEFAULT_SPONSORED_AD.location;
  const salary = propSalary || adConfig.salary || DEFAULT_SPONSORED_AD.salary;
  const requirements = propRequirements || adConfig.requirements || DEFAULT_SPONSORED_AD.requirements;
  const directUrl = propDirectUrl || adConfig.directUrl || DEFAULT_SPONSORED_AD.directUrl;
  const whatsappNumber = propWhatsappNumber || adConfig.whatsappNumber || '';
  const prefilledMessage = propPrefilledMessage || adConfig.prefilledMessage || DEFAULT_SPONSORED_AD.prefilledMessage;
  const isActive = adConfig.active !== false;

  // Track ad impression in GA4 when visible (only if active)
  useEffect(() => {
    if (!isActive || impressionTracked.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !impressionTracked.current) {
          impressionTracked.current = true;
          // Record real-time impression count in Firebase
          recordAdImpression(placementContext);
          // GA4 tracking
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'ad_impression', {
              event_category: 'Sponsored Ads',
              ad_name: title,
              advertiser: company,
              placement_location: placementContext,
              page_url: window.location.pathname
            });
          }
        }
      });
    }, { threshold: 0.3 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isActive, title, company, placementContext]);

  // If ad is toggled OFF in Admin, hide completely
  if (!isActive) {
    return null;
  }

  // Construct Destination Link
  const encodedText = encodeURIComponent(prefilledMessage || '');
  const targetUrl = directUrl || (whatsappNumber 
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedText}`
    : `https://api.whatsapp.com/send?text=${encodedText}`);

  const handleApplyClick = () => {
    // Record real-time click in Firebase
    recordAdClick(placementContext);

    // GA4 Click Event Tracking
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'sponsored_job_apply', {
        event_category: 'Sponsored Ads',
        event_label: `${title} - ${company}`,
        ad_name: title,
        advertiser: company,
        placement_location: placementContext,
        target_destination: 'WhatsApp',
        destination_url: targetUrl,
        page_url: window.location.pathname
      });
    }

    const link = document.createElement('a');
    link.href = targetUrl;
    link.target = '_blank';
    link.rel = 'sponsored nofollow noopener noreferrer';
    link.click();
  };

  return (
    <aside 
      aria-label="Sponsored Vacancy"
      className={`w-full max-w-xl mx-auto my-3.5 ${className}`}
    >
      <div 
        ref={cardRef}
        className="w-full bg-[#0d0e12] text-white rounded-xl p-4 sm:p-5 border border-neutral-800 shadow-xl relative overflow-hidden transition-all hover:border-neutral-700"
      >
        {/* Top Tag */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            SPONSORED POST
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-0.5">
          {title}
        </h3>

        {/* Company & Location with Hybrid / Remote */}
        <p className="text-xs text-neutral-400 mb-1.5 flex items-center gap-1.5">
          <span>{company}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-300 font-medium">{location}</span>
        </p>

        {/* Salary in Green */}
        <div className="text-sm sm:text-base font-bold text-emerald-400 mb-3">
          {salary}
        </div>

        {/* Requirements Section */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-neutral-200 mb-1.5">
            Requirements
          </h4>
          <ul className="space-y-1.5 text-xs text-neutral-300">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-neutral-400 select-none">•</span>
                <span className="leading-snug">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="mb-2.5">
          <button
            onClick={handleApplyClick}
            type="button"
            className="w-full bg-neutral-900 hover:bg-neutral-800 active:scale-[0.99] border border-neutral-700/80 hover:border-emerald-500/50 text-white rounded-lg py-2.5 px-3 flex flex-col items-center justify-center transition-all group cursor-pointer"
          >
            <span className="font-semibold text-xs sm:text-sm text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Apply via WhatsApp
            </span>
            <span className="text-[10px] text-neutral-400 mt-0.5">
              Direct application to employer HR desk
            </span>
          </button>
        </div>

        {/* Disclaimer Footer */}
        <p className="text-[10px] text-neutral-400 text-center leading-tight">
          Verified vacancy • 100% Free to apply. Employers never charge interview fees.
        </p>
      </div>
    </aside>
  );
};

export default SponsoredJobCard;
