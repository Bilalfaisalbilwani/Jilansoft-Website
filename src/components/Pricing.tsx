/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  MessageSquare,
  ChevronDown,
  Clock,
  ShieldCheck,
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

interface ExtendedPricingPlan {
  name: string;
  priceText: string;
  subPrice?: string;
  description: string;
  note: string;
  badge: string;
  badgeType: 'standard' | 'popular' | 'enterprise';
  isFeatured?: boolean;
  buttonText: string;
  
  // Custom detailed specs
  deliveryTime: string;
  idealFor: string;
  supportLevel: string;
  revisions: string;
  
  features: string[];
}

const PROJECT_PLANS: ExtendedPricingPlan[] = [
  {
    name: "Launch Plan",
    priceText: "Starting at $2,500",
    subPrice: "Flexible milestone billing available",
    description: "Establish a fast, conversion-optimized digital presence that elevates your brand from day one.",
    note: "One-time investment. Delivered in 3 weeks.",
    badge: "Starter Plan",
    badgeType: "standard",
    isFeatured: false,
    buttonText: "Request Free Consultation",
    deliveryTime: "3 Weeks",
    idealFor: "Startups & Local Businesses",
    supportLevel: "30-Day Post-Launch Support",
    revisions: "2 Full Revision Rounds",
    features: [
      "Up to 5 custom-designed pages",
      "Perfect responsiveness on mobile & tablet",
      "Higher search engine discoverability",
      "Loads under 2 seconds for high retention",
      "Easy content management system",
      "Built-in Google Analytics integration"
    ]
  },
  {
    name: "Growth Sprints",
    priceText: "Starting at $6,500",
    subPrice: "Flexible installment structures",
    description: "Our premium custom-engineered solution focused heavily on conversion strategy, engagement, and scale.",
    note: "Standard benchmark. Delivered in 6 weeks.",
    badge: "Most Popular",
    badgeType: "popular",
    isFeatured: true,
    buttonText: "Get My Custom Proposal",
    deliveryTime: "6 Weeks",
    idealFor: "SMEs, Brands, E-commerce, SaaS",
    supportLevel: "90-Day Priority Support SLA",
    revisions: "Unlimited Collaborative Revisions",
    features: [
      "Up to 15 responsive bespoke page views",
      "Interactive, smooth micro-interactions",
      "Full search keyword & content strategy",
      "Integrated secure payment rails",
      "Instant speed optimization (95+ Score)",
      "Comprehensive target audience strategy"
    ]
  },
  {
    name: "Scale System",
    priceText: "Custom Quote",
    subPrice: "Agile, transparent milestone scope",
    description: "Fully bespoke enterprise-level application systems, secure portals, and advanced data architectures.",
    note: "Bespoke quote. Continuous agile delivery.",
    badge: "Enterprise Solution",
    badgeType: "enterprise",
    isFeatured: false,
    buttonText: "Talk to a Software Expert",
    deliveryTime: "8-12 Weeks",
    idealFor: "Enterprises, Secure SaaS, Portals",
    supportLevel: "Lifetime Priority SLA Support",
    revisions: "Continuous Agile Sprint Curation",
    features: [
      "Bespoke custom application platform",
      "Highly secure, encrypted database structure",
      "Custom administration dashboard portal",
      "Smooth third-party tool integrations",
      "Full source code & legal IP transfer",
      "Complete interactive video & docs training"
    ]
  }
];

