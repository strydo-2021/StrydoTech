import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  Mail,
  Cpu,
  Globe,
  Lock,
} from 'lucide-react';

import img1 from '../images/c1.jpg';
import img2 from '../images/c2.png';
import img3 from '../images/programmer_v_02.jpg';
import img4 from '../images/dev.jpg';

/**
 * The dynamic version of your Card component.
 * It displays the "Technical" side of the phase.
 */
const ProcessCard = ({ step }) => {
  return (
    <StyledCardWrapper accentColor={step.color}>
      <div className="card">
        <button className="mail">
          <Mail size={20} />
        </button>

        <div className="profile-pic">
          <div className="icon-container w-full h-full">
            {step.image ? (
                <img src={step.image} alt={step.cardTitle} className="w-full h-full object-cover" />
            ) : (
                step.icon
            )}
          </div>
        </div>

        <div className="bottom">
          <div className="content">
            <span className="name">{step.cardTitle}</span>
            <span className="about-me">{step.cardSubtitle}</span>
            <div className="technical-list">
               {step.details.map((detail, index) => (
                 <div key={index} className="detail-item">
                    <div className="dot" /> {detail}
                 </div>
               ))}
            </div>
          </div>
          <div className="bottom-bottom">
            <div className="tech-stack-icons">
               <ShieldCheck size={14} />
               <Cpu size={14} />
               <Lock size={14} />
            </div>
            <button className="button">Technical Docs</button>
          </div>
        </div>
      </div>
    </StyledCardWrapper>
  );
};

