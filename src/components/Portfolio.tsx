/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioItems } from '../data';
import { useTheme } from './ThemeContext';
import { 
  Check, 
  X, 
  Sparkles, 
  Server, 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  Shield, 
  Video, 
  Activity, 
  Award, 
  PlayCircle, 
  Sliders, 
  MessageSquare, 
  Flame, 
  Tv, 
  CreditCard, 
  ShoppingBag, 
  Compass, 
  Layout, 
  AlertTriangle, 
  Calendar, 
  TrendingUp, 
  Users, 
  Clock, 
  Grid, 
  Cpu, 
  Layers, 
  Scale, 
  Map, 
  Lock, 
  Plus, 
  CheckCircle, 
  Smile, 
  FileText, 
  Maximize2, 
  Send,
  Workflow,
  Sparkle
} from 'lucide-react';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const { theme } = useTheme();

  // For Lead Capture Form within Case Study
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadBudget, setLeadBudget] = useState('10k-25k');
  const [leadMessage, setLeadMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'corporate', label: 'Corporate Websites' },
    { value: 'software', label: 'Custom Software' },
    { value: 'wordpress', label: 'WordPress CMS' },
    { value: 'shopify', label: 'Shopify Stores' },
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
          ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Education':
        return theme === 'light'
          ? 'bg-indigo-50 text-indigo-700 border-indigo-100'
          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Restaurant':
        return theme === 'light'
          ? 'bg-amber-50 text-amber-700 border-amber-100'
          : 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Retail':
        return theme === 'light'
          ? 'bg-pink-50 text-pink-700 border-pink-100'
          : 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'Manufacturing':
        return theme === 'light'
          ? 'bg-orange-50 text-orange-700 border-orange-100'
          : 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'Corporate':
      default:
        return theme === 'light'
          ? 'bg-blue-50 text-blue-700 border-blue-100'
          : 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    }
  };

  // Helper to dynamically get icons
  const getIconComponent = (name: string | undefined, size = 16, className = "text-blue-500") => {
    switch (name) {
      case 'Zap': return <Zap size={size} className={className} />;
      case 'Shield': return <Shield size={size} className={className} />;
      case 'Video': return <Video size={size} className={className} />;
      case 'Activity': return <Activity size={size} className={className} />;
      case 'Award': return <Award size={size} className={className} />;
      case 'PlayCircle': return <PlayCircle size={size} className={className} />;
      case 'Sliders': return <Sliders size={size} className={className} />;
      case 'MessageSquare': return <MessageSquare size={size} className={className} />;
      case 'Flame': return <Flame size={size} className={className} />;
      case 'Tv': return <Tv size={size} className={className} />;
      case 'CreditCard': return <CreditCard size={size} className={className} />;
      case 'ShoppingBag': return <ShoppingBag size={size} className={className} />;
      case 'Compass': return <Compass size={size} className={className} />;
      case 'Layout': return <Layout size={size} className={className} />;
      case 'AlertTriangle': return <AlertTriangle size={size} className={className} />;
      case 'Scale': return <Scale size={size} className={className} />;
      case 'Map': return <Map size={size} className={className} />;
      case 'Lock': return <Lock size={size} className={className} />;
      case 'Plus': return <Plus size={size} className={className} />;
      case 'CheckCircle': return <CheckCircle size={size} className={className} />;
      case 'Smile': return <Smile size={size} className={className} />;
      case 'Cpu': return <Cpu size={size} className={className} />;
      case 'Timer': return <Clock size={size} className={className} />;
      case 'TrendingUp': return <TrendingUp size={size} className={className} />;
      case 'DollarSign': return <CreditCard size={size} className={className} />;
      default: return <Sparkles size={size} className={className} />;
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real high-end processing
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const openLightbox = (imgUrl: string, idx: number) => {
    setLightboxImage(imgUrl);
    setLightboxIndex(idx);
  };

  const handleLightboxNext = (gallery: string[]) => {
    const nextIdx = (lightboxIndex + 1) % gallery.length;
    setLightboxIndex(nextIdx);
    setLightboxImage(gallery[nextIdx]);
  };

  const handleLightboxPrev = (gallery: string[]) => {
    const prevIdx = (lightboxIndex - 1 + gallery.length) % gallery.length;
    setLightboxIndex(prevIdx);
    setLightboxImage(gallery[prevIdx]);
  };

  return (
    <section 
      className={`py-24 sm:py-32 transition-colors duration-[400ms] ease-in-out relative ${
        theme === 'light' ? 'bg-[#FCFCFD] border-y border-slate-150' : 'bg-[#090910] border-y border-white/5'
      }`} 
      id="work"
    >
      {/* Absolute Ambient Background Lights */}
      {theme === 'dark' ? (
        <>
          <div className="absolute top-12 left-1/4 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-24 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[140px] rounded-full pointer-events-none" />
        </>
      ) : (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-50/40 blur-[130px] rounded-full pointer-events-none" />
      )}

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Heading & Headline block */}
        <div className="text-left max-w-[850px] mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/15 mb-6">
            Our Portfolio
          </div>
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.08] mb-6 tracking-tight transition-colors ${
            theme === 'light' ? 'text-slate-900' : 'text-white'
          }`}>
            Projects That Help <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'light' ? 'from-blue-600 to-indigo-600' : 'from-[#8B5CF6] via-[#3B82F6] to-[#06B6D4]'
            }`}>Businesses Grow</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal transition-colors max-w-[760px] ${
            theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
          }`}>
            From corporate websites and Shopify stores to enterprise software, mobile applications, and custom business solutions, we build digital products that solve real business problems.
          </p>
        </div>

        {/* Categories filters - Glass Pill styles */}
        <div className="flex gap-2.5 mb-16 overflow-x-auto pb-4 scrollbar-none flex-nowrap md:flex-wrap items-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border shrink-0 ${
                filter === cat.value
                  ? theme === 'light'
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/15'
                    : 'bg-white border-white text-slate-950 shadow-md shadow-white/5'
                  : theme === 'light'
                    ? 'border-slate-200 text-slate-500 bg-white hover:border-slate-350 hover:text-slate-800'
                    : 'border-white/5 text-[#A09BB8] bg-white/3 hover:border-white/15 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 border h-full relative ${
                theme === 'light'
                  ? 'bg-white border-slate-200/60 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.1)] hover:border-blue-400/40'
                  : 'bg-[#11111E]/40 border-white/5 hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.15)] hover:border-purple-500/30'
              }`}
            >
              {/* Image Container with Custom Zoom & Gradient Overlay on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden select-none bg-slate-950/20">
                <img
                  src={item.image}
                  alt={`${item.title} Capture`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090910] via-[#090910]/30 to-[#090910]/5 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <button
                    onClick={() => {
                      setSelectedProject(item);
                      setFormSubmitted(false);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-white text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
                  >
                    View Case Study
                    <ChevronRight size={13} className="text-blue-600" />
                  </button>
                </div>

                {/* Left Top Industry Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-extrabold border backdrop-blur-md shadow-sm ${getIndustryStyle(item.industry)}`}>
                    {item.industry}
                  </span>
                </div>

                {/* Right Top Business Result Badge */}
                {item.result && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wide text-white bg-blue-600/95 shadow-sm border border-blue-400/20">
                      {item.result}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Metadata & Summary */}
              <div className="p-6 sm:p-7 flex flex-col justify-between grow">
                <div className="space-y-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    theme === 'light' ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {item.categoryLabel}
                  </span>

                  <h3 className={`font-display text-xl font-bold leading-tight transition-colors ${
                    theme === 'light' ? 'text-slate-900' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed line-clamp-3 transition-colors ${
                    theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
                  }`}>
                    {item.description}
                  </p>

                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className={`text-[10px] px-2 py-0.5 font-semibold rounded-md ${
                          theme === 'light' 
                            ? 'bg-slate-100 text-slate-600 border border-slate-200/40' 
                            : 'bg-white/5 text-slate-300 border border-white/5'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 4 && (
                      <span className="text-[9px] px-1.5 py-0.5 font-bold text-slate-400 dark:text-slate-500 self-center">
                        +{item.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Services Checklist */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                    <div className={`text-[10px] uppercase tracking-widest font-extrabold mb-1.5 ${
                      theme === 'light' ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Services Deployed
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {allAvailableServices.map((service) => {
                        const active = hasService(item.services, service);
                        return (
                          <div 
                            key={service} 
                            className={`flex items-center gap-1.5 ${
                              active 
                                ? theme === 'light' ? 'text-slate-800' : 'text-slate-200' 
                                : 'text-slate-400/40 dark:text-white/20'
                            }`}
                          >
                            <Check 
                              size={12} 
                              className={`shrink-0 ${
                                active 
                                  ? theme === 'light' ? 'text-blue-600' : 'text-purple-400' 
                                  : 'opacity-10'
                              }`} 
                            />
                            <span className="text-[11px] font-medium truncate">{service}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Primary CTA (No external direct redirect buttons!) */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={() => {
                      setSelectedProject(item);
                      setFormSubmitted(false);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      theme === 'light'
                        ? 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200/50'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    View Case Study
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* IMMERSIVE MODAL FULLSCREEN CASE STUDY */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-0 overflow-hidden bg-slate-950/80 backdrop-blur-md"
            >
              {/* Backdrop closer */}
              <div 
                className="absolute inset-0 cursor-crosshair" 
                onClick={() => setSelectedProject(null)} 
              />

              {/* Case Study Content Window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 30 }}
                transition={{ type: "spring", damping: 30, stiffness: 220 }}
                className={`relative w-full h-full md:h-[94vh] md:max-w-[1080px] md:rounded-3xl overflow-hidden shadow-2xl border flex flex-col ${
                  theme === 'light' ? 'bg-[#FCFCFD] border-slate-200 text-slate-800' : 'bg-[#0B0B13] border-white/10 text-white'
                }`}
              >
                
                {/* 1. TOP FLOATING STICKY HEADER WITH CLOSE BUTTON */}
                <div className={`sticky top-0 z-40 px-6 py-4 flex items-center justify-between border-b backdrop-blur-lg ${
                  theme === 'light' ? 'bg-white/90 border-slate-200' : 'bg-[#0B0B13]/90 border-white/5'
                }`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-extrabold ${getIndustryStyle(selectedProject.industry)}`}>
                      {selectedProject.industry}
                    </span>
                    <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
                    <span className="text-xs font-bold text-slate-500 max-w-[200px] truncate">{selectedProject.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        setSelectedProject(null);
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="hidden sm:inline-flex px-4 py-2 rounded-full bg-blue-600 text-white font-extrabold text-xs items-center gap-1.5 shadow-sm hover:bg-blue-700 transition cursor-pointer"
                    >
                      Book Free consultation
                    </button>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                        theme === 'light' 
                          ? 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200' 
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                      aria-label="Close Case Study"
                    >
                      <X size={15} />
                    </button>
                  </div>
                </div>

                {/* 2. SCROLLABLE CONTAINER */}
                <div className="overflow-y-auto overflow-x-hidden flex-1 scrollbar-thin">
                  
                  {/* HERO BANNER SECTION */}
                  <div className="relative aspect-[16/7] w-full bg-slate-950 select-none">
                    <img
                      src={selectedProject.heroImage}
                      alt={selectedProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B13] via-[#0B0B13]/55 to-black/10" />
                    
                    <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                      <div className="space-y-2 max-w-[650px]">
                        <span className="text-xs tracking-widest font-extrabold uppercase text-blue-400">
                          {selectedProject.industry} Solutions
                        </span>
                        <h3 className="text-2xl sm:text-4xl lg:text-[42px] font-black leading-tight text-white tracking-tight">
                          {selectedProject.title}
                        </h3>
                      </div>

                      {/* Giant verified metric banner inside hero */}
                      {selectedProject.result && (
                        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col items-center justify-center text-center shrink-0 min-w-[170px]">
                          <Sparkles className="text-blue-400 mb-1" size={16} />
                          <span className="text-2xl font-black text-white">{selectedProject.result}</span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-300 font-bold mt-0.5">Verified Outcome</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PROJECT META METADATA STRIP */}
                  <div className={`px-6 sm:px-10 py-5 border-b grid grid-cols-2 md:grid-cols-4 gap-4 transition-colors ${
                    theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-white/2 border-white/5'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <Users size={16} className="text-blue-500" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Client</div>
                        <div className="text-xs font-bold">{selectedProject.client}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Calendar size={16} className="text-blue-500" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Year</div>
                        <div className="text-xs font-bold">{selectedProject.year}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className="text-blue-500" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                        <div className="text-xs font-bold">{selectedProject.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Workflow size={16} className="text-blue-500" />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Team Size</div>
                        <div className="text-xs font-bold">{selectedProject.teamSize}</div>
                      </div>
                    </div>
                  </div>

                  {/* CORE DETAILS GRID LAYOUT */}
                  <div className="p-6 sm:p-10 space-y-12">
                    
                    {/* SECTION 1: PROBLEM VS SOLUTION */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      
                      {/* Left: Problem Statement & Objectives */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="text-amber-500" size={18} />
                          <h4 className="text-sm uppercase tracking-wider font-extrabold text-amber-500">
                            The Challenge / Obstacles
                          </h4>
                        </div>
                        
                        <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'}`}>
                          {selectedProject.problem.clientIntro}
                        </p>

                        <div className={`p-5 rounded-2xl border ${
                          theme === 'light' ? 'bg-amber-50/45 border-amber-200/50' : 'bg-amber-500/5 border-amber-500/10'
                        }`}>
                          <div className="text-xs uppercase font-extrabold text-amber-500 mb-3 tracking-widest">
                            Primary Bottlenecks Detected
                          </div>
                          <ul className="space-y-2.5">
                            {selectedProject.problem.challenges.map((challenge, index) => (
                              <li key={index} className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                                <span className="text-amber-500 font-extrabold">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                            Strategic Project Benchmarks
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedProject.problem.goals.map((goal, index) => (
                              <div 
                                key={index} 
                                className={`p-3 rounded-xl flex items-center gap-2 border text-xs font-semibold ${
                                  theme === 'light' ? 'bg-white border-slate-200' : 'bg-white/3 border-white/5'
                                }`}
                              >
                                <CheckCircle size={13} className="text-blue-500" />
                                <span>{goal}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Bespoke Engineering Solution */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Sparkle className="text-blue-500" size={18} />
                          <h4 className="text-sm uppercase tracking-wider font-extrabold text-blue-500">
                            Bespoke Solution & Innovation
                          </h4>
                        </div>

                        <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'}`}>
                          {selectedProject.solution.overview}
                        </p>

                        <div className="space-y-4">
                          {selectedProject.solution.keyImplementations.map((impl, index) => (
                            <div 
                              key={index} 
                              className={`p-4 rounded-2xl border flex gap-4 transition-all ${
                                theme === 'light' 
                                  ? 'bg-blue-50/15 border-blue-100 hover:border-blue-200' 
                                  : 'bg-blue-500/5 border-blue-500/10 hover:border-blue-500/20'
                              }`}
                            >
                              <div className="shrink-0 p-2.5 h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                {getIconComponent(impl.iconName, 18, "text-blue-500")}
                              </div>
                              <div className="space-y-1">
                                <h5 className="text-xs font-bold">{impl.title}</h5>
                                <p className={`text-[11px] leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                                  {impl.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* SECTION 2: BENTO STATS DASHBOARD & METRICS */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Activity className="text-blue-500" size={18} />
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-blue-500">
                          Verified Performance & Business Analytics
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedProject.statistics.map((stat, idx) => (
                          <div 
                            key={idx} 
                            className={`p-6 rounded-2xl border text-center relative overflow-hidden flex flex-col justify-center items-center ${
                              theme === 'light' 
                                ? 'bg-white border-slate-200 shadow-sm' 
                                : 'bg-[#121222] border-white/5'
                            }`}
                          >
                            <div className="absolute top-2.5 right-2.5 opacity-10">
                              {getIconComponent(stat.iconName, 45, "text-blue-500")}
                            </div>
                            <div className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-xs font-bold">{stat.label}</div>
                            <div className="text-[10px] font-semibold text-emerald-500 mt-1 uppercase tracking-wider">
                              {stat.change}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 3: INTERACTIVE SCREENSHOT GALLERY */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tv className="text-blue-500" size={18} />
                          <h4 className="text-xs uppercase tracking-wider font-extrabold text-blue-500">
                            Custom Interfaces & Deliverables (Lightbox View)
                          </h4>
                        </div>
                        <span className="text-[10px] text-slate-400">Click to expand</span>
                      </div>

                      {/* Grid layout with variations */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedProject.galleryImages.map((img, idx) => {
                          let label = "Web Console View";
                          if (idx === 0) label = "Primary Dashboard UI";
                          if (idx === 1) label = "Operations Matrix";
                          if (idx === 2) label = "Outpatient Portal";
                          if (idx === 3) label = "Headless Storefront";
                          if (idx === 4) label = "Mobile Interface";
                          if (idx === 5) label = "ERP Supply Chain";

                          return (
                            <div 
                              key={idx}
                              onClick={() => openLightbox(img, idx)}
                              className="group relative aspect-[16/10] rounded-xl overflow-hidden cursor-pointer border border-slate-150 dark:border-white/5 shadow-sm select-none"
                            >
                              <img
                                src={img}
                                alt={`Gallery interface ${idx}`}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 size={16} className="text-white" />
                              </div>
                              <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded bg-black/60 text-[8px] font-bold text-white tracking-wider uppercase">
                                {label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* SECTION 4: PRODUCT FEATURES GRID */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Grid className="text-blue-500" size={18} />
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-blue-500">
                          Core Feature Deployments
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedProject.features.map((feat, idx) => (
                          <div 
                            key={idx} 
                            className={`p-5 rounded-2xl border space-y-2 transition-all ${
                              theme === 'light' 
                                ? 'bg-slate-50 border-slate-200/80 hover:bg-white' 
                                : 'bg-white/2 border-white/5 hover:bg-white/4'
                            }`}
                          >
                            <div className="p-2 h-9 w-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                              {getIconComponent(feat.iconName, 16, "text-blue-500")}
                            </div>
                            <h5 className="text-xs font-bold leading-tight">{feat.title}</h5>
                            <p className={`text-[11px] leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                              {feat.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 5: DEVELOPMENT MILESTONES ROADMAP */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="text-blue-500" size={18} />
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-blue-500">
                          The Delivery Lifecycle & Sprints
                        </h4>
                      </div>

                      <div className="relative pl-6 sm:pl-8 border-l border-blue-500/20 space-y-6 py-2">
                        {selectedProject.timeline.map((stage, idx) => (
                          <div key={idx} className="relative space-y-1">
                            {/* Blue floating dot anchor */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-1 h-4 w-4 rounded-full bg-[#0B0B13] border-2 border-blue-500 flex items-center justify-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                                {stage.phase}
                                <span className="px-1.5 py-0.5 rounded bg-blue-500/5 text-[9px] text-blue-500 font-extrabold">{stage.duration}</span>
                              </span>
                            </div>
                            <p className={`text-[11px] leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                              {stage.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SECTION 6: CLIENT TESTIMONIAL BLOCK */}
                    <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row gap-6 relative overflow-hidden ${
                      theme === 'light' ? 'bg-white border-slate-200' : 'bg-[#121222] border-white/5'
                    }`}>
                      {/* Big graphic quotes */}
                      <span className="absolute -top-6 -right-2 text-[140px] font-black font-display text-slate-200/20 select-none pointer-events-none leading-none">“</span>
                      
                      <div className="shrink-0 flex flex-col items-center justify-center text-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                          {selectedProject.testimonial.author.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div className="flex items-center gap-0.5 text-amber-500 mt-2.5">
                          {Array.from({ length: selectedProject.testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-xs">★</span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 relative z-10">
                        <p className={`text-xs sm:text-sm leading-relaxed italic ${theme === 'light' ? 'text-slate-600' : 'text-slate-200'}`}>
                          "{selectedProject.testimonial.quote}"
                        </p>
                        <div>
                          <div className="text-xs font-bold">{selectedProject.testimonial.author}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                            {selectedProject.testimonial.role} — {selectedProject.testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 7: RELATED PROJECTS CAROUSEL */}
                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <Award className="text-blue-500" size={18} />
                        <h4 className="text-xs uppercase tracking-wider font-extrabold text-blue-500">
                          Other Success Stories
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {portfolioItems
                          .filter((p) => p.id !== selectedProject.id)
                          .slice(0, 2)
                          .map((p) => (
                            <div 
                              key={p.id}
                              onClick={() => {
                                setSelectedProject(p);
                                setFormSubmitted(false);
                                document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`p-4 rounded-2xl border flex gap-4 cursor-pointer hover:scale-[1.01] transition-all select-none ${
                                theme === 'light' 
                                  ? 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-sm' 
                                  : 'bg-[#11111E] border-white/5 hover:border-purple-500/30 hover:bg-white/3'
                              }`}
                            >
                              <div className="aspect-[16/10] w-20 shrink-0 rounded-lg overflow-hidden bg-slate-900">
                                <img src={p.image} className="w-full h-full object-cover" alt={p.title} referrerPolicy="no-referrer" />
                              </div>
                              <div className="space-y-1">
                                <div className="text-[9px] uppercase tracking-wider font-extrabold text-blue-400">{p.industry}</div>
                                <h5 className="text-xs font-bold leading-snug line-clamp-1">{p.title}</h5>
                                <p className="text-[10px] text-slate-400 line-clamp-1">{p.result}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* SECTION 8: ULTRA CONVERTING CTA LEAD GENERATION FORM */}
                    <div className={`p-6 sm:p-10 rounded-3xl border relative overflow-hidden transition-all ${
                      theme === 'light' 
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-55 border-blue-200/50 shadow-md' 
                        : 'bg-gradient-to-br from-[#121226] via-[#0D0D19] to-[#16162E] border-white/5 shadow-2xl'
                    }`}>
                      {/* Background decor sparkles */}
                      <div className="absolute top-4 right-4 text-blue-500/20">
                        <Sparkles size={32} />
                      </div>

                      <AnimatePresence mode="wait">
                        {!formSubmitted ? (
                          <motion.div 
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                          >
                            <div className="space-y-1.5 text-center sm:text-left">
                              <h4 className="text-xl sm:text-2xl font-black">
                                Request a Similar System Audit
                              </h4>
                              <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                                Get a complete custom timeframe execution plan, technology blueprint, and cost quote for your business growth.
                              </p>
                            </div>

                            <form onSubmit={handleLeadSubmit} className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Full Name</label>
                                  <input 
                                    type="text" 
                                    required 
                                    placeholder="Sarah Jenkins"
                                    value={leadName}
                                    onChange={e=>setLeadName(e.target.value)}
                                    className={`w-full text-xs font-semibold px-4 py-3 rounded-xl border outline-none transition-colors ${
                                      theme === 'light' 
                                        ? 'bg-white border-slate-200 focus:border-blue-500 text-slate-800' 
                                        : 'bg-white/4 border-white/5 focus:border-blue-500 text-white'
                                    }`}
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Work Email</label>
                                  <input 
                                    type="email" 
                                    required 
                                    placeholder="sarah@company.com"
                                    value={leadEmail}
                                    onChange={e=>setLeadEmail(e.target.value)}
                                    className={`w-full text-xs font-semibold px-4 py-3 rounded-xl border outline-none transition-colors ${
                                      theme === 'light' 
                                        ? 'bg-white border-slate-200 focus:border-blue-500 text-slate-800' 
                                        : 'bg-white/4 border-white/5 focus:border-blue-500 text-white'
                                    }`}
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 flex justify-between">
                                  <span>Estimated Project Budget Bracket</span>
                                  <span className="text-blue-500 text-xs font-black">${leadBudget === '10k-25k' ? '10,000 - $25,000' : leadBudget === '25k-50k' ? '25,000 - $50,000' : '50,000+'}</span>
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                  {['10k-25k', '25k-50k', '50k+'].map(val=>(
                                    <button 
                                      key={val}
                                      type="button"
                                      onClick={()=>setLeadBudget(val)}
                                      className={`py-2.5 rounded-lg text-xs font-extrabold border transition-all ${
                                        leadBudget === val 
                                          ? 'bg-blue-600 border-blue-600 text-white' 
                                          : theme === 'light'
                                            ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                            : 'bg-white/4 border-white/5 text-slate-300 hover:bg-white/6'
                                      }`}
                                    >
                                      {val === '10k-25k' ? '$10K - $25K' : val === '25k-50k' ? '$25K - $50K' : '$50K+'}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-1">
                                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Briefly explain your growth targets</label>
                                <textarea 
                                  rows={3} 
                                  placeholder="I would like to scale outpatient bookings by introducing high-speed self-service tools..."
                                  value={leadMessage}
                                  onChange={e=>setLeadMessage(e.target.value)}
                                  className={`w-full text-xs font-semibold px-4 py-3 rounded-xl border outline-none transition-colors ${
                                    theme === 'light' 
                                      ? 'bg-white border-slate-200 focus:border-blue-500 text-slate-800' 
                                      : 'bg-white/4 border-white/5 focus:border-blue-500 text-white'
                                  }`}
                                />
                              </div>

                              <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-blue-600 text-white font-extrabold text-sm hover:bg-blue-700 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-55"
                              >
                                {isSubmitting ? 'Securing consultation window...' : 'Submit Request & Download PDF Brief'}
                                <Send size={14} />
                              </button>
                            </form>
                          </motion.div>
                        ) : (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-6 space-y-4"
                          >
                            <div className="mx-auto w-14 h-14 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shadow-md">
                              <CheckCircle size={30} />
                            </div>
                            <div className="space-y-1.5">
                              <h4 className="text-xl font-black">Awesome, {leadName}!</h4>
                              <p className={`text-xs max-w-md mx-auto leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-350'}`}>
                                Your case study audit request has been registered. Our lead engineer will compile a technical roadmap blueprint for you in 24 hours. Check your inbox: <strong className="text-blue-500">{leadEmail}</strong>.
                              </p>
                            </div>
                            <button
                              onClick={()=>setFormSubmitted(false)}
                              className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-bold hover:bg-white/15 transition cursor-pointer"
                            >
                              Edit details
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIGHTBOX POPUP SYSTEM */}
        <AnimatePresence>
          {lightboxImage && selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-55 bg-black/95 flex items-center justify-center p-4"
            >
              {/* Back close trigger */}
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxImage(null)} />
              
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              <button 
                onClick={() => handleLightboxPrev(selectedProject.galleryImages)}
                className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer z-50"
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={() => handleLightboxNext(selectedProject.galleryImages)}
                className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer z-50"
              >
                <ChevronRight size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-full max-h-[85vh] select-none pointer-events-none"
              >
                <img
                  src={lightboxImage}
                  alt="Expanded Screen"
                  referrerPolicy="no-referrer"
                  className="rounded-lg max-w-full max-h-[85vh] object-contain shadow-2xl"
                />
              </motion.div>

              {/* Slider Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.galleryImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => {
                      setLightboxIndex(i);
                      setLightboxImage(selectedProject.galleryImages[i]);
                    }}
                    className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                      lightboxIndex === i ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
