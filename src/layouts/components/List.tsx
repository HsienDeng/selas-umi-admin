import { theme } from 'antd';
import React from 'react';
import { Item } from './Item';

interface ListProps {
    title: string;
    style?: React.CSSProperties;
}

export const List: React.FC<ListProps> = (props) => {
    const { token } = theme.useToken();

    return (
        <div
            style={{
                width: '100%',
                ...props.style,
            }}
        >
            <div
                style={{
                    fontSize: 16,
                    color: token.colorTextHeading,
                    lineHeight: '24px',
                    fontWeight: 500,
                    marginBlockEnd: 16,
                }}
            >
                {props.title}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {new Array(6).fill(1).map((_, index) => {
                    return <Item key={index}>具体的解决方案-{index}</Item>;
                })}
            </div>
        </div>
    );
};