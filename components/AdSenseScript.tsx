import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamically loads the Google AdSense script.
 * This approach allows us to exclude the script from sensitive or "thin" pages
 * like the Admin panel, which helps resolve "Screens without publisher content" issues.
 */
const AdSenseScript: React.FC = () => {
    const location = useLocation();
    const isAdminPage = location.pathname.startsWith('/admin');

    useEffect(() => {
        // We only load the script if we're not on an admin page
        if (isAdminPage) return;

        const scriptId = 'adsense-loader-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7004052052030908';
        script.async = true;
        script.crossOrigin = 'anonymous';

        document.head.appendChild(script);

        return () => {
            // Optional: Cleanup if needed, though usually script tags remain
        };
    }, [isAdminPage]);

    return null;
};

export default AdSenseScript;
