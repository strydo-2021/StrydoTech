import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';

// Importing your assets
import JCIImg from '../../assets/JCI.png';
import MMCImg from '../../assets/MMC.png';

const projects = [
  {
    title: 'JCI Marketplace',
    industry: 'B2B Global Commerce',
    url: 'https://www.jcimarketplace.com/',
    image: JCIImg,
    challenge: 'Architecting a global networking hub for business opportunities and organizational discovery.',
    impact: 'Seamless Global Networking',
    // JCI Theme: Professional Blue & White
    themeColor: '#0056b3', 
    gradient: 'from-[#003366] via-[#0056b3] to-white',
    accentTag: 'text-[#0056b3]',
    tech: ['React', 'Node.js', 'MongoDB', 'Cloud Architecture'],
    features: ['Marketplace Logic', 'Lead Generation', 'Member Directory']
  },
  {
    title: 'MM Constructions ERP',
    industry: 'Enterprise Solutions',
    url: 'https://mmconstructionserp.com/',
    image: MMCImg,
    challenge: 'Digitizing complex construction workflows, inventory tracking, and labor management into one core.',
    impact: '100% Operational Visibility',
    // MMC Theme: Construction Green & Industrial Red
    themeColor: '#BC2D3F',
    gradient: 'from-[#1a3a32] via-[#2D5A27] to-[#BC2D3F]', 
    accentTag: 'text-[#BC2D3F]',
    tech: ['React', 'Spring Boot', 'MySQL', 'Custom ERP'],
    features: ['Inventory Mgmt', 'Project Tracking', 'Finance Modules']
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Dynamic Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F7F7F5] -z-10 skew-x-[-12deg] translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#5E296F] font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              Case Studies
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-[#111114] leading-[0.9] tracking-tighter">
              Technology built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                for results.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-xs leading-relaxed border-l border-gray-200 pl-6">
            We adapt our engineering to the brand and business needs of our partners.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              {/* BRAND-SPECIFIC BROWSER FRAME */}
              <div className={`relative aspect-[16/10] rounded-[40px] mb-10 overflow-hidden bg-gradient-to-br ${project.gradient} p-1 shadow-2xl transition-all duration-700 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]`}>
                
                {/* Browser Window UI */}
                <div className="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 flex flex-col transform group-hover:scale-[1.02] transition-transform duration-700">
                  {/* Browser Bar */}
                  <div className="h-8 bg-gray-50 border-b flex items-center px-4 gap-2 shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                    </div>
                    <div className="mx-auto bg-gray-100 px-6 py-1 rounded-md flex items-center gap-2">
                      <Globe size={10} className="text-gray-400" />
                      <span className="text-[9px] text-gray-400 font-mono tracking-tight">{project.url.replace('https://', '')}</span>
                    </div>
                  </div>

                  {/* Screenshot Container */}
                  <div className="flex-1 overflow-hidden relative group-hover:cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-[4000ms] group-hover:translate-y-[-10%]"
                    />
                    {/* Brand Tint Overlay (only visible on hover) */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                </div>

                {/* Visit Site Button Overlay - Dynamic Color */}
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: project.themeColor }}
                  className="absolute bottom-10 right-10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-2xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 hover:scale-105"
                >
                  Explore Platform <ExternalLink size={18} />
                </a>
              </div>
              
              {/* Information Section */}
              <div className="px-4">
                <div className="flex items-center gap-4 mb-6">
                  <span className={`text-xs font-black uppercase tracking-[0.2em] ${project.accentTag}`}>
                    {project.industry}
                  </span>
                  <div className="h-px flex-1 bg-gray-100" />
                  <span className="flex items-center gap-2 text-xs font-bold text-gray-400">
                    <CheckCircle2 size={16} className={project.accentTag} /> {project.impact}
                  </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-[#111114] mb-6 transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-xl mb-10 leading-relaxed max-w-xl">
                  {project.challenge}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map(t => (
                    <span key={t} className="px-5 py-2 bg-[#F7F7F5] text-gray-500 text-[11px] font-black uppercase tracking-widest rounded-xl border border-gray-200 group-hover:border-gray-300 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Features Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Platform Core</span>
                      <span className="text-base font-bold text-[#111114]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};