import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Smartphone,
  Zap,
  WifiOff,
  BellRing,
  Fingerprint,
  Cpu,
  ChevronRight,
  MessageSquare,
  ShoppingCart,
  Users2,
  UtensilsCrossed,
  MessageCircle,
  Sparkles,
  MousePointer2,
  Heart
} from 'lucide-react';

import m1 from '../images/m1.png';


/**
 * Strydo Technologies - Mobile App Experience (Enhanced)
 * Theme: Light (Teal #2997AC, Purple #6C3483, Orange #F15A24)
 */

const MobileExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const appCategories = [
    {
      title: "Intelligent Chatbots",
      desc: "AI-driven conversational agents for 24/7 customer support and automated lead gen.",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "#2997AC"
    },
    {
      title: "Messaging & Collab",
      desc: "Real-time enterprise communication tools with encrypted file sharing and threads.",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "#6C3483"
    },
    {
      title: "Next-Gen E-commerce",
      desc: "High-conversion M-commerce platforms with one-tap checkout and AR previews.",
      icon: <ShoppingCart className="w-5 h-5" />,
      color: "#F15A24"
    },
    {
      title: "Niche Social Media",
      desc: "Community-driven SaaS platforms focused on vertical networking and engagement.",
      icon: <Users2 className="w-5 h-5" />,
      color: "#2997AC"
    },
    {
      title: "Restaurant & Hospitality",
      desc: "Seamless ordering, reservation systems, and real-time inventory management.",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      color: "#F15A24"
    },
    {
      title: "Service Marketplaces",
      desc: "On-demand booking apps connecting providers with customers instantly.",
      icon: <Sparkles className="w-5 h-5" />,
      color: "#6C3483"
    }
  ];

  const userPovHighlights = [
    {
      label: "Zero Friction",
      text: "Users enjoy 100ms response times. No loading spinners—just instant action.",
      icon: <MousePointer2 size={16} />
    },
    {
      label: "Native Delight",
      text: "Haptic feedback and smooth gestures make the app feel like a natural extension of the OS.",
      icon: <Heart size={16} />
    },
    {
      label: "Geo-Awareness",
      text: "Contextual intelligence that delivers the right information based on where the user is.",
      icon: <Zap size={16} />
    }
  ];

  return (
    <section ref={containerRef} className="relative py-24 lg:py-40 bg-[#FDFDFD] overflow-hidden font-['Inter']">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2997AC]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- HERO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="inline-block px-4 py-1.5 rounded-full bg-[#2997AC]/10 text-[#2997AC] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              The Mobile Frontier
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold font-['Manrope'] text-[#1A1C1E] leading-tight mb-8">
              Mobile App <span className="text-[#2997AC]">Experience</span>
            </motion.h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We extend your platform into smooth, high-performance mobile apps that keep users engaged on the go. By bridging the gap between web functionality and native mobility, we ensure your product is always within reach.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#6C3483]/10 flex items-center justify-center text-[#6C3483]"><Cpu size={20} /></div>
                <p className="text-sm text-gray-600"><span className="font-bold text-[#1A1C1E]">60FPS Native UI:</span> Silky smooth transitions using GPU-accelerated rendering.</p>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#F15A24]/10 flex items-center justify-center text-[#F15A24]"><WifiOff size={20} /></div>
                <p className="text-sm text-gray-600"><span className="font-bold text-[#1A1C1E]">Offline First:</span> Robust data persistence even in low-connectivity zones.</p>
              </div>
            </div>
          </div>

          {/* Device Visual */}
          <div className="lg:col-span-7 flex justify-center">
            <motion.div 
              style={{ y: phoneY, rotate }} 
              className="relative w-[300px] h-[610px] bg-[#0A0A0B] rounded-[3.5rem] border-[10px] border-[#1C1C1E] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group outline outline-1 outline-white/10"
            >
              {/* iPhone Side Buttons */}
              <div className="absolute left-[-11px] top-24 w-[3px] h-8 bg-[#2C2C2E] rounded-r-sm z-0" /> {/* Action Button */}
              <div className="absolute left-[-11px] top-36 w-[3px] h-14 bg-[#2C2C2E] rounded-r-sm z-0" /> {/* Volume Up */}
              <div className="absolute left-[-11px] top-52 w-[3px] h-14 bg-[#2C2C2E] rounded-r-sm z-0" /> {/* Volume Down */}
              <div className="absolute right-[-11px] top-40 w-[3px] h-20 bg-[#2C2C2E] rounded-l-sm z-0" /> {/* Power Button */}

              {/* Screen Content */}
              <div className="absolute inset-0 w-full h-full bg-black rounded-[2.8rem] overflow-hidden">
                <img
                  src={m1}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="iPhone 15 Interface"
                />
                
                {/* Dynamic Island */}
                <motion.div 
                  initial={{ width: 80 }}
                  whileHover={{ width: 110 }}
                  className="absolute top-3 left-1/2 -translate-x-1/2 h-7 bg-black rounded-full z-40 flex items-center justify-between px-3 gap-2 border border-white/5"
                >
                   <div className="w-2 h-2 rounded-full bg-[#1A1C1E]" />
                   <div className="flex-grow" />
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20" />
                </motion.div>

                {/* Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                
                {/* Inner Shadow */}
                <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
              </div>
              
              {/* Charging Port Notch hint */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-white/10 rounded-full z-30" />
            </motion.div>
          </div>
        </div>

        <div className="relative mb-32">
          {/* 🔥 Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#2997AC]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#6C3483]/10 blur-[120px] rounded-full" />
          </div>

          {/* Heading */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#1A1C1E] mb-6 tracking-tight">
              The SaaS Mobile Ecosystem
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              From conversational AI to hyper-local commerce, we build the specialized tools your industry demands.
            </p>
          </div>

          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 group/container"
          >
            {appCategories.map((app, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative transition-all duration-500 group-hover/container:blur-[6px] group-hover/container:opacity-60 group-hover/container:scale-[0.9] hover:!blur-none hover:!opacity-100 hover:!scale-110 z-10 hover:z-20"
              >
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${app.color}, transparent)` }} />

                {/* Card */}
                <div className="relative p-8 rounded-[2rem] bg-white/80 backdrop-blur-xl border border-gray-200 group-hover:border-transparent shadow-sm group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden">

                  {/* Folder Top Effect */}
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.15 }}
                    className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center text-white shadow-lg transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${app.color}, #111)`
                    }}
                  >
                    {app.icon}
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-[#1A1C1E] mb-3 tracking-tight">
                    {app.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {app.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-4"
                    style={{ color: app.color }}>
                    <span>Explore</span>
                    <motion.span whileHover={{ x: 4 }}>
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        🎨

        {/* --- USER POV: THE "FEEL GOOD" FACTOR --- */}
        <div className="bg-[#1A1C1E] rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden">
          {/* Subtle light leak */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F15A24]/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h3 className="text-white text-3xl md:text-5xl font-extrabold font-['Manrope'] leading-tight mb-8">
                Designed to be <br />
                <span className="text-[#2997AC]">User-Obsessed</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                We don't just build apps; we engineer "joy." In the mobile world, the user's perception of quality is tied to responsiveness, intuitiveness, and emotional resonance.
              </p>

              <div className="space-y-6">
                {userPovHighlights.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#2997AC] bg-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-bold mb-1">{item.label}</h5>
                      <p className="text-sm text-gray-500 max-w-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Representation of User Delight */}
            <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex flex-col justify-center items-center text-center">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[#F15A24] mb-6">
                  <Heart size={80} fill="#F15A24" fillOpacity="0.2" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-2">The "Stickiness" Factor</h4>
                <p className="text-sm text-gray-400">By prioritizing the user's emotional experience, we increase retention rates by up to 45%.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center">
          <button className="group relative flex items-center justify-center gap-4 px-12 py-6 border-4 border-transparent bg-transparent rounded-full font-bold text-[#2997AC] shadow-[0_0_0_2px_#2997AC] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-white hover:rounded-2xl active:scale-95 mx-auto">
            {/* Arriving Arrow (comes from left) */}
            <ChevronRight 
              size={24} 
              className="absolute left-[-25%] z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-6 text-white" 
            />
            
            {/* Button Text */}
            <span className="relative z-20 text-lg -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-4">
              Start Your Mobile Journey
            </span>

            {/* Expanding Background Circle */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2997AC] rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[150%] group-hover:h-[500%] group-hover:opacity-100 z-10" />

            {/* Exiting Arrow (moves to right) */}
            <ChevronRight 
              size={24} 
              className="absolute right-6 z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] text-[#2997AC] group-hover:text-white" 
            />
          </button>
          <p className="mt-8 text-sm text-gray-400 font-medium italic">Cross-platform excellence, delivered by Strydo Technologies.</p>
        </div>

      </div>
    </section>
  );
};

export default MobileExperience;