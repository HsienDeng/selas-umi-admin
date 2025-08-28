# Selas UMI Admin

> 基于 Umi 4.x + Ant Design 5.x + TypeScript 的现代化后台管理模板

## ✨ 特性

- 🎯 **现代化技术栈**: 基于 Umi 4.x、React 18、TypeScript 5.x
- 🎨 **优秀的UI设计**: 使用 Ant Design 5.x 和 Pro Components 企业级组件
- 📱 **响应式设计**: 支持移动端和桌面端适配
- 🏗️ **组件化架构**: 模块化组件设计，易于维护和扩展
- 🔥 **CSS-in-JS**: 使用 Emotion 提供样式隔离和动态样式
- 📦 **开箱即用**: 内置布局、路由、状态管理等常用功能
- 🛠️ **TypeScript**: 提供完整的类型定义，提升开发体验
- 🌐 **国际化**: 内置多语言支持

## 🛠️ 技术栈

- **前端框架**: [Umi](https://umijs.org/) 4.x - React 企业级前端开发框架
- **UI 组件库**: [Ant Design](https://ant.design/) 5.x - 企业级 UI 设计语言
- **Pro 组件**: [Pro Components](https://procomponents.ant.design/) 2.x - 高级业务组件
- **样式方案**: [Emotion](https://emotion.sh/) - CSS-in-JS 库
- **开发语言**: [TypeScript](https://www.typescriptlang.org/) 5.x - JavaScript 的超集
- **HTTP 客户端**: [Axios](https://axios-http.com/) - Promise based HTTP client
- **包管理器**: [PNPM](https://pnpm.io/) - 快速、节省磁盘空间的包管理器

## 📦 安装

### 环境要求

- Node.js >= 16.0.0
- PNPM >= 7.0.0

### 克隆项目

```bash
git clone <your-repository-url>
cd selas-umi-admin
```

### 安装依赖

```bash
# 使用 pnpm 安装依赖
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

## 🚀 快速开始

### 开发环境

```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

访问 http://localhost:8000 查看项目

### 构建生产版本

```bash
# 构建项目
pnpm build

# 或
npm run build
```

构建完成后，产物将在 `dist` 目录中。

## 📁 项目结构

```
selas-umi-admin/
├── config/                    # 配置文件目录
│   ├── config.ts             # 主配置文件
│   └── routes.ts             # 路由配置
├── src/                       # 源代码目录
│   ├── assets/               # 静态资源
│   ├── layouts/              # 布局组件
│   │   ├── components/       # 布局相关组件
│   │   │   ├── AvatarDropdown.tsx    # 用户头像下拉菜单
│   │   │   ├── HeaderTitle.tsx       # 头部标题
│   │   │   ├── Item.tsx             # 列表项组件
│   │   │   ├── List.tsx             # 列表组件
│   │   │   ├── MenuFooter.tsx       # 菜单底部
│   │   │   └── SearchInput.tsx      # 搜索输入框
│   │   ├── _defaultProps.tsx # 默认配置
│   │   ├── index.less        # 布局样式
│   │   └── index.tsx         # 主布局文件
│   ├── models/               # 数据模型
│   │   └── user.ts          # 用户模型
│   ├── pages/               # 页面组件
│   │   ├── docs.tsx         # 文档页面
│   │   ├── index.tsx        # 首页
│   │   └── useState/        # 状态管理示例页面
│   └── typings.d.ts         # 类型定义
├── package.json             # 依赖配置
├── tsconfig.json           # TypeScript 配置
└── README.md              # 项目文档
```

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `config/routes.ts` 中添加路由配置

```typescript
// config/routes.ts
export default [
  {
    path: '/new-page',
    component: 'NewPage',
    name: '新页面',
  },
  // ...其他路由
];
```

### 创建新组件

推荐在 `src/components/` 目录下创建可复用组件：

```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};
```

### 布局组件说明

项目采用组件化布局架构，主要组件说明：

- **AvatarDropdown**: 用户头像和下拉菜单
- **HeaderTitle**: 动态响应式的头部标题
- **MenuFooter**: 侧边栏底部信息
- **SearchInput**: 全局搜索输入框
- **Item/List**: 可复用的列表展示组件

### 样式规范

- 优先使用 Ant Design 的主题系统
- 使用 Emotion CSS-in-JS 编写组件样式
- 遵循响应式设计原则

```typescript
import { css } from '@emotion/css';
import { theme } from 'antd';

const MyComponent = () => {
  const { token } = theme.useToken();
  
  return (
    <div
      className={css`
        color: ${token.colorPrimary};
        padding: ${token.padding}px;
      `}
    >
      内容
    </div>
  );
};
```

## 📋 可用脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm start` - 启动开发服务器 (同 dev)
- `pnpm setup` - 项目初始化设置

## 🚀 部署

### 构建

```bash
pnpm build
```

### 静态部署

将 `dist` 目录部署到任何静态文件服务器，如：

- Nginx
- Apache
- CDN (阿里云、腾讯云等)
- Vercel
- Netlify

### 服务端部署

配置服务器支持 HTML5 History API，确保单页应用路由正常工作。

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

### 提交规范

请使用语义化提交信息：

- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档修改
- `style`: 样式修改
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [Umi](https://umijs.org/) - 企业级前端应用框架
- [Ant Design](https://ant.design/) - 企业级 UI 设计语言
- [Pro Components](https://procomponents.ant.design/) - 高级业务组件

## 📞 联系方式

- 作者: dengxian
- 邮箱: dengxian@gentlehealth.cn

---

如果这个项目对你有帮助，请给个 ⭐️ 支持一下！