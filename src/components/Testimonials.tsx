/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goTo = (idx: number) => {
    setActiveIdx(idx);
  };

  // Keep a ref to the next slide function for autoplay setup
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) {
        autoPlayRef.current();
      }
    };
    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#0F172A] border-y border-white/5 transition-all duration-[400ms] ease-in-out text-white" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
            Client Stories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[1.1] text-white">
            What our clients <span className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">actually say</span>
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto px-1">
          {/* Main testimonies wrapper */}
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="w-full shrink-0 flex flex-col justify-between bg-[#111827]/80 border border-white/5 rounded-2xl p-8 sm:p-10 select-none shadow-xl shadow-black/30"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {Array.from({ length: test.rating }).map((_, sIdx) => (
                      <Star key={sIdx} size={15} fill="currentColor" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="text-[#F0EDFF] text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic mb-8 relative pr-2">
                    <span className="text-4xl font-serif text-[#7C3AED] leading-none absolute -left-1 -top-3.5 select-none opacity-40">"</span>
                    <span className="pl-5 relative z-10">{test.quote}</span>
                  </p>
                </div>

                {/* Author Details */}
                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md">
                    {test.avatarInitials}
                  </div>
                  <div className="text-left">
                    <div className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                      {test.author}
                    </div>
                    <div className="text-xs sm:text-sm text-[#6B6590] mt-0.5 font-medium">
                      {test.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigations Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {/* Back button */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-[#111128] border border-white/5 hover:border-[#7C3AED] text-[#A09BB8] hover:text-[#A855F7] flex items-center justify-center transition cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === index
                    ? 'w-6 bg-[#7C3AED] border-transparent'
                    : 'w-2 bg-[#16162a] border border-[#7C3AED]/20 hover:border-[#7C3AED]/50'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-[#111128] border border-white/5 hover:border-[#7C3AED] text-[#A09BB8] hover:text-[#A855F7] flex items-center justify-center transition cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
