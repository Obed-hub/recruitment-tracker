import React, { useEffect } from 'react';

interface AdUnitProps {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: 'true' | 'false';
    style?: React.CSSProperties;
    className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({
    slot,
    format = 'auto',
    responsive = 'true',
    style = { display: 'block' },
    className = '',
}) => {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className={`ad-container my-8 overflow-hidden ${className}`}>
            <ins
                className="adsbygoogle"
                style={style}
                data-ad-client="ca-pub-7004052052030908"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive}
            />
        </div>
    );
};

export default AdUnit;