const StrydoSaaSFlow = () => {
  const containerRef = useRef(null);

  const steps = [
    {
      id: "01",
      // Left Side (Business/Strategic)
      title: "Mapping Your Digital Ecosystem",
      description: "We perform a deep-dive audit of your current silos. Our goal is to find the friction points between your CRM, legacy databases, and 3rd party APIs to ensure a clean handshake.",
      benefits: ["Security Audit", "Data Flow Mapping", "Auth Strategy"],
      
      // Card Content (Technical/Tactical)
      cardTitle: "Endpoint Connector",
      cardSubtitle: "Connectivity Layer v1.0",
      image: img1,
      color: "#2997AC",
      details: ["OAuth2 Implementation", "Schema Normalization", "Endpoint Discovery"]
    },
    {
      id: "02",
      // Left Side
      title: "Intelligent Orchestration",
      description: "Building the 'Brain' of your automation. We design conditional logic that handles thousands of concurrent events, transforming raw data into actionable business outcomes.",
      benefits: ["Logic Branching", "Error Handling", "State Retention"],
      
      // Card Content
      cardTitle: "Logic Engine",
      cardSubtitle: "Workflow Orchestrator",
      image: img2,
      color: "#6C3483",
      details: ["Webhook Listeners", "JSON Transformations", "Async Queueing"]
    },
    {
      id: "03",
      // Left Side
      title: "Elastic Infrastructure",
      description: "We deploy your integrations onto high-availability cloud environments. As your user base grows, your automation engine scales automatically without manual intervention.",
      benefits: ["Auto-Scaling", "High Availability", "Edge Deployment"],
      
      // Card Content
      cardTitle: "Cloud Sentinel",
      cardSubtitle: "Scalability Module",
      image: img3,
      color: "#F15A24",
      details: ["Docker Containerization", "K8s Orchestration", "Load Balancing"]
    },
    {
      id: "04",
      // Left Side
      title: "Continuous Optimization",
      description: "Automation is never finished. We provide real-time monitoring and proactive patching to ensure your integrations evolve alongside API version changes.",
      benefits: ["99.9% Uptime", "Proactive Patching", "Latency Tracking"],
      
      // Card Content
      cardTitle: "Health Monitor",
      cardSubtitle: "Maintenance Node",
      image: img4,
      color: "#8494FF",
      details: ["Real-time Logging", "Version Upgrades", "Throughput Analysis"]
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 lg:py-40 bg-[#F8F9FA] overflow-hidden font-['Inter']">
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-32 space-y-6">
          <motion.div className="flex items-center justify-center gap-3 text-[#2997AC] font-bold tracking-[0.3em] uppercase text-[10px]">
            <span className="w-12 h-[1px] bg-[#2997AC]"></span>
            System Lifecycle
            <span className="w-12 h-[1px] bg-[#2997AC]"></span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1C1E] tracking-tight">
            How we bridge the <span className="text-[#2997AC]">Technical Gap.</span>
          </h2>
        </div>

        {/* Steps Loop */}
        <div className="grid grid-cols-1 gap-40">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center justify-between gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Strategic Side */}
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                    <span className="text-5xl font-black opacity-10" style={{ color: step.color }}>{step.id}</span>
                    <div className="h-[2px] w-12 opacity-20" style={{ backgroundColor: step.color }} />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Phase Overview</span>
                </div>
                
                <h3 className="text-4xl font-extrabold text-[#1A1C1E] leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{step.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {step.benefits.map((b, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-[11px] font-bold text-gray-500 uppercase tracking-tight shadow-sm">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Card Side */}
              <div className="lg:w-1/2 flex justify-center relative">
                 {/* Visual decoration behind card */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-100 to-transparent rounded-full blur-3xl opacity-50 -z-10" />
                 <ProcessCard step={step} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-48 text-center bg-[#1A1C1E] p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-10 text-white"><Globe size={200}/></div>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to unify your <br/>enterprise tech stack?</h3>
          <button className="group relative flex items-center justify-center gap-4 px-12 py-6 border-4 border-transparent bg-transparent rounded-full font-bold text-[#2997AC] shadow-[0_0_0_2px_#2997AC] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-white hover:rounded-2xl active:scale-95 mx-auto">
            {/* Arriving Arrow (comes from left) */}
            <ChevronRight 
              size={24} 
              className="absolute left-[-25%] z-20 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-6 text-white" 
            />
            
            {/* Button Text */}
            <span className="relative z-20 text-lg -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-4">
              Get Technical Consultation
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

/**
 * Styled Components
 */
const StyledCardWrapper = styled.div`
  .card {
    width: 320px;
    height: 320px;
    background: white;
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: #604b4a30 0px 70px 30px -50px;
    transition: all 0.5s ease-in-out;
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
    z-index: 10;
  }

  .card .mail svg {
    stroke: ${props => props.accentColor || '#fbb9b6'};
    stroke-width: 2px;
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    overflow: hidden;
    transition: all 0.5s ease-in-out 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fafafa;
  }

  .card .profile-pic .icon-container {
    color: ${props => props.accentColor};
    transition: all 0.5s ease-in-out;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: ${props => props.accentColor || '#fbb9b6'};
    top: 82%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px inset;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    right: 1.5rem;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: white;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.7);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
  }

  .card .bottom .content .technical-list {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card .bottom .content .detail-item {
    color: white;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
  }

  .card .bottom .content .detail-item .dot {
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .tech-stack-icons {
    display: flex;
    gap: 0.8rem;
    color: rgba(255,255,255,0.6);
  }

  .card .bottom .bottom-bottom .button {
    background: white;
    color: ${props => props.accentColor};
    border: none;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 0.5rem 0.8rem;
    text-transform: uppercase;
  }

  /* HOVER STATES */
  .card:hover .bottom {
    top: 25%;
    border-radius: 60px 29px 29px 29px;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .bottom .content {
    opacity: 1;
    transition: all 0.5s ease 0.4s;
  }

  .card:hover .profile-pic {
    width: 80px;
    height: 80px;
    top: 20px;
    left: 20px;
    border-radius: 20px;
    z-index: 3;
    background: ${props => props.accentColor};
    box-shadow: 0 10px 30px -10px ${props => props.accentColor};
  }

  .card:hover .profile-pic .icon-container {
    color: white;
    transform: scale(0.8);
  }

  .card:hover .mail svg {
    stroke: #eee;
    opacity: 0.3;
  }
`;

export default StrydoSaaSFlow;