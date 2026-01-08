# 功能配置指南 / Feature Configuration Guide

本指南介绍如何配置和使用Careal网站的高级功能 / This guide explains how to configure and use advanced features of the Careal website.

## 目录 / Table of Contents

1. [询价系统 / Inquiry System](#inquiry-system)
2. [在线聊天 / Live Chat](#live-chat)
3. [简易CRM / Simple CRM](#simple-crm)
4. [管理员面板 / Admin Panel](#admin-panel)
5. [邮件通知 / Email Notifications](#email-notifications)
6. [Webhook集成 / Webhook Integration](#webhook-integration)

---

## 询价系统 / Inquiry System

### 功能介绍 / Features

✅ **自动询价表单** - 每个车辆详情页都有询价表单
✅ **数据收集** - 收集客户姓名、邮箱、电话、国家和留言
✅ **JSON存储** - 询价自动保存到 `data/inquiries/` 目录
✅ **唯一ID** - 每条询价生成唯一编号，格式: `INQ-时间戳-随机码`

### 使用方法 / How to Use

1. **客户端**: 访问任意车辆详情页，填写询价表单
2. **数据存储**: 提交后自动保存到 `/data/inquiries/INQ-xxxxx.json`
3. **查看询价**: 访问管理员面板查看所有询价

### 配置 / Configuration

无需额外配置，开箱即用！/ No additional configuration needed, works out of the box!

---

## 在线聊天 / Live Chat

### 方案选择 / Choose Your Solution

#### 方案A: WhatsApp浮动按钮 (默认 / Default)

✅ **已启用** - 右下角绿色WhatsApp按钮
✅ **免费** - 无需额外服务
✅ **即时通信** - 直接连接到WhatsApp

**配置 / Configuration:**

```env
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=8613800000000
```

更改您的WhatsApp号码后重启服务器 / Change your WhatsApp number and restart the server.

#### 方案B: Tawk.to在线客服 (可选 / Optional)

🌟 **推荐** - 专业的免费在线客服系统
📊 **功能丰富** - 访客监控、聊天历史、离线留言
🌍 **多语言** - 支持中文和阿拉伯语

**设置步骤 / Setup Steps:**

1. 访问 [https://www.tawk.to/](https://www.tawk.to/) 并注册账号
2. 创建一个新的Property
3. 获取您的Property ID和Widget ID
4. 添加到环境变量:

```env
# .env.local
NEXT_PUBLIC_TAWKTO_PROPERTY_ID=your_property_id_here
NEXT_PUBLIC_TAWKTO_WIDGET_ID=default
```

5. 重启服务器
6. Tawk.to聊天窗口会自动出现在网站右下角

**切换到Tawk.to / Switch to Tawk.to:**

编辑 `app/[locale]/layout.tsx`:

```tsx
// 替换
import { SimpleChat } from '@/components/Chat';
// 为
import { TawkToChat } from '@/components/Chat';

// 然后替换
<SimpleChat />
// 为
<TawkToChat />
```

---

## 简易CRM / Simple CRM

### 功能说明 / Features

📝 **自动保存** - 所有询价自动保存为JSON文件
🗂️ **结构化存储** - 每条询价独立文件，便于管理
🔍 **状态管理** - 支持4种状态: new, contacted, quoted, closed
📊 **数据导出** - JSON格式便于导出和分析

### 询价数据结构 / Inquiry Data Structure

```json
{
  "id": "INQ-1234567890-abc123",
  "name": "Customer Name",
  "email": "customer@email.com",
  "phone": "+971501234567",
  "country": "UAE",
  "message": "I'm interested in this vehicle...",
  "vehicleId": "1",
  "vehicleName": "Toyota Land Cruiser 2020",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "status": "new"
}
```

### 存储位置 / Storage Location

```
/data/inquiries/
├── INQ-1234567890-abc123.json
├── INQ-1234567891-def456.json
└── ...
```

### 状态说明 / Status Descriptions

- **new** - 新询价，待处理
- **contacted** - 已联系客户
- **quoted** - 已发送报价
- **closed** - 已关闭/完成

---

## 管理员面板 / Admin Panel

### 访问地址 / Access URL

```
http://localhost:3000/en/admin/inquiries
http://localhost:3000/ar/admin/inquiries
```

生产环境 / Production:
```
https://yourdomain.com/en/admin/inquiries
```

### 默认密码 / Default Password

```
admin123
```

⚠️ **重要安全提示 / Important Security Notice:**

**必须修改默认密码！/ You MUST change the default password!**

在 `.env.local` 中设置:

```env
ADMIN_PASSWORD=your_secure_password_here
```

### 管理功能 / Admin Features

✅ **查看所有询价** - 按时间倒序显示
✅ **状态标记** - 新询价/已联系/已报价/已关闭
✅ **快速联系** - 一键WhatsApp、邮件、复制
✅ **实时刷新** - 点击刷新按钮查看最新询价
✅ **车辆信息** - 显示客户询价的具体车辆

### 使用技巧 / Usage Tips

1. **每日检查** - 建议每天至少查看一次新询价
2. **及时回复** - 新询价应在24小时内回复
3. **记录跟进** - 在外部系统记录详细的跟进情况
4. **数据备份** - 定期备份 `/data/inquiries/` 目录

---

## 邮件通知 / Email Notifications

### 可选功能 / Optional Feature

配置SMTP后，每条新询价会自动发送邮件通知给您 / Configure SMTP to receive email notifications for new inquiries.

### 配置步骤 / Configuration Steps

1. **选择邮件服务 / Choose Email Service:**
   - Gmail
   - Outlook
   - SendGrid
   - Amazon SES
   - 其他SMTP服务 / Other SMTP service

2. **获取SMTP凭证 / Get SMTP Credentials:**

   **Gmail示例 / Gmail Example:**
   - 启用"两步验证" / Enable "2-Step Verification"
   - 生成"应用专用密码" / Generate "App Password"
   - 使用该密码作为SMTP_PASS

3. **配置环境变量 / Configure Environment Variables:**

```env
# .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=info@careal.com
```

4. **安装邮件库 / Install Email Package:**

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

5. **取消注释代码 / Uncomment Code:**

在 `app/api/inquiry/route.ts` 中取消注释:

```typescript
// await sendEmailNotification(inquiry);
```

并添加邮件发送函数 / And add email sending function.

---

## Webhook集成 / Webhook Integration

### 用途 / Use Cases

将询价数据实时推送到第三方系统:
- Zapier自动化工作流
- 企业CRM系统 (Salesforce, HubSpot, Zoho)
- Slack/Discord通知
- 自定义业务系统

### 配置方法 / Configuration

1. **设置Webhook URL:**

```env
# .env.local
WEBHOOK_URL=https://your-webhook-endpoint.com/inquiry
```

2. **Webhook数据格式 / Webhook Payload:**

系统会POST以下JSON数据 / System will POST this JSON data:

```json
{
  "id": "INQ-1234567890-abc123",
  "name": "Customer Name",
  "email": "customer@email.com",
  "phone": "+971501234567",
  "country": "UAE",
  "message": "Inquiry message...",
  "vehicleId": "1",
  "vehicleName": "Toyota Land Cruiser 2020",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "status": "new"
}
```

3. **Zapier示例 / Zapier Example:**

   - 创建Zap: Webhooks by Zapier → Catch Hook
   - 复制Webhook URL到 `.env.local`
   - 配置后续动作: 发送邮件、更新表格、创建Slack消息等

---

## 额外功能建议 / Additional Feature Suggestions

### 短期可实现 / Short-term Achievable

1. ✅ **已完成**: 询价系统
2. ✅ **已完成**: 在线聊天
3. ✅ **已完成**: 简易CRM
4. 🔜 **待实现**: 邮件通知
5. 🔜 **待实现**: 数据分析仪表板

### 长期规划 / Long-term Planning

1. 💳 **支付网关** - 在线定金支付
2. 📱 **移动应用** - iOS/Android应用
3. 🚗 **实时库存** - 库存同步系统
4. 📸 **360度看车** - 3D车辆展示
5. 🤖 **AI客服** - 智能问答系统
6. 📦 **物流跟踪** - 实时物流追踪
7. 🔐 **客户账户** - 登录查看订单历史

---

## 故障排查 / Troubleshooting

### 询价表单不工作 / Inquiry Form Not Working

1. 检查 `/data/inquiries/` 目录是否可写
2. 查看浏览器控制台错误
3. 检查 `app/api/inquiry/route.ts` 文件是否存在

### WhatsApp按钮不显示 / WhatsApp Button Not Showing

1. 确认 `NEXT_PUBLIC_WHATSAPP_NUMBER` 已设置
2. 重启开发服务器
3. 检查 `components/Chat.tsx` 导入是否正确

### 管理员登录失败 / Admin Login Failed

1. 检查 `ADMIN_PASSWORD` 环境变量
2. 确保输入密码正确（默认: admin123）
3. 清除浏览器缓存

### Tawk.to不显示 / Tawk.to Not Showing

1. 确认Property ID和Widget ID正确
2. 检查是否切换到TawkToChat组件
3. 查看浏览器控制台是否有加载错误

---

## 技术支持 / Technical Support

### 联系方式 / Contact

- 📧 Email: info@careal.com
- 💬 WhatsApp: +86 138 0000 0000
- 🌐 Website: https://careal.com

### 开发文档 / Development Docs

- Next.js: https://nextjs.org/docs
- Tawk.to: https://help.tawk.to/
- Webhook: https://webhook.site/ (测试工具)

---

## 更新日志 / Changelog

### v2.0.0 - 2024-01

✨ **新增功能 / New Features:**
- 询价系统
- 在线聊天（WhatsApp + Tawk.to）
- 简易CRM
- 管理员面板
- Webhook支持

🎨 **UI改进 / UI Improvements:**
- 现代渐变设计
- 响应式表单
- 优化的移动端体验

🔧 **技术优化 / Technical Improvements:**
- JSON文件存储系统
- API路由优化
- 安全性增强

---

**祝您使用愉快！/ Enjoy using Careal! 🚗✨**
