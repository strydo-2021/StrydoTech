import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  ExternalLink,
  Globe,
  Trophy,
  Code2,
  Layers3,
  Sparkles,
  MousePointer2,
  CheckCircle2,
  MoveUpRight,
  ChevronDown
} from 'lucide-react';

// ============================================================
// ASSETS
// ============================================================

import JCIImg from '../assets/JCI.png';
import MMCImg from '../assets/MMC.png';
import VishwaImg from '../assets/vishwa.png';
import InvoiceImg from '../assets/invoice.png';
import WhatsAppImg from '../assets/whatsapp.png';


// ============================================================
// PROJECT DATA
// ============================================================

const projects = [
  {
    number: '01',
    id: 'jci-marketplace',
    title: 'JCI Marketplace',
    shortTitle: 'JCI',
    industry: 'B2B Global Commerce',
    category: 'Marketplace',
    url: 'https://www.jcimarketplace.com/',
    image: JCIImg,

    theme: '#0056B3',
    soft: '#EAF3FF',
    gradient:
      'linear-gradient(135deg, #003366 0%, #0056B3 48%, #DDEEFF 100%)',

    challenge:
      'Architecting a global networking hub for business opportunities and organizational discovery.',

    solution:
      'A custom-engineered marketplace with advanced member directories and international networking logic.',

    impact: 'Seamless Global Networking',

    stats: [
      { value: 'B2B', label: 'Platform' },
      { value: 'Elite', label: 'UX' },
      { value: 'Global', label: 'Reach' }
    ],

    tech: ['React', 'Node.js', 'MongoDB'],

    accentText:
      'Connecting organizations, members and opportunities through one digital ecosystem.'
  },

  {
    number: '02',
    id: 'mm-constructions',
    title: 'MM Constructions ERP',
    shortTitle: 'MM ERP',
    industry: 'Infrastructure & ERP',
    category: 'Enterprise',
    url: 'https://mmconstructionserp.com/',
    image: MMCImg,

    theme: '#BC2D3F',
    soft: '#FFF0F2',
    gradient:
      'linear-gradient(135deg, #17352E 0%, #2D5A27 48%, #BC2D3F 100%)',

    challenge:
      'Managing massive construction operations through disconnected legacy systems.',

    solution:
      'A high-performance ERP core that digitizes labor management and real-time inventory tracking.',

    impact: '100% Operational Visibility',

    stats: [
      { value: '+40%', label: 'Efficiency' },
      { value: 'Real-time', label: 'Tracking' },
      { value: '99.9%', label: 'Uptime' }
    ],

    tech: ['React', 'Spring Boot', 'MySQL'],

    accentText:
      'Turning complex construction operations into a connected, measurable digital workflow.'
  },

  {
    number: '03',
    id: 'vishwa-interiors',
    title: 'Vishwa Interiors',
    shortTitle: 'Vishwa',
    industry: 'Design & Architecture',
    category: 'Experience',
    url: 'https://vishwainteriors.com/',
    image: VishwaImg,

    theme: '#B28A19',
    soft: '#FFF8E3',
    gradient:
      'linear-gradient(135deg, #111114 0%, #303030 48%, #D4AF37 100%)',

    challenge:
      'Translating high-end physical craftsmanship into a digital portfolio that converts premium leads.',

    solution:
      'A visual-first architectural showcase with integrated inquiry management and high-fidelity project galleries.',

    impact: 'Elevated Brand Identity',

    stats: [
      { value: '+60%', label: 'Leads' },
      { value: 'Premium', label: 'Design' },
      { value: '100%', label: 'Responsive' }
    ],

    tech: ['React', 'Framer Motion', 'SEO'],

    accentText:
      'A digital experience designed to make architecture feel as premium online as it does in the real world.'
  },

  {
    number: '04',
    id: 'strydo-invoice',
    title: 'Strydo Invoice',
    shortTitle: 'Invoice',
    industry: 'FinTech / SaaS',
    category: 'SaaS',
    url: 'https://invoice.strydoprojects.com/',
    image: InvoiceImg,

    theme: '#5E296F',
    soft: '#F5EDFA',
    gradient:
      'linear-gradient(135deg, #5E296F 0%, #3B7B84 55%, #EB6621 100%)',

    challenge:
      'Automating complex billing cycles and tax compliance for multi-tier service projects.',

    solution:
      'A robust FinTech engine that handles project-based invoicing, automated tax logic, and real-time payment tracking.',

    impact: '100% Billing Accuracy',

    stats: [
      { value: 'FinTech', label: 'Engine' },
      { value: 'Global', label: 'Compliance' },
      { value: 'Scale', label: 'Ready' }
    ],

    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],

    accentText:
      'A streamlined financial workflow built around speed, accuracy and visibility.'
  },

  {
    number: '05',
    id: 'whatsapp-automation',
    title: 'WhatsApp Campaign Automation',
    shortTitle: 'WA Automation',
    industry: 'Business Communication',
    category: 'Automation',
    url: '#',
    image: WhatsAppImg,

    theme: '#25D366',
    soft: '#E9FFF1',
    gradient:
      'linear-gradient(135deg, #075E54 0%, #128C7E 48%, #25D366 100%)',

    challenge:
      'Managing large-scale customer communication through repetitive messaging, disconnected contacts and manual campaign processes.',

    solution:
      'A centralized WhatsApp automation platform for creating campaigns, managing reusable message templates, organizing audiences and streamlining bulk customer communication.',

    impact: 'Smarter Campaign Management',

    stats: [
      { value: 'Bulk', label: 'Messaging' },
      { value: 'Smart', label: 'Campaigns' },
      { value: 'Reusable', label: 'Templates' }
    ],

    tech: ['React', 'Spring Boot', 'MySQL', 'WhatsApp API'],

    accentText:
      'Simplifying business communication through structured campaigns, reusable templates and automated WhatsApp workflows.'
  }
];


