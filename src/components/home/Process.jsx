import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, FileText, PenTool, Code2, 
  ShieldCheck, Rocket, LifeBuoy 
} from 'lucide-react';

const steps = [
  { title: 'Discover', desc: 'Deep dive into business logic.', icon: Search, color: '#3B7B84' },
  { title: 'Define', desc: 'Architecture & requirements.', icon: FileText, color: '#4E5284' },
  { title: 'Design', desc: 'High-fidelity UI/UX systems.', icon: PenTool, color: '#5E296F' },
  { title: 'Develop', desc: 'Scalable, clean engineering.', icon: Code2, color: '#8B2B68' },
  { title: 'Test', desc: 'Rigorous QA & Security.', icon: ShieldCheck, color: '#BC2D3F' },
  { title: 'Deploy', desc: 'CI/CD & Cloud Launch.', icon: Rocket, color: '#D44A2D' },
  { title: 'Support', desc: 'Scaling & Maintenance.', icon: LifeBuoy, color: '#EB6621' },
];

export const Process = () => {
  return (
    <section className="bg-white py-24 md:py-40 relative z-10 overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15vw] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none uppercase">
        Execution
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#5E296F] font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
            >
              How we build
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-black text-[#111114] leading-[0.9] tracking-tighter">
              A systematic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                path to success.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm border-l border-gray-100 pl-6">
            We follow a disciplined engineering lifecycle to ensure every product is stable, secure, and scalable.
          </p>
        </div>

        {/* THE PIPELINE */}
        <div className="relative pt-10">
          
          {/* SVG Connector Path (Desktop) */}
          <svg className="hidden lg:block absolute top-[45px] left-0 w-full h-20 overflow-visible" fill="none">
            <motion.path
              d="M 50 40 H 1150"
              stroke="#F3F4F6"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 12"
            />
            <motion.path
              d="M 50 40 H 1150"
              stroke="url(#processGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B7B84" />
                <stop offset="50%" stopColor="#5E296F" />
                <stop offset="100%" stopColor="#EB6621" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* The Node */}
                  <div className="relative mb-8">
                    <div 
                      className="w-20 h-20 rounded-3xl bg-white border border-gray-100 shadow-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg] relative z-10"
                    >
                      <Icon className="w-8 h-8 transition-colors duration-500" style={{ color: step.color }} />
                    </div>
                    {/* Pulsing Glow behind icon */}
                    <div 
                      className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                    {/* Index Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#111114] text-white text-[10px] font-black flex items-center justify-center rounded-full shadow-lg z-20">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2">
                    <h4 className="text-xl font-bold text-[#111114] mb-2 transition-colors group-hover:text-[#5E296F]">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>

                  {/* Mobile-only connector */}
                  {idx !== steps.length - 1 && (
                    <div className="lg:hidden w-px h-12 bg-gradient-to-b from-gray-200 to-transparent my-4" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Methodology Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-col items-center"
        >
          <div className="px-6 py-3 bg-[#F7F7F5] rounded-full border border-gray-100 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Agile Framework Integrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};