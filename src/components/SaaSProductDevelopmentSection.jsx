import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ClipboardList,
  Layers,
  Code2,
  Rocket,
  Settings,
  ShieldCheck,
  ChevronRight,
  Database,
  Users,
  BarChart3,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Activity,
  Briefcase,
  BrainCircuit
} from 'lucide-react';

// Images removed as per request for cool animations instead.


/**
 * SaaSProductDevelopmentSection
 * Comprehensive Lifecycle & Vertical Solutions Component for Strydo Technologies Pvt Limited.
 * Colors: Teal (#2997AC), Purple (#6C3483), Orange (#F15A24), Dark (#1A1C1E)
 */

const SaaSProductDevelopmentSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { damping: 30, stiffness: 100 };
  const pathLength = useSpring(scrollYProgress, springConfig);

  const productVerticals = [
    {
      title: "E-Commerce Platforms",
      desc: "Multi-vendor marketplaces with headless architecture and real-time inventory synchronization.",
      icon: <ShoppingBag />,
      color: "#2997AC"
    },
    {
      title: "Fintech Solutions",
      desc: "Secure payment gateways, digital wallets, and automated ledger systems with bank-grade encryption.",
      icon: <Landmark />,
      color: "#6C3483"
    },
    {
      title: "EdTech Ecosystems",
      desc: "Interactive Learning Management Systems (LMS) with virtual classrooms and student performance AI.",
      icon: <GraduationCap />,
      color: "#F15A24"
    },
    {
      title: "HealthTech Portals",
      desc: "HIPAA-compliant telemedicine platforms and electronic health record (EHR) management systems.",
      icon: <Activity />,
      color: "#2997AC"
    },
    {
      title: "Enterprise ERP/CRM",
      desc: "Custom resource planning and client management tools tailored for high-growth corporate workflows.",
      icon: <Briefcase />,
      color: "#1A1C1E"
    },
    {
      title: "AI-Powered SaaS",
      desc: "Predictive analytics dashboards and automated business intelligence integrated directly into your stack.",
      icon: <BrainCircuit />,
      color: "#6C3483"
    }
  ];

  const saasLifecycle = [
    {
      id: "01",
      title: "Discovery & Strategy",
      phase: "Requirements Gathering",
      desc: "We align with stakeholders to define business goals, user personas, and technical feasibility through intensive PRD sessions.",
      color: "#2997AC",
      icon: <ClipboardList />,
      features: ["Market Analysis", "Tech Stack Selection"],
      details: ["User Personas", "Business Logic Modeling", "Feasibility Studies"]
    },
    {
      id: "02",
      title: "Architectural Blueprinting",
      phase: "Design & Prototyping",
      desc: "Designing high-availability microservices and cloud-native structures for multi-tenancy and horizontal scaling.",
      color: "#6C3483",
      icon: <Layers />,
      features: ["Schema Design", "UI/UX High-Fidelity"],
      details: ["Database Normalization", "API Gateway Patterns", "Security Layers"]
    },
    {
      id: "03",
      title: "Agile Engineering",
      phase: "Sprint Development",
      desc: "Building modular components with React and Node.js using TDD (Test Driven Development) to ensure absolute code quality.",
      color: "#F15A24",
      icon: <Code2 />,
      features: ["CI/CD Integration", "Feature Flagging"],
      details: ["Unit Testing", "Micro-frontend Setup", "Real-time Sync"]
    },
    {
      id: "04",
      title: "Deployment & Scale",
      phase: "Go-to-Market",
      desc: "Automated provisioning on AWS/Azure using Infrastructure as Code (IaC) with zero-downtime deployment pipelines.",
      color: "#1A1C1E",
      icon: <Rocket />,
      features: ["Auto-scaling", "Security Audits"],
      details: ["Kubernetes Clustering", "Blue-Green Deployment", "VPC Configuration"]
    },
    {
      id: "05",
      title: "Evolution & Growth",
      phase: "Maintenance & Ops",
      desc: "Post-launch support involving real-time monitoring and iterative updates based on user telemetry and data insights.",
      color: "#5E0006",
      icon: <Settings />,
      features: ["24/7 SRE Support", "Backlog Grooming"],
      details: ["Performance Monitoring", "A/B Testing", "Feedback Loops"]
    }
  ];

  const TechnicalGraphic = ({ item, index }) => {
    const boxRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: boxRef,
      offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
      <motion.div
        ref={boxRef}
        style={{ opacity }}
        className="relative w-full aspect-square max-w-md flex items-center justify-center"
      >
        {/* Animated Background Grids */}
        <div className="absolute inset-0 bg-gray-50/50 rounded-[4rem] border border-gray-100 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: `linear-gradient(${item.color} 1px, transparent 1px), linear-gradient(90deg, ${item.color} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
          />
        </div>

        {/* Parallax Content Elements */}
        <motion.div
          style={{ y: y1, rotate: rotate }}
          className="absolute top-1/4 -left-8 w-40 h-40 bg-white rounded-[3rem] shadow-2xl border border-gray-50 flex flex-col items-center justify-center z-10 p-6"
        >
          <div style={{ color: item.color }} className="mb-4">
            {React.cloneElement(item.icon, { size: 56 })}
          </div>
          <div className="w-full space-y-2">
            <div className="h-1.5 w-3/4 bg-gray-100 rounded-full" />
            <div className="h-1.5 w-1/2 bg-gray-100 rounded-full" />
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-12 w-52 h-64 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 p-8 z-20 flex flex-col"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>

          <div className="space-y-4">
            {item.details.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-1"
              >
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Detail_0{idx + 1}</span>
                <span className="text-[11px] font-semibold text-gray-700 truncate">{detail}</span>
                <div className="h-1 w-full bg-gray-50 rounded-full mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color, opacity: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Central Ambient Glow */}
        <div className="relative z-0 w-72 h-72 rounded-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <div className="text-[150px] font-black opacity-[0.03] select-none" style={{ color: item.color }}>
            0{index + 1}
          </div>
        </div>
      </motion.div>
    );
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 bg-[#F8F9FA] overflow-hidden font-['Inter']"
    >
      {/* Background Animated Path */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-[0.03] pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 1200 3000" fill="none">
          <motion.path d="M600 0V3000" stroke="#2997AC" strokeWidth="4" style={{ pathLength }} />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- Header Section --- */}
        <motion.div className="text-center mb-24" {...fadeInUp}>
          <span className="text-[#6C3483] font-bold tracking-widest uppercase text-sm mb-4 block">
            Strydo Technologies Pvt Limited
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1C1E] font-['Manrope'] mb-8">
            Expert SaaS <span className="text-[#2997AC]">Product Development</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            From conceptual discovery to global scale, we architect high-performance SaaS solutions
            tailored for enterprise reliability and seamless user growth.
          </p>
        </motion.div>

        {/* --- 1. Product Verticals (Vertical Solutions) --- */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold text-[#1A1C1E] font-['Manrope']">Vertical-Specific Solutions</h3>
            <div className="h-[2px] flex-grow bg-gray-100" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group/verticals"
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.1 } }
            }}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {productVerticals.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm transition-all duration-500 group-hover/verticals:blur-[4px] group-hover/verticals:opacity-60 group-hover/verticals:scale-[0.95] hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:shadow-xl flex flex-col items-start z-10 hover:z-20 cursor-pointer"
              >
                <div
                  className="p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${v.color}10`, color: v.color }}
                >
                  {React.cloneElement(v.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold text-[#1A1C1E] mb-3">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- 2. The Lifecycle Flow --- */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="text-2xl font-bold text-[#1A1C1E] font-['Manrope']">The Lifecycle Pipeline</h3>
            <div className="h-[2px] flex-grow bg-gray-100" />
          </div>

          {saasLifecycle.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col lg:flex-row items-center gap-12 mb-40 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Content Card - "Folder" Style */}
              <div className="w-full lg:w-1/2 group relative">
                {/* Folder Tab */}
                <div
                  className="absolute -top-7 left-10 h-12 w-36 rounded-t-3xl z-20 transition-transform duration-500 group-hover:-translate-y-2 shadow-lg flex items-center justify-center pt-2"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="text-[10px] font-bold text-white uppercase tracking-widest">
                    Phase {item.id}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ boxShadow: `0 0 50px ${item.color}40` }}
                  className="relative rounded-[2.5rem] rounded-tl-none transition-all duration-[400ms] overflow-hidden z-10"
                  style={{
                    backgroundColor: item.color,
                    transitionTimingFunction: 'cubic-bezier(0, 0, 0, 1)'
                  }}
                >
                  <div className="bg-white h-full p-10 transition-all duration-[400ms] hover:scale-[0.98] hover:rounded-[2.4rem] cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5" style={{ color: item.color }}>
                      {React.cloneElement(item.icon, { size: 100 })}
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6" style={{ color: item.color }}>
                        <span className="w-6 h-[2px]" style={{ backgroundColor: item.color }} />
                        {item.phase}
                      </div>
                      <h4 className="text-3xl font-bold text-[#1A1C1E] mb-4 flex items-center gap-3">
                        <span className="text-gray-200 font-['Inter']">0{index + 1}</span> {item.title}
                      </h4>
                      <p className="text-gray-500 mb-8 leading-relaxed text-base">{item.desc}</p>

                      <div className="space-y-4 mb-8">
                        {item.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-sm text-gray-600 font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.features.map((f, i) => (
                          <span key={i} className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg border border-gray-100 uppercase tracking-tighter">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Center Node Indicator */}
              <div className="hidden lg:flex shrink-0 w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-lg items-center justify-center z-20 overflow-hidden relative">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundColor: item.color }}
                />
                <div style={{ color: item.color }}>{React.cloneElement(item.icon, { size: 28 })}</div>
              </div>

              {/* Graphic Side - Parallax & Image Sequence Style Animations */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <TechnicalGraphic item={item} index={index} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Closing Summary Section --- */}
        <motion.div
          className="mt-40 p-1 bg-gradient-to-br from-[#2997AC] via-[#6C3483] to-[#F15A24] rounded-[3rem]"
          {...fadeInUp}
        >
          <div className="bg-[#1A1C1E] rounded-[2.9rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 font-['Manrope'] leading-tight">
                Engineering <span className="text-[#2997AC]">Resilience</span> Into Every Microservice
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Our approach ensures your product is not just a tool, but a robust ecosystem.
                We handle the complexity of multi-tenancy, data isolation, and global latency
                so you can focus on scaling your business.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div><div className="text-2xl font-bold text-white">99.9%</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">SLA Uptime</div></div>
                <div><div className="text-2xl font-bold text-white">SOC2</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">Compliant</div></div>
                <div><div className="text-2xl font-bold text-white">24/7</div><div className="text-[10px] text-gray-500 uppercase tracking-widest">Monitoring</div></div>
              </div>
            </div>

            <div className="lg:w-2/5 grid grid-cols-2 gap-4">
              {[
                { icon: <ShieldCheck />, label: "Security-First", col: "#2997AC" },
                { icon: <Database />, label: "Scale-Out DB", col: "#6C3483" },
                { icon: <Users />, label: "Multi-Tenant", col: "#F15A24" },
                { icon: <BarChart3 />, label: "Live Telemetry", col: "#2997AC" }
              ].map((pill, p) => (
                <div key={p} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col items-center gap-3">
                  <div style={{ color: pill.col }}>{React.cloneElement(pill.icon, { size: 24 })}</div>
                  <span className="text-white text-[11px] font-bold uppercase tracking-wider">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Footer */}
        <div className="mt-24 text-center">
          <button className="group relative flex items-center justify-center gap-4 px-12 py-6 border-4 border-transparent bg-transparent rounded-full font-bold text-[#2997AC] shadow-[0_0_0_2px_#2997AC] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-white hover:rounded-2xl active:scale-95 mx-auto">
            {/* Arriving Arrow (comes from left) */}
            <ChevronRight
              size={24}
              className="absolute left-[-25%] z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-6 text-white"
            />

            {/* Button Text */}
            <span className="relative z-20 text-lg -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-4">
              Initiate Product Discovery
            </span>

            {/* Expanding Background Circle */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#2997AC] rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[150%] group-hover:h-[500%] group-hover:opacity-100 z-10" />

            {/* Exiting Arrow (moves to right) */}
            <ChevronRight
              size={24}
              className="absolute right-6 z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] text-[#2997AC] group-hover:text-white"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SaaSProductDevelopmentSection;