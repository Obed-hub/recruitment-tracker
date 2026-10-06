import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Dynamically loads the Google AdSense script.
 * Excludes the script from sensitive or "thin" pages (like Admin, Privacy, Terms)
 * to comply with "Screens without publisher content" policies.
 * Also installs global error interception to prevent AdSense TagErrors from bubbling
 * up as unhandled exceptions in Single Page Applications.
 */
const AdSenseScript: React.FC = () => {
    const location = useLocation();

    // Proactively suppress benign AdSense TagErrors in Single Page Applications
    useEffect(() => {
        const isAdSenseTagError = (err: any) => {
            const msg = typeof err === 'string' ? err : (err?.message || err?.name || String(err || ''));
            return (
                msg.includes('adsbygoogle') ||
                msg.includes('TagError') ||
                msg.includes('availableWidth') ||
                msg.includes('already have ads in them') ||
                msg.includes('No slot size')
            );
        };

        const handleGlobalError = (event: ErrorEvent) => {
            if (isAdSenseTagError(event.message) || isAdSenseTagError(event.error)) {
                event.preventDefault();
                if (event.stopImmediatePropagation) {
                    event.stopImmediatePropagation();
                }
                return true;
            }
        };

        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            if (isAdSenseTagError(event.reason)) {
                event.preventDefault();
                if (event.stopImmediatePropagation) {
                    event.stopImmediatePropagation();
                }
                return true;
            }
        };

        window.addEventListener('error', handleGlobalError, true);
        window.addEventListener('unhandledrejection', handleUnhandledRejection, true);

        return () => {
            window.removeEventListener('error', handleGlobalError, true);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection, true);
        };
    }, []);

    // Define "thin" or sensitive pages where AdSense should not load
    const isThinPage = [
        '/admin',
        '/privacy',
        '/terms',
        '/contact',
        '/about'
    ].some(path => location.pathname.startsWith(path));

    useEffect(() => {
        if (isThinPage) return;

        const scriptId = 'adsense-loader-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7004052052030908';
        script.async = true;
        script.crossOrigin = 'anonymous';

        document.head.appendChild(script);
    }, [isThinPage]);

    return null;
};

export default AdSenseScript;