// ============================================================
// ANIMATION
// ============================================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 40
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};


const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};


// ============================================================
// PROJECT CARD
// ============================================================

const ProjectShowcase = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px'
      }}
      variants={reveal}
      className="relative"
    >

      <div
        className={`
          grid
          lg:grid-cols-[1.15fr_0.85fr]
          gap-12
          lg:gap-20
          items-center
          ${!isEven ? 'lg:grid-cols-[0.85fr_1.15fr]' : ''}
        `}
      >

        {/* ==================================================
            VISUAL
        ================================================== */}

        <div
          className={`
            ${!isEven ? 'lg:order-2' : ''}
            group
            relative
          `}
        >

          {/* Background aura */}

          <div
            className="
              absolute
              -inset-8
              rounded-[70px]
              blur-[70px]
              opacity-20
              transition-all
              duration-1000
              group-hover:opacity-40
            "
            style={{
              background: project.theme
            }}
          />


          {/* Main project frame */}

          <div
            className="
              relative
              aspect-[16/10]
              rounded-[42px]
              md:rounded-[52px]
              overflow-hidden
              p-[1px]
              shadow-[0_35px_100px_rgba(17,17,20,0.13)]
              group-hover:shadow-[0_45px_120px_rgba(17,17,20,0.18)]
              transition-all
              duration-700
            "
            style={{
              background: project.gradient
            }}
          >

            {/* Browser window */}

            <div
              className="
                absolute
                inset-3
                md:inset-5
                rounded-[32px]
                overflow-hidden
                bg-white
                shadow-2xl
              "
            >

              {/* Browser header */}

              <div
                className="
                  h-8
                  md:h-10
                  px-4
                  flex
                  items-center
                  border-b
                  border-black/[0.05]
                  bg-[#FAFAF9]
                "
              >

                <div className="flex items-center gap-1.5">

                  <span className="w-2 h-2 rounded-full bg-black/10" />
                  <span className="w-2 h-2 rounded-full bg-black/10" />
                  <span className="w-2 h-2 rounded-full bg-black/10" />

                </div>


                <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2">

                  <Globe
                    size={10}
                    className="text-black/20"
                  />

                  <span className="text-[8px] md:text-[9px] font-mono text-black/25">
                    {project.url.replace('https://', '').replace('/', '')}
                  </span>

                </div>

              </div>


              {/* Screenshot */}

              <div className="relative h-[calc(100%-32px)] md:h-[calc(100%-40px)] overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    min-h-full
                    object-cover
                    object-top
                    transition-transform
                    duration-[5000ms]
                    ease-linear
                    group-hover:-translate-y-[8%]
                  "
                />


                {/* Subtle image overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/[0.08]
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

            </div>


            {/* Project number */}

            <div
              className="
                absolute
                top-8
                left-8
                md:top-10
                md:left-10
                w-11
                h-11
                md:w-14
                md:h-14
                rounded-full
                bg-white/90
                backdrop-blur-md
                flex
                items-center
                justify-center
                shadow-lg
              "
            >

              <span
                className="text-[10px] md:text-xs font-black"
                style={{
                  color: project.theme
                }}
              >
                {project.number}
              </span>

            </div>


            {/* Launch button */}

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="
                absolute
                right-7
                bottom-7
                md:right-10
                md:bottom-10
                w-14
                h-14
                md:w-16
                md:h-16
                rounded-full
                flex
                items-center
                justify-center
                text-white
                shadow-2xl
                translate-y-5
                opacity-0
                group-hover:translate-y-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
              style={{
                backgroundColor: project.theme
              }}
            >

              <MoveUpRight size={21} />

            </a>

          </div>


          {/* Floating category */}

          <div
            className="
              absolute
              -bottom-5
              left-7
              md:left-10
              px-5
              py-3
              rounded-2xl
              bg-white
              border
              border-black/[0.06]
              shadow-xl
              flex
              items-center
              gap-3
            "
          >

            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: project.theme
              }}
            />

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black/40">
              {project.category}
            </span>

          </div>

        </div>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div
          className={`
            ${!isEven ? 'lg:order-1' : ''}
            pt-7
            lg:pt-0
          `}
        >

          {/* Industry */}

          <motion.div variants={reveal} className="flex items-center gap-3 mb-6">

            <span
              className="text-[10px] font-black uppercase tracking-[0.28em]"
              style={{
                color: project.theme
              }}
            >
              {project.industry}
            </span>

            <span className="w-8 h-px bg-black/10" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20">
              Case Study
            </span>

          </motion.div>


          {/* Title */}

          <motion.h2
            variants={reveal}
            className="
              text-5xl
              md:text-6xl
              xl:text-[72px]
              font-black
              tracking-tighter
              leading-[0.88]
              mb-8
            "
          >
            {project.title}
          </motion.h2>


          {/* Description */}

          <motion.p
            variants={reveal}
            className="
              text-lg
              md:text-xl
              text-black/40
              leading-relaxed
              max-w-xl
              mb-8
            "
          >
            {project.accentText}
          </motion.p>


          {/* Objective / Solution */}

          <motion.div
            variants={reveal}
            className="space-y-6 mb-9"
          >

            <div>

              <div className="flex items-center gap-2 mb-2">

                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: project.theme
                  }}
                />

                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-black/30">
                  Objective
                </span>

              </div>

              <p className="text-sm md:text-base text-black/50 leading-relaxed">
                {project.challenge}
              </p>

            </div>


            <div>

              <div className="flex items-center gap-2 mb-2">

                <span className="w-1.5 h-1.5 rounded-full bg-[#3B7B84]" />

                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-black/30">
                  Solution
                </span>

              </div>

              <p className="text-sm md:text-base text-black/50 leading-relaxed">
                {project.solution}
              </p>

            </div>

          </motion.div>


          {/* Stats */}

          <motion.div
            variants={reveal}
            className="
              grid
              grid-cols-3
              gap-4
              py-7
              border-y
              border-black/[0.07]
              mb-7
            "
          >

            {project.stats.map((stat) => (

              <div key={stat.label}>

                <p
                  className="text-xl md:text-2xl font-black tracking-tight"
                  style={{
                    color: project.theme
                  }}
                >
                  {stat.value}
                </p>

                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.16em] text-black/25 mt-1">
                  {stat.label}
                </p>

              </div>

            ))}

          </motion.div>


          {/* Tech + CTA */}

          <motion.div
            variants={reveal}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          >

            <div className="flex flex-wrap gap-2">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="
                    px-3
                    py-2
                    rounded-xl
                    bg-white
                    border
                    border-black/[0.06]
                    text-[8px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-black/35
                  "
                >
                  {tech}
                </span>

              ))}

            </div>


            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                whitespace-nowrap
              "
              style={{
                color: project.theme
              }}
            >

              View project

              <span
                className="
                  w-8
                  h-8
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border
                  transition-all
                  group-hover:translate-x-1
                "
                style={{
                  borderColor: `${project.theme}30`
                }}
              >

                <ArrowRight size={13} />

              </span>

            </a>

          </motion.div>

        </div>

      </div>

    </motion.article>
  );
};


