import type { ProSettings } from '@ant-design/pro-components';
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';

import {
    Button,
    ConfigProvider,
} from 'antd';
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

    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
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
                        // actionsRender={(props) => {
                        //     if (props.isMobile) return [];
                        //     if (typeof window === 'undefined') return [];
                        //     return [
                        //         props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                        //             <SearchInput />
                        //         ) : undefined,
                        //         <InfoCircleFilled key="InfoCircleFilled" />,
                        //         <QuestionCircleFilled key="QuestionCircleFilled" />,
                        //         <GithubFilled key="GithubFilled" />,
                        //     ];
                        // }}
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
                                    setPathname(item.path || '/welcome');
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
                            extra={[
                                <Button key="3">操作</Button>,
                                <Button key="2">操作</Button>,
                                <Button
                                    key="1"
                                    type="primary"
                                    onClick={() => {
                                        setNum(num > 0 ? 0 : 40);
                                    }}
                                >
                                    主操作
                                </Button>,
                            ]}
                            subTitle="简单的描述"
                            // footer={[
                            //     <Button key="3">重置</Button>,
                            //     <Button key="2" type="primary">
                            //         提交
                            //     </Button>,
                            // ]}
                        >
                            <ProCard
                                style={{
                                    height: '200vh',
                                    minHeight: 800,
                                }}
                            >
                                <div />
                            </ProCard>
                        </PageContainer>

                        <SettingDrawer
                            pathname={pathname}
                            enableDarkTheme
                            getContainer={(e: any) => {
                                if (typeof window === 'undefined') return e;
                                return document.getElementById('test-pro-layout');
                            }}
                            settings={settings}
                            onSettingChange={(changeSetting) => {
                                setSetting(changeSetting);
                            }}
                            disableUrlParams={false}
                        />
                    </ProLayout>
                </ConfigProvider>
            </ProConfigProvider>
        </div>
    );
};
