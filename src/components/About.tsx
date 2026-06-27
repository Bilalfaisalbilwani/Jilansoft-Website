/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles } from 'lucide-react';
import { values } from '../data';
import { useTheme } from './ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 sm:py-32 overflow-hidden transition-all duration-[400ms] ease-in-out bg-[#0F172A] text-white`} id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Element with Sparkles - Hidden on smaller screens with elegant placeholder */}
          <div className="relative group hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#16162a] to-[#111128] border border-purple-500/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#A855F7]/5 group-hover:bg-[#A855F7]/10 transition-colors duration-500" />
              <div className="w-[85%] h-[85%] rounded-xl bg-gradient-to-br from-[#7C3AED]/15 to-[#A855F7]/5 border border-purple-500/30 flex items-center justify-center">
                <Sparkles size={64} className="text-[#A855F7] opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
              </div>
            </div>
            
            {/* Overlay craft badge */}
            <div className="absolute bottom-[-20px] right-[-20px] bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white rounded-2xl p-5 shadow-2xl shadow-purple-500/30 font-display transition duration-300 hover:scale-105 select-none">
              <div className="text-[28px] font-extrabold leading-none">8+</div>
              <div className="text-xs opacity-90 mt-1 uppercase tracking-widest font-bold">Years of craft</div>
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-6">
              Our Story
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] text-white mb-6">
              Built to make digital <span className="bg-gradient-to-r from-[#A855F7] via-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent">unforgettable</span>
            </h2>

            <p className="text-[#A09BB8] text-base leading-relaxed mb-6">
              Jilansoft was founded by a small team of designers and engineers who refused to accept the ordinary. We believe every digital product should do more than function — it should inspire, convert, and endure.
            </p>

            <p className="text-[#A09BB8] text-base leading-relaxed mb-10">
              We work with startups finding product-market fit and with established brands ready to evolve. Our process is lean, transparent, and relentlessly focused on measurable outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-[#7C3AED]/5 border border-[#7C3AED]/15 rounded-xl px-4 py-3.5 text-sm font-semibold text-[#F0EDFF] flex items-center gap-2.5 hover:border-purple-500/40 hover:bg-[#7C3AED]/8 transition duration-300"
                >
                  <span className="text-[#A855F7] text-xs">✦</span>
                  {value}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
