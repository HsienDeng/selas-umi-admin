import React from 'react';

interface MenuFooterProps {
    collapsed?: boolean;
}

export const MenuFooter: React.FC<MenuFooterProps> = ({ collapsed }) => {
    if (collapsed) return undefined;
    
    return (
        <div
            style={{
                textAlign: 'center',
                paddingBlockStart: 12,
            }}
        >
            <div>© 2021 Made with love</div>
            <div>by Ant Design</div>
        </div>
    );
};