import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Cpu, Cloud, Smartphone, 
  Layers, Zap, Globe, ShieldCheck 
} from 'lucide-react';

const techCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Globe,
    color: '#3B7B84', // Strydo Teal
    technologies: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind', 'Three.js'],
    description: 'Crafting immersive, high-performance user interfaces.'
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Layers,
    color: '#5E296F', // Strydo Purple
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Python', '.NET', 'Go'],
    description: 'Robust server-side logic and architectural integrity.'
  },
  {
    id: 'ai',
    name: 'AI & Data',
    icon: Cpu,
    color: '#EB6621', // Strydo Orange
    technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
    description: 'Intelligence that transforms data into decisions.'
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: '#BC2D3F', // Strydo Red
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    description: 'Scalable infrastructure that grows with your business.'
  },
  {
    id: 'database',
    name: 'Databases',
    icon: Database,
    color: '#3B7B84',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'ElasticSearch'],
    description: 'Secure, optimized, and lightning-fast data persistence.'
  },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: Smartphone,
    color: '#742A5F',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    description: 'Native and cross-platform mobile experiences.'
  }
];

export const Technology = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#08080C] py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px] transition-all duration-700 pointer-events-none"
        style={{ 
          background: hoveredIndex !== null ? techCategories[hoveredIndex].color : '#5E296F',
          left: hoveredIndex !== null ? `${(hoveredIndex % 3) * 30}%` : '50%',
          top: hoveredIndex !== null ? `${Math.floor(hoveredIndex / 3) * 30}%` : '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* LOGO-ACCURATE HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-[#EB6621] font-bold uppercase tracking-[0.3em] text-xs mb-6"
            >
              <Zap size={14} fill="#EB6621" /> Engineering Ecosystem
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Powered by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] via-[#BC2D3F] to-[#EB6621] bg-[length:200%_auto] animate-gradient-x">
                modern technology.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-sm border-l border-white/10 pl-6 mb-4">
            We build future-proof architectures using the world's most reliable tech stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-white/[0.03] border border-white/10 rounded-[40px] p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    <Icon size={30} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:border-white/20 group-hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};