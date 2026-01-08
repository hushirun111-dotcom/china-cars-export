# Careal - Premium Chinese Used Cars Export 🚗

一个专业的双语（英语/阿拉伯语）二手车出口网站，面向中东市场 / A professional bilingual (English/Arabic) website for used car export business targeting Middle East markets.

## ✨ 核心功能 / Core Features

### 基础功能 / Basic Features
- ✅ **双语支持** / Bilingual (English & Arabic with RTL)
- ✅ **品牌展示** / Featured brands with custom SVG logos
- ✅ **车辆列表** / Vehicle listing with advanced filters
- ✅ **详情页面** / Detailed vehicle pages with image gallery
- ✅ **响应式设计** / Fully responsive mobile-first design
- ✅ **SEO优化** / Comprehensive SEO optimization

### 高级功能 / Advanced Features
- ✅ **询价系统** / Inquiry system with form submission
- ✅ **在线聊天** / Live chat (WhatsApp floating button)
- ✅ **简易CRM** / Simple CRM (JSON file-based storage)
- ✅ **管理员面板** / Admin panel for inquiry management
- ✅ **Google Analytics** / Analytics integration ready
- ✅ **Webhook支持** / Webhook integration support

### 待实现功能 / Planned Features
- 🔜 **邮件通知** / Email notifications
- 🔜 **支付网关** / Payment gateway integration
- 🔜 **库存管理** / Inventory management system
- 🔜 **客户账户** / Customer account system

## 🚀 快速开始 / Quick Start

### 1. 安装依赖 / Install Dependencies

```bash
npm install
```

### 2. 配置环境变量 / Configure Environment

复制环境变量示例文件 / Copy the example environment file:

```bash
cp .env.local.example .env.local
```

