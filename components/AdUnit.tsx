import React, { useEffect, useRef, useState } from 'react';

interface AdUnitProps {
  slot?: string;
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: 'true' | 'false';
  style?: React.CSSProperties;
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
  slot,
  slotId,
  format = 'auto',
  responsive = 'true',
  style = { display: 'block' },
  className = '',
}) => {
  const adSlot = slot || slotId || 'DEFAULT_SLOT';
  const containerRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const hasPushedRef = useRef<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Measure container width and ensure it is rendered and visible (> 0 width)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkWidth = () => {
      if (hasPushedRef.current) return;
      const width = container.offsetWidth || container.clientWidth;
      if (width > 0) {
        setIsReady(true);
      }
    };

    // Check on next frame after CSS styles and layout have settled
    const rafId = requestAnimationFrame(checkWidth);

    // Use ResizeObserver to detect when the element becomes visible
    // (e.g. screen orientation change, tab switch, or responsive breakpoint)
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          if (width > 0 && !hasPushedRef.current) {
            setIsReady(true);
          }
        }
      });
      resizeObserver.observe(container);
    }

    return () => {
      cancelAnimationFrame(rafId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // Once the container is verified visible and isReady is true, initialize the ad
  useEffect(() => {
    if (!isReady || hasPushedRef.current) return;

    // Small delay to allow the newly mounted <ins> element to be styled by browser
    const timer = setTimeout(() => {
      const ins = insRef.current;
      const container = containerRef.current;
      if (!ins || !container) return;

      // Ensure the element has a valid positive width in the DOM before pushing
      const availableWidth = container.offsetWidth || ins.offsetWidth || container.clientWidth;
      if (availableWidth <= 0) return;

      // If Google already processed this ins, don't push again
      if (
        hasPushedRef.current ||
        ins.getAttribute('data-adsbygoogle-status') ||
        ins.hasChildNodes()
      ) {
        hasPushedRef.current = true;
        return;
      }

      try {
        hasPushedRef.current = true;
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err: any) {
        // Silently handle any AdSense TagErrors (e.g., in dev/staging environments or strict-mode remounts)
        const msg = err?.message || '';
        if (!msg.includes('TagError') && !msg.includes('adsbygoogle')) {
          console.warn('AdSense notice:', err);
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className={`ad-container my-6 overflow-hidden min-h-[90px] sm:min-h-[250px] w-full flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100/60 ${className}`}
    >
      {isReady ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-7004052052030908"
          data-ad-slot={adSlot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      ) : (
        /* Subtle placeholder until element layout is computed with positive width */
        <div className="w-full h-full min-h-[90px] flex items-center justify-center text-xs text-slate-400 font-medium tracking-wide">
          Advertisement
        </div>
      )}
    </div>
  );
};

export default AdUnit;
