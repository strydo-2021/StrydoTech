import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Founded', value: '2012' },
  { label: 'Projects', value: '50+' },
  { label: 'Technologies', value: '25+' },
];

export const About = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F7F7F5] py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-[#5E296F] mb-4">
              Our Identity
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#111114] leading-[1.1] mb-8">
              We turn ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B7B84] via-[#5E296F] to-[#EB6621]">
                technology that works.
              </span>
            </h2>
            <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-5 mb-6 text-justify">
              <p>
                Strydo Technologies Pvt. Ltd., founded in 2012, is a technology power-house
                focused on transforming complex ideas into scalable digital solutions.
              </p>
              <p className="font-semibold text-[#111114]">
                At Strydo, we believe technology should be intelligent, practical, and built for growth.
              </p>
              <p className="font-bold text-[#5E296F]">
                Technology That Thinks. Solutions That Deliver.
              </p>
            </div>

            <div className="flex gap-12 my-12 border-l-2 border-gray-200 pl-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-[#111114]">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => navigate('/about')}
              variant="secondary"
              className="px-8 py-4 border-2 border-[#111114]/10 hover:bg-[#111114] hover:text-white transition-all font-bold"
              withArrow
            >
              Our Story
            </Button>
          </motion.div>

          {/* RIGHT VISUAL — BIG LOGO CIRCUIT ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.4]"
              style={{ backgroundImage: 'radial-gradient(#111114 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <svg
              viewBox="0 0 500 500"
              className="relative z-10 w-full h-full max-w-[550px] drop-shadow-2xl"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* The Full Strydo Brand Gradient */}
                <linearGradient id="strydoFullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B7B84" />   {/* Teal */}
                  <stop offset="30%" stopColor="#5E296F" />  {/* Purple */}
                  <stop offset="60%" stopColor="#BC2D3F" />  {/* Red */}
                  <stop offset="100%" stopColor="#EB6621" /> {/* Orange */}
                </linearGradient>

                {/* Wire 1 gradient: teal → purple (mirrors S upper arc) */}
                <linearGradient id="wire1Gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B7B84" />
                  <stop offset="100%" stopColor="#5E296F" />
                </linearGradient>

                {/* Wire 2 gradient: red → orange (mirrors S lower arc) */}
                <linearGradient id="wire2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BC2D3F" />
                  <stop offset="100%" stopColor="#EB6621" />
                </linearGradient>

                <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. LARGE ORBITAL RING */}
              <motion.circle
                cx="250" cy="250" r="220"
                fill="none"
                stroke="url(#strydoFullGradient)"
                strokeWidth="1"
                strokeDasharray="10 15"
                opacity="0.15"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />

              {/* 2. THE BIG STRYDO "S" 
                  Constructed as three parallel-ish paths to give it weight 
              */}
              <g filter="url(#logo-glow)">
                {/* Main thick path */}
                <motion.path
                  d="M 380 140 H 200 A 40 40 0 0 0 160 180 V 230 A 40 40 0 0 0 200 270 H 300 A 40 40 0 0 1 340 310 V 360 A 40 40 0 0 1 300 400 H 120"
                  fill="none"
                  stroke="url(#strydoFullGradient)"
                  strokeWidth="54"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Logo White Inner Highlights (The circuit lines) */}
                <motion.path
                  d="M 380 140 H 200 A 40 40 0 0 0 160 180 V 230 A 40 40 0 0 0 200 270 H 300 A 40 40 0 0 1 340 310 V 360 A 40 40 0 0 1 300 400 H 120"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </g>

              {/* 3. TERMINAL CIRCLES (From Logo) */}
              <circle cx="380" cy="140" r="12" fill="white" className="drop-shadow-md" />
              <circle cx="120" cy="400" r="12" fill="white" className="drop-shadow-md" />
              <circle cx="210" cy="210" r="8" fill="white" opacity="0.8" />
              <circle cx="290" cy="330" r="8" fill="white" opacity="0.8" />

              {/* 4. CIRCULATING SATELLITE BALL */}
              <path id="bigOrbit" d="M 250, 30 a 220,220 0 1,1 0,440 a 220,220 0 1,1 0,-440" fill="none" />

              <motion.g>
                <motion.circle
                  r="14"
                  fill="white"
                  filter="url(#logo-glow)"
                  style={{ offsetPath: "path('M 250, 30 a 220,220 0 1,1 0,440 a 220,220 0 1,1 0,-440')" }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  r="7"
                  fill="#5E296F"
                  style={{ offsetPath: "path('M 250, 30 a 220,220 0 1,1 0,440 a 220,220 0 1,1 0,-440')" }}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.g>

              {/* 5. ACCOMPANYING CIRCUIT WIRES — traced from sketch, hugging both hooks of the S */}

              {/* Wire 1 — now curls into a small hook above the old start point */}
{/* Wire 1 — teal → purple gradient, mirrors S upper arc */}
<motion.path
  d="M 155 95 A 55 55 0 0 0 100 150 V 230 A 100 100 0 0 0 200 330 H 285"
  fill="none"
  stroke="url(#wire1Gradient)"
  strokeWidth="22"
  strokeLinecap="round"
  opacity="0.85"
  initial={{ pathLength: 0, opacity: 0 }}
  whileInView={{ pathLength: 1, opacity: 0.85 }}
  transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
/>
<circle cx="155" cy="95" r="7" fill="white" stroke="#3B7B84" strokeWidth="3" />
<circle cx="285" cy="330" r="7" fill="white" stroke="#5E296F" strokeWidth="3" />

{/* Wire 2 — red → orange gradient, mirrors S lower arc */}
<motion.path
  d="M 210 210 H 300 A 100 100 0 0 1 400 310 V 400 A 45 45 0 0 1 355 445"
  fill="none"
  stroke="url(#wire2Gradient)"
  strokeWidth="22"
  strokeLinecap="round"
  opacity="0.85"
  initial={{ pathLength: 0, opacity: 0 }}
  whileInView={{ pathLength: 1, opacity: 0.85 }}
  transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }}
/>
<circle cx="210" cy="210" r="7" fill="white" stroke="#BC2D3F" strokeWidth="3" />
<circle cx="355" cy="445" r="7" fill="white" stroke="#EB6621" strokeWidth="3" />
            </svg>

            {/* Floating Glass Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 bg-white/90 backdrop-blur-xl px-6 py-4 rounded-[30px] shadow-2xl border border-white z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#3B7B84] to-[#5E296F] rounded-2xl flex items-center justify-center text-white font-bold">S</div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#5E296F]">Technology</p>
                <p className="text-sm font-bold text-[#111114]">That Thinks</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};