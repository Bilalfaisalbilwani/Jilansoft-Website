/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { useTheme } from './ThemeContext';
import { Check, ExternalLink, ArrowUpRight, X, Sparkles, Server, Laptop, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import { cubicBezier } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const { theme } = useTheme();

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'corporate', label: 'Corporate Websites' },
    { value: 'software', label: 'Custom Software' },
    { value: 'wordpress', label: 'WordPress' },
    { value: 'shopify', label: 'Shopify' },
    { value: 'apps', label: 'Mobile Apps' },
    { value: 'design', label: 'UI/UX Design' },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  const allAvailableServices = [
    'UI/UX Design',
    'Web Development',
    'Mobile App',
    'SEO',
    'Project Management'
  ];

  const hasService = (itemServices: string[], service: string) => {
    return itemServices.some(
      (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '') === service.toLowerCase().replace(/[^a-z0-9]/g, '')
    );
  };

  const getIndustryStyle = (industry: string) => {
    switch (industry) {
      case 'Healthcare':
        return theme === 'light'
          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Education':
        return theme === 'light'
          ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Restaurant':
        return theme === 'light'
          ? 'bg-amber-50 text-amber-700 border-amber-200'
          : 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Retail':
        return theme === 'light'
          ? 'bg-pink-50 text-pink-700 border-pink-200'
          : 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'Manufacturing':
        return theme === 'light'
          ? 'bg-orange-50 text-orange-700 border-orange-200'
          : 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Corporate':
      default:
        return theme === 'light'
          ? 'bg-blue-50 text-blue-700 border-blue-200'
          : 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  // Stagger variants for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
       ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    }
  };

  return (
    <section 
      className={`py-24 sm:py-32 transition-colors duration-[400ms] ease-in-out relative ${
        theme === 'light' ? 'bg-[#FCFCFD] border-y border-slate-150' : 'bg-[#0B0B14] border-y border-white/5'
      }`} 
      id="work"
    >
      {/* Background soft ambient glows for Dark mode */}
      {theme === 'dark' && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />
      )}

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header with generous white space & elegant layout */}
        <div className="text-left max-w-[800px] mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/15 mb-6">
            Our Portfolio
          </div>
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] mb-6 tracking-tight transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#0F172A]' : 'text-white'
          }`}>
            Projects That Help <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'light' ? 'from-blue-600 to-indigo-600' : 'from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]'
            }`}>Businesses Grow</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal transition-colors duration-[400ms] max-w-[700px] ${
            theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
          }`}>
            From corporate websites and Shopify stores to enterprise software, mobile applications, and custom business solutions, we build digital products that solve real business problems.
          </p>
        </div>

        {/* Categories filters - Minimalist glass pill style */}
        <div className="flex gap-2 sm:gap-3 mb-16 overflow-x-auto pb-4 scrollbar-none flex-nowrap md:flex-wrap items-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border shrink-0 ${
                filter === cat.value
                  ? theme === 'light'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white border-white text-[#0B0B14] shadow-lg shadow-white/5'
                  : theme === 'light'
                    ? 'border-slate-200 text-slate-500 bg-white hover:border-slate-400 hover:text-slate-900 shadow-sm'
                    : 'border-white/5 text-[#A09BB8] bg-white/3 hover:border-white/15 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout="position"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 border bg-clip-border h-full ${
                  theme === 'light'
                    ? 'bg-white border-slate-200/70 hover:shadow-[0_24px_50px_-12px_rgba(59,130,246,0.12)] hover:border-blue-300/80'
                    : 'bg-[#111124]/40 border-white/5 hover:shadow-[0_24px_50px_-12px_rgba(139,92,246,0.18)] hover:border-purple-500/30'
                }`}
                style={{ contentVisibility: 'auto' }}
              >
                {/* 1. Large Website Screenshot Area with hover effects */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900/5 select-none border-b border-slate-100 dark:border-white/5">
                  <img
                    src={item.image}
                    alt={`${item.title} Screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[700ms] ease-out"
                  />
                  
                  {/* Hover interactive overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14]/90 via-[#0B0B14]/40 to-[#0B0B14]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="px-4.5 py-2.5 rounded-xl bg-white text-[#0B0B14] font-bold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition cursor-pointer"
                    >
                      View Details
                      <ChevronRight size={13} className="text-blue-600" />
                    </button>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 hover:bg-white/20 transition cursor-pointer"
                      >
                        Live Site
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>

                  {/* Absolute Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border backdrop-blur-md shadow-sm ${getIndustryStyle(item.industry)}`}>
                      {item.industry}
                    </span>
                  </div>

                  {/* Absolute Optional Result Overlay (Top-Right) */}
                  {item.result && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide text-white bg-blue-600/95 shadow-sm border border-blue-400/20">
                        {item.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Content & Metadata Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between grow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'
                      }`}>
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className={`font-display text-xl font-bold leading-tight transition-colors ${
                      theme === 'light' ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Short Description (2-3 lines constraint) */}
                    <p className={`text-sm leading-relaxed line-clamp-3 font-normal ${
                      theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
                    }`}>
                      {item.description}
                    </p>

                    {/* 3. Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className={`text-[10px] px-2 py-0.5 font-medium rounded-md ${
                            theme === 'light' 
                              ? 'bg-slate-100 text-slate-600 border border-slate-200/50' 
                              : 'bg-white/3 text-[#F0EDFF]/80 border border-white/5'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* 4. Services Checklist */}
                    <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                      <div className={`text-[10px] uppercase tracking-widest font-extrabold mb-2 ${
                        theme === 'light' ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Services Provided
                      </div>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                        {allAvailableServices.map((service) => {
                          const active = hasService(item.services, service);
                          return (
                            <div 
                              key={service} 
                              className={`flex items-center gap-1.5 transition-all ${
                                active 
                                  ? theme === 'light' ? 'text-slate-800' : 'text-[#F0EDFF]' 
                                  : 'text-slate-400/45 dark:text-white/20'
                              }`}
                            >
                              <Check 
                                size={12} 
                                className={`shrink-0 ${
                                  active 
                                    ? theme === 'light' ? 'text-blue-600' : 'text-purple-400' 
                                    : 'opacity-20'
                                }`} 
                              />
                              <span className="text-[11px] font-medium truncate">{service}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 5. Mobile / Accessible Action Buttons below card text */}
                  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                        theme === 'light'
                          ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200/50'
                          : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      View Project
                      <ChevronRight size={13} />
                    </button>
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border cursor-pointer ${
                          theme === 'light'
                            ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                            : 'border-white/5 text-[#A09BB8] hover:text-white hover:bg-white/5'
                        }`}
                      >
                        Live Website
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Premium Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#0B0B14]/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className={`relative w-full max-w-[800px] rounded-3xl overflow-hidden shadow-2xl border flex flex-col max-h-[85vh] ${
                  theme === 'light' ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#0F172A] border-white/5 text-white'
                }`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-4 right-4 z-30 p-2.5 rounded-full border shadow-sm backdrop-blur-md transition-all cursor-pointer ${
                    theme === 'light' 
                      ? 'bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100' 
                      : 'bg-slate-900/90 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  aria-label="Close Case Study"
                >
                  <X size={16} />
                </button>

                {/* Scrollable Content wrapper */}
                <div className="overflow-y-auto overflow-x-hidden">
                  
                  {/* Huge visual hero banner with the high-res screenshot */}
                  <div className="relative aspect-[16/9] w-full bg-slate-950 select-none">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-blue-600 text-white mb-3">
                        {selectedProject.industry} Case Study
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {selectedProject.title}
                      </h4>
                    </div>
                  </div>

                  {/* Core Content Grid */}
                  <div className="p-6 sm:p-10 space-y-8 font-sans">
                    
                    {/* Intro / Highlight Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-3">
                        <h5 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
                          Project Brief
                        </h5>
                        <p className={`text-base leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                          {selectedProject.description}
                        </p>
                      </div>

                      {selectedProject.result && (
                        <div className={`p-4 rounded-2xl border text-center flex flex-col justify-center items-center ${
                          theme === 'light' ? 'bg-blue-50/50 border-blue-100' : 'bg-blue-500/5 border-blue-500/10'
                        }`}>
                          <Sparkles className="text-blue-500 mb-1" size={20} />
                          <div className="text-2xl font-black text-blue-600 dark:text-blue-400">
                            {selectedProject.result}
                          </div>
                          <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">
                            Verified Growth Metric
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Breakdown & details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100 dark:border-white/5">
                      
                      {/* Services Block */}
                      <div className="space-y-4">
                        <h5 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
                          Services Deployed
                        </h5>
                        <div className="space-y-2">
                          {selectedProject.services.map((service) => (
                            <div key={service} className="flex items-center gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                <Check size={11} />
                              </div>
                              <span className="text-sm font-semibold">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stack details Block */}
                      <div className="space-y-4">
                        <h5 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-blue-400">
                          Technology Infrastructure
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className={`text-xs px-3.5 py-1.5 font-bold rounded-xl border ${
                                theme === 'light' 
                                  ? 'bg-slate-50 border-slate-200 text-slate-700' 
                                  : 'bg-white/4 border-white/5 text-slate-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Bottom CTA Block */}
                    <div className={`p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border ${
                      theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-white/3 border-white/5'
                    }`}>
                      <div>
                        <div className="text-sm font-bold">Interested in similar business growth?</div>
                        <div className={`text-xs ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>Let's discuss your custom roadmap today.</div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                        <button
                          onClick={() => {
                            setSelectedProject(null);
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="flex-1 sm:flex-none py-3 px-5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 hover:scale-105 transition shadow-md cursor-pointer"
                        >
                          Book Tech Session
                        </button>
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`py-3 px-5 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 cursor-pointer ${
                              theme === 'light'
                                ? 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                : 'border-white/10 text-white hover:bg-white/5'
                            }`}
                          >
                            Explore Site
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
