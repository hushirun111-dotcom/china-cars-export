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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {t('vehicles.title')}
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            {filteredVehicles.length} vehicles available
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
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
                className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                {t('vehicles.filters.reset')}
              </button>
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
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                  >
                    <div className="relative h-56 overflow-hidden bg-gray-100">
                      {vehicle.fuelType === 'electric' && (
                        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                          ⚡ Electric
                        </div>
                      )}
                      {vehicle.fuelType === 'hybrid' && (
                        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                          🔋 Hybrid
                        </div>
                      )}
                      {vehicle.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          ⭐ Featured
                        </div>
                      )}
                      <Image
                        src={vehicle.images[0]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            {vehicle.brand.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {vehicle.brand} {vehicle.model}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">📅</span>
                          <span>{vehicle.year}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">🔧</span>
                          <span>{vehicle.mileage.toLocaleString()} km</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">🎨</span>
                          <span>{vehicle.color}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">🚗</span>
                          <span>{vehicle.type}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Price</p>
                          <p className="text-2xl font-bold text-blue-600">
                            ${vehicle.price.toLocaleString()}
                          </p>
                        </div>
                        <Link
                          href={`/${locale}/vehicles/${vehicle.id}`}
                          className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-md hover:shadow-lg"
                        >
                          View
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
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
