import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, GraduationCap, HeartPulse, Factory, 
  ShoppingCart, Landmark, Home, Rocket, ArrowRight 
} from 'lucide-react';

const industries = [
  { 
    name: 'Startups', 
    icon: Rocket, 
    desc: 'Rapid prototyping & MVP development to scale your vision.',
    accent: 'from-[#EB6621] to-[#E4412B]' // Strydo Orange
  },
  { 
    name: 'Education', 
    icon: GraduationCap, 
    desc: 'LMS platforms & digital classrooms for modern learning.',
    accent: 'from-[#3B7B84] to-[#5E296F]' // Strydo Teal to Purple
  },
  { 
    name: 'Healthcare', 
    icon: HeartPulse, 
    desc: 'Secure patient portals and intelligent diagnostic tools.',
    accent: 'from-[#BC2D3F] to-[#742A5F]' // Strydo Red to Magenta
  },
  { 
    name: 'Construction', 
    icon: Building2, 
    desc: 'Custom ERPs for site management and labor tracking.',
    accent: 'from-[#5E296F] to-[#3B7B84]' // Strydo Purple to Teal
  },
  { 
    name: 'Manufacturing', 
    icon: Factory, 
    desc: 'Industrial automation and supply chain visibility.',
    accent: 'from-[#111114] to-[#5E296F]' // Dark to Purple
  },
  { 
    name: 'Retail', 
    icon: ShoppingCart, 
    desc: 'Omnichannel e-commerce and inventory synchronization.',
    accent: 'from-[#EB6621] to-[#BC2D3F]' // Orange to Red
  },
  { 
    name: 'Finance', 
    icon: Landmark, 
    desc: 'Secure FinTech solutions and automated bookkeeping.',
    accent: 'from-[#3B7B84] to-[#111114]' // Teal to Dark
  },
  { 
    name: 'Real Estate', 
    icon: Home, 
    desc: 'Property management systems and 3D listing portals.',
    accent: 'from-[#742A5F] to-[#EB6621]' // Magenta to Orange
  },
];

export const Industries = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F7F7F5] py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#5E296F 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#5E296F] mb-4"
            >
              Industry Focus
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-[#111114] leading-tight"
            >
              Technology built for <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5E296F] to-[#3B7B84]">
                your specific sector.
              </span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 text-lg max-w-sm border-l-2 border-strydo-purple/20 pl-6"
          >
            We don't just write code; we solve domain-specific challenges with surgical precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-[#5E296F]/10 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]"
              >
                {/* Background Glow on Hover */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${industry.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.accent} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111114] mb-3">{industry.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {industry.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-[#5E296F] transition-colors">
                    Sector 0{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-[#111114] group-hover:text-white group-hover:border-[#111114] transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-1 bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621] rounded-[40px]"
        >
          <div className="bg-white rounded-[38px] px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold text-[#111114]">Don't see your industry here?</h3>
            <button onClick={() => navigate('/contact')} className="bg-[#111114] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#5E296F] transition-all flex items-center gap-3">
              Discuss Custom Solutions <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};