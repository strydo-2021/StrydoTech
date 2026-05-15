import React from 'react';
import { motion } from 'framer-motion';
import {
  Megaphone,
  Globe,
  Target,
  Mail,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  MousePointerClick,
  Activity,
  GitMerge
} from 'lucide-react';

/**
 * Strydo Technologies - Digital Marketing Suite
 * A high-density section for stakeholders and clients.
 * Theme: Light (Teal, Purple, Orange)
 */

const DigitalMarketing = () => {

  const products = [
    {
      title: "SEO & Content Strategy",
      headline: "Rank Higher, Reach Further",
      description: "A holistic SEO engine that audits your entire digital footprint — from technical crawl health to content relevance scores. Dominate search rankings through data-backed keyword strategies and authoritative content plans.",
      features: ["Technical SEO Audits", "Keyword Gap Analysis", "Content Calendar Builder", "Backlink Authority Tracker"],
      icon: <Globe className="w-6 h-6" />,
      color: "text-[#2997AC]",
      borderColor: "hover:border-[#2997AC]/40",
      bg: "bg-[#2997AC]/5"
    },
    {
      title: "Paid Advertising (PPC)",
      headline: "Every Rupee, Maximized",
      description: "From Google Ads to Meta and LinkedIn campaigns, our PPC specialists craft high-converting ad creatives backed by real-time performance analytics. Eliminate wasted spend and scale what actually works for your audience.",
      features: ["Multi-Platform Campaign Mgmt", "Ad Creative A/B Testing", "Bid Optimization Algorithms", "ROAS & CPA Reporting"],
      icon: <Target className="w-6 h-6" />,
      color: "text-[#6C3483]",
      borderColor: "hover:border-[#6C3483]/40",
      bg: "bg-[#6C3483]/5"
    },
    {
      title: "Social Media Marketing",
      headline: "Build Your Brand's Voice",
      description: "Stop posting into the void. We build social media systems — not just schedules — that drive community growth, brand loyalty, and measurable conversions across every platform your audience lives on.",
      features: ["Platform-Specific Strategies", "Influencer Collaboration", "Community Management", "Viral Content Frameworks"],
      icon: <Megaphone className="w-6 h-6" />,
      color: "text-[#F15A24]",
      borderColor: "hover:border-[#F15A24]/40",
      bg: "bg-[#F15A24]/5"
    },
    {
      title: "Email & CRM Marketing",
      headline: "Nurture Leads, Close Deals",
      description: "Automated, hyper-personalized email journeys that move prospects through every funnel stage. From welcome sequences to win-back campaigns, we transform your CRM into a revenue-generating asset.",
      features: ["Drip Campaign Automation", "Segmentation & Personalization", "Deliverability Optimization", "CLV & Retention Analytics"],
      icon: <Mail className="w-6 h-6" />,
      color: "text-[#5E0006]",
      borderColor: "hover:border-[#5E0006]/40",
      bg: "bg-[#5E0006]/5"
    }
  ];

  const processFlow = [
    {
      phase: "01. Discovery",
      title: "Audience & Market Research",
      desc: "We conduct deep-dive audits of your brand, competitors, and target audience personas to build a marketing foundation grounded in real-world data.",
      icon: <GitMerge size={20} />
    },
    {
      phase: "02. Strategy",
      title: "Full-Funnel Blueprint",
      desc: "We map out a tailored, multi-channel strategy covering paid, organic, social, and email — ensuring every channel works in concert to drive growth.",
      icon: <Activity size={20} />
    },
    {
      phase: "03. Execution",
      title: "Launch & Scale Campaigns",
      desc: "Our team activates campaigns with precision-targeted creative assets, optimized landing pages, and real-time performance monitoring from day one.",
      icon: <MousePointerClick size={20} />
    },
    {
      phase: "04. Iteration",
      title: "Optimize & Report",
      desc: "Weekly performance reports, monthly strategy reviews, and continuous A/B testing ensure your campaigns improve every single cycle.",
      icon: <Zap size={20} />
    }
  ];

  return (
    <section className="relative py-24 lg:py-40 bg-[#FFFFFF] font-['Inter'] overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#2997AC] font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            Performance-Driven Marketing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold font-['Manrope'] text-[#1A1C1E] leading-[1.1] mb-8"
          >
            Digital Marketing <span className="italic font-light">Suite</span>
          </motion.h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Great products deserve great marketing. We build end-to-end digital marketing ecosystems — combining SEO, paid media, social, and email — to consistently attract, engage, and convert your ideal customers.
          </p>
        </div>

        {/* --- PRODUCT GRID (Bento Style) --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ boxShadow: `0 0 50px ${product.color.replace('text-[', '').replace(']', '')}40` }}
              className="relative rounded-[2.5rem] transition-all duration-[400ms] overflow-hidden"
              style={{
                backgroundColor: product.color.replace('text-[', '').replace(']', ''),
                transitionTimingFunction: 'cubic-bezier(0, 0, 0, 1)'
              }}
            >
              <div
                className="bg-white h-full p-8 lg:p-12 transition-all duration-[400ms] hover:scale-[0.98] hover:rounded-[2.4rem] cursor-pointer group"
                style={{ transitionTimingFunction: 'cubic-bezier(0, 0, 0, 1)' }}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 rounded-2xl ${product.bg} ${product.color} border border-transparent group-hover:border-current/10 transition-colors`}>
                    {product.icon}
                  </div>
                  <div className="px-3 py-1 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50">
                    Strydo Marketing v2.0
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className={`text-sm font-bold ${product.color} mb-2 uppercase tracking-wider`}>{product.title}</h4>
                  <h3 className="text-2xl font-bold font-['Manrope'] text-[#1A1C1E] mb-4">{product.headline}</h3>
                  <p className="text-gray-500 leading-relaxed text-base">
                    {product.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-gray-50 pt-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className={product.color} />
                      <span className="text-sm font-medium text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="mt-10 flex items-center gap-2 text-sm font-bold text-[#1A1C1E] group-hover:gap-4 transition-all"
                >
                  Learn More <ArrowUpRight size={16} className={product.color} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PROCESS SECTION: THE "HOW" --- */}
        <div className="bg-[#1A1C1E] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-['Manrope'] font-bold text-white leading-tight">
                How we launch your <br />
                <span className="text-[#2997AC]">Marketing Engine</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe that effective marketing is built on clarity, not guesswork. Our 4-phase process ensures every campaign is strategically sound, creatively compelling, and measurably effective.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                <div className="flex flex-col gap-3">
                  <ShieldCheck size={32} className="text-[#2997AC]" />
                  <h5 className="text-white font-bold">Brand-Safe Campaigns</h5>
                  <p className="text-xs text-gray-500">All ad creatives and copy reviewed for brand consistency and compliance.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <MousePointerClick size={32} className="text-[#6C3483]" />
                  <h5 className="text-white font-bold">ROI-First Mindset</h5>
                  <p className="text-xs text-gray-500">Every decision is tied back to cost-per-acquisition and revenue impact.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {processFlow.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-6 group hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-[#2997AC] to-[#6C3483] flex items-center justify-center text-white font-bold text-lg">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#2997AC] uppercase tracking-widest">{step.phase}</span>
                    <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* --- STAKEHOLDER CLOSING --- */}
        <div className="mt-32 text-center max-w-2xl mx-auto">
          <div className="mb-8 inline-block p-2 bg-[#F15A24]/10 rounded-full">
            <div className="w-12 h-12 rounded-full bg-[#F15A24] flex items-center justify-center text-white">
              <Zap size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#1A1C1E] mb-4">Turn Your Brand into a Growth Machine</h3>
          <p className="text-gray-500 mb-10">
            Most businesses have great products but invisible marketing. Strydo Technologies builds the digital presence that makes your brand impossible to ignore.
          </p>
          <button className="group relative flex items-center justify-center gap-4 px-12 py-6 border-4 border-transparent bg-transparent rounded-full font-bold text-[#2997AC] shadow-[0_0_0_2px_#2997AC] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-white hover:rounded-2xl active:scale-95 mx-auto">
            {/* Arriving Arrow (comes from left) */}
            <ChevronRight
              size={24}
              className="absolute left-[-25%] z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-6 text-white"
            />

            {/* Button Text */}
            <span className="relative z-20 text-lg -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-4">
              Start Your Marketing Journey
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

export default DigitalMarketing;
