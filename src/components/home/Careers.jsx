import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Code2, Database, 
  Palette, BrainCircuit, Globe, Zap 
} from 'lucide-react';

const openRoles = [
  { 
    title: 'Senior Frontend Engineer', 
    type: 'Full-time', 
    location: 'Remote / Hybrid',
    icon: Code2,
    accent: '#3B7B84' // Teal
  },
  { 
    title: 'Backend Lead (Java)', 
    type: 'Full-time', 
    location: 'Vellore / On-site',
    icon: Database,
    accent: '#5E296F' // Purple
  },
  { 
    title: 'UI/UX Product Designer', 
    type: 'Full-time', 
    location: 'Remote',
    icon: Palette,
    accent: '#BC2D3F' // Red
  },
  { 
    title: 'AI/ML Specialist', 
    type: 'Full-time', 
    location: 'Hybrid',
    icon: BrainCircuit,
    accent: '#EB6621' // Orange
  }
];

export const Careers = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#08080C] py-24 md:py-40 relative z-10 overflow-hidden border-t border-white/5">
      
      {/* Background brand glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5E296F]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: COMPELLING CONTENT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 text-[#3B7B84] font-bold uppercase tracking-[0.4em] text-xs mb-6">
                <Globe size={14} /> Join the Global Core
              </div>
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter mb-10">
                Build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                  future.
                </span>
              </h2>
              <p className="text-gray-400 text-xl max-w-lg leading-relaxed mb-10">
                We are looking for obsessed engineers and creative thinkers to help us build the next generation of intelligent business platforms.
              </p>

              {/* Company Culture Stats */}
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
                <div>
                  <p className="text-3xl font-black text-white tracking-tight">AI-First</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Methodology</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white tracking-tight">100%</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Ownership</p>
                </div>
              </div>

              <motion.button 
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 px-10 py-5 bg-white text-[#111114] font-black rounded-2xl flex items-center gap-4 hover:bg-[#3B7B84] hover:text-white transition-all shadow-2xl"
              >
                Learn Our Culture <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: BENTO JOB GRID */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {openRoles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    onClick={() => navigate('/careers')}
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative bg-white/[0.03] border border-white/5 p-8 rounded-[40px] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[240px] cursor-pointer"
                  >
                    {/* Hover Glow */}
                    <div 
                      className="absolute -right-10 -top-10 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity blur-3xl rounded-full"
                      style={{ backgroundColor: role.accent }}
                    />

                    <div>
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${role.accent}20`, color: role.accent }}
                      >
                        <Icon size={24} />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500">
                        {role.title}
                      </h4>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                        {role.type} • {role.location}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                        Apply Now
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#111114] transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom talent-pool indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-10 p-8 bg-gradient-to-br from-[#5E296F]/10 to-transparent rounded-[40px] border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#08080C] bg-gray-800" />
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-400">Join 25+ innovators already at Strydo</p>
              </div>
              <Zap size={20} className="text-[#EB6621] animate-pulse" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};