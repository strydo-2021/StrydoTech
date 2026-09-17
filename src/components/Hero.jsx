import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Sparkles, ChevronRight } from 'lucide-react';

// Assets
import MainBody from '../images/d2.png';
import FloatingCard1 from '../images/d3.png';
import FloatingCard2 from '../images/Body (2).png';
import FloatingCard3 from '../images/d1.png';

const Hero = () => {
  const images = [MainBody, FloatingCard2, FloatingCard3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -60]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);

  // Framer Motion Variants for Staggered Reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative flex items-center pt-28 pb-20 px-6 lg:px-12 bg-[var(--surface)] overflow-hidden">

      {/* 
          BRANDED BACKGROUND SYSTEM 
          "The Kinetic Circuit" Base Architecture
      */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-[var(--surface-container-low)] -skew-x-12 translate-x-[20%]" />
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-[var(--primary)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] bg-[var(--secondary)]/5 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(var(--on-surface)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* LEFT CONTENT: EDITORIAL AUTHORITY */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-12"
        >
          {/* Branded Chip */}
          <motion.div variants={itemVariants} className="chip inline-flex items-center gap-3">
            <div className="relative">
              <Sparkles size={16} className="text-[var(--primary)]" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[var(--primary)] blur-sm rounded-full"
              />
            </div>
            <span>The High-Performance Standard</span>
          </motion.div>

          {/* EDITORIAL REFINEMENT: SERIF DISPLAY STACK */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-[8rem] lg:text-[9rem] font-bold text-[var(--on-surface)] flex flex-col serif-display tracking-tight leading-[0.9]">
              <motion.span variants={itemVariants}>Digital</motion.span>
              <motion.span variants={itemVariants} className="flex items-center gap-4">
                <span className="text-[var(--secondary)] italic font-bold hover:tracking-normal transition-all duration-700 cursor-default">Prestige.</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8rem" }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                  className="h-[4px] bg-gradient-to-r from-[var(--secondary)] to-transparent hidden xl:block"
                />
              </motion.span>
              <motion.span variants={itemVariants} className="text-gradient-signature relative group italic font-bold">
                Architected.
                <div className="absolute -bottom-2 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-1000 gradient-signature rounded-full" />
              </motion.span>
            </h1>
          </div>

          <motion.p variants={itemVariants} className="body-lg text-[var(--on-surface-variant)] max-w-lg leading-relaxed font-feature-ss01">
            Strydo is the <span className="font-bold text-[var(--on-surface)] border-b border-[var(--outline-variant)]">infrastructure partner for modern SaaS</span>. We build high-velocity digital platforms that fuse cinematic design with enterprise-grade scalability.
          </motion.p>

          {/* Branded Button System */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 pt-4">
            <style>{`
              .cssbuttons-io-button {
                background: var(--primary);
                color: white;
                font-family: 'Space Grotesk', sans-serif;
                padding: 0.35em;
                padding-left: 1.5em;
                font-size: 1.25rem;
                font-weight: 900;
                border-radius: 0.75rem;
                border: none;
                letter-spacing: 0.05em;
                display: flex;
                align-items: center;
                box-shadow: inset 0 0 1.6em -0.6em rgba(0,0,0,0.3);
                overflow: hidden;
                position: relative;
                height: 3.8rem;
                padding-right: 4.5rem;
                cursor: pointer;
                transition: all 0.3s;
              }

              .cssbuttons-io-button .icon {
                background: white;
                margin-left: 1em;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 3.1rem;
                width: 3.1rem;
                border-radius: 0.6rem;
                box-shadow: 0.1em 0.1em 0.6em 0.2em rgba(0,0,0,0.1);
                right: 0.35rem;
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              }

              .cssbuttons-io-button:hover .icon {
                width: calc(100% - 0.7rem);
              }

              .cssbuttons-io-button .icon svg {
                width: 1.4rem;
                height: 1.4rem;
                transition: transform 0.3s;
                color: var(--primary);
              }

              .cssbuttons-io-button:hover .icon svg {
                transform: translateX(0.1em);
              }

              .cssbuttons-io-button:active .icon {
                transform: scale(0.95);
              }
            `}</style>

            <button className="cssbuttons-io-button">
              Scale Your Product
              <div className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                </svg>
              </div>
            </button>

            <button className="btn-secondary flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-container-low)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)] group-hover:text-white">
                <Play size={18} fill="currentColor" />
              </div>
              <span>Platform Overview</span>
            </button>
          </motion.div>

          {/* Social Proof metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-10 pt-12">
            <div className="space-y-3 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] to-transparent opacity-30" />
              <div className="flex flex-col">
                <span className="technical-display text-[var(--on-surface)] text-3xl leading-none italic">100/100 LHR</span>
                <span className="label-md text-[var(--on-surface-variant)] opacity-50 mt-2">Performance Grade</span>
              </div>
              <div className="absolute left-[-3px] top-0 w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] animate-pulse" />
            </div>

            <div className="space-y-3 pl-8 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--secondary)] to-transparent opacity-30" />
              <div className="flex flex-col">
                <span className="technical-display text-[var(--on-surface)] text-3xl leading-none italic">PRO-GRADE</span>
                <span className="label-md text-[var(--on-surface-variant)] opacity-50 mt-2">Engineering Standard</span>
              </div>
              <div className="absolute left-[-3px] top-0 w-2 h-2 rounded-full bg-[var(--secondary)] shadow-[0_0_10px_var(--secondary)] animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL: THE ILLUMINATED STAGE */}
        <div className="lg:col-span-6 relative h-[500px] lg:h-[750px] flex items-center justify-center pt-20 lg:pt-0">
          <div className="absolute inset-0 bg-[var(--primary)]/5 blur-[150px] -z-10 rounded-none scale-90" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y1 }}
            className="relative z-20 w-full aspect-[1.4] bg-[var(--surface-container-lowest)] rounded-none shadow-[var(--shadow-ambient)] ghost-border overflow-hidden p-3"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                initial={{ opacity: 0, scale: 1.02, filter: "brightness(0.5)" }}
                animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "brightness(0.5)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover rounded-none"
              />
            </AnimatePresence>

            <motion.div
              key={`bar-${index}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.8, delay: 1.2, ease: "linear" }}
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] origin-left z-50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
            className="absolute -top-12 -right-12 z-30 w-[55%] aspect-[4/3] drop-shadow-[var(--shadow-ambient)]"
          >
            <div className="w-full h-full p-2 rounded-none glass-panel shadow-2xl relative overflow-hidden group">
              <img
                src={FloatingCard1}
                className="w-full h-full object-cover rounded-none brightness-105 transition-transform duration-1000 group-hover:scale-105"
                alt="Production Interface"
              />

              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
