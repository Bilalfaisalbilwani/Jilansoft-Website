/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  industry: 'Healthcare' | 'Education' | 'Restaurant' | 'Retail' | 'Manufacturing' | 'Corporate';
  description: string;
  image: string;
  techStack: string[];
  services: string[];
  result?: string;
  liveUrl?: string;
  gradient?: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  rating: number;
  quote: string;
  author: string;
  role: string;
  avatarInitials: string;
}

export interface PricingPlan {
  badge: string;
  badgeType: 'standard' | 'popular' | 'enterprise';
  name: string;
  description: string;
  price: string;
  period?: string;
  note: string;
  features: {
    text: string;
    included: boolean;
  }[];
  isFeatured?: boolean;
  urgency?: string;
  buttonText: string;
}
