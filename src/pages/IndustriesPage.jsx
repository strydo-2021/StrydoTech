
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  Home,
  Rocket,
  ArrowRight,
  HardHat,
  Laptop,
  ShieldCheck,
  Briefcase,
  Zap,
  Check,
  Sparkles,
  BarChart3,
  Layers3,
  Globe2,
  Cpu,
  ChevronDown,
  Radio 
} from 'lucide-react';


// ============================================================
// INDUSTRIES
// ============================================================

const industrySectors = [
  {
    name: 'Construction & Infrastructure',
    icon: HardHat,
    tagline: 'MM Constructions ERP Case Study',
    desc:
      'Digitizing the physical world. We build heavy-duty ERPs that manage labor, inventory, billing, and project lifecycles with precision.',
    features: [
      'Resource Management',
      'Inventory Tracking',
      'Automated Billing'
    ],
    accent: '#3B7B84',
    soft: '#E8F3F4',
    number: '01'
  },


  {
    name: 'Startups & Scaleups',
    icon: Rocket,
    tagline: 'From MVP to IPO',
    desc:
      'Velocity is everything. We partner with founders to build scalable MVPs and high-performance SaaS platforms designed for growth.',
    features: [
      'Rapid Prototyping',
      'Cloud Scaling',
      'API Architecture'
    ],
    accent: '#EB6621',
    soft: '#FFF0E7',
    number: '02'
  },

  {
    name: 'Education & E-Learning',
    icon: GraduationCap,
    tagline: 'Intelligent Learning Systems',
    desc:
      'We develop LMS platforms and interactive portals that make digital education seamless, engaging, and measurable.',
    features: [
      'Student Analytics',
      'Content Delivery',
      'Exam Engines'
    ],
    accent: '#5E296F',
    soft: '#F3EAF6',
    number: '03'
  },

  {
    name: 'Healthcare & Biotech',
    icon: HeartPulse,
    tagline: 'Secure & Compliant Tech',
    desc:
      'Secure data systems and intelligent digital tools designed for healthcare workflows where reliability and privacy matter.',
    features: [
      'Patient Portals',
      'Data Security',
      'AI Diagnostics'
    ],
    accent: '#BC2D3F',
    soft: '#FBEAEC',
    number: '04'
  },

  {
    name: 'Manufacturing & Industry 4.0',
    icon: Factory,
    tagline: 'Operational Intelligence',
    desc:
      'Eliminating production silos through intelligent supply-chain tracking, automation, and connected industrial systems.',
    features: [
      'Supply Chain Visibility',
      'IoT Integration',
      'Asset Management'
    ],
    accent: '#111114',
    soft: '#ECEBE8',
    number: '05'
  },

  {
    name: 'FinTech & Finance',
    icon: Landmark,
    tagline: 'The Future of Money',
    desc:
      'Secure, fast, and transparent technology for complex transactions, financial workflows, and automated reporting.',
    features: [
      'Secure Payments',
      'Ledger Systems',
      'Compliance Logic'
    ],
    accent: '#3B7B84',
    soft: '#E8F3F4',
    number: '06'
  },

  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    tagline: 'Omnichannel Commerce',
    desc:
      'High-conversion B2B and B2C commerce experiences built for speed, inventory synchronization, and scale.',
    features: [
      'Custom Checkout',
      'Inventory Sync',
      'Global SEO'
    ],
    accent: '#742A5F',
    soft: '#F4EAF1',
    number: '07'
  },

  {
    name: 'Real Estate & PropTech',
    icon: Home,
    tagline: 'Digital Asset Management',
    desc:
      'Modern property platforms combining listing experiences, automated documents, CRM workflows, and digital asset management.',
    features: [
      'Virtual Tours',
      'Lease Automation',
      'CRM Integration'
    ],
    accent: '#EB6621',
    soft: '#FFF0E7',
    number: '08'
  },

  {
    name: 'IoT & Smart Infrastructure',
    icon: Radio, // Import Radio from lucide-react
    tagline: 'Connected Intelligence',
    desc: 'Bridging the physical and digital gap. We engineer IoT ecosystems that collect real-time data, automate hardware, and provide actionable insights.',
    features: [
      'Sensor Integration',
      'Real-time Monitoring',
      'Edge Computing'
    ],
    accent: '#3B7B84',
    soft: '#E8F3F4',
    number: '09'
  },
];


