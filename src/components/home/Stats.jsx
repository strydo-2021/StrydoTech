import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Founded', value: '2012' },
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Expert Developers', value: '25+' },
  { label: 'Client Satisfaction', value: '100%' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#111114] mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest font-bold text-strydo-purple/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;