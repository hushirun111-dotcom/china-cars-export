import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// 简单的CRM系统 - 将询价保存到JSON文件
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 验证必填字段
    if (!data.name || !data.email || !data.phone || !data.country) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 创建inquiries目录（如果不存在）
    const inquiriesDir = path.join(process.cwd(), 'data', 'inquiries');
    if (!existsSync(inquiriesDir)) {
      await mkdir(inquiriesDir, { recursive: true });
    }

    // 生成唯一ID
    const inquiryId = `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // 准备数据
    const inquiry = {
      id: inquiryId,
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new', // new, contacted, quoted, closed
    };

    // 保存到文件
    const filename = `${inquiryId}.json`;
    const filepath = path.join(inquiriesDir, filename);
    await writeFile(filepath, JSON.stringify(inquiry, null, 2));

    // 可选：发送邮件通知（需要配置邮件服务）
    // await sendEmailNotification(inquiry);

    // 可选：发送到Webhook（如集成其他CRM系统）
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inquiry),
        });
      } catch (error) {
        console.error('Webhook error:', error);
      }
    }

    return NextResponse.json(
      { success: true, inquiryId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// 获取所有询价（管理员使用）
export async function GET(request: NextRequest) {
  try {
    // 简单的身份验证
    const authHeader = request.headers.get('authorization');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (authHeader !== `Bearer ${adminPassword}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const inquiriesDir = path.join(process.cwd(), 'data', 'inquiries');
    
    if (!existsSync(inquiriesDir)) {
      return NextResponse.json({ inquiries: [] });
    }

    const { readdir, readFile } = await import('fs/promises');
    const files = await readdir(inquiriesDir);
    
    const inquiries = await Promise.all(
      files
        .filter(f => f.endsWith('.json'))
        .map(async (file) => {
          const content = await readFile(path.join(inquiriesDir, file), 'utf-8');
          return JSON.parse(content);
        })
    );

    // 按日期排序
    inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ inquiries });

  } catch (error) {
    console.error('Get inquiries error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
