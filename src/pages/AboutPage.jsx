import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { motion } from "framer-motion";
import teamPhoto from "../assets/IMG_3240.JPG.jpeg";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  Globe2,
  MapPin,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

/* =========================================================
   COMPANY DATA
========================================================= */

const stats = [
  {
    value: "2012",
    label: "Founded",
  },
  {
    value: "25+",
    label: "Technology Stack",
  },
  {
    value: "02",
    label: "Technology Hubs",
  },
  {
    value: "∞",
    label: "Possibilities",
  },
];

const associations = [
  {
    name: "L&T",
    label: "Enterprise Ecosystem",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
  },
  {
    name: "ICT Academy",
    label: "Technology Ecosystem",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwX2xVpznzrXTlIR8A1DJS_0RunR7tHJEPseU-KWFE7Jan6Ct3otF54Io&s=10",
  },
  {
    name: "NASSCOM",
    label: "Technology Industry",
    logo: "https://www.itvoice.in/wp-content/uploads/2013/02/NASSCOM-logo1.jpg",
  },
  {
    name: "CII",
    label: "Industry Ecosystem",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSCM66Os3nOomcRIqmYEj-npujvxenqZKDhzY8POyUA&s=10",
  },
];

const principles = [
  {
    number: "01",
    title: "Think beyond today",
    text: "We believe technology should be created with the future in mind — not simply to solve today's requirement.",
  },
  {
    number: "02",
    title: "Understand before building",
    text: "Every meaningful solution starts with understanding people, processes, challenges and the context around them.",
  },
  {
    number: "03",
    title: "Stay relentlessly curious",
    text: "Technology evolves continuously. So do we. Learning, experimenting and adapting are part of our culture.",
  },
  {
    number: "04",
    title: "Build relationships",
    text: "We see every engagement as a relationship built on trust, communication and shared growth.",
  },
];

const values = [
  {
    title: "Business-First Thinking",
    desc: "We understand the business problem before choosing the technology.",
    icon: Target,
    color: "#3B7B84",
  },
  {
    title: "Modern Engineering",
    desc: "We use current technologies and scalable architectures by default.",
    icon: Zap,
    color: "#5E296F",
  },
  {
    title: "Custom Solutions",
    desc: "We build around requirements rather than forcing a template.",
    icon: Sparkles,
    color: "#EB6621",
  },
  {
    title: "Long-Term Partnership",
    desc: "Our relationship doesn't end when the software launches.",
    icon: Users,
    color: "#BC2D3F",
  },
  {
    title: "Innovation",
    desc: "We continuously explore AI and emerging technologies.",
    icon: Rocket,
    color: "#3B7B84",
  },
  {
    title: "Reliability",
    desc: "Security, stability and engineering discipline remain fundamental.",
    icon: ShieldCheck,
    color: "#5E296F",
  },
];

const ecosystem = [
  {
    name: "Startup India",
    logo: "https://www.uxdt.nic.in/wp-content/uploads/2020/06/Startup-India_Preview.png",
  },
  {
    name: "Startup Tamil Nadu",
    logo: "https://content3.jdmagicbox.com/v2/comp/chennai/k1/044pxx44.xx44.211124072456.h9k1/catalogue/startuptn-tharamani-chennai-government-organisations-b3ws7d1r7d.jpg",
  },
];

