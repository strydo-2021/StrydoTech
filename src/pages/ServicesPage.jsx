import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Globe,
  Database,
  Cloud,
  Layout,
  Zap,
  ArrowRight,
  Settings2,
  Terminal,
  Rocket,
  CheckCircle2,
  Sparkles,
  Activity,
  ShieldCheck,
  Megaphone,
  CircuitBoard
} from 'lucide-react';

// ============================================================
// SERVICE DATA
// ============================================================

import { pillarData as servicePillars } from '../data/pillarData';

// ============================================================
// FAQ DATA
// ============================================================

const faqItems = [
  {
    question: 'What services does Strydo Technologies provide?',
    answer:
      'Strydo Technologies provides a wide range of technology and digital services including web and software development, enterprise solutions, AI and Machine Learning, cloud and DevOps, UI/UX design, digital marketing, IoT and embedded solutions, automation and technology consulting.'
  },
  {
    question: 'Can Strydo develop custom software for my business?',
    answer:
      'Yes. We build custom software solutions based on your business requirements, workflows and operational needs. This can include web applications, business management systems, ERP and CRM platforms, automation solutions and other tailored digital products.'
  },
  {
    question: 'Do you provide website and web application development?',
    answer:
      'Yes. We design and develop responsive websites and modern web applications with a focus on performance, usability, scalability and business goals.'
  },
  {
    question: 'Does Strydo provide ERP and CRM solutions?',
    answer:
      'Yes. We develop ERP and CRM solutions that help businesses manage operations, customers, projects, inventory, workflows and other business processes through centralized digital systems.'
  },
  {
    question: 'Do you provide AI and Machine Learning solutions?',
    answer:
      'Yes. Our AI and Machine Learning services can be used for intelligent automation, predictive analytics, AI-powered applications, chatbots, data-driven solutions and other business use cases.'
  },
  {
    question: 'What IoT and Embedded Systems solutions do you provide?',
    answer:
      'We work with IoT and Embedded Systems to connect hardware, sensors and software into intelligent solutions. Our services can include microcontroller-based systems, sensor integration, device communication, real-time monitoring, cloud connectivity and IoT dashboards.'
  },
  {
    question: 'Can you develop an IoT solution for a specific industry or requirement?',
    answer:
      'Yes. IoT solutions can be designed around specific requirements such as monitoring, automation, data collection, connected devices and real-time system visibility. We can work across the hardware, embedded software, connectivity and application layers.'
  },
  {
    question: 'Does Strydo provide Digital Marketing services?',
    answer:
      'Yes. Our Digital Marketing services help businesses strengthen their online presence and reach the right audience through strategies such as social media marketing, content-focused campaigns, search engine optimization, online branding and digital growth initiatives.'
  },
  {
    question: 'Can you handle both website development and digital marketing?',
    answer:
      'Yes. We can combine website development with digital marketing so that your digital presence is built with both user experience and growth in mind. This creates a more connected approach from website creation to audience reach and online visibility.'
  },
  {
    question: 'Do you provide UI/UX design services?',
    answer:
      'Yes. We create user-focused interfaces and experiences for websites, web applications, software platforms and digital products, with emphasis on usability, visual consistency, responsiveness and user engagement.'
  },
  {
    question: 'What cloud and DevOps services do you provide?',
    answer:
      'Our Cloud and DevOps services cover cloud infrastructure, deployment, CI/CD workflows, application hosting, infrastructure management and cloud-focused development practices to support reliable and scalable digital solutions.'
  },
  {
    question: 'Can Strydo automate repetitive business processes?',
    answer:
      'Yes. We develop automation solutions that can reduce repetitive manual work, streamline workflows, connect different systems and improve operational efficiency.'
  },
  {
    question: 'Can you integrate new software with our existing systems?',
    answer:
      'Yes. We can work with existing applications, databases, APIs and business workflows to create integrations that allow different systems and services to communicate with each other.'
  },
  {
    question: 'Can Strydo work on an existing project?',
    answer:
      'Yes. We can work with existing applications and help with enhancements, redesign, modernization, feature development, integrations, performance improvements and other technical requirements.'
  },
  {
    question: 'How do I start a project with Strydo Technologies?',
    answer:
      'You can start by sharing your business requirement, current challenge or project idea with our team. We can understand your objectives, discuss the appropriate technology approach and plan the next steps for development or implementation.'
  }
];

// ============================================================
// TECHNOLOGY DATA
// Uses Simple Icons' CDN (cdn.simpleicons.org) instead of hotlinked
// Pinterest pins / Google image-cache thumbnails / random blog images,
// which are unstable and can vanish or break at any time.
// ============================================================