// ============================================================
// PAGE
// ============================================================

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#111114] overflow-hidden">

      <Navbar />


      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative pt-40 md:pt-52 pb-32 md:pb-44 overflow-hidden">

        {/* Technical grid */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(#111114 1px, transparent 1px),
              linear-gradient(90deg, #111114 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px'
          }}
        />


        {/* Dot texture */}

        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]
            w-[500px]
            h-[500px]
            rounded-full
            opacity-[0.06]
          "
          style={{
            backgroundImage:
              'radial-gradient(#5E296F 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px'
          }}
        />


        {/* Glow 1 */}

        <div
          className="
            absolute
            -top-72
            -left-72
            w-[800px]
            h-[800px]
            rounded-full
            blur-[180px]
            pointer-events-none
          "
          style={{
            background: 'rgba(59,123,132,0.10)'
          }}
        />


        {/* Glow 2 */}

        <div
          className="
            absolute
            top-20
            -right-72
            w-[750px]
            h-[750px]
            rounded-full
            blur-[180px]
            pointer-events-none
          "
          style={{
            background: 'rgba(94,41,111,0.09)'
          }}
        />


        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            {/* Eyebrow */}

            <motion.div
              variants={reveal}
              className="flex items-center gap-4 mb-10"
            >

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-full
                  bg-white/75
                  backdrop-blur-md
                  border
                  border-black/[0.07]
                  shadow-sm
                "
              >

                <Trophy
                  size={13}
                  className="text-[#EB6621]"
                />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
                  Selected Work
                </span>

              </div>


              <span className="hidden md:block text-[9px] font-black uppercase tracking-[0.25em] text-black/20">
                04 Digital Products
              </span>

            </motion.div>


            {/* Main title */}

            <motion.h1
              variants={reveal}
              className="
                text-6xl
                md:text-8xl
                xl:text-[125px]
                font-black
                tracking-tighter
                leading-[0.78]
                max-w-6xl
              "
            >

              We build

              <br />

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-[#3B7B84]
                  via-[#5E296F]
                  via-[#BC2D3F]
                  to-[#EB6621]
                "
              >
                what matters.
              </span>

            </motion.h1>


            {/* Hero bottom */}

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end mt-14">

              <motion.p
                variants={reveal}
                className="
                  text-xl
                  md:text-2xl
                  xl:text-3xl
                  text-black/40
                  leading-relaxed
                  tracking-tight
                  max-w-4xl
                "
              >
                Digital products, enterprise systems and experiences
                engineered to turn ambitious ideas into something real.
              </motion.p>


              <motion.div
                variants={reveal}
                className="hidden lg:flex items-center gap-3"
              >

                <div className="w-12 h-12 rounded-full bg-white border border-black/[0.06] flex items-center justify-center">

                  <MousePointer2
                    size={16}
                    className="text-black/25"
                  />

                </div>

                <div>

                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-black/20">
                    Explore
                  </p>

                  <p className="text-xs font-bold text-black/40">
                    Our work
                  </p>

                </div>

              </motion.div>

            </div>


            {/* Hero metrics */}

            <motion.div
              variants={reveal}
              className="
                flex
                flex-wrap
                gap-x-10
                gap-y-5
                mt-14
                pt-7
                border-t
                border-black/[0.07]
              "
            >

              {[
                ['04', 'Products'],
                ['04', 'Industries'],
                ['∞', 'Possibilities']
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="flex items-center gap-3"
                >

                  <span className="text-xl font-black">
                    {value}
                  </span>

                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black/25">
                    {label}
                  </span>

                </div>

              ))}

            </motion.div>

          </motion.div>

        </div>


        {/* Scroll cue */}

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 1
          }}
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2
            hidden
            md:flex
            flex-col
            items-center
            gap-2
            text-black/20
          "
        >

          <span className="text-[8px] font-black uppercase tracking-[0.25em]">
            Scroll
          </span>

          <ChevronDown size={14} />

        </motion.div>

      </section>


      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="
          relative
          py-28
          md:py-44
          bg-[#EAE7E1]
        "
      >

        {/* Section header */}

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">

          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-10 items-end">

            <div>

              <span className="text-[#5E296F] text-[10px] font-black uppercase tracking-[0.35em]">
                Case studies
              </span>

              <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
                Selected
                <br />
                work.
              </h2>

            </div>


            <p className="text-base md:text-lg text-black/40 leading-relaxed max-w-lg">
              Every project starts with a problem worth solving.
              We combine strategy, design and engineering to create
              products that perform in the real world.
            </p>

          </div>

        </div>


        {/* Projects */}

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="space-y-36 md:space-y-56">

            {projects.map((project, index) => (

              <ProjectShowcase
                key={project.id}
                project={project}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ======================================================
          CAPABILITIES
      ====================================================== */}

      <section className="py-28 md:py-40 bg-[#F3F1EC]">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28">

            {/* Heading */}

            <div>

              <span className="text-[#EB6621] text-[10px] font-black uppercase tracking-[0.35em]">
                How we build
              </span>

              <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.84]">
                More than
                <br />
                <span className="text-black/20">
                  just code.
                </span>
              </h2>

              <p className="mt-8 text-lg text-black/40 leading-relaxed max-w-md">
                From the first idea to the final deployment, we
                bring product thinking, design and engineering
                together.
              </p>

            </div>


            {/* Capabilities */}

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                {
                  icon: Layers3,
                  title: 'Product Strategy',
                  text: 'Turning ideas into clear, scalable product directions.',
                  color: '#5E296F'
                },
                {
                  icon: Code2,
                  title: 'Engineering',
                  text: 'Reliable web platforms, APIs and enterprise systems.',
                  color: '#3B7B84'
                },
                {
                  icon: Sparkles,
                  title: 'Experience Design',
                  text: 'Interfaces that feel intuitive, distinctive and useful.',
                  color: '#EB6621'
                },
                {
                  icon: CheckCircle2,
                  title: 'Launch & Scale',
                  text: 'Shipping, optimizing and continuously improving products.',
                  color: '#BC2D3F'
                }
              ].map((item, index) => {

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
                      duration: 0.6,
                      delay: index * 0.07
                    }}
                    className="
                      group
                      bg-white
                      rounded-[30px]
                      p-7
                      md:p-8
                      border
                      border-black/[0.06]
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
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        mb-7
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                      style={{
                        backgroundColor: `${item.color}12`,
                        color: item.color
                      }}
                    >

                      <Icon size={21} />

                    </div>


                    <h3 className="text-xl font-black mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-black/40 leading-relaxed">
                      {item.text}
                    </p>


                    <div
                      className="
                        mt-7
                        w-7
                        h-px
                        group-hover:w-14
                        transition-all
                        duration-500
                      "
                      style={{
                        backgroundColor: item.color
                      }}
                    />

                  </motion.div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 md:px-10 pb-10 bg-[#F3F1EC]">

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            rounded-[45px]
            md:rounded-[65px]
            overflow-hidden
            bg-white
            border
            border-black/[0.06]
          "
        >

          {/* Grid */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              pointer-events-none
            "
            style={{
              backgroundImage: `
                linear-gradient(#111114 1px, transparent 1px),
                linear-gradient(90deg, #111114 1px, transparent 1px)
              `,
              backgroundSize: '55px 55px'
            }}
          />


          {/* Gradient glow */}

          <div
            className="
              absolute
              -top-64
              left-1/2
              -translate-x-1/2
              w-[750px]
              h-[600px]
              rounded-full
              blur-[160px]
              opacity-[0.12]
            "
            style={{
              background:
                'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)'
            }}
          />


          <div className="relative z-10 py-28 md:py-40 px-6 text-center">

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

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#F3F1EC]
                  border
                  border-black/[0.06]
                  mb-10
                "
              >

                <Sparkles
                  size={13}
                  className="text-[#EB6621]"
                />

                <span className="text-[9px] font-black uppercase tracking-[0.28em] text-black/35">
                  Have something ambitious in mind?
                </span>

              </div>


              {/* Heading */}

              <h2
                className="
                  text-6xl
                  md:text-8xl
                  xl:text-[115px]
                  font-black
                  tracking-tighter
                  leading-[0.78]
                "
              >

                Your idea.

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
                  Our next build.
                </span>

              </h2>


              <p className="mt-10 max-w-2xl mx-auto text-lg md:text-xl text-black/40 leading-relaxed">
                Tell us what you're trying to build.
                We'll help turn the idea into a product people want to use.
              </p>


              {/* CTA */}

              <button
                className="
                  group
                  mt-12
                  inline-flex
                  items-center
                  gap-4
                  px-9
                  md:px-11
                  py-5
                  rounded-full
                  bg-[#111114]
                  text-white
                  font-black
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.18em]
                  hover:bg-[#5E296F]
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(94,41,111,0.20)]
                  transition-all
                  duration-500
                "
              >

                Start a project

                <span
                  className="
                    w-7
                    h-7
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    group-hover:translate-x-1
                    transition-transform
                  "
                >

                  <ArrowRight size={14} />

                </span>

              </button>


              {/* Bottom microcopy */}

              <div className="mt-10 flex items-center justify-center gap-3">

                <span className="w-1.5 h-1.5 rounded-full bg-[#3B7B84]" />

                <span className="text-[8px] font-black uppercase tracking-[0.22em] text-black/20">
                  Strategy · Design · Engineering
                </span>

                <span className="w-1.5 h-1.5 rounded-full bg-[#EB6621]" />

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      <Footer />

    </div>
  );
};

export default PortfolioPage;