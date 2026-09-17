import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

// Home Page Sections
import { Hero } from '../components/home/Hero';
import { TrustStats } from '../components/home/TrustStats';
import { About } from '../components/home/About';
import { Services } from '../components/home/Services';
import { Industries } from '../components/home/Industries';
import { Technology } from '../components/home/Technology';
import { Portfolio } from '../components/home/Portfolio';
import { WhyStrydo } from '../components/home/WhyStrydo';
import { Process } from '../components/home/Process';
import { Testimonials } from '../components/home/Testimonials';
import { Careers } from '../components/home/Careers';
import { Blog } from '../components/home/Blog';
import { CTA } from '../components/home/CTA';

const LandingPage = () => {
  return (
    <div className="bg-[#F7F7F5] min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStats />
        <About />
        <Services />
        <Industries />
        <Technology />
        <Portfolio />
        {/* Case Studies typically comes here, we use Portfolio as a combined section or can add one later */}
        <WhyStrydo />
        <Process />
        <Testimonials />
        <Careers />
        
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;