const topRowTech = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Spring Boot', slug: 'springboot' },
  { name: 'Python', slug: 'python' },
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'Docker', slug: 'docker' }
];

const bottomRowTech = [
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Redis', slug: 'redis' },
  { name: 'TensorFlow', slug: 'tensorflow' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Tailwind', slug: 'tailwindcss' },
  { name: 'Kubernetes', slug: 'kubernetes' }
];

// Cycles through the page's real accent palette instead of the previous
// empty per-tech lookup table, which silently fell back to the same
// purple for every single logo chip.
const techPalette = ['#3B7B84', '#5E296F', '#EB6621', '#BC2D3F', '#742A5F'];

const getTechStyle = (index) => {
  const color = techPalette[index % techPalette.length];
  return {
    text: color,
    bg: `${color}0D`,
    border: `${color}30`
  };
};

// ============================================================
// PROCESS DATA
// ============================================================

const processSteps = [
  {
    title: 'Discovery',
    desc: 'Logic extraction and goal alignment.',
    icon: Zap,
    accent: '#3B7B84'
  },
  {
    title: 'Blueprint',
    desc: 'Scalable architecture and security maps.',
    icon: Terminal,
    accent: '#5E296F'
  },
  {
    title: 'Code',
    desc: 'Clean engineering with modern stacks.',
    icon: Code2,
    accent: '#BC2D3F'
  },
  {
    title: 'Launch',
    desc: 'Global deployment and support.',
    icon: Rocket,
    accent: '#EB6621'
  }
];

// ============================================================
// SERVICES PAGE
// ============================================================

const ServicesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#F3F1EC] text-[#111114] selection:bg-[#5E296F] selection:text-white">

      <Navbar />

      {/* ======================================================
          SECTION 1 — HERO
      ====================================================== */}

      <section className="relative pt-56 md:pt-64 pb-36 overflow-hidden">

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(#111114 1px, transparent 1px),
              linear-gradient(90deg, #111114 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: 'rgba(59,123,132,0.13)' }}
        />

        <div
          className="absolute top-20 right-[-180px] w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none"
          style={{ background: 'rgba(94,41,111,0.10)' }}
        />

        <div
          className="absolute bottom-[-250px] left-1/2 w-[500px] h-[400px] -translate-x-1/2 rounded-full blur-[160px] pointer-events-none"
          style={{ background: 'rgba(235,102,33,0.07)' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-[#111114]/[0.08] text-[#5E296F] text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm">
              <Sparkles size={12} />
              The Capabilities 2025
            </div>

            <h1 className="text-6xl md:text-[120px] font-black leading-[0.82] tracking-tighter mb-12">
              <span className="text-[#111114]">Solutions for</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] via-[#BC2D3F] to-[#EB6621]">
                Your Future.
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-[#111114]/40 max-w-3xl leading-relaxed font-medium tracking-tight">
              We provide the{' '}
              <span className="text-[#111114]">technical expertise</span>{' '}
              to solve complex problems and build scalable business tools.
            </p>

            <div className="mt-16 flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-[0.25em] font-black text-[#111114]/30">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#3B7B84] animate-pulse" />
                Systems Ready
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#111114]/10" />
              <div>Engineering · Design · Intelligence</div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* ======================================================
          SECTION 2 — EXPERTISE
      ====================================================== */}

      <section className="py-24 md:py-40 relative bg-[#EAE7E1] overflow-hidden">

        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[170px] pointer-events-none opacity-[0.08]"
          style={{ background: 'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)' }}
        />

        <div className="absolute -right-24 top-20 w-64 h-64 rounded-full border border-[#5E296F]/10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-[#3B7B84] font-black uppercase tracking-[0.4em] text-[10px]">
                What We Engineer
              </span>
              <h2 className="mt-5 text-5xl md:text-7xl font-black tracking-tighter leading-none text-[#111114]">
                Built around
                <br />
                <span className="text-[#111114]/25">your ambition.</span>
              </h2>
            </div>
            <p className="text-[#111114]/40 font-medium max-w-sm leading-relaxed">
              From intelligent software to resilient infrastructure,
              every capability is engineered to work as part of a larger
              digital ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="group relative bg-white p-9 md:p-11 rounded-[42px] border border-[#111114]/[0.07] hover:border-[#111114]/[0.14] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(17,17,20,0.10)] transition-all duration-700 flex flex-col h-full overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-10 right-10 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)` }}
                  />

                  <div
                    className="absolute -top-28 -right-28 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-[0.13] transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: pillar.color }}
                  />

                  <div
                    className="relative w-16 h-16 rounded-[22px] flex items-center justify-center text-white mb-10 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{ backgroundColor: pillar.color, boxShadow: `0 18px 45px ${pillar.color}25` }}
                  >
                    <Icon size={27} />
                  </div>

                  <div className="flex-grow relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black text-[#111114] mb-5 leading-tight tracking-tight group-hover:text-[#5E296F] transition-colors duration-500">
                      {pillar.category}
                    </h3>

                    <p className="text-[#111114]/45 text-base md:text-lg leading-relaxed mb-9">
                      {pillar.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {pillar.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2
                            size={15}
                            style={{ color: pillar.color }}
                            className="opacity-50 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="text-sm font-bold text-[#111114]/50 group-hover:text-[#111114]/85 transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-7 border-t border-[#111114]/[0.08] relative z-10">
                    <Link
                      to={`/services/${pillar.id}`}
                      className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all"
                      style={{ color: pillar.color }}
                    >
                      Explore Pillar
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ======================================================
          SECTION 3 — TECHNOLOGY ECOSYSTEM
      ====================================================== */}

      <section className="bg-[#F7F5F0] py-32 md:py-40 relative overflow-hidden border-y border-[#111114]/[0.07]">

        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(#111114 1px, transparent 1px),
              linear-gradient(90deg, #111114 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        <div
          className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full blur-[170px] opacity-[0.08] pointer-events-none"
          style={{ background: '#5E296F' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#3B7B84] font-black uppercase tracking-[0.3em] text-[10px] mb-5">
                <Activity size={14} />
                Systems Online
              </div>

              <h2 className="text-5xl md:text-8xl font-black text-[#111114] tracking-tighter leading-[0.85]">
                Technical
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] to-[#5E296F]">
                  Ecosystem.
                </span>
              </h2>
            </div>

            <p className="text-[#111114]/35 font-bold text-lg md:text-xl max-w-xs italic leading-relaxed">
              "Built for scale, engineered for reliability."
            </p>
          </div>
        </div>

        {/* TECHNOLOGY MARQUEE */}
        <div className="flex flex-col gap-5 relative z-10">

          {/* ROW 1 */}
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex flex-nowrap gap-5 w-max"
            >
              {[...topRowTech, ...topRowTech].map((tech, i) => {
                const style = getTechStyle(i);
                return (
                  <div
                    key={`${tech.slug}-${i}`}
                    className="px-8 md:px-10 py-6 rounded-[24px] flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: style.bg,
                      border: `1px solid ${style.border}`,
                      boxShadow: `0 10px 30px ${style.border}`
                    }}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      className="h-10 md:h-12 w-10 md:w-12 object-contain"
                      loading="lazy"
                    />
                    <span
                      className="text-[10px] font-black uppercase tracking-widest"
                      style={{ color: style.text }}
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex flex-nowrap gap-5 w-max"
            >
              {[...bottomRowTech, ...bottomRowTech].map((tech, i) => {
                const style = getTechStyle(i + 1);
                return (
                  <div
                    key={`${tech.slug}-${i}`}
                    className="px-8 md:px-10 py-6 rounded-[24px] flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: style.bg,
                      border: `1px solid ${style.border}`,
                      boxShadow: `0 10px 30px ${style.border}`
                    }}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      className="h-10 md:h-12 w-10 md:w-12 object-contain"
                      loading="lazy"
                    />
                    <span
                      className="text-[10px] font-black uppercase tracking-widest"
                      style={{ color: style.text }}
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>


      {/* ======================================================
          SECTION 4 — EXECUTION ROADMAP
      ====================================================== */}

      <section className="py-28 md:py-48 bg-[#ECE9E3] relative overflow-hidden">

        <div
          className="absolute -left-60 top-1/3 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07] pointer-events-none"
          style={{ background: '#3B7B84' }}
        />

        <div
          className="absolute -right-60 bottom-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07] pointer-events-none"
          style={{ background: '#EB6621' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          <div className="text-center mb-24 md:mb-32">
            <span className="text-[#5E296F] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
              The Execution Roadmap
            </span>

            <h2 className="text-5xl md:text-[100px] font-black text-[#111114] leading-[0.82] tracking-tighter">
              Engineered for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BC2D3F] to-[#EB6621]">
                success.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative p-9 md:p-11 rounded-[40px] bg-white border border-[#111114]/[0.07] hover:-translate-y-2 hover:border-[#111114]/[0.13] hover:shadow-[0_30px_70px_rgba(17,17,20,0.09)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-7 right-8 text-7xl font-black text-[#111114]/[0.035] group-hover:text-[#111114]/[0.07] transition-colors">
                    0{i + 1}
                  </div>

                  <div
                    className="absolute left-8 right-8 top-0 h-[2px] opacity-40"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)` }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-[22px] flex items-center justify-center text-white mb-10 shadow-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: step.accent, boxShadow: `0 18px 45px ${step.accent}25` }}
                    >
                      <Icon size={28} />
                    </div>

                    <h4 className="text-2xl font-black text-[#111114] mb-4 tracking-tighter">
                      {step.title}
                    </h4>

                    <p className="text-[#111114]/40 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust bar — kept on the roadmap section's light background */}
          <div className="mt-24 pt-10 border-t border-[#111114]/[0.10] flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck size={27} className="text-[#3B7B84]" />
              <span className="text-[#111114]/40 font-bold text-[11px] uppercase tracking-widest">
                ISO 27001 Security Standards
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/70 px-6 py-3 rounded-full border border-[#111114]/[0.07] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#111114]/60">
                25+ Engineers Active Now
              </span>
            </div>
          </div>

        </div>
      </section>


      {/* ======================================================
          SECTION 5 — FAQ
          Promoted to a top-level, full-bleed section (it was
          previously nested inside the roadmap section's max-w-7xl
          container, which boxed in and padded what was meant to be
          an edge-to-edge black band). Also converted from native
          <details> — which lets every answer stay open at once —
          into a controlled, single-open accordion with proper
          aria-expanded / aria-controls for keyboard and
          screen-reader users.
      ====================================================== */}

      <section className="relative bg-[#111114] text-white pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">

        <div className="absolute top-0 right-[-180px] w-[500px] h-[500px] rounded-full bg-[#5E296F]/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#3B7B84]/10 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-[2px] bg-[#EB6621]" />
              <span className="text-[#EB6621] text-[11px] font-black uppercase tracking-[0.3em]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05]">
              Everything you need
              <br />
              <span
                className="text-transparent bg-clip-text inline-block pb-2"
                style={{ backgroundImage: 'linear-gradient(to right, #3B7B84, #5E296F, #EB6621)' }}
              >
                to build & grow.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-white/45 text-base md:text-lg leading-relaxed">
              From software and AI to IoT and digital marketing,
              discover how Strydo can help transform your ideas
              into scalable digital solutions.
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {faqItems.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.3) }}
                  className="border-b border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="w-full flex items-center justify-between gap-6 py-7 md:py-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#EB6621] focus-visible:outline-offset-4 rounded-lg"
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <span className="text-xs font-bold tracking-widest text-white/20 w-7">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white/85 hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'border-[#EB6621] bg-[#EB6621]' : 'border-white/15'
                      }`}
                    >
                      <span
                        className={`text-xl font-light transition-all duration-300 ${
                          isOpen ? 'text-white rotate-45' : 'text-white/60'
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`grid transition-all duration-500 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-12 md:pl-[4.5rem] pr-10 pb-8 max-w-4xl text-white/45 text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ======================================================
          SECTION 6 — FINAL CTA
      ====================================================== */}

      <section className="py-32 md:py-52 bg-[#E5E1DA] relative overflow-hidden">

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[180px] opacity-[0.13] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #3B7B84, #5E296F, #EB6621)' }}
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#111114]/[0.05] pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#111114]/[0.035] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-[#111114]/30 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
              <span className="w-8 h-px bg-[#111114]/20" />
              Let's build something
              <span className="w-8 h-px bg-[#111114]/20" />
            </span>

            <h2 className="text-6xl md:text-[140px] font-black text-[#111114] leading-[0.78] tracking-tighter mb-16">
              LET'S
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] via-[#BC2D3F] to-[#EB6621]">
                BUILD IT.
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <button className="bg-[#111114] text-white px-12 md:px-16 py-6 md:py-8 rounded-full font-black text-lg md:text-xl hover:bg-[#5E296F] transition-all duration-500 shadow-2xl shadow-[#111114]/20">
                Start a Project
              </button>

              <button className="flex items-center gap-4 text-[#111114]/70 font-black text-lg md:text-xl group px-8 py-6">
                Schedule Call
                <ArrowRight className="group-hover:translate-x-3 transition-transform text-[#EB6621]" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default ServicesPage;