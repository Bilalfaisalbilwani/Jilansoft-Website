/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import product1 from './assets/product1.jpg';
import product4 from './assets/product4.jpg';
import {
  NavLink,
  StatItem,
  ServiceItem,
  PortfolioItem,
  ProcessStep,
  Testimonial,
  PricingPlan,
} from './types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  // { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const trustedLogos: string[] = [
  'Streamline',
  'Vertex Labs',
  'Orbit Digital',
  'Quantum',
  'Praxis Co.',
  'Altova',
  'Meridian',
  'CoreSync',
  'Vaultline',
  'NovaBridge',
];

export const heroStats: StatItem[] = [
  { number: '2009', label: 'ESTABLISHED' },
  { number: '500', label: 'CLIENTS/USERS' },
  { number: '11', label: 'SERVED BUSINESS TYPES' },
];

export const values: string[] = [
  'Results-First Approach',
  'Transparent Workflow',
  'Pixel-Perfect Craft',
  'Scalable Architecture',
];

export const services: ServiceItem[] = [
 {
  icon: '🌐',
  title: 'Web Development',
  description: 'We build high-performance websites and web applications using modern technologies. From conversion-focused landing pages to scalable SaaS platforms built for growth.'
},
{
  icon: '🛒',
  title: 'E-Commerce Solutions',
  description: 'We design and develop high-converting online stores using Shopify, WordPress, and custom solutions. Optimized for speed, user experience, and maximum sales.'
},
{
  icon: '💻',
  title: 'Custom Software Development',
  description: 'Tailored software solutions designed to automate business processes, improve efficiency, and support scalable long-term growth for startups and enterprises.'
}

];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'acme-corp',
    category: 'corporate',
    categoryLabel: 'Corporate Websites',
    title: 'Acme Enterprise Platform',
    industry: 'Corporate',
    description: 'A high-performance corporate portal built for a multinational logistics firm, integrating enterprise resource mapping and secure client portals.',
    image: product1,
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'AWS'],
    services: ['UI/UX Design', 'Web Development', 'Project Management'],
    result: '55% Faster Load Speed',
    liveUrl: '#',
  },
  {
    id: 'theracare',
    category: 'software',
    categoryLabel: 'Custom Software',
    title: 'TheraCare Patient Portal',
    industry: 'Healthcare',
    description: 'A HIPAA-compliant patient care dashboard designed for clinic medical staff, streamlining medical records management and virtual appointment workflows.',
    image: product4,
    techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    services: ['UI/UX Design', 'Custom Software Dev', 'Project Management'],
    result: '40% Faster Scheduling',
    liveUrl: '#com',
  },
  {
    id: 'edulearn',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    title: 'EduLearn Headless Academy',
    industry: 'Education',
    description: 'A dynamic educational portal with custom course builder, multi-instructor live streams, and interactive quizzing mechanisms built on a headless architecture.',
    image: product1,
    techStack: ['WordPress', 'React', 'GraphQL', 'Tailwind CSS'],
    services: ['Web Development', 'UI/UX Design', 'SEO'],
    result: '+120% Course Signups',
    liveUrl: '#',
  },
  {
    id: 'bistroflow',
    category: 'apps',
    categoryLabel: 'Mobile Apps',
    title: 'BistroFlow Ordering App',
    industry: 'Restaurant',
    description: 'A highly responsive restaurant management app and contactless ordering system that handles high-concurrency peak reservation hours smoothly.',
    image: product4,
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    services: ['Mobile App', 'UI/UX Design', 'Project Management'],
    result: '+45% Table Turnover',
    liveUrl: '#',
  },
  {
    id: 'aura',
    category: 'shopify',
    categoryLabel: 'Shopify',
    title: 'Aura Cosmetics Store',
    industry: 'Retail',
    description: 'A fast, content-driven headless Shopify storefront designed for a luxury cosmetics brand, optimized for rich visual storytelling and checkout conversions.',
    image: product1,
    techStack: ['Shopify', 'React', 'Tailwind CSS', 'GraphQL'],
    services: ['UI/UX Design', 'Web Development', 'SEO'],
    result: '+250% Sales Growth',
    liveUrl: '#',
  },
  {
    id: 'zenith',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    title: 'Zenith Industrial ERP',
    industry: 'Manufacturing',
    description: 'A comprehensive UI/UX redesign and front-end system overhaul for a heavy machinery manufacturer\'s supply-chain tracking portal.',
    image: product4,
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'D3.js'],
    services: ['UI/UX Design', 'Web Development', 'Project Management'],
    result: '+65% Operator Efficiency',
     liveUrl: '#',
  },
];

