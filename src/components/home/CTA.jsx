import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

export const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-white z-10">
      
      {/* 1. PREMIUM BACKGROUND LAYER */}
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.4]" 
        style={{ backgroundImage: 'radial-gradient(#111114 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} 
      />
      
      {/* Soft Ambient Glows - Using Brand Colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B7B84]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EB6621]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F7F5] border border-gray-100 text-[#5E296F] mb-10 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Available for Q1 2025 Projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline with Full Brand Gradient */}
          <h2 className="text-6xl md:text-[100px] font-black text-[#111114] leading-[0.85] tracking-tighter mb-10">
            Have an idea? <br/>
            <span className="inline-block py-3 text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] via-[#BC2D3F] to-[#EB6621]">
              Let's build it.
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 mb-14 max-w-2xl mx-auto leading-relaxed font-medium italic">
            "We help businesses transform complex challenges into <br className='hidden md:block'/> practical, scalable technology solutions."
          </p>
          
          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => navigate('/contact')}
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto px-12 py-6 bg-[#111114] hover:bg-[#5E296F] text-white rounded-2xl font-black text-lg shadow-2xl shadow-gray-200 transition-all flex items-center justify-center gap-3"
              withArrow
            >
              Start a Project
            </Button>
            
            <button onClick={() => navigate('/contact')} className="w-full sm:w-auto px-12 py-6 border-2 border-gray-100 rounded-2xl font-black text-lg text-[#111114] hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
              <Calendar size={20} className="text-[#3B7B84]" />
              Book a Consultation
            </button>
          </div>
        </motion.div>

        {/* Floating Abstract Element */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4 text-gray-400">
             <div className="h-px w-12 bg-gray-200" />
             <Sparkles size={18} className="text-[#EB6621]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Built for Growth</span>
             <div className="h-px w-12 bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Side Decorative Lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-gray-100 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-gray-100 to-transparent" />
    </section>
  );
};