const RETAINER_PLANS: ExtendedPricingPlan[] = [
  {
    name: "Iterate Partner",
    priceText: "Starting at $1,999",
    subPrice: "Per month. Pause or cancel anytime.",
    description: "Keep your application secure, up-to-date, and growing with continuous monthly design and dev support.",
    note: "SLA-backed priority updates.",
    badge: "Support Retainer",
    badgeType: "standard",
    isFeatured: false,
    buttonText: "Initiate Iterate Retainer",
    deliveryTime: "Continuous Updates",
    idealFor: "Ongoing active website maintenance",
    supportLevel: "24-Hour Max Response Time",
    revisions: "Continuous Task Backlog",
    features: [
      "Dedicated senior developer attention",
      "Regular site performance audits",
      "Real-time server security upgrades",
      "SEO health & content maintenance",
      "Daily automated offsite backup loops",
      "Direct communication channel access"
    ]
  },
  {
    name: "Sprint Retainer",
    priceText: "Starting at $4,999",
    subPrice: "Per month. Flexible agile cycles.",
    description: "A high-velocity design & engineering sprint cycle for rapid product updates and ongoing feature scale.",
    note: "Agile sprints. Consistent velocity.",
    badge: "Recommended Retainer",
    badgeType: "popular",
    isFeatured: true,
    buttonText: "Initiate Sprint Retainer",
    deliveryTime: "2-Week Delivery Cycles",
    idealFor: "SaaS products & fast-growing apps",
    supportLevel: "12-Hour Priority SLA Response",
    revisions: "Sprint Priority Curation",
    features: [
      "40 dedicated engineering hours/mo",
      "Concurrent senior UI/UX designer access",
      "Automated CI/CD deployment pipelines",
      "Landing page scaling & conversion testing",
      "Weekly agile roadmap planning",
      "Direct shared teams messaging loop"
    ]
  },
  {
    name: "Dedicated Pod",
    priceText: "Bespoke Retainer",
    subPrice: "Quarterly contract. Full focus.",
    description: "Your own dedicated cross-functional agile team of product managers, UI designers, and engineers.",
    note: "Absolute team priority and bandwidth.",
    badge: "Dedicated Team",
    badgeType: "enterprise",
    isFeatured: false,
    buttonText: "Reserve Dedicated Pod",
    deliveryTime: "Full-Time Focus",
    idealFor: "Funded scale-ups & active products",
    supportLevel: "Instant Response Hotlines",
    revisions: "Continuous Backlog Curation",
    features: [
      "Full-time dedicated senior developer",
      "Dedicated senior UI/UX visual architect",
      "Continuous agile roadmap curation",
      "Unlimited feature requests & queue",
      "Weekly live staging reviews & demos",
      "Quarterly operational retrospectives"
    ]
  }
];

const COMPARISON_ROWS = [
  { feature: 'Custom Design', starter: 'Bespoke layout', professional: 'Bespoke layout + Figma files', enterprise: 'Full design system' },
  { feature: 'Responsive Design', starter: true, professional: true, enterprise: true },
  { feature: 'CMS', starter: 'Standard CMS', professional: 'Advanced CMS dashboard', enterprise: 'Custom secure DB & CMS' },
  { feature: 'SEO', starter: 'Standard On-Page', professional: 'Keyword strategy & schema', enterprise: 'Advanced Content Strategy' },
  { feature: 'Support', starter: '30 Days support', professional: '90 Days Support SLA', enterprise: 'Lifetime Priority SLA' },
  { feature: 'Integrations', starter: 'Up to 2 standard APIs', professional: 'Full secure custom integrations', enterprise: 'Custom enterprise APIs' }
];

