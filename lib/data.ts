// Sample vehicle data for demonstration
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  color: string;
  type: 'SUV' | 'Sedan' | 'Pickup' | 'Coupe' | 'Hatchback' | 'Van';
  images: string[];
  description: string;
  featured?: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2020,
    price: 45000,
    mileage: 45000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800'
    ],
    description: 'Premium SUV perfect for desert conditions. Well-maintained with full service history.',
    featured: true
  },
  {
    id: '2',
    brand: 'Toyota',
    model: 'Prado',
    year: 2019,
    price: 32000,
    mileage: 58000,
    transmission: 'automatic',
    fuelType: 'diesel',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Reliable and powerful SUV. Perfect for family and off-road adventures.',
    featured: true
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Hilux',
    year: 2021,
    price: 28000,
    mileage: 32000,
    transmission: 'manual',
    fuelType: 'diesel',
    color: 'Silver',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1623134673976-402a8c92a0c7?w=800',
      'https://images.unsplash.com/photo-1615906655593-ad0ca1d4e6bc?w=800'
    ],
    description: 'Legendary reliability and durability. Perfect for work and adventure.',
    featured: true
  },
  {
    id: '4',
    brand: 'Nissan',
    model: 'Patrol',
    year: 2020,
    price: 42000,
    mileage: 41000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Gray',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800'
    ],
    description: 'Powerful and spacious SUV. Excellent condition with low mileage.',
    featured: true
  },
  {
    id: '5',
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 22000,
    mileage: 28000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800'
    ],
    description: 'Comfortable and fuel-efficient sedan. Perfect for city driving.',
    featured: false
  },
  {
    id: '6',
    brand: 'Ford',
    model: 'F-150',
    year: 2020,
    price: 35000,
    mileage: 48000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Blue',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'American muscle meets reliability. Powerful engine and spacious cabin.',
    featured: false
  },
  {
    id: '7',
    brand: 'Nissan',
    model: 'Altima',
    year: 2021,
    price: 20000,
    mileage: 24000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Modern sedan with advanced features. Excellent fuel economy.',
    featured: false
  },
  {
    id: '8',
    brand: 'Mitsubishi',
    model: 'Pajero',
    year: 2019,
    price: 29000,
    mileage: 52000,
    transmission: 'automatic',
    fuelType: 'diesel',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800'
    ],
    description: 'Rugged SUV built for tough conditions. Proven reliability.',
    featured: false
  },
  {
    id: '9',
    brand: 'Chevrolet',
    model: 'Tahoe',
    year: 2020,
    price: 48000,
    mileage: 38000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800'
    ],
    description: 'Luxurious and spacious full-size SUV. Perfect for large families.',
    featured: false
  },
  {
    id: '10',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 18000,
    mileage: 18000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Silver',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1615906655593-ad0ca1d4e6bc?w=800',
      'https://images.unsplash.com/photo-1623134673976-402a8c92a0c7?w=800'
    ],
    description: 'Best-selling sedan worldwide. Reliable and economical.',
    featured: false
  },
  {
    id: '11',
    brand: 'Mitsubishi',
    model: 'L200',
    year: 2020,
    price: 26000,
    mileage: 42000,
    transmission: 'manual',
    fuelType: 'diesel',
    color: 'Gray',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Tough and reliable pickup truck. Great for work and play.',
    featured: false
  },
  {
    id: '12',
    brand: 'Ford',
    model: 'Explorer',
    year: 2021,
    price: 38000,
    mileage: 35000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Blue',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Modern SUV with advanced technology. Comfortable and capable.',
    featured: false
  },
  {
    id: '13',
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    price: 22000,
    mileage: 28000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Silver',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'
    ],
    description: 'Reliable and comfortable sedan. Perfect for city and highway driving.',
    featured: true
  },
  {
    id: '14',
    brand: 'Nissan',
    model: 'Patrol',
    year: 2020,
    price: 48000,
    mileage: 38000,
    transmission: 'automatic',
    fuelType: 'diesel',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Powerful and luxurious SUV. Built for tough conditions with premium comfort.',
    featured: true
  },
  {
    id: '15',
    brand: 'Toyota',
    model: 'Hilux',
    year: 2021,
    price: 28000,
    mileage: 32000,
    transmission: 'manual',
    fuelType: 'diesel',
    color: 'White',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Legendary reliability. The most trusted pickup truck worldwide.',
    featured: false
  },
  {
    id: '16',
    brand: 'Chevrolet',
    model: 'Tahoe',
    year: 2020,
    price: 42000,
    mileage: 44000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Full-size luxury SUV with spacious interior and powerful performance.',
    featured: false
  },
  {
    id: '17',
    brand: 'Nissan',
    model: 'Altima',
    year: 2022,
    price: 20000,
    mileage: 18000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'
    ],
    description: 'Sporty sedan with excellent fuel economy and modern features.',
    featured: false
  },
  {
    id: '18',
    brand: 'Ford',
    model: 'F-150',
    year: 2021,
    price: 35000,
    mileage: 30000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Blue',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'America\'s best-selling truck. Powerful, capable, and comfortable.',
    featured: true
  },
  {
    id: '19',
    brand: 'Toyota',
    model: 'RAV4',
    year: 2020,
    price: 23000,
    mileage: 45000,
    transmission: 'automatic',
    fuelType: 'hybrid',
    color: 'Silver',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1601361169943-47551a0b1d5c?w=800',
      'https://images.unsplash.com/photo-1611859266238-4b98091d48a2?w=800'
    ],
    description: 'Fuel-efficient hybrid SUV, perfect for city and highway driving.',
    featured: false
  },
  {
    id: '20',
    brand: 'Nissan',
    model: 'Pathfinder',
    year: 2019,
    price: 24000,
    mileage: 55000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Gray',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      'https://images.unsplash.com/photo-1552519507-ac14e627df1d?w=800'
    ],
    description: '7-seater family SUV with plenty of cargo space and advanced safety features.',
    featured: false
  },
  {
    id: '21',
    brand: 'Ford',
    model: 'Explorer',
    year: 2020,
    price: 32000,
    mileage: 40000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Spacious 3-row SUV with powerful performance and modern technology.',
    featured: true
  },
  {
    id: '22',
    brand: 'Chevrolet',
    model: 'Suburban',
    year: 2019,
    price: 38000,
    mileage: 50000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Full-size luxury SUV with maximum space and comfort for large families.',
    featured: false
  },
  {
    id: '23',
    brand: 'Toyota',
    model: 'Highlander',
    year: 2021,
    price: 36000,
    mileage: 25000,
    transmission: 'automatic',
    fuelType: 'hybrid',
    color: 'Blue',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Hybrid 3-row SUV combining efficiency with Toyota reliability.',
    featured: true
  },
  {
    id: '24',
    brand: 'Nissan',
    model: 'Armada',
    year: 2020,
    price: 40000,
    mileage: 35000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'
    ],
    description: 'Full-size luxury SUV with powerful V8 engine and premium features.',
    featured: false
  },
  {
    id: '25',
    brand: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 28000,
    mileage: 40000,
    transmission: 'manual',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'Coupe',
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5f5837ec5?w=800',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800'
    ],
    description: 'Iconic American muscle car with thrilling performance and classic styling.',
    featured: true
  },
  {
    id: '26',
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2020,
    price: 29000,
    mileage: 30000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Yellow',
    type: 'Coupe',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Modern muscle car with aggressive styling and powerful engine options.',
    featured: false
  },
  {
    id: '27',
    brand: 'Toyota',
    model: '4Runner',
    year: 2021,
    price: 38000,
    mileage: 20000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Green',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'
    ],
    description: 'Rugged off-road SUV with legendary reliability and durability.',
    featured: true
  },
  {
    id: '28',
    brand: 'Nissan',
    model: 'Maxima',
    year: 2021,
    price: 27000,
    mileage: 28000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Silver',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800'
    ],
    description: 'Sporty luxury sedan with powerful V6 engine and premium interior.',
    featured: false
  },
  {
    id: '29',
    brand: 'Ford',
    model: 'Ranger',
    year: 2020,
    price: 26000,
    mileage: 45000,
    transmission: 'automatic',
    fuelType: 'diesel',
    color: 'Gray',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Compact pickup truck with impressive towing capacity and off-road capability.',
    featured: false
  },
  {
    id: '30',
    brand: 'Chevrolet',
    model: 'Silverado',
    year: 2021,
    price: 40000,
    mileage: 25000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'Pickup',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Heavy-duty pickup with exceptional towing and hauling capabilities.',
    featured: true
  }
];

export const brands = [
  { name: 'Toyota', logo: '🚗', models: ['Land Cruiser', 'Prado', 'Hilux', 'Camry', 'Corolla', 'RAV4', 'Highlander', '4Runner'] },
  { name: 'Nissan', logo: '🚙', models: ['Patrol', 'Xterra', 'Altima', 'Pathfinder', 'Armada', 'Maxima'] },
  { name: 'Mitsubishi', logo: '🚐', models: ['Pajero', 'L200'] },
  { name: 'Ford', logo: '🛻', models: ['F-150', 'Explorer', 'Mustang', 'Ranger'] },
  { name: 'Chevrolet', logo: '🚕', models: ['Tahoe', 'Suburban', 'Camaro', 'Silverado'] },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find(v => v.id === id);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter(v => v.featured);
}
