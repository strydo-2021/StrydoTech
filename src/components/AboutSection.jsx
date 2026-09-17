import React, { useRef, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
} from 'framer-motion';
import {
  Target,
  Rocket,
  Code2,
  Megaphone,
  Globe,
  TrendingUp
} from 'lucide-react';

// Assets
import techCoreImg from '../images/IMAGE2.png';

const StrydoAboutSection = () => {
  const containerRef = useRef(null);

  // 1. ADVANCED MOUSE TRACKING (Kinetic Physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springSmooth = { damping: 40, stiffness: 100, mass: 1 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springSmooth);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springSmooth);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // 2. SCROLL VELOCITY PARALLAX
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const yParallaxDeep = useTransform(scrollSpring, [0, 1], [0, -200]);
  const yParallaxMid = useTransform(scrollSpring, [0, 1], [0, -100]);
  const yParallaxFore = useTransform(scrollSpring, [0, 1], [0, 50]);

  const isInView = useInView(containerRef, { once: false, margin: "-10%" });

  // Variants for Staggered Effects
  const textVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = useMemo(() => [
    {
      icon: <Target />,
      title: "Our Vision",
      desc: "To be the global benchmark for digital excellence, bridging the gap between visionary ideas and scalable software reality.",
      accent: "linear-gradient(135deg, #3B6BF5 0%, #00D1FF 100%)"
    },
    {
      icon: <Rocket />,
      title: "Our Mission",
      desc: "Empowering businesses with high-performance SaaS platforms and data-driven marketing to dominate their industries.",
      accent: "linear-gradient(135deg, #C026D3 0%, #FF0080 100%)"
    },
    {
      icon: <Code2 />,
      title: "SaaS Development",
      desc: "Architecting multi-tenant, cloud-native platforms engineered for high availability, security, and global enterprise scale.",
      accent: "linear-gradient(135deg, #006575 0%, #00A699 100%)"
    },
    {
      icon: <Megaphone />,
      title: "Digital Marketing",
      desc: "Strategic growth hacking and brand positioning that drives measurable ROI and domestic/global market authority.",
      accent: "linear-gradient(135deg, #FF4D4D 0%, #F9CB28 100%)"
    }
  ], []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[var(--surface)] pt-24 pb-32 overflow-hidden"
    >
      {/* ─── Background Elements ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[130%] h-[70%] bg-[var(--surface-container-low)] -rotate-1 skew-y-1 opacity-40" />
        <motion.div
          style={{ y: yParallaxDeep }}
          className="absolute top-1/3 left-[10%] w-[40vw] h-[40vw] bg-[var(--primary)] opacity-[0.05] blur-[180px] rounded-full"
        />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(var(--on-surface)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

        {/* ─── LEFT Visual ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-12 xl:col-span-5 order-2 lg:order-1 relative perspective-[2000px] py-16 lg:py-0">
          <motion.div
            style={{ rotateX, rotateY, y: yParallaxMid }}
            className="relative z-20 w-full aspect-square rounded-[4rem] bg-[var(--surface-container-lowest)] shadow-[var(--shadow-ambient)] ghost-border overflow-hidden p-3"
          >
            <div className="relative h-full w-full rounded-[3.6rem] overflow-hidden group">
              <img
                src={techCoreImg}
                className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                alt="Strydo Technologies Core"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--on-surface)]/30 to-transparent" />
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 z-10"
              />
            </div>
          </motion.div>

          {/* Float Label */}
          <motion.div
            style={{ y: yParallaxFore }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="absolute -bottom-8 lg:-bottom-12 right-0 lg:-right-8 z-30 px-10 py-8 rounded-[2.5rem] glass-panel shadow-2xl border border-white/20 animate-float cursor-pointer group"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <Globe className="w-10 h-10 text-[var(--primary)] mb-4 transition-transform group-hover:rotate-180 duration-1000" />
              <span className="technical-display text-4xl italic text-[var(--on-surface)] font-black tracking-tight">STRYDO</span>
              <span className="technical-display uppercase text-[var(--on-surface-variant)] opacity-50 text-[10px] tracking-[0.6em] mt-3">Established in India</span>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT Content ────────────────────────────────────────────────── */}
        <div className="lg:col-span-12 xl:col-span-7 order-1 lg:order-2 space-y-10">

          {/* Chip */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="chip inline-flex items-center gap-3 relative overflow-hidden group py-2"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="relative z-10 font-bold uppercase tracking-widest text-[10px]">Innovate. Scale. Succeed.</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 translate-x-[-100%]" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2
              variants={textVariants}
              className="text-5xl md:text-[5.5rem] font-black tracking-[-0.05em] leading-[0.85] text-[var(--on-surface)]"
            >
              Strydo <span className="text-gradient-signature italic text-glint">Technologies.</span>
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-2xl md:text-3xl font-medium text-[var(--on-surface-variant)] italic leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Engineering the future of digital excellence.
            </motion.p>
          </motion.div>

          {/* Body */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg md:text-xl text-[var(--on-surface-variant)] font-medium leading-relaxed max-w-2xl opacity-80"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Strydo Technologies is a premier service-driven powerhouse dedicated to building the digital foundations of tomorrow. We specialize in architecting complex{' '}
            <span className="font-bold text-[var(--on-surface)] border-b-2 border-[var(--primary)]/20">SaaS ecosystems</span>{' '}
            and orchestrating high-performance{' '}
            <span className="font-bold text-[var(--on-surface)] border-b-2 border-[var(--secondary)]/20">digital marketing</span>{' '}
            strategy, delivering the technical depth required for modern business dominance.
          </motion.p>

          {/* ─── Feature Cards Grid ────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 relative">

              {/* ── Scoped CSS for blur-siblings effect ── */}
              <style>{`
                .feature-grid {
                  perspective: 1500px;
                }

                /* Every card: smooth base transition */
                .feature-card {
                  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                              opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                  transform-style: preserve-3d;
                  will-change: transform, filter, opacity;
                  position: relative;
                  cursor: pointer;
                }

                /* When the GRID is hovered → blur + shrink ALL cards */
                .feature-grid:hover .feature-card {
                  filter: blur(4px);
                  transform: scale(0.96);
                  opacity: 0.45;
                }

                /* The card being hovered → restore + lift + tilt */
                .feature-grid .feature-card:hover {
                  filter: blur(0px) !important;
                  transform: scale(1.05) translateY(-14px) rotateX(10deg) rotateY(6deg) !important;
                  opacity: 1 !important;
                  z-index: 50;
                }

                /* Inner content pops forward on hover */
                .card-content-pop {
                  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                  transform-style: preserve-3d;
                }
                .feature-card:hover .card-content-pop {
                  transform: translateZ(40px);
                }

                /* Disable on touch devices */
                @media (hover: none) {
                  .feature-grid:hover .feature-card {
                    filter: none;
                    transform: none;
                    opacity: 1;
                  }
                }

                /* ── CTA Button ── */
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

              {features.map((f, i) => (
                /*
                 * ✅ Plain <div> — NOT motion.div
                 *    Framer Motion injects its own inline transform styles which
                 *    override the CSS :hover rules, breaking the blur effect.
                 *    Entrance animation is handled by the parent motion.div above.
                 */
                <div key={i} className="feature-card h-full">

                  {/* Kinetic Card Inner */}
                  <div className="relative h-full p-8 rounded-[2.5rem] bg-[var(--surface-container-lowest)]/50 border border-[var(--outline-variant)]/10 transition-colors duration-500 hover:bg-[var(--surface-container-lowest)] hover:shadow-2xl hover:shadow-[var(--primary)]/5 group overflow-hidden">

                    <div className="card-content-pop relative z-10 flex flex-col h-full">

                      {/* Icon row */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                          style={{ background: f.accent }}
                        >
                          {React.cloneElement(f.icon, { size: 28, strokeWidth: 2 })}
                        </div>
                        <TrendingUp className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-[var(--primary)] transition-all duration-500" />
                      </div>

                      {/* Text */}
                      <h4
                        className="text-2xl font-bold mb-4 text-[var(--on-surface)]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {f.title}
                      </h4>
                      <p
                        className="text-sm text-[var(--on-surface-variant)] leading-relaxed opacity-70 font-medium"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {f.desc}
                      </p>

                      {/* Corner accent */}
                      <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-br from-transparent to-[var(--primary)]/5 rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── CTA Row ──────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="pt-8 flex flex-col sm:flex-row items-center gap-8"
          >
            <button className="cssbuttons-io-button w-full sm:w-auto">
              Consult with Experts
              <div className="icon">
                <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>

            <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <div className="h-[1px] w-12 bg-[var(--on-surface)]" />
              <span className="text-xs uppercase tracking-[0.3em] font-black">Scroll to explore</span>
            </div>
          </motion.div>

        </div>{/* end RIGHT content */}
      </div>
    </section>
  );
};

export default StrydoAboutSection;