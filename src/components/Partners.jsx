import React from 'react';
import { motion } from 'framer-motion';

import nasscomLogo from '../images/nasscom.jpg';
import startupIndiaLogo from '../images/Startup-India-Hub-Logo-Vector.svg-.png';
import msmeLogo from '../images/msme.png';

import mmBuildersLogo from '../images/mmbuilders.png';
import vishwaInteriorsLogo from '../images/vishwainteriors.png';
import jciLogo from '../images/jci.png';
import caremeLogo from '../images/careme.png';
import assentTechLogo from '../images/assent_tech.jfif';
import cloudstierLogo from '../images/cloudstier-logo.png';
import processDriveLogo from '../images/process_drive.jfif';
import edurekaLogo from '../images/edureka.png';
import yiLogo from '../images/yi.png';

const REGISTRATIONS = [
  { name: "NASSCOM", logo: nasscomLogo },
  { name: "STARTUP INDIA", logo: startupIndiaLogo },
  { name: "MSME", logo: msmeLogo },
];

const PARTNERS = [
  { name: "MM BUILDERS", logo: mmBuildersLogo },
  { name: "VISHWA INTERIORS", logo: vishwaInteriorsLogo, isDarkBg: true },
  { name: "JCI INDIA", logo: jciLogo },
  { name: "CARE ME HEALTH", logo: caremeLogo },
  { name: "ASSENT TECHNOLOGIES", logo: assentTechLogo },
  { name: "CLOUDSTIER", logo: cloudstierLogo },
  { name: "PROCESS DRIVE", logo: processDriveLogo },
  { name: "EDUREKA", logo: edurekaLogo },
  { name: "YOUNG INDIANS", logo: yiLogo },
];

const Partners = () => {
  // Duplicate arrays to ensure seamless infinite scroll
  const marqueeReg = [...REGISTRATIONS, ...REGISTRATIONS, ...REGISTRATIONS, ...REGISTRATIONS];
  const marqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-24 bg-[var(--surface)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
        <div className="label-md opacity-30 tracking-[0.4em] mb-4">Ecosystem Architecture</div>
        <h2 className="text-4xl md:text-5xl font-black text-[var(--on-surface)] tracking-tighter">
          Strategic <span className="text-[var(--primary)] italic font-medium">Partnerships</span> & <br className="hidden md:block"/> Institutional Reach.
        </h2>
      </div>

      <div className="space-y-8">
        {/* REGISTRATIONS - RIGHT TO LEFT */}
        <div className="flex overflow-hidden group select-none relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />
           
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
            }}
            className="flex flex-nowrap gap-16 items-center py-4"
          >
            {marqueeReg.map((item, i) => (
              <div key={i} className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="h-12 md:h-16 w-auto object-contain brightness-110" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* PARTNERS - LEFT TO RIGHT */}
        <div className="flex overflow-hidden group select-none relative">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />

          <motion.div 
            animate={{ x: ["-50%", 0] }}
            transition={{ 
              duration: 50, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap gap-20 items-center py-4"
          >
            {marqueePartners.map((item, i) => (
              <div key={i} className={`flex-shrink-0 transition-all duration-500 hover:scale-110 ${item.isDarkBg ? 'bg-[#111] p-4 rounded-2xl grayscale-[0.6] opacity-60 hover:grayscale-0 hover:opacity-100 shadow-xl' : 'grayscale opacity-40 hover:grayscale-0 hover:opacity-100'}`}>
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className={`${item.isDarkBg ? 'h-8 md:h-10' : 'h-10 md:h-14'} w-auto object-contain transition-all duration-500`} 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-16 text-center opacity-20 text-[9px] tracking-[0.6em] uppercase font-bold text-[var(--on-surface)]">
        Institutional Compliance // Global Synergy // Enterprise Standards
      </div>
    </section>
  );
};

export default Partners;
