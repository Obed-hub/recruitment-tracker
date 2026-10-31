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
  const rawSlot = slot || slotId || '';
  // Only pass data-ad-slot if it is a valid Google AdSense numeric ID
  const isNumericSlot = /^\d+$/.test(rawSlot);
  const containerRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const hasPushedRef = useRef<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isUnfilled, setIsUnfilled] = useState<boolean>(false);

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

    const rafId = requestAnimationFrame(checkWidth);

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

  // Monitor AdSense status: if Google marks the ad as unfilled or hidden, auto-collapse
  useEffect(() => {
    const ins = insRef.current;
    if (!ins) return;

    const checkStatus = () => {
      const status = ins.getAttribute('data-ad-status');
      if (status === 'unfilled') {
        setIsUnfilled(true);
        return;
      }
      if (ins.style.display === 'none') {
        setIsUnfilled(true);
        return;
      }
      // If AdSense populated an iframe with 0 height or unfilled status
      const iframe = ins.querySelector('iframe');
      if (iframe && (iframe.getAttribute('data-ad-status') === 'unfilled' || iframe.height === '0')) {
        setIsUnfilled(true);
      }
    };

    const mutationObserver = new MutationObserver(() => {
      checkStatus();
    });

    mutationObserver.observe(ins, {
      attributes: true,
      attributeFilter: ['data-ad-status', 'style', 'class'],
      childList: true,
      subtree: true,
    });

    // Check after a timeout to collapse any abandoned empty slots
    const fallbackTimer = setTimeout(checkStatus, 3000);

    return () => {
      mutationObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isReady]);

  // Once the container is verified visible and isReady is true, initialize the ad
  useEffect(() => {
    if (!isReady || hasPushedRef.current || isUnfilled) return;

    const timer = setTimeout(() => {
      const ins = insRef.current;
      const container = containerRef.current;
      if (!ins || !container) return;

      const availableWidth = container.offsetWidth || ins.offsetWidth || container.clientWidth;
      if (availableWidth <= 0) return;

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
        const msg = err?.message || '';
        if (!msg.includes('TagError') && !msg.includes('adsbygoogle')) {
          console.warn('AdSense notice:', err);
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [isReady, isUnfilled]);

  if (isUnfilled) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`ad-container overflow-hidden w-full flex items-center justify-center transition-all ${
        isReady ? 'my-4 min-h-0' : 'min-h-0'
      } ${className}`}
    >
      {isReady && (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-7004052052030908"
          {...(isNumericSlot ? { 'data-ad-slot': rawSlot } : {})}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      )}
    </div>
  );
};

export default AdUnit;
