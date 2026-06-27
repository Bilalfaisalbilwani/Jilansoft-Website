/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { heroStats } from '../data';
import { useTheme } from './ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden pt-[72px] pb-16 transition-all duration-[400ms] ease-in-out ${theme === 'light' ? 'bg-[#FFFFFF] text-[#0F172A]' : 'bg-[#020617] text-[#F8FAFC]'
        }`}
      id="hero"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_65%)] animate-pulse duration-[6000ms]`} />
        <div className="absolute top-[30%] right-[-10%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_60%)] animate-pulse duration-[8000ms] delay-1000" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/10 border border-[#7C3AED]/25 mb-7">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Trusted by 200+ brands worldwide
          </div> */}

          {/* Title */}
          <h1 className={`font-display text-[40px] sm:text-[54px] lg:text-[64px] font-bold leading-[1.08] tracking-tight mb-6 transition-all duration-[400ms] ease-in-out ${theme === 'light' ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
            }`}>
            Digital Solutions
            <br className="hidden sm:inline" />
            Build For  <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">Business Growth</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-[500px] mb-10 font-normal transition-all duration-[400ms] ease-in-out ${theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
            }`}>
          Jilansoft delivers custom software, business applications, WordPress websites, Shopify stores, and digital solutions tailored to your goals. We combine strategy, design, and technology to help businesses grow with confidence.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-[300ms] flex items-center justify-center gap-2 cursor-pointer"
            >
              Start a Project <ArrowRight size={18} />
            </a>
            <a
              href="#work"
              className={`w-full sm:w-auto px-8 py-4 text-base font-semibold border rounded-xl transition-all duration-[300ms] flex items-center justify-center cursor-pointer ${theme === 'light'
                  ? 'border-slate-300 text-[#0F172A] hover:bg-slate-50'
                  : 'border-slate-700 text-[#F8FAFC] hover:bg-slate-800/50'
                }`}
            >
              View Our Work
            </a>
          </div>

          {/* Core Stats */}
          <div className={`flex gap-10 sm:gap-14 mt-14 pt-12 border-t w-full justify-center lg:justify-start flex-wrap transition-colors duration-300 ${theme === 'light' ? 'border-neutral-200' : 'border-white/5'
            }`}>
            {heroStats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className={`font-display text-3xl sm:text-4xl font-extrabold transition-colors duration-300 ${theme === 'light' ? 'text-neutral-900' : 'text-white'
                  }`}>
                  {stat.number.match(/\d+/) && stat.number.replace(/\d+/, '') === '+' ? (
                    <>
                      {stat.number.match(/\d+/)?.[0]}
                      <span className="text-[#A855F7]">+</span>
                    </>
                  ) : stat.number.includes('%') ? (
                    <>
                      {stat.number.replace('%', '')}
                      <span className="text-[#A855F7]">%</span>
                    </>
                  ) : stat.number.includes('yr') ? (
                    <>
                      {stat.number.replace('yr', '')}
                      <span className="text-[#A855F7]">yr</span>
                    </>
                  ) : (
                    stat.number
                  )}
                </div>
                <div className={`text-xs mt-1 uppercase tracking-wider font-semibold ${theme === 'light' ? 'text-neutral-400' : 'text-[#6B6590]'
                  }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Stack - Hidden on mobile, beautiful display on desktop */}
        <div className="hidden lg:block relative h-[480px]">
          {/* Main revenue growth card */}
          <div className={`absolute top-[8%] left-[5%] right-[5%] p-6 rounded-2xl border backdrop-blur-md shadow-2xl animate-float transition-all duration-300 ${theme === 'light'
              ? 'border-neutral-200 bg-white/70 shadow-neutral-200/50'
              : 'border-[#7C3AED]/30 bg-gradient-to-br from-[#7C3AED]/15 to-[#A855F7]/5 shadow-purple-500/5'
            }`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs uppercase tracking-widest font-bold ${theme === 'light' ? 'text-neutral-400' : 'text-[#6B6590]'}`}>Revenue Growth</span>
              <TrendingUp className="text-[#A855F7]" size={18} />
            </div>

            {/* Chart display */}
            <div className="flex items-end gap-3 h-[90px] mt-6">
              <div className="bg-[#7C3AED]/40 h-[40%] flex-1 rounded-t-md transition-all duration-500 ease-out hover:opacity-100" />
              <div className="bg-[#7C3AED]/40 h-[55%] flex-1 rounded-t-md transition-all duration-500 ease-out hover:opacity-100" />
              <div className="bg-[#7C3AED]/40 h-[48%] flex-1 rounded-t-md transition-all duration-500 ease-out hover:opacity-100" />
              <div className="bg-[#7C3AED]/40 h-[70%] flex-1 rounded-t-md transition-all duration-500 ease-out hover:opacity-100" />
              <div className="bg-[#7C3AED]/40 h-[65%] flex-1 rounded-t-md transition-all duration-500 ease-out hover:opacity-100" />
              <div className="bg-gradient-to-t from-[#7C3AED] to-[#A855F7] h-[88%] flex-1 rounded-t-md shadow-[0_0_15px_rgba(124,58,237,0.3)]" />
              <div className="bg-gradient-to-t from-[#7C3AED] to-[#A855F7] h-[95%] flex-1 rounded-t-md shadow-[0_0_15px_rgba(124,58,237,0.4)]" />
            </div>
            <div className={`text-xs mt-4 font-medium ${theme === 'light' ? 'text-neutral-500' : 'text-[#6B6590]'}`}>
              ↑ 147% revenue growth after premium redesign
            </div>
          </div>

          {/* Micro metric card */}
          <div className={`absolute bottom-[5%] right-[5%] w-[190px] p-5 rounded-2xl border backdrop-blur-md shadow-xl animate-float-delay transition-colors duration-300 ${theme === 'light'
              ? 'border-neutral-200 bg-white/95 text-neutral-800'
              : 'border-[#7C3AED]/25 bg-[#111128]/95 text-white'
            }`}>
            <div className="font-display text-3xl font-extrabold text-[#A855F7]">+312%</div>
            <div className={`text-xs mt-1 font-semibold ${theme === 'light' ? 'text-neutral-500' : 'text-[#A09BB8]'}`}>Organic Traffic</div>
            <div className="text-[11px] text-[#22c55e] font-bold mt-1">↑ vs last quarter</div>
            <div className="flex gap-1 items-end mt-4 h-8">
              <span className="w-1.5 h-3 bg-[#7C3AED]/30 rounded-t" />
              <span className="w-1.5 h-4 bg-[#7C3AED]/30 rounded-t" />
              <span className="w-1.5 h-2 bg-[#7C3AED]/70 rounded-t" />
              <span className="w-1.5 h-6 bg-[#A855F7] rounded-t shadow-[0_0_8px_rgba(168,85,247,0.3)]" />
              <span className="w-1.5 h-7 bg-[#A855F7] rounded-t shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            </div>
          </div>

          {/* Active projects badge */}
          <div className={`absolute bottom-[20%] left-[-2%] w-[170px] p-5 rounded-2xl border backdrop-blur-md shadow-xl animate-float-slow transition-colors duration-300 ${theme === 'light'
              ? 'border-neutral-200 bg-white/95 text-neutral-800'
              : 'border-[#A855F7]/20 bg-[#111128]/95 text-white'
            }`}>
            <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-neutral-400' : 'text-[#6B6590]'}`}>Active Projects</div>
            <div className="font-display text-[26px] font-extrabold text-[#A855F7] mt-1 flex items-center gap-1.5">
              24 <Sparkles size={16} className="text-[#C084FC] animate-spin-slow" />
            </div>
            <div className={`text-[10px] mt-1 font-medium ${theme === 'light' ? 'text-neutral-400' : 'text-[#6B6590]'}`}>In progression now</div>
            <div className="flex gap-1 mt-4">
              <div className="flex-[3] h-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7]" />
              <div className="flex-[1] h-1.5 rounded-full bg-[#7C3AED]/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
