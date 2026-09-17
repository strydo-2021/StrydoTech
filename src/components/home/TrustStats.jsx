import React from 'react';
import { motion } from 'framer-motion';

export const TrustStats = () => {
  const stats = [
    { value: '2012', label: 'Founded' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '20+', label: 'Technologies' }
  ];

  return (
    <section className="bg-strydo-dark border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <p className="text-strydo-orange font-semibold mb-2">Since 2012</p>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Technology <span className="text-gray-500">•</span> Innovation <span className="text-gray-500">•</span> Reliability
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
