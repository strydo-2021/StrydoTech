import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';

const articles = [
  {
    category: 'Strategy',
    title: 'The ROI of Custom ERP: Why MM Constructions Digitized Their Core',
    excerpt: 'Analyzing how tailored enterprise resource planning drives 40% more efficiency in site management.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    author: 'Strydo Engineering',
    time: '8 min read'
  },
  {
    category: 'Intelligence',
    title: 'Generative AI: Moving From Hype to Scalable Business Logic',
    excerpt: 'A technical deep-dive into integrating LLMs within secure organizational cloud environments.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    author: 'Data Science Team',
    time: '6 min read'
  },
  {
    category: 'Innovation',
    title: 'Modernizing Legacy Systems Without Disrupting Operations',
    excerpt: 'The strategic roadmap for transitioning from disconnected software to a unified digital ecosystem.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    author: 'Solution Architects',
    time: '10 min read'
  }
];

export const Blog = () => {
  return (
    <section className="bg-white py-24 md:py-40 relative z-10 overflow-hidden border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Professional Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#5E296F] font-black uppercase tracking-[0.4em] text-xs mb-6"
            >
              Intelligence & Insights
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-[#111114] leading-[0.85] tracking-tighter">
              The Strydo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                Perspective.
              </span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-start gap-4"
          >
            <p className="text-gray-400 text-lg max-w-xs italic leading-snug">
              "We share our expertise to help businesses navigate the complexities of the digital age."
            </p>
            <a href="/blog" className="group flex items-center gap-3 font-bold text-[#111114] text-lg">
              Knowledge Center <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#EB6621]" />
            </a>
          </motion.div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image with brand-colored corner accent */}
              <div className="relative aspect-[3/2] rounded-[30px] overflow-hidden mb-8 shadow-xl shadow-gray-200/50">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                
                {/* Dynamic Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#111114] border border-white/20">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><User size={12} className="text-[#3B7B84]" /> {article.author}</span>
                  <span className="flex items-center gap-2"><Clock size={12} className="text-[#EB6621]" /> {article.time}</span>
                </div>

                <h3 className="text-2xl font-bold text-[#111114] leading-tight group-hover:text-[#5E296F] transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#111114] group-hover:text-[#EB6621] transition-all">
                  Read Case Study <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Strategic CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-1 bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621] rounded-[40px]"
        >
          <div className="bg-[#111114] rounded-[38px] px-10 py-16 text-center">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to engineer your future?</h3>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Our solution architects are ready to discuss your business challenges and map out a technical roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-white text-[#111114] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#3B7B84] hover:text-white transition-all shadow-xl">
                 Schedule Consultation
               </button>
               <button className="border-2 border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:border-white transition-all">
                 Browse Services
               </button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};