import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

const CTA = () => {
   const ref = React.useRef(null);
   const isInView = useInView(ref, { once: false, margin: "-10%" });

   return (
      <section ref={ref} className="py-32 px-6 bg-[var(--surface-container-low)] relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
            <div className="absolute top-[20%] left-[-10%] w-[120%] h-[70%] bg-[var(--surface-container)] -rotate-3 skew-y-6" />
            <div className="absolute top-1/4 right-[10%] w-[25vw] h-[25vw] bg-[var(--primary)] opacity-[0.05] blur-[150px] rounded-full animate-pulse" />
         </div>

         <div className="max-w-[1400px] mx-auto w-full relative z-10 text-center space-y-16">
            <div className="space-y-8">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  className="chip inline-flex items-center gap-3 py-1.5 px-5"
               >
                  <Zap className="text-[var(--tertiary)] w-4 h-4 animate-pulse" />
                  <span className="relative z-10">Institutional Standard</span>
               </motion.div>

               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1.1] text-[var(--on-surface)]"
               >
                  Scale <span className="text-gradient-signature">With Intent.</span>
               </motion.h2>

               <p className="text-lg md:text-xl text-[var(--on-surface-variant)] leading-relaxed max-w-2xl mx-auto font-medium opacity-80">
                  The foundational architecture behind the world’s most ambitious digital products. Deploy the elite system used to outpace the market. <br/> <span className="font-extrabold text-[var(--primary)] italic uppercase tracking-tighter text-sm">Precision is everything.</span>
               </p>
            </div>

            {/* Action Container */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <div className="relative">
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
                    Initialize Your System
                    <div className="icon">
                      <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                      </svg>
                    </div>
                  </button>
               </div>
               <button className="btn-secondary group flex items-center gap-4 !py-4 !px-10">
                  Explore Architecture <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
               </button>
            </div>

            {/* Refined Capacity Meter */}
            <div className="max-w-xl mx-auto pt-12">
               <div className="flex justify-between items-center mb-3 px-1">
                  <span className="label-md opacity-40 text-[10px]">System Availability</span>
                  <span className="technical-display text-[var(--tertiary)] text-xs italic">Limited Partnership Slots</span>
               </div>
               <div className="h-1 w-full bg-[var(--outline-variant)]/20 rounded-full overflow-hidden">
                  <motion.div
                     initial={{ width: 0 }}
                     animate={isInView ? { width: "92%" } : {}}
                     transition={{ duration: 3, ease: "circOut" }}
                     className="h-full gradient-signature rounded-full"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default CTA;