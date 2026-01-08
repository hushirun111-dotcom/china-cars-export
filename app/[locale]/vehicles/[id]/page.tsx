'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { getVehicleById } from '@/lib/data';
import InquiryForm from '@/components/InquiryForm';

export default function VehicleDetailPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const vehicleId = params.id as string;
  
  const vehicle = getVehicleById(vehicleId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vehicle not found</h1>
          <Link
            href={`/${locale}/vehicles`}
            className="text-blue-600 hover:underline"
          >
            Back to vehicles
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${vehicle.brand} ${vehicle.model} (${vehicle.year}) listed at $${vehicle.price.toLocaleString()}`
  );
  const whatsappUrl = `https://wa.me/8613800000000?text=${whatsappMessage}`;
  
  const emailSubject = encodeURIComponent(`Inquiry: ${vehicle.brand} ${vehicle.model} ${vehicle.year}`);
  const emailBody = encodeURIComponent(
    `Hello,\n\nI am interested in the following vehicle:\n\nBrand: ${vehicle.brand}\nModel: ${vehicle.model}\nYear: ${vehicle.year}\nPrice: $${vehicle.price.toLocaleString()}\n\nPlease provide more information.\n\nThank you.`
  );
  const emailUrl = `mailto:info@careal.com?subject=${emailSubject}&body=${emailBody}`;

  // Structured data for vehicle (Product Schema)
  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${vehicle.brand} ${vehicle.model} ${vehicle.year}`,
    description: vehicle.description,
    image: vehicle.images,
    brand: {
      '@type': 'Brand',
      name: vehicle.brand
    },
    offers: {
      '@type': 'Offer',
      price: vehicle.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Careal'
      }
    },
    vehicleEngine: {
      '@type': 'EngineSpecification',
      fuelType: vehicle.fuelType
    },
    vehicleTransmission: vehicle.transmission,
    mileageFromOdometer: {
      '@type': 'QuantitativeValue',
      value: vehicle.mileage,
      unitCode: 'KMT'
    },
    productionDate: vehicle.year.toString(),
    color: vehicle.color
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href={`/${locale}`} className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/${locale}/vehicles`} className="text-blue-600 hover:underline">
            Vehicles
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">
            {vehicle.brand} {vehicle.model}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
              <div className="relative h-96">
                <Image
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {vehicle.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 rounded-lg overflow-hidden ${
                      currentImageIndex === index
                        ? 'ring-2 ring-blue-600'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${vehicle.brand} ${vehicle.model} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Details */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {vehicle.brand} {vehicle.model}
              </h1>
              <p className="text-4xl font-bold text-blue-600 mb-6">
                ${vehicle.price.toLocaleString()}
              </p>

              {/* Specifications */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  {t('vehicleDetail.specifications')}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.brand')}</p>
                    <p className="font-semibold">{vehicle.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.model')}</p>
                    <p className="font-semibold">{vehicle.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.year')}</p>
                    <p className="font-semibold">{vehicle.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.mileage')}</p>
                    <p className="font-semibold">
                      {vehicle.mileage.toLocaleString()} {t('common.km')}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.transmission')}</p>
                    <p className="font-semibold capitalize">
                      {t(`common.${vehicle.transmission}`)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.fuelType')}</p>
                    <p className="font-semibold capitalize">
                      {t(`common.${vehicle.fuelType}`)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t('vehicleDetail.color')}</p>
                    <p className="font-semibold">{vehicle.color}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Type</p>
                    <p className="font-semibold">{vehicle.type}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  {t('vehicleDetail.description')}
                </h2>
                <p className="text-gray-700">{vehicle.description}</p>
              </div>

              {/* Contact Buttons */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-2">
                  {t('vehicleDetail.contact.title')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t('vehicleDetail.contact.subtitle')}
                </p>
                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {t('vehicleDetail.contact.whatsapp')}
                  </a>
                  <a
                    href={emailUrl}
                    className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="mr-2" size={20} />
                    {t('vehicleDetail.contact.email')}
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                询价 / Request a Quote
              </h2>
              <p className="text-gray-600 mb-6">
                填写表单，我们会尽快联系您 / Fill out the form and we'll get back to you soon
              </p>
              <InquiryForm 
                vehicleId={vehicle.id}
                vehicleName={`${vehicle.brand} ${vehicle.model} ${vehicle.year}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
