# 快速参考指南 / Quick Reference Guide

## 🚀 常用命令 / Common Commands

```bash
# 开发
npm run dev              # 启动开发服务器 / Start dev server (localhost:3000)
npm run build            # 生产构建 / Production build
npm start                # 运行生产版本 / Run production

# 数据库/文件操作
ls data/inquiries/       # 查看所有询价 / View all inquiries
cat data/inquiries/INQ-*.json  # 查看询价详情 / View inquiry details
```

## 📁 重要文件位置 / Important File Locations

| 功能 / Feature | 文件路径 / File Path |
|----------------|---------------------|
| 车辆数据 / Vehicle Data | `/lib/data.ts` |
| 询价数据 / Inquiry Data | `/data/inquiries/` |
| 环境变量 / Environment | `.env.local` |
| 管理员密码 / Admin Password | `.env.local` → `ADMIN_PASSWORD` |
| WhatsApp号码 / WhatsApp Number | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| 聊天组件 / Chat Component | `/components/Chat.tsx` |
| 询价表单 / Inquiry Form | `/components/InquiryForm.tsx` |
| 询价API / Inquiry API | `/app/api/inquiry/route.ts` |
| 管理面板 / Admin Panel | `/app/[locale]/admin/inquiries/page.tsx` |

## 🔗 重要URL / Important URLs

### 开发环境 / Development
- 首页 / Home: http://localhost:3000/en 或 /ar
- 车辆列表 / Vehicles: http://localhost:3000/en/vehicles
- 管理面板 / Admin: http://localhost:3000/en/admin/inquiries
- 联系页面 / Contact: http://localhost:3000/en/contact

### 生产环境 / Production
- 首页 / Home: https://yourdomain.com/en
- 管理面板 / Admin: https://yourdomain.com/en/admin/inquiries

## ⚙️ 环境变量 / Environment Variables

### 必需 / Required
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
NEXT_PUBLIC_CONTACT_EMAIL=info@careal.com
ADMIN_PASSWORD=your_secure_password
```

### 可选 / Optional
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Tawk.to在线客服
NEXT_PUBLIC_TAWKTO_PROPERTY_ID=your_property_id
NEXT_PUBLIC_TAWKTO_WIDGET_ID=default

# Webhook
WEBHOOK_URL=https://your-webhook.com/inquiry

# 邮件
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_password
```

## 📝 管理员操作 / Admin Operations

### 查看询价 / View Inquiries
1. 访问: `/en/admin/inquiries` 或 `/ar/admin/inquiries`
2. 输入密码（默认: `admin123`）
3. 查看所有询价

### 修改管理员密码 / Change Admin Password
编辑 `.env.local`:
```env
ADMIN_PASSWORD=new_secure_password
```

### 备份询价数据 / Backup Inquiry Data
```bash
# 复制整个目录
cp -r data/inquiries data/inquiries_backup_$(date +%Y%m%d)

# 或创建压缩包
tar -czf inquiries_backup_$(date +%Y%m%d).tar.gz data/inquiries/
```

## 🚗 添加车辆 / Add Vehicles

编辑 `/lib/data.ts`:

```typescript
{
  id: '19',  // 下一个ID
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022,
  price: 15000,
  mileage: 20000,
  transmission: 'automatic',
  fuelType: 'gasoline',  // gasoline | diesel | hybrid | electric
  color: 'White',
  type: 'Sedan',  // SUV | Sedan | Pickup | Coupe | Hatchback | Van
  images: [
    'https://images.unsplash.com/photo-xxx',
    'https://images.unsplash.com/photo-yyy'
  ],
  description: 'Reliable sedan with excellent fuel economy.',
  featured: false  // true显示在首页
}
```

## 💬 聊天配置 / Chat Configuration

### 方案A: WhatsApp（默认启用）
无需配置，只需确保 `NEXT_PUBLIC_WHATSAPP_NUMBER` 正确。

### 方案B: Tawk.to
1. 注册 https://www.tawk.to/
2. 获取Property ID
3. 配置环境变量
4. 修改 `app/[locale]/layout.tsx`:
   ```tsx
   import { TawkToChat } from '@/components/Chat';
   // 替换 <SimpleChat /> 为 <TawkToChat />
   ```

## 🎨 自定义样式 / Customize Styles

### 修改颜色主题 / Change Color Theme
编辑 `app/globals.css` 和 Tailwind类名中的渐变色:
- 当前: `from-blue-600 via-purple-600 to-pink-600`
- 可改为其他颜色组合

### 修改品牌Logo / Change Brand Logos
编辑 `components/BrandIcon.tsx`

## 🔍 SEO优化 / SEO Optimization

### Google Search Console
1. 访问 https://search.google.com/search-console
2. 添加网站
3. 验证所有权
4. 提交站点地图: `https://yourdomain.com/sitemap.xml`

### Google Analytics
1. 创建GA4账号
2. 获取测量ID (G-XXXXXXXXXX)
3. 添加到 `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 📊 监控和分析 / Monitoring & Analytics

### 查看询价统计 / View Inquiry Stats
```bash
# 询价总数
ls data/inquiries/*.json | wc -l

# 今天的询价
find data/inquiries -name "*.json" -mtime -1

# 按国家统计（需要jq工具）
cat data/inquiries/*.json | jq -r '.country' | sort | uniq -c
```

## 🐛 故障排查 / Troubleshooting

### 服务器无法启动
```bash
# 清除.next缓存
rm -rf .next
npm run dev
```

### 询价表单不工作
1. 检查 `data/inquiries/` 目录权限
2. 查看浏览器控制台错误
3. 检查API路由: `/api/inquiry`

### 管理面板无法登录
1. 确认 `ADMIN_PASSWORD` 已设置
2. 重启开发服务器
3. 清除浏览器缓存

### WhatsApp按钮不显示
1. 检查 `NEXT_PUBLIC_WHATSAPP_NUMBER`
2. 确认导入了 `SimpleChat` 组件
3. 检查浏览器控制台

## 📞 获取帮助 / Get Help

1. **文档**: 阅读 `DEPLOYMENT.md`, `FEATURES-CONFIG.md`, `SEO-README.md`
2. **邮件**: info@careal.com
3. **WhatsApp**: +86 138 0000 0000

## ✅ 上线前检查清单 / Pre-launch Checklist

- [ ] 修改管理员密码
- [ ] 配置Google Analytics
- [ ] 更新联系方式（邮箱、电话、WhatsApp）
- [ ] 添加真实车辆图片和数据
- [ ] 配置域名和SSL证书
- [ ] 提交站点地图到Google
- [ ] 测试询价表单
- [ ] 测试所有页面（英语/阿拉伯语）
- [ ] 测试移动端响应式
- [ ] 配置备份策略

---

**准备好了吗？开始使用Careal吧！/ Ready? Start using Careal! 🚀**
