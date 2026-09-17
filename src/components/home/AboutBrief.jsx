import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutBrief = () => {
  return (
    <section id="about" className="py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-br from-strydo-purple to-strydo-teal rounded-[40px] overflow-hidden shadow-2xl relative z-10">
            {/* Abstract Tech Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <h2 className="text-white text-4xl font-bold text-center leading-tight">
                 Innovating with <br/> Purpose Since 2012
               </h2>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-strydo-orange/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-strydo-purple font-bold uppercase tracking-widest mb-4">Who We Are</h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#111114] leading-tight mb-8">
            We turn ideas into technology that works.
          </h2>
          <p className="text-lg text-black/60 mb-8 leading-relaxed">
            Strydo Technologies is a software solutions company focused on building modern digital products, intelligent applications, and scalable business solutions. We help startups and enterprises transform business challenges into reliable technology.
          </p>
          
          <div className="space-y-4 mb-10">
            {['Business-First Thinking', 'Modern Engineering Stack', 'Custom Scalable Solutions'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-strydo-teal" size={20} />
                <span className="font-bold text-[#111114]">{item}</span>
              </div>
            ))}
          </div>

          <button className="text-[#111114] font-bold text-lg border-b-2 border-strydo-orange pb-1 hover:text-strydo-orange transition-colors">
            Learn More About Strydo →
          </button>
        </motion.div>
      </div>
    </section> 
  );
};

export default AboutBrief;