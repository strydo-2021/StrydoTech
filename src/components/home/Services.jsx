import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  ArrowRight,
  Code2,
  Building2,
  Sparkles,
  Cloud,
  Palette,
  Settings2,
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'engineering',
    title: 'Digital Engineering',
    icon: Code2,
    accent: '#5E296F',
    description: 'Modern products built on solid, scalable foundations.',
    items: ['Website Development', 'Web Applications', 'Custom Software', 'SaaS', 'E-commerce'],
  },
  {
    id: 'business',
    title: 'Business Solutions',
    icon: Building2,
    accent: '#3B7B84',
    description: 'Enterprise systems that streamline how your business runs.',
    items: ['ERP', 'CRM', 'Business Automation', 'Custom Enterprise Software'],
  },
  {
    id: 'ai',
    title: 'AI & Emerging Tech',
    icon: Sparkles,
    accent: '#EB6621',
    description: 'Intelligent systems that think, learn, and act on your data.',
    items: ['AI/ML', 'Generative AI', 'Chatbots', 'Computer Vision', 'Blockchain'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    accent: '#3B7B84',
    description: 'Infrastructure that scales quietly in the background.',
    items: ['Cloud Solutions', 'DevOps', 'Deployment', 'Infrastructure'],
  },
  {
    id: 'experience',
    title: 'Digital Experience',
    icon: Palette,
    accent: '#BC2D3F',
    description: 'Interfaces and campaigns people actually enjoy using.',
    items: ['UI/UX', 'Digital Marketing', 'SEO'],
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    icon: Settings2,
    accent: '#5E296F',
    description: 'Guidance from architecture decisions to long-term support.',
    items: ['IT Consulting', 'Architecture', 'Maintenance & Support'],
  },
];

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const servicesRef = useRef(null);
  const activeIndexRef = useRef(0);
  const lastWheelTimeRef = useRef(0);
  const activeContent = serviceCategories.find((c) => c.id === activeCategory);
  const activeIndex = serviceCategories.findIndex((c) => c.id === activeCategory);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const section = servicesRef.current;
    if (!section) return undefined;

    const handleWheel = (event) => {
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const nextIndex = currentIndex + direction;
      const isWithinCategories = nextIndex >= 0 && nextIndex < serviceCategories.length;

      if (!isWithinCategories || event.deltaY === 0) return;

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 500) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      lastWheelTimeRef.current = now;
      activeIndexRef.current = nextIndex;
      setActiveCategory(serviceCategories[nextIndex].id);
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section ref={servicesRef} className="bg-[#08080C] py-24 md:py-32 relative z-10 text-white border-t border-white/5 overflow-hidden">
      {/* Ambient glow tied to the active category's accent — the whole section subtly recolors */}
      <motion.div
        className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full blur-[130px] pointer-events-none"
        animate={{ backgroundColor: `${activeContent.accent}22` }}
        transition={{ duration: 0.6 }}
      />

      {/* Faint dot grid for depth, consistent with About section */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#EB6621] mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions built around your business, not a template.
          </h2>
          <p className="text-gray-400 text-lg">
            We offer comprehensive technology solutions designed to solve complex problems and accelerate business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 min-h-[440px]">

          {/* Left Column: Category tabs */}
          <motion.div
            className="md:col-span-5 flex flex-col space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {serviceCategories.map((category, idx) => {
              const isActive = activeCategory === category.id;
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'relative text-left px-5 py-4 rounded-xl transition-colors duration-300 flex items-center gap-4 group overflow-hidden',
                    isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                  )}
                >
                  {/* Active background pill — slides between items instead of popping */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceTab"
                      className="absolute inset-0 bg-white/10 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                  {/* Left accent bar on active item */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full transition-all duration-300"
                    style={{
                      height: isActive ? '60%' : '0%',
                      backgroundColor: category.accent,
                    }}
                  />

                  <div
                    className={cn(
                      'relative z-10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300',
                      isActive ? '' : 'bg-white/5'
                    )}
                    style={{ backgroundColor: isActive ? `${category.accent}25` : undefined }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isActive ? category.accent : '#6b7280' }}
                    />
                  </div>

                  <span className="relative z-10 flex-1">
                    <span className="block text-lg font-medium leading-tight">{category.title}</span>
                    <span className="text-xs text-gray-500 hidden sm:block mt-0.5">
                      {String(idx + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}
                    </span>
                  </span>

                  <ArrowRight
                    className={cn(
                      'relative z-10 w-5 h-5 transition-all duration-300 flex-shrink-0',
                      isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                    )}
                    style={{ color: isActive ? category.accent : undefined }}
                  />
                </button>
              );
            })}
          </motion.div>

          {/* Right Column: Dynamic content */}
          <motion.div
            className="md:col-span-7 bg-white/[0.04] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Recolors smoothly with the active category, doesn't hard-cut */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[90px] pointer-events-none"
              animate={{ backgroundColor: `${activeContent.accent}30` }}
              transition={{ duration: 0.6 }}
            />

            {/* Faint node-path echo in the corner, ties back to brand/About section */}
            <svg className="absolute -bottom-6 -right-6 w-40 h-40 opacity-[0.08] pointer-events-none" viewBox="0 0 200 200" fill="none">
              <path d="M 20 160 C 20 120, 60 120, 90 100 C 120 80, 140 40, 180 20" stroke="white" strokeWidth="6" strokeLinecap="round" />
              <circle cx="20" cy="160" r="7" fill="white" />
              <circle cx="90" cy="100" r="7" fill="white" />
              <circle cx="180" cy="20" r="7" fill="white" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative z-10 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{activeContent.title}</h3>
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full border"
                    style={{ borderColor: `${activeContent.accent}50`, color: activeContent.accent }}
                  >
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="text-gray-400 mb-8">{activeContent.description}</p>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow"
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                >
                  {activeContent.items.map((item) => (
                    <motion.div
                      key={item}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-gray-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 rounded-xl px-4 py-3.5 transition-colors duration-200 cursor-default"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: activeContent.accent }}
                      />
                      <span className="text-[15px]">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center font-medium group transition-colors"
                    style={{ color: activeContent.accent }}
                  >
                    Explore {activeContent.title}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-xs text-gray-600 hidden sm:block">
                    {activeContent.items.length} services
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};