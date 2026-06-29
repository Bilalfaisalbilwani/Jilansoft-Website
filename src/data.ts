/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
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
  { number: '2009', label: 'Established' },
  { number: '500', label: 'Client/Users' },
  { number: '11', label: 'Served Business Types' },
];

export const values: string[] = [
  'RSince 2009',
  'Business Solution Provider',
  'Flexible & User-Friendly Solutions',
  'Industry-Wide Expertise',
];

export const services: ServiceItem[] = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Performance-first websites and web applications built with modern stacks. From landing pages to complex SaaS platforms.',
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Cross-platform mobile apps engineered for scale. Native performance with React Native and Flutter.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Research-driven interfaces that feel intuitive and look stunning. We design for conversion, not just aesthetics.',
  },
  {
    icon: '📈',
    title: 'SEO & Growth',
    description: 'Data-backed strategies that compound over time. Technical SEO, content architecture, and organic acquisition systems.',
  },
  {
    icon: '💎',
    title: 'Brand Identity',
    description: 'From naming to visual systems, we craft brand identities that resonate and remain consistent across every touchpoint.',
  },
  {
    icon: '🚀',
    title: 'Digital Marketing',
    description: 'Paid media, email automation, and retention strategies that turn your marketing budget into measurable ROI.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'acme-corp',
    category: 'corporate',
    categoryLabel: 'Corporate Websites',
    title: 'Acme Logistics Enterprise Portal',
    industry: 'Corporate',
    description: 'A custom, high-speed corporate platform built for a global logistics firm, integrating complex routing systems, interactive map tracking, and secure partner portal pipelines.',
    image: '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'AWS', 'Framer Motion'],
    services: ['UI/UX Design', 'Web Development', 'Project Management', 'SEO'],
    result: '+180% Partner Signups',
    liveUrl: 'https://acme-enterprise-demo.com',
    heroImage: '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
    galleryImages: [
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg'
    ],
    client: 'Acme Logistics Group Inc.',
    year: '2025',
    duration: '12 Weeks',
    teamSize: '5 Specialists',
    problem: {
      clientIntro: 'Acme Logistics is a multinational transport and supply-chain leader managing thousands of shipments daily. Their existing web portal was outdated, hard to navigate, and struggled to convert high-value regional partners.',
      challenges: [
        'Slow loading times exceeding 6.5 seconds, causing high visitor bounce rates.',
        'No self-service registration or cost estimation tools for potential transport partners.',
        'Fragmented information that failed to establish trust with Fortune 500 prospects.'
      ],
      goals: [
        'Deliver a world-class digital brand presence matching their top-tier industry status.',
        'Reduce load times below 1.5 seconds globally.',
        'Establish an automated, high-converting partner boarding and quote flow.'
      ]
    },
    solution: {
      overview: 'We engineered a fully bespoke website utilizing React, Tailwind CSS, and headless API integrations. The site features interactive fleet routes, an elegant freight calculator, and custom animations to explain complex logistical operations.',
      keyImplementations: [
        {
          title: 'Speed & Architecture Overhaul',
          description: 'Migrated the site to a static-site framework with lazy-loaded modules, compressing visual assets and routing requests via a worldwide CDN.',
          iconName: 'Zap'
        },
        {
          title: 'Interactive Freight Estimator',
          description: 'Created a highly interactive custom quote tool with responsive slider scales, reducing cold-call friction and capturing high-intent enterprise leads.',
          iconName: 'Calculator'
        },
        {
          title: 'Custom Brand & UI Motion Design',
          description: 'Utilized Framer Motion to craft smooth transitions, clean typography alignments, and intuitive scroll-triggered layout elevations.',
          iconName: 'Sparkles'
        }
      ]
    },
    features: [
      {
        title: 'Global Freight Cost Estimator',
        description: 'Enables potential partners to enter cargo details and immediately preview price brackets.',
        iconName: 'Scale'
      },
      {
        title: 'Interactive Terminal Map',
        description: 'Visual tracking of key national warehouses and distribution hubs using high-performance vectors.',
        iconName: 'Map'
      },
      {
        title: 'Secured Enterprise Client Portal',
        description: 'Custom-built secure login area for enterprise accounts to manage recurring bills and dispatch schedules.',
        iconName: 'Lock'
      }
    ],
    timeline: [
      { phase: 'Discovery & Audit', duration: 'Week 1-2', description: 'Deep-dive audit into competitor sites, content structures, and user personas.' },
      { phase: 'Interactive Wireframes', duration: 'Week 3-4', description: 'Prototyping responsive navigation layouts and interactive freight calculator workflows.' },
      { phase: 'UI Design & Assets', duration: 'Week 5-6', description: 'High-fidelity visual design, luxury layout prototyping, and custom asset production.' },
      { phase: 'Frontend Engineering', duration: 'Week 7-9', description: 'Component development with React, custom Framer Motion timelines, and Tailwind styling.' },
      { phase: 'Backend API Integration', duration: 'Week 10', description: 'Connecting calculators and leads form to the CRM pipeline and notification systems.' },
      { phase: 'QA & Optimization', duration: 'Week 11', description: 'Extensive multi-device rendering checks, performance profiling, and SEO validation.' },
      { phase: 'Deployment & Support', duration: 'Week 12', description: 'Zero-downtime server launch and team operations training.' }
    ],
    testimonial: {
      quote: 'Nexus built an incredible platform that perfectly mirrors our global scale. The partner onboarding tool has automated a massive chunk of our sales qualification pipeline, and our brand authority has never been stronger.',
      author: 'Marcus Vance',
      role: 'Vice President of Strategy',
      company: 'Acme Logistics Group',
      rating: 5
    },
    statistics: [
      { label: 'Lighthouse Score', value: '99', change: 'from 45', iconName: 'Cpu' },
      { label: 'Onboarding Friction', value: '-60%', change: 'Time saved', iconName: 'Timer' },
      { label: 'Partner Leads', value: '+180%', change: 'in 90 days', iconName: 'TrendingUp' }
    ]
  },
  {
    id: 'theracare',
    category: 'software',
    categoryLabel: 'Custom Software',
    title: 'TheraCare Patient & Clinic Portal',
    industry: 'Healthcare',
    description: 'A secure, HIPAA-compliant patient care dashboard designed for clinical medical staff, streamlining medical records management and virtual appointment workflows.',
    image: '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
    techStack: ['React', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'WebRTC'],
    services: ['UI/UX Design', 'Web Development', 'Project Management'],
    result: '+320% Digital Appointments',
    liveUrl: 'https://theracare-portal-demo.com',
    heroImage: '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
    galleryImages: [
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    client: 'TheraCare Healthcare Network',
    year: '2025',
    duration: '14 Weeks',
    teamSize: '6 Specialists',
    problem: {
      clientIntro: 'TheraCare manages dozens of outpatient clinics. Their legacy scheduling system was entirely offline, leading to high administrative overhead, long patient call lines, and frequent double-bookings.',
      challenges: [
        'Manual appointment scheduling required thousands of hours of phone support monthly.',
        'Strict HIPAA compliance standards meant they could not use off-the-shelf public scheduling plugins.',
        'Patient records were scattered, preventing quick digital checkups.'
      ],
      goals: [
        'Create a bespoke patient portal with HIPAA-level encryption.',
        'Reduce average clinic booking times from 8 minutes down to 30 seconds.',
        'Deliver a secure video consultation panel directly inside the web browser.'
      ]
    },
    solution: {
      overview: 'We built a custom Patient & Clinic Dashboard using a highly secured React client and a Laravel REST API. Patients can self-schedule, chat with practitioners, and join encrypted telehealth video calls without downloading external apps.',
      keyImplementations: [
        {
          title: 'Bespoke Secure Calendar Engine',
          description: 'A high-concurrency calendar framework preventing double-bookings with real-time push notification updates for clinical staff.',
          iconName: 'Calendar'
        },
        {
          title: 'HIPAA-Compliant Database Encryption',
          description: 'Implemented field-level AES-256 database encryption for sensitive medical files and secure chat logs.',
          iconName: 'Shield'
        },
        {
          title: 'One-Click Telehealth Video',
          description: 'WebRTC-powered native video consultations, fully styled to feel consistent with the clean outpatient interface.',
          iconName: 'Video'
        }
      ]
    },
    features: [
      {
        title: 'Instant Patient Booking Panel',
        description: 'Clean, step-by-step interactive calendar picker with automated insurance eligibility confirmation.',
        iconName: 'CheckCircle'
      },
      {
        title: 'Practitioner Health Logs Dashboard',
        description: 'A beautiful medical chart grid displaying patient vitals, active prescriptions, and diagnostic timeline history.',
        iconName: 'Activity'
      },
      {
        title: 'Prescription Digital Refill',
        description: 'One-tap request tool notifying pharmacies automatically with secure digital doctor signatures.',
        iconName: 'Plus'
      }
    ],
    timeline: [
      { phase: 'Compliance & Scoping', duration: 'Week 1-3', description: 'Auditing medical standards and laying out strict encrypted security structures.' },
      { phase: 'UI Wireframing & UX', duration: 'Week 4-5', description: 'Designing high-contrast, accessible layouts suitable for users of all age brackets.' },
      { phase: 'Visual Identity Refresh', duration: 'Week 6-7', description: 'Crafting comforting pastel color schemes and elegant high-readability text parameters.' },
      { phase: 'Core Platform Engineering', duration: 'Week 8-11', description: 'Developing the React patient frontend and connecting encrypted Laravel medical tables.' },
      { phase: 'Telehealth Integration', duration: 'Week 12', description: 'Setting up WebRTC audio-video channels and securing chat room socket handshakes.' },
      { phase: 'Penetration Testing & QA', duration: 'Week 13', description: 'Extensive security audits, database vulnerability testing, and accessibility validations.' },
      { phase: 'Deployment & Training', duration: 'Week 14', description: 'Launching on dedicated medical servers and onboarding clinic staff.' }
    ],
    testimonial: {
      quote: 'The custom TheraCare portal has fundamentally revolutionized how our clinics operate. Over 75% of our bookings are now completely automated, scheduling errors have dropped to zero, and patients constantly rave about the video consult features.',
      author: 'Dr. Evelyn Ramirez',
      role: 'Chief Medical Officer',
      company: 'TheraCare Network',
      rating: 5
    },
    statistics: [
      { label: 'Booking Speed', value: '18s', change: 'from 8 min', iconName: 'Zap' },
      { label: 'Admin Overhead', value: '-65%', change: 'Hours saved', iconName: 'TrendingDown' },
      { label: 'Patient Retention', value: '+40%', change: 'Digital booking rates', iconName: 'Smile' }
    ]
  },
  {
    id: 'edulearn',
    category: 'wordpress',
    categoryLabel: 'WordPress',
    title: 'EduLearn Headless Academy',
    industry: 'Education',
    description: 'A dynamic educational portal with custom course builder, multi-instructor live streams, and interactive testing systems built on a headless WordPress CMS and React frontend.',
    image: '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
    techStack: ['WordPress', 'React', 'GraphQL', 'Tailwind CSS', 'Mux Video'],
    services: ['Web Development', 'UI/UX Design', 'SEO', 'Project Management'],
    result: '+120% Course Enrollment',
    liveUrl: 'https://edulearn-academy-demo.com',
    heroImage: '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
    galleryImages: [
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    client: 'EduLearn Educational Platforms',
    year: '2025',
    duration: '10 Weeks',
    teamSize: '4 Specialists',
    problem: {
      clientIntro: 'EduLearn is a global online educational platform hosting premium masterclasses. Their monolithic system frequently crashed during high-traffic course launches, and content creators found it difficult to organize lessons.',
      challenges: [
        'Site crashes during live marketing webinars and major course launches.',
        'A sluggish course player with sluggish buffer speeds, frustrating paying students.',
        'Outdated CMS dashboard preventing administrative staff from uploading content quickly.'
      ],
      goals: [
        'Separate the administrative CMS backend from the public course player using Headless architecture.',
        'Incorporate high-speed streaming with zero buffering times.',
        'Implement structured course navigation to drive signups.'
      ]
    },
    solution: {
      overview: 'We decoupled the platform, utilizing WordPress purely as a headless content management system accessed via GraphQL. On the frontend, we built an ultra-fast React single-page application with customized video streaming powered by Mux.',
      keyImplementations: [
        {
          title: 'Decoupled GraphQL Architecture',
          description: 'WordPress handles complex course scheduling and text management; React renders the site statically, ensuring lighting-fast navigation.',
          iconName: 'Server'
        },
        {
          title: 'Buffered Video Playback System',
          description: 'Direct integration with Mux CDN for responsive video delivery, adjusting resolution dynamically to student network connections.',
          iconName: 'PlayCircle'
        },
        {
          title: 'Gamified Progress Tracking',
          description: 'State-driven student progress bars, micro-animations on lesson completion, and auto-generated digital PDF certificates.',
          iconName: 'Award'
        }
      ]
    },
    features: [
      {
        title: 'Visual Multi-Module Builder',
        description: 'Enables instructors to easily arrange lectures, upload files, and embed custom quizzes directly in WordPress.',
        iconName: 'Sliders'
      },
      {
        title: 'Buffer-Free Custom Course Player',
        description: 'Immersive screen theater layout with adjustable playback speed, auto-saving last played position.',
        iconName: 'Video'
      },
      {
        title: 'Live Interactive Q&A Panel',
        description: 'Integrated live discussion system letting students converse and post timestamped questions under videos.',
        iconName: 'MessageSquare'
      }
    ],
    timeline: [
      { phase: 'CMS Restructuring', duration: 'Week 1-2', description: 'Auditing historical course formats and installing custom GraphQL schemas in WordPress.' },
      { phase: 'UX Architecture', duration: 'Week 3-4', description: 'Designing distraction-free lesson players, sleek account dashboards, and purchase pages.' },
      { phase: 'UI Refinements', duration: 'Week 5', description: 'Creating clean modern educational branding with smooth typography and layout grids.' },
      { phase: 'Headless Engineering', duration: 'Week 6-8', description: 'Developing the high-speed React storefront and connecting the lesson players to Mux APIs.' },
      { phase: 'Payment & Cart Integration', duration: 'Week 9', description: 'Setting up multi-currency Stripe checkouts and automated invoice email setups.' },
      { phase: 'Traffic Simulation Tests', duration: 'Week 10', description: 'Simulating large traffic spikes to ensure high-speed performance, followed by full deployment.' }
    ],
    testimonial: {
      quote: 'Going headless with Nexus was the best business choice we ever made. The site loads instantly, course completion rates are up 50%, and we handled our biggest course launch in history with absolutely zero lag.',
      author: 'Clara Jenkins',
      role: 'Director of Education',
      company: 'EduLearn platforms',
      rating: 5
    },
    statistics: [
      { label: 'Buffering Reduced', value: '-85%', change: 'Video latency', iconName: 'Cpu' },
      { label: 'Page Load Speed', value: '0.6s', change: 'First Contentful Paint', iconName: 'Zap' },
      { label: 'Course Enrollment', value: '+120%', change: 'in first launch', iconName: 'Award' }
    ]
  },
  {
    id: 'bistroflow',
    category: 'apps',
    categoryLabel: 'Mobile Apps',
    title: 'BistroFlow Ordering App',
    industry: 'Restaurant',
    description: 'A highly responsive, cross-platform mobile restaurant management system and contactless ordering app designed to manage high peak order volumes seamlessly.',
    image: '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
    techStack: ['Flutter', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
    services: ['Mobile App', 'UI/UX Design', 'Project Management'],
    result: '+45% Table Turnover',
    liveUrl: 'https://bistroflow-app-demo.com',
    heroImage: '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
    galleryImages: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    client: 'BistroFlow Culinary Ventures',
    year: '2025',
    duration: '11 Weeks',
    teamSize: '4 Specialists',
    problem: {
      clientIntro: 'BistroFlow is a high-volume gourmet restaurant franchise. During peak Friday and Saturday evening hours, their servers struggled to process orders, food delivery times lagged, and customer satisfaction dropped.',
      challenges: [
        'Inefficient paper ordering and manual point-of-sale entries delayed kitchen prep by 15-20 minutes.',
        'High food order errors due to bad communication between waitstaff and chefs.',
        'No digital platform for clients to order directly from table QR codes.'
      ],
      goals: [
        'Build an ultra-fast mobile ordering app for both iOS and Android.',
        'Enable kitchen staff to receive and update order preparation states instantly in real-time.',
        'Accelerate dining table turnover rates by streamlining ordering and paying.'
      ]
    },
    solution: {
      overview: 'We developed a high-speed cross-platform app in Flutter coupled with a Node.js and Socket.io server. Customers simply scan a table QR code, place custom orders, and pay with mobile wallets. Kitchen staff manage incoming tickets on real-time kitchen display screens.',
      keyImplementations: [
        {
          title: 'Real-Time Socket Connection',
          description: 'Instant ticket transmission to kitchen tablets the millisecond an order is placed, eliminating administrative delays.',
          iconName: 'Activity'
        },
        {
          title: 'QR-Triggered Table Routing',
          description: 'Intelligent table grouping letting multiple patrons at the same table split or add orders to a single tab smoothly.',
          iconName: 'Grid'
        },
        {
          title: 'One-Tap Apple & Google Pay',
          description: 'Secure, contactless payment gateways embedded directly into the native mobile interface.',
          iconName: 'CreditCard'
        }
      ]
    },
    features: [
      {
        title: 'Real-Time Food Cooking Tracker',
        description: 'Shows diners their food is being prepped, cooked, and plated in real-time with progress bar indicators.',
        iconName: 'Flame'
      },
      {
        title: 'Smart Kitchen Ticket Display',
        description: 'Clean, color-coded dashboard for chefs sorting tickets by prep time and category to optimize kitchen workflows.',
        iconName: 'Tv'
      },
      {
        title: 'Menu Stock Sync Engine',
        description: 'Auto-hides menu items on the customer app if ingredients are depleted, preventing order disappointment.',
        iconName: 'Check'
      }
    ],
    timeline: [
      { phase: 'Kitchen Workflow Study', duration: 'Week 1-2', description: 'Spending time inside busy restaurant kitchens to map out perfect ticketing logic.' },
      { phase: 'UX Prototype Sprints', duration: 'Week 3-4', description: 'Iteratively wireframing order-flow layouts to be completely foolproof for hungry users.' },
      { phase: 'UI Layout & Motion', duration: 'Week 5-6', description: 'Crafting premium, dark mouth-watering menus and tactile checkout animations.' },
      { phase: 'Mobile Engineering', duration: 'Week 7-9', description: 'Writing the cross-platform Flutter app and implementing Node.js real-time WebSockets.' },
      { phase: 'POS & Payment Setup', duration: 'Week 10', description: 'Connecting payment gateways and syncing order logs into existing restaurant software.' },
      { phase: 'Live Launch Support', duration: 'Week 11', description: 'Deploying the system in primary locations and providing live onsite launch support.' }
    ],
    testimonial: {
      quote: 'BistroFlow has completely changed how we run our operations. Table turnover is 45% faster, billing mistakes are down to absolute zero, and the customer feedback has been overwhelmingly positive. Our staff can focus entirely on serving premium experiences.',
      author: 'Stefano Ricci',
      role: 'Operations Director',
      company: 'BistroFlow Ventures',
      rating: 5
    },
    statistics: [
      { label: 'Table Turnover', value: '+45%', change: 'faster dining cycle', iconName: 'TrendingUp' },
      { label: 'Order Accuracy', value: '100%', change: 'Zero ticket mistakes', iconName: 'CheckCircle' },
      { label: 'Average Ticket Value', value: '+22%', change: 'from in-app upsells', iconName: 'DollarSign' }
    ]
  },
  {
    id: 'aura',
    category: 'shopify',
    categoryLabel: 'Shopify',
    title: 'Aura Cosmetics Store',
    industry: 'Retail',
    description: 'An elegant, high-converting headless Shopify storefront designed for a luxury cosmetics brand, optimized for rich visual storytelling and frictionless checkout conversions.',
    image: '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg',
    techStack: ['Shopify', 'React', 'Tailwind CSS', 'GraphQL', 'Vercel'],
    services: ['UI/UX Design', 'Web Development', 'SEO', 'Project Management'],
    result: '+250% Checkout Sales',
    liveUrl: 'https://aura-cosmetics-demo.com',
    heroImage: '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg',
    galleryImages: [
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg',
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg'
    ],
    client: 'Aura Premium Cosmetics',
    year: '2025',
    duration: '8 Weeks',
    teamSize: '3 Specialists',
    problem: {
      clientIntro: 'Aura Cosmetics is a premium skincare brand. Despite strong marketing campaigns, their legacy template-based e-commerce storefront suffered from high cart abandonment, slow media load times, and poor mobile checkout responsiveness.',
      challenges: [
        'High-resolution product imagery took up to 8 seconds to load on mobile networks, killing purchasing momentum.',
        'Rigid templates prevented custom product bundles and personalized skin routine builders.',
        'Standard Shopify checkout steps felt generic, reducing prestige buyer trust.'
      ],
      goals: [
        'Deliver a lightning-fast headless shop loading in under 1 second.',
        'Build an interactive, highly engaging "Custom Skincare Routine" builder.',
        'Revamp checkout animations to maximize conversion and purchase values.'
      ]
    },
    solution: {
      overview: 'We decoupled Shopify\'s backend, and built a bespoke, highly optimized React storefront on Vercel. We utilized Shopify\'s Storefront API (GraphQL) to fetch products instantly, and custom-engineered an interactive 3-step routine finder.',
      keyImplementations: [
        {
          title: 'Headless Storefront API',
          description: 'Migrated products, inventories, and checkouts to a fast GraphQL pipeline, keeping Shopify as a robust CMS while unlocking ultimate design freedom.',
          iconName: 'Server'
        },
        {
          title: 'Interactive Routine Personalizer',
          description: 'Designed a beautiful skincare quiz recommending custom product bundles dynamically based on user skin type, directly increasing average order values.',
          iconName: 'Sparkles'
        },
        {
          title: 'Pre-rendered Image Architecture',
          description: 'Configured automated image optimization pipelines to instantly deliver ultra-sharp cosmetic visuals optimized for every screen size.',
          iconName: 'Zap'
        }
      ]
    },
    features: [
      {
        title: 'Custom Skincare Finder Quiz',
        description: 'A luxurious interactive visual quiz returning custom, cart-addable product packages.',
        iconName: 'Sliders'
      },
      {
        title: 'Instant Add-to-Cart Slide Drawer',
        description: 'Sleek, fluid slide drawer showing mini product details and secure instant checkout options without page reloads.',
        iconName: 'ShoppingBag'
      },
      {
        title: 'Rich Editorial Product Stories',
        description: 'Beautiful editorial-style product grids with integrated video playbacks and ingredient breakdown popups.',
        iconName: 'Compass'
      }
    ],
    timeline: [
      { phase: 'E-commerce SEO Audit', duration: 'Week 1', description: 'Reviewing keywords, loading barriers, and optimizing catalog categorization models.' },
      { phase: 'Interactive Routine UX', duration: 'Week 2-3', description: 'Designing interactive skincare quiz parameters and custom visual bundle checkouts.' },
      { phase: 'Prestige UI Layout', duration: 'Week 4', description: 'Establishing delicate luxury color systems, elegant typography, and white space layouts.' },
      { phase: 'React Storefront Coding', duration: 'Week 5-6', description: 'Developing the fast headless storefront and setting up instant cart states.' },
      { phase: 'Shopify API Connection', duration: 'Week 7', description: 'Connecting Shopify GraphQL queries and implementing Stripe checkout handshakes.' },
      { phase: 'QA & Vercel Deployment', duration: 'Week 8', description: 'Testing the layout globally under weak networks, leading to a perfect launch on Vercel.' }
    ],
    testimonial: {
      quote: 'Nexus understood our visual standards perfectly. The storefront is elegant, loads instantly, and the Routine Finder quiz has increased our average purchase value by 38%. Our mobile conversions have never been this high.',
      author: 'Sophia Chen',
      role: 'Founder & CEO',
      company: 'Aura Skincare',
      rating: 5
    },
    statistics: [
      { label: 'Average Order Value', value: '+38%', change: 'from Routine Finder', iconName: 'DollarSign' },
      { label: 'Mobile Conversion', value: '+250%', change: 'overall sales growth', iconName: 'TrendingUp' },
      { label: 'Visual Load Time', value: '0.5s', change: 'to interactive', iconName: 'Zap' }
    ]
  },
  {
    id: 'zenith',
    category: 'design',
    categoryLabel: 'UI/UX Design',
    title: 'Zenith Industrial ERP System',
    industry: 'Manufacturing',
    description: 'A comprehensive, human-centric UI/UX redesign and front-end system overhaul for a global heavy machinery manufacturer\'s logistics and supply-chain portal.',
    image: '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'D3.js', 'TypeScript'],
    services: ['UI/UX Design', 'Web Development', 'Project Management'],
    result: '+65% Operator Efficiency',
    heroImage: '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
    galleryImages: [
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
      '/src/assets/images/acme_corporate_screenshot_1782561182012.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg',
      '/src/assets/images/edulearn_academy_screenshot_1782561218722.jpg',
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg',
      '/src/assets/images/aura_cosmetics_screenshot_1782561258799.jpg'
    ],
    mobileScreenshots: [
      '/src/assets/images/bistroflow_app_screenshot_1782561240033.jpg'
    ],
    dashboardScreenshots: [
      '/src/assets/images/zenith_erp_screenshot_1782561274382.jpg',
      '/src/assets/images/theracare_portal_screenshot_1782561199172.jpg'
    ],
    client: 'Zenith Manufacturing Solutions',
    year: '2025',
    duration: '13 Weeks',
    teamSize: '5 Specialists',
    problem: {
      clientIntro: 'Zenith operates major heavy machinery assembly plants. Their critical warehouse ERP and dispatch tracking interface was built in the early 2000s, leading to frequent operator mistakes, slow logistics schedules, and high training costs.',
      challenges: [
        'An over-cluttered interface with hundreds of input fields, causing high visual fatigue and data errors.',
        'No mobile access, forcing warehouse managers to constantly walk back to desktop terminals.',
        'Delayed updates on parts inventory, leading to production line halts.'
      ],
      goals: [
        'Completely redesign the interface to be clear, modern, and highly responsive.',
        'Build a real-time parts inventory and shipping status dashboard with clear data visualizations.',
        'Improve daily operator speed by reducing total system clicks by 60%.'
      ]
    },
    solution: {
      overview: 'We conducted in-person plant audits, then completely redesigned and engineered a modern, real-time logistics dashboard using React and Tailwind CSS. We integrated dynamic data graphs with D3.js and automated inventory updates.',
      keyImplementations: [
        {
          title: 'Human-Centered UX Design',
          description: 'Grouped hundreds of complex data parameters into clean bento-grid layouts, prioritizing actions based on the operators daily workflows.',
          iconName: 'Layout'
        },
        {
          title: 'High-Performance D3.js Visuals',
          description: 'Sleek, reactive production and warehouse capacity charts rendering millions of historical shipments without lagging.',
          iconName: 'Activity'
        },
        {
          title: 'Instant Multi-Device Inventory Sync',
          description: 'Mobile-responsive layout enabling plant operators to update parts inventory status instantly using hand-held tablet cameras.',
          iconName: 'Cpu'
        }
      ]
    },
    features: [
      {
        title: 'Bento-Box Supply Dashboard',
        description: 'Unified main screen tracking active assembly lines, incoming materials, and transit delivery statuses.',
        iconName: 'Grid'
      },
      {
        title: 'Smart Tablet Parts Scanner',
        description: 'Camera-based responsive web tool letting operators update supply logs instantly on the warehouse floor.',
        iconName: 'Cpu'
      },
      {
        title: 'Predictive Inventory Warnings',
        description: 'Auto-flags parts about to deplete using reactive algorithms, preventing line stoppages.',
        iconName: 'AlertTriangle'
      }
    ],
    timeline: [
      { phase: 'Plant Operations Audit', duration: 'Week 1-3', description: 'Visiting manufacturing lines to study real operator environments and workflow barriers.' },
      { phase: 'Information Architecture', duration: 'Week 4-5', description: 'Redesigning navigation directories and consolidating over 120 scattered legacy inputs.' },
      { phase: 'High-Fidelity ERP Mockups', duration: 'Week 6-7', description: 'Creating clean modern dark-mode interfaces styled for high readability under dim plant lights.' },
      { phase: 'React Frontend Coding', duration: 'Week 8-10', description: 'Developing the fast bento-grid modules, custom graph widgets, and layout states.' },
      { phase: 'Legacy Database Bridging', duration: 'Week 11-12', description: 'Connecting high-speed React APIs to existing legacy machinery databases safely.' },
      { phase: 'Operator Training & Launch', duration: 'Week 13', description: 'Testing the layout directly on manufacturing floor screens and deploying.' }
    ],
    testimonial: {
      quote: 'The ERP redesign from Nexus has had a monumental impact on our factory operations. Training times for new warehouse hires dropped from two weeks to under two hours, and our logistics errors have plummeted by 80%. This software paid for itself in less than a month.',
      author: 'Robert Grayson',
      role: 'Director of Global Manufacturing',
      company: 'Zenith Manufacturing Solutions',
      rating: 5
    },
    statistics: [
      { label: 'Operator Efficiency', value: '+65%', change: 'faster workflows', iconName: 'Zap' },
      { label: 'Dispatch Errors', value: '-80%', change: 'data input mistakes', iconName: 'TrendingUp' },
      { label: 'Operator Onboarding', value: '2 Hours', change: 'from 2 weeks', iconName: 'Smile' }
    ]
  }
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