export default function Pricing() {
  const { theme } = useTheme();
  const [billingType, setBillingType] = useState<'project' | 'retainer'>('project');
  const [mobileFaqIndex, setMobileFaqIndex] = useState<number | null>(null);

  const currentPlans = useMemo(() => {
    return billingType === 'project' ? PROJECT_PLANS : RETAINER_PLANS;
  }, [billingType]);

  const toggleMobileFaq = (index: number) => {
    setMobileFaqIndex(mobileFaqIndex === index ? null : index);
  };

  return (
    <section 
      className={`py-20 sm:py-28 border-y transition-all duration-[400ms] ease-in-out ${
        theme === 'light' ? 'bg-[#FFFFFF] border-slate-200' : 'bg-[#0B0F19] border-white/5'
      }`} 
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 transition-colors duration-[400ms] ${
              theme === 'light'
                ? 'text-blue-600 bg-blue-500/5 border border-blue-500/15'
                : 'text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20'
            }`}
          >
            <Sparkles size={14} className="animate-pulse text-blue-500 dark:text-purple-400" /> Transparent Pricing Models
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="pricing-title"
            className={`font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.15] mb-6 tracking-tight transition-colors duration-[400ms] ${
              theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}
          >
            Flexible Pricing Built{' '}
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              theme === 'light' ? 'from-blue-600 to-indigo-500' : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
            }`}>
              Around Your Goals
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-[400ms] ${
              theme === 'light' ? 'text-[#64748B]' : 'text-[#A09BB8]'
            }`}
          >
            Every business has different requirements. Our pricing packages provide a transparent starting point, and every solution can be customized to match your goals and budget.
          </motion.p>
        </div>

        {/* Beautiful Interactive Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex p-1 rounded-2xl border ${
            theme === 'light' ? 'bg-slate-100/80 border-slate-200' : 'bg-[#111128]/40 border-white/5'
          }`}>
            <button
              onClick={() => setBillingType('project')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                billingType === 'project'
                  ? theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-[#7C3AED] text-white shadow-lg'
                  : theme === 'light'
                    ? 'text-slate-500 hover:text-slate-800'
                    : 'text-[#A09BB8] hover:text-white'
              }`}
            >
              Project Based
            </button>
            <button
              onClick={() => setBillingType('retainer')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                billingType === 'retainer'
                  ? theme === 'light'
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'bg-[#7C3AED] text-white shadow-lg'
                  : theme === 'light'
                    ? 'text-slate-500 hover:text-slate-800'
                    : 'text-[#A09BB8] hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>
 
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-md mx-auto lg:max-w-none mb-16">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => {
              const isFeatured = plan.isFeatured;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300 border ${
                    isFeatured
                      ? theme === 'light'
                        ? 'border-blue-500 bg-white scale-100 lg:scale-[1.03] shadow-2xl shadow-blue-500/10'
                        : 'border-[#7C3AED]/40 bg-gradient-to-b from-[#7C3AED]/10 via-[#111128]/80 to-[#0B0F19] scale-100 lg:scale-[1.03] shadow-2xl shadow-purple-500/15'
                      : theme === 'light'
                        ? 'border-slate-200 bg-[#F8FAFC] hover:border-slate-350 hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100'
                        : 'border-white/5 bg-[#111128]/20 hover:border-white/10 hover:bg-[#111128]/40 hover:-translate-y-1.5 hover:shadow-xl'
                  }`}
                >
                  {/* Glowing top line for featured card */}
                  {isFeatured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-purple-400 pointer-events-none" />
                  )}

                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Badge Indicator Header */}
                      <div className="flex justify-between items-center mb-6">
                        <span
                          className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-extrabold leading-none ${
                            plan.badgeType === 'popular'
                              ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-sm'
                              : plan.badgeType === 'enterprise'
                              ? theme === 'light' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : 'bg-[#7C3AED]/15 text-[#C084FC] border border-[#7C3AED]/30'
                              : theme === 'light'
                              ? 'bg-slate-200/65 text-slate-700'
                              : 'bg-white/5 text-[#A09BB8]'
                          }`}
                        >
                          {plan.badge}
                        </span>
                        {isFeatured && (
                          <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${
                            theme === 'light' ? 'text-blue-600' : 'text-[#C084FC]'
                          }`}>
                            <Sparkles size={11} className="animate-spin" /> RECOMMENDED
                          </span>
                        )}
                      </div>

                      {/* Pricing plan title & value proposition */}
                      <h3 className={`font-display text-2xl sm:text-3xl font-bold mb-3 leading-none transition-colors duration-[400ms] ${
                        theme === 'light' ? 'text-slate-900' : 'text-white'
                      }`}>
                        {plan.name}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 min-h-[40px] transition-colors duration-[400ms] ${
                        theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
                      }`}>
                        {plan.description}
                      </p>

                      {/* Strategic pricing display */}
                      <div className="mb-2">
                        <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors duration-[400ms] ${
                          theme === 'light' ? 'text-[#0F172A]' : 'text-white'
                        }`}>
                          {plan.priceText}
                        </span>
                      </div>

                      <div className={`text-[11px] mb-8 font-semibold tracking-wide transition-colors duration-[400ms] ${
                        theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'
                      }`}>
                        {plan.subPrice}
                      </div>

                      {/* Clean, Minimal Plan specs (Delivery, Support, Best For) without a large background container */}
                      <div className="space-y-3 text-xs mb-8">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-blue-500 shrink-0" />
                          <span className={theme === 'light' ? 'text-slate-500 font-medium' : 'text-[#A09BB8] font-medium'}>Delivery Time:</span>
                          <span className={`font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-200'}`}>{plan.deliveryTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-blue-500 shrink-0" />
                          <span className={theme === 'light' ? 'text-slate-500 font-medium' : 'text-[#A09BB8] font-medium'}>Support Period:</span>
                          <span className={`font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-200'}`}>{plan.supportLevel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles size={14} className="text-blue-500 shrink-0" />
                          <span className={theme === 'light' ? 'text-slate-500 font-medium' : 'text-[#A09BB8] font-medium'}>Best For:</span>
                          <span className={`font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-200'}`}>{plan.idealFor}</span>
                        </div>
                      </div>

                      <hr className={`mb-8 ${theme === 'light' ? 'border-slate-200' : 'border-white/5'}`} />

                      {/* Features checklist (translated to human/business outcomes) */}
                      <div className="flex flex-col gap-3.5 mb-10 text-left">
                        {plan.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className={`flex items-start gap-3 text-xs sm:text-sm group transition-all duration-250 ${
                              theme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
                            }`}
                          >
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                              theme === 'light'
                                ? 'bg-blue-50 border-blue-200'
                                : 'bg-[#7C3AED]/20 border-[#7C3AED]/40'
                            }`}>
                              <Check size={11} className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'} strokeWidth={3} />
                            </span>
                            <span className="leading-tight font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Submission CTA Button */}
                    <a
                      href="#contact"
                      className={`w-full py-4 rounded-xl text-center font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer block focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#2563EB] to-blue-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] focus:ring-blue-500'
                          : theme === 'light'
                          ? 'border border-slate-300 hover:border-slate-400 text-[#0F172A] hover:bg-slate-50 focus:ring-blue-500'
                          : 'border border-white/10 hover:border-[#2563EB] text-[#F8FAFC] hover:bg-[#2563EB]/8 focus:ring-[#2563EB]'
                      }`}
                    >
                      {plan.buttonText}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Feature Comparison Table - Hidden on smaller displays, rendered as a clean interactive FAQ cards checklist on Mobile */}
        <div className="mt-20 mb-16 hidden md:block">
          <div className="text-center mb-10">
            <h3 className={`font-display text-2xl font-bold mb-3 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              Compare Project Features
            </h3>
            <p className={`text-sm ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
              Detailed breakdown of how each package aligns with your technical and conversion requirements.
            </p>
          </div>

          <div className={`border rounded-3xl overflow-hidden shadow-sm ${
            theme === 'light' ? 'bg-white border-slate-200' : 'bg-[#111128]/20 border-white/5'
          }`}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={theme === 'light' ? 'bg-slate-50/75 border-b border-slate-200' : 'bg-[#111128]/40 border-b border-white/5'}>
                  <th className={`p-5 text-xs font-bold uppercase tracking-wider w-[34%] ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>Core Feature</th>
                  <th className={`p-5 text-xs font-bold uppercase tracking-wider text-center w-[22%] ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>Launch</th>
                  <th className={`p-5 text-xs font-bold uppercase tracking-wider text-center w-[22%] ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>Growth</th>
                  <th className={`p-5 text-xs font-bold uppercase tracking-wider text-center w-[22%] ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                {COMPARISON_ROWS.map((row) => (
                  <tr 
                    key={row.feature}
                    className={`transition-colors duration-150 ${
                      theme === 'light' ? 'hover:bg-slate-50/40' : 'hover:bg-white/5'
                    }`}
                  >
                    <td className={`p-5 text-sm font-semibold ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                      {row.feature}
                    </td>
                    
                    {/* Launch Column */}
                    <td className="p-5 text-sm text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="mx-auto text-emerald-500" size={18} />
                        ) : (
                          <X className="mx-auto text-slate-300 dark:text-[#6B6590]" size={16} />
                        )
                      ) : (
                        <span className={`font-medium text-xs ${theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'}`}>{row.starter}</span>
                      )}
                    </td>

                    {/* Growth Sprints Column */}
                    <td className={`p-5 text-sm text-center ${theme === 'light' ? 'bg-blue-50/20' : 'bg-[#7C3AED]/5'}`}>
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="mx-auto text-emerald-500" size={18} strokeWidth={2.5} />
                        ) : (
                          <X className="mx-auto text-slate-300 dark:text-[#6B6590]" size={16} />
                        )
                      ) : (
                        <span className={`font-bold text-xs ${theme === 'light' ? 'text-blue-600' : 'text-purple-300'}`}>{row.professional}</span>
                      )}
                    </td>

                    {/* Scale Column */}
                    <td className="p-5 text-sm text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="mx-auto text-emerald-500" size={18} />
                        ) : (
                          <X className="mx-auto text-slate-300 dark:text-[#6B6590]" size={16} />
                        )
                      ) : (
                        <span className={`font-medium text-xs ${theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'}`}>{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsive Mobile Comparison Accordion Grid */}
        <div className="block md:hidden mb-12 max-w-md mx-auto">
          <h4 className={`text-base font-bold mb-4 text-center ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            Detailed Feature Comparison
          </h4>
          <div className="space-y-3">
            {COMPARISON_ROWS.map((row, index) => {
              const isFaqExpanded = mobileFaqIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-xl p-4 ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-[#111128]/40 border-white/5'
                  }`}
                >
                  <button 
                    onClick={() => toggleMobileFaq(index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className={`text-xs font-bold ${theme === 'light' ? 'text-slate-700' : 'text-slate-200'}`}>
                      {row.feature}
                    </span>
                    <ChevronDown size={14} className={`transform transition-transform ${isFaqExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {isFaqExpanded && (
                    <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/5 space-y-2 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-[#6B6590]">Launch:</span>
                        <span className="font-semibold">{typeof row.starter === 'boolean' ? (row.starter ? 'Included' : 'No') : row.starter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-blue-500 font-bold">Growth:</span>
                        <span className="font-bold text-blue-500">{typeof row.professional === 'boolean' ? (row.professional ? 'Included' : 'No') : row.professional}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-400 font-bold">Scale:</span>
                        <span className="font-semibold">{typeof row.enterprise === 'boolean' ? (row.enterprise ? 'Included' : 'No') : row.enterprise}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Note */}
        <div className={`max-w-[1000px] mx-auto p-5 rounded-2xl border text-center transition-all mb-12 ${
          theme === 'light' 
            ? 'bg-slate-50 border-slate-200 text-slate-600' 
            : 'bg-[#111128]/30 border-white/5 text-[#A09BB8]'
        }`}>
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className={theme === 'light' ? 'text-slate-800' : 'text-white'}>Please Note:</strong> Every project is unique, and final pricing depends entirely on your specific requirements. We will provide a complete, transparent custom proposal after our initial consultation with absolutely no hidden charges.
          </p>
        </div>

        {/* Premium Conversion CTA block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`max-w-[1000px] mx-auto p-8 sm:p-10 rounded-3xl border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-[400ms] ${
            theme === 'light'
              ? 'bg-gradient-to-tr from-blue-50/50 via-indigo-50/20 to-white border-blue-100 shadow-lg'
              : 'bg-gradient-to-tr from-[#111128]/80 via-[#181832]/40 to-[#0B0F19] border-[#7C3AED]/15 shadow-2xl'
          }`}
        >
          {/* Subtle ambient spotlight */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 dark:bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex gap-4 items-center text-left relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 hover:scale-105 ${
              theme === 'light'
                ? 'bg-white border-blue-200 text-blue-600 shadow-sm'
                : 'bg-[#7C3AED]/10 border-[#7C3AED]/20 text-[#A855F7] shadow-lg'
            }`}>
              <MessageSquare size={24} className="animate-pulse" />
            </div>
            <div>
              <h4 className={`font-sans font-extrabold text-lg sm:text-xl tracking-tight leading-snug ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                Not Sure Which Plan Fits Your Business?
              </h4>
              <p className={`text-sm mt-1 leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                Talk directly with our technical experts and receive a free operational consultation with a personalized project estimate.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10 shrink-0">
            <a
              href="#contact"
              className={`px-5 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 ${
                theme === 'light'
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/10 focus:ring-blue-500'
                  : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-95 text-white shadow-lg shadow-purple-500/20 focus:ring-[#7C3AED]'
              }`}
            >
              <span>Book Free Discovery Call</span>
              <Calendar size={13} />
            </a>

            <a
              href="#contact"
              className={`px-5 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 border focus:outline-none focus:ring-2 ${
                theme === 'light'
                  ? 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 focus:ring-blue-500'
                  : 'bg-transparent border-white/10 hover:bg-white/5 text-white focus:ring-white/20'
              }`}
            >
              <span>Request Custom Proposal</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
