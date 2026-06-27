import React, { useState } from "react";
import { Mail, Phone, Calendar, Send, CheckCircle2, MapPin } from "lucide-react";
import { useTheme } from "./ThemeContext";
export default function Contact() {
  const { theme } = useTheme();
  const [yourName, setYourName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      className={`py-24 sm:py-32 border-y transition-all duration-[400ms] ease-in-out ${theme === 'light'
        ? 'bg-[#FFFFFF] border-slate-150 text-slate-800'
        : 'bg-[#0A0A14] border-white/5 text-[#F0EDFF]'
        }`}
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Side Content & Channels */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#A855F7] bg-[#7C3AED]/8 border border-[#7C3AED]/20 mb-5">
              Get In Touch
            </div>

            <h2 className={`font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15] mb-5 transition-colors duration-[400ms] ${theme === 'light' ? 'text-[#0F172A]' : 'text-white'
              }`}>
              Let's talk about your <span className={`bg-gradient-to-r bg-clip-text text-transparent ${theme === 'light' ? 'from-blue-600 to-indigo-500' : 'from-[#A855F7] via-[#7C3AED] to-[#C084FC]'
                }`}>project</span>
            </h2>

            <p className={`text-base leading-relaxed mb-10 max-w-md font-normal transition-colors duration-[400ms] ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'
              }`}>
              Let's talk about your goals. Reach out for help, project details, or guidance anytime.
            </p>

            {/* Channels Lists */}
            <div className="flex flex-col gap-4 w-full font-sans">
              {/* Email */}
              <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${theme === 'light'
                ? 'border-slate-200 bg-slate-50 hover:border-blue-400'
                : 'border-white/5 bg-[#111128]/40 hover:border-purple-500/20'
                }`}>
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${theme === 'light'
                  ? 'bg-blue-50 border-blue-200 text-blue-600'
                  : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7]'
                  }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>Email us</div>
                  <a
                    href="mailto:jilansoft@gmail.com"
                    className={`text-sm font-semibold transition-colors ${theme === 'light' ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-[#A855F7]'
                      }`}
                  >
                    jilansoft@gmail.com
                  </a>
                </div>
              </div>

              {/* Whatsapp/Phone */}
              <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${theme === 'light'
                ? 'border-slate-200 bg-slate-50 hover:border-blue-400'
                : 'border-white/5 bg-[#111128]/40 hover:border-purple-500/20'
                }`}>
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${theme === 'light'
                  ? 'bg-blue-50 border-blue-200 text-blue-600'
                  : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7]'
                  }`}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>WhatsApp</div>
                  <a
                    href="https://wa.me/923113292676?text=Hello%20Jilansoft,%20I'm%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold transition-colors ${theme === 'light' ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-[#A855F7]'
                      }`}
                  >
                    +92 311 3292676
                  </a>
                </div>
              </div>

              {/* Calendar callback Booking */}
              {/* <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${theme === 'light'
                  ? 'border-slate-200 bg-slate-50 hover:border-blue-400'
                  : 'border-white/5 bg-[#111128]/40 hover:border-purple-500/20'
                }`}>
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${theme === 'light'
                    ? 'bg-blue-50 border-blue-200 text-blue-600'
                    : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7]'
                  }`}>
                  <Calendar size={20} />
                </div>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-bold ${theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'}`}>Book a call</div>
                  <div className={`text-sm font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
                    30-min strategy session
                  </div>
                </div>
              </div> */}
              {/* Location */}
              {/* Location */}
<div
  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
    theme === 'light'
      ? 'border-slate-200 bg-slate-50 hover:border-blue-400'
      : 'border-white/5 bg-[#111128]/40 hover:border-purple-500/20'
  }`}
