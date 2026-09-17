import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase, Settings, Sliders,
  Users, Zap
} from 'lucide-react';

const reasons = [
  {
    icon: Briefcase,
    title: 'Business-First Thinking',
    desc: 'We solve the business problem before we write the first line of code.',
    accent: '#3B7B84'
  },
  {
    icon: Settings,
    title: 'Modern Engineering',
    desc: 'Scalable, high-performance architectures using the latest tech stacks.',
    accent: '#5E296F'
  },
  {
    icon: Sliders,
    title: 'Custom Craftsmanship',
    desc: 'Tailor-made solutions designed specifically for your unique requirements.',
    accent: '#EB6621'
  },
  {
    icon: Users,
    title: 'Strategic Partnership',
    desc: 'We aren’t just vendors; we are your long-term technology partners.',
    accent: '#BC2D3F'
  }
];

// Each reason is pinned to a dot that sits ON one of the two rings, at a
// fixed angle. The ring itself rotates continuously (each ring its own
// direction/speed), carrying the dot and its connector line around with it.
// The label pill orbits at the same time but counter-rotates so its text
// always stays upright and readable, rather than spinning with the ring.
const deg2rad = (deg) => (deg * Math.PI) / 180;
const pointOnCircle = (angleDeg, radiusPct) => {
  const rad = deg2rad(angleDeg);
  return {
    x: 50 + radiusPct * Math.sin(rad),
    y: 50 - radiusPct * Math.cos(rad),
  };
};

const PILL_RADIUS = 48; // all pills orbit at the same distance from center

const orbits = [
  {
    id: 'outer',
    ringRadius: 40,   // matches inset: 10%
    duration: 45,
    direction: 1,     // clockwise
    items: [
      { reason: reasons[0], angle: -45 },
      { reason: reasons[2], angle: 135 },
    ],
  },
  {
    id: 'middle',
    ringRadius: 23,   // matches inset: 27%
    duration: 32,
    direction: -1,    // counter-clockwise
    items: [
      { reason: reasons[1], angle: 45 },
      { reason: reasons[3], angle: -135 },
    ],
  },
];

// Static layout for each label: where its connector dot sits on the ring
// (in SVG viewBox 0-100 space) and where its pill sits (in % of container).
// Angles are measured from 12 o'clock, clockwise.
// Reasons 0 & 2 → outer ring (radius 40). Reasons 1 & 3 → middle ring (radius 23).
const labelLayout = [
  // Reason 0 — top-left, outer ring at -45°
  {
    ring: pointOnCircle(-45, 40),
    pill: { x: pointOnCircle(-45, PILL_RADIUS).x, y: pointOnCircle(-45, PILL_RADIUS).y },
    pillTransform: 'translate(-100%, -100%)',
    floatY: [0, -8, 0],
    duration: 4.5,
    delay: 0,
  },
  // Reason 1 — top-right, middle ring at 45°
  {
    ring: pointOnCircle(45, 23),
    pill: { x: pointOnCircle(45, PILL_RADIUS).x, y: pointOnCircle(45, PILL_RADIUS).y },
    pillTransform: 'translate(0%, -100%)',
    floatY: [0, -6, 0],
    duration: 5,
    delay: 0.8,
  },
  // Reason 2 — bottom-right, outer ring at 135°
  {
    ring: pointOnCircle(135, 40),
    pill: { x: pointOnCircle(135, PILL_RADIUS).x, y: pointOnCircle(135, PILL_RADIUS).y },
    pillTransform: 'translate(0%, 0%)',
    floatY: [0, 8, 0],
    duration: 4,
    delay: 1.2,
  },
  // Reason 3 — bottom-left, middle ring at -135°
  {
    ring: pointOnCircle(-135, 23),
    pill: { x: pointOnCircle(-135, PILL_RADIUS).x, y: pointOnCircle(-135, PILL_RADIUS).y },
    pillTransform: 'translate(-100%, 0%)',
    floatY: [0, 6, 0],
    duration: 5.5,
    delay: 0.4,
  },
];

