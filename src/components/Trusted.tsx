/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { trustedLogos } from '../data';
import { useTheme } from './ThemeContext';

export default function Trusted() {
  const { theme } = useTheme();

  return (
    <section className={`py-12 border-y overflow-hidden transition-all duration-[400ms] ease-in-out ${
      theme === 'light' ? 'bg-[#F8FAFC] border-slate-100 text-[#64748B]' : 'bg-[#111827] border-[#0F172A] text-[#94A3B8]'
    }`} id="trusted">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className={`text-center text-xs font-bold uppercase tracking-widest mb-8 select-none ${
          theme === 'light' ? 'text-[#64748B]' : 'text-[#94A3B8]'
        }`}>
          Trusted by fast-growing companies
        </div>
        
        {/* Seamless scrolling horizontal marquee track wrapping */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-16 items-center w-max animate-marquee py-2 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
            {/* Render loop original */}
            {trustedLogos.map((logo, index) => (
              <span
                key={`org-${index}`}
                className={`font-display text-base sm:text-lg font-bold transition-colors tracking-tight select-none pointer-events-none ${
                  theme === 'light' ? 'text-slate-400 hover:text-slate-600' : 'text-slate-600 hover:text-[#A09BB8]'
                }`}
              >
                {logo}
              </span>
            ))}
            {/* Render loop duplicate for seamless continuous wrap effect */}
            {trustedLogos.map((logo, index) => (
              <span
                key={`dup-${index}`}
                className={`font-display text-base sm:text-lg font-bold transition-colors tracking-tight select-none pointer-events-none ${
                  theme === 'light' ? 'text-slate-400 hover:text-slate-600' : 'text-slate-600 hover:text-[#A09BB8]'
                }`}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