编辑 `.env.local` 并填入您的配置 / Edit `.env.local` and fill in your configuration:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
NEXT_PUBLIC_CONTACT_EMAIL=info@careal.com
ADMIN_PASSWORD=your_secure_password
```

### 3. 运行开发服务器 / Run Development Server

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站 / Open to view the site.

### 4. 生产构建 / Production Build

```bash
npm run build
npm start
```

## 📁 项目结构 / Project Structure

```
├── app/
│   ├── [locale]/          # 国际化路由 (en/ar)
│   │   ├── page.tsx       # 首页 / Homepage
│   │   ├── vehicles/      # 车辆列表和详情
│   │   ├── about/         # 关于我们
│   │   ├── contact/       # 联系我们
│   │   ├── admin/         # 管理员面板
│   │   │   └── inquiries/ # 询价管理
│   │   └── layout.tsx     # 布局
│   ├── api/
│   │   └── inquiry/       # 询价API路由
│   ├── sitemap.ts         # 动态站点地图
│   └── globals.css        # 全局样式
├── components/
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 页脚
│   ├── BrandIcon.tsx      # 品牌SVG图标
│   ├── Chat.tsx           # 聊天组件
│   └── InquiryForm.tsx    # 询价表单
├── lib/
│   ├── data.ts            # 车辆数据（30+车辆）
│   ├── utils.ts           # 工具函数
│   └── analytics.tsx      # Google Analytics
├── messages/
│   ├── en.json            # 英文翻译
│   └── ar.json            # 阿拉伯语翻译
├── public/
│   ├── robots.txt         # SEO: 爬虫规则
│   └── manifest.json      # PWA配置
├── data/
│   └── inquiries/         # 询价数据存储
├── .env.local.example     # 环境变量示例
├── .env.production        # 生产环境配置
├── DEPLOYMENT.md          # 部署指南
├── FEATURES-CONFIG.md     # 功能配置指南
└── SEO-README.md          # SEO文档
```

## 🚗 车辆数据 / Vehicle Data

平台展示30+热门车辆，包括中东市场最受欢迎的品牌 / Platform showcases 30+ popular vehicles, including top brands in Middle East markets:

- **Toyota** (10辆): Land Cruiser, Prado, Hilux, Camry, Corolla, RAV4, Highlander, 4Runner
- **Nissan** (6辆): Patrol, Xterra, Altima, Pathfinder, Armada, Maxima
- **Mitsubishi** (2辆): Pajero, L200
- **Ford** (6辆): F-150, Explorer, Mustang, Ranger
- **Chevrolet** (6辆): Tahoe, Suburban, Camaro, Silverado

所有车辆数据在 `lib/data.ts` 中，可轻松编辑 / All vehicle data in `lib/data.ts`, easily editable.

## 💼 商务功能 / Business Features

### 询价系统 / Inquiry System

- 每个车辆详情页都有询价表单
- 自动保存到 JSON 文件（`data/inquiries/`）
- 管理员可在后台查看所有询价

### 在线聊天 / Live Chat

**方案A**: WhatsApp浮动按钮（已启用）
- 点击直接打开WhatsApp聊天
- 自定义电话号码

**方案B**: Tawk.to在线客服（可选）
- 专业在线客服系统
- 访客监控、聊天历史、离线留言
- 配置说明见 `FEATURES-CONFIG.md`

### 管理员面板 / Admin Panel

访问地址 / Access URL: `/en/admin/inquiries` 或 `/ar/admin/inquiries`

默认密码 / Default password: `admin123` （请在 `.env.local` 中修改）

功能 / Features:
- 查看所有询价
- 状态管理（新询价/已联系/已报价/已关闭）
- 快速联系（WhatsApp、邮件、复制）
- 实时刷新

## 🎨 技术栈 / Tech Stack

- **框架** / Framework: Next.js 14 (App Router)
- **样式** / Styling: Tailwind CSS (渐变主题)
- **语言** / Language: TypeScript
- **国际化** / i18n: next-intl
- **图标** / Icons: Lucide React + Custom SVG
- **SEO**: Metadata, Sitemap, Robots.txt, Schema.org
- **Analytics**: Google Analytics 4
- **部署** / Deployment: Vercel / Netlify / Self-hosting

## 📚 文档 / Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - 完整部署指南 / Complete deployment guide
- **[FEATURES-CONFIG.md](FEATURES-CONFIG.md)** - 功能配置文档 / Feature configuration guide
- **[SEO-README.md](SEO-README.md)** - SEO优化说明 / SEO optimization guide

## 🌍 部署 / Deployment

### Vercel（推荐 / Recommended）

1. 推送代码到GitHub / Push code to GitHub
2. 导入到Vercel / Import to Vercel
3. 配置环境变量 / Configure environment variables
4. 部署！/ Deploy!

详细步骤见 `DEPLOYMENT.md` / See `DEPLOYMENT.md` for detailed steps.

### 其他平台 / Other Platforms

- **Netlify**: 支持 / Supported
- **自托管 / Self-hosting**: Docker / PM2
- **云服务器 / VPS**: 阿里云、腾讯云等

## 🔐 安全性 / Security

- ✅ 环境变量保护敏感信息
- ✅ 管理员密码保护
- ✅ HTTPS强制（生产环境）
- ✅ CORS和CSP安全头
- ⚠️ **请务必修改默认管理员密码！**

## 🌐 SEO优化 / SEO Optimization

- ✅ 元数据和Open Graph标签
- ✅ 结构化数据（Schema.org）
- ✅ 动态站点地图
- ✅ robots.txt配置
- ✅ 多语言hreflang标签
- ✅ 图片优化（AVIF/WebP）
- ✅ 性能优化（压缩、缓存）

详见 `SEO-README.md` / See `SEO-README.md` for details.

## 📞 联系方式 / Contact

- **邮箱** / Email: info@careal.com
- **WhatsApp**: +86 138 0000 0000
- **网站** / Website: https://careal.com

## 📝 待办事项 / TODO

- [ ] 集成邮件服务（SendGrid/Mailgun）
- [ ] 添加支付网关（Stripe/PayPal）
- [ ] 实现库存管理系统
- [ ] 添加用户账户功能
- [ ] 创建移动应用
- [ ] 物流跟踪功能

## 📄 许可证 / License

MIT License

---

**Built with ❤️ for the Middle East market | 专为中东市场打造 🚗✨**