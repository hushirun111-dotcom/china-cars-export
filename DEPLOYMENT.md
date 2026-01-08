# Careal 独立站部署指南

## 🚀 快速部署

### 方式一：Vercel部署（推荐）

1. **连接GitHub仓库**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Import Project"
   - 选择你的GitHub仓库 `hushirun111-dotcom/china-cars-export`

2. **配置环境变量**
   ```
   NEXT_PUBLIC_SITE_URL=https://你的域名.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **部署设置**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **点击Deploy** - 几分钟后就能访问！

### 方式二：Netlify部署

1. 访问 [netlify.com](https://netlify.com)
2. "New site from Git" → 选择你的仓库
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. 添加环境变量（同上）
5. Deploy site

### 方式三：自己的服务器

```bash
# 1. 构建生产版本
npm run build

# 2. 启动生产服务器
npm start

# 3. 使用PM2保持运行
npm install -g pm2
pm2 start npm --name "careal" -- start
pm2 save
pm2 startup
```

## 🌐 域名配置

### 购买域名
推荐平台：
- Namecheap
- GoDaddy
- Cloudflare

### DNS设置（以Vercel为例）

在域名提供商处添加以下记录：

```
类型    名称    值
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

在Vercel面板中添加自定义域名，等待DNS生效。

## 🔒 SSL证书

- **Vercel/Netlify**: 自动提供免费SSL证书
- **自己的服务器**: 使用Let's Encrypt

```bash
# Nginx + Let's Encrypt示例
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d careal.com -d www.careal.com
```

## 📊 生产环境优化

### 1. 环境变量配置

创建 `.env.production`:

```bash
# 网站URL
NEXT_PUBLIC_SITE_URL=https://careal.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console验证
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code

# 联系信息
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
NEXT_PUBLIC_CONTACT_EMAIL=info@careal.com

# 社交媒体
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/careal
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/careal
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/careal
```

### 2. 性能检查

部署后运行：
```bash
# Lighthouse测试
npm install -g lighthouse
lighthouse https://你的域名.com --view

# 或使用在线工具
# https://pagespeed.web.dev/
```

### 3. SEO验证

- [ ] 提交sitemap到Google Search Console
- [ ] 验证robots.txt可访问
- [ ] 测试Open Graph标签
- [ ] 检查结构化数据

## 🛠️ 持续集成/部署

### GitHub Actions自动部署

创建 `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test # 如果有测试
```

Vercel和Netlify会自动集成GitHub，每次push到main分支都会自动部署。

## 📈 监控和分析

### 必装工具

1. **Google Analytics 4**
   - 追踪访客和转化
   
2. **Google Search Console**
   - 监控搜索表现
   - 索引状态检查

3. **Vercel Analytics**（如果用Vercel）
   - 实时性能监控

4. **Hotjar或Microsoft Clarity**
   - 用户行为分析

## 🔐 安全检查清单

- [ ] 启用HTTPS
- [ ] 配置安全头（已在next.config.mjs中设置）
- [ ] 隐藏敏感信息（使用环境变量）
- [ ] 定期更新依赖包：`npm audit`
- [ ] 设置CORS策略
- [ ] 备份数据库（如果有）

## 💰 成本估算

### 免费方案（推荐新站）
- **托管**: Vercel/Netlify免费版
- **域名**: $10-15/年
- **SSL**: 免费（自动提供）
- **总计**: ~$15/年

### 付费方案（商业站点）
- **托管**: Vercel Pro $20/月
- **域名**: $10-15/年
- **CDN**: 已包含
- **总计**: ~$250/年

## 📞 上线后的待办事项

### 立即执行
1. [ ] 更新所有社交媒体链接
2. [ ] 测试联系表单
3. [ ] 验证WhatsApp链接
4. [ ] 检查所有页面的移动端显示
5. [ ] 测试多语言切换

### 第一周
1. [ ] 提交sitemap到Google/Bing
2. [ ] 设置Google Analytics
3. [ ] 配置Search Console
4. [ ] 社交媒体分享测试

### 持续优化
1. [ ] 每周检查Analytics数据
2. [ ] 每月更新车辆库存
3. [ ] 响应客户咨询
4. [ ] 优化SEO排名
5. [ ] A/B测试不同版本

## 🎉 一键部署到Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hushirun111-dotcom/china-cars-export)

---

## 💡 提示

- 首次部署建议使用Vercel，最简单快速
- 部署后立即测试所有功能
- 准备好回答客户咨询（WhatsApp/Email）
- 定期备份和更新内容

需要帮助？查看：
- [Next.js部署文档](https://nextjs.org/docs/deployment)
- [Vercel文档](https://vercel.com/docs)
- [Netlify文档](https://docs.netlify.com)
