'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  vehicleId?: string;
  vehicleName?: string;
  timestamp: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
}

export default function AdminInquiriesPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries || []);
        setIsAuthenticated(true);
      } else {
        setError('密码错误 / Incorrect password');
      }
    } catch (err) {
      setError('加载失败 / Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const refreshInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error('Refresh error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      quoted: 'bg-purple-100 text-purple-800',
      closed: 'bg-gray-100 text-gray-800',
    };
    return styles[status as keyof typeof styles] || styles.new;
  };

  const getStatusText = (status: string) => {
    const texts = {
      new: '新询价 / New',
      contacted: '已联系 / Contacted',
      quoted: '已报价 / Quoted',
      closed: '已关闭 / Closed',
    };
    return texts[status as keyof typeof texts] || status;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">管理员登录 / Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                密码 / Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? '登录中... / Logging in...' : '登录 / Login'}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            默认密码: admin123 (请在.env中修改)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              询价管理 / Inquiry Management
            </h1>
            <button
              onClick={refreshInquiries}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? '刷新中... / Refreshing...' : '刷新 / Refresh'}
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            总计: {inquiries.length} 条询价 / Total: {inquiries.length} inquiries
          </p>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">暂无询价 / No inquiries yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <div key={inquiry.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{inquiry.name}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(inquiry.createdAt).toLocaleString('zh-CN')}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(inquiry.status)}`}>
                    {getStatusText(inquiry.status)}
                  </span>
                </div>

                {inquiry.vehicleName && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4 border border-blue-200">
                    <p className="text-sm text-gray-600">询价车辆 / Vehicle:</p>
                    <p className="font-semibold text-gray-900">{inquiry.vehicleName}</p>
                    {inquiry.vehicleId && (
                      <p className="text-xs text-gray-500">ID: {inquiry.vehicleId}</p>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">邮箱 / Email</p>
                    <a href={`mailto:${inquiry.email}`} className="font-semibold text-blue-600 hover:underline">
                      {inquiry.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">电话 / Phone</p>
                    <a href={`tel:${inquiry.phone}`} className="font-semibold text-green-600 hover:underline">
                      {inquiry.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">国家 / Country</p>
                    <p className="font-semibold">{inquiry.country}</p>
                  </div>
                </div>

                {inquiry.message && (
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600 mb-1">留言 / Message:</p>
                    <p className="text-gray-800">{inquiry.message}</p>
                  </div>
                )}

                <div className="flex gap-2 mt-4 border-t pt-4">
                  <a
                    href={`https://wa.me/${inquiry.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${inquiry.email}?subject=Re: Your inquiry ${inquiry.vehicleName || ''}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
                  >
                    发邮件 / Email
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nPhone: ${inquiry.phone}\nCountry: ${inquiry.country}\nVehicle: ${inquiry.vehicleName || 'N/A'}\nMessage: ${inquiry.message || 'N/A'}`
                      );
                      alert('已复制 / Copied!');
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-semibold"
                  >
                    复制 / Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
