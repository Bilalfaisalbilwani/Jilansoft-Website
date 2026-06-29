/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.706 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Contact() {
  const { theme } = useTheme();
  const [yourName, setYourName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !yourName) return;

    setIsSubmitting(true);
    // Simulate API call with modern timing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section
      className={`py-24 sm:py-32 border-y transition-all duration-[400ms] ease-in-out ${
        theme === 'light'
          ? 'bg-[#FFFFFF] border-slate-150 text-slate-800'
          : 'bg-[#0A0A14] border-white/5 text-[#F0EDFF]'
      }`}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Side Content & Channels */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
              Get In Touch
            </div>

            <h2
              id="contact-heading"
              className={`font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] mb-5 tracking-tight transition-colors duration-[400ms] ${
                theme === 'light' ? 'text-[#0F172A]' : 'text-white'
              }`}
            >
              Let's Build Something{' '}
              <span
                className={`bg-gradient-to-r bg-clip-text text-transparent ${
                  theme === 'light'
                    ? 'from-blue-600 to-indigo-500'
                    : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
                }`}
              >
                Exceptional Together
              </span>
            </h2>

            <p
              className={`text-base leading-relaxed mb-8 max-w-md font-normal transition-colors duration-[400ms] ${
                theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
              }`}
            >
              Whether you're launching a startup, redesigning your website, or building custom software, we help you transform your ideas into digital solutions.
            </p>

            {/* Modern Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full font-sans">
              {[
                'Free Consultation',
                '24–48 Hour Response',
                'No Hidden Charges',
                'On-Time Delivery',
              ].map((badge) => (
                <div
                  key={badge}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-300'
                      : 'bg-[#111128]/30 border-white/5 text-[#A09BB8] hover:border-[#7C3AED]/20'
                  }`}
                >
                  <span className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'}>✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Channels Lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full font-sans">
              
              {/* Email */}
              <a
                href="mailto:jilansoft@gmail.com"
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  theme === 'light'
                    ? 'border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 focus:ring-blue-500 focus:ring-offset-white'
                    : 'border-white/5 bg-[#111128]/40 hover:border-[#7C3AED]/30 hover:bg-[#111128]/80 hover:shadow-lg hover:shadow-purple-950/20 focus:ring-[#7C3AED] focus:ring-offset-[#0A0A14]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110'
                      : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7] group-hover:bg-[#7C3AED]/25 group-hover:scale-110'
                  }`}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>
                    Email us
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    jilansoft@gmail.com
                  </div>
                </div>
              </a>

              {/* Whatsapp */}
              <a
                href="https://wa.me/923113292676?text=Hello%20Jilansoft,%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  theme === 'light'
                    ? 'border-slate-200 bg-slate-50 hover:border-[#25D366] hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 focus:ring-[#25D366] focus:ring-offset-white'
                    : 'border-white/5 bg-[#111128]/40 hover:border-[#25D366]/30 hover:bg-[#111128]/80 hover:shadow-lg hover:shadow-[#25D366]/5 focus:ring-[#25D366] focus:ring-offset-[#0A0A14]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    theme === 'light'
                      ? 'bg-green-50 border-green-200 text-[#25D366] group-hover:bg-green-100 group-hover:scale-110'
                      : 'bg-[#25D366]/15 border-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366]/25 group-hover:scale-110'
                  }`}
                >
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>
                    Chat on WhatsApp
                  </div>
                  <div className={`text-sm font-semibold transition-colors ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    +92 311 3292676
                  </div>
                </div>
              </a>

              {/* Clickable Office Location */}
              <a
                href="https://maps.google.com/?q=LandMark+Plaza+I+I+Chundrigar+Road+Karachi"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  theme === 'light'
                    ? 'border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-slate-100/50 focus:ring-blue-500 focus:ring-offset-white'
                    : 'border-white/5 bg-[#111128]/40 hover:border-[#7C3AED]/30 hover:bg-[#111128]/80 hover:shadow-lg hover:shadow-purple-950/20 focus:ring-[#7C3AED] focus:ring-offset-[#0A0A14]'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 mt-0.5 ${
                    theme === 'light'
                      ? 'bg-blue-50 border-blue-200 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110'
                      : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7] group-hover:bg-[#7C3AED]/25 group-hover:scale-110'
                  }`}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>
                    Office Location
                  </div>
                  <div className={`text-sm font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    Karachi, Pakistan
                  </div>
                  <div className={`text-xs mt-1 leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                    Office #604, 6th Floor, LandMark Plaza
                    <br />
                    I. I. Chundrigar Road
                  </div>
                </div>
              </a>

              {/* Business Hours */}
              <div
                className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  theme === 'light'
                    ? 'border-slate-200 bg-slate-50'
                    : 'border-white/5 bg-[#111128]/40'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${
                    theme === 'light'
                      ? 'bg-blue-50 border-blue-200 text-blue-600'
                      : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7]'
                  }`}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>
                    Business Hours
                  </div>
                  <div className={`text-sm font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    Monday – Saturday
                  </div>
                  <div className={`text-xs mt-1 leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                    12:30 PM – 7:30 PM
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Interactive Form Card */}
          <div
            className={`lg:col-span-7 w-full border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-[400ms] ${
              theme === 'light'
                ? 'bg-[#F8FAFC] border-slate-250 shadow-slate-100/80'
                : 'bg-[#111128]/50 border-white/5'
            }`}
          >

            {isSubmitted ? (
              /* Success screen state */
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5 animate-scale-in">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-2 relative ${
                    theme === 'light'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}
                >
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping" />
                  <CheckCircle2 size={44} className="relative z-10" />
                </div>
                <h3 className={`font-display text-3xl font-bold ${theme === 'light' ? 'text-[#0F172A]' : 'text-white'}`}>
                  Thank You!
                </h3>
                <p className={`text-sm max-w-sm leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                  We've received your inquiry. Our team will review your project and contact you within one business day.
                </p>
                <button
                  onClick={() => {
                    setYourName('');
                    setCompanyName('');
                    setEmail('');
                    setPhone('');
                    setService('');
                    setBudget('');
                    setProjectBrief('');
                    setIsSubmitted(false);
                  }}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 cursor-pointer ${
                    theme === 'light'
                      ? 'bg-slate-800 hover:bg-slate-900 shadow-slate-900/10'
                      : 'bg-[#7C3AED] hover:bg-[#6b31cb] shadow-purple-950/10'
                  }`}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Form input screens state */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Your Name */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="your-name" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      Your Name
                    </label>
                    <input
                      id="your-name"
                      required
                      type="text"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      placeholder="Bilal"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20'
                          : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5 focus:ring-2 focus:ring-[#7C3AED]/20'
                      }`}
                    />
                  </div>

                  {/* Company (Optional) */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="company-name" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      Company (Optional)
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="JilanSoft"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20'
                          : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5 focus:ring-2 focus:ring-[#7C3AED]/20'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="email-address" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      Email Address
                    </label>
                    <input
                      id="email-address"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jilansoft@gmail.com"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20'
                          : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5 focus:ring-2 focus:ring-[#7C3AED]/20'
                      }`}
                    />
                  </div>

                  {/* Phone Number (Optional) */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="phone-number" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+92 300 1234567"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20'
                          : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5 focus:ring-2 focus:ring-[#7C3AED]/20'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Dropdown */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="service-type" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      What do you need?
                    </label>
                    <div className="relative w-full">
                      <select
                        id="service-type"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={`w-full rounded-lg px-4 py-3 text-sm outline-none border cursor-pointer appearance-none transition-all duration-200 ${
                          theme === 'light'
                            ? 'bg-white border-slate-300 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                            : 'bg-[#111128] border-white/10 text-[#F0EDFF] focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20'
                        }`}
                        style={{
                          color: theme === 'light' ? '#1e293b' : '#ffffff',
                          backgroundColor: theme === 'light' ? '#ffffff' : '#111128',
                          colorScheme: theme === 'light' ? 'light' : 'dark',
                        }}
                      >
                        <option value="">Select a service...</option>
                        <option value="Website Development">Website Development</option>
                        <option value="E-commerce Development">E-commerce Development</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO">SEO</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Brand Identity">Brand Identity</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                        <option value="Other">Other</option>
                      </select>
                      {/* Decorative Chevron */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Budget Dropdown */}
                  <div className="flex flex-col items-start">
                    <label htmlFor="budget-range" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                      Project Budget
                    </label>
                    <div className="relative w-full">
                      <select
                        id="budget-range"
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className={`w-full rounded-lg px-4 py-3 text-sm outline-none border cursor-pointer appearance-none transition-all duration-200 ${
                          theme === 'light'
                            ? 'bg-white border-slate-300 text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                            : 'bg-[#111128] border-white/10 text-[#F0EDFF] focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20'
                        }`}
                        style={{
                          color: theme === 'light' ? '#1e293b' : '#ffffff',
                          backgroundColor: theme === 'light' ? '#ffffff' : '#111128',
                          colorScheme: theme === 'light' ? 'light' : 'dark',
                        }}
                      >
                        <option value="">Select Budget</option>
                        <option value="Under $500">Under $500</option>
                        <option value="$500 – $2,000">$500 – $2,000</option>
                        <option value="$2,000 – $5,000">$2,000 – $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                        <option value="Enterprise">Enterprise</option>
                      </select>
                      {/* Decorative Chevron */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tell us about your project */}
                <div className="flex flex-col items-start">
                  <label htmlFor="project-brief" className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="project-brief"
                    required
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Tell us about your project, goals, preferred timeline, and any specific requirements."
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition-all duration-200 resize-y min-h-[110px] ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5 focus:ring-2 focus:ring-blue-500/20'
                        : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5 focus:ring-2 focus:ring-[#7C3AED]/20'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full mt-4 py-4 rounded-xl text-center font-bold text-sm text-white shadow-xl hover:scale-[1.01] active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus:outline-none ${
                    theme === 'light'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-500 shadow-blue-500/25 hover:shadow-blue-500/40 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] shadow-purple-500/25 hover:shadow-purple-500/40 focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-[#0A0A14]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Get Free Consultation</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className={`text-xs text-center mt-1 transition-colors duration-[400ms] ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>
                  🔒 Your information is secure and will never be shared with third parties.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
