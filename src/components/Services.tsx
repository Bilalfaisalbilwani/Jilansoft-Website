/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Globe, Smartphone, Palette, TrendingUp, Gem, Megaphone } from 'lucide-react';
import { services } from '../data';
import { useTheme } from './ThemeContext';

// Map icons dynamically
const iconMap: Record<string, React.ReactNode> = {
  '🌐': <Globe className="text-[#A855F7]" size={24} />,
  '📱': <Smartphone className="text-[#A855F7]" size={24} />,
  '🎨': <Palette className="text-[#A855F7]" size={24} />,
  '📈': <TrendingUp className="text-[#A855F7]" size={24} />,
  '💎': <Gem className="text-[#A855F7]" size={24} />,
  '🚀': <Megaphone className="text-[#A855F7]" size={24} />,
};

export default function Services() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 sm:py-32 border-y transition-all duration-[400ms] ease-in-out ${
      theme === 'light' ? 'bg-[#F8FAFC] border-slate-100' : 'bg-[#111827] border-slate-800'
    }`} id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
            What We Do
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] mb-5 transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}>
            Services built to <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">grow your business</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
          }`}>
            We combine strategy, design, and engineering to deliver end-to-end digital solutions that perform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer overflow-hidden border ${
                theme === 'light'
                  ? 'bg-white border-slate-200/80 shadow-md hover:shadow-lg shadow-slate-100 hover:border-purple-300'
                  : 'bg-[#0F172A] border-white/5 hover:border-purple-500/20 hover:bg-[#111827]'
              }`}
            >
              {/* Card visual hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Icon block */}
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-[#7C3AED]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#7C3AED]/50 transition-all duration-300">
                  {iconMap[service.icon] || <Globe size={24} />}
                </div>

                {/* Content */}
                <h3 className={`font-display text-xl font-bold mb-3 transition-colors ${
                  theme === 'light' ? 'text-[#0F172A] group-hover:text-[#2563EB]' : 'text-white group-hover:text-[#A855F7]'
                }`}>{service.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed mb-6 font-normal transition-colors ${
                  theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Read More button */}
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A855F7] group-hover:gap-2.5 transition-all">
                Explore service <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
