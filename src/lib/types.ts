export interface LocationHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Location {
  id: string;
  name: string;
  mall: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  phone: string;
  hours: LocationHours;
  brandId: string;
  doordashUrl: string;
  uberEatsUrl: string;
  imageUrl?: string;
  isOpen: boolean;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  cuisineType: string;
  features: string[];
  established: number;
}

export interface MenuData {
  brandId: string;
  lastUpdated: string;
  categories: MenuCategory[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel?: string;
  tags: string[];
  isAvailable: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  category: string;
  tags: string[];
}

export interface JobListing {
  id: string;
  title: string;
  category: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedAt: string;
  isActive: boolean;
}
