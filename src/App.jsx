import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Routes, Route, useLocation } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MouseGlitter from './components/MouseGlitter';
import AboutSection from './components/AboutSection';
import SaaSProductDevelopmentSection from './components/SaaSProductDevelopmentSection';
import IntegrationSection from './components/IntegrationSection';
import DigitalMarketing from './components/DigitalMarketing';
import MobileExperience from './components/MobileExperience';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <main className="relative">
    <div id="hero">
      <Hero />
    </div>
    
    <div id="about" className="relative group/about">
       <AboutSection />
       {/* Editorial Asymmetric Detail */}
       <div className="absolute right-0 bottom-40 w-4 h-64 bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-20 transition-all group-hover/about:h-96" />
    </div>

    <div id="services" className="relative">
       <Services />
    </div>

    <div id="process" className="relative">
       <Process />
    </div>

    <div id="portfolio" className="relative">
       <Portfolio />
    </div>

    <div className="relative">
       <Partners />
    </div>

    <div id="cta" className="relative">
       <CTA />
    </div>
  </main>
);

const NotFound = () => (
  <main className="min-h-[60vh] flex items-center justify-center px-6 pt-36 pb-20 text-center">
    <div className="max-w-xl space-y-6">
      <p className="label-md text-[var(--primary)]">404 · Route not found</p>
      <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em]">This page does not exist.</h1>
      <p className="body-lg text-[var(--on-surface-variant)]">
        The address may be outdated or mistyped. Return to the Strydo homepage to continue.
      </p>
      <a href="/" className="btn-primary inline-flex items-center justify-center !px-8 !py-4 !text-base">
        Return home
      </a>
    </div>
  </main>
);

const App = () => {
  useEffect(() => {
    // 1. Global Section Entrance Physics
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    // 2. Sophisticated Scroll-aware background shifts
    gsap.to('.app-bg-glow-primary', {
        x: '20%',
        y: '10%',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2
        }
    });

    gsap.to('.app-bg-glow-secondary', {
        x: '-10%',
        y: '-15%',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 3
        }
    });

  }, []);

  return (
    <div className="bg-[var(--surface)] text-[var(--on-surface)] selection:bg-[var(--tertiary)] selection:text-white font-sans antialiased overflow-x-hidden min-h-screen">
      
      <ScrollToTop />
      <MouseGlitter />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="app-bg-glow-primary absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[var(--primary)] blur-[160px] rounded-full" />
        <div className="app-bg-glow-secondary absolute bottom-[-10%] right-[-10%] w-[55%] h-[55%] bg-[var(--secondary)] blur-[180px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--primary-container)] blur-[250px] opacity-[0.05]" />
      </div>

      <div className="relative z-10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.04] pointer-events-none" />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saas-product-development" element={<SaaSProductDevelopmentSection />} />
          <Route path="/integrations-automation" element={<IntegrationSection />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/mobile-experience" element={<MobileExperience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>

      {/* Editorial System Enhancements */}
      <style>{`
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' width='40' height='40' fill='none' stroke='rgba(0,101,117,0.1)' stroke-width='0.5'%3E%3Cpath d='M0 .5H39.5V40M10 0V10H0M30 40V30H40'/%3E%3C/svg%3E");
        }

        /* Technical Modern Scrollbar Architecture */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: var(--surface);
        }
        ::-webkit-scrollbar-thumb {
          background: var(--surface-container-highest);
          border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--primary);
        }

        /* Selection Aesthetics */
        ::selection {
            background-color: var(--tertiary);
            color: #fff;
        }


      `}</style>
    </div>
  );
};

export default App;
