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
    brand: 'BYD',
    model: 'Tang EV',
    year: 2023,
    price: 35000,
    mileage: 12000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Blue',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800'
    ],
    description: 'Premium electric SUV with 500km+ range. Advanced technology and luxurious interior.',
    featured: true
  },
  {
    id: '2',
    brand: 'BYD',
    model: 'Han EV',
    year: 2023,
    price: 28000,
    mileage: 8000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Black',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800'
    ],
    description: 'Luxury electric sedan with blade battery technology. 600km+ range, fast charging.',
    featured: true
  },
  {
    id: '3',
    brand: 'BYD',
    model: 'Song Plus DM-i',
    year: 2023,
    price: 22000,
    mileage: 15000,
    transmission: 'automatic',
    fuelType: 'hybrid',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Popular plug-in hybrid SUV. Excellent fuel economy, spacious interior.',
    featured: true
  },
  {
    id: '4',
    brand: 'Chery',
    model: 'Tiggo 8 Pro',
    year: 2023,
    price: 18000,
    mileage: 20000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800'
    ],
    description: '7-seater family SUV with modern features. Great value and reliability.',
    featured: true
  },
  {
    id: '5',
    brand: 'Chery',
    model: 'Arrizo 8',
    year: 2023,
    price: 14000,
    mileage: 18000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Silver',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800'
    ],
    description: 'Elegant sedan with premium interior. Advanced safety features.',
    featured: false
  },
  {
    id: '6',
    brand: 'Geely',
    model: 'Coolray',
    year: 2023,
    price: 16000,
    mileage: 15000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Gray',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800'
    ],
    description: 'Sporty compact SUV with turbocharged engine. Great for urban driving.',
    featured: false
  },
  {
    id: '7',
    brand: 'BYD',
    model: 'Dolphin',
    year: 2023,
    price: 15000,
    mileage: 10000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Blue',
    type: 'Hatchback',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Compact electric hatchback perfect for city commuting. 400km range.',
    featured: false
  },
  {
    id: '8',
    brand: 'Great Wall',
    model: 'Haval H6',
    year: 2022,
    price: 19000,
    mileage: 25000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800'
    ],
    description: 'Bestselling Chinese SUV. Comfortable and feature-rich.',
    featured: false
  },
  {
    id: '9',
    brand: 'BYD',
    model: 'Qin Plus EV',
    year: 2023,
    price: 20000,
    mileage: 12000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'White',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800'
    ],
    description: 'Affordable electric sedan with excellent range. Modern design.',
    featured: true
  },
  {
    id: '10',
    brand: 'Geely',
    model: 'Geometry A',
    year: 2023,
    price: 24000,
    mileage: 8000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Silver',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800'
    ],
    description: 'Premium electric sedan with futuristic design. 500km+ range.',
    featured: false
  },
  {
    id: '11',
    brand: 'Chery',
    model: 'Omoda 5',
    year: 2023,
    price: 17000,
    mileage: 14000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Stylish compact SUV with modern technology. Perfect for young families.',
    featured: false
  },
  {
    id: '12',
    brand: 'BYD',
    model: 'Seal',
    year: 2023,
    price: 32000,
    mileage: 5000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Blue',
    type: 'Sedan',
    images: [
      'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800'
    ],
    description: 'Performance electric sedan with sporty handling. 700km+ range.',
    featured: true
  },
  {
    id: '13',
    brand: 'Great Wall',
    model: 'Tank 300',
    year: 2022,
    price: 28000,
    mileage: 18000,
    transmission: 'automatic',
    fuelType: 'hybrid',
    color: 'Green',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800'
    ],
    description: 'Retro-styled off-road SUV. Powerful and capable.',
    featured: false
  },
  {
    id: '14',
    brand: 'Geely',
    model: 'Okavango',
    year: 2022,
    price: 21000,
    mileage: 22000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'Red',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800'
    ],
    description: '7-seater family SUV with premium features. Spacious and comfortable.',
    featured: false
  },
  {
    id: '15',
    brand: 'BYD',
    model: 'Atto 3',
    year: 2023,
    price: 26000,
    mileage: 9000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Orange',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Compact electric SUV with unique interior design. 420km range.',
    featured: true
  },
  {
    id: '16',
    brand: 'Chery',
    model: 'Tiggo 7 Pro',
    year: 2023,
    price: 19000,
    mileage: 16000,
    transmission: 'automatic',
    fuelType: 'gasoline',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800'
    ],
    description: 'Mid-size SUV with advanced driver assistance. Great value for money.',
    featured: false
  },
  {
    id: '17',
    brand: 'NIO',
    model: 'ES6',
    year: 2022,
    price: 42000,
    mileage: 15000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Gray',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800'
    ],
    description: 'Premium electric SUV with swappable battery. Luxury and performance.',
    featured: true
  },
  {
    id: '18',
    brand: 'Great Wall',
    model: 'Ora Good Cat',
    year: 2023,
    price: 16000,
    mileage: 11000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'Pink',
    type: 'Hatchback',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Retro-styled electric hatchback. Fun to drive, practical for daily use.',
    featured: false
  },
  {
    id: '19',
    brand: 'Geely',
    model: 'Xingyue L',
    year: 2022,
    price: 25000,
    mileage: 20000,
    transmission: 'automatic',
    fuelType: 'hybrid',
    color: 'Black',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800',
      'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800'
    ],
    description: 'Plug-in hybrid SUV with premium interior. Excellent fuel efficiency.',
    featured: false
  },
  {
    id: '20',
    brand: 'BYD',
    model: 'Yuan Plus',
    year: 2023,
    price: 23000,
    mileage: 13000,
    transmission: 'automatic',
    fuelType: 'electric',
    color: 'White',
    type: 'SUV',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800'
    ],
    description: 'Compact electric SUV with great range. Perfect for urban families.',
    featured: true
  }
];

export const brands = [
  { name: 'BYD', logo: '⚡', models: ['Tang EV', 'Han EV', 'Song Plus DM-i', 'Qin Plus EV', 'Dolphin', 'Seal', 'Atto 3', 'Yuan Plus'] },
  { name: 'Chery', logo: '🚗', models: ['Tiggo 8 Pro', 'Arrizo 8', 'Tiggo 7 Pro', 'Tiggo 5x', 'Exeed TXL', 'Omoda 5'] },
  { name: 'Geely', logo: '🔵', models: ['Coolray', 'Azkarra', 'Okavango', 'Emgrand', 'Geometry A', 'Xingyue L'] },
  { name: 'Great Wall', logo: '🏔️', models: ['Haval H6', 'Tank 300', 'Ora Good Cat', 'Wey VV7', 'Poer Pickup'] },
  { name: 'NIO', logo: '🔷', models: ['ES6', 'ES8', 'ET7', 'ET5', 'EC6'] },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find(v => v.id === id);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter(v => v.featured);
}