export const globalStats: StatItem[] = [
  { number: '200+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '$40M+', label: 'Revenue Generated for Clients' },
  { number: '8yr', label: 'Average Team Experience' },
];

export const processSteps: ProcessStep[] = [
  {
    icon: '🔍',
    title: 'Discovery',
    description: 'Deep dive into your business, competitors, and users. We define success before a single pixel is drawn.',
  },
  {
    icon: '🎯',
    title: 'Strategy',
    description: 'Architecture, positioning, and a clear roadmap. We align design and engineering goals before building.',
  },
  {
    icon: '⚡',
    title: 'Execution',
    description: 'Design sprints and agile development. You get weekly updates and full visibility throughout.',
  },
  {
    icon: '📊',
    title: 'Growth',
    description: 'Launch, measure, and optimize. We don\'t consider a project done until the metrics are moving.',
  },
];

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote: 'Nexus transformed our e-commerce experience from the ground up. Revenue grew 147% in the first six months and our team can actually update the site without developer help now.',
    author: 'Sarah Reynolds',
    role: 'CEO, Vaultline Commerce',
    avatarInitials: 'SR',
  },
  {
    rating: 5,
    quote: 'The new brand identity completely changed how enterprise buyers perceive us. Demo requests jumped 220% within 60 days of launch. Worth every penny.',
    author: 'David Kim',
    role: 'Founder, Meridian Labs',
    avatarInitials: 'DK',
  },
  {
    rating: 5,
    quote: 'Most agencies over-promise and under-deliver. Nexus gave us weekly updates, hit every deadline, and the SEO results speak for themselves — 312% organic growth.',
    author: 'Maria Jensen',
    role: 'Head of Growth, Quantum Health',
    avatarInitials: 'MJ',
  },
  {
    rating: 5,
    quote: 'The Orbit app has a 4.8 star rating and 82,000 downloads in its first year. Nexus built something our users genuinely love, and the architecture scales effortlessly.',
    author: 'Alex Okonkwo',
    role: 'CTO, Orbit Fitness',
    avatarInitials: 'AO',
  },
  {
    rating: 5,
    quote: 'Nexus redesigned our entire dashboard UX. Churn dropped 40%, activation improved 58%. They care about outcomes, not just deliverables.',
    author: 'Lisa Park',
    role: 'Product Lead, Praxis',
    avatarInitials: 'LP',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    badge: 'Starter',
    badgeType: 'standard',
    name: 'Launch',
    description: 'Perfect for startups and small businesses ready to establish a strong digital presence.',
    price: '2,500',
    period: '/ project',
    note: 'One-time. Delivered in 3 weeks.',
    features: [
      { text: '5-page website design + dev', included: true },
      { text: 'Mobile-first responsive', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: '2 rounds of revisions', included: true },
      { text: 'CMS integration', included: true },
      { text: 'Custom animations', included: false },
      { text: 'Analytics dashboard', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    badge: 'Most Popular',
    badgeType: 'popular',
    name: 'Growth',
    description: 'For growing brands that need a complete digital strategy and a site that converts.',
    price: '6,500',
    period: '/ project',
    note: 'One-time. Delivered in 6 weeks.',
    isFeatured: true,
    urgency: 'Only 3 slots left this month',
    features: [
      { text: 'Up to 15-page custom build', included: true },
      { text: 'Advanced animations & UX', included: true },
      { text: 'Full SEO strategy', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Analytics + conversion tracking', included: true },
      { text: '3 months post-launch support', included: true },
      { text: 'Performance optimization', included: true },
    ],
    buttonText: 'Start Growing →',
  },
  {
    badge: 'Enterprise',
    badgeType: 'enterprise',
    name: 'Scale',
    description: 'Full-service digital partnership for established companies with complex needs.',
    price: 'Custom',
    note: 'Monthly retainer. Flexible scope.',
    features: [
      { text: 'Dedicated cross-functional team', included: true },
      { text: 'Product + marketing strategy', included: true },
      { text: 'Ongoing development sprints', included: true },
      { text: 'A/B testing & CRO', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'Monthly strategy calls', included: true },
      { text: 'White-glove onboarding', included: true },
    ],
    buttonText: 'Talk to Us →',
  },
];
