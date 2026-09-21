import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures that whenever the user clicks any navigation or footer link,
 * the window instantly scrolls to the top of the newly loaded page.
 * Without this, clicking footer links keeps the scroll position at the very bottom,
 * giving users the impression that clicking the link "did nothing".
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there's an anchor hash, let the browser handle anchor jumping
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Otherwise, instantly reset the scroll to the top of the viewport
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
