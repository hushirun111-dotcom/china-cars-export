'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface InquiryFormProps {
  vehicleId?: string;
  vehicleName?: string;
}

export default function InquiryForm({ vehicleId, vehicleName }: InquiryFormProps) {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // 发送到API路由
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          vehicleId,
          vehicleName,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', country: '' });
        
        // 3秒后重置状态
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Inquiry submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {vehicleName && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">询价车辆 / Vehicle:</p>
          <p className="font-semibold text-gray-900">{vehicleName}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          姓名 / Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          邮箱 / Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          电话 / Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="+86 138 0000 0000"
        />
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
          国家 / Country *
        </label>
        <select
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">选择国家 / Select Country</option>
          <option value="UAE">阿联酋 / UAE</option>
          <option value="Saudi Arabia">沙特 / Saudi Arabia</option>
          <option value="Kuwait">科威特 / Kuwait</option>
          <option value="Qatar">卡塔尔 / Qatar</option>
          <option value="Oman">阿曼 / Oman</option>
          <option value="Bahrain">巴林 / Bahrain</option>
          <option value="Iraq">伊拉克 / Iraq</option>
          <option value="Jordan">约旦 / Jordan</option>
          <option value="Lebanon">黎巴嫩 / Lebanon</option>
          <option value="Egypt">埃及 / Egypt</option>
          <option value="Nigeria">尼日利亚 / Nigeria</option>
          <option value="Kenya">肯尼亚 / Kenya</option>
          <option value="Russia">俄罗斯 / Russia</option>
          <option value="Kazakhstan">哈萨克斯坦 / Kazakhstan</option>
          <option value="Other">其他 / Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          留言 / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        {status === 'loading' ? '发送中... / Sending...' : '发送询价 / Send Inquiry'}
      </button>

      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          ✓ 询价已发送！我们会尽快联系您。/ Inquiry sent! We'll contact you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          ✗ 发送失败，请稍后重试。/ Failed to send. Please try again.
        </div>
      )}
    </form>
  );
}
