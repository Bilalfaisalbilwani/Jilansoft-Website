/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Target, Zap, LineChart } from 'lucide-react';
import { processSteps } from '../data';
import { useTheme } from './ThemeContext';

// Map icons dynamically
const iconMap: Record<string, React.ReactNode> = {
  '🔍': <Search className="text-[#A855F7]" size={24} />,
  '🎯': <Target className="text-[#A855F7]" size={24} />,
  '⚡': <Zap className="text-[#A855F7]" size={24} />,
  '📊': <LineChart className="text-[#A855F7]" size={24} />,
};

export default function Process() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 sm:py-32 border-y transition-all duration-[400ms] ease-in-out ${
      theme === 'light' ? 'bg-[#FFFFFF] border-slate-100' : 'bg-[#0F172A] border-white/5'
    }`} id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
            How We Work
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] mb-5 transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#0F172A]' : 'text-white'
          }`}>
            A process built for <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">clarity and speed</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
          }`}>
            No surprises. No scope creep. Just a proven framework that delivers on time, every time.
          </p>
        </div>

        {/* Process Steps Connection Row */}
        <div className="relative">
          {/* Horizontal connecting line - Visible ONLY on large screens (lg:block) */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#7C3AED] opacity-30 hidden lg:block pointer-events-none z-0" />

          {/* Process steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group text-center flex flex-col items-center">
                
                {/* Step Icon Badge */}
                <div className={`relative w-20 h-20 rounded-full border group-hover:border-transparent flex items-center justify-center mb-6 z-10 transition-all duration-300 shadow-xl ${
                  theme === 'light'
                    ? 'border-slate-200 bg-white shadow-slate-100'
                    : 'border-[#7C3AED]/30 bg-[#111827] shadow-black/40'
                }`}>
                  {/* Decorative backdrop hover glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  
                  {/* Icon Wrapper */}
                  <div className="relative z-10 group-hover:text-white transition-colors">
                    {/* Render matching lucide icon, or fallback to raw emoji if none */}
                    {iconMap[step.icon] || <span className="text-2xl">{step.icon}</span>}
                  </div>
                  
                  {/* Mini Index Flag */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] text-white text-[10px] font-extrabold flex items-center justify-center border border-white/10 shadow shadow-blue-500/30">
                    0{idx + 1}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className={`font-display text-lg font-bold mb-2.5 transition-all duration-300 ${
                  theme === 'light' ? 'text-[#0F172A] group-hover:text-[#2563EB]' : 'text-white group-hover:text-[#A855F7]'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed max-w-[240px] font-normal transition-colors duration-300 ${
                  theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
                }`}>
                  {step.description}
                </p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
