import React, { useEffect, useRef, useState, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, 
  Calendar, Award, CheckCircle2, ShieldCheck, Flame 
} from 'lucide-react';
import { 
  subscribeToSponsoredAd, recordAdImpression, recordAdClick, 
  SponsoredAdConfig, DEFAULT_SPONSORED_AD, DEFAULT_CAROUSEL_SLIDES, CarouselSlide 
} from '../services/firebase';

export interface SponsoredJobProps {
  title?: string;
  company?: string;
  location?: string;
  salary?: string;
  requirements?: string[];
  directUrl?: string;
  whatsappNumber?: string;
  prefilledMessage?: string;
  className?: string;
  placementContext?: string; // For GA4 and Firebase tracking (e.g. 'homepage_feed', 'navy_batch_39', 'which_form_is_out')
}

export const SponsoredJobCard: React.FC<SponsoredJobProps> = ({
  title: propTitle,
  company: propCompany,
  location: propLocation,
  salary: propSalary,
  requirements: propRequirements,
  directUrl: propDirectUrl,
  className = '',
  placementContext = 'general'
}) => {
  const [adConfig, setAdConfig] = useState<SponsoredAdConfig>(DEFAULT_SPONSORED_AD);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const impressionTracked = useRef<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Subscribe to live Firebase configuration
  useEffect(() => {
    const unsub = subscribeToSponsoredAd((liveAd) => {
      if (liveAd) {
        setAdConfig(liveAd);
      }
    });
    return () => unsub();
  }, []);

  const slides: CarouselSlide[] = (adConfig.slides && adConfig.slides.length > 0)
    ? adConfig.slides
    : DEFAULT_CAROUSEL_SLIDES;

  const title = propTitle || adConfig.title || DEFAULT_SPONSORED_AD.title;
  const company = propCompany || adConfig.company || DEFAULT_SPONSORED_AD.company;
  const location = propLocation || adConfig.location || DEFAULT_SPONSORED_AD.location;
  const salary = propSalary || adConfig.salary || DEFAULT_SPONSORED_AD.salary;
  const directUrl = propDirectUrl || adConfig.directUrl || DEFAULT_SPONSORED_AD.directUrl;
  const headline = adConfig.headline || DEFAULT_SPONSORED_AD.headline || 
    "Jobs don’t go to the most qualified, they go to the most prepared. Replace hope with the exact framework that gets you hired!";
  const cohortNotice = adConfig.cohortNotice || DEFAULT_SPONSORED_AD.cohortNotice || 
    "Last cohort of the year starts 6th, November 2026.";
  const closingCall = adConfig.closingCall || DEFAULT_SPONSORED_AD.closingCall || 
    "End the year strong, start 2027 empowered.";
  const isActive = adConfig.active !== false;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance carousel every 4.5 seconds when not hovered/paused
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, slides.length, nextSlide]);

  // Track impression when card scrolls into view
  useEffect(() => {
    if (!isActive || impressionTracked.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !impressionTracked.current) {
          impressionTracked.current = true;
          recordAdImpression(placementContext);
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
    }, { threshold: 0.25 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isActive, title, company, placementContext]);

  if (!isActive) {
    return null;
  }

  const handleApplyClick = () => {
    recordAdClick(placementContext);

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'sponsored_job_apply', {
        event_category: 'Sponsored Ads',
        event_label: `${title} - ${company}`,
        ad_name: title,
        advertiser: company,
        placement_location: placementContext,
        target_destination: 'GraduatePro',
        destination_url: directUrl,
        page_url: window.location.pathname
      });
    }

    window.open(directUrl, '_blank', 'noopener,noreferrer');
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Preload all carousel slide images in memory for instant transitions without latency
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.image) {
        const img = new Image();
        img.src = slide.image;
      }
    });
  }, [slides]);

  const activeSlideData = slides[currentSlide] || slides[0];

  return (
    <aside 
      aria-label="Sponsored Career Bootcamp"
      className={`w-full max-w-xl mx-auto my-4 ${className}`}
    >
      <div 
        ref={cardRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="w-full bg-gradient-to-b from-slate-900 via-[#0b1120] to-[#070b14] text-white rounded-2xl p-4 sm:p-5 border border-amber-500/30 hover:border-amber-400/60 shadow-xl shadow-amber-950/20 relative overflow-hidden transition-all duration-300"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Sparkles className="w-3 h-3 text-amber-400" />
              SPONSORED
            </span>
            <span className="text-[11px] font-semibold text-slate-300 hidden sm:inline">
              Career Acceleration Program
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-200/90 font-medium">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-bold text-amber-300 tracking-tight">The Employment Bootcamp 8.0</span>
          </div>
        </div>

        {/* Carousel Visual Frame */}
        <div 
          className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-slate-700/60 shadow-inner group/carousel cursor-pointer"
          onClick={handleApplyClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Image (Square / 1:1 Aspect Frame) */}
          <div className="aspect-square w-full relative bg-slate-950 flex items-center justify-center overflow-hidden">
            <img
              src={activeSlideData.image}
              alt={activeSlideData.caption || 'The Employment Bootcamp 8.0 Slide'}
              className="w-full h-full object-cover sm:object-contain transition-transform duration-500 group-hover/carousel:scale-[1.02]"
              loading={currentSlide === 0 ? "eager" : "lazy"}
              fetchPriority={currentSlide === 0 ? "high" : "auto"}
              decoding="async"
              width={800}
              height={800}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all shadow-md opacity-85 group-hover/carousel:opacity-100 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all shadow-md opacity-85 group-hover/carousel:opacity-100 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots & Slide Counter Strip (Below Image View) */}
        <div className="flex items-center justify-between px-1 mt-2.5">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Jump to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-6 h-1.5 bg-amber-400 shadow-sm shadow-amber-400/50' 
                    : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <span className="text-[11px] font-bold text-slate-400 tracking-wider">
            {currentSlide + 1} <span className="text-slate-600">/</span> {slides.length}
          </span>
        </div>

        {/* Persuasive Copy & Urgency Box */}
        <div className="mt-3.5 space-y-2.5">
          {/* Main Core Hook from User */}
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60">
            <h4 className="text-xs sm:text-sm font-extrabold text-amber-200 leading-snug tracking-tight">
              {headline}
            </h4>
          </div>

          {/* Urgent Cohort Announcement Callout */}
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/10 rounded-xl p-3 border border-amber-500/30 flex items-start gap-2.5">
            <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
            <div className="text-xs">
              <p className="font-bold text-white flex items-center gap-1.5 flex-wrap">
                <span>{cohortNotice}</span>
              </p>
              <p className="text-amber-200/90 font-medium mt-0.5">
                {closingCall}
              </p>
            </div>
          </div>

          {/* High-Converting CTA Button */}
          <div>
            <button
              onClick={handleApplyClick}
              type="button"
              className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/25 active:scale-[0.99] group cursor-pointer text-sm"
            >
              <Calendar className="w-4 h-4 text-slate-900 group-hover:rotate-6 transition-transform" />
              <span>Apply at graduatepro.starlin.africa</span>
              <ArrowUpRight className="w-4 h-4 text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
              <span className="flex items-center gap-1 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Program • Starlin Africa
              </span>
              <span className="text-amber-300 font-semibold hover:underline cursor-pointer" onClick={handleApplyClick}>
                graduatepro.starlin.africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const SponsoredCarouselAd = SponsoredJobCard;
export default SponsoredJobCard;
