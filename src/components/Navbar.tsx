/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? theme === 'light'
              ? 'bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-sm'
              : 'bg-[#0A0A14]/85 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="flex items-center justify-between h-[72px] max-w-[1200px] mx-auto px-6">
          <a
            href="#"
            className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 flex items-center gap-2 ${
              theme === 'light' ? 'text-[#0C0C14]' : 'text-white'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-[15px] font-extrabold shadow-md shrink-0 transition-all duration-[400ms] ${
              theme === 'light'
                ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/10'
                : 'bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] shadow-purple-500/10'
            }`}>
              J
            </div>
            <span>
              Jilan<span className={`transition-colors duration-[400ms] ${theme === 'light' ? 'text-blue-600' : 'text-[#A855F7]'}`}>soft</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  theme === 'light'
                    ? 'text-slate-500 hover:text-black'
                    : 'text-[#A09BB8] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Theme Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Elegant Theme Trigger */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme color scheme"
              className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                theme === 'light'
                  ? 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-black'
                  : 'border-white/5 hover:bg-white/5 text-[#A09BB8] hover:text-white'
              }`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

           
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition shadow-lg cursor-pointer ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-blue-500/25 hover:shadow-blue-500/40'
                  : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-purple-500/35 hover:shadow-purple-500/50'
              }`}
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Theme & Hamburger Layout */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme color scheme"
              className={`p-2 rounded-lg border transition cursor-pointer ${
                theme === 'light'
                  ? 'border-slate-200 text-slate-600'
                  : 'border-white/5 text-[#A09BB8]'
              }`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              className={`flex items-center justify-center p-2 transition cursor-pointer ${
                theme === 'light' ? 'text-slate-600' : 'text-[#A09BB8]'
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL RESPONSIVE OVERLAY FOR MOBILE DEVICES */}
      {mobileMenuOpen && (
        <div
          id="mobile-overlay"
          className={`fixed inset-0 top-[72px] bottom-0 z-40 md:hidden flex flex-col justify-between backdrop-blur-xl p-8 min-h-[calc(100vh-72px)] overflow-y-auto transition-colors duration-300 ${
            theme === 'light' ? 'bg-white/98' : 'bg-[#0A0A14]/98'
          }`}
        >
          {/* Menu links beautifully spaced and centered */}
          <div className="flex flex-col items-center justify-center gap-8 py-12 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-display font-semibold transition-colors ${
                  theme === 'light'
                    ? 'text-slate-850 hover:text-blue-600'
                    : 'text-[#F0EDFF] hover:text-[#A855F7]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>         
        </div>
      )}
    </>
  );
}
