import { DoubleRightOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { theme } from 'antd';
import React from 'react';

interface ItemProps {
    children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = (props) => {
    const { token } = theme.useToken();
    return (
        <div
            className={css`
                color: ${token.colorTextSecondary};
                font-size: 14px;
                cursor: pointer;
                line-height: 22px;
                margin-bottom: 8px;
                &:hover {
                color: ${token.colorPrimary};
                }
            `}
            style={{
                width: '33.33%',
            }}
        >
            {props.children}
            <DoubleRightOutlined
                style={{
                    marginInlineStart: 4,
                }}
            />
        </div>
    );
};