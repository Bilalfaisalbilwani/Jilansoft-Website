/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, X } from 'lucide-react';
import { pricingPlans } from '../data';
import { useTheme } from './ThemeContext';

export default function Pricing() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 sm:py-32 border-y transition-all duration-[400ms] ease-in-out ${
      theme === 'light' ? 'bg-[#FFFFFF] border-slate-100' : 'bg-[#111827] border-white/5'
    }`} id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
            Pricing
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] mb-5 transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#0F172A]' : 'text-white'
          }`}>
            Transparent pricing, <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">zero surprises</span>
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed transition-colors duration-[400ms] ${
            theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
          }`}>
            Every plan includes dedicated support, detailed reporting, and our full team's expertise.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-md mx-auto lg:max-w-none">
          {pricingPlans.map((plan, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between rounded-2xl p-8 sm:p-9 transition-all duration-300 border ${
                  plan.isFeatured
                    ? theme === 'light'
                      ? 'border-blue-500 bg-white scale-100 lg:scale-[1.03] shadow-2xl shadow-blue-500/10'
                      : 'border-blue-500/50 bg-gradient-to-b from-[#2563EB]/10 to-[#111827]/90 scale-100 lg:scale-[1.03] shadow-2xl shadow-[#2563EB]/15'
                    : theme === 'light'
                      ? 'border-slate-200 bg-[#F8FAFC] hover:border-slate-300 hover:-translate-y-1 hover:shadow-md'
                      : 'border-white/5 bg-[#111128]/40 hover:border-[#7C3AED]/30 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Card Header Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold leading-none ${
                        plan.badgeType === 'popular'
                          ? 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white'
                          : plan.badgeType === 'enterprise'
                          ? 'bg-blue-500/10 text-[#2563EB]'
                          : theme === 'light'
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-white/5 text-[#6B6590]'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan details */}
                  <h3 className={`font-display text-2xl font-bold mb-2 leading-none transition-colors duration-[400ms] ${
                    theme === 'light' ? 'text-[#0F172A]' : 'text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-8 transition-colors duration-[400ms] ${
                    theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
                  }`}>
                    {plan.description}
                  </p>

                  <div className="mb-2 flex items-baseline">
                    <span className={`font-display text-4xl sm:text-5xl font-extrabold transition-colors duration-[400ms] ${
                      theme === 'light' ? 'text-[#0F172A]' : 'text-white'
                    }`}>
                      {plan.price !== 'Custom' && (
                        <span className="text-2xl font-semibold align-super mr-0.5">$</span>
                      )}
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ml-1.5 font-medium transition-colors duration-[400ms] ${
                        theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
                      }`}>{plan.period}</span>
                    )}
                  </div>
                  <div className={`text-xs mb-8 font-semibold uppercase tracking-wider transition-colors duration-[400ms] ${
                    theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'
                  }`}>{plan.note}</div>

                  {/* Urgency ticker (only on featured columns) */}
                  {plan.isFeatured && plan.urgency && (
                    <div className="flex items-center gap-2 text-xs text-[#D97706] bg-[#FEF3C7] border border-[#FDE68A] rounded-xl px-4 py-3 mb-8 font-semibold animate-pulse dark:text-[#FBBF24] dark:bg-[#FBBF24]/10 dark:border-[#FBBF24]/20">
                      🔥 {plan.urgency}
                    </div>
                  )}

                  <hr className={`mb-8 ${theme === 'light' ? 'border-slate-200' : 'border-white/5'}`} />

                  {/* Custom features block */}
                  <div className="flex flex-col gap-4 mb-10 text-left">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-3 text-sm transition-colors duration-[400ms] ${
                          feature.included 
                            ? theme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]' 
                            : theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'
                        }`}
                      >
                        {feature.included ? (
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                            theme === 'light'
                              ? 'bg-blue-50 border-blue-200'
                              : 'bg-[#7C3AED]/20 border-[#7C3AED]/40'
                          }`}>
                            <Check size={11} className={theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'} strokeWidth={3} />
                          </span>
                        ) : (
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                            theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/5'
                          }`}>
                            <X size={11} className="text-[#6B6590]" strokeWidth={3} />
                          </span>
                        )}
                        <span className="leading-tight font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <a
                  href="#contact"
                  className={`w-full py-4 rounded-xl text-center font-bold text-sm transition-all duration-300 cursor-pointer block ${
                    plan.isFeatured
                      ? 'bg-gradient-to-r from-[#2563EB] to-blue-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01]'
                      : theme === 'light'
                      ? 'border border-slate-300 hover:border-slate-400 text-[#0F172A] hover:bg-slate-50'
                      : 'border border-white/10 hover:border-[#2563EB] text-[#F8FAFC] hover:bg-[#2563EB]/8'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
