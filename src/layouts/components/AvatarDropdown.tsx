import { LogoutOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React from 'react';

interface AvatarDropdownProps {
    children: React.ReactNode;
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ children }) => {
    return (
        <Dropdown
            menu={{
                items: [
                    {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: '退出登录',
                    },
                ],
            }}
        >
            {children}
        </Dropdown>
    );
};