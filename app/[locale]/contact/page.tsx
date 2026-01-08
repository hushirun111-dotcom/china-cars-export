'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(t('contact.form.error'));
      return;
    }

    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setError('');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: 'Shanghai, China',
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: '+86 138 0000 0000',
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: 'info@careal.com',
    },
    {
      icon: MessageSquare,
      title: t('contact.info.whatsapp'),
      content: '+86 138 0000 0000',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Contact Info
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">{t('contact.info.title')}</h2>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <info.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600 font-medium">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/8613800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-64 flex items-center justify-center border-2 border-dashed border-blue-300">
              <p className="text-gray-500 font-semibold">Map Location</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Send Message
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">Send us a message</h2>
            </div>
            
            {submitted && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-xl border border-green-200 font-semibold">
                {t('contact.form.success')}
              </div>
            )}
            
            {error && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 text-red-700 rounded-xl border border-red-200 font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