const hubs = [
  {
    number: "01",
    city: "Vellore",
    state: "Tamil Nadu, India",
    text: "Our primary engineering core, located in Katpadi, with a focus on R&D and full-stack engineering.",
    icon: MapPin,
  },
  {
    number: "02",
    city: "Tirupati",
    state: "Andhra Pradesh, India",
    text: "Our strategic growth center, located at AIR Bypass Road, with a focus on AI solutions and CRM systems.",
    icon: MapPin,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Reveal = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   SECTION LABEL
========================================================= */

const SectionLabel = ({ children }) => {
  return (
    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#EB6621]">
      <span className="h-px w-8 bg-[#EB6621]" />
      {children}
    </div>
  );
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#111114] selection:bg-[#5E296F] selection:text-white">
      <Navbar />

      {/* =====================================================
          01 — LIGHT PREMIUM HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7F7F4]">
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111114 1px, transparent 1px), linear-gradient(90deg, #111114 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#5E296F]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#3B7B84]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-48">
          <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_.85fr]">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#EB6621]" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/50">
                  Est. 2012 · Strydo Technologies
                </span>
              </div>

              <h1 className="max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.065em] md:text-8xl lg:text-[108px]">
                We are
                <br />
                <span className="bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621] bg-clip-text text-transparent">
                  Strydo.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-lg leading-8 text-gray-500 md:text-xl">
                A technology company built around a simple belief:
                meaningful technology should create meaningful progress.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button className="group flex items-center gap-4 rounded-full bg-[#111114] px-7 py-4 text-sm font-black text-white transition-all hover:bg-[#5E296F]">
                  Discover our story

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <div className="flex items-center gap-3 text-xs font-bold text-gray-400">
                  <span className="h-px w-8 bg-gray-300" />
                  Since 2012
                </div>
              </div>
            </Reveal>

            {/* HERO VISUAL */}
            <Reveal delay={0.12}>
              <div className="relative mx-auto aspect-square w-full max-w-[500px]">
                {/* Outer rings */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-4 rounded-full border border-black/[0.08]"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-16 rounded-full border border-dashed border-[#5E296F]/20"
                />

                <div className="absolute inset-28 rounded-full border border-[#3B7B84]/20" />

                {/* Orbit points */}
                <span className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-[#3B7B84] shadow-[0_0_20px_rgba(59,123,132,.4)]" />

                <span className="absolute right-[15%] top-[22%] h-4 w-4 rounded-full bg-[#EB6621] shadow-[0_0_20px_rgba(235,102,33,.35)]" />

                <span className="absolute bottom-[17%] left-[28%] h-3 w-3 rounded-full bg-[#5E296F] shadow-[0_0_20px_rgba(94,41,111,.35)]" />

                {/* Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-[0_30px_100px_rgba(17,17,20,.08)] backdrop-blur-xl md:h-60 md:w-60">
                    <div className="absolute inset-5 rounded-full border border-black/[0.05]" />

                    <div className="text-center">
                      <div className="text-4xl font-black tracking-[-0.07em] md:text-5xl">
                        STRYDO
                        <span className="text-[#EB6621]">.</span>
                      </div>

                      <div className="mt-2 text-[8px] font-black uppercase tracking-[0.35em] text-gray-400">
                        Technology · Innovation · Growth
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating labels */}
                <div className="absolute left-0 top-[20%] max-w-[150px]">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-300">
                    Founded
                  </p>

                  <p className="mt-1 text-sm font-black">
                    2012
                  </p>
                </div>

                <div className="absolute bottom-[17%] right-0 max-w-[160px] text-right">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-300">
                    Built around
                  </p>

                  <p className="mt-1 text-sm font-black">
                    people & progress
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="mx-auto max-w-7xl border-t border-black/[0.07]" />
      </section>

      {/* =====================================================
          02 — ASSOCIATIONS / CREDIBILITY
      ===================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <Reveal>
              <div className="border-b border-black/[0.07] py-16 lg:border-b-0 lg:border-r lg:py-20 lg:pr-16">
                <SectionLabel>Our ecosystem</SectionLabel>

                <h2 className="mt-7 text-3xl font-black leading-tight tracking-[-0.045em] md:text-4xl">
                  Growing alongside
                  <br />
                  <span className="text-[#5E296F]">
                    India's ecosystem.
                  </span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
                  Our journey has been strengthened by connections with
                  established enterprises, industry organizations and
                  technology communities.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4">
              {associations.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.08}>
                  <div className="group flex min-h-[190px] flex-col justify-between border-b border-black/[0.07] p-7 transition-all duration-500 hover:bg-[#F7F7F4] md:border-b-0 md:border-r md:p-8 last:border-r-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black tracking-[0.25em] text-gray-300">
                        0{index + 1}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-gray-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EB6621]"
                      />
                    </div>

                    <div className="mt-4 flex h-24 items-center">
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="max-h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextSibling.style.display = "block";
                        }}
                      />
                      <span className="hidden text-xl font-black tracking-tight text-gray-400">
                        {item.name}
                      </span>
                    </div>

                    <p className="mt-4 text-[9px] font-black uppercase leading-4 tracking-[0.16em] text-gray-400">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — COMPANY STORY
      ===================================================== */}

      <section className="bg-[#F7F7F4] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-20 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <SectionLabel>Our story</SectionLabel>

              <h2 className="mt-8 text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
                Built with
                <br />
                <span className="text-[#3B7B84]">
                  intention.
                </span>
              </h2>

              <div className="mt-12 flex items-center gap-4">
                <div className="text-6xl font-black tracking-[-0.08em] text-black/10">
                  2012
                </div>

                <div className="h-px w-16 bg-[#EB6621]" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-3xl">
                <p className="text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-[#25252A] md:text-3xl">
                  Strydo Technologies was founded with a simple yet powerful
                  idea: technology should think as much as it delivers.
                </p>

                <div className="mt-10 space-y-6 text-base leading-8 text-gray-500">
                  <p>
                    Since 2012, we have grown as a technology company focused
                    on helping startups, enterprises and organizations turn
                    business challenges into reliable and scalable digital
                    solutions.
                  </p>

                  <p>
                    Our journey has been shaped by engineering, curiosity,
                    relationships and the belief that good technology is not
                    simply about what is technically possible.
                  </p>

                  <p>
                    It is about understanding the people and organizations
                    behind the problem—and creating something that genuinely
                    moves them forward.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — THE PEOPLE BEHIND THE WORK
      ===================================================== */}

      <section className="bg-[#F7F7F4] px-6 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="group relative isolate overflow-hidden rounded-[28px] bg-[#111114] md:rounded-[42px]">
              <img
                src={teamPhoto}
                alt="The Strydo team together in the office"
                className="h-[420px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] md:h-[620px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111114]/80 via-[#111114]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-7 text-white md:flex-row md:items-end md:justify-between md:p-12">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EB6621]">
                    The people behind the progress
                  </p>

                  <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
                    Technology is built by people who care.
                  </h2>
                </div>

                <p className="max-w-xs text-sm leading-6 text-white/70">
                  A team grounded in curiosity, collaboration and the belief
                  that good work should move people forward.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          05 — STATS
      ===================================================== */}

      <section className="bg-[#111114] py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="border-r border-white/10 px-6 py-4 text-center first:pl-0 last:border-r-0 last:pr-0 lg:text-left">
                  <div className="text-5xl font-black tracking-[-0.07em] md:text-6xl">
                    {item.value}
                  </div>

                  <div className="mt-3 text-[9px] font-black uppercase tracking-[0.25em] text-white/30">
                    {item.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — WHAT DEFINES US
      ===================================================== */}

      <section className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <Reveal>
              <SectionLabel>What defines us</SectionLabel>

              <h2 className="mt-8 text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
                More than
                <br />
                <span className="text-[#5E296F]">
                  technology.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-7 text-gray-500 md:ml-auto">
                Technology is what we work with. People, purpose and progress
                are what define us.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 border-t border-black/10">
            {principles.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.05}>
                <div className="group grid gap-8 border-b border-black/10 py-10 md:grid-cols-[100px_1fr_1.3fr] md:items-center">
                  <span className="text-xs font-black tracking-[0.2em] text-gray-300">
                    {item.number}
                  </span>

                  <h3 className="text-2xl font-black tracking-[-0.04em] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — MISSION / VISION
      ===================================================== */}

      <section className="bg-[#F7F7F4] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <Reveal>
            <SectionLabel>Our direction</SectionLabel>

            <h2 className="mt-8 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
              Purpose gives
              <br />
              <span className="text-[#EB6621]">
                technology meaning.
              </span>
            </h2>
          </Reveal>

          <div className="mt-20 grid lg:grid-cols-2">
            <Reveal>
              <div className="border-t border-black/10 py-12 lg:border-r lg:pr-16">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5E296F]">
                    01 / Our Mission
                  </span>

                  <Target size={24} className="text-[#5E296F]" />
                </div>

                <p className="mt-16 max-w-xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
                  To empower global businesses by engineering intelligent
                  digital solutions that solve complex problems, streamline
                  operations and create sustainable market value.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-black/10 py-12 lg:pl-16">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#3B7B84]">
                    02 / Our Vision
                  </span>

                  <Eye size={24} className="text-[#3B7B84]" />
                </div>

                <p className="mt-16 max-w-xl text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
                  To be a trusted technical partner, recognized for our
                  ability to transform business ideas into high-performance
                  technological realities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — CORE VALUES
      ===================================================== */}

      <section className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <Reveal>
              <SectionLabel>The Strydo DNA</SectionLabel>

              <h2 className="mt-8 text-5xl font-black tracking-[-0.06em] md:text-7xl">
                Principles
                <br />
                <span className="text-[#3B7B84]">
                  we live by.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-7 text-gray-500 md:ml-auto">
                The tools and technologies may evolve. The principles behind
                how we work remain constant.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <div className="group relative min-h-[270px] overflow-hidden border-b border-r border-black/10 bg-white p-8 transition-all duration-500 md:p-10">
                    {/* Solid hover background — one brand color per card */}
                    <div
                      className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ backgroundColor: value.color }}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[9px] font-black tracking-[0.25em] text-gray-300 transition-colors group-hover:text-white/30">
                        0{index + 1}
                      </span>

                      <Icon
                        size={21}
                        className="text-[#EB6621] transition-all group-hover:scale-110 group-hover:text-white"
                      />
                    </div>

                    <div className="relative z-10 mt-16">
                      <h3 className="text-xl font-black tracking-[-0.03em] transition-colors group-hover:text-white">
                        {value.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-gray-500 transition-colors group-hover:text-white/80">
                        {value.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — ECOSYSTEM / STARTUP AFFILIATIONS
      ===================================================== */}

      <section className="bg-[#F7F7F4] py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <SectionLabel>Ecosystem & initiatives</SectionLabel>

              <h2 className="mt-8 text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
                Growing with
                <br />
                India's
                <br />
                <span className="text-[#EB6621]">
                  startup ecosystem.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-gray-500">
                Our connection with the broader startup and innovation
                ecosystem reflects our commitment to learning, collaboration
                and growth.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-black/10">
                <div className="grid gap-0 md:grid-cols-2">
                  {ecosystem.map((item, index) => (
                    <div
                      key={item.name}
                      className="group flex min-h-[170px] flex-col justify-between border-b border-black/10 p-8 transition-all hover:bg-white md:p-10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-black tracking-[0.25em] text-gray-300">
                          0{index + 1}
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="text-gray-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#EB6621]"
                        />
                      </div>

                      <div>
                        <div className="mb-3 flex h-20 items-center">
                          <img
                            src={item.logo}
                            alt={`${item.name} logo`}
                            className="max-h-16 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextSibling.style.display = "block";
                            }}
                          />
                          <span className="hidden text-lg font-black tracking-tight text-gray-400">
                            {item.name}
                          </span>
                        </div>
                        <h3 className="text-xl font-black tracking-[-0.04em]">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 text-xs leading-6 text-gray-400">
                  <Check size={16} className="mt-1 shrink-0 text-[#3B7B84]" />

                  <p>
                    Present these as official affiliations, recognitions or
                    ecosystem initiatives according to the company's actual
                    status with each organization.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — LOCATIONS
      ===================================================== */}

      <section className="bg-white py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid items-end gap-10 md:grid-cols-2">
            <Reveal>
              <SectionLabel>Our presence</SectionLabel>

              <h2 className="mt-8 text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
                Rooted in
                <br />
                <span className="text-[#5E296F]">
                  India.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-7 text-gray-500 md:ml-auto">
                With technology hubs in Vellore and Tirupati, our people work
                across engineering, innovation and business transformation.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-px border border-black/10 bg-black/10 lg:grid-cols-2">
            {hubs.map((hub, index) => {
              const Icon = hub.icon;

              return (
                <Reveal key={hub.city} delay={index * 0.1}>
                  <div className="group relative min-h-[390px] overflow-hidden bg-white p-10 md:p-14">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#3B7B84]/[0.035] transition-all duration-700 group-hover:h-full group-hover:w-full group-hover:rounded-none" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <Icon
                            size={30}
                            className={
                              index === 0
                                ? "text-[#3B7B84]"
                                : "text-[#EB6621]"
                            }
                          />

                          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-300">
                            Hub {hub.number}
                          </span>
                        </div>

                        <h3 className="mt-14 text-4xl font-black tracking-[-0.05em]">
                          {hub.city}
                        </h3>

                        <p className="mt-2 text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">
                          {hub.state}
                        </p>
                      </div>

                      <p className="max-w-md text-base leading-7 text-gray-500">
                        {hub.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — COMPANY STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7F7F4] px-6 py-28 md:px-12 md:py-40">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5E296F]/[0.04] blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <Reveal>
            <Quote
              size={38}
              className="mx-auto mb-10 text-[#EB6621]"
            />

            <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              "Technology should not
              <br />
              simply change what we do.
              <br />
              <span className="text-[#5E296F]">
                It should change what is possible."
              </span>
            </h2>

            <div className="mx-auto mt-12 h-px w-16 bg-black/20" />

            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              The Strydo philosophy
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          11 — FINAL CTA
      ===================================================== */}

      <section className="px-4 pb-8 md:px-8 md:pb-10">
        <div className="relative overflow-hidden rounded-[35px] bg-[#111114] px-6 py-24 text-white md:rounded-[50px] md:px-12 md:py-32">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#5E296F]/20 blur-[120px]" />

          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#3B7B84]/10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <SectionLabel>Let's connect</SectionLabel>

              <h2 className="mt-8 text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl">
                Let's create
                <br />
                <span className="bg-gradient-to-r from-[#3B7B84] via-[#BC2D3F] to-[#EB6621] bg-clip-text text-transparent">
                  what comes next.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/40">
                Whether you are building something new, transforming an
                existing business or simply exploring what technology can make
                possible, we'd love to hear from you.
              </p>

              <div className="mt-10">
                <button className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-black text-[#111114] transition-all hover:bg-[#EB6621] hover:text-white">
                  Talk to Strydo

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;