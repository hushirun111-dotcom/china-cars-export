'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { vehicles, brands } from '@/lib/data';
import type { Vehicle } from '@/lib/data';

export default function VehiclesPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;

  const [filters, setFilters] = useState({
    brand: 'all',
    priceMin: 0,
    priceMax: 100000,
    year: 'all',
    type: 'all',
  });

  const filteredVehicles = vehicles.filter((vehicle: Vehicle) => {
    if (filters.brand !== 'all' && vehicle.brand !== filters.brand) return false;
    if (vehicle.price < filters.priceMin || vehicle.price > filters.priceMax) return false;
    if (filters.year !== 'all' && vehicle.year.toString() !== filters.year) return false;
    if (filters.type !== 'all' && vehicle.type !== filters.type) return false;
    return true;
  });

  const years = Array.from(new Set(vehicles.map(v => v.year))).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated road lines background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-blue-600 to-purple-600 animate-roadLine"
            style={{
              left: `${20 + i * 20}%`,
              height: '100px',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Page Title */}
        <div className="mb-8 relative">
          <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 rounded-full" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text mb-3 animate-fadeInUp">
            {t('vehicles.title')}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-lg text-gray-700 font-semibold">
              {filteredVehicles.length} vehicles available
            </p>
            {/* Car icon decoration */}
            <svg className="w-6 h-6 text-blue-600 animate-float" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sticky top-20 border-2 border-transparent hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-12 -mt-12" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full -ml-16 -mb-16" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Filters</h2>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('vehicles.filters.brand')}
                  </label>
                  <select
                    value={filters.brand}
                    onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">{t('vehicles.filters.allBrands')}</option>
                    {brands.map((brand) => (
                      <option key={brand.name} value={brand.name}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('vehicles.filters.priceRange')}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => setFilters({ ...filters, priceMin: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Year Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('vehicles.filters.year')}
                  </label>
                  <select
                    value={filters.year}
                    onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">{t('vehicles.filters.allYears')}</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('vehicles.filters.type')}
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Types</option>
                    <option value="SUV">{t('vehicles.filters.suv')}</option>
                    <option value="Sedan">{t('vehicles.filters.sedan')}</option>
                    <option value="Pickup">{t('vehicles.filters.pickup')}</option>
                  </select>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => setFilters({
                    brand: 'all',
                    priceMin: 0,
                    priceMax: 100000,
                    year: 'all',
                    type: 'all',
                  })}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  {t('vehicles.filters.reset')}
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="lg:col-span-3">
            {filteredVehicles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">{t('vehicles.noResults')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle: Vehicle) => (
                  <div
                    key={vehicle.id}
                    className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-purple-300 hover:-translate-y-2 animate-fadeInUp"
                  >
                    {/* Racing stripes */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-2 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 transition-all duration-500 z-10 rounded-full" />
                    
                    {/* Speed effect background */}
                    <div className="absolute inset-0 bg-speed-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative h-48 overflow-hidden">
                      {/* Tire rotation decoration */}
                      <div className="absolute top-2 left-2 w-8 h-8 opacity-0 group-hover:opacity-30 group-hover:animate-tireRotate transition-all duration-500 z-10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                        </svg>
                      </div>
                      
                      <Image
                        src={vehicle.images[0]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        fill
                        className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {vehicle.featured && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-float">
                          ⭐ Featured
                        </div>
                      )}
                    </div>
                    <div className="p-5 relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {vehicle.brand} {vehicle.model}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                            </svg>
                            {t('home.featured.year')}:
                          </span>
                          <span className="font-bold text-gray-900">{vehicle.year}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-purple-50 transition-colors">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                            </svg>
                            {t('home.featured.mileage')}:
                          </span>
                          <span className="font-bold text-gray-900">{vehicle.mileage.toLocaleString()} {t('common.km')}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-pink-50 transition-colors">
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                            </svg>
                            Type:
                          </span>
                          <span className="font-bold text-gray-900">{vehicle.type}</span>
                        </div>
                      </div>
                      
                      {/* Decorative line */}
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 transition-all duration-500 mb-4 rounded-full" />
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                          ${vehicle.price.toLocaleString()}
                        </span>
                      </div>
                      <Link
                        href={`/${locale}/vehicles/${vehicle.id}`}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 group-hover:from-purple-600 group-hover:to-pink-500"
                      >
                        {t('home.featured.viewDetails')} →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
