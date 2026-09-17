import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Reddy',
    role: 'MD, MM Constructions',
    content: "Strydo didn't just build us an ERP; they digitized our entire construction lifecycle. Their ability to handle complex inventory and labor logic is world-class.",
    accent: '#3B7B84' 
  },
  {
    name: 'Sarah Jenkins',
    role: 'Founder, JCI Global',
    content: "The marketplace platform Strydo engineered for us has become the backbone of our international networking. Fast, secure, and incredibly intuitive.",
    accent: '#5E296F' 
  },
  {
    name: 'Rajesh Kumar',
    role: 'CTO, FinTech Solutions',
    content: "Their 'Business-First' approach saved us months of development. They built a much more scalable AI module than we originally planned.",
    accent: '#EB6621' 
  },
  {
    name: 'Vikram Singh',
    role: 'Director, EduTech India',
    content: "Transforming our offline curriculum into a digital LMS was seamless with Strydo. Their project management is as good as their code.",
    accent: '#BC2D3F' 
  }
];

// Double the list for a perfect infinite loop
const doubleTestimonials = [...testimonials, ...testimonials];

export const Testimonials = () => {
  return (
    <section className="bg-[#F7F7F5] py-24 md:py-40 relative z-10 overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-strydo-purple/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#5E296F] font-bold uppercase tracking-[0.3em] text-xs mb-4"
            >
              <CheckCircle2 size={16} /> Verified Impact
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-[#111114] leading-[0.9] tracking-tighter">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                industry leaders.
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* INFINITE CAROUSEL TRACK */}
      {/* Added py-10 to prevent the floating quote icon from being clipped at the top */}
      <div className="relative mt-10 w-full overflow-hidden py-10">
        
        {/* Left & Right Fades - Reduced width slightly to show more of the "entering" card */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F7F7F5] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F7F7F5] to-transparent z-20 pointer-events-none" />

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-50%"] }} // PERCENTAGE BASED: ensures it moves exactly half the total width for a perfect loop
          transition={{
            duration: 35, // Speed of the loop
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {doubleTestimonials.map((t, idx) => (
            <div 
              key={idx}
              className="w-[380px] md:w-[450px] group relative bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 flex flex-col justify-between cursor-pointer"
            >
              {/* Floating Quote Icon - High Z-Index to stay on top */}
              <div 
                className="absolute -top-5 -right-5 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110 z-30"
                style={{ backgroundColor: t.accent }}
              >
                <Quote size={20} fill="currentColor" />
              </div>

              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#EB6621] text-[#EB6621]" />
                  ))}
                </div>

                <p className="text-lg text-[#111114] font-medium leading-relaxed mb-10 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-inner transition-transform duration-500 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, #111114)` }}
                >
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-[#111114] text-lg">{t.name}</h4>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              
              {/* Subtle Color Glow behind card on hover */}
              <div 
                className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: t.accent }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-10 border-t border-gray-100"
        >
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8">
            Delivering impact across industries
          </p>

          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-0">
            {[
              { label: 'Construction', color: '#3B7B84' },
              { label: 'Marketplace',  color: '#5E296F' },
              { label: 'FinTech',      color: '#EB6621' },
              { label: 'Healthcare',   color: '#BC2D3F' },
              { label: 'Retail',       color: '#742A5F' },
            ].map((item, i, arr) => (
              <React.Fragment key={item.label}>
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-md transition-all duration-400 cursor-default"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}60` }}
                  />
                  <span
                    className="font-black text-sm md:text-base uppercase tracking-widest text-[#111114]/30 group-hover:text-[#111114]/80 transition-colors duration-400"
                  >
                    {item.label}
                  </span>
                </motion.div>
                {i < arr.length - 1 && (
                  <span className="hidden md:block w-px h-5 bg-gray-200 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};