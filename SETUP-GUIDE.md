# 🎉 Careal 完整设置指南 / Complete Setup Guide

欢迎使用Careal！本指南将帮助您快速启动和配置网站 / Welcome to Careal! This guide will help you quickly launch and configure the website.

---

## 📋 目录 / Table of Contents

1. [快速开始](#快速开始--quick-start)
2. [环境配置](#环境配置--environment-setup)
3. [功能测试](#功能测试--feature-testing)
4. [生产部署](#生产部署--production-deployment)
5. [常见问题](#常见问题--faq)

---

## 🚀 快速开始 / Quick Start

### 1️⃣ 安装依赖

```bash
npm install
```

### 2️⃣ 配置环境变量

创建 `.env.local` 文件:

```bash
cp .env.local.example .env.local
```

编辑 `.env.local`:

```env
# 必需配置 / Required
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
NEXT_PUBLIC_CONTACT_EMAIL=info@careal.com
ADMIN_PASSWORD=your_secure_password_here

# 可选配置 / Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

⚠️ **重要**: 必须修改 `ADMIN_PASSWORD`！

### 3️⃣ 启动开发服务器

```bash
npm run dev
```

访问: http://localhost:3000

### 4️⃣ 测试功能

打开浏览器访问:
- 首页: http://localhost:3000/en
- 车辆列表: http://localhost:3000/en/vehicles
- 管理面板: http://localhost:3000/en/admin/inquiries

---

## ⚙️ 环境配置 / Environment Setup

### 必需配置 / Required Configuration

| 变量 | 描述 | 示例 |
|------|------|------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp联系号码 | 8613800000000 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | 联系邮箱 | info@careal.com |
| `ADMIN_PASSWORD` | 管理员密码 | MySecurePass123! |

### 可选配置 / Optional Configuration

#### Google Analytics
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
获取方式: https://analytics.google.com

#### Tawk.to在线客服
```env
NEXT_PUBLIC_TAWKTO_PROPERTY_ID=your_property_id
NEXT_PUBLIC_TAWKTO_WIDGET_ID=default
```
注册: https://www.tawk.to

#### Webhook集成
```env
WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxx
```
用于集成Zapier、Slack等第三方服务

#### 邮件通知
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
SMTP_FROM=info@careal.com
```

---

## 🧪 功能测试 / Feature Testing

### ✅ 测试询价系统

**步骤 / Steps:**

1. 访问任意车辆详情页
   ```
   http://localhost:3000/en/vehicles/1
   ```

2. 滚动到页面底部，找到"询价 / Request a Quote"表单

3. 填写测试数据:
   - 姓名: Test User
   - 邮箱: test@example.com
   - 电话: +971501234567
   - 国家: UAE
   - 留言: This is a test inquiry

4. 点击"发送询价 / Send Inquiry"

5. 等待成功消息: ✓ 询价已发送！

6. 验证数据保存:
   ```bash
   ls data/inquiries/
   cat data/inquiries/INQ-*.json
   ```

**预期结果 / Expected Result:**
- 表单提交成功
- 显示绿色确认消息
- 新的JSON文件在 `data/inquiries/` 目录
- 文件包含所有表单数据

---

### 💬 测试聊天功能

**方案A: WhatsApp (默认)**

1. 查看页面右下角
2. 应该看到绿色WhatsApp浮动按钮
3. 点击按钮
4. 应该打开WhatsApp网页版或应用

**方案B: Tawk.to (可选)**

1. 配置Tawk.to环境变量
2. 修改 `app/[locale]/layout.tsx`:
   ```tsx
   // 替换
   <SimpleChat />
   // 为
   <TawkToChat />
   ```
3. 重启服务器
4. Tawk.to聊天窗口应出现在右下角

---

### 🔐 测试管理员面板

**步骤 / Steps:**

1. 访问管理员面板:
   ```
   http://localhost:3000/en/admin/inquiries
   ```

2. 输入管理员密码 (默认: `admin123`)

3. 点击"登录 / Login"

4. 应该看到:
   - 所有询价列表
   - 测试数据（3条demo询价）
   - 状态标记（新询价/已联系等）
   - 快速联系按钮（WhatsApp/Email/复制）

5. 测试功能:
   - 点击"刷新 / Refresh"按钮
   - 点击WhatsApp按钮（应打开WhatsApp）
   - 点击Email按钮（应打开邮件客户端）
   - 点击"复制 / Copy"按钮

**预期结果 / Expected Result:**
- 成功登录
- 显示所有询价
- 所有按钮功能正常

---

### 🌐 测试多语言

**英语版本:**
```
http://localhost:3000/en
http://localhost:3000/en/vehicles
http://localhost:3000/en/about
http://localhost:3000/en/contact
```

**阿拉伯语版本:**
```
http://localhost:3000/ar
http://localhost:3000/ar/vehicles
http://localhost:3000/ar/about
http://localhost:3000/ar/contact
```

**检查项 / Checklist:**
- [ ] 文本正确翻译
- [ ] 阿拉伯语从右到左（RTL）显示
- [ ] 语言切换按钮工作
- [ ] 所有页面可访问

---

### 📱 测试响应式设计

**测试设备 / Test Devices:**

1. **桌面** (1920x1080)
   - 打开浏览器开发工具 (F12)
   - 切换到响应式模式
   - 设置为桌面分辨率

2. **平板** (768x1024)
   - 导航菜单应折叠
   - 布局应调整

3. **手机** (375x667, iPhone SE)
   - 单列布局
   - 触摸友好按钮
   - 表单字段足够大

**检查项 / Checklist:**
- [ ] 所有设备正常显示
- [ ] 图片自适应
- [ ] 按钮可点击
- [ ] 表单可填写

---

## 🚀 生产部署 / Production Deployment

### 选项A: Vercel (推荐)

**步骤 / Steps:**

1. **推送到GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/careal.git
   git push -u origin main
   ```

2. **导入到Vercel**
   - 访问 https://vercel.com
   - 点击"New Project"
   - 选择GitHub仓库
   - 点击"Import"

3. **配置环境变量**
   在Vercel项目设置中添加:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
   NEXT_PUBLIC_CONTACT_EMAIL=info@careal.com
   ADMIN_PASSWORD=your_secure_password
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **部署**
   - Vercel自动构建和部署
   - 等待完成（约2-3分钟）

5. **配置自定义域名**
   - 项目设置 → Domains
   - 添加您的域名
   - 更新DNS记录

**详细文档:** 查看 `DEPLOYMENT.md`

---

### 选项B: Netlify

**步骤 / Steps:**

1. 推送到GitHub（同上）

2. 导入到Netlify
   - 访问 https://netlify.com
   - "New site from Git"
   - 选择仓库

3. 构建设置:
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. 配置环境变量（同Vercel）

5. 部署

---

### 选项C: 自托管 (VPS/云服务器)

**要求 / Requirements:**
- Node.js 18+
- PM2 (进程管理)
- Nginx (反向代理)

**步骤 / Steps:**

1. **安装依赖**
   ```bash
   npm install
   npm run build
   ```

2. **使用PM2启动**
   ```bash
   npm install -g pm2
   pm2 start npm --name careal -- start
   pm2 save
   pm2 startup
   ```

3. **配置Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **配置SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

**详细文档:** 查看 `DEPLOYMENT.md`

---

## 🔒 安全性检查 / Security Checklist

部署前必须完成 / Must complete before deployment:

- [ ] ✅ 修改管理员密码
- [ ] ✅ 配置HTTPS/SSL证书
- [ ] ✅ 更新所有联系方式
- [ ] ✅ 移除测试数据
- [ ] ✅ 检查.gitignore文件
- [ ] ✅ 备份询价数据
- [ ] ✅ 配置环境变量
- [ ] ✅ 测试所有功能

---

## 📊 SEO优化 / SEO Optimization

### Google Search Console

1. 访问 https://search.google.com/search-console
2. 添加网站属性
3. 验证所有权
4. 提交站点地图:
   ```
   https://yourdomain.com/sitemap.xml
   ```

### Google Analytics

1. 创建GA4账号
2. 获取测量ID (G-XXXXXXXXXX)
3. 添加到环境变量:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 性能优化

运行Lighthouse测试:
1. 打开Chrome开发工具 (F12)
2. 切换到"Lighthouse"标签
3. 点击"Generate report"
4. 目标分数:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 95+

---

## ❓ 常见问题 / FAQ

### Q1: 询价表单提交失败

**A:** 检查以下项目:
1. `data/inquiries/` 目录是否存在且可写
2. API路由 `/api/inquiry` 是否正常
3. 浏览器控制台是否有错误
4. 网络请求是否成功

**解决方法:**
```bash
# 创建目录
mkdir -p data/inquiries
chmod 755 data/inquiries

# 重启服务器
npm run dev
```

---

### Q2: 管理员面板无法登录

**A:** 常见原因:
1. 密码错误
2. 环境变量未设置
3. 浏览器缓存

**解决方法:**
```bash
# 检查环境变量
echo $ADMIN_PASSWORD

# 如果为空，添加到.env.local
echo "ADMIN_PASSWORD=admin123" >> .env.local

# 重启服务器
npm run dev

# 清除浏览器缓存
Ctrl+Shift+Delete (Chrome)
```

---

### Q3: WhatsApp按钮不显示

**A:** 检查项:
1. `NEXT_PUBLIC_WHATSAPP_NUMBER` 是否设置
2. `SimpleChat` 组件是否导入
3. 浏览器控制台错误

**解决方法:**
```bash
# 检查环境变量
echo $NEXT_PUBLIC_WHATSAPP_NUMBER

# 添加到.env.local
echo "NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000" >> .env.local

# 重启服务器
npm run dev
```

---

### Q4: 如何添加新车辆

**A:** 编辑 `lib/data.ts`:

```typescript
// 在vehicles数组中添加
{
  id: '19',  // 递增ID
  brand: 'Toyota',
  model: 'RAV4',
  year: 2022,
  price: 28000,
  mileage: 15000,
  transmission: 'automatic',
  fuelType: 'hybrid',
  color: 'Silver',
  type: 'SUV',
  images: [
    'https://images.unsplash.com/photo-xxx'
  ],
  description: 'Hybrid SUV with great fuel economy.',
  featured: false
}
```

保存并重启服务器。

---

### Q5: 如何备份询价数据

**A:** 使用以下命令:

```bash
# 复制目录
cp -r data/inquiries data/inquiries_backup_$(date +%Y%m%d)

# 或创建压缩包
tar -czf inquiries_backup_$(date +%Y%m%d).tar.gz data/inquiries/

# 自动备份脚本
echo '#!/bin/bash
tar -czf /backups/inquiries_$(date +%Y%m%d_%H%M%S).tar.gz data/inquiries/' > backup.sh
chmod +x backup.sh

# 添加到crontab (每天凌晨2点)
crontab -e
# 添加: 0 2 * * * /path/to/backup.sh
```

---

### Q6: 如何切换到Tawk.to

**A:** 步骤:

1. 注册Tawk.to: https://www.tawk.to
2. 获取Property ID
3. 添加到 `.env.local`:
   ```env
   NEXT_PUBLIC_TAWKTO_PROPERTY_ID=your_id_here
   ```
4. 编辑 `app/[locale]/layout.tsx`:
   ```tsx
   // 修改导入
   import { TawkToChat } from '@/components/Chat';
   
   // 修改组件
   <TawkToChat />
   ```
5. 重启服务器

---

### Q7: 如何更改网站主题颜色

**A:** 编辑渐变色类名:

当前: `from-blue-600 via-purple-600 to-pink-600`

可改为任意Tailwind颜色，例如:
- `from-green-600 via-teal-600 to-blue-600` (绿色主题)
- `from-red-600 via-orange-600 to-yellow-600` (暖色主题)
- `from-purple-600 via-pink-600 to-red-600` (粉色主题)

在以下文件中全局替换渐变色:
- `app/[locale]/page.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/InquiryForm.tsx`
- 其他组件

---

## 📞 获取支持 / Get Support

### 文档资源 / Documentation

| 文档 | 内容 |
|------|------|
| `README.md` | 项目概述和快速开始 |
| `FEATURES-CONFIG.md` | 详细功能配置指南 |
| `QUICK-REFERENCE.md` | 快速参考手册 |
| `DEPLOYMENT.md` | 部署指南 |
| `SEO-README.md` | SEO优化文档 |
| `IMPLEMENTATION-SUMMARY.md` | 功能实现总结 |

### 联系方式 / Contact

- 📧 Email: info@careal.com
- 💬 WhatsApp: +86 138 0000 0000
- 🌐 Website: https://careal.com

---

## ✅ 最终检查清单 / Final Checklist

部署前请确认 / Confirm before deployment:

### 配置 / Configuration
- [ ] 所有环境变量已设置
- [ ] 管理员密码已修改
- [ ] 联系方式已更新
- [ ] Google Analytics已配置

### 内容 / Content
- [ ] 添加真实车辆数据
- [ ] 更新车辆图片
- [ ] 删除测试数据
- [ ] 检查翻译文本

### 测试 / Testing
- [ ] 询价系统正常
- [ ] 聊天功能正常
- [ ] 管理面板可访问
- [ ] 所有页面无错误
- [ ] 移动端测试通过
- [ ] 多语言测试通过

### 部署 / Deployment
- [ ] 代码推送到Git
- [ ] 部署到生产环境
- [ ] 自定义域名配置
- [ ] SSL证书配置
- [ ] 站点地图提交

### 安全 / Security
- [ ] HTTPS启用
- [ ] 环境变量保护
- [ ] 备份策略设置
- [ ] 访问日志配置

---

## 🎉 恭喜！/ Congratulations!

您的Careal网站已经准备就绪！/ Your Careal website is ready!

**下一步 / Next Steps:**
1. 🚀 部署到生产环境
2. 📊 监控询价数据
3. 📈 优化SEO排名
4. 💰 开始接收订单！

**祝生意兴隆！/ Wishing you great success! 🚗✨💼**