export const WhyStrydo = () => {
  return (
    <section className="bg-[#08080C] py-24 md:py-40 relative z-10 overflow-x-hidden overflow-y-visible border-t border-white/5">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-strydo-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          {/* LEFT CONTENT: BOLD HEADLINE & BENTO CARDS */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 text-[#EB6621] font-bold uppercase tracking-[0.4em] text-xs mb-6">
                <Zap size={14} fill="#EB6621" /> The Strydo Difference
              </div>

              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10">
                <span className="block leading-[1.05]">
                  Why choose
                </span>

                <span
                  className="block leading-[1.05] pb-3 text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #3B7B84, #5E296F, #EB6621)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Strydo?
                </span>
              </h2>

              <p className="text-gray-400 text-xl max-w-lg leading-relaxed">
                We bridge the gap between complex business challenges and high-performance digital engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white/[0.03] border border-white/5 p-6 rounded-[32px] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: `${reason.accent}20`, color: reason.accent }}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT: THE PREMIUM ORBITAL ENGINE */}
          {/* A perfect square, so every % -based position below lines up
              identically at every breakpoint - no separate mobile math. */}
          <div className="lg:col-span-6 relative mx-auto w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] aspect-square">

            {/* Outer Rotating Ring (ambient motion only, no dots - dots are
                added separately below, fixed to the labels) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-dashed border-white/10"
              style={{ inset: '10%' }}
            />

            {/* Middle Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-white/5"
              style={{ inset: '27%' }}
            />

            {/* Connector lines + dots: sit exactly on the outer ring path,
                each one tied to a reason's accent color, with a short line
                running out to its label. This is what makes the labels
                read as part of the orbit instead of floating separately. */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ zIndex: 15 }}
            >
              {reasons.map((reason, idx) => {
                const { ring, pill } = labelLayout[idx];
                return (
                  <g key={reason.title}>
                    <line
                      x1={ring.x} y1={ring.y}
                      x2={pill.x} y2={pill.y}
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth="0.4"
                      strokeDasharray="1.5 1.5"
                    />
                    <circle
                      cx={ring.x} cy={ring.y} r="1.6"
                      fill={reason.accent}
                      style={{ filter: `drop-shadow(0 0 4px ${reason.accent})` }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Inner Glowing Core */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] h-[34%] bg-white rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.1)] cursor-none z-10"
            >
              {/* Spinning Internal Glow */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-[#3B7B84] via-[#5E296F] to-[#EB6621] rounded-full blur-2xl"
              />

              {/* The "Brain" of the Engine */}
              <div className="relative z-10 w-full h-full bg-white rounded-full flex flex-col items-center justify-center border-[6px] md:border-[8px] border-[#08080C]">
                <span className="text-3xl md:text-5xl font-black text-[#111114] tracking-tighter">
                  S<span className="text-[#EB6621]">.</span>
                </span>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-1">
                  Engineered
                </span>
              </div>

              {/* Orbiting "Data Packets" - Small white dots */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                <circle cx="50%" cy="5%" r="3" fill="white" />
                <circle cx="95%" cy="50%" r="3" fill="white" />
              </svg>
            </div>

            {/* Floating Reason Labels — each one's inner corner is pinned to
                its connector dot's radius, so the pill reads as an
                extension of the orbit rather than a separate floating card. */}
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              const layout = labelLayout[idx];
              return (
                <motion.div
                  key={reason.title}
                  animate={{ y: layout.floatY }}
                  transition={{ duration: layout.duration, repeat: Infinity, ease: "easeInOut", delay: layout.delay }}
                  className="absolute z-20 bg-[#0D0D12] border border-white/10 pl-2 pr-3.5 py-1.5 rounded-full flex items-center gap-2 max-w-[150px] whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  style={{
                    left: `${layout.pill.x}%`,
                    top: `${layout.pill.y}%`,
                    transform: layout.pillTransform,
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${reason.accent}25`, color: reason.accent }}
                  >
                    <Icon size={11} />
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-wide leading-tight whitespace-normal">
                    {reason.title}
                  </span>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};