/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider, useTheme } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trusted from './components/Trusted';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-[#7C3AED]/30 ${
      theme === 'light' 
        ? 'bg-[#F5F5FA] text-neutral-800 selection:text-neutral-900' 
        : 'bg-[#0A0A14] text-[#F0EDFF] selection:text-[#F0EDFF]'
    }`}>
      {/* Dynamic Header Navigation */}
      <Navbar />

      {/* Main Assembly sections */}
      <main>
        {/* Entrance Hero visual displays */}
        <Hero />
        
        {/* Scrolling brand marquee */}
        <Trusted />
        
        {/* Story details */}
        <About />
        
        {/* Agency services list */}
        <Services />
        
        {/* Case studies and growth parameters */}
        <Portfolio />
        
        {/* Overall achievements metrics */}
        <Stats />
        
        {/* Connected workflows pipeline */}
        <Process />
        
        {/* Client feedbacks testimonials slider */}
        <Testimonials />
        
        {/* Pricing models */}
        <Pricing />
      
        
        {/* Responsive interactive channels and contacts form */}
        <Contact />
      </main>

      {/* Sitemap and compliance copyrights */}
      <Footer />

      {/* High-conversion automated lead generation modal */}
    
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
