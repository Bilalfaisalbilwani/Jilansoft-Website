/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5 pt-16 pb-8" id="footer">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5 text-left">
          {/* Brand block - spans 2 cols on desktop */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <span className="font-display text-2xl font-bold tracking-tight text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-[15px] font-extrabold shadow-md shadow-blue-500/10 shrink-0">
                J
              </div>
              <span>
                Jilan<span className="text-blue-500">soft</span>
              </span>
            </span>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[245px] mb-6 font-sans">
              A premium software development agency crafting high-converting websites and systems.
            </p>
            
            {/* Social box channels */}
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="Follow us on Twitter"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 transition duration-300 cursor-pointer"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 transition duration-300 cursor-pointer"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                aria-label="Follow on Instagram"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 transition duration-300 cursor-pointer"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                aria-label="Check our Github portfolio"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/15 transition duration-300 cursor-pointer"
              >
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3 font-medium text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition">App Development</a></li>
              <li><a href="#services" className="hover:text-white transition">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition">SEO & Growth</a></li>
              <li><a href="#services" className="hover:text-white transition">Branding</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3 font-medium text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition">Our Work</a></li>
              <li><a href="#process" className="hover:text-white transition">Our Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
              Contact
            </h4>
           <ul className="flex flex-col gap-3 font-medium text-sm">

  {/* Email */}
  <li>
    <a
      href="mailto:jilansoft@gmail.com?subject=Project%20Inquiry"
      className="text-slate-400 hover:text-white transition-colors duration-300"
    >
      jilansoft@gmail.com
    </a>
  </li>

  {/* WhatsApp */}
  <li>
    <a
      href="https://wa.me/923113292676?text=Hello%20Jilansoft,%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-white transition-colors duration-300"
    >
      +92 311 3292676
    </a>
  </li>

  {/* Office */}
  <li>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Office+604+LandMark+Plaza+I.I.+Chundrigar+Road+Karachi+Pakistan"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-white transition-colors duration-300"
    >
      Office #604, 6th Floor, LandMark Plaza
    </a>
  </li>

  {/* Contact Section */}
  <li>
    <a
      href="#contact"
      className="text-slate-400 hover:text-white transition-colors duration-300"
    >
      Contact Us
    </a>
  </li>



</ul>
          </div>
        </div>

        {/* Footer Bottom Metadata row */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-xs text-slate-400 font-medium font-sans gap-4">
          <span>© {new Date().getFullYear()} Jilansoft. All rights reserved.</span>
          <span>
            Crafted with care · <a href="#contact" className="text-slate-400 hover:text-blue-500 transition">Let's work together</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
