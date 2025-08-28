import React from 'react';

interface HeaderTitleProps {
    logo: React.ReactNode;
    title: React.ReactNode;
    isMobile?: boolean;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ logo, title, isMobile }) => {
    const defaultDom = (
        <a>
            {logo}
            {title}
        </a>
    );
    
    if (typeof window === 'undefined') return defaultDom;
    if (document.body.clientWidth < 1400) {
        return defaultDom;
    }
    if (isMobile) return defaultDom;
    
    return (
        <>
            {defaultDom}
        </>
    );
};