// ============================================================
// INDUSTRY PRINCIPLES
// ============================================================

const principles = [
  {
    icon: Layers3,
    title: 'Domain-first thinking',
    desc: 'We understand the workflow before we write the software.',
    accent: '#3B7B84',
    soft: '#E8F3F4'
  },
  {
    icon: Cpu,
    title: 'Technology that fits',
    desc: 'The right architecture for your scale, users, and business reality.',
    accent: '#5E296F',
    soft: '#F3EAF6'
  },
  {
    icon: BarChart3,
    title: 'Built for measurable impact',
    desc: 'Every system is designed around efficiency, visibility, and growth.',
    accent: '#EB6621',
    soft: '#FFF0E7'
  },
  {
    icon: Globe2,
    title: 'Ready to scale',
    desc: 'From local operations to digital products serving users everywhere.',
    accent: '#BC2D3F',
    soft: '#FBEAEC'
  }
];


// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};


// ============================================================
// INDUSTRIES PAGE
// ============================================================

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#111114] overflow-hidden">

      <Navbar />


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative pt-40 md:pt-52 pb-28 md:pb-40 overflow-hidden">

        {/* Technical grid */}

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(#111114 1px, transparent 1px),
              linear-gradient(90deg, #111114 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px'
          }}
        />


        {/* Top-left glow */}

        <div
          className="
            absolute
            -top-64
            -left-64
            w-[750px]
            h-[750px]
            rounded-full
            blur-[180px]
            pointer-events-none
          "
          style={{
            background: 'rgba(59,123,132,0.11)'
          }}
        />


        {/* Right glow */}

        <div
          className="
            absolute
            top-20
            -right-64
            w-[750px]
            h-[750px]
            rounded-full
            blur-[190px]
            pointer-events-none
          "
          style={{
            background: 'rgba(94,41,111,0.10)'
          }}
        />


        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Eyebrow */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-10"
          >

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2.5
                rounded-full
                bg-white/70
                backdrop-blur-md
                border
                border-[#111114]/[0.08]
                shadow-sm
              "
            >

              <Laptop
                size={14}
                className="text-[#5E296F]"
              />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#111114]/45">
                Domain expertise
              </span>

            </div>

          </motion.div>


          {/* Heading */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >

            <h1
              className="
                text-6xl
                md:text-8xl
                xl:text-[125px]
                font-black
                leading-[0.79]
                tracking-tighter
                max-w-6xl
              "
            >

              Technology

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#3B7B84]
                  via-[#5E296F]
                  to-[#EB6621]
                "
              >
                built for you.
              </span>

            </h1>

          </motion.div>


          {/* Description + side detail */}

          <div className="grid lg:grid-cols-[1fr_300px] gap-12 mt-14 items-end">

            <motion.p
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="
                text-xl
                md:text-2xl
                xl:text-3xl
                text-[#111114]/40
                max-w-4xl
                leading-relaxed
                font-medium
                tracking-tight
              "
            >
              We don't believe in generic solutions. We build
              <span className="text-[#111114]"> industry-specific logic </span>
              around the actual workflows, challenges, and opportunities
              inside your business.
            </motion.p>


            <motion.div
              initial={{
                opacity: 0,
                x: 25
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.35
              }}
              className="
                hidden
                lg:block
                border-l
                border-[#111114]/10
                pl-7
              "
            >

              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#111114]/30 mb-3">
                Our approach
              </p>

              <p className="font-black text-lg leading-tight">
                Understand the domain.
                <br />
                Engineer the solution.
              </p>

            </motion.div>

          </div>


          {/* Sector navigation */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.5
            }}
            className="
              mt-16
              flex
              flex-wrap
              gap-2
              max-w-5xl
            "
          >

            {industrySectors.map((sector) => (

              <a
                key={sector.name}
                href={`#${sector.number}`}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  bg-white/60
                  border
                  border-[#111114]/[0.07]
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.13em]
                  text-[#111114]/35
                  hover:bg-white
                  hover:text-[#111114]
                  transition-all
                  duration-300
                "
              >

                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: sector.accent
                  }}
                />

                {sector.name}

              </a>

            ))}

          </motion.div>


          {/* Scroll indicator */}

          <div className="mt-16 flex items-center gap-3 text-[#111114]/25">

            <ChevronDown size={16} />

            <span className="text-[9px] font-black uppercase tracking-[0.25em]">
              Explore our sectors
            </span>

          </div>

        </div>

      </section>

      {/* ======================================================
    IoT INTELLIGENCE SPOTLIGHT (The "Target" Visual)
====================================================== */}

      <section className="py-28 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Visual Side: The IoT Target */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Background Waves (Signal Ripples) */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.3, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: ring * 1.2
                    }}
                    className="absolute w-40 h-40 border-2 border-[#EB6621] rounded-full"
                  />
                ))}
              </div>

              {/* The Central Hub (The Target) */}
              <div className="relative w-80 h-80 bg-[#F7F7F5] rounded-full border border-gray-100 shadow-inner flex items-center justify-center">
                {/* Connecting Nodes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 p-4"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#3B7B84] rounded-full shadow-[0_0_15px_#3B7B84]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#5E296F] rounded-full shadow-[0_0_15px_#5E296F]" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#EB6621] rounded-full shadow-[0_0_15px_#EB6621]" />
                </motion.div>

                {/* Central Core */}
                <div className="w-32 h-32 bg-white rounded-[40px] shadow-2xl flex items-center justify-center z-10 border border-gray-50">
                  <Cpu className="text-[#111114]" size={48} />
                </div>

                {/* Floating Data Labels */}
                <div className="absolute -top-4 right-0 bg-[#111114] text-white px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest">Live Feed</div>
                <div className="absolute bottom-10 -left-10 bg-[#3B7B84] text-white px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest">Sensor Active</div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#EB6621] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Emerging Tech</span>
                <h2 className="text-5xl md:text-7xl font-black text-[#111114] leading-[0.9] tracking-tighter mb-8 uppercase">
                  IoT & Smart <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] to-[#EB6621]">Systems.</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-10">
                  We build the connective tissue for Industry 4.0. From smart warehouses to connected building management, our IoT solutions turn raw data into operational power.
                </p>

                <div className="space-y-6">
                  {[
                    { t: 'Edge Processing', d: 'Intelligence that lives on the device for zero latency.' },
                    { t: 'Cloud Sync', d: 'Global data aggregation with high-fidelity analytics.' },
                    { t: 'Hardware-Agnostic', d: 'Seamless integration with existing industrial machinery.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-1.5 h-1.5 bg-[#EB6621] rounded-full mt-2 shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#111114]">{item.t}</h4>
                        <p className="text-sm text-gray-400">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* ======================================================
          INDUSTRY DIRECTORY
      ====================================================== */}

      <section
        id="industries"
        className="relative py-28 md:py-40 bg-[#EAE7E1]"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-12">


          {/* Section header */}

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

            <div>

              <span className="text-[#EB6621] text-[10px] font-black uppercase tracking-[0.35em]">
                The sector directory
              </span>

              <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
                One mindset.
                <br />
                <span className="text-[#111114]/25">
                  Different worlds.
                </span>
              </h2>

            </div>


            <div className="lg:max-w-sm">

              <p className="text-[#111114]/40 text-base md:text-lg leading-relaxed">
                From physical infrastructure to financial platforms,
                we adapt our technology to the language of your industry.
              </p>

            </div>

          </div>


          {/* Industry cards */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {industrySectors.map((sector, idx) => {

              const Icon = sector.icon;

              return (
                <motion.article
                  id={sector.number}
                  key={sector.name}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-100px'
                  }}
                  transition={{
                    duration: 0.7,
                    delay: idx % 2 * 0.08
                  }}
                  className="
                    group
                    relative
                    bg-[#F9F8F5]
                    rounded-[34px]
                    md:rounded-[42px]
                    p-7
                    md:p-10
                    overflow-hidden
                    border
                    border-[#111114]/[0.06]
                    hover:bg-white
                    hover:-translate-y-1
                    hover:shadow-[0_30px_80px_rgba(17,17,20,0.09)]
                    transition-all
                    duration-600
                  "
                >

                  {/* Accent glow */}

                  <div
                    className="
                      absolute
                      -top-24
                      -right-24
                      w-64
                      h-64
                      rounded-full
                      blur-[70px]
                      opacity-0
                      group-hover:opacity-20
                      transition-opacity
                      duration-700
                      pointer-events-none
                    "
                    style={{
                      backgroundColor: sector.accent
                    }}
                  />


                  {/* Card top */}

                  <div className="relative z-10 flex items-start justify-between mb-12">

                    <div
                      className="
                        w-16
                        h-16
                        md:w-[72px]
                        md:h-[72px]
                        rounded-[22px]
                        flex
                        items-center
                        justify-center
                        text-white
                        group-hover:scale-105
                        group-hover:rotate-2
                        transition-all
                        duration-500
                      "
                      style={{
                        backgroundColor: sector.accent,
                        boxShadow: `0 15px 35px ${sector.accent}25`
                      }}
                    >
                      <Icon size={28} />
                    </div>


                    <span
                      className="
                        text-5xl
                        md:text-6xl
                        font-black
                        tracking-tighter
                        opacity-[0.06]
                      "
                    >
                      {sector.number}
                    </span>

                  </div>


                  {/* Content */}

                  <div className="relative z-10">

                    <p
                      className="
                        text-[9px]
                        md:text-[10px]
                        font-black
                        uppercase
                        tracking-[0.28em]
                        mb-4
                      "
                      style={{
                        color: sector.accent
                      }}
                    >
                      {sector.tagline}
                    </p>


                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-5">
                      {sector.name}
                    </h3>


                    <p className="text-[#111114]/45 text-base md:text-lg leading-relaxed max-w-xl">
                      {sector.desc}
                    </p>


                    {/* Features */}

                    <div className="flex flex-wrap gap-2 mt-8">

                      {sector.features.map((feature) => (

                        <span
                          key={feature}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            px-3.5
                            py-2.5
                            rounded-full
                            bg-white
                            border
                            border-[#111114]/[0.06]
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.12em]
                            text-[#111114]/35
                          "
                        >

                          <Check
                            size={11}
                            style={{
                              color: sector.accent
                            }}
                          />

                          {feature}

                        </span>

                      ))}

                    </div>


                    {/* Bottom */}

                    <div
                      className="
                        mt-10
                        pt-6
                        border-t
                        border-[#111114]/[0.07]
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.2em]
                        "
                        style={{
                          color: sector.accent
                        }}
                      >
                        Explore solution
                      </span>


                      <div
                        className="
                          w-10
                          h-10
                          rounded-full
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:translate-x-1
                        "
                        style={{
                          backgroundColor: sector.soft,
                          color: sector.accent
                        }}
                      >
                        <ArrowRight size={16} />

                      </div>

                    </div>

                  </div>

                </motion.article>
              );

            })}

          </div>

        </div>

      </section>


      {/* ======================================================
          HOW WE THINK
      ====================================================== */}

      <section className="relative py-28 md:py-40 bg-[#F3F1EC] overflow-hidden">

        {/* Decorative rings */}

        <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#111114]/[0.04]" />

        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#111114]/[0.04]" />


        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 items-center">


            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7
              }}
            >

              <span className="text-[#5E296F] text-[10px] font-black uppercase tracking-[0.35em]">
                Why industry expertise matters
              </span>


              <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
                Software should
                <br />
                understand
                <br />
                <span className="text-[#111114]/25">
                  your business.
                </span>
              </h2>


              <p className="mt-8 text-lg text-[#111114]/40 leading-relaxed max-w-lg">
                A great product isn't just technically impressive.
                It needs to understand how your people work,
                how your customers behave, and where your business
                is going next.
              </p>

            </motion.div>


            {/* Right */}

            <div className="grid sm:grid-cols-2 gap-4">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6
                    }}
                    className="
                      group
                      bg-white
                      rounded-[30px]
                      p-7
                      md:p-8
                      border
                      border-[#111114]/[0.07]
                      hover:-translate-y-1
                      hover:shadow-[0_25px_60px_rgba(17,17,20,0.07)]
                      transition-all
                      duration-500
                    "
                  >

                    <div
                      className="
                        w-12
                        h-12
                        rounded-[17px]
                        flex
                        items-center
                        justify-center
                        mb-7
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                      style={{
                        backgroundColor: item.soft,
                        color: item.accent
                      }}
                    >

                      <Icon size={21} />

                    </div>


                    <h3 className="text-lg font-black tracking-tight mb-3">
                      {item.title}
                    </h3>


                    <p className="text-sm text-[#111114]/40 leading-relaxed">
                      {item.desc}
                    </p>

                  </motion.div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          INDUSTRY STATS
      ====================================================== */}

      <section className="px-6 md:px-10 pb-10 bg-[#F3F1EC]">

        <div
          className="
            max-w-7xl
            mx-auto
            rounded-[42px]
            md:rounded-[55px]
            bg-white
            border
            border-[#111114]/[0.07]
            overflow-hidden
          "
        >

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#111114]/[0.07]">

            {[
              {
                value: '50+',
                label: 'Projects delivered',
                accent: '#3B7B84'
              },
              {
                value: '8+',
                label: 'Industry domains',
                accent: '#5E296F'
              },
              {
                value: '25+',
                label: 'Technologies used',
                accent: '#EB6621'
              },
              {
                value: '1',
                label: 'Technology partner',
                accent: '#BC2D3F'
              }
            ].map((stat) => (

              <div
                key={stat.label}
                className="p-7 md:p-10 lg:p-12"
              >

                <p
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-black
                    tracking-tighter
                    mb-3
                  "
                  style={{
                    color: stat.accent
                  }}
                >
                  {stat.value}
                </p>

                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.18em] text-[#111114]/35">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          CASE STUDY
      ====================================================== */}

      <section className="px-6 md:px-10 py-10 bg-[#F3F1EC]">

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            rounded-[45px]
            md:rounded-[65px]
            bg-[#111114]
            overflow-hidden
          "
        >

          {/* Background glow */}

          <div
            className="
              absolute
              top-[-250px]
              right-[-150px]
              w-[650px]
              h-[650px]
              rounded-full
              blur-[150px]
              opacity-30
            "
            style={{
              background: '#3B7B84'
            }}
          />


          <div
            className="
              absolute
              bottom-[-250px]
              left-[-150px]
              w-[500px]
              h-[500px]
              rounded-full
              blur-[150px]
              opacity-10
            "
            style={{
              background: '#5E296F'
            }}
          />


          <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 p-8 md:p-14 lg:p-20">


            {/* Text */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7
              }}
            >

              <div className="flex items-center gap-3 mb-9">

                <div className="w-10 h-10 rounded-full bg-[#3B7B84]/10 border border-[#3B7B84]/20 flex items-center justify-center">

                  <HardHat
                    size={17}
                    className="text-[#3B7B84]"
                  />

                </div>

                <span className="text-[#3B7B84] text-[9px] font-black uppercase tracking-[0.3em]">
                  Sector spotlight
                </span>

              </div>


              <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.82] mb-9">

                MM
                <br />
                Constructions

                <br />

                <span className="text-white/20">
                  Enterprise ERP.
                </span>

              </h2>


              <p className="text-lg md:text-xl text-white/40 max-w-xl leading-relaxed mb-10">
                Managing heavy infrastructure operations requires
                visibility across people, materials, projects,
                billing, and daily site activity. We built a
                custom ERP around those real-world workflows.
              </p>


              <div className="flex flex-wrap gap-3 mb-10">

                {[
                  'Project Management',
                  'Inventory',
                  'Billing',
                  'Daily Reports'
                ].map((item) => (

                  <span
                    key={item}
                    className="
                      px-4
                      py-2.5
                      rounded-full
                      bg-white/[0.05]
                      border
                      border-white/[0.08]
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.13em]
                      text-white/35
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>


              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  bg-white
                  text-[#111114]
                  px-7
                  py-4
                  rounded-full
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  hover:bg-[#3B7B84]
                  hover:text-white
                  transition-all
                  duration-500
                "
              >

                View case study

                <ArrowRight
                  size={16}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                  "
                />

              </button>

            </motion.div>


            {/* Visual */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8
              }}
              className="
                relative
                min-h-[440px]
                lg:min-h-[560px]
                rounded-[38px]
                border
                border-white/[0.08]
                bg-white/[0.035]
                overflow-hidden
              "
            >

              {/* Grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.07]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(#fff 1px, transparent 1px),
                    linear-gradient(90deg, #fff 1px, transparent 1px)
                  `,
                  backgroundSize: '45px 45px'
                }}
              />


              {/* Central system */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative w-64 h-64">

                  {/* Outer rings */}

                  <div className="absolute inset-0 rounded-full border border-[#3B7B84]/20" />

                  <div className="absolute inset-8 rounded-full border border-[#3B7B84]/25" />

                  <div className="absolute inset-16 rounded-full border border-[#3B7B84]/30" />


                  {/* Pulsing ring */}

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.25, 0.05, 0.25]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    className="
                      absolute
                      inset-20
                      rounded-full
                      border-2
                      border-[#3B7B84]
                    "
                  />


                  {/* Center */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="w-24 h-24 rounded-[28px] bg-[#3B7B84]/10 border border-[#3B7B84]/30 flex items-center justify-center">

                      <Briefcase
                        size={38}
                        className="text-[#3B7B84]"
                      />

                    </div>

                  </div>


                  {/* Floating nodes */}

                  <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[8px] font-black uppercase tracking-widest text-white/30">
                    Projects
                  </div>


                  <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[8px] font-black uppercase tracking-widest text-white/30">
                    Inventory
                  </div>


                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[8px] font-black uppercase tracking-widest text-white/30">
                    Reports
                  </div>


                  <div className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[8px] font-black uppercase tracking-widest text-white/30">
                    Billing
                  </div>

                </div>

              </div>


              {/* Top label */}

              <div className="absolute top-6 left-6 flex items-center gap-2">

                <span className="w-2 h-2 rounded-full bg-[#3B7B84] animate-pulse" />

                <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/25">
                  ERP system online
                </span>

              </div>


              {/* Bottom badge */}

              <div className="absolute bottom-6 left-6 right-6">

                <div className="flex items-center justify-between p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/[0.06]">

                  <div>

                    <p className="text-[8px] uppercase tracking-[0.2em] font-black text-white/20 mb-1">
                      Architecture
                    </p>

                    <p className="text-sm font-black text-white/60">
                      Connected operations
                    </p>

                  </div>


                  <ShieldCheck
                    size={21}
                    className="text-[#3B7B84]"
                  />

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative py-36 md:py-52 bg-[#F3F1EC] overflow-hidden">

        {/* Rings */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full border border-[#111114]/[0.035]" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[950px] md:h-[950px] rounded-full border border-[#111114]/[0.025]" />


        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[650px]
            h-[450px]
            rounded-full
            blur-[170px]
            opacity-[0.10]
            pointer-events-none
          "
          style={{
            background:
              'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)'
          }}
        />


        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
          >

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-4
                py-2
                rounded-full
                bg-white
                border
                border-[#111114]/[0.07]
                shadow-sm
                mb-10
              "
            >

              <Sparkles
                size={13}
                className="text-[#EB6621]"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#111114]/40">
                Your industry. Your advantage.
              </span>

            </div>


            <h2
              className="
                text-6xl
                md:text-8xl
                xl:text-[125px]
                font-black
                leading-[0.78]
                tracking-tighter
              "
            >

              Your sector.

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#3B7B84]
                  via-[#5E296F]
                  to-[#EB6621]
                "
              >
                Our technology.
              </span>

            </h2>


            <p className="mt-10 text-lg md:text-xl text-[#111114]/40 max-w-2xl mx-auto leading-relaxed">
              Tell us what your industry looks like from the inside.
              We'll help you turn its complexity into a competitive advantage.
            </p>


            <button
              className="
                group
                mt-12
                inline-flex
                items-center
                gap-4
                bg-[#111114]
                text-white
                px-9
                md:px-12
                py-5
                rounded-full
                font-black
                text-sm
                uppercase
                tracking-[0.16em]
                hover:bg-[#5E296F]
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(94,41,111,0.20)]
                transition-all
                duration-500
              "
            >

              Start a project

              <Zap
                size={18}
                fill="currentColor"
                className="
                  group-hover:rotate-12
                  transition-transform
                "
              />

            </button>


            <div className="mt-10 flex items-center justify-center gap-2">

              <span className="w-1.5 h-1.5 rounded-full bg-[#3B7B84]" />

              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#111114]/25">
                50+ projects · 8+ domains · built in India
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default IndustriesPage;

