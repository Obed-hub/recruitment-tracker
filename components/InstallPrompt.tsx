import React, { useState, useEffect } from 'react';
import { Download, X, Bell } from 'lucide-react';

const InstallPrompt: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Check if user has already dismissed or installed
            const isDismissed = localStorage.getItem('pwa-prompt-dismissed');
            if (!isDismissed) {
                setIsVisible(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('pwa-prompt-dismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 animate-bounce-in">
            <div className="bg-military-blue text-white p-4 rounded-xl shadow-2xl border border-blue-400/30 flex items-center justify-between gap-4 max-w-lg mx-auto overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>

                <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-2 rounded-lg shrink-0">
                        <Bell className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm">Install App for Updates</h4>
                        <p className="text-[10px] opacity-80">Don't miss the latest recruitment news & shortlists.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleInstallClick}
                        className="bg-yellow-400 hover:bg-yellow-500 text-military-blue font-bold text-xs px-4 py-2 rounded-lg transition-all active:scale-95 flex items-center gap-2"
                    >
                        <Download className="w-3.5 h-3.5" /> Install
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallPrompt;