>
  <div
    className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border ${
      theme === 'light'
        ? 'bg-blue-50 border-blue-200 text-blue-600'
        : 'bg-[#7C3AED]/15 border-[#7C3AED]/20 text-[#A855F7]'
    }`}
  >
    <MapPin size={20} />
  </div>

  <div>
    <div
      className={`text-[10px] uppercase tracking-widest font-bold ${
        theme === 'light' ? 'text-slate-400' : 'text-[#6B6590]'
      }`}
    >
      Office Location
    </div>

    
    <a
  href="https://maps.app.goo.gl/jc6pntAygKXGbGoc7"
  target="_blank"
  rel="noopener noreferrer"
  className={`transition-colors ${
    theme === 'light'
      ? 'text-slate-800 hover:text-blue-600'
      : 'text-white hover:text-[#A855F7]'
  }`}
>
  <div className="text-sm font-semibold">
    Karachi, Pakistan
  </div>

  <div
    className={`text-xs mt-1 ${
      theme === 'light'
        ? 'text-slate-500'
        : 'text-[#A09BB8]'
    }`}
  >
    Office #604, 6th Floor, LandMark Plaza
    <br />
    I. I. Chundrigar Road
  </div>
</a>

  </div>
</div>
            </div>
          </div>

          {/* Right Side - Interactive Form Card */}
          <div className={`lg:col-span-7 w-full border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-[400ms] ${theme === 'light'
            ? 'bg-[#F8FAFC] border-slate-250 shadow-slate-100/80'
            : 'bg-[#111128]/50 border-white/5'
            }`}>

            {isSubmitted ? (
              /* Success screen state */
              <div className="flex flex-col items-center justify-center text-center py-12 gap-5 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-500 mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className={`font-display text-2xl font-bold ${theme === 'light' ? 'text-[#0F172A]' : 'text-white'}`}>Message Sent!</h3>
                <p className={`text-sm max-w-sm leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-[#A09BB8]'}`}>
                  Thank you for reaching out to Jilansoft.We will analyze your project brief and get back to you
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 shadow-md cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form input screens state */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col items-start">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>Your Name</label>
                    <input
                      required
                      type="text"
                      value={yourName}
                      onChange={(e) => setYourName(e.target.value)}
                      placeholder="Bilal"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition ${theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5'
                        : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-purple-500/5'
                        }`}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>Company Name</label>
                    <input
                      required
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Jilansoft"
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition ${theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5'
                        : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-purple-500/5'
                        }`}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>Email Address</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jilansoft@gmail.com"
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition ${theme === 'light'
                      ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5'
                      : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5'
                      }`}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>What do you need?</label>
                  <div className="relative w-full">
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`w-full rounded-lg px-4 py-3 text-sm outline-none border cursor-pointer appearance-none ${theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-800 focus:border-blue-500 focus:bg-blue-500/5'
                        : 'bg-[#111128] border-white/10 text-[#F0EDFF] focus:border-purple-500/50 focus:bg-[#7C3AED]/5'
                        }`}
                    >
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Branding">Branding</option>
                      <option value="SEO & Growth">SEO & Growth</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Full Strategy + Build">Full Strategy + Build</option>
                    </select>
                    {/* Decorative Chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-slate-400' : 'text-[#A09BB8]'}`}>Tell us about your project</label>
                  <textarea
                    required
                    rows={4}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="What are you building? What's the timeline? Any specific goals or challenges?"
                    className={`w-full rounded-lg px-4 py-3 text-sm outline-none border transition resize-y min-h-[110px] ${theme === 'light'
                      ? 'bg-white border-slate-300 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-blue-500/5'
                      : 'bg-white/4 border-white/10 text-white placeholder-[#6B6590] focus:border-purple-500/50 focus:bg-[#7C3AED]/5'
                      }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-4 py-4 rounded-xl text-center font-bold text-sm text-white shadow-xl hover:scale-[1.01] active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${theme === 'light'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-500 shadow-blue-500/25 hover:shadow-blue-500/40'
                    : 'bg-gradient-to-r from-[#7C3AED] to-[#A855F7] shadow-purple-500/25 hover:shadow-purple-500/40'
                    }`}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
