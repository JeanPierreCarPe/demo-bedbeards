export interface NavLink {
  label: string;
  href: string;
}

export interface BarberData {
  id: string;
  nickname: string;
  name: string;
  specialty: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  offset?: 'up' | 'down';
}

export interface ServiceTab {
  id: string;
  label: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  cta: string;
  previewImages: [string, string, string];
}

export interface BeardStyle {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  image: string;
}

export type BlogCategory = 'care' | 'style' | 'technique' | 'products' | 'culture';

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageBottom?: boolean;
  readingTime?: string;
  author?: string;
  content?: string;
  category?: BlogCategory;
}

export interface Product {
  id: string;
  name: string;
  category: 'oil' | 'wax' | 'balm' | 'shampoo' | 'tool';
  description: string;
  image: string;
  tagline: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category: 'cuts' | 'beards' | 'treatments';
}

export interface ServicePricing {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  serviceId: string;
}

export interface StudioValue {
  id: string;
  title: string;
  description: string;
}
