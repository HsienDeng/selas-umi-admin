import {Outlet} from "umi";
import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout
} from '@ant-design/pro-components';

import { ConfigProvider } from 'antd';
import { useState } from 'react';
import defaultProps from './_defaultProps';
import { AvatarDropdown } from './components/AvatarDropdown';
import { HeaderTitle } from './components/HeaderTitle';
import { MenuFooter } from './components/MenuFooter';

export default () => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        "fixSiderbar": true,
        "layout": "mix",
        "splitMenus": false,
        "navTheme": "light",
        "contentWidth": "Fluid",
        "colorPrimary": "#1677FF",
        "siderMenuType": "sub",
        "fixedHeader": true
      });

    const [pathname, setPathname] = useState('/home');
    const [num, setNum] = useState(40);
    if (typeof document === 'undefined') {
        return <div />;
    }

    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <ProConfigProvider hashed={false}>
                <ConfigProvider
                    getTargetContainer={() => {
                        return document.getElementById('test-pro-layout') || document.body;
                    }}
                >
                    <ProLayout
                        prefixCls="my-prefix"
                        bgLayoutImgList={[
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                left: 85,
                                bottom: 100,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                                bottom: -68,
                                right: -45,
                                height: '303px',
                            },
                            {
                                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                                bottom: 0,
                                left: 0,
                                width: '331px',
                            },
                        ]}
                        {...defaultProps}
                        location={{
                            pathname,
                        }}
                        token={{
                            header: {
                                colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
                            },
                        }}
                        siderMenuType="group"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        avatarProps={{
                            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                            size: 'small',
                            title: 'Selas',
                            render: (props, dom) => {
                                return (
                                    <AvatarDropdown>
                                        {dom}
                                    </AvatarDropdown>
                                );
                            },
                        }}
                        headerTitleRender={(logo, title, _) => {
                            return (
                                <HeaderTitle
                                    logo={logo}
                                    title={title}
                                    isMobile={_.isMobile}
                                />
                            );
                        }}
                        menuFooterRender={(props) => {
                            return <MenuFooter collapsed={props?.collapsed} />;
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(item, dom) => (
                            <div
                                onClick={() => {
                                    setPathname(item.path || '/home');
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...settings}
                    >
                        <PageContainer
                            token={{
                                paddingInlinePageContainerContent: num,
                            }}
                        >
                            <ProCard
                                style={{
                                    height: '200vh',
                                    minHeight: 600,
                                }}
                            >
                                {/* <Outlet /> */}
                            </ProCard>
                        </PageContainer>
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